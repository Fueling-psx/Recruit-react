import React from 'react'
import io from 'socket.io-client'
import {List, InputItem, NavBar, Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import {getMsgList, sendMsg, recvMsg} from '../../redux/chatinfo.redux'
import { getChatId } from '../../util'
const socket = io('ws://localhost:9093')

@connect(
	state=>state,
	{getMsgList, sendMsg, recvMsg}
)

class Chat extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: '',
			msg: []
		}
	}

	componentDidMount() {
		if(!this.props.chat.chatmsg.length) {
			this.props.getMsgList();
			this.props.recvMsg();
		}
	}

	handleSubmit() {
		// 事件：向后端发送数据
		// socket.emit('sendmsg', {text: this.state.text});
		// this.setState({text: ''})
		console.log(this.props);
		// console.log(this.state);
		const form = this.props.user._id
		const to = this.props.match.params.user
		const msg = this.state.text
		this.props.sendMsg({form, to, msg});
		this.setState({text: ''})
	}

	render() {
		// console.log(this.props);
		const userid = this.props.match.params.user;
		const Item = List.Item
		const users = this.props.chat.users
		const chatid = getChatId(userid, this.props.user._id)
		const chatmsgs = this.props.chat.chatmsg.filter(v=>v.chatid==chatid)
		// aconsole.log(chatid);
		// console.log(this.props.chat.chatmsg);

		if(!users[userid]) {
			return null
		}

		return (
			<div id="chat-page">
				<NavBar 
					mode="light"
					icon={<Icon type="left" />}
					onLeftClick={() => {
						this.props.history.goBack()
					}}
				>
					{users[userid].name}
				</NavBar>

				{chatmsgs.map(v => {
					const avatar = require(`../../../static/images/logo/${users[v.form].avatar}.jpg`)
					return v.form == userid ? (
							<List key={v._id}>
								<Item
									thumb={avatar}
								>{v.content}</Item>
							</List>
						) : (
							<List key={v._id}>
								<Item
									extra={<img src={avatar}/>}
									className="chat-me"
								>{v.content}</Item>
							</List>
						)
					
				})}
				<div className="stick-footer">
				<InputItem 
						placeholder="请输入"
						value={this.state.text}
						onChange={ v => {
							this.setState({text: v})
						}}
						extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
					></InputItem>

				</div>
			</div>
			
		)
	}
}

export default Chat