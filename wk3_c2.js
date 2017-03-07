
//參數是一個函數

function kkbox(callback){
	console.log("hi;");
	var data = {       //一定要下這個，但key & value可以空的
		name: 'alan',
		age: 20

	};
	callback(data);//呼叫回呼函數
}

//建立一個回呼函數
kkbox(data=>{
		console.log("bye;");
		}

	)