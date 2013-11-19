//How many gallons of water need to fill a rectanglar pool
//Anonymous Functions--width of pool * depth of pool * length of pool * gallons multiplier 
var waterNeeded = function(width, depth, length, multiplier ){
	var area = width * length * depth * multiplier;
	return area;

}

var w = waterNeeded(16, 32, 4, 7.5);

console.log("You will need "+w+" gallons of water to fill this pool!");

