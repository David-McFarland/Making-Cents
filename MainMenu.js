Game.MainMenu = function(game){
	
	
};



Game.MainMenu.prototype = {
	
	create:function(game){
		
		this.stage.backgroundColor = '#3A00FF';
		
		var style = { font: "bold 96px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

		//  The Text is positioned at 0, 100
		var text = game.add.text(0, 0, "Making Cents", style);
		text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

		//  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
		text.setTextBounds(0, 50, 800, 100);
	
	
		var s = game.add.sprite(80, 240, 'penny');
		
		s.rotation = -0.64;
		game.add.text()
		this.createButton(game, "Play Game", game.world.centerX, 250, 300, 100, 
		function(){
			game1 = true;
			game2 = false;
			bothGames = false;
			difficulty = false;
			
			if(skip){
				this.state.start('FindingCost');
			}
			else{
				this.state.start('Instruction');
			}
		});
		
		
		this.createButton(game, "How To Play", game.world.centerX, 375, 300, 100, 
		function(){
			game1 = false;
			game2 = false;
			bothGames = true;
			difficulty = false;
			console.log(skip);
			this.state.start('Instruction');
			
			
		});
		
		this.createButton(game, "Settings", game.world.centerX, 500, 300, 100, 
		function(){
			game1 = false;
			game2 = false;
			bothGames = false;
			difficulty = true;
			this.state.start('Instruction');
		});
		
	},
	
	update:function(game){
		
	},
	
	createButton:function(game,string, x, y, w, h,callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.anchor.setTo(0.5,0.5);
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x, button1.y, string, {font:"32px Arial", fill:"#fff", align:"center"});
		
		txt.anchor.setTo(0.5,0.5);
	}
	
	
};