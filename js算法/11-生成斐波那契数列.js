/**
 * @return {Generator<number>}
 */
var fibGenerator = function*(n1 = 0,n2 =1) {
    let fir = 0,sec = 1
    yield fir;
    yield sec;
    while(true){
        //      5
        yield fir + sec;
        // 2  3       2    3
        [fir,sec] = [sec,fir + sec]
    }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);