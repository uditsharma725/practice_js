console.log(`exercise 3`);

let jokesArr = [`Why did an old man fall in a well? <br />
Because he couldn’t see that well!`,
`Why did the actor fall through the floorboards? <br />
They were going through a stage!`,
`Why did a scarecrow win a Nobel prize? <br />
He was outstanding in his field!`,
`Why are peppers the best at archery? <br />
Because they habanero!`,
`What did the duck say after she bought chapstick? <br />
Put it on my bill!`,
`What do you call a fake noodle? <br />
An impasta!`,
`What did the three-legged dog say when he walked into a saloon? <br />
“I’m looking for the man who shot my paw!”`,
`How do you tell the difference between a bull and a cow? <br />
It is either one or the udder!`,
`What’s red and smells like blue paint? <br />
Red paint!`,
`What’s the difference between a hippo and a Zippo? <br />
One is very heavy, the other is a little lighter!`,
`What kind of dog does a magician have? <br />
A Labracadabrador!`,
`What do you call an elephant that doesn’t matter? <br />
An irrelephant!`,
`What do you get when you cross a rabbit with shellfish? <br />
An oyster bunny!`,
`Where do polar bears keep their money? <br />
In a snow bank!`,
`Why did the pony get sent to his room? <br />
He wouldn’t stop horsing around!`,
`Where do cows go on Friday nights? <br />
They go to the moo-vies!`,
`Why couldn't the pony sing “Happy Birthday?” <br />
Because she was just a little hoarse!`,
`How do you make an octopus laugh? <br />
With ten-tickles!`,
`How do you keep a bull from charging? <br />
Take away its credit card!`,
`Why can’t a leopard hide? <br />
Because he’s always spotted!`,
`What do you get when you cross a snail with a porcupine? <br />
A slowpoke!`,
`What do frogs order at fast-food restaurants? <br />
French flies!`,
`What do you get from a pampered cow? <br />
Spoiled milk!`,
`What do you call an alligator who solves mysteries? <br />
An investigator!`,
`Why is a snake difficult to fool? <br />
You can’t pull its leg!`,
`What kind of socks do grizzlies wear? <br />
None, they have bear feet!`,
`What did the dog say when it sat on sandpaper? <br />
"Ruff!"`,
`What's a cat's favorite dessert? <br />
Chocolate mouse!`,
`What fish only swims at night? <br />
Starfish!`,
`What does a triceratops sit on? <br />
Its tricera-bottom!`];

let arrLength = jokesArr.length;

let displayJokes = document.getElementById("jokes");
document.querySelector("#btn").addEventListener('click', function() {
    let ran = Math.floor(Math.random()*arrLength);
    displayJokes.innerHTML = jokesArr[ran];
});