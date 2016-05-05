var isConanABarbarian;
isConanABarbarian
// The console shows undefined because there is no value for `isConanABarbarian` yet.

isConanABarbarian = true; //let’s assign a boolean value to our variable

// You can return the variable to undefined by assigning undefined.
isConanABarbarian = undefined; // Who knew?
// Normally you wouldn't need to do this though...

var conanStrength;
conanStrength = 100;

// You can assign while you declare the variable
var barbarian = { name: 'Conan', strength: 100 }; // Remember what data type this is?
// As you see, objects can have mixed data types for values
// Type in `barbarian` to explore the object barbarian

// They can even contain lists or other objects
var superhero = { name: 'Batman', inventory: ['rope', 'batarang', 'darts'] }; // What data type is the inventory?
superhero

// Combinations between arrays and objects are endless.
var players = [ { name: 'Marc', age: 22 }, { name: 'Sophie', age: 21 } ];
// Explore complex objects inside the console
players

// An array can also store mixed values.
var mixed = [ 12345, 6549, 'ZNN009', { value: 'an object!' } ];
// Even other arrays!
var coordinates = [ [0, 0], [1, 2], [3, 4], [5, 6] ];

// You can use any string as the key but you will need quotes if the key name
// does not match variable naming rules.
var alumniByCity = {
  Miami: 20,
  'New York': 5,
  'San Francisco': 10
};

// You may want to include some special characters in a string  such as tabs, new lines and
// quotes. If you need some of these characters use:
//
//   \n for new lines
//   \t for a tab
//   \' for a single quote
//   \" for a double quote
//   \\ for a back slash
//
var couplet =
  'Whether or not we find what we are seeking\nIs idle, biologically speaking.';
// This breakline is totally legal. We are trying to keep lines under 80
// characters.

// As a challenge try to write a string with a double backslash inside: \\.

// You can declare multiple variables at the same time.
var aVariable = 1,
    anotherOne = 2,
    andAnother = 3
;

// And remember, you can assign different types of values to the same variable.
var number = 1;
number = { real: 5, imaginary: 2 };
number = "Hello world!";

// Notice variable names mean nothing for JavaScript. They are only meaningful
// for humans reading the code so try to give them good names.