
'use strict'//讓Node.js分辨是類別語法

class Person{
	constructor(name){
		this.name = name;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name}!`);
	}

}

//------------------------------------------------------------------------


class  Employee extends Person{
	constructor(name,job){
		super(name);
		this.job = job;
	}
	printGreeting () {
		console.log(`Hi, I am ${this.name}! and I am a ${this.job}`);
	}

} 

//---------------------------------------------------------------------------
var person1 = new Employee('alan','student')
person1.printGreeting();

var person2 = new Person('alan')
person2.printGreeting();

//可以藉由Person.prototype.的語法修改prototype裡面的方法，即可動態的修改所有物件的方法
Person.prototype.printGreeting = function(){
	console.log(`Hi, I am ${this.name}, and I have been changed!`);
}
person1.printGreeting();
person2.printGreeting();