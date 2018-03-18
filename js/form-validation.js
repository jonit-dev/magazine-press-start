$(function () {

    $("#contact-form").submit(function (e) {

        $("#user-name ~ .invalid-field").hide();
        $("#user-email ~ .invalid-field").hide();
        $("#user-message ~ .invalid-field").hide();

        //get variables
        let userName = $('#user-name');
        let userEmail = $('#user-email');
        let userMessage = $('#user-message');

        if (userName.val().length === 0 || typeof userName.val() === 'undefined') {
            $("#user-name ~ .invalid-field").show();
            e.preventDefault();
            return false;
        } else if (!validateEmail(userEmail.val())) {
            $("#user-email ~ .invalid-field").show();
            e.preventDefault();
            return false;
        } else if (userMessage.val().length === 0) {
            $("#user-message ~ .invalid-field").show();
            e.preventDefault();
            return false;
        }

        //if everything is ok, submit form.

        // console.log("submitting form");


        // e.preventDefault();
        // return false;

    });


});


