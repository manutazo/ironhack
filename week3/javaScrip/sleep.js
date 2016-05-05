function checkInPassenger(name, customersArray) {
	var passengerCheked;
	for (var i = 0; i<customersArray.length; i++){
		if (customersArray[i] == name) {
			passengerCheked = function(){
				console.log ("hy," + name + "you're passenger #"+(i+1));
			};
		}
	}
	return passengerCheked;
}
var flightToBali = ["wayan", "putu", "ni lhu", "nyoman"];
var CounterCkeckIn = checkInPassenger("Gede", flightToBali);
CounterCkeckIn( );