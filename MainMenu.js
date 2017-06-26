Game.MainMenu = function(game){
	
	
};



Game.MainMenu.prototype = {
	
	create:function(game){
		
		//this.stage.backgroundColor = '#3A00FF';
		
		var style = { font: "bold 48px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

		//  The Text is positioned at 0, 100
		var text = game.add.text(0, 0, "Making Cents", style);
		text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

		//  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
		text.setTextBounds(0, 100, 800, 100);
	
	
		var s = game.add.sprite(80, 240, 'penny');
		
		s.rotation = -0.64;
		game.add.text()
		this.createButton(game, "Play Game", game.world.centerX, game.world.centerY + 32, 300, 100, 
		function(){
			this.state.start('FindingCost');
		});
		
		
		this.createButton(game, "About", game.world.centerX, game.world.centerY + 196, 300, 100, 
		function(){
			console.log('About');
		});
		
	},
	
	update:function(game){
		
	},
	
	createButton:function(game,string, x, y, w, h,callback){
		var button1 = game.add.button(x,y,'button', callback, this,2,1,0);
		
		button1.anchor.setTo(0.5,0.5);
		button1.width = w;
		button1.height = h;
		
		var txt = game.add.text(button1.x, button1.y, string, {font:"14px Arial", fill:"#fff", align:"center"});
		
		txt.anchor.setTo(0.5,0.5);
	}
	
	
};