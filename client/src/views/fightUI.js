// var Game = require('./game');

var FightUI = function(game, fightScreen) {
this.game = game;
this.fightScreen = fightScreen;
}

FightUI.prototype = {
  generateMiniatures: function(fightScreen, player, opponant) {
    console.log('generating miniatures');

    var playerDiv = document.createElement('div');
    playerDiv.className = 'player_div';
    fightScreen.appendChild(playerDiv);
    if (player.pokemonOnHand.length > 0) {
      console.log('generating miniatures inside');
      for (var i = 1; i < player.pokemonOnHand.length; i++) {
        var miniPic = document.createElement('img');
        miniPic.src = player.pokemonOnHand[i].front_picture;
        miniPic.className = 'minipic_on_hand';
        playerDiv.appendChild(miniPic);
      }
    }
    if (player.faintedPokemons.length > 0) {
      for (var each of player.faintedPokemons) {
        var miniPic = document.createElement('img');
        miniPic.src = each.front_picture;
        miniPic.className = 'minipic_fainted';
        playerDiv.appendChild(miniPic);
      }
    }
    
    var opponantDiv = document.createElement('div');
    fightScreen.appendChild(opponantDiv);
    opponantDiv.className = 'opponant_div';
    if (opponant.pokemonOnHand.length > 0) {
      for (var i = 1; i < opponant.pokemonOnHand.length; i++) {
        var miniPic = document.createElement('img');
        miniPic.src = opponant.pokemonOnHand[i].front_picture;
        miniPic.className = 'minipic_on_hand';
        opponantDiv.appendChild(miniPic);
      }
    }
    if (opponant.faintedPokemons.length > 0) {
      for (var each of opponant.faintedPokemons) {
        var miniPic = document.createElement('img');
        miniPic.src = each.front_picture;
        miniPic.className = 'minipic_fainted';
        opponantDiv.appendChild(miniPic);
      }
    }
  },

  initiateFight: function(fightScreen, game, opponant){
  

      fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress><img id='opponantPokemon' src="+ opponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+opponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+opponant.pokemonOnHand[0].fightHp+" max="+opponant.pokemonOnHand[0].hp+"></progress><img id='fight_textbox' src='/img/message.png'></img>";

      fightScreen.innerHTML += "<p id='move_text'>Your "+game.player.pokemonOnHand[0].name+" fights against "+opponant.pokemonOnHand[0].name+"!</p>";
      
  },

  updateUI: function(fightScreen, game, opponant){
    fightScreen.innerHTML = "<img id='playerPokemon' src="+ game.player.pokemonOnHand[0].back_picture+ "></img><p id='player_name'>"+game.player.name+"</p><p id='player_pok_name'>"+game.player.pokemonOnHand[0].name+"</p><progress id='player_pok_hp' value="+game.player.pokemonOnHand[0].fightHp+" max="+game.player.pokemonOnHand[0].hp+"></progress><img id='opponantPokemon' src="+ opponant.pokemonOnHand[0].front_picture+"></img><p id='opponant_pok_name'>"+opponant.pokemonOnHand[0].name+"</p><progress id='opponant_pok_hp' value="+opponant.pokemonOnHand[0].fightHp+" max="+opponant.pokemonOnHand[0].hp+"></progress> <img id='fight_textbox' src='/img/message.png'></img>"
  },

  playerMove: function(fightScreen, game, opponant){
    fightScreen.innerHTML += "<p id='move_text'>Your "+game.player.pokemonOnHand[0].name+" used "+game.player.pokemonOnHand[0].move+" against "+opponant.pokemonOnHand[0].name+"!</p>";
  },

  opponantMove: function(fightScreen, game, opponant){
    fightScreen.innerHTML += "<p id='move_text'>"+opponant.pokemonOnHand[0].name+" used "+opponant.pokemonOnHand[0].move+" against your"+game.player.pokemonOnHand[0].name+"!</p>";
  }
}

module.exports = FightUI;