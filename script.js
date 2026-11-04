 document.addEventListener('DOMContentLoaded', () => {
        'use strict';

        // ====================
        // DOM REFERENCES
        // ====================
        const header = document.querySelector('.site-header');
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');
        const overlay = document.getElementById('mobileOverlay');
        const navLinks = document.querySelectorAll('.nav-link');
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        const contactForm = document.getElementById('contactForm');

        // ====================
        // 1. MOBILE NAVIGATION CONTROLLER
        // ====================
        
        /**
         * Toggles the mobile navigation menu open/closed.
         * Handles ARIA attributes, body scroll lock, and overlay.
         */
        function toggleMobileNav() {
            const isOpen = navMenu.classList.contains('open');

            if (isOpen) {
                closeMobileNav();
            } else {
                openMobileNav();
            }
        }

        function openMobileNav() {
            navMenu.classList.add('open');
            hamburger.classList.add('active');
            overlay.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';

            // Focus trap: focus the first nav link
            const firstLink = navMenu.querySelector('.nav-link');
            if (firstLink) firstLink.focus();

            // Add focus trap event listener
            navMenu.addEventListener('keydown', trapFocus);
        }

        function closeMobileNav() {
            navMenu.classList.remove('open');
            hamburger.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';

            // Remove focus trap
            navMenu.removeEventListener('keydown', trapFocus);
            hamburger.focus();
        }

        /**
         * Traps focus within the mobile nav when it's open.
         * Pressing Tab cycles through focusable elements; Escape closes the menu.
         */
        function trapFocus(e) {
            const focusableElements = navMenu.querySelectorAll('a, button');
            const firstEl = focusableElements[0];
            const lastEl = focusableElements[focusableElements.length - 1];

            if (e.key === 'Escape') {
                closeMobileNav();
                return;
            }

            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstEl) {
                        e.preventDefault();
                        lastEl.focus();
                    }
                } else {
                    if (document.activeElement === lastEl) {
                        e.preventDefault();
                        firstEl.focus();
                    }
                }
            }
        }

        // Hamburger click
        hamburger.addEventListener('click', toggleMobileNav);

        // Overlay click closes nav
        overlay.addEventListener('click', closeMobileNav);

        // Close on window resize (if going to desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
                closeMobileNav();
            }
        });

        // Close nav on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    closeMobileNav();
                }
            });
        });

        // ====================
        // 2. FAQ ACCORDION
        // ====================
        
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other FAQ items (single-open accordion)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        closeAccordionItem(otherItem);
                    }
                });

                // Toggle current item
                if (isActive) {
                    closeAccordionItem(item);
                } else {
                    openAccordionItem(item);
                }
            });
        });

        /**
         * Opens an accordion item with smooth height animation.
         * @param {HTMLElement} item - The FAQ item element
         */
        function openAccordionItem(item) {
            const answer = item.querySelector('.faq-answer');
            const inner = item.querySelector('.faq-answer-inner');
            const question = item.querySelector('.faq-question');

            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
            answer.setAttribute('aria-hidden', 'false');

            // Calculate the full height of the content
            const height = inner.offsetHeight;
            answer.style.maxHeight = height + 'px';
        }

        /**
         * Closes an accordion item with smooth height animation.
         * @param {HTMLElement} item - The FAQ item element
         */
        function closeAccordionItem(item) {
            const answer = item.querySelector('.faq-answer');
            const question = item.querySelector('.faq-question');

            item.classList.remove('active');
            question.setAttribute('aria-expanded', 'false');
            answer.setAttribute('aria-hidden', 'true');
            answer.style.maxHeight = '0';
        }

        // ====================
        // 3. DYNAMIC CATEGORY FILTERS
        // ====================

        /**
         * Initializes a filter system for a set of filter buttons and cards.
         * @param {string} filterSelector - CSS selector for filter buttons
         * @param {string} cardSelector - CSS selector for cards
         * @param {string} dataAttr - Data attribute name for category
         * @param {string} filterAttr - Data attribute on buttons for filter value
         */
        function initFilter(filterSelector, cardSelector, dataAttr, filterAttr) {
            const buttons = document.querySelectorAll(filterSelector);
            const cards = document.querySelectorAll(cardSelector);

            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const filterValue = btn.getAttribute(filterAttr);

                    // Update active state on buttons
                    buttons.forEach(b => {
                        b.classList.remove('active');
                        b.setAttribute('aria-selected', 'false');
                    });
                    btn.classList.add('active');
                    btn.setAttribute('aria-selected', 'true');

                    // Filter cards with animation
                    cards.forEach(card => {
                        const category = card.getAttribute(dataAttr);

                        if (filterValue === 'all' || category === filterValue) {
                            card.classList.remove('hidden');
                            // Trigger re-animation
                            card.classList.remove('fade-in');
                            void card.offsetWidth; // Force reflow
                            card.classList.add('fade-in');
                        } else {
                            card.classList.add('hidden');
                            card.classList.remove('fade-in');
                        }
                    });
                });
            });
        }

        // Initialize Technology Programs filter
        initFilter(
            '.filter-btn:not(.ds-filter)',
            '#servicesGrid .service-card',
            'data-category',
            'data-filter'
        );

        // Initialize Digital Services filter
        initFilter(
            '.ds-filter',
            '#dsGrid .ds-card',
            'data-ds-category',
            'data-ds-filter'
        );

        // ====================
        // 4. HEADER SCROLL EFFECTS & ACTIVE NAV
        // ====================

        const sections = document.querySelectorAll('section[id]');

        function onScroll() {
            const scrollY = window.scrollY;

            // Header shadow on scroll
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Scroll-to-top button visibility
            if (scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }

            // Active nav link based on scroll position
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 120;
                const sectionHeight = section.offsetHeight;
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // Initial call

        // Scroll to top
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // ====================
        // 5. SCROLL REVEAL ANIMATIONS
        // ====================

        const revealElements = document.querySelectorAll('.reveal');

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // ====================
        // 6. CONTACT FORM VALIDATION
        // ====================

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic validation
            if (!firstName || !lastName || !email || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission
            showFormMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
            contactForm.reset();
        });

        /**
         * Displays a temporary message below the form submit button.
         * @param {string} text - The message text
         * @param {string} type - 'success' or 'error'
         */
        function showFormMessage(text, type) {
            // Remove existing message if any
            const existing = contactForm.querySelector('.form-message');
            if (existing) existing.remove();

            const msg = document.createElement('div');
            msg.className = 'form-message';
            msg.textContent = text;
            msg.style.cssText = `
                padding: 14px 20px;
                border-radius: 10px;
                font-size: 0.9rem;
                font-weight: 500;
                margin-top: 8px;
                animation: fadeInUp 0.3s ease;
                ${type === 'success'
                    ? 'background: #dcfce7; color: #166534; border: 1px solid #bbf7d0;'
                    : 'background: #fef2f2; color: #991b1b; border: 1px solid #fecaca;'
                }
            `;
            contactForm.appendChild(msg);

            // Auto-remove after 5 seconds
            setTimeout(() => {
                if (msg.parentNode) {
                    msg.style.opacity = '0';
                    msg.style.transform = 'translateY(-10px)';
                    msg.style.transition = 'all 0.3s ease';
                    setTimeout(() => msg.remove(), 300);
                }
            }, 5000);
        }

        // ====================
        // 7. SMOOTH SCROLL FOR NAV LINKS
        // ====================

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

    }); // End DOMContentLoaded