console.log('Generators');

function* numbersGen() {        //will only yield a number when we will call it
    let i=0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(true) {
        yield i++;
        // yield (i++).toString();      //converting from integer to string
    }
}

const gen = numbersGen();
console.log(gen.next());            //next method
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);