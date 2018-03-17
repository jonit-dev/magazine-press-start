$(function () {

    $("#contact-form").submit(function (e) {


        console.log("submitting form");

        //get variables
        let userName = $('#user-name');
        let userEmail = $('#user-email');
        let userMessage = $('#user-message');

        console.log(userName, userEmail, userMessage);

        if (userName.val().length === 0 || typeof userName.val() === 'undefined') {
            $("#user-name ~ .invalid-field").show();
            e.preventDefault();
            return false;
        }

        if(!validateEmail(userEmail.val())) {
            $("#user-email ~ .invalid-field").show();
            e.preventDefault();
            return false;
        }

        if(userMessage.val().length === 0 || typeof userMessage.val() === 'undefined') {
            $("#user-message ~ .invalid-field").show();
            e.preventDefault();
            return false;
        }
    });


});


