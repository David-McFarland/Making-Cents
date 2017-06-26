var Game = {};

Game.Setup = function(game){
	
};

Game.Setup.prototype = {
	init:function(){
		
		this.stage.disableVisibilityChange = true;//This will keep the game running, even when a user clicks out of the game
	},
	
	preload:function(){
		
		this.load.image('preloaderBar', 'assets/preloader.png');
		
	},
	
	create:function(){
		
		this.state.start('Preloader');
		
	}
	
}