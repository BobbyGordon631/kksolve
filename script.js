document.addEventListener("DOMContentLoaded", () => {
    const observerElements = document.querySelectorAll('.scroll-anim');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Element enters viewport: fade in and slide up
                entry.target.classList.add('show');
            } else {
                // Element leaves viewport: reset animation so it replays next time
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    observerElements.forEach((el) => observer.observe(el));
});