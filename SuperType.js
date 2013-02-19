function SuperType(name){
	this.name = name || "super man!";
}

SuperType.prototype = {
	constructor: SuperType,
	superMethod: function(){
		console.log("super method!");
	},
	methodToOverride: function(){
		console.log("Am I overriden?");
		console.log(this);
	}
};