var coins;
var coinsInBank;
Game.Making_Cents = function(game){};

Game.Making_Cents.prototype = {
	
	
	create: function(game) {
		
		coinsInBank = 0;
		game.add.text(0, 0, totalCost, { font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		coins = game.add.text(0, 50, 0, { font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		this.createButton(game, "Menu", game.world.centerX, 16, 100, 33, 
		function(){
			this.state.start('MainMenu');
		});
		this.stage.backgroundColor = '#3AFFFF';
		
		game.physics.startSystem(Phaser.Physics.ARCADE);

		piggyBank = game.add.sprite(340, 450, 'piggybank');
		
		penny = game.add.sprite(25, 325, 'penny');
		penny.initialX = 25;
		penny.initialY = 325;
		penny.value = 1;
		penny.events.onDragStop.add(onDragStop, this);
		penny.rotation = -1;
   	
		nickel = game.add.sprite(90, 154, 'nickel');
		nickel.initialX = 90;
		nickel.initialY = 154;
		nickel.value = 5;
		nickel.events.onDragStop.add(onDragStop, this);
		nickel.rotation = -.7
   	
		dime = game.add.sprite(277, 74, 'dime');
		dime.initialX = 277;
		dime.initialY = 74;
		dime.value = 10;
		dime.events.onDragStop.add(onDragStop, this);
		dime.rotation = -0.2;
   	
	
		quarter = game.add.sprite(453, 35, 'quarter');
		quarter.initialX = 453;
		quarter.initialY = 35;
		quarter.value = 25;
		quarter.events.onDragStop.add(onDragStop, this);
		quarter.rotation = 0.2;
   	
		halfDollarCoin = game.add.sprite(627, 106, 'halfdollarcoin');
		scaleItem(100, 100, halfDollarCoin);
		halfDollarCoin.initialX = 627;
		halfDollarCoin.initialY = 106;
		halfDollarCoin.value = 50;
		halfDollarCoin.events.onDragStop.add(onDragStop, this);
		halfDollarCoin.rotation = 0.7;
   	
		dollarCoin = game.add.sprite(726, 254, 'dollarcoin');
		scaleItem(100, 100, dollarCoin);
		dollarCoin.initialX = 726;
		dollarCoin.initialY = 254;
		dollarCoin.value = 100;
		dollarCoin.events.onDragStop.add(onDragStop, this);
		dollarCoin.rotation = 1.0;
	
	
		penny.inputEnabled = true;
		penny.input.enableDrag(true);
		
		nickel.inputEnabled = true;
		nickel.input.enableDrag(true);
		
		dime.inputEnabled = true;
		dime.input.enableDrag(true);
		
		quarter.inputEnabled = true;
		quarter.input.enableDrag(true);
		
		halfDollarCoin.inputEnabled = true;
		halfDollarCoin.input.enableDrag(true);
		
		dollarCoin.inputEnabled = true;
		dollarCoin.input.enableDrag(true);
		
		
   	
	},
	
	update: function(){
		
		
	},
	
	createButton:function(game,string, x, y, w, h,callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.anchor.setTo(0.5,0.5);
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x, button1.y, string, {font:"14px Arial", fill:"#fff", align:"center"});
		
		txt.anchor.setTo(0.5,0.5);
	}

}

function onDragStop(sprite, pointer){
	if (sprite.position.y + sprite.height/2 > 450 && sprite.position.y + sprite.height/2< 550 && sprite.position.x + sprite.width/2> 350 && sprite.position.x + sprite.width/2 < 500) {
			sprite.position.x=sprite.initialX;
			sprite.position.y=sprite.initialY;
			coinsInBank += sprite.value
			coins.text = coinsInBank;
			//console.log(coinsInBank);
			console.log(coinsInBank);
	}
	if(coinsInBank > totalCost){
		coinsInBank = 0;
		coins.text = 0;
	}
	
}

function scaleItem(width, height, item){
	var avg = (item.width/width + item.height/height) /2;
	item.scale.setTo(1 / avg, 1 / avg);
}
	