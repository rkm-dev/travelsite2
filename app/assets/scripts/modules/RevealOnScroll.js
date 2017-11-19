import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(elem, offset) {
		this.itemsToReveal = elem;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	// hide the elements in the features section while loading the site
	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	//adding scroll points using waypoints
	createWaypoints() {
		var thisKeyValue = this;

		this.itemsToReveal.each(function() {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				},
				offset: thisKeyValue.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;