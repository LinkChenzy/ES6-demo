//嵌套变量的用法
let name = 'LinkChen';
let str = `
	<div>
		<h2>${name}</h2>
	</div>
`;
document.querySelector('body').innnerHTML = str;

//嵌套函数用法

let getName = () => {
	return 'LinkChen test';
};
let str = `
	<div>
		<h2>${getName()}</h2>
	</div>
`;
document.querySelector('body').innnerHTML = str;

//嵌套循环用法
let nameArr = ['LinkChen', 'tom', 'curry'];
let str = `
	<ul>
		${
			nameArr.map(item => `<li>${item}</li>`)
		}
	</ul>
`;
document.querySelector('body').innnerHTML = str;