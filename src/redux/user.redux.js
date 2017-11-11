import axios from 'axios'
import { getRedirectPath } from '../util'

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const LOGOUT = 'LOGOUT'
const UPDATE_SUCCESS = 'UPDATE_SUCCESS'

const initState = {
	redirectTo: '',
	msg: '',
	user: '',
	type: ''
}

// reducer
export function user(state=initState, action) {
	switch(action.type) {
		case AUTH_SUCCESS: 
			return {...state, msg:'',redirectTo:getRedirectPath(action.payload), ...action.payload}
		case LOAD_DATA: 
			return {...state, ...action.payload}
		case ERROR_MSG:
			return {...state, isAuth:false, msg:action.msg}
		case LOGOUT:
			return {...initState, redirectTo: '/login'}
		default: 
			return state; 
	}
}

function authSuccess(data) {
	return { type: AUTH_SUCCESS, payload: data }  // 负载
}

function errorMsg(msg) {
	return { msg, type:ERROR_MSG }
}

export function loadData(userinfo) {
	// 拿到用户信息
	return {type: LOAD_DATA, payload:userinfo}
}

export function logoutSubmit(){
	return { type: LOGOUT}
}

export function login({user, pwd}) {
	console.log(user, pwd);
	if(!user || !pwd) {
		return errorMsg('用户名密码必须输入');
	}
	return dispatch => {
		axios.post('/user/login', {user, pwd})
		  .then(res => {
		  	if(res.status==200&&res.data.code===0) {
		  		dispatch(authSuccess(res.data.data))
		  	} else{
		  		dispatch(errorMsg(res.data.msg))
		  	}
		  })
	}
}

export function update(data) {
	console.log(data);
	return dispatch => {
		axios.post('/user/update', data)
		  .then(res => {
		  	console.log(res.data);
		  	if(res.status == 200 && res.data.code === 0) {
		  		dispatch(authSuccess(res.data.data))
		  	} else{
		  		dispatch(errorMsg(res.data.msg))
		  	}
		  })
	}
}

/*export function updateUserInfo(data) {
	return dispatch => {
		axios.get('/user/update', data)
		  .then(res => {
		  	console.log(res.data);
		  	if(res.status == 200 && res.data.code === 0) {
		  		dispatch(updateSuccess(res.data.data))
		  	} else{
		  		dispatch(errorMsg(res.data.msg))
		  	}	
		})
	}
}*/

export function register({user, pwd, repeatpwd, type}) {
	if(!user || !pwd || !type) {
		return errorMsg('用户名密码必须输入');
	}
	if(pwd !== repeatpwd) {
		return errorMsg('两次输入密码不一致');
	}
	return dispatch => {
		axios.post('/user/register', {user, pwd, type})
		  .then(res => {
		  	if(res.status==200&&res.data.code===0) {
		  		dispatch(authSuccess({user, pwd, type}))
		  	} else{
		  		dispatch(errorMsg(res.data.msg))
		  	}
		  })
	}
	
}

export function getUserinfo(name) {
	return dispatch => {
		axios.get('/user/info', name)
		  .then(res => {
		  	console.log(res);
		  	if(res.status == 200 && res.data.code === 0) {
		  		dispatch(authSuccess(res.data.data))
		  	} else{
		  		dispatch(errorMsg(res.data.msg))
		  	}	
		})
	}
}
