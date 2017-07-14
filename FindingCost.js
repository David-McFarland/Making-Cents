var correctText = ['', '', '', ''];
var totalCost = 0;

var setUpTotal = false;
var correctAnswer = [false, false, false, false];


var numberOfItems = [2, 1, 1, 1];
var costOfItems = [59, 80, 30, 50];
		
		
var popupText;
var isPopup = false;

var megaGroup;
var textGroup;
var spriteGroup;
var buttonGroup;


var costs = [null, null, null, null];
var items = ['milk', 'eggs', 'oj', 'peanutbutter'];
var itemStringSin = [' carton of milk', ' dozen of eggs', ' bottle of OJ', ' jar of peanutbutter'];
var itemStringPlu = [' cartons of milk', ' dozens of eggs', ' bottles of OJ', ' jars of peanutbutter'];
		

var restart = true;

Game.FindingCost = function(game){
	
	
		
	
};

Game.FindingCost.prototype = {
	create: function(game) {
		
		if(restart){
			correctAnswer[0] = false;
			correctAnswer[1] = false;
			correctAnswer[2] = false;
			correctAnswer[3] = false;
			setUpTotal = false;
		}

		
		megaGroup = game.add.group();
		textGroup = game.add.group();
		spriteGroup = game.add.group();
		buttonGroup = game.add.group();
			
		megaGroup.add(textGroup);
		megaGroup.add(spriteGroup);
		megaGroup.add(buttonGroup);
			
		
		
		
		createButton(game, "Menu", game.world.centerX, 16, 100, 33,
		{font:"14px Arial", fill:"#fff", align:"center"},		
		function(){
			game.state.start('MainMenu');
		});
		
		createButton(game, "?", game.world.width-25, game.world.height-25, 50, 50, 
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
		function(){
			//Make popup that helps
			
			game1 = true;
			game2 = false;
			bothGames = false;
			difficulty = false;
			restart = false;
			
			game.state.start('Instruction');
			

		});
		
		
		
		
		/*** Handling Number input ***/
		this.zeroKey = game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
		this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
		
			
		
		if(restart){
			
			
			/*** Randomly generates number and cost of each item. ***/
			//numberOfItems = [2, 1, 1, 1];
			//costOfItems = [59, 80, 30, 50];
			
			costOfItems[0] = Math.ceil(Math.random()*9)*10;
			costOfItems[1] = Math.ceil(Math.random()*9)*10;
			costOfItems[2] = Math.ceil(Math.random()*9)*10;
			costOfItems[3] = Math.ceil(Math.random()*9)*10-1;
			
			if(mode == 0){
				numberOfItems = [2, 1, 1, 1];
			}
			else if(mode == 1){
				numberOfItems = [2, 2, 2, 2];
			}
			else{
				numberOfItems = [2, 3, 2, 3];
				costOfItems[0] = Math.ceil(Math.random()*59)+40;
				costOfItems[1] = Math.ceil(Math.random()*59)+40;
				costOfItems[2] = Math.ceil(Math.random()*59)+40;
				costOfItems[3] = Math.ceil(Math.random()*59)+40;
			}
			
			costs = [null, null, null, null];
			items = ['milk', 'eggs', 'oj', 'peanutbutter'];
			itemStringSin = [' carton of milk', ' dozen of eggs', ' bottle of OJ', ' jar of peanutbutter'];
			itemStringPlu = [' cartons of milk', ' dozens of eggs', ' bottles of OJ', ' jars of peanutbutter'];
		
			shuffle(numberOfItems);
			shuffle(costOfItems);
			shuffle3(items, itemStringSin, itemStringPlu);
			
			totalCost = 0;
			for( var i = 0; i<4; i++){
				totalCost += costOfItems[i] * numberOfItems[i];
			}
			
			
			
		
		
		}
		
		
		for( var i = 0; i<4; i++){//Adds the keys in the top right corner
			var item = game.add.sprite(440+75*i, 60, items[i]);
			this.scaleItem(60, 60, item);
			spriteGroup.add(item);
			costs[i] = game.add.text(425 + item.width/2 +75*i, 35, costOfItems[i] + '¢', 
			{ font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			textGroup.add(costs[i]);
		}


		
		/*** This is the key at the top that tells the player the cost of each item. ***/
		
		
		
		/*** Milk, Eggs, OJ, Peanutbutter ***/
		//This is going to be tuff to automate
		
		//486 by 597
		
		/*** It is important to note that I do not have these items, I only created them. ***/
		for( var j = 0; j<4; j++){//This loop generates the
			if( j == 0){
				var tempHeight = 150; 
			}
			
			for( var i = 0; i<numberOfItems[j]; i++){
				var item = game.add.sprite(40*i, tempHeight, items[j]);
				spriteGroup.add(item);
				this.scaleItem(60, 60, item);
			}
			
			var tempName;
			if(numberOfItems[j] == 1){//Singular
				tempName = itemStringSin[j];
			}
			else{
				tempName = itemStringPlu[j];
			}
			var tempText = game.add.text(50 +40*numberOfItems[j], tempHeight + item.height/2, 'How much does ' + numberOfItems[j] +  tempName + ' cost?', 
			{ font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			textGroup.add(tempText);
			
					
			correctText[j] = game.add.text(210 + 40*numberOfItems[j] + tempText.width, tempHeight + item.height/2+5, '', 
			{ font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			
			if(correctAnswer[j]){
				correctText[j].text = 'Correct!!!';
			}
			
			textGroup.add(correctText[j]);
			
			createAnswerButtons(game, 
			costOfItems[j]*numberOfItems[j], 
			costOfItems[(j+1)%4]*numberOfItems[(j+1)%4], 
			costOfItems[(j+3)%4]*numberOfItems[(j+2)%4], 
			costOfItems[(j+2)%4]*numberOfItems[(j+2)%4], 
			j, 105 + 40*numberOfItems[j] + tempText.width, tempHeight + item.height/2);
			
			tempHeight += (20 + item.height);
		}			
		
		
		
		if(!restart){
			setUpTotal = false;
		}
		
		restart = true;
		this.stage.backgroundColor = '#3A00FF';
   	
	},
	
	update: function(game){
		if(this.zeroKey.isDown){
			//game.state.start('MainMenu');
			console.log(setUpTotal);
		}
		else if(this.oneKey.isDown){
			game.state.start('Making_Cents');
		}
		if(correctAnswer[0] && correctAnswer[1] && correctAnswer[2] && correctAnswer[3] && !setUpTotal){
			setUpTotal = true;
			console.log("Good to go! :)");
			game.add.text(20, 510, "Hint: " + costOfItems[0]*numberOfItems[0] + '¢ + ' + costOfItems[1]*numberOfItems[1] + '¢ + ' + costOfItems[2]*numberOfItems[2] + '¢ + ' + costOfItems[3]*numberOfItems[3] + '¢ = ???',
			{ font: "bold 24px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			
			var txt = game.add.text(20, 530, "What is the total cost?", 
			{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			
			var num1 = Math.floor(totalCost + Math.random()*20 + 10);
			var num2 = Math.floor(totalCost + Math.random()*20 + 10);
			var num3 = Math.floor(totalCost + Math.random()*20 + 10);
			createAnswerButtons(game, totalCost, num1, num2, num3, 5, 40 + txt.width, 530);
			
		}
		
		//function createAnswerButtons(game, num1, num2, num3, num4, textNumber, width, height){
		
	},
	
	
	
	scaleItem:function(width, height, item){
		var avg = (item.width/width + item.height/height) /2;
		item.scale.setTo(1 / avg, 1 / avg);
	}
	
}

function createButton(game,string, x, y, w, h, style, callback){
	var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
	
	if(string != '?' && string != 'Menu'){
		buttonGroup.add(button1);
	}
	
	button1.anchor.setTo(0.5,0.5);
	button1.width = w;
	button1.height = h;
	
	var txt = game.add.text(button1.x, button1.y, string, style);
	if(string != '?' && string != 'Menu'){
		buttonGroup.add(txt);	
	}
	
	txt.anchor.setTo(0.5,0.5);
	
	
}
	

function createAnswerButtons(game, num1, num2, num3, num4, textNumber, width, height){
	var nums = [num1, num2, num3, num4];
	var answer = num1;
	if(nums[1] == answer || nums[1] == nums[2] || nums[2] == nums[3]){
		nums[1] += 10;
		while(nums[1] == nums[2] || nums[1] == nums[3]){
			nums[1] += 10;
		}
	}
	if(nums[2] == answer || nums[2] == nums[1] || nums[2] == nums[3]){
		nums[2] += 10;
		while(nums[2] == nums[1] || nums[2] == nums[3]){
			nums[2] += 10;
		}
	}
	if(nums[3] == answer || nums[3] == nums[1] || nums[3] == nums[2]){
		nums[3] += 10;
		while(nums[3] == nums[2] || nums[3] == nums[1]){
			nums[3] += 10;
		}
	}
	
	for( var t = 0; t<10; t++){
		shuffle(nums);
	}
	
	
	var heights = [height, height, height + 40, height + 40];
	var widths = [width, width + 60, width, width + 60];
	
	for( var i = 0;i<4; i++){
		if(nums[i] == answer){
			createButton(game, nums[i] + '¢', widths[i], heights[i], 50, 33,
			{font:"14px Arial", fill:"#fff", align:"center"},	
			function(){
				if(!isPopup){
					if(textNumber < 4){
						correctAnswer[textNumber] = true;
						correctText[textNumber].text = 'Correct!!!'
					}
					else{
						game.state.start('Transition1');
					}			
				}	
			});
		}
		else{
			createButton(game, nums[i] + '¢', widths[i], heights[i], 50, 33,
			{font:"14px Arial", fill:"#fff", align:"center"},	
			function(){
				if(!isPopup){
					if(textNumber < 4 && !correctAnswer[textNumber]){
						correctText[textNumber].text = 'Try Again';
					}
	
				}
			});
		}
		
	}
	
	
}

function shuffle(arr){
	for( var i = 0; i<arr.length; i++){
		var temp = Math.floor(Math.random() * arr.length);
		var holder = arr[temp];
		arr[temp] = arr[i];
		arr[i] = holder;
	}
}
	
	
function shuffle3(arr1, arr2, arr3){
	for( var i = 0; i<arr1.length; i++){
		var temp = Math.floor(Math.random() * arr1.length);
		var holder = arr1[temp];
		arr1[temp] = arr1[i];
		arr1[i] = holder;
		
		holder = arr2[temp];
		arr2[temp] = arr2[i];
		arr2[i] = holder;
		
		holder = arr3[temp];
		arr3[temp] = arr3[i];
		arr3[i] = holder;
	}
}