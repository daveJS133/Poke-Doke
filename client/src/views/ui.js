var Game = require('./game');


var UI = function(game, welcomeScreen, chooseScreen, fightScreen, homeScreen, craigScreen, mapCanvas) {
this.game = game;
this.welcomeScreen = welcomeScreen;
this.chooseScreen = chooseScreen;
this.fightScreen = fightScreen;
this.homeScreen = homeScreen;
this.craigScreen = craigScreen;
this.mapCanvas = mapCanvas;
}

UI.prototype = {
  initiateFight: function(fightScreen, game, opponant){
  

      fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress><img id='opponantPokemon' src="+ opponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+opponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+opponant.pokemonOnHand[0].fightHp+" max="+opponant.pokemonOnHand[0].hp+"></progress><img id='fight_textbox' src='/img/message.png'></img>";

      fightScreen.innerHTML += "<p id='move_text'>Your "+game.player.pokemonOnHand[0].name+" fights against "+opponant.pokemonOnHand[0].name+"!</p>";
      
  },

  updateUI: function(fightScreen, game, opponant){
    fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress><img id='opponantPokemon' src="+ opponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+opponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+opponant.pokemonOnHand[0].fightHp+" max="+opponant.pokemonOnHand[0].hp+"></progress> <img id='fight_textbox' src='/img/message.png'></img>"
  }
}

module.exports = UI;