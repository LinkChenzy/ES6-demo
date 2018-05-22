/*
* @Author: chenzhiyuan
* @Date:   2018-05-22 11:58:28
* @Last Modified by:   chenzhiyuan
* @Last Modified time: 2018-05-22 12:00:55
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