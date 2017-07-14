var coins;
var coinsInBank;
var win = false;

var restart = true;
var hardRestart = false;

var coinsLeft;
var coinsLeftText;
var coinTarget;
Game.Making_Cents = function(game){};

Game.Making_Cents.prototype = {
	
	
	create: function(game) {
		win = false;
		
		
		
		if(hardRestart){
			totalCost = Math.floor(Math.random()*99)+1;
		}
		
		totalCost %= 100;
		if(totalCost == 0){
			totalCost = 99;
		}
		
		var tempNum = totalCost;
		coinsLeft = 0;
		while(tempNum != 0){
			if(tempNum >= 25){
				tempNum -= 25;
			}
			else if(tempNum >= 10){
				tempNum -= 10;
			}
			else if(tempNum >= 5){
				tempNum -= 5;
			}
			else{
				tempNum--;
			}
			
			coinsLeft++;
		}
		coinTarget = coinsLeft;
		
		coinsLeftText = game.add.text(780, 0, 
		"Coins Left: Inf",
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		if(mode == 1){
			coinsLeft *= 2;
			coinTarget *= 2;
		}
		if(mode != 0){
			coinsLeftText.text = "Coins Left: " + coinsLeft;
		}
		coinsLeftText.anchor.setTo(1, 0);
		
		
		createButton(game, "?", game.world.width-25, game.world.height-25, 50, 50, 
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
		function(){
			//Make popup that helps
			
			game1 = false;
			game2 = true;
			bothGames = false;
			difficulty = false;
			restart = false;
			
			game.state.start('Instruction');
			

		});
		
		if(restart){
			coinsInBank = 0;
		}
		
		game.add.text(0, 0, 'Target: ' + totalCost, { font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		coins = game.add.text(0, 50, 'Coins in bank: ' + coinsInBank, { font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		this.createButton(game, "Menu", game.world.centerX, 16, 100, 33, 
		function(){
			game.state.start('MainMenu');
		});
		//this.stage.backgroundColor = '#3AFFFF';
		
		game.physics.startSystem(Phaser.Physics.ARCADE);

		piggyBank = game.add.sprite(340, 450, 'piggybank');

		
		penny = game.add.sprite(175, 150, 'penny');
		penny.initialX = 175;
		penny.initialY = 150;
		penny.value = 1;
		penny.events.onDragStop.add(onDragStop, this);
   	
		nickel = game.add.sprite(300, 150, 'nickel');
		nickel.initialX = 300;
		nickel.initialY = 150;
		nickel.value = 5;
		nickel.events.onDragStop.add(onDragStop, this);
   	
		dime = game.add.sprite(425, 150, 'dime');
		dime.initialX = 425;
		dime.initialY = 150;
		dime.value = 10;
		dime.events.onDragStop.add(onDragStop, this);
   	
	
		quarter = game.add.sprite(550, 150, 'quarter');
		quarter.initialX = 550;
		quarter.initialY = 150;
		quarter.value = 25;
		quarter.events.onDragStop.add(onDragStop, this);
   	
		
	
	
		penny.inputEnabled = true;
		penny.input.enableDrag(true);
		
		nickel.inputEnabled = true;
		nickel.input.enableDrag(true);
		
		dime.inputEnabled = true;
		dime.input.enableDrag(true);
		
		quarter.inputEnabled = true;
		quarter.input.enableDrag(true);
		
		
		
   	
	},
	
	update: function(game){
		
		if(win){
			game.state.start('Transition2');
		}
		
	},
	
	createButton:function(game,string, x, y, w, h,callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.anchor.setTo(0.5,0.5);
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x, button1.y, string, {font:"14px Arial", fill:"#fff", align:"center"});
		
		txt.anchor.setTo(0.5,0.5);
		
		restart = true;
	}

}

function onDragStop(sprite, pointer){
	if (sprite.position.y + sprite.height/2 > 450 && sprite.position.y + sprite.height/2< 550 && sprite.position.x + sprite.width/2> 350 && sprite.position.x + sprite.width/2 < 500) {
			sprite.position.x=sprite.initialX;
			sprite.position.y=sprite.initialY;
			coinsInBank += sprite.value
			coins.text = 'Coins in bank: ' + coinsInBank;
			//console.log(coinsInBank);
			console.log(coinsInBank);
			if(mode != 0){
				coinsLeft--;
				coinsLeftText.text = "Coins Left: " + coinsLeft;
			}
	}
	if(coinsInBank == totalCost){
		win = true;
	}
	if(coinsInBank > totalCost || coinsLeft == 0){
		coinsInBank = 0;
		coins.text = "Coins in Bank: " + coinTarget;
		coinsLeft = coinTarget;
	}
	
	
}

function scaleItem(width, height, item){
	var avg = (item.width/width + item.height/height) /2;
	item.scale.setTo(1 / avg, 1 / avg);
}
	