# Poke-Doke - A node, express, canvas JS browser game using Pokemon API 2.0

## To run:

   * Run `npm install` in the terminal at the project's root directory to install dependencies.
   
   * Run `./mongod` to start the database and **leave this tab running** (open a new tab).
   
   * Run `mongo < seeds.js` to seed the database.
   
   * Run `npm start` to start the applicaiton. **Leave this tab running**
     
   * `cd client`into the client folder and run `webpack -w` **Leave this tab running**
   

## To play:

Open your browser and enter [http://localhost:3000/] as the url then hide browser's toolbar and enter fullscreen mode.


## API:
The api can be viewed at [http://localhost:3000/sourcePokemons]


## How the game works:

Selected data is saved from the API to the mongoDB database & our own API is then created from this data.

You can use either the arrow keys on the keyboard or the buttons on the screen to control your character.

Choose your Pokemon, battle & capture wild pokemon by winning fights in the grass with a 10% chance of triggering a battle. 

Damage is calculated using a base value, API attack & defense stats and a random influence.

Once a pokemon is beaten it is added to your Pokedex which you can access at your house.

Entering your house heals your Pokemon & allows you to swap Pokemon between your hand and the pokedex.

You can carry up to 6 Pokemon in your hand.

There are two gyms with three Pokemon of a certain type (electric and grass).

You can see miniture icons of the gym owner's & the player's Pokemon in hand.

Once a pokemon is beaten the the next pokemon is used and the icon swaps and greys out.

Gym pokemon cannot be captured.

You can talk to the character on the map and the characters in the gyms (press A on the window to the right of the gym doors).

Once you beat the gyms you can talk to the gym characters again to receive a badge.

Once you beat all the pokemon you will win the game and get the winning screen.

There is also a password protected cheat area which grants you all the Pokemon.
