var Car = function(model,noise){
  this.model = model;
  this.noise = noise;
  this.wheels = 4;
};

Car.prototype.makeNoise = function(){
  console.log(this.noise + ', here we go!!')
}

var ford = new Car('Ford,','Brooom');
ford.makeNoise();
var car = {
  model: 'Ford',
  noise: 'BRROOOMM',
  wheels: 4,
  makeNoise: function(){console.log(this.noise + ', here we go!')}
};

car.makeNoise()