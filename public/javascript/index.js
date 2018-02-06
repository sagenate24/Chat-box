(function () {
    'use strict'
    document.querySelector("#userName").addEventListener("input", checkUserFunction);
    document.querySelector("#userPassword").addEventListener("input", checkPasswordFunction);

    var userName = "sage";
    var password = "page";
    var checkBox = document.querySelector("#isTheInputRight");

    function checkUserFunction() {
        var inputUser = document.querySelector("#userName");
        var userValue = inputUser.value;

        if (userValue === userName) {
            checkBox.innerHTML = ('');
        }
        else {
            checkBox.innerHTML = ('<h5>Invalid username</h5>');
        }
    }

    function checkPasswordFunction() {
        var inputPassword = document.querySelector("#userPassword");
        var passValue = inputPassword.value;

        if (passValue === password) {
            checkBox.innerHTML = (' ');
        }
        else {
            checkBox.innerHTML = ('<h5>HINT: It rhymes with the first</h5>');
        }
    }
})();