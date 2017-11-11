const express = require('express');
const utils = require('utility');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const model = require('./model')
const Chat = model.getModel('chat')

const userRouter = require('./user');

const app = express();

// work with express
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
	console.log('io is connection success');
	// 当前请求为socket，后端接受数据
	socket.on('sendmsg', function(data){
		
		const {form, to, msg} = data;
		// 将两个用户id合并成一个字符串
		const chatid = [form, to].sort().join('_');
		Chat.create({chatid, form, to, content:msg, create_time:new Date().getTime()}, function(err, doc){
			io.emit('recvmsg', Object.assign({}, doc._doc))
		})
		console.log(new Date().getTime());
			
		// 用io全局对象发送全局
		// io.emit('recvmsg', data)
	})
})

// 连接mongo, 使用recuit这个集合（相当于一个表）
/*const DB_URL = 'mongodb://127.0.0.1:27017/recruit'
mongoose.connect(DB_URL);*/

// 中间件注册
app.use(cookieParser()); 
app.use(bodyParser.json());
app.use('/user', userRouter);

http.listen(9093, function(){
	console.log('Node app start at port 9093');
})

