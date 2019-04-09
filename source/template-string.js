//嵌套变量的用法
let name = 'LinkChen';
let str = `
	<div>
		<h2>${name}</h2>
	</div>
`;
console.log('str:',str)
document.querySelector('body').innnerHTML = str;

//嵌套函数用法

let getName = () => {
	return 'LinkChen test';
};
let str1 = `
	<div>
		<h2>${getName()}</h2>
	</div>
`;
console.log('str1:',str1)
document.querySelector('body').innnerHTML = str1;

//嵌套循环用法
let nameArr = ['LinkChen', 'tom', 'curry'];
let str2 = `
	<ul>
		${
			nameArr.map(item => `<li>${item}</li>`)
		}
	</ul>
`;
console.log('str2:',str2)
document.querySelector('body').innnerHTML = str2;