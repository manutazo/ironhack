function Animal(name, sound){
this.name = name;
this.sound = name;
}
Animal.prototype.makeSound = function() {
  console.log(this.sound);
}

Animal.prototype.startNoise = function(){
    setInterval(function()){
}

var cat = new animal('cat', 'miau');


cat.makeSound();
var foo = cat.makeSound;

foo();
