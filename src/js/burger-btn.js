export default function initBurgerBtn() {
    const button = document.querySelector('[data-burger-btn]');
    const pageList = document.querySelector('[data-pagelist]');
    const pageListLinks = document.querySelectorAll('[data-pagelist] a');

    button.addEventListener('click', () => {
        if(button) {
            button.classList.toggle('is-active');
            pageList.classList.toggle('is-active');
        }
    });

    pageListLinks.forEach((e) => {
        e.preventDefault
        e.addEventListener('click', () => {
            button.classList.remove('is-active');
            pageList.classList.remove('is-active');
        });
    });
}