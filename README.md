# 移动端招聘类app

通过react技术栈和node.js(Express)后台技术实现的一款招聘类的手机端app

## 项目开发思想

* 该项目是基于React、Express、antd-mobile建立起来得单页web应用
* 本项目是由creat-react-app脚手架构建起的项目，支持webpack打包配置
* 根据拉勾网app的UI及构建，并使用antd-mobile库参考实现前端部分组件
* 项目由react-router实现前端路由，并支持自定义路由
* 由Express实现后台逻辑操作，redux实现前端状态数据管理
* 而axios则实现前后端联调工作，达到数据交互功能

## 技术栈
* **React(v16.0)**：实现app前端页面模块构建
* **Redux(v3.7)**：实现不同组件间的状态管理以及组件通信
* **React-router(v4.2)**：实现单页路由，并支持自定义路由
* **Express**：基于node.js简洁web应用框架
* **Socket.io**：实现实时消息推送
* **axios**：基于Promise的 HTTP 库，通过向后端发异步送请求来实现前后端数据交互
* **ES6**：项目模块及组件均使用ES6语法
* **Webpack**：模块打包，前端项目构建工具
* **mongodb**：非关系数据库，应用于分布式数据存储

## 使用
1. 项目源码下载：`git clone https://github.com/Fueling-psx/Recruit-react.git`
2. `cd Recruit-react && npm install`
3. 需要启动mongodb服务，即进入本地mongodb文件夹bin目录下执行命令：`mongod --config "your local path\mongo.conf"`
4. 启用node服务，我这里是使用nodemon：`npm install -g nodemon`，然后执行：`nodemon sever/server.js`
5. 项目启动：`npm run start`

## 预览截图

* 求职用户

![](https://github.com/Fueling-psx/Recruit-react/blob/master/screenshot/login.gif?raw=true)

* 公司用户

![](https://github.com/Fueling-psx/Recruit-react/blob/master/screenshot/company.gif?raw=true)

* 用户界面

![](https://github.com/Fueling-psx/Recruit-react/blob/master/screenshot/user.gif?raw=true)



**ps**: 此项目为初版本，后期还会继续更新完善，敬请期待