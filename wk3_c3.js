
//每一組name:value對，都稱為此一物件的property

var Obj = {
	key1:'value1',//分號＆逗號 ！！
	key2:'value2',
	func1:function() {
		console.log(`hi, ${this.key1} ${this.key2}`);//物件版的property
	}
}; //分號！！

Obj.func1();//用dot的方式呼叫greet()
//Obj.key1;

Obj['key1']//利用中括號，裡面使用property name，也可以取得name:value對應的value資料
//Obj['key1','key2']


//---------------------------------------------------------------------------------


let name,age;
let info = {
	name: name,//注意！！此沒分號，這是參數
	age: age,
	printinfo: function(){
		console.log(`hi, Name: ${this.name} ,Age: ${this.age}`);
	}
}

		info.name = "alan";//注意！！此要分號，這是真的值
		info.age = "20";//注意！！ 此要分號，這是真的值
		info.printinfo();



