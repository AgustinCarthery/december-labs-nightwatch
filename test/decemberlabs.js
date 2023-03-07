
describe('Decemberlabs Get in Touch form', function () {
	let homePage = browser.page.homepage(); // first page-object

	it('should open December Labs "Get in Touch" modal', function (browser) {
		homePage
			.navigate()
			.click('@menuBtn')
			.click('@getInTouchBtn')
			.assert.visible('@getInTouchModal')
			.assert.textEquals('@contactFormHeading', 'Get In Touch');
	});

	it('check for input validations presence', function (browser) {
		homePage
			.click('@sendBtn')
			.assert.hasClass('@nameInput', 'wpforms-error')
			.assert.hasClass('@emailInput', 'wpforms-error')
			.assert.hasClass('@companyInput', 'wpforms-error')
			.assert.hasClass('@messageInput', 'wpforms-error');
  });
  
  it('error class should disappear when filling fields', function (browser) {
		homePage
      .fillForm('TestUser', 'test@decemberlabs.com', 'john doe enterprises', 'This is a test')
      .assert.not.hasClass('@nameInput', 'wpforms-error')
			.assert.not.hasClass('@emailInput', 'wpforms-error')
			.assert.not.hasClass('@companyInput', 'wpforms-error')
			.assert.not.hasClass('@messageInput', 'wpforms-error');
  });
});
