Game.Transition1 = function(game){
	
	
};



Game.Transition1.prototype = {
	
	create:function(game){
	
		//this.stage.backgroundColor = '#3AFFFF';
		
		this.createButton(game, "Menu", game.world.centerX, 16, 100, 33, 
		function(){
			game.state.start('MainMenu');
		});
		this.createButton(game, 'Replay', 50, 350, 300, 100, 
		function() {
			
			this.state.start('FindingCost');
			
		});
		
		this.createButton(game, 'Continue', 450, 350, 300, 100, 
		function() {
			
			game1 = false;
			game2 = true;
			bothGames = false;
			difficulty = false;
			
			
			if(skip){
				this.state.start('Making_Cents');
			}
			else{
				this.state.start('Instruction');
			}
			
		});
		
	},
	
	update:function(game){
		
	},
	
	createButton:function(game,string, x, y, w, h,callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		//button1.anchor.setTo(0.5,0.5);
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x + w/2, button1.y + h/2, string, {font:"36px Arial", fill:"#fff", align:"center"});
		
		txt.anchor.setTo(0.5,0.5);
	}
	
	
};