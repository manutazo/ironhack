var Viking = function(nombre, salud, fuerza){
	this.nombre = nombre; 
	this.salud = salud;
	this.fuerza = fuerza;
};

Viking.prototype.ataque = function(enemy){
	enemy.salud -= this.fuerza
};

var Saxon = function(salud, fuerza){
	this.salud = salud;
	this.fuerza = fuerza;
	return Math.random();
};

Saxon.prototype.ataque = function(enemy){
	enemy.salud -= this.fuerza
};


var Arena = function(){
	this.turns = 0;
};

Arena.prototype.fight = function(fighter1,fighter2){
	this.fighter1 = fighter1;
	this.fighter2 = fighter2;
	salud(fighter1,fighter2, 10); 
};

var BattleCheck = function(fighter1, fighter2){
	if (fighter1.salud > fighter2.fuerza || fighter2.salud > fighter1.fuerza){
		return true
	}else{
		return false
	}
};

var salud = function(fighter1, fighter2, turns){
	while (turns < 15) {
		console.log(fighter1);
		if(BattleCheck(fighter1,fighter2) === true){
			fighter1.ataque(fighter2);
			fighter2.ataque(fighter1);
			turns++;
			console.log("viking1" + " " + fighter1.salud)
			console.log("saxon1" + " " + fighter2.salud)
			console.log("-------------" + " " + "(" + turns + ")")
		} else {
			console.log("battle end")
		};
	};
};

viking1 = new Viking("viking1",200,20);
viking2 = new Viking("viking2",400,40);

saxon1 = new Saxon(50, 20);

train = new Arena()

train.fight(viking1,saxon1)
