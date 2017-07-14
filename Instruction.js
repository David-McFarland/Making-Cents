var game1 = false;
var game2 = false;
var bothGames = false;
var difficulty = false;

var skip = false;

var first = 0;//This is zero based indexing
var last = 7;//This is zero based indexing

var currentPart = 0;//This is zero based.

var groups = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];

var tempButton = null;
var tempTxt = null;

var sampleText = "";

var sampleText2 = "";

var startButton;
var startText;

var sampleGoal;
var coins;


var triesLeft;
var triesLeftText;

var mode = 0;//0 = easy, 1 = medium, 2 = hard

Game.Instruction = function(game){
	var coinsInBank;
	
};



Game.Instruction.prototype = {
	
	create:function(game){
		if(!difficulty){
			this.createButton(game, "Menu", game.world.centerX-50, 0, 100, 33, 
			function(){
				game.state.start('MainMenu');
			});
		
		}
		
		currentPart = 0;
		this.coinsInBank = 0;
		this.stage.backgroundColor = '#3A00FF';
		console.log(currentPart);
		
		//I cannot believe how dumb I am. 
		groups[0] = game.add.group();
		groups[1] = game.add.group();
		groups[2] = game.add.group();
		groups[3] = game.add.group();
		groups[4] = game.add.group();
		groups[5] = game.add.group();
		groups[6] = game.add.group();
		groups[7] = game.add.group();
		groups[8] = game.add.group();
		groups[9] = game.add.group();
		groups[10] = game.add.group();
		groups[11] = game.add.group();
		groups[12] = game.add.group();
		groups[13] = game.add.group();
		groups[14] = game.add.group();
		groups[15] = game.add.group();
			
		
		groups[1].alpha = 0;
		groups[2].alpha = 0;
		groups[3].alpha = 0;
		groups[4].alpha = 0;
		groups[5].alpha = 0;
		groups[6].alpha = 0;
		groups[7].alpha = 0;
		groups[8].alpha = 0;
		groups[9].alpha = 0;
		groups[10].alpha = 0;
		groups[11].alpha = 0;
		groups[12].alpha = 0;
		groups[13].alpha = 0;
		groups[14].alpha = 0;
		groups[15].alpha = 0;
		
		/*
		var text = game.add.text(400, 0, "Finding Costs",
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		text.anchor.setTo(0.5, 0);
		
		groups[0].add(text);
		*/

		
		var txt1 = game.add.text(400, 100, 
		"Making Cents is a game that has two parts the first\n"
	  + "part involves buying items at a grocery store and\n"
	  + "the second involve making cents. Click the \'Next\'\n"
	  + "button to continue or if you want to skip the\n"
	  + "instructions you can click the \'Skip\' button.", 
		{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		
		txt1.anchor.setTo(0.5, 0);
		
		groups[0].add(txt1);
		
		this.createButton(game, "Skip", 300, 500, 225, 75, 
		function(){
			this.state.start('FindingCost');
		});
			
		groups[0].add(tempButton);
		groups[0].add(tempTxt);
		
	
		var txt2 = game.add.text(25, 25, 
		"This part of the game asks how\n" 
	  +	"much certain items costs. To\n"
	  + "the right you can see the \n"
	  + "items and how much they cost.\n",
	  
		{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[1].add(txt2);

		
		var items = ['milk', 'eggs', 'oj', 'peanutbutter'];
		//var costOfItems = [59, 80, 30, 50];
		for( var i = 0; i<4; i++){//Adds the keys in the top right corner
			var item = game.add.sprite(440+75*i, 60, items[i]);
			this.scaleItem(60, 60, item);
			groups[1].add(item);
			costs[i] = game.add.text(425 + item.width/2 +75*i, 35, costOfItems[i] + '¢', 
			{ font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			groups[1].add(costs[i]);
		}

		var item = game.add.sprite(15, 270, 'milk');
		this.scaleItem(60, 60, item);
		groups[2].add(item);
		
		var txt3 = game.add.text(25, 200, 
		"In this area the game will have questions.\n"
	  + "Here is an example.\n\n"
	  + "       How much does 1 carton of milk cost?",
	  
		
		{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[2].add(txt3);
		
		
		sampleText = game.add.text(680, 300, "",
		{ font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[3].add(sampleText);
		
		this.createButton(game, "80¢", 530, 280, 60, 30, function(){sampleText.text = 'Try Again'});
		groups[3].add(tempButton);
		groups[3].add(tempTxt);
		
		this.createButton(game, "59¢", 600, 280, 60, 30, function(){sampleText.text = 'Correct!!!'});
		groups[3].add(tempButton);
		groups[3].add(tempTxt);
		
		this.createButton(game, "40¢", 530, 320, 60, 30, function(){sampleText.text = 'Try Again'});
		groups[3].add(tempButton);
		groups[3].add(tempTxt);
		
		this.createButton(game, "50¢", 600, 320, 60, 30, function(){sampleText.text = 'Try Again'});
		groups[3].add(tempButton);
		groups[3].add(tempTxt);
		
		
		var txt4 = game.add.text(300, 360, 
		"Then the player will click one of the\n"
	  + "answer choices next to the question\n"
	  + "These buttons work and you can try it\n"
	  + "now. Just click a button.", 
		{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[3].add(txt4);
		
		
		var txt5 = game.add.text(20, 20,
		"After answering all the question a final question\n"
	  + "will appear asking for the total cost.",
	    { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[4].add(txt5);
		
		var hint = game.add.text(100, 150,
		"Hint: 59¢ + 80¢ + 30¢ + 50¢ = ",
		{ font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		groups[4].add(hint);
		
		var total = game.add.text(100, 175,
		"What is the total cost?",
		{ font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		groups[4].add(total);
		
		sampleText2 = game.add.text(600, 180, "",
		{ font: "bold 16px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[4].add(sampleText2);
		
		this.createButton(game, "231¢", 460, 160, 60, 30, function(){sampleText2.text = 'Try Again'});
		groups[4].add(tempButton);
		groups[4].add(tempTxt);
		
		this.createButton(game, "219¢", 530, 160, 60, 30, function(){sampleText2.text = 'Try Again'});
		groups[4].add(tempButton);
		groups[4].add(tempTxt);
		
		this.createButton(game, "229¢", 460, 200, 60, 30, function(){sampleText2.text = 'Correct!!!'});
		groups[4].add(tempButton);
		groups[4].add(tempTxt);
		
		this.createButton(game, "245¢", 530, 200, 60, 30, function(){sampleText2.text = 'Try Again'});
		groups[4].add(tempButton);
		groups[4].add(tempTxt);

		
		var txt6 = game.add.text(100, 300, 
		"Finally if the questions are too easy\n"
	  + "you can go to the main menu, go to settings\n"
	  + "and change the difficulty.\n"
	  + "Now just click play game and you can get started",
		{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[5].add(txt6);
		
		this.createButton(game, "Start Part #1", 300, 500, 225, 75, 
			function(){
				if(currentPart == 0 || currentPart == 5){//This is because there are buttons on top of buttons
					this.state.start('FindingCost');
				}
			});
			
		groups[5].add(tempButton);
		groups[5].add(tempTxt);
			
			
			
			
		
		
		this.createButton(game, "Start Part #2", 1300, 500, 225, 75, 
			function(){
				if(currentPart == 9 || currentPart == 6){//This is because there are buttons on top of buttons
					this.state.start('Making_Cents');
				}
			});
		
		startButton = tempButton;
		startText = tempTxt;
		
		
		var txt7 = game.add.text(400, 50, 
		"The second part of the game is making cents\n"
	  + "using the coins provided. If you do not want\n"
	  + "to see the instructions press the \'skip\' button\n"
	  + "below to continue. Otherwise press the \'Next\'\n"
	  + "button.",
		{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		txt7.anchor.setTo(0.5, 0);
		
		groups[6].add(txt7);
		
		var txt8 = game.add.text(200, 150, 
		"In the upper left corner there\n"
	  + "will be text showing the target\n"
	  + "and how many coins are already\n"
	  + "in the piggy bank.",
		{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		txt8.anchor.setTo(0.5, 0);
		
		sampleGoal = game.add.text(0, 0, 
		"Goal: 61¢",
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		
		
		coins = game.add.text(0, 50,
		"Coins in Bank: 0¢",
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		groups[7].add(txt8);
		groups[7].add(sampleGoal);
		groups[7].add(coins);
		
		
		var txt9 = game.add.text(450, 100, 
		"In the uppper right corner\n"
	  + "there will be text that shows\n"
	  + "how many coins you have left.\n"
	  + "The harder the difficulty the\n"
	  + "less coins you will have.",
	    { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		
		triesLeftText = game.add.text(780, 0, 
		"Coins Left: Inf",
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		triesLeftText.anchor.setTo(1, 0);
		
		groups[8].add(txt9);
		groups[8].add(triesLeftText);
		
		
		game.physics.startSystem(Phaser.Physics.ARCADE);

		piggyBank = game.add.sprite(340, 450, 'piggybank');

		
		penny = game.add.sprite(175, 150, 'penny');
		penny.initialX = 175;
		penny.initialY = 150;
		penny.value = 1;
		penny.events.onDragStop.add(this.onDragStop, this);
   	
		nickel = game.add.sprite(300, 150, 'nickel');
		nickel.initialX = 300;
		nickel.initialY = 150;
		nickel.value = 5;
		nickel.events.onDragStop.add(this.onDragStop, this);
   	
		dime = game.add.sprite(425, 150, 'dime');
		dime.initialX = 425;
		dime.initialY = 150;
		dime.value = 10;
		dime.events.onDragStop.add(this.onDragStop, this);
   	
	
		quarter = game.add.sprite(550, 150, 'quarter');
		quarter.initialX = 550;
		quarter.initialY = 150;
		quarter.value = 25;
		quarter.events.onDragStop.add(this.onDragStop, this);
   	
		
	
	
		penny.inputEnabled = true;
		penny.input.enableDrag(true);
		
		nickel.inputEnabled = true;
		nickel.input.enableDrag(true);
		
		dime.inputEnabled = true;
		dime.input.enableDrag(true);
		
		quarter.inputEnabled = true;
		quarter.input.enableDrag(true);
		
		
		var txt10 = game.add.text(0, 300, 
		"Now you can practice playing the\n"
	  + "game by dragging the coins. If you\n"
	  + "would like to start the game you can\n"
	  + "click the play game button above the\n"
	  + "\'Next\' button.",
	    { font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		
		
		groups[9].add(txt10);
		groups[9].add(piggyBank);
		groups[9].add(penny);
		groups[9].add(nickel);
		groups[9].add(dime);
		groups[9].add(quarter);
		
		
		
		
		
		
		
		if(game1){
			
			
			currentPart = 0;
			first = 0;
			last = 5;
			
			groups[1].alpha = 0;	
		}
		else if(game2){
			
			groups[0].alpha = 0;
			groups[6].alpha = 1;
			currentPart = 6;
			first = 6;
			last = 9;
		}
		else if(difficulty){
			groups[0].alpha = 0;
			var text = game.add.text(400, 0, "Settings",
			{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			text.anchor.setTo(0.5, 0);
			
			this.createButton(game, "Main Menu", 250, 500, 300, 100, 
			function(){
				this.state.start('MainMenu');
			});
			
			var difText = game.add.text(50, 150, "Current Difficulty");
			
			if(mode == 1){
				difText.x = 300;
			}
			else if(mode == 2){
				difText.x = 550;
			}
			
			this.createButton(game, "Easy", 50, 200, 225, 75, 
			function(){
				mode = 0;
				difText.x = 50;
			});
			
			this.createButton(game, "Medium", 300, 200, 225, 75,
			function(){
				mode = 1;
				
				difText.x = 300;
			});
			
			this.createButton(game, "Hard", 550, 200, 225, 75, 
			function(){
				mode = 2;
				
				difText.x = 550;
			});
			
			skipText = game.add.text(150, 350, "Current Setting");
			if(!skip){
				skipText.x = 500;
			}
			this.createButton(game, "Skip Instructions", 150, 400, 225, 75, 
			function(){
				skip = true;
				skipText.x = 150;
			});
			
			this.createButton(game, "Do Not Skip Instructions", 500, 400, 225, 75, 
			function(){
				skip = false;
				skipText.x = 500;
			});
			
		}
		else if(bothGames){
			
			currentPart = 0;
			first = 0;
			last = 9;
			
		}
		else{
			var text = game.add.text(0, 0, "This is a problem\nPlease report this if seen.",
			{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			
			this.createButton(game, "Continue", 150, 400, 225, 75, 
			function(){
				this.state.start('MainMenu');
			});
		}
		if(!difficulty){
			var back = this.createButton(game, "Back", 0, 500, 225, 75, 
			function(){
				if(currentPart > first){
					
					groups[currentPart].alpha = 0;
					//.setTo('alpha', 0);
					currentPart--;
					if(currentPart == 3){
						groups[1].alpha = 1;
						groups[2].alpha = 1;
					}
					else if(currentPart == 5){
						groups[4].alpha = 1;
					}
				}
				
				groups[currentPart].alpha = 1;
				//.setTo('alpha', 1);
			});
		
			var next = this.createButton(game, "Next", 550, 500, 225, 75, 
			function(){
				if(last != currentPart){
					currentPart++;				
					
					
					if(currentPart == 1)
						groups[0].alpha = 0;
					else if(currentPart == 4){
						groups[1].alpha = 0;
						groups[2].alpha = 0;
						groups[3].alpha = 0;
					}
					else if(currentPart == 6){
						groups[4].alpha = 0;
						groups[5].alpha = 0;
					}
					else if(currentPart == 7){
						groups[6].alpha = 0;
					}
					//setTo('Alpha', 0);

				}
				
				groups[currentPart].alpha = 1;
				//setTo('Alpha', 1);
				
			});
		}

			
			
	
	},
	
	update:function(game){
		if(currentPart == 6){
			startButton.x = 300;
			startButton.y = 500;
			startText.x = 300 + startButton.width/2;
			startText.y = 500 + startButton.height/2;
			startText.text = 'Skip';
		}
		else if(currentPart == 9){
			startButton.x = 500;
			startButton.y = 350;
			startText.x = 500 + startButton.width/2;
			startText.y = 350 + startButton.height/2;
			startText.text = 'Play Game';
		}
		else{
			startButton.x = 1300;
			startText.x = 1300;
		}
	},
	
	createButton:function(game,string, x, y, w, h,callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x + w/2, button1.y + h/2, string, {font:"14px Arial", fill:"#fff", align:"center"});
		
		txt.anchor.setTo(0.5,0.5);
		
		tempButton = button1;
		tempTxt = txt;
	},
	
	scaleItem:function(width, height, item){
		var avg = (item.width/width + item.height/height) /2;
		item.scale.setTo(1 / avg, 1 / avg);
	},
	
	onDragStop:function(sprite, pointer){
	if (sprite.position.y + sprite.height/2 > 450 && sprite.position.y + sprite.height/2< 550 && sprite.position.x + sprite.width/2> 350 && sprite.position.x + sprite.width/2 < 500) {
			sprite.position.x=sprite.initialX;
			sprite.position.y=sprite.initialY;
			this.coinsInBank += sprite.value
			coins.text = 'Coins in bank: ' + this.coinsInBank + '¢';
			//console.log(coinsInBank);
			console.log(this.coinsInBank);
	}
	if(this.coinsInBank > 61){
		this.coinsInBank = 0;
		coins.text = "Coins in bank: " + this.coinsInBank + '¢';
	}
	
}
	
	
};