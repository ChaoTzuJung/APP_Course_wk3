var person = {
	firstname:'alan',
	lastname:'chao',
	getfullname:function(){
		var fullname = this.firstname + ' ' + this.lastname;
		return fullname;
	}

} 
var logname =  function(){
	console.log('log:' + this.getfullname() )
}

var logpersonname = logname.bind(person);
logpersonname();


//用在callback函數的Bind
//
let greet = function(fn) {
  fn();
};

let person = {
  name: 'Chi-Shan Yu',
  hello: function(){
    console.log(`Hello ${this.name}`);
  },
  sayHello: function(){
    greet(this.hello.bind(this));
  }
};

person.sayHello();

let newPerson = {
  name: 'Chi-Shan Yu',
  sayHello: function(){
    greet(
      () => console.log(`Hello ${this.name}`)
    );
  }
};

newPerson.sayHello();




