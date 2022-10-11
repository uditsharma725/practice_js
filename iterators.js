console.log('Iterators');

function fruitsIterators(values) {          //values is an array
    let nxtIndex = 0;
    //we will return a objcet:
    return {
        next: function() {                  //it is a function inside the object
            if(nxtIndex < values.length) {
                //we will return below object if the length is less than the nxtIndex:
                return {   
                    values: values[nxtIndex++],
                    done: false
                }    
            }
            else return {done: true}
        }
    }
}

const myArray = ['Apple', 'Grapes', 'Oranges', 'Banana'];
console.log(`My array is ${myArray}`);

//using the Iterator:
const fruits = fruitsIterators(myArray);
console.log(fruits.next().values);
console.log(fruits.next().values);
console.log(fruits.next().values);
console.log(fruits.next().values);
console.log(fruits.next().values);