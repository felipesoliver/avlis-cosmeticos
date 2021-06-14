export default function initSlide() {
    const slide = {
        wrapper: document.querySelectorAll('[data-modal="slide-wrapper"]'),
        track: document.querySelector('[data-modal="slide-wrapper"] ul'),
        items: document.querySelectorAll('[data-modal="slide-wrapper"] ul li')
    }

    console.log(slide);
}