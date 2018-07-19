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

### 前端启动
```
npm install 
npm start
```

###API地址：http://10.144.106.155:80/


###企业、游客注册
- **企业、游客注册**
> |url|method|instruction |   
|:-----   |:------|:-----------------------------  |
|/user/company  |POST    |企业用户、游客注册 |

- **企业、游客注册请求字段**
> |params|required|type |instruction |   
|:-----   |:------ |:------|:-----------------------------  |
|customName             |true |string    |公司名称|
|userName               |true |string    |联系人姓名|
|sex                    |true |int       |科学家性别 1：男 0：女|
|position               |true |string    |联系人职位|
|select                 |true |int       |公司规模|
|country                |true |string    |公司地址所在国家|
|province               |true |string    |公司地址所在省份|
|city                   |true |string    |公司地址城市|
|address                |true |string    |公司详细地址|
|customField            |true |int       |公司所在领域|
|otherCustomField       |false|string    |其他公司所在领域|
|focusField             |true |array     |关注领域|
|otherFocusField        |false|string    |其他关注 领域|
|skill                  |true |array     |技术合作方式|
|otherSkillField        |false|string    |其他技术合作方式|
|email                  |ture |string    |登录邮箱|
|phone                  |ture |string    |登录手机号|
|captcha                |ture |string    |验证码|
|fileUrl                |true |string    |营业执照图片|
|userType               |true |int       |注册人的类型 1：VIP会员 2：普通会员 3：科学家会员 4：试用会员|

- **注册返回字段**
> |params|required|type |instruction |   
|:-----   |:------ |:------|:-----------------------------  |
|status   |true |int    |返回结果状态。0：注册正常；1：注册错误。|

###科学家注册
- **科学家注册**
> |url|method|instruction |   
|:-----   |:------|:-----------------------------  |
|/user/scientist  |POST    |科学家注册|

- **科学家请求字段**
> |params|required|type |instruction |   
|:-----   |:------ |:------|:-----------------------------  |
|userNameCN        |true |string    |科学家中文名称|
|userNameEN        |true |string    |科学家英文名称|
|sex               |true |int       |科学家性别 1：男 0：女|
|email             |true |string    |科学家登录邮箱|
|phone             |true |string    |科学家登录邮箱|
|captcha           |true |string    |验证码|
|college           |true |string    |科学家所在高校机构|
|department        |true |array     |科学家所在部门职位|
|postion           |true |array     |科学家所在部门职位|
|otherCollege      |fasle|array     |科学家所在其他高校机构|
|otherDepartment   |false|array     |科学家其他所在部门|
|otherPostion      |false|array     |科学家其他所在部门职位|
|avatar            |true |string    |科学家头像路径|
|userType          |true |int       |注册人的类型 1：VIP会员 2：普通会员 3：科学家会员 4：试用会员|

- **注册返回字段**
> |params|required|type |instruction |   
|:-----   |:------ |:------|:-----------------------------  |
|status   |true |int    |返回结果状态。0：注册正常；1：注册错误。|

###注册信息
- **请求注册信息**
> |url|method|instruction |   
|:-----   |:------|:-----------------------------  |
|/user/info   |GET    |企业和游客注册时的注册信息领域、合作方式请求。|

- **返回参数**
> |params|required|type |instruction |    
|:-----   |:------|:------- |:------- |
|member_domain  |ture    |array |公司所在领域 |
|domain         |ture    |array |公司关注领域 | 
|member_coopway |ture    |array |技术合作方式 | 

###验证码
- **验证码**
> |url|method|instruction |   
|:-----   |:------|:-----------------------------  |
|/user/captcha  |GET    |获取验证码|

- **请求参数**
> |params|required|type |instruction |    
|:-----   |:------|:------- |:------- |
|email    |ture    |string  |邮箱 |
|phone    |ture    |string  |手机号 | 
|type     |ture    |int     |1:注册 2：登录 | 

- **返回请求参数**
> |params|required|type |instruction |    
|:-----   |:------|:------- |:------- |
|email_status  |ture |int       |1:邮箱已经存在  0：邮箱未存在可以注册  |
|phone_status  |ture |int       |1:手机已经存在  0：手机未存在可以注册 | 
|code_status   |ture |int       |1:验证码发送失败  0：验证码正常发送 | 
|code          |ture |string    |验证码信息 | 

###登录
- **登录**
> |url|method|instruction |   
|:-----  |:------|:-----------------------------  |
|/user/login  |GET    |用户登录|

- **请求参数**
> |params|required|type |instruction |    
|:-----   |:------|:------- |:------- |
|email    |ture   |string   |邮箱/手机号  |
|password |ture   |string   |密码 | 

- **返回接收参数**
> |params|required|type |instruction |    
|:-----   |:------|:------- |:------- |
|sigin_status |ture   |int        |1:失败  0：登录成功 | 
|isFirst      | ture  |int        |1:是第一次登录  0：不是的一次登录 | 
|user_type    |ture   |int        |1：VIP会员 2：普通会员 3：科学家会员 4：试用会员| 
|message      |ture   |string     |登录状态描述 | 



