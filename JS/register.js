// Script 10.7- register.js
// This script validates a form.

// Function called when the form is submitted.
// Function validates the form data.
function validateForm(e) {
    'use strict';

    // Get the event object:
	if (typeof e == 'undefined') e = window.event;

    // Get form references:
	var firstName = U.$('firstName');
	var lastName = U.$('lastName');
	var email = U.$('email');
	var phone = U.$('phone');
	var city = U.$('city');
	var state = U.$('state');
	var zip = U.$('zip');
	var terms = U.$('terms');

	// Flag variable:
	var error = false;
	var success = true;

	//validate the last name 
	if (/^[A-Z \.\-']{2,20}$/i.test(firstName.value)) {
		removeErrorMessage('firstName');
		addSuccessMessage('firstName');
	} else {
		addErrorMessage('firstName', 'Please enter your first name.');
		removeSuccessMessage ('firstName');
		error = true;
		success = false;
	}
	//validate the last name 
	if (/^[A-Z \.\-']{2,20}$/i.test(lastName.value)) {
		removeErrorMessage('lastName');
		addSuccessMessage('lastName');
	} else {
		addErrorMessage('lastName', 'Please enter your last name.');
		removeSuccessMessage ('lastName');
		error = true;
		success = false;
	}
	//validate the city
	if (/^[A-Z \.\-']{2,20}$/i.test(city.value)) {
		removeErrorMessage('city');
		addSuccessMessage('city');
	} else {
		addErrorMessage('city', 'Please enter your/nearest city.');
		removeSuccessMessage('city');
		error = true;
		success = false;
	}
	// Validate the email address:
	if (/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,6}$/.test(email.value)) {
		removeErrorMessage('email');
		addSuccessMessage('email');
	} else {
		addErrorMessage('email', 'Please enter your email address.');
		removeSuccessMessage('email');
		error = true;
		success = false;
	}
	
	// Validate the phone number:
	if (/\d{3}[ \-\.]?\d{3}[ \-\.]?\d{4}/.test(phone.value)) {
		removeErrorMessage('phone');
		addSuccessMessage('phone');
	} else {
		addErrorMessage('phone', 'Please enter your phone number.');
		removeSuccessMessage('phone');
		error = true;
		success = false;
	}
	
	// Validate the state:
	if (state.selectedIndex != 0) {
		removeErrorMessage('state');
		addSuccessMessage('state');
	} else {
		addErrorMessage('state', 'Please select your state.');
		removeSuccessMessage('state');
		error = true;
		success = false;
	}
	
	// Validate the zip code:
	if (/^\d{4}(-\d{4})?$/.test(zip.value)) {
		removeErrorMessage('zip');
		addSuccessMessage('zip');
	} else {
		addErrorMessage('zip', 'Please enter your zip code.');
		removeSuccessMessage('zip');
		error = true;
		success = false;
	}

    // If an error occurred, prevent the default behavior:
	if (error) {

		// Prevent the form's submission:
	    if (e.preventDefault) {
	        e.preventDefault();
	    } else {
	        e.returnValue = false;
	    }
	    return false;
    
	}
    
} // End of validateForm() function.

// Function called when the terms checkbox changes.
// Function enables and disables the submit button.
function toggleSubmit() {
	'use strict';
    
	// Get a reference to the submit button:
	var submit = U.$('submit');
	
	// Toggle its disabled property:
	if (U.$('terms').checked) {
		submit.disabled = false;
	} else {
		submit.disabled = true;
	}
	
} // End of toggleSubmit() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// The validateForm() function handles the form:
    U.addEvent(U.$('theForm'), 'submit', validateForm);

	// Disable the submit button to start:
	U.$('submit').disabled = true;

	// Watch for changes on the terms checkbox:
    U.addEvent(U.$('terms'), 'change', toggleSubmit);

	// Enable tooltips on the phone number:
	U.enableTooltips('phone');
    
	// Enable tooltips on the First name:
	U.enableTooltips('firstName');
	
	// Enable tooltips on the Last name:
	U.enableTooltips('lastName');

	//Enable tooltips on the Email Address:
	U.enableTooltips('email');
	
	//enable tooltips on the City
	U.enableTooltips('city');

	//enable tooltips on the state
	U.enableTooltips('state');

	//enable tooltips for zip.
	U.enableTooltips('zip');
};