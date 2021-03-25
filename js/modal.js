export default function initModal() {

    const openFirstBtn = document.querySelector('[data-modal="first-open-btn"]');
    const openSecoundBtn = document.querySelector('[data-modal="secound-open-btn"]');
    const openThirdBtn = document.querySelector('[data-modal="third-open-btn"]');
    const openFourthBtn = document.querySelector('[data-modal="fourth-open-btn"]');
    const closeBtn = document.querySelectorAll('[data-modal="close"]');
    const closeBtnArray = Array.from(closeBtn);
    const containetModal = document.querySelectorAll('[data-modal="container"]');
    const containerArray = Array.from(containetModal);
    
    if(openFirstBtn && closeBtn && containetModal) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerArray[0].classList.toggle('active');
        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                toggleModal(event);
            }
        }
        openFirstBtn.addEventListener('click', toggleModal);
        closeBtnArray[0].addEventListener('click', toggleModal);
        containerArray[0].addEventListener('click', cliqueForaModal);
    }
    
    if(openSecoundBtn && closeBtn && containetModal) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerArray[1].classList.toggle('active');

        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                toggleModal(event);
            }
        }
        openSecoundBtn.addEventListener('click', toggleModal);
        closeBtnArray[1].addEventListener('click', toggleModal);
        containerArray[1].addEventListener('click', cliqueForaModal);
    }
    
    if(openThirdBtn && closeBtn && containetModal) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerArray[2].classList.toggle('active');
        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                toggleModal(event);
            }
        }
        openThirdBtn.addEventListener('click', toggleModal);
        closeBtnArray[2].addEventListener('click', toggleModal);
        containerArray[2].addEventListener('click', cliqueForaModal);
    }
    
    if(openFourthBtn && closeBtn && containetModal) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerArray[3].classList.toggle('active');
        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                toggleModal(event);
            }
        }
        openFourthBtn.addEventListener('click', toggleModal);
        closeBtnArray[3].addEventListener('click', toggleModal);
        containerArray[3].addEventListener('click', cliqueForaModal);
    }
}

