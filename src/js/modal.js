export default function initModal() {

    const openBtn = document.querySelectorAll('[data-modal="open"]');
    const openBtnArray = Array.from(openBtn);
    const closeBtn = document.querySelectorAll('[data-modal="close"]');
    const closeBtnArray = Array.from(closeBtn);
    const containerModal = document.querySelector('[data-modal="container"]');
    const modal = document.querySelectorAll('[data-modal="modal"]');
    const modalArray = Array.from(modal);

    if(openBtnArray[0]) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerModal.classList.toggle('active');
            modalArray[0].classList.toggle('active');
        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                containerModal.classList.remove('active');
                modal.forEach((e) => {
                    e.classList.remove('active');
                });
            }
        }
        openBtnArray[0].addEventListener('click', toggleModal);
        closeBtnArray[0].addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);

    }
    
    if(openBtnArray[1]) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerModal.classList.toggle('active');
            modalArray[1].classList.toggle('active');
        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                containerModal.classList.remove('active');
                modal.forEach((e) => {
                    e.classList.remove('active');
                });
            }
        }
        openBtnArray[1].addEventListener('click', toggleModal);
        closeBtnArray[1].addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
    
    if(openBtnArray[2]) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerModal.classList.toggle('active');
            modalArray[2].classList.toggle('active');
        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                containerModal.classList.remove('active');
                modal.forEach((e) => {
                    e.classList.remove('active');
                });
            }
        }
        openBtnArray[2].addEventListener('click', toggleModal);
        closeBtnArray[2].addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
    
    if(openBtnArray[3]) {
        
        function toggleModal(event) {
            event.preventDefault()
            containerModal.classList.toggle('active');
            modalArray[3].classList.toggle('active');
        }

        function cliqueForaModal(event) {
            if(event.target === this) {
                containerModal.classList.remove('active');
                modal.forEach((e) => {
                    e.classList.remove('active');
                });
            }
        }
        openBtnArray[3].addEventListener('click', toggleModal);
        closeBtnArray[3].addEventListener('click', toggleModal);
        containerModal.addEventListener('click', cliqueForaModal);
    }
}

