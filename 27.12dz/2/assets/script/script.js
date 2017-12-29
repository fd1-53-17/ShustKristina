    min(12, 33, 2222, 9, 3, 43);

    function min() {
        var a;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] < a || a == undefined) {
                a = arguments[i];
            }
        }
        console.log('min:' + a);
    }

    max(12, 33, 2222, 9, 3, 43);

    function max() {
        var b;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] > b || b == undefined) {
                b = arguments[i];
            }
        }
        console.log('max:' + b);
    }
    