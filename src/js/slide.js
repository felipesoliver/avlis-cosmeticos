export default class Slide {
    constructor(wrapper, slide) {
        this.wrapper = document.querySelector(wrapper);
        this.slide = document.querySelectorAll(slide);
    }
}
const showSlide = new Slide('[data-modal="slide-wrapper"]','[data-modal="slide-items"]');
console.log(showSlide);