import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalBtn = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalBtn = $('.modal__close');
		this.events(); 
	}

	events() {
		//clicking the open modal button
		this.openModalBtn.click(this.openModal.bind(this));

		//clicking the close modal button
		this.closeModalBtn.click(this.closeModal.bind(this));

		//pressing any key to escape modal
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		//escape key value = 27
		if(e.keyCode == 27) {
			this.closeModal()
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		//for the link button to stop its default behariour
		return false;
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;