import React from 'react'
import {connect} from 'react-redux'
import {
	NavBar,
	InputItem, 
	TextareaItem, 
	WingBlank,
	WhiteSpace, 
	List,
	Button
} from 'antd-mobile'
import { update } from '../../redux/user.redux'

@connect(
	state => state.user,
	{ update } 
)

class ApplicantEdit extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc: '',
			education: '',
			adress: ''
		}

		this.edit = this.edit.bind(this);
		this.submitState = this.submitState.bind(this);
		this.leftback = this.leftback.bind(this);
	}

	onChange(key,val){
		this.setState({
			[key]:val
		})
		this.submitState();
	}

	submitState() {
		var obj = this.state;

		for(var prop in obj) {
		    if(obj.hasOwnProperty(prop)) { 
		    	if(!obj[prop]) {
		    		this.setState({
		    			[prop]: this.props[prop]
		    		})
		    	}
		    } 
		}
	}

	edit() {
		this.props.update(this.state);
		this.props.history.push('/usercenter');
	}

	leftback() {
		this.props.history.push('/usercenter');
	}
	render() {
		const radius = {
			borderRadius: 0 
		}

		return (
			<div>
				<NavBar onLeftClick={() => {this.leftback()}} mode="dark">修改资料</NavBar>
				<WingBlank>
				<List>
					<div className="logoinfo-label">用户头像</div>
					<div className="logoinfo-container" >
						<img 
							src={(this.props.avatar) ? require(`../../../static/images/logo/${this.props.avatar}.jpg`) : null}
							alt="" title="个人头像"
						/>
					</div>
					<InputItem 
						value={(this.state.title) ? this.state.title : this.props.title}
						onChange={(v)=>this.onChange('title',v)}
					>
						求职职位
					</InputItem>
					<InputItem 
						value={(this.state.education) ? this.state.education : this.props.education}
						editable
						onChange={(v)=>this.onChange('education',v)}
					>
						学历
					</InputItem>
					<InputItem 
						value={(this.state.adress) ? this.state.adress : this.props.adress}
						onChange={(v)=>this.onChange('adress',v)}
					>
						目前所在地
					</InputItem>
					<TextareaItem
						onChange={(v)=>this.onChange('desc',v)}
						rows={3}
						value={(this.state.desc) ? this.state.desc : this.props.desc}
						autoHeight
						title='个人简介'
					/>
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<Button 
						onClick={() => {this.edit()}}
						type='primary'
						style={radius}
					>保存</Button>
				</List>	
				</WingBlank>
			</div>
		)

	}
}

export default ApplicantEdit
