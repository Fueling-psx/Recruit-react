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

class CompanyEdit extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc: '',
			education: '',
			adress: '',
			companyName: '',
			details: '',
			salary: ''
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
		console.log(this.state);
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
		console.log(this.state);
		console.log(this.props);

		return (
			<div>
				<NavBar onLeftClick={() => {this.leftback()}} mode="dark">修改资料</NavBar>
				<WingBlank>
					<div className="logoinfo-label">用户头像</div>
					<div className="logoinfo-container" >
						<img 
							src={(this.props.avatar) ? require(`../../../static/images/logo/${this.props.avatar}.jpg`) : null}
							alt="" title="个人头像"
						/>
					</div>
					<List>
					<InputItem 
						value={(this.state.companyName) ? this.state.companyName : this.props.companyName}
						onChange={(v)=>this.onChange('companyName',v)}
					>
						公司名
					</InputItem>
					<InputItem 
						value={(this.state.details) ? this.state.details : this.props.details}
						onChange={(v)=>this.onChange('details',v)}
					>
						公司信息
					</InputItem>
					<InputItem 
						value={(this.state.title) ? this.state.title : this.props.title}
						onChange={(v)=>this.onChange('title',v)}
					>
						招聘职位
					</InputItem>
					<InputItem 
						value={(this.state.education) ? this.state.education : this.props.education}
						editable
						onChange={(v)=>this.onChange('education',v)}
					>
						学历要求
					</InputItem>
					<InputItem 
						value={(this.state.salary) ? this.state.salary : this.props.salary}
						onChange={(v)=>this.onChange('salary',v)}
					>
						薪资情况
					</InputItem>
					<TextareaItem
						onChange={(v)=>this.onChange('desc',v)}
						rows={2}
						value={(this.state.desc) ? this.state.desc : this.props.desc}
						autoHeight
						title='经验要求'
					/>
					<Button 
						onClick={() => {this.edit()}}
						type='primary'
						style={radius}
					>保存</Button>
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					</List>	
				</WingBlank>
			</div>
		)
	}
}

export default CompanyEdit