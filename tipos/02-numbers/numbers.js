"use strict";
(function () {
    var avengers = 10;
    console.log(Number);
    var villans = 20;
    if (avengers < villans) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('123');
    console.log({ avengers: avengers });
})();
