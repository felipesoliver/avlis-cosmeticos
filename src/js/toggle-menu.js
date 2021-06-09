export default function initToggleNavBar() {
    const navTrack = document.querySelector('.container-menu');
    let hideNavBar = window.pageYOffset;
    function toggleNavBar(){
        let showNavBar = window.pageYOffset;
        if(showNavBar > hideNavBar) {
            navTrack.classList.add('hidden');
        } else {
            navTrack.classList.remove('hidden');
        }
        hideNavBar = showNavBar;

        if(showNavBar > 0) {
            navTrack.classList.add('increased');
        } else {
            navTrack.classList.remove('increased');
        }
    }
    window.addEventListener('scroll', toggleNavBar);
}