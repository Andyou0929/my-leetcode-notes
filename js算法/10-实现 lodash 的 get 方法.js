function myGet(object, path, defaultValue) {
    return (
        path
        .toString()
        .split(/[\[,\.]/)
        .reduce((o, k) => {
            console.log(o, o[k]);
            return o && o[k]
        }, object) ?? defaultValue
    );
}
const object = {
    a: [{
        b: {
            c: 3
        }
    }]
};
console.log(myGet(object, "a[0].b.c"));