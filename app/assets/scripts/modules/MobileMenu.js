import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader  = $('.site-header');
		this.menuIcon 	 = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.siteLogo    = $('.site-header__logo');
		this.headerBtn   = $('.site-header__btn');
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		console.log(this);
	}


	toggleTheMenu() {
		console.log(this);
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.siteLogo.toggleClass("site-header__logo-animate");
		this.headerBtn.toggleClass("btn--small");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;


//$('.site-header__menu-content').click(this.toggleClass("site-header__menu-content--is-visible")

//menuContent.events().