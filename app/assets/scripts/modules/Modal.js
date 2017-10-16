import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
        var d = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("todays-day").innerHTML = days[d.getDay()];
        document.getElementById("todays-date").innerHTML = (new Date()).toString().split(' ').splice(1, 3).join(' ');
    }

    events() {
        // clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        // pushes the escape key 
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;