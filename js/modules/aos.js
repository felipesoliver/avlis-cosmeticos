export default function initAOS() {
    
    const target = document.querySelectorAll('[data-aos]');
    
    function animateOnScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target.forEach((e) => {
            if(windowTop > e.offsetTop) {
                e.classList.add('animate');
            } else {
                e.classList.remove('animate');
            }
        })
    }
    window.addEventListener('scroll', animateOnScroll);
}
