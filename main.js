// ===== Smooth Scroll Function =====
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== Purchase Handler =====
function handlePurchase(planName) {
    alert(`You selected the ${planName} plan. Proceeding to checkout...\n\nThis would redirect to your payment processor.`);
    // In production, this would redirect to your payment gateway (Stripe, PayPal, etc.)
    // Example: window.location.href = 'https://checkout.example.com?plan=' + encodeURIComponent(planName);
}

// ===== Scroll Animation for Elements =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with scroll animation
document.querySelectorAll('.feature-card, .pricing-card, .how-it-works, .image-slider-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    // Smooth scroll on hash links
});

// ===== Analytics Tracking =====
function trackEvent(eventName, eventData) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.querySelectorAll('[onclick]').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_click', {
            button_text: this.textContent,
            button_type: this.className
        });
    });
});

// ===== Accessibility: Focus Management =====
document.addEventListener('focusin', (e) => {
    if (e.target.matches('a, button, input, textarea, select')) {
        e.target.style.outline = `2px solid var(--primary-color)`;
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', (e) => {
    e.target.style.outline = '';
});
