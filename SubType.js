/*
 * SubType inherits SuperType
 */
function SubType(name, age){
	SuperType.call(this, name);	//steal constructor for different instance properties
	this.age = age || 16;
}

SubType.prototype = new SuperType();	//to inherit all SuperType's methods
SubType.prototype.constructor = SubType;	//to correct constructor pointer
SubType.prototype.methodToOverride = function(){	//simple override
	console.log("I think I'm overriden.");
	console.log(this);
};

