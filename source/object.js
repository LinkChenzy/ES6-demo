/*
* @Author: chenzhiyuan
* @Date:   2019-04-09 15:23:11
* @Last Modified by:   陈治远
* @Last Modified time: 2019-04-09 16:05:17
*/

// 对象新增的方法

// 1.Object.is()  ES5 比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，
// 后者的NaN不等于自身，以及+0等于-0。JavaScript 缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。
console.log("Object.is('foo', 'foo')",Object.is('foo', 'foo'));
// true
console.log('Object.is({}, {})',Object.is({}, {}))
// false

console.log(+0 === -0)//true
console.log(NaN === NaN) // false

console.log(Object.is(+0, -0)) // false
console.log(Object.is(NaN, NaN)) // true

// ES5可以通过以下代码部署object.is
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});

// 2.Object.assign() 浅拷贝
// zhu: Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target) // {a:1, b:2, c:3}

// 如果该参数不是对象，则会先转成对象，然后返回
typeof Object.assign(2) // 'object'
//Object.assign(undefined) // 报错
//Object.assign(null) // 报错

// 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
// 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
let obj = {a: 1};
console.log(Object.assign(obj, undefined) === obj)
 // true
console.log(Object.assign(obj, null) === obj)
 // true

// 其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。
const v1 = 'abc';
const v2 = true;
const v3 = 10;

const objv1v2v3 = Object.assign({}, v1, v2, v3);
console.log('objv1v2v3',objv1v2v3); // { "0": "a", "1": "b", "2": "c" }


// 浅拷贝 如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
const obj1 = {a:{b:1}}
const obj2 = Object.assign({},obj1)
obj1.a.b = 2;
console.log('obj2.a.b',obj2.a.b)

// Object.assign可以用来处理数组，但是会把数组视为对象。
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]

// 3.Object.getOwnPropertyDescriptors()
// ES5 的Object.getOwnPropertyDescriptor()方法会返回某个对象属性的描述对象（descriptor）。
// ES2017 引入了Object.getOwnPropertyDescriptors()方法，返回指定对象所有自身属性（非继承属性）的描述对象
const PropertyDescriptors = {
  foo: 123,
  get bar() { return 'abc' }
};

console.log('PropertyDescriptors',Object.getOwnPropertyDescriptors(PropertyDescriptors))
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: get bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }

// 5.Object.keys()/Object.values()/Object.entries()/Object.fromEntries()
// Object.keys()
// ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
const objkeys = { foo: 'bar', baz: 42 };
console.log('Object.keys(objkeys)',Object.keys(objkeys))
// ["foo", "baz"]


// ES2017 引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。
let {keys, values, entries} = Object;
let obj2017 = { a: 1, b: 2, c: 3 };

for (let key of keys(obj2017)) {
  console.log('keys',key); // 'a', 'b', 'c'
}

for (let value of values(obj2017)) {
  console.log('value',value); // 1, 2, 3
}

for (let [key, value] of entries(obj2017)) {
  console.log('[key, value]',[key, value]); // ['a', 1], ['b', 2], ['c', 3]
}

// 遍历的规则 属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a。
const objvalue = { 100: 'a', 2: 'b', 7: 'c' };
Object.values(obj)
// ["b", "c", "a"]
// Object.values只返回对象自身的可遍历属性。
const objvalue1 = Object.create({}, {p: {value: 42}});
Object.values(objvalue1) // []
// 只要把enumerable改成true，Object.values就会返回属性p的值。
const objvalue2 = Object.create({}, {p:
  {
    value: 42,
    enumerable: true
  }
});
Object.values(objvalue2) // [42]
// Object.values会过滤属性名为 Symbol 值的属性。
Object.values({ [Symbol()]: 123, foo: 'abc' });
// ['abc']

// Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
const objentries = { foo: 'bar', baz: 42 };
Object.entries(objentries)
// [ ["foo", "bar"], ["baz", 42] ]

// Object.entries方法的另一个用处是，将对象转为真正的Map结构。
const objentries2 = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(objentries2));
console.log(map) // Map { foo: "bar", baz: 42 }

// 谷歌浏览器暂不支持
// // Object.fromEntries() 方法是Object.entries()的逆操作，用于将一个键值对数组转为对象。
// Object.fromEntries([
//   ['foo', 'bar'],
//   ['baz', 42]
// ])
// // { foo: "bar", baz: 42 }
// // 该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。
// // 例一
// const entries1 = new Map([
//   ['foo', 'bar'],
//   ['baz', 42]
// ]);

// Object.fromEntries(entries1)
// // { foo: "bar", baz: 42 }

// // 例二
// const map2 = new Map().set('foo', true).set('bar', false);
// Object.fromEntries(map2)
// console.log(map2)
// // { foo: true, bar: false }

// // 该方法的一个用处是配合URLSearchParams对象，将查询字符串转为对象。
// Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
// // { foo: "bar", baz: "qux" }