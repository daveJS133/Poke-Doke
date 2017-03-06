// var Game = require('./game');

var HomeUI = function() {

}

HomeUI.prototype = {
  atHome: function(game, homeScreen) {
    ////////////// REVIVE FAINTED POKEMONS //////////////////////////////////////////////////////
    game.revivePokemons(game.player);
    //////////////// SETUP HTML //////////////////////////////////////////////////////////////////
    homeScreen.innerHTML = "";
    var welcomeAtHome = document.createElement('p');
    welcomeAtHome.innerText = "Welcome home " + game.player.name +"! Here you can take a rest and let your Pokémon rest too. Once you leave home, your Pokémon will be again strong and healthy. Press A to hit the world!";
    homeScreen.appendChild(welcomeAtHome);
    //////////////////////// POKEDEX SELECTION ///////////////////////////////////////////////////
    var selectionContainer = document.createElement('div');
    homeScreen.appendChild(selectionContainer);
    var pokedexSelection = document.createElement('select');
    pokedexSelection.className = 'selection';
    var populateSelectionDropDown = function () {
      if (game.player.pokedex.length >=1) {
        game.player.pokedex.sort(function(a, b) {
          return a.id - b.id;
        });
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Choose a Pokémon from Pokedex";
        selectionContainer.appendChild(selectionAdvice);
        selectionContainer.appendChild(pokedexSelection);
        var predefinedPokeOption = document.createElement('option');
        predefinedPokeOption.innerText = "...";
        pokedexSelection.innerHTML = "";
        pokedexSelection.appendChild(predefinedPokeOption);
        for(var each of game.player.pokedex) {
          var pokeOption = document.createElement('option');
          pokeOption.innerText = each.name;
          pokedexSelection.appendChild(pokeOption);
        }
      }
      else {
        selectionContainer.innerHTML = "";
        var selectionAdvice = document.createElement('p');
        selectionAdvice.innerText = "Pokedex empty";
        selectionContainer.appendChild(selectionAdvice);
      }
    }

    populateSelectionDropDown();

    var pokemonDetails = document.createElement('div');
    homeScreen.appendChild(pokemonDetails);

    var handleSelectChange = function(event) {
      pokemonDetails.innerHTML="";
      var p = document.createElement('p');
      var img = document.createElement('img');
      var nameOfSelectedPokemon = "";
      for(var each of game.player.pokedex) {
        if (each.name === this.value) {
          p.innerText += "Name: " + each.name;
          nameOfSelectedPokemon = each.name;
          p.innerText += "\nHP: " + each.hp;
          p.innerText += "\nAttack: " + each.attack;
          p.innerText += "\nDefense: " + each.defense;
          img.src = each.front_picture;
        }
      }
      pokemonDetails.appendChild(img);
      pokemonDetails.appendChild(p);
      var addToHandButton = document.createElement('button');
      addToHandButton.innerText = "Add to hand";
      addToHandButton.className = 'selection';
      pokemonDetails.appendChild(addToHandButton);

      var handleButtonClick = function(){
        if (game.player.pokedex.length >= 1) {
          for(var i = 0; i < game.player.pokedex.length; i++) {
            if (game.player.pokedex[i].name === nameOfSelectedPokemon) {
              if (game.player.pokemonOnHand.length < 6) {
                game.player.pokemonOnHand.push(game.player.pokedex[i]);
                game.player.pokedex.splice(i, 1);
                pokemonDetails.innerHTML="";
              }
            }
          }
        }
        populateSelectionDropDown();
        generatePokemonOnHandOnScreen();
      }
      addToHandButton.onclick = handleButtonClick;
      console.log('event', event);
    }

    pokedexSelection.onchange = handleSelectChange;
    //////////////// AT HOME END OF POKEDEX SELECTION /////////////////////////////

    //////////////// AT HOME START OF POKEMON ON HAND /////////////////////////////
    var handShowContainer = document.createElement('div');
    homeScreen.appendChild(handShowContainer);
    var generatePokemonOnHandOnScreen = function() {

      handShowContainer.innerHTML = "";
      var pok0img = document.createElement('img');
      var pok1img = document.createElement('img');
      var pok2img = document.createElement('img');
      var pok3img = document.createElement('img');
      var pok4img = document.createElement('img');
      var pok5img = document.createElement('img');
      var populatePokemonPics = function() {
        handShowContainer.innerHTML = "";
        if (game.player.pokemonOnHand.length === 6) {
          pok0img.src = game.player.pokemonOnHand[0].front_picture;
          pok0img.onload = function() {
            handShowContainer.appendChild(pok0img);
          }
          pok1img.src = game.player.pokemonOnHand[1].front_picture;
          handShowContainer.appendChild(pok1img);
          pok2img.src = game.player.pokemonOnHand[2].front_picture;
          handShowContainer.appendChild(pok2img);
          pok3img.src = game.player.pokemonOnHand[3].front_picture;
          handShowContainer.appendChild(pok3img);
          pok4img.src = game.player.pokemonOnHand[4].front_picture;
          handShowContainer.appendChild(pok4img);
          pok5img.src = game.player.pokemonOnHand[5].front_picture;
          handShowContainer.appendChild(pok5img);
        }
        else if (game.player.pokemonOnHand.length === 5) {
          pok0img.src = game.player.pokemonOnHand[0].front_picture;
          handShowContainer.appendChild(pok0img);
          pok1img.src = game.player.pokemonOnHand[1].front_picture;
          handShowContainer.appendChild(pok1img);
          pok2img.src = game.player.pokemonOnHand[2].front_picture;
          handShowContainer.appendChild(pok2img);
          pok3img.src = game.player.pokemonOnHand[3].front_picture;
          handShowContainer.appendChild(pok3img);
          pok4img.src = game.player.pokemonOnHand[4].front_picture;
          handShowContainer.appendChild(pok4img);
        }
        else if (game.player.pokemonOnHand.length === 4) {
          pok0img.src = game.player.pokemonOnHand[0].front_picture;
          handShowContainer.appendChild(pok0img);
          pok1img.src = game.player.pokemonOnHand[1].front_picture;
          handShowContainer.appendChild(pok1img);
          pok2img.src = game.player.pokemonOnHand[2].front_picture;
          handShowContainer.appendChild(pok2img);
          pok3img.src = game.player.pokemonOnHand[3].front_picture;
          handShowContainer.appendChild(pok3img);
        }
        else if (game.player.pokemonOnHand.length === 3) {
          pok0img.src = game.player.pokemonOnHand[0].front_picture;
          handShowContainer.appendChild(pok0img);
          pok1img.src = game.player.pokemonOnHand[1].front_picture;
          handShowContainer.appendChild(pok1img);
          pok2img.src = game.player.pokemonOnHand[2].front_picture;
          handShowContainer.appendChild(pok2img);
        }
        else if (game.player.pokemonOnHand.length === 2) {
          pok0img.src = game.player.pokemonOnHand[0].front_picture;
          pok0img.onload = function() {
            handShowContainer.appendChild(pok0img);
          }
          pok1img.src = game.player.pokemonOnHand[1].front_picture;
          pok1img.onload = function() {
            handShowContainer.appendChild(pok1img);
          }
        }
        else if (game.player.pokemonOnHand.length === 1) {
          pok0img.src = game.player.pokemonOnHand[0].front_picture;
          pok0img.onload = function() {
            handShowContainer.appendChild(pok0img);
          }
        }
      }
      
      populatePokemonPics();

      pok0img.onclick = function() {
        var pokemonToBeMoved = game.player.pokemonOnHand[0];
        game.player.pokedex.push(pokemonToBeMoved);
        game.player.pokemonOnHand.splice(0, 1);
        populateSelectionDropDown();
        populatePokemonPics();
      }
      pok1img.onclick = function() {
        var pokemonToBeMoved = game.player.pokemonOnHand[1];
        game.player.pokedex.push(pokemonToBeMoved);
        game.player.pokemonOnHand.splice(1, 1);
        populateSelectionDropDown();
        populatePokemonPics();
      }
      pok2img.onclick = function() {
        var pokemonToBeMoved = game.player.pokemonOnHand[2];
        game.player.pokedex.push(pokemonToBeMoved);
        game.player.pokemonOnHand.splice(2, 1);
        populateSelectionDropDown();
        populatePokemonPics();
      }
      pok3img.onclick = function() {
        var pokemonToBeMoved = game.player.pokemonOnHand[3];
        game.player.pokedex.push(pokemonToBeMoved);
        game.player.pokemonOnHand.splice(3, 1);
        populateSelectionDropDown();
        populatePokemonPics();
      }
      pok4img.onclick = function() {
        var pokemonToBeMoved = game.player.pokemonOnHand[4];
        game.player.pokedex.push(pokemonToBeMoved);
        game.player.pokemonOnHand.splice(4, 1);
        populateSelectionDropDown();
        populatePokemonPics();
      }
      pok5img.onclick = function() {
        var pokemonToBeMoved = game.player.pokemonOnHand[5];
        game.player.pokedex.push(pokemonToBeMoved);
        game.player.pokemonOnHand.splice(5, 1);
        populateSelectionDropDown();
        populatePokemonPics();
      }

    }
    
    generatePokemonOnHandOnScreen();
    

    /////////////// AT HOME END OF POKEMON ON HAND /////////////////////////////////

    ///////////////////////// LEAVE HOME ////////////////////////////////////

  }
}

module.exports = HomeUI;
