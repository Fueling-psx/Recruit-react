import React from 'react'
import axios from 'axios'
// 难点, 若不加this.props.history显示为null
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadData } from '../../redux/user.redux'

@withRouter
@connect(
	null,
	{loadData}
)
/**
 * 
 * 获取用户信息
 * 判断用户的type和用户是否完善信息
 * 
 */
class AuthRoute extends React.Component {
	
	componentDidMount() {
		const publicList = ['/login', '/register'];
		const pathname = this.props.location.pathname;
		
		// console.log(pathname, publicList);
		// 如果已经是登录注册页则不需要跳转
		if( publicList.indexOf(pathname) > -1 ) {
			return null;
		}

		axios.get('/user/info')
		  .then(res => {
		  	if(res.status == 200) {
		  		//console.log(res);
		  		if(res.data.code == 0) {
		  			// 有登录信息
		  			this.props.loadData(res.data.data);
		  		} else{
		  			console.log(this.props.history);
		  			this.props.history.push('/login'); // 难点
		  		}
	
		  	}	
		})
	}
	render() {
		return null
	}
}

export default AuthRoute;