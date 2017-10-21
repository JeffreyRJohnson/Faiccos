import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".info__image__about"), "75%");
new RevealOnScroll($(".info__image__reservations"), "100%");
new RevealOnScroll($(".specials-reveal"), "60%");
new RevealOnScroll($(".menu-section-reveal"), "60%");
var modal = new Modal();