const pokemon = require('./data.js');


const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }



// Exercise 1
//   console.dir(pokemon, { maxArrayLength: null })

// console.log(pokemon[58].name);

// Exercise 2 
// console.log(game)


// Exercise 3 

game.difficulty = 'Easy'
// console.log(game)




// Exercise 4

game.party.push(pokemon[3])
// console.log(game.party)


// Exercise 5

game.party.push(pokemon[25], pokemon[6], pokemon[64])
// console.log(game.party)



// Exercise 6


for (let gym of game.gyms) {
    if (gym.difficulty < 3) {
        gym.completed = true;
        }
  }
//   console.log(game.gyms)



// Exercise 7

game.party.splice(0, 1, pokemon[4])
// console.log(game.party)




// Exercise 8

// game.party.forEach(pokemon => {
//     console.log(pokemon.name);
//   });



// Exercise 9

// pokemon.forEach(pokemon => {
//     if (pokemon.starter === true) {
//       console.log(pokemon.name);  
//     }
//   });
  



// Exercise 10

// game.catchPokemon = function(pokemonObj){
//     game.party.push(pokemonObj)
   
// }; 

// console.log(game)
// game.catchPokemon(pokemon[3]);
// console.log(game)



// Exercise 11

// game.catchPokemon = function(pokemonObj){
//     game.party.push(pokemonObj)
//     game.items[1].quantity = (game.items[1].quantity - 1)
   
// }; 
// game.catchPokemon(pokemon[1])
// console.log(game)


// Exercise 12

// for (let gym of game.gyms) {
//     if (gym.difficulty < 6) {
//         gym.completed = true;
//         }
//   }
//   console.log(game.gyms)


// Exercise 13

// game.gymStatus = function(){
//     const gymTally = {
//         completed: 0,
//         incomplete: 0
//     }
//     for (let gym of game.gyms) {
//         if (gym.completed) {
//            gymTally.completed++;
//             } else {
//                 gymTally.incomplete++;
             
//             }
//       }
//       console.log(gymTally)
// }
// game.gymStatus()



// Exercise 14

// console.log(game.party)
game.partyCount = function() {
    console.log(game.party.length)
}
 
game.partyCount()



// Exercise 15

//  for (let gym of game.gyms) {
//     if (gym.difficulty < 8) {
//         gym.completed = true;
//     }
//  }
//  console.log(game.gyms)


// Exercise 16

console.log(game)


 



