import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".nav__burger");
        this.menuContent = $(".nav__row");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("nav__row--open");
    }

}

export default MobileMenu;