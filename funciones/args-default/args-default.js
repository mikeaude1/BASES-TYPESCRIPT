"use strict";
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'No lastName').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'No lastName');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
