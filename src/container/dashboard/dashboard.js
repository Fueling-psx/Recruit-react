import React from 'react'
import {connect} from 'react-redux'
import {
	NavBar, 
	SearchBar,
	Carousel
} from 'antd-mobile'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import AuthRoute from '../../component/authroute/authroute'
import NavLinkBar from '../navlinkbar/navlinkbar'
import ApplicantList from '../list/applicantlist'
import CompanyList from '../list/companylist'
import UserCenter from '../user/usercenter'
import MsgList from '../msglist/msglist'
import ApplicantEdit from '../user/applicantedit'
import CompanyEdit from '../user/companyedit'
import {
	getMsgList, 
	sendMsg, 
	recvMsg
} from '../../redux/chatinfo.redux'

@connect(
	state=>state,
	{getMsgList, recvMsg}
)


class Dashboard extends React.Component{
	componentDidMount() {
		
		if(!this.props.chat.chatmsg.length) {
			this.props.getMsgList();
			this.props.recvMsg();
		}
		
	}

	render(){
		const { pathname } = this.props.location
		const user = this.props.user
		// console.log(user);

		const navList = [
			{
				path:'/company',
				text:'首页',
				icon:'home',
				title:'推荐求职者',
				component:ApplicantList,
				hide: user.type=='applicant'
			},
			{
				path:'/applicant',
				text:'首页',
				icon:'home',
				title:'推荐公司',
				component:CompanyList,
				hide: user.type=='company'
			},
			{
				path:'/msglist',
				text:'消息',
				icon:'msg',
				title:'消息列表',
				component:MsgList
			},
			{
				path:'/usercenter',
				text:'我',
				icon:'user',
				title:'个人中心',
				component:UserCenter
			}
		]	

		const title = navList.find(v => v.path == pathname) 
					  ? navList.find(v => v.path == pathname).title : null

		// console.log(navList);
		
		return (
			<div>
				<AuthRoute />
				<div>
					<Switch>
						{navList.map( v => (
							<Route key={v.path} path={v.path} component={v.component}></Route>
						))}
						<Route path='/applicantedit' component={ApplicantEdit}></Route>
						<Route path='/companyedit' component={CompanyEdit}></Route>
					</Switch>
				</div>
				<NavLinkBar data={navList}></NavLinkBar>
				
			</div>
		)

		
	}

}

export default Dashboard