export default function initToggleNavBar() {
    
    let hideNavBar = window.pageYOffset;
    function toggleNavBar(){
        let showNavBar = window.pageYOffset;
        if(showNavBar > hideNavBar) {
            document.querySelector('.container-menu').style.top = '-100%';
        } else {
            document.querySelector('.container-menu').style.top = '0';
        }
        hideNavBar = showNavBar;
    }
    window.addEventListener('scroll', toggleNavBar);
}