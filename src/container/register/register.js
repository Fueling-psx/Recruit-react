import React from 'react'
import Logo from '../../component/logo/logo'
import { 
	List, 
	InputItem, 
	Radio,
	WingBlank,
	WhiteSpace, 
	Button 
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import highFrom from '../../component/highfrom/highfrom'
import '../login/login.css'

@connect(
	state => state.user,
	{ register }
)
@highFrom

class Register extends React.Component {
	constructor(props){
		super(props);
		/*this.props.state = {
			user: '',
			pwd: '',
			repeatpwd: '',
			type: 'applicant'
		}*/
		
		this.handleRegister = this.handleRegister.bind(this);
	}

	/*handleChange(key, value) {
		this.setState({
			[key]: value
		})
	}*/
	componentDidMount() {
		this.props.handleChange('type', 'applicant')
	}

	handleRegister(){
		this.props.register(this.props.state);
	}

	render() {
		const height = document.documentElement.clientHeight;
		let marginTop = {
			marginTop: 180
		}
		const RadioItem = Radio.RadioItem;
		return (
			<div>
				{this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
				<Logo />
				<WingBlank>
					<List>
						{this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
						<WhiteSpace />
						<InputItem
							onChange={(v => this.props.handleChange('user', v))}
						>用户名</InputItem><WhiteSpace />
						<InputItem
							type='password'
							onChange={(v => this.props.handleChange('pwd', v))}
						>密码</InputItem><WhiteSpace />
						<InputItem
							type='password'
							onChange={(v => this.props.handleChange('repeatpwd', v))}
						>确认密码</InputItem><WhiteSpace />
						<RadioItem 
							checked={this.props.state.type=='applicant'}
							onChange={()=>this.props.handleChange('type', 'applicant')}
						>
							我要找工作
						</RadioItem>
						<RadioItem 
							checked={this.props.state.type=='company'}
							onChange={()=>this.props.handleChange('type', 'company')}
						>
							我要招人
						</RadioItem><WhiteSpace /><WhiteSpace /><WhiteSpace />
					</List>
					<Button 
						disabled={(this.props.state.user && this.props.state.pwd && this.props.state.repeatpwd) ? false : true}
						className="btn-custom" 
						type="primary" 
						onClick={this.handleRegister}
					>注册</Button>	
					
					<WhiteSpace />
					<WhiteSpace />
					注册成功代表你同意本网站《用户协议》
					
					<div style={marginTop}>使用验证码注册？</div>
				</WingBlank>
			</div>
		)
	}
}

export default Register;