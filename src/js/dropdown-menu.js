export default function initDropDownMenu() {
    
    const linkMais = document.querySelector('[data-more]');
    const dropDownMenu = document.querySelector('[data-dropdown]');
    const dropDownItens = document.querySelectorAll('[data-dropdown] li');
    
    function toggleDropdown() {
        if(window.innerWidth >= 768) {
            linkMais.classList.toggle('active');
            dropDownMenu.classList.toggle('active');
            dropDownItens.forEach((e) => {
                e.classList.toggle('active');
            });
        }
    }
    
    function outClick(event) {
        if(event.target !== linkMais && event.target !== dropDownMenu) {
            linkMais.classList.remove('active');
            dropDownMenu.classList.remove('active');
            dropDownItens.forEach((e) => {
                e.classList.remove('active');
            });
        };
    }
    linkMais.addEventListener('click', toggleDropdown);
    window.addEventListener('click', outClick);
}
