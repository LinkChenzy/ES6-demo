/*
* @Author: chenzhiyuan
* @Date:   2018-05-22 11:58:28
* @Last Modified by:   陈治远
* @Last Modified time: 2019-04-09 13:46:45
*/
let str = 'string';
let obj = {
    name : 'James'
};
let fn  = () => {
    console.log('module test')
}

export {
    str,
    obj,
    fn
}
export default {a:1} //js文件默认输出的对象