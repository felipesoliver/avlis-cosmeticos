export default function initDropDownMenu() {
    
    const linkMais = document.querySelector('.pagelist-items p');
    const dropDownMenu = document.querySelector('.dropdown-menu');
    const dropDownItens = document.querySelectorAll('.dropdown-items');
    
    function onMouseOver() {
        linkMais.classList.add('active');
        dropDownMenu.classList.add('active');
        dropDownItens.forEach((e) => {
            e.classList.add('active');
        });
    }
    function onMouseLeave() {
        linkMais.classList.remove('active');
        dropDownMenu.classList.remove('active');
        dropDownItens.forEach((e) => {
            e.classList.remove('active');
        });
    }
        
    linkMais.addEventListener('mouseover', onMouseOver);
    dropDownMenu.addEventListener('mouseleave', onMouseLeave);
    
}
