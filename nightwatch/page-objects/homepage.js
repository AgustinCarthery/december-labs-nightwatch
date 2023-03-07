const homepageCommands = {
	fillForm(contactName, contactEmail, companyName, message) {
		return this
			.setValue('@nameInput', contactName)
			.setValue('@emailInput', contactEmail)
			.setValue('@companyInput', companyName)
			.setValue('@messageInput', message);
	},
};

module.exports = {
	url: 'https://inhouse.decemberlabs.com/',

	commands: [homepageCommands],

	elements: {
		menuBtn: 'a.btn_mobile',
		getInTouchBtn: '#menu-item-846 > a',
		getInTouchModal: '.dl-getintouch-modal',
		contactFormHeading: '.contact-form-heading.center',
		sendBtn: '#wpforms-submit-872',
		nameInput: '#wpforms-872-field_0',
		emailInput: '#wpforms-872-field_1',
		companyInput: '#wpforms-872-field_6',
		messageInput: '#wpforms-872-field_2',
	},
};
