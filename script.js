document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Smart Parallax Scroll Effect ---
    const heroBg = document.getElementById('hero-bg');
    const parallaxShapes = document.querySelectorAll('.parallax-shape');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        // Move the hero background
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
        }

        // Move and rotate the floating background shapes relative to their specific section
        parallaxShapes.forEach(shape => {
            let speed = parseFloat(shape.getAttribute('data-speed'));
            
            // Get the parent section so we track exactly where it belongs
            let parent = shape.closest('.section');
            let parentOffset = parent ? parent.offsetTop : 0;
            
            // Calculate movement relative to the section, not just the top of the page
            let relativeScroll = scrollY - parentOffset;
            
            shape.style.transform = `translateY(${relativeScroll * speed}px) rotate(${scrollY * 0.05}deg)`;
        });
    });

    // --- 2. Element Fade-In Intersection Observer ---
    const observerElements = document.querySelectorAll('.scroll-anim');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    observerElements.forEach((el) => observer.observe(el));
});
