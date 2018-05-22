/*
* @Author: chenzhiyuan
* @Date:   2018-05-22 09:55:19
* @Last Modified by:   chenzhiyuan
* @Last Modified time: 2018-05-22 10:35:30
*/
// promise结构
new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://happymmall.com/user/get_user_info.do',
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err);
		}
	});
}).then((res)=>{
	console.log('success:',res);
},(err)=>{
	console.log('err:',err);
});

// 链式promise
var promiseFn1 = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://happymmall.com/user/get_user_info.do',
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err);
		}
	});
});

var promiseFn2 = new Promise((resolve,reject)=>{
	$.ajax({
		url:'http://happymmall.com/cart/get_cart_product_count.do',
		type:'post',
		success(res){
			resolve(res);
		},
		error(err){
			reject(err);
		}
	});
});
promiseFn1.then(()=>{
	console.log('promiseFn1 success');
	return promiseFn1;
}).then(()=>{
	console.log('promiseFn2 success')
});
