'use strict'
class Fruits{
	construtor(fruit){
		this.fruit = fruit;//Apple.fruit = 你輸入的直
	}
	PrintFruits(){
		console.log(`Yes, i love ${this.fruit}!`);
	}
}

var Fruits1 =new Fruits('Apple'); 
Fruit1.PrintFruits();

var Fruits2 =new Fruits('Orange');
Fruits2.PrintFruits();