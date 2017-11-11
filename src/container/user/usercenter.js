import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Modal, NavBar } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import { logoutSubmit } from '../../redux/user.redux'
import { Redirect } from 'react-router-dom'
 
@connect(
	state=>state.user,
	{ logoutSubmit }
)

class UserCenter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
		this.logout = this.logout.bind(this);
		this.edit = this.edit.bind(this);
	}

	edit(){
		this.props.history.push(`/${this.props.type}edit`);
	}

	logout(){
		const alert = Modal.alert

		alert('注销账号', '确认退出登录吗???', [
		    { text: '取消', onPress: () => console.log('cancel') },
		    { text: '确认', onPress: () => {
		      	browserCookie.erase('userid');
		      	//window.location.href = window.location.href
		      	this.props.logoutSubmit();
		    }}
		])
		/*browserCookie.erase('userid');
		this.props.logoutSubmit();*/
	}
22
	render() {
		const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
		console.log(props);

		return  props.user ? (
			<div>
				<NavBar mode="dark">个人中心</NavBar>
				<Result 
					img={<img src={require(`../../../static/images/logo/${props.avatar}.jpg`)} style={{width:50}} alt="" />}
					title={props.user} 
					
					message={props.type == 'company' ? props.companyName : null}
				/>

				<List renderHeader={() => '简介'}>
					<Item multipleLine >
						{props.title}
						{props.desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)}
						{props.salary ? <Brief>薪资:{props.salary }</Brief> : null}
					</Item>
				</List>
				<WhiteSpace></WhiteSpace>
				<List>
					<Item onClick={this.edit}>编辑资料</Item>
				</List>
				<List>
					<Item onClick={this.logout}>退出登录</Item>
				</List>
			</div>
		) : <Redirect to={props.redirectTo} />
				
	}
}

export default UserCenter