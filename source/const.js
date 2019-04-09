// ES6 声明常量的语法
const PI = 3.1415926;

// ES5 声明常量的语法
Object.defineProperty(typeof global === "object" ? global : window, "PI2", {
	value: 3.1415926,
	enumerable: true,
	writable: false,
	configurable: false
});

// 执行运行结果：

console.log([PI, window.PI2])

// 修改常量
// PI = 4;
// window.PI2=4;

//不存在变量提升
console.log(foo);
var foo = 1; //undefined 先执行var提前声明foo = undefined

console.log('bar',bar);
let bar = 1; //报错：bar is not defined  顺序执行