console.log("introduction to asynchronous programming");

setTimeout(()=> {
    for(let i=0; i<10; i++) {
        const element = i;
        console.log(`This is the index-> ${element}`);
    }
},1000)

console.log(`done printing`);