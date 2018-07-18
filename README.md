# ES6-demo
### 使用
#### a. 命令行执行<br>
     npm start
#### b. 浏览器上输入 http://localhost:9000
#### c. 去 index.js 去编写代码吧，浏览器会自动刷新，不要忘了打开Chrome浏览器调试面板看输出。（按F12即可）

### 教程

* [常量](https://github.com/LinkChenzy/ES6-demo/blob/master/source/const.js)
* [作用域](https://github.com/LinkChenzy/ES6-demo/blob/master/source/scope.js)
* [箭头函数](https://github.com/LinkChenzy/ES6-demo/blob/master/source/arrow-function.js)
* [类、类继承](https://github.com/LinkChenzy/ES6-demo/blob/master/source/class.js)
* [模板字符串、嵌套变量函数等](https://github.com/LinkChenzy/ES6-demo/blob/master/source/template-string.js)
* [parameter](https://github.com/LinkChenzy/ES6-demo/blob/master/source/parameter.js)
* [proxy](https://github.com/LinkChenzy/ES6-demo/blob/master/source/proxy.js)
* [promise](https://github.com/LinkChenzy/ES6-demo/blob/master/source/promise.js)
* [模块化输出引入](https://github.com/LinkChenzy/ES6-demo/blob/master/source/modules)  


###API



 url | method  | format | params | required | type | instruction
-- | :---- | :---- | :---- | :---- | :---- |:-------------
/singup/custom | POST | JOSN | customName | ture | string | 公司名称
企业用户、游客注册 |  |  | userName | ture | string | 联系人姓名
|  |  |  | sex | ture | int | 联系人性别1：男 2：女
|  |  |  | position | ture | string | 联系人职位
|  |  |  | select | ture | int | 公司规模
|   |  |  | country | ture | string | 公司地址所在国家
|  |  |  | province | ture | string | 公司地址所在省份
|   |  |  | city | ture | string | 公司地址城市
|  |  |  | address | ture | string | 公司详细地址
|   |  |  | customField | ture | int | 公司所在领域
|   |  |  | otherCustomField | false | string | 其他公司所在领域
|  |  |  | focusField | ture | array | 关注领域
 |  |  |  | otherFocusField | false | string | 其他关注领域
|  |  |  | skill | ture | array | 技术合作方式
 |   |  |  | otherSkillField | false | string | 公司地址城市
 | |  |  | email | ture | string | 登录邮箱
|   |  |  | phone | ture | string | 登录手机号
 | |  |  | captcha | ture | string | 验证码
  | |  |  | fileUrl | ture | string | 营业执照图片
 | |  |  | userType | ture | int | 注册人的类型 1：企业 2：游客 3：科学家




 url | method  | format | params | required | type | instruction
-- | :---- | :---- | :---- | :---- | :---- |:-------------
/signup/scientist | POST | JOSN | userNameCN | ture | string | 科学家中文名称
科学家用户注册 |  |  | userNameEN | ture | string | 科学家英文名称
|  |  |  | sex | ture | int | 科学家性别 1：男 2：女
|  |  |  | email | ture | string | 科学家登录邮箱
|  |  |  | phone | ture | string | 科学家登录手机号
|   |  |  | captcha | ture | string | 验证码
|  |  |  | college | ture | string | 科学家所在高校机构
|   |  |  | department | ture | array | 科学家所在部门
|  |  |  | postion | ture | array | 科学家所在部门职位
|  |  |  | otherCollege | ture | array | 科学家所在高校机构
|   |  |  | otherDepartment | ture | array | 科学家所在部门
|  |  |  | otherPostion | ture | array | 科学家所在部门职位
  | |  |  | avatar | ture | string | 科学家头像路径
 | |  |  | userType | ture | int | 注册人的类型 1：企业 2：游客 3：科学家


###### 注册返回字段

> |返回字段|字段类型|说明                              |
|:-----   |:------|:-----------------------------   |
|status   |int    |返回结果状态。0：注册正常；1：注册错误。   |



####请求注册信息

 url | method  | instruction 
-- | :----: |:-------:
 signup/info | GET  | 企业和游客注册时的注册信息领域、合作方式请求



 params | required | type | instruction
-- | :----: | :----: |:-------------:
 | ture | array | 公司所在领域
 | ture | array | 公司关注领域
  | ture | array | 技术合作方式


####验证码

 url | method  | instruction 
-- | :----: |:-------:
 signup/info | GET  | 企业和游客注册时的注册信息领域、合作方式请求


#####请求参数

 params | required | type | instruction
-- | :----: | :----: |:-------------:
 email | ture | string |  邮箱
 phone | ture | string | 手机号
 type | ture | int | 1:注册 2：登录


#####返回接收参数

 params | required | type | instruction
-- | :----: | :----: |:-------------:
 email_status | ture | int |  1:邮箱已经存在  0：邮箱未存在可以注册
 phone_status | ture | int |  1:手机已经存在  0：手机未存在可以注册
 code_status | ture | int |  1:验证码发送失败  验证码正常发送
 code | ture | string |  验证码信息



 ####登录
 
 url | method  | instruction 
-- | :----: |:-------:
 signin/user | GET  | 企业和游客注册时的注册信息领域、合作方式请求


#####请求参数

 params | required | type | instruction
-- | :----: | :----: |:-------------:
 email | ture | string |  邮箱/手机号
 password | ture | string | 密码


 #####返回接收参数
 
 params | required | type | instruction
-- | :----: | :----: |:-------------:
 sigin_status | ture | int |  1:失败  0：登录成功
 isFirst | ture | int |  1:是第一次登录  0：不是的一次登录
 user_type | ture | int | 1：企业 2：游客 3：科学家
 msg | ture | string | 登录状态
