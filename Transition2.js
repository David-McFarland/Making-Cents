Game.Transition2 = function(game){
	
	
};



Game.Transition2.prototype = {
	
	create:function(game){
	
		//this.stage.backgroundColor = '#3A88FF';
		
		var text = game.add.text(400, 200, "You Win!!!",
		{font:"36px Arial", fill:"#fff", align:"center"});
		text.anchor.setTo(0.5, 0);
		this.createButton(game, 'Replay', 50, 300, 300, 100, 
		function() {
			hardRestart = true;
			restart = true;
			this.state.start('Making_Cents');
			
		});
		
		this.createButton(game, 'MainMenu', 450, 300, 300, 100, 
		function() {
			
			this.state.start('MainMenu');
			
		});
	
	},
	
	update:function(game){
		
	},
	
	createButton:function(game,string, x, y, w, h,callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x + w/2, button1.y + h/2, string, {font:"36px Arial", fill:"#fff", align:"center"});
		
		txt.anchor.setTo(0.5,0.5);
	}
	
	
};