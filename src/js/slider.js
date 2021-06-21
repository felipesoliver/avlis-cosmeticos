export default function slider() {
    const wrapper = document.querySelectorAll('[data-slider]');
    wrapper.forEach(initSlider);

    function initSlider(e) {
        const track = e.querySelector('[data-slider] .slider-track');
        const slides = track.querySelectorAll('[data-slider] .slider-items');
        const prevArrow = e.querySelectorAll('[data-slider] .slider-prev');
        const nextArrow = e.querySelectorAll('[data-slider] .slider-next');
        const dots = e.querySelectorAll('[data-slider] .slider-dots');
        
        let index = 0;

        function slideLeft() {
            
        }
        prevArrow.forEach( e => {
            e.addEventListener('click', slideLeft);
        });
        
        function slideRight() {
            index++;
            slides[index].classList.add('active');
            slides[index - 1].classList.remove('active');
            if(index === slides.length - 1) {
                index = - 1;
            }
            console.log(index);
        }
        nextArrow.forEach( e => {
            e.addEventListener('click', slideRight);
        });
        
        // function updateSlide() {
        //     return indexUpToDate = index;
        // }
    }        
}