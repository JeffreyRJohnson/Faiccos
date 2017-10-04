import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".info__image__about"), "75%");
new RevealOnScroll($(".info__image__reservations"), "100%");
new RevealOnScroll($(".specials-reveal"), "60%");