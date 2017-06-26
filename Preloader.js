Game.Preloader = function(game){
	
	this.preloadBar = null;
	
};

Game.Preloader.prototype = {
	
		/*
		init:function(){
			//Maybe add something to the effect of "please wait while the game is loading."
		},
		*/
		preload:function(){
			
			
			this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY, 'preloaderBar');
			this.preloadBar.anchor.setTo(0.5, 0.5);
			this.load.setPreloadSprite(this.preloadBar);
			
			
			
			this.load.image('button', 'assets/button.png');
			this.load.image('textField', 'assets/textfield.png');
			
			/*** Coins ***/
			this.load.image('penny', 'assets/penny.png');
			this.load.image('nickel', 'assets/nickel.png');
			this.load.image('dime', 'assets/dime.png');
			this.load.image('quarter', 'assets/quarter.png');
			this.load.image('halfdollarcoin', 'assets/halfDollarcoin.png');
			this.load.image('dollarcoin', 'assets/dollarCoin.png');
			
			
			/*** Shopping Stuff ***/
			this.load.image('eggs', 'assets/eggs.png');
			this.load.image('milk', 'assets/milk.png');
			this.load.image('peanutbutter', 'assets/peanutbutter.png');
			this.load.image('oj', 'assets/oj.png');
			
			/*** Piggy Bank ***/
			this.load.image('piggybank', 'assets/piggybank.png');
			
			
			//LOAD ALL ASSETS
			
			



		
			
			
			
		},
		
		create:function(){
			
			//this.state.start('Buying');
			this.state.start('MainMenu')
			
		}
	
}