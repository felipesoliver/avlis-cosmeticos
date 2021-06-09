export default function initCollapse() {
    const collapseHead = document.querySelectorAll('[data-collapse] h4');

    collapseHead[0].classList.add('active');
    collapseHead[0].nextElementSibling.classList.add('active');

    function collapse() {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    }
    collapseHead.forEach(e => {
        e.addEventListener('click', collapse);
    });
}