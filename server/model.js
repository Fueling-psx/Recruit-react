const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/recruit'
mongoose.connect(DB_URL);

const models = {
	user: {
		'user': {'type': String, 'require': true},
		'pwd': {'type': String, 'require': true},
		'type': {'type': String, 'require': true},
		// 头像
		'avatar': {'type':String},
		'desc': {'type':String},
		'adress': {'type':String},
		'education': {'type':String},
		// 如果是company,还有两个字段
		'title':{'type':String},
		'companyName': {'type':String},
		'details': {'type':String},
		'salary': {'type':String},
		'create_time': {'type':Number, 'default':new Date().getTime()},

	},
	chat: {
		'chatid': {'type':String, 'require':true},
		'form': {'type':String, 'require':true},
		'to': {'type':String, 'require':true},
		'read': {'type':Boolean, default:false},
		'content': {'type':String, 'require':true, default:''},
		'create_time': {'type':Number, 'default':new Date().getTime()},
	},
	jobinfo: {
		'jobname': {'type':String, 'require':true},
		'jobsalary': {'type':String, 'require':true},
		'jobdesc': {'type':String, 'require':true},
		'create_time': {'type':Number, 'default':new Date().getTime()},
	}
}

for(let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))

}

module.exports = {
	getModel: function(name) {
		return mongoose.model(name); 
	}
}
/*
const models = {
	user: {
		'user': {'type': String, 'require': true},
		'pwd': {'type': String, 'require': true},
		'type': {'type': String, 'require': true},
		// 头像
		'avatar': {'type':String},
		// 个人简介或职位简介
		'desc': {'type':String},
		// 如果是company,还有两个字段
		'name': {'type':String},
		'salary': {'type':String}
	},
	chat: {
		'chatid': {'type':String, 'require':true},
		'form': {'type':String, 'require':true},
		'to': {'type':String, 'require':true},
		'read': {'type':Boolean, default:false},
		'content': {'type':String, 'require':true, default:''},
		'create_time': {'type':Number, 'default':new Date().getTime()},
	},
	jobinfo: {
		
	}
}*/