import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();

		this.pageSection = $(".page-section");
		this.headerLinks = $(".primary-nav a")
		this.createPageSectionWayponts();
		this.addSmoothScrolling();

		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function() {
			Waypoint.refreshAll();
		});
	}

	createHeaderWaypoint() {
		var thisKeyValue = this;
		new Waypoint({
			element: this.headerTriggerElement[0],
			handler: function(direction) {
				if(direction == "down"){
					thisKeyValue.siteHeader.addClass('site-header--dark');
				} else {
					thisKeyValue.siteHeader.removeClass('site-header--dark');
				}
			}
		});
	}

	createPageSectionWayponts() {
		var thisKeyValue = this;
		this.pageSection.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "down") 
					{
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						thisKeyValue.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if(direction == "up") 
					{
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						thisKeyValue.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 
				},
				offset: "-40%"
			});
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}
}

export default StickyHeader;