var personobj = {
	firstname: "Simon",
	fullname: "",
	age: 37,
	married: true,
	hasOwnHair: null,
	children: [{
		firstname: "Erica"
	}, {
		firstname: "Isobel"
	}]
};

var personjson = JSON.stringify(personobj);
console.log(personobj);
console.log(personjson);

//JSON->JavaScript物件：JSON.parse(..)
//JavaScript物件->JSON：JSON.stringify(..)