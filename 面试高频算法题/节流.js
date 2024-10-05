const throttle = function (fn, time = 0.5) {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            fn.apply(this, args);
            timer = null;
        }, time * 1000)
    }
}