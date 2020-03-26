function Cat() {
	// body...
	this.die = true;
}	
Cat.prototype.sleep = function() {
	console.log('Sleep...');
};
var Cat1 = new Cat();
console.log(Cat1.sleep());