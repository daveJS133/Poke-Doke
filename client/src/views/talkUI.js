
var TalkUI = function(game, craigScreen, simonScreen, zsoltScreen) {
this.game = game;
this.craigScreen = craigScreen;
this.simonScreen = simonScreen;
this.zsoltScreen = zsoltScreen;
}

TalkUI.prototype = {
  withCraig: function(game, craigScreen) {
    craigScreen.innerHTML = "<p id='craigSpeech'>Hi "+game.player.name+"! My name is CRIG MORTOB!  Be careful... the Meadows are full of wild Pokémon and there also some tough trainers in our gyms!</p><img src='./img/brockCraig.png' id='brockCraig'>";
  },

  withSimon: function(game, simonScreen) {
    if(game.gymOpponant2.pokemonOnHand.length > 0){
      simonScreen.innerHTML = "<p id='simonSpeech'>Morning guys! My Name is SIMON. Step inside and I will take you on with my grassy friends!</p><img src='./img/simon2.png' id='zsoltachu'><img src='./img/grassIcon.png' id='gymBadge'>";
    }
    else{
      simonScreen.innerHTML = "<p id='simonSpeech'> Wow, you guys are SO talented! Here is a badge for yourselves!</p><img src='./img/simon2.png' id='zsoltachu'><img src='./img/earthBadge.png' id='gymBadge'>";
    }
  },

  withZsolt: function(game, zsoltScreen) {
    if(game.gymOpponant1.pokemonOnHand.length > 0){
      zsoltScreen.innerHTML = "<p id='zsoltSpeech'>HELLO!!! My Name is ZSOLT. Fight my electric buddies and feel the ZSOLTAGE!!!</p><img src='./img/zsoltBod.png' id='zsoltachu'><img src='./img/electricIcon.png' id='gymBadge'>";
    }
    else{
      zsoltScreen.innerHTML = "<p id='zsoltSpeech'> Wow, good stuff! You are beautiful people! Take this badge, you earned it!</p><img src='./img/zsoltBod.png' id='zsoltachu'><img src='./img/thunderBadge.png' id='gymBadge'>";
    }
  }
}

module.exports = TalkUI;