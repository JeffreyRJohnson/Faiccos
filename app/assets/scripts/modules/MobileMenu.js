import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".fa.fa-bars");
        this.menuIconClose = $(".primary-nav__burger .fa.fa-times").hide();
        this.menuContent = $(".primary-nav__row");
        this.reservationsLink = $("#reservations-link");
        this.aboutLink = $("#about-link");
        this.specialsLink = $("#specials-link");
        this.menuLink = $("#menu-section-link");
        this.desertLink = $("#deserts-link");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        // this.reservationsLink.click(this.smoothScroll.bind(this, $("#reservations"), 4));
        this.aboutLink.click(this.smoothScroll.bind(this, $("#about"), 3));
        this.specialsLink.click(this.smoothScroll.bind(this, $("#specials"), 3));
        this.menuLink.click(this.smoothScroll.bind(this, $("#menu-section"), 1100));
        this.desertLink.click(this.smoothScroll.bind(this, $("#desert-menu"), 2.8));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("primary-nav__row--open");
        this.menuIcon.toggleClass("fa fa-times");
        this.menuIcon.toggleClass("fa fa-bars");
    }



    smoothScroll(navLink, placement) {
        $('html, body').animate({
            scrollTop: navLink.offset().top - $(window).height() / placement
        }, 2000);
    }

}

export default MobileMenu;