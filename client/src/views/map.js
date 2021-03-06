//// HANDLE MOVEMENT ON MAP ////////////
var Game = require('./game');
var FightUI = require('./fightUI');
var TalkUI = require('./talkUI');
var HomeUI = require('./homeUI');
//// need to require player for coordinates ////////
var Map = function(pokemonData, Player, Pokemon) {

  var game = new Game(pokemonData, Player, Pokemon);
  var fightUI = new FightUI(game, fightScreen);
  var talkUI = new TalkUI(game, craigScreen, simonScreen, zsoltScreen);
  var homeUI = new HomeUI();

  var welcomeScreen = document.querySelector('#welcomeScreen');
  var chooseScreen = document.querySelector('#choose_screen');
  var fightScreen = document.querySelector('#fight_screen');
  var homeScreen = document.querySelector('#home_screen');
  var craigScreen = document.querySelector('#craig_screen');
  var simonScreen = document.querySelector('#simon_screen');
  var zsoltScreen = document.querySelector('#zsolt_screen');
  var winScreen = document.querySelector('#win_screen');
  var mapCanvas = document.querySelector("#map");

  var context = mapCanvas.getContext('2d');

  var x = 60;
  var y = 420;

  var increment = 10;
  var ashDown = document.createElement('img');
  ashDown.src = "/img/ash_down.png";
  var ashUp = document.createElement('img');
  ashUp.src = "/img/ash_up.png";
  var ashRight = document.createElement('img');
  ashRight.src = "/img/ash_right.png";
  var ashLeft = document.createElement('img');
  ashLeft.src = "/img/ash_left.png";
  var ashWidth = 40;
  var ashHeight = ashWidth;
  var house = document.createElement('img');
  house.src = "/img/house.png";
  var gym = document.createElement('img');
  gym.src = "/img/gym.png";
  var grass = document.createElement('img');
  grass.src = "/img/grass.png";
  var pavement = document.createElement('img');
  pavement.src = "/img/pavement.png";
  var craig = document.createElement('img');
  craig.src = "img/craig.png";
  var bulbasaurPic = document.createElement('img');
  bulbasaurPic.id = 'bulbasaur';
  bulbasaurPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
  var charmanderPic = document.createElement('img');
  charmanderPic.id = 'charmander';
  charmanderPic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png';
  var squirtlePic = document.createElement('img');
  squirtlePic.id = 'squirtle';
  squirtlePic.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
  
  var mattPic = document.createElement('img');
  mattPic.id = 'win_matthew';
  mattPic.src = 'img/matt.png';

  var upButton = document.querySelector('#up-button');
  var downButton = document.querySelector('#down-button');
  var leftButton = document.querySelector('#left-button');
  var rightButton = document.querySelector('#right-button');
  var aButton = document.querySelector('#a-button');
  var nameSubmitButton = document.querySelector('#submit_name');
  var fightOpponant;

  var preloadFirstThreePokemon = function() {
    bulbasaurPic.onload = function() {
      chooseScreen.appendChild(bulbasaurPic);
    }
    charmanderPic.onload = function() {
      chooseScreen.appendChild(charmanderPic);
    }
    squirtlePic.onload = function() {
      chooseScreen.appendChild(squirtlePic);
    }
    winScreen.appendChild(mattPic);
  };
  preloadFirstThreePokemon();

  var loadCanvas = function() {
    pavement.onload = function() {
      context.drawImage(this, 0, 0, 580, 460);
      ashDown.onload = function() {
        context.drawImage(this, x - 20, y - 20, ashWidth, ashHeight);
      };
      ashUp.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      ashLeft.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      ashRight.onload = function() {
        context.drawImage(this, 1000, 1000, ashWidth, ashHeight);
      };
      craig.onload = function() {
        context.drawImage(this, 220, 280, ashWidth, ashHeight);
      };
      house.onload = function() {
        context.drawImage(this, 0, 270, 150, 130);
      };
      gym.onload = function() {
        context.drawImage(this, 0, 0, 220, 170);
        context.drawImage(this, 360, 0, 220, 170);
      };
      grass.onload = function() {
        context.drawImage(this, 540, 400, 40, 60);
        context.drawImage(grass, 500, 400, 40, 60);
        context.drawImage(grass, 460, 400, 40, 60);
        context.drawImage(grass, 420, 400, 40, 60);
        context.drawImage(grass, 380, 400, 40, 60);
        context.drawImage(grass, 340, 400, 40, 60);
        context.drawImage(grass, 300, 400, 40, 60);
        context.drawImage(grass, 260, 400, 40, 60);
        context.drawImage(grass, 540, 340, 40, 60);
        context.drawImage(grass, 500, 340, 40, 60);
        context.drawImage(grass, 460, 340, 40, 60);
        context.drawImage(grass, 420, 340, 40, 60);
        context.drawImage(grass, 380, 340, 40, 60);
        context.drawImage(grass, 340, 340, 40, 60);
        context.drawImage(grass, 300, 340, 40, 60);
        context.drawImage(grass, 260, 340, 40, 60);
        context.drawImage(grass, 540, 280, 40, 60);
        context.drawImage(grass, 500, 280, 40, 60);
        context.drawImage(grass, 460, 280, 40, 60);
        context.drawImage(grass, 420, 280, 40, 60);
        context.drawImage(grass, 380, 280, 40, 60);
        context.drawImage(grass, 340, 280, 40, 60);
        context.drawImage(grass, 300, 280, 40, 60);
        context.drawImage(grass, 260, 280, 40, 60);
      };
      drawMap();
      context.drawImage(ashDown, x - 20, y - 20, ashWidth, ashHeight);
    }; 
  };

  var drawMap = function() {
    context.drawImage(pavement, 0, 0, 580, 460);
    context.drawImage(house, 0, 270, 150, 130);
    context.drawImage(gym, 0, 0, 220, 170);
    context.drawImage(gym, 360, 0, 220, 170);
    context.drawImage(grass, 540, 400, 40, 60);
    context.drawImage(grass, 500, 400, 40, 60);
    context.drawImage(grass, 460, 400, 40, 60);
    context.drawImage(grass, 420, 400, 40, 60);
    context.drawImage(grass, 380, 400, 40, 60);
    context.drawImage(grass, 340, 400, 40, 60);
    context.drawImage(grass, 300, 400, 40, 60);
    context.drawImage(grass, 260, 400, 40, 60);
    context.drawImage(grass, 540, 340, 40, 60);
    context.drawImage(grass, 500, 340, 40, 60);
    context.drawImage(grass, 460, 340, 40, 60);
    context.drawImage(grass, 420, 340, 40, 60);
    context.drawImage(grass, 380, 340, 40, 60);
    context.drawImage(grass, 340, 340, 40, 60);
    context.drawImage(grass, 300, 340, 40, 60);
    context.drawImage(grass, 260, 340, 40, 60);
    context.drawImage(grass, 540, 280, 40, 60);
    context.drawImage(grass, 500, 280, 40, 60);
    context.drawImage(grass, 460, 280, 40, 60);
    context.drawImage(grass, 420, 280, 40, 60);
    context.drawImage(grass, 380, 280, 40, 60);
    context.drawImage(grass, 340, 280, 40, 60);
    context.drawImage(grass, 300, 280, 40, 60);
    context.drawImage(grass, 260, 280, 40, 60);
    context.drawImage(craig, 220, 280, ashWidth, ashHeight);
  };

  var moveAsh = function(directionPic, xInc, yInc) {
    drawMap();
    context.drawImage(directionPic, x - 20 + xInc, y - 20 + yInc, ashWidth, ashHeight);
    context.drawImage(gym, 0, 0, 220, 170);
    x += xInc;
    y += yInc;
    console.log(x,y);
    checkIfInGrass();
    checkForWin();
  };

  document.onkeydown = function(event) {
    console.log(event.keyCode);
    if (mapCanvas.style.zIndex == 100) {

      if (event.keyCode === 39) {
        // right
        if (x >= 560) {
          moveAsh(ashRight, 0, 0);
        }
        else if (x === 340 && 20 <= y && y <= 180) {
          moveAsh(ashRight, 0, 0);
        }
        else if (x === 200 && 270 <= y && y <= 330) {
          moveAsh(ashRight, 0, 0);
        }
        else{
          moveAsh(ashRight, increment, 0);
        }
      }

      if (event.keyCode === 37) {
        // left

        if (x <= 20) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 240 && 30 <= y && y <= 180) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 170 && 20 === y) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 170 && 260 <= y && y <= 410) {
          moveAsh(ashLeft, 0, 0);
        }
        else if (x === 280 && 270 <= y && y <= 330) {
          moveAsh(ashLeft, 0, 0);
        }
        else{
          moveAsh(ashLeft, -increment, 0);
        }
      }

      if (event.keyCode === 38) {
        // up
        if (y <= 20) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 420 && 20 <= x && x <= 160) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 190 && 20 <= x && x <= 230) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 190 && 350 <= x && x <= 560) {
          moveAsh(ashUp, 0, 0);
        }
        else if (y === 340 && 210 <= x && x <= 270) {
          moveAsh(ashUp, 0, 0);
        }
        else {
          moveAsh(ashUp, 0, -increment);
        }
      }

      if (event.keyCode === 40) {
        // down

        if (y >= 440) {
          moveAsh(ashDown, 0, 0);
        }
        else if (y === 250 && 20 <= x && x <= 160) {
          moveAsh(ashDown, 0, 0);
        }
        else if (x >= 170 && x <= 230 && 20 === y) {
          moveAsh(ashDown, 0, 0);
        }
        else if (y === 260 && 210 <= x && x <= 270) {
          moveAsh(ashDown, 0, 0);
        }
        else {
          moveAsh(ashDown, 0, increment);
        }
      }

      //////////// ENTER HOME ////////////////////////////////////////////////////////////////////////
      if (event.keyCode === 72) {
        // h
        if ((x === 50 || x===60) && y === 420) {
          toggleViews(mapCanvas, homeScreen);
          homeUI.atHome(game, homeScreen);
        }
      }
    }
  };

  ///////////// GRASS FIGHT ON /////////////////////////////////////////////////////////////////
  var checkIfInGrass = function() {
    var self = this;
    if (x >= 260 && y >= 280) {

      var randNum = Math.ceil(Math.random()*(10 - 0));      

      if (randNum === 10) {
        randNum = 0;
        console.log('you are being attacked');

        fightOpponant = game.grassOpponant;
        if (game.player.pokemonOnHand.length >= 1 && fightOpponant.pokemonOnHand.length >= 1) {
          toggleViews(mapCanvas, fightScreen);
          fightUI.initiateFight(fightScreen, game, fightOpponant);

          fightUI.generateMiniatures(fightScreen, game.player, fightOpponant);
        }
        console.log(fightOpponant);
      }
    }

    if(x==90 && y==190){
      fightLocation = "gym1";
      fightOpponant = game.gymOpponant1;

      console.log(fightOpponant);
    }


    if(x==450 && y==190){
      fightLocation = "gym2";
      fightOpponant = game.gymOpponant2;

      console.log(fightOpponant);
    }
  }
 
  upButton.onclick = function(){
    if (y <= 20) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 420 && 20 <= x && x <= 160) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 190 && 20 <= x && x <= 230) {
      moveAsh(ashUp, 0, 0);
    }
    else if (y === 190 && 350 <= x && x <= 560) {
      moveAsh(ashUp, 0, 0);
    }
    else {
      moveAsh(ashUp, 0, -increment);
    }
  }

  downButton.onclick = function(){
    if (y >= 440) {
      moveAsh(ashDown, 0, 0);
    }
    else if (y === 250 && 20 <= x && x <= 160) {
      moveAsh(ashDown, 0, 0);
    }
    else {
      moveAsh(ashDown, 0, increment);
    }
  }

  leftButton.onclick = function(){
    if (x <= 20) {
      moveAsh(ashLeft, 0, 0);
    }
    else if (x === 240 && 20 <= y && y <= 180) {
      moveAsh(ashLeft, 0, 0);
    }
    else if (x === 170 && 260 <= y && y <= 410) {
      moveAsh(ashLeft, 0, 0);
    }
    else{
      moveAsh(ashLeft, -increment, 0);
    }
  }

  rightButton.onclick = function(){
    if (x >= 560) {
      moveAsh(ashRight, 0, 0);
    }
    else if (x === 340 && 20 <= y && y <= 180) {
      moveAsh(ashRight, 0, 0);
    }
    else{
      moveAsh(ashRight, increment, 0);
    }
  }

  aButton.onclick = function(){
    ////////////////////////////////////////////

    ///////////////////IN FIGHT////////////////////////

    if (fightScreen.style.zIndex == 100 ) {

      if (game.player.pokemonOnHand.length >= 1 && fightOpponant.pokemonOnHand.length >= 1) {
        console.log('fight called');
        if (game.player.turn == true) {

          game.fight(game.player, fightOpponant, game.calcDamage);
          fightUI.updateUI(fightScreen, game, fightOpponant);
          fightUI.playerMove(fightScreen, game, fightOpponant);
        } 
        else {
          game.fight(game.player, fightOpponant, game.calcDamage);
          fightUI.updateUI(fightScreen, game, fightOpponant);
          fightUI.opponantMove(fightScreen, game, fightOpponant);
        }
        
        fightUI.generateMiniatures(fightScreen, game.player, fightOpponant);

        console.log('fight called');
        
        ///////////////////////////////////////
        
        game.checkForFainted(game.player);
        game.checkForFainted(fightOpponant);

        console.log('aButton in fight has been clicked');
      }

      else {
        if(fightOpponant == game.grassOpponant){
          game.getFaintedPokemon(game.player, game.grassOpponant);
        }
        console.log('player', game.player)
        toggleViews(fightScreen, mapCanvas); 
      }
    }

    ///////////// IN HOME /////////////////

    else if (homeScreen.style.zIndex == 100) {
      toggleViews(homeScreen, mapCanvas);
      console.log('zIndex of home', mapCanvas.style.zIndex);
      console.log('aButton has been clicked in house');
    }

    ////////////// ON MAP ///////////////////
    else if (mapCanvas.style.zIndex == 100) {
      /////////////CHEAT//////////////////////////////
      if (x === 170 && y === 20) {
        var cheat = prompt("You have found the wizard's corner. Answer his question correctly and all his Pokémon will be yours!\n\n'What is the best cohort in CodeClan?'");
        if (cheat === 'cohort9') {
          alert('Wizard: "You are right! Take all my Pokémon!"');
          for (var each of game.unusedPokemon) {
            var movePokemon = each;
            game.player.pokedex.push(movePokemon);
          }
          var lengthOfUnused = game.unusedPokemon.length;
          game.unusedPokemon.splice(0, lengthOfUnused);
          console.log('unused pokemon', game.unusedPokemon);
          console.log('unused pokedex', game.player.pokedex);
        }
        else {
          alert('Wizard: "No, that is not true and everyone knows that!"');
        }
      }
      /////////// STARTS THE GYM FIGHTS ///////////////////
      

      if ((x == 90 || x == 450) && y == 190){
        if (game.player.pokemonOnHand.length >= 1 && fightOpponant.pokemonOnHand.length >= 1) {
          console.log(fightOpponant);
          toggleViews(mapCanvas, fightScreen);
          console.log('views toggled');
          fightUI.initiateFight(fightScreen, game, fightOpponant);

          fightUI.generateMiniatures(fightScreen, game.player, fightOpponant);
        }

        console.log('call initiate at gym')
      } 

      /////////////////////////////////////////////////////

      else if (x === 50 && y === 420) {
        toggleViews(mapCanvas, homeScreen);
        homeUI.atHome(game, homeScreen);
        console.log('zIndex of mapCanvas', mapCanvas.style.zIndex);
      }
      ////////////// AROUND CRAIG OR SIMON OR ZSOLT ///////////////
      else if (x === 240 && y === 340) {
        toggleViews(mapCanvas, craigScreen);
        talkUI.withCraig(game, craigScreen);
      }
      else if (x === 490  && y === 190 ) {
        toggleViews(mapCanvas, simonScreen);
        talkUI.withSimon(game, simonScreen);
      }
      else if (x === 130  && y === 190 ) {
        toggleViews(mapCanvas, zsoltScreen);
        talkUI.withZsolt(game, zsoltScreen);
      }
    }

    /////////////// WITH CRAIG OR SIMON //////////////////
    else if (craigScreen.style.zIndex == 100) {
      toggleViews(craigScreen, mapCanvas);
    }
    else if (simonScreen.style.zIndex == 100) {
      toggleViews(simonScreen, mapCanvas);
    }
    else if (zsoltScreen.style.zIndex == 100) {
      toggleViews(zsoltScreen, mapCanvas);
    }

  }
  ////////////// END OF ABUTTON //////////////////////

  ///////////// WIN SCREEN ///////////////////////

  /////////// 01 WELCOME SCREEN ////////////////  
  nameSubmitButton.onclick = function() {
    var nameToAdd = document.querySelector('#name_to_add');
    game.player.setPlayersName(nameToAdd.value.toUpperCase());
    //////

    game.populateOpponant(game.grassOpponant, 1);
    game.populateOpponant(game.gymOpponant1, 3);
    game.populateOpponant(game.gymOpponant2, 3);
    console.log('opponants pokemon', game.grassOpponant.pokemonOnHand[0]);

    toggleViews(welcomeScreen, chooseScreen);

    /////////// 02 CHOOSE SCREEN ////////////////  
    var welcomeQuote = document.createElement('p');
    chooseScreen.innerHTML = "";
    welcomeQuote.innerText = "Hey " + game.player.name + "! Choose your Pokémon, then... Go Away!"
    chooseScreen.appendChild(welcomeQuote);

    welcomeQuote.id ='welcomeQuote';

    var matthewPic = document.createElement('img');
    matthewPic.id ='mattOak';
    matthewPic.src = './img/matt.png';
    chooseScreen.appendChild(matthewPic);

    chooseScreen.appendChild(charmanderPic);
    chooseScreen.appendChild(bulbasaurPic);
    chooseScreen.appendChild(squirtlePic);

    bulbasaurPic.onclick = function() {
     game.playerPicksPokemon("BLASTOISE");
     console.log('sweet you have choosen bulbi! its gonna be muddy', game.player.pokemonOnHand[0]);
     toggleViews(chooseScreen, mapCanvas);
   }

   charmanderPic.onclick = function() {
     game.playerPicksPokemon("CHARMANDER");
     console.log('sweet you have choosen charmi! its gonna be hot', game.player.pokemonOnHand[0]);
     toggleViews(chooseScreen, mapCanvas);
   }

   squirtlePic.onclick = function() {
     game.playerPicksPokemon("SQUIRTLE");
     console.log('sweet you have choosen squirty! its gonna be wet', game.player.pokemonOnHand[0]);
     toggleViews(chooseScreen, mapCanvas);
   }
 }

 var checkForWin = function() {
  var pokeSum = 0;
  pokeSum = game.player.pokemonOnHand.length + game.player.faintedPokemons.length + game.player.pokedex.length;
  if (pokeSum === 151) {
    toggleViews(mapCanvas, winScreen);
  }
};

//////////////// BUTTONS ///////////////////////////////////////////////////////////////////////

var toggleViews = function(recentView, nextView) {
  recentView.style.zIndex = 1;
  nextView.style.zIndex = 100;
}

loadCanvas();

};

module.exports = Map;
