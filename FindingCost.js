var correctText = ['', '', '', ''];
var totalCost = 0;

var setUpTotal = false;
var correctAnswer = [false, false, false, false];
Game.FindingCost = function(game){
	
	
		
	
};

Game.FindingCost.prototype = {
	create: function(game) {
		this.createButton(game, "Menu", game.world.centerX, 16, 100, 33,
		{font:"14px Arial", fill:"#fff", align:"center"},		
		function(){
			this.state.start('MainMenu');
		});
		
		this.createButton(game, "?", game.world.width-25, game.world.height-25, 50, 50, 
		{ font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" },
		function(){
			//Make popup that helps
		});
		
		
		
		
		/*** Handling Number input ***/
		this.zeroKey = game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
		this.oneKey = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
		
		
		/*** Randomly generates number and cost of each item. ***/
		var numberOfItems = [2, 1, 1, 1];
		var costOfItems = [59, 80, 30, 50];
		costOfItems[0] = Math.ceil(Math.random()*9)*10;
		costOfItems[1] = Math.ceil(Math.random()*9)*10;
		costOfItems[2] = Math.ceil(Math.random()*9)*10;
		costOfItems[3] = Math.ceil(Math.random()*9)*10-1;
		
		
			
		var costs = [null, null, null, null];
		var items = ['milk', 'eggs', 'oj', 'peanutbutter'];
		var itemStringSin = [' carton of milk', ' dozen of eggs', ' bottle of OJ', ' jar of peanutbutter'];
		var itemStringPlu = [' cartons of milk', ' dozens of eggs', ' bottles of OJ', ' jars of peanutbutter'];
		
		this.shuffle(numberOfItems);
		this.shuffle(costOfItems);
		this.shuffle3(items, itemStringSin, itemStringPlu);
		
		totalCost = 0;
		for( var i = 0; i<4; i++){
			totalCost += costOfItems[i] * numberOfItems[i];
		}
		
		
		for( var i = 0; i<4; i++){
			var item = game.add.sprite(440+75*i, 60, items[i]);
			this.scaleItem(60, 60, item);
			costs[i] = game.add.text(425 + item.width/2 +75*i, 35, costOfItems[i] + '¢', 
			{ font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
			
		}
		
		
		/*** This is the key at the top that tells the player the cost of each item. ***/
		
		
		
		/*** Milk, Eggs, OJ, Peanutbutter ***/
		//This is going to be tuff to automate
		
		//486 by 597
		
		/*** It is important to note that I do not have these items, I only created them. ***/
		for( var j = 0; j<4; j++){
			if( j == 0){
				var tempHeight = 150; 
			}
			
			for( var i = 0; i<numberOfItems[j]; i++){
				var item = game.add.sprite(50+50*i, tempHeight, items[j]);
				this.scaleItem(60, 60, item);
				if(i == (numberOfItems[j] - 1)){
					var tempName;
					if(i == 0){//Singular
						tempName = itemStringSin[j];
					}
					else{
						tempName = itemStringPlu[j];
					}
					var tempText = game.add.text(140 +50*i, tempHeight + item.height/2, 'How much does ' + (i+1) +  tempName + ' cost?', 
					{ font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
					
					
					
					
					
					correctText[j] = game.add.text(275 +50*i + tempText.width, tempHeight + item.height/2+5, '', 
					{ font: "bold 18px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
					
					
					
					if(j == 0){
						var num1 = costOfItems[0]*numberOfItems[0];
						var num2 = costOfItems[1]*numberOfItems[0];
						var num3 = costOfItems[3]*numberOfItems[1];
						var num4 = costOfItems[2]*numberOfItems[2];
						this.createAnswerButtons(game, num1, num2, num3, num4, 0, 180 + 50*i + tempText.width, tempHeight + item.height/2);
					}
					else if(j == 1){
						var num1 = costOfItems[1]*numberOfItems[1];
						var num2 = costOfItems[0]*numberOfItems[0];
						var num3 = costOfItems[3]*numberOfItems[1];
						var num4 = costOfItems[2]*numberOfItems[0];
						this.createAnswerButtons(game, num1, num2, num3, num4, 1, 180 + 50*i + tempText.width, tempHeight + item.height/2);
					}
					else if(j == 2){
						var num1 = costOfItems[2]*numberOfItems[2];
						var num2 = costOfItems[3]*numberOfItems[3];
						var num3 = costOfItems[0]*numberOfItems[2];
						var num4 = costOfItems[3]*numberOfItems[2];
						this.createAnswerButtons(game, num1, num2, num3, num4, 2, 180 + 50*i + tempText.width, tempHeight + item.height/2);
					}
					else if(j == 3){
						var num1 = costOfItems[3]*numberOfItems[3];
						var num2 = costOfItems[0]*numberOfItems[3];
						var num3 = costOfItems[2]*numberOfItems[3];
						var num4 = costOfItems[1]*numberOfItems[1];
						this.createAnswerButtons(game, num1, num2, num3, num4, 3, 180 + 50*i + tempText.width, tempHeight + item.height/2);
					}

					
					
					
					tempHeight += (20 + item.height);
					
				}
			}
			
			
		}
		
		/*
		//849 by 565
		eggs = game.add.sprite(50, 150, 'eggs');
		eggs.scale.setTo(0.15, 0.15);
		
		//270 by 480
		oj = game.add.sprite(50, 300, 'oj');
		oj.scale.setTo(0.2, 0.2);
		
		//217 by 342
		peanutbutter = game.add.sprite(50, 400, 'peanutbutter');
		peanutbutter.scale.setTo(0.2, 0.2);
		*/
		
		this.stage.backgroundColor = '#3A00FF';
   	
	},
	
	update: function(game){
		if(this.zeroKey.isDown){
			this.state.start('MainMenu');
		}
		else if(this.oneKey.isDown){
			this.state.start('Making_Cents');
		}
		if(correctAnswer[0] && correctAnswer[1] && correctAnswer[2] && correctAnswer[3] && !setUpTotal){
			setUpTotal = true;
			console.log("Good to go! :)");
			
			game.add.text(20, 550, "What is the total cost?", { font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" });
		}
		
		
		
	},
	
	
	createButton:function(game,string, x, y, w, h, style, callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.anchor.setTo(0.5,0.5);
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x, button1.y, string, style);
		
		txt.anchor.setTo(0.5,0.5);
	},
	
	
	shuffle:function(arr){
		for( var i = 0; i<arr.length; i++){
			var temp = Math.floor(Math.random() * arr.length);
			var holder = arr[temp];
			arr[temp] = arr[i];
			arr[i] = holder;
		}
	},
	
	
	shuffle3:function(arr1, arr2, arr3){
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
	},
	
	createAnswerButtons:function(game, num1, num2, num3, num4, textNumber, width, height){
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
			this.shuffle(nums);
		}
		
		
		var heights = [height, height, height + 40, height + 40];
		var widths = [width, width + 60, width, width + 60];
		
		for( var i = 0;i<4; i++){
			if(nums[i] == answer){
				this.createButton(game, nums[i] + '¢', widths[i], heights[i], 50, 33,
				{font:"14px Arial", fill:"#fff", align:"center"},	
				function(){
				correctAnswer[textNumber] = true;
				correctText[textNumber].text = 'Correct!!!';
				});
			}
			else{
				this.createButton(game, nums[i] + '¢', widths[i], heights[i], 50, 33,
				{font:"14px Arial", fill:"#fff", align:"center"},	
				function(){
				correctText[textNumber].text = 'Try Again';
				});
			}
			
		}
		
		
	},
	
	scaleItem:function(width, height, item){
		var avg = (item.width/width + item.height/height) /2;
		item.scale.setTo(1 / avg, 1 / avg);
	}
	
}