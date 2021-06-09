export default function initAOS() {
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
            const context = this;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        }
    }
    
    const target = document.querySelectorAll('[data-aos]');
    const animationClass = 'animate';
    function animateOnScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target.forEach((e) => {
            if(windowTop > e.offsetTop) {
                e.classList.add(animationClass);
            } else {
                e.classList.remove(animationClass);
            }
        });
    }

    if(target.length) {
        window.addEventListener('scroll', debounce(function() {
            animateOnScroll();
        }));
    }
}
