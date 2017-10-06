import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".nav__burger");
        this.menuContent = $(".nav__row");
        this.reservationsLink = $("#reservations-link");
        this.aboutLink = $("#about-link");
        this.specialsLink = $("#specials-link");
        this.menuLink = $("#menu-section-link");
        this.desertLink = $("#deserts-link");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.reservationsLink.click(this.smoothScroll.bind(this, $("#reservations"), 4));
        this.aboutLink.click(this.smoothScroll.bind(this, $("#about"), 3));
        this.specialsLink.click(this.smoothScroll.bind(this, $("#specials"), 3));
        this.menuLink.click(this.smoothScroll.bind(this, $("#menu-section"), 1250));
        this.desertLink.click(this.smoothScroll.bind(this, $("#desert-menu"), 2.8));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("nav__row--open");
    }

    smoothScroll(navLink, placement) {
        $('html, body').animate({
            scrollTop: navLink.offset().top - $(window).height() / placement
        }, 2000);
    }

}

export default MobileMenu;