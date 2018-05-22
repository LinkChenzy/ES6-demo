/*
* @Author: chenzhiyuan
* @Date:   2018-05-22 10:42:14
* @Last Modified by:   chenzhiyuan
* @Last Modified time: 2018-05-22 17:14:21
*/
// class constructor
class Animal{
	constructor() {
		this.name = 'fish'
	}
	getName(){
		return this.name;
	}
}
let animal = new Animal();
console.log(animal.getName());

class Animal{
	constructor(name) {
		this.name = name;
	}
	getName(){
		return this.name;
	}
}
let animal = new Animal('fish test');
console.log(animal.getName());

// class的继承
class Animal{
	constructor() {
		this.name = 'fish'
	}
	getName(){
		return this.name;
	}
}

class Cat extends Animal{ //使用exrends关键字子类里面是没有this
	constructor(){
		super() //需要super调用父类的constructor
		this.name = 'cat';
	}
}
let animal = new Animal();
let cat = new Cat();
console.log(cat.getName());
console.log(animal.getName());

// ES5对象的使用
var name    = 'Rosen',
    age     = 18;
var obj = {
    name: name,
    age: age,
    getName: function(){
        return this.name;
    },
    getAge: function(){
        return this.age;
    }
}
console.log(obj);
//ES6对象的使用
let name    = 'Rosen',
    age     = 18;
let obj = {
	// 变量名可以直接作为对象的属性名称
    name,
    age,
    //对象的方法可以简写
    getName(){
        return this.name;
    },
    //表达式可以作为属性名或者方法
    ['get' + 'Age'](){
        return this.age;
    }
}
console.log(obj);

Object.keys(obj);//列出obj的所有属性和方法
Object.assign({a:1},{b:2});//合并两个对象












