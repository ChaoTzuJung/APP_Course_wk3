(function(){console.log(this)})() //greet3的為簡化版



let person ={
	firstname: 'Tzu-Jung',
	lastname: 'Chao',
	greet1:function(){
		console.log(this);
	},
	greet2:()=>{
		console.log(this);
	},
	greet3:function(){ 
		(()=> console.log(this))(); 
		}
	
};//分號

person.greet1();
person.greet2();
person.greet3();