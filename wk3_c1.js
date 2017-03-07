var number = [1,2,3];
var newnum = [];
for (var i =0 ; i<number.length; i++) {
	newnum.push(number[i]*2);

}
	console.log(newnum);


var newnum2 = [];

newnum2 = number.map(
		(number) => number＊2
  		//number=>{return number * 2}
  		//function(number){return number * 2}
  		//分號不能加在後面
	);


console.log(newnum2);

//取出元件，建立新陣列
var Cars = [
  {model:'Buick',price:'cheap'},
  {model:'BMW',price:'expansive'}
  ];
  var prices = Cars.map((car)=>car.price);
console.log(prices);

//使用map產生HTML的元件，可以傳遞到別的地方使用
//
$(document).ready(function(){
  const carModel = Cars.map(car=>`<div>${car.model}</div>`);
  $('body').append(carModel);
});

//push用法
let a = ["1", "2"];
console.log(a);

a.push('3');
console.log(a);

//Spread operator(在陣列前面加上 "…")

let array1 = [1,2,3]
let array2 = [4,5,6]
//setting
let array3 = [array1, array2]
console.log(array3)
//[[1, 2, 3], [4, 5, 6]]
let array4 = [...array1, ...array2]
console.log(array4)
//[1, 2, 3, 4, 5, 6]

//也可利用spread operator修改『物件』裡面的個別元素
let state= {a:1, b:2, c:3}
console.log(state);
//a = 1, b = 2, c = 3
state = { ...state, a:10 }
console.log(state)
//a = 10, b = 2, c = 3

//也可利用spread operator來取得個別的函數參數
//base是固定（被加數），...numbers可以列很多個（加數）
 function add(base, ...numbers){
   numbers.forEach(function (number) {
		console.log(base + number);
	});
 }

add(3, 5, 7, 1);












