import React from 'react'
import { connect } from 'react-redux'
import {List, NavBar, WingBlank} from 'antd-mobile'

@connect(
	state=>state
)
class MsgList extends React.Component {
	getLast(arr) {
		return arr[arr.length-1]
	}
	
	render(){
		//console.log(this.props);
		const Item = List.Item
		const Brief = Item.Brief
		const userid = this.props.user._id
		const username = this.props.chat.users
		const msgListInfo = {}
		
		this.props.chat.chatmsg.forEach( v => {
			msgListInfo[v.chatid] = msgListInfo[v.chatid] || [];
			msgListInfo[v.chatid].push(v)
		})
		// console.log(msgListInfo)
		// 以最新消息排序
		const chatlist = Object.values(msgListInfo).sort((a, b)=>{
			const last_a = this.getLast(a).create_time
			const last_b = this.getLast(b).create_time
			// console.log(this.getLast(a), last_a);
			// console.log(this.getLast(b),last_b);
			
			return last_b - last_a;
		})	

		// console.log(chatlist);
		return (
			<div>
				<NavBar mode="dark">消息列表</NavBar>
				{ chatlist[0] ? chatlist.map(v=>{
					const lastItem = this.getLast(v)
					const targetId = v[0].form==userid ? v[0].to : v[0].form						
					const name = username[targetId] ? username[targetId].name : ''
					const avatar = username[targetId] ? username[targetId].avatar : ''

					return (
						<div>
							<List key={lastItem._id}>
								<Item 
									thumb={require(`../../../static/images/logo/${avatar}.jpg`)}
									arrow="horizontal"
									onClick={()=>{
										this.props.history.push(`/chat/${targetId}`);
									}}
								>
									{name}
									<Brief>{lastItem.content}</Brief>
								</Item>
							</List>
						</div>
					)	
				}) : 
				<WingBlank>
					<p>暂无消息，快去发消息吧</p>
				</WingBlank>
			}
				
			</div>
			
		)
	}
}

export default MsgList;