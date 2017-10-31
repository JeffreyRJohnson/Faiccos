import $ from 'jquery';
import 'jquery-validation';



class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.reservationButton = $(".modal__res-button");
        this.processingButton = $(".modal__wait-button").hide();
        this.events();
        var d = new Date();
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        document.getElementById("todays-day").innerHTML = days[d.getDay()];
        document.getElementById("todays-date").innerHTML = (new Date()).toString().split(' ').splice(1, 3).join(' ');
        $.validator.addMethod("phoneUS", function(phone_number, element) {
            phone_number = phone_number.replace(/\s+/g, "");
            return this.optional(element) || phone_number.length > 9 &&
                phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/);
        }, "Please specify a valid phone number");


        this.reservationform = $("#reservationform").validate({
            rules: {
                fname: "required",
                lname: "required",
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    phoneUS: true
                },
                guests: "required",
                time: "required"
            },

            submitHandler: function(form) {
                form.submit();
                alert('you now have a table reserved for ' + document.getElementById("todays-day").innerHTML + '  ' + document.getElementById("todays-date").innerHTML);

            }

        });
    }

    events() {
        // clicking the open modal button
        this.openModalButton.click(this.openModal.bind(this));
        // clicking the x close modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        // pushes the escape key 
        $(document).keyup(this.keyPressHandler.bind(this));
        // clicking the submit button
        // this.reservationButton.click(this.submitReservation.bind(this));
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