function Car(make, model, year, color, previous_owners, state, current_owner, passengers){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.previous_owners = [];
	this.state = "off";
	this.current_owner = "Manufacturer";
	this.passengers = [];
}





Car.prototype.sale = function(newOwner){
	this.previous_owners.push(this.current_owner);
	this.current_owner= newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};
Car.prototype.start = function(state){
	this.state = "on"
};
Car.prototype.off = function(off){
	this.state = "off"
};
Car.prototype.driveTo = function(destination){
	if (this.state === "on"){
		console.log("driving to" + destination)
	}
};
Car.prototype.park = function(park){
	if (this.state === "off"){
		console.log("parked!")
	}
}
	Car.prototype.pick_up = function(name){
		if (this.state === "on") {
			console.log("driving to pick up " + name + " .");
			this.passengers.push(name);
		}
	};


	Car.prototype.dropOff = function(name){
		var index = this.passengers.indexOf(name);
		if (this.state === "on" && index !== -1){
			this.passengers.splice(index, 1);
}
};
module.exports=Car;