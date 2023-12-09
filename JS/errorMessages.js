// Script 10.1 - errorMessages.js
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
    'use strict';

    // Get the form element reference:
    var elem = document.getElementById(id);

    // Define the new span's ID value:
    var newId = id + 'Error';

    // Check for the existence of the span:
    var span = document.getElementById(newId);
    if (span) {
        // Update the existing span's content
        span.innerHTML = '&#10060; ' + msg; // Add "x" symbol before the message
    } else {
        // Create a new span:
        span = document.createElement('span');
        span.id = newId;
        span.className = 'error';
        span.innerHTML = '&#10060; ' + msg; // Add "x" symbol before the message

        // Add the span to the parent:
        elem.parentNode.appendChild(span);
        elem.previousSibling.className = 'error';
    }
}

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
   	'use strict';

    // Get a reference to the span:
    var span = document.getElementById(id + 'Error');
	if (span) {
    
	    // Remove the class from the label:
	    span.previousSibling.previousSibling.className = 'success';
    
	    // Remove the span:
	    span.parentNode.removeChild(span);

	} else {

    }
    
} // End of removeErrorMessage() function.
function addSuccessMessage (id,msg) {
    'use strict';

    //get the form element referect:
    var elem = document.getElementById(id);

    //define the new span's ID value:
    var newID = id + 'Success';

    //check for the existence of the span:
    var span = document.getElementById(newID);
    if (span) {
        
    //update the existing spam
    span.innerHTML = '&#10004';
    } else {
    // Create a new span:
        span = document.createElement('span');
        span.id = newID;
        span.className = 'success';
        span.innerHTML = '&#10004';
    
    //add the span to parent
    elem.parentNode.appendChild(span);
    elem.previousElementSibling.className = 'success';
    }
}
function removeSuccessMessage(id) {
    'use strict';

 // Get a reference to the span:
 var span = document.getElementById(id + 'Success');
 if (span) {
 
     // Remove the class from the label:
     span.previousSibling.previousSibling.className = 'error';
 
     // Remove the span:
     span.parentNode.removeChild(span);

 } else {

 }
 
} // End of removeSuccessMessage() function.