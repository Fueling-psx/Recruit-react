import React from 'react'
import Logo from '../../component/logo/logo'
import { 
	List, 
	InputItem, 
	WingBlank,
	WhiteSpace, 
	Button 
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import highForm from '../../component/highfrom/highfrom'
import './login.css'

@connect(
	state => state.user,
	{login}
)
@highForm

class Login extends React.Component {
	constructor(props){
		super(props);
		/*this.state = {
			user: '',
			pwd: ''
		}*/

		this.toRegister = this.toRegister.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	/*handleChange(key, value) {
		this.setState({
			[key]: value
		})
	}*/
	handleLogin() {
		console.log(this.state);
		this.props.login(this.props.state);
	}

	toRegister() {
		console.log(this.props);
		this.props.history.push('/register');
	}
	

	render() {
		// console.log(this.props);
		// console.log(this.state);
		return (
			<div>
				{(this.props.redirectTo && this.props.redirectTo!='/login') ? <Redirect to={this.props.redirectTo} /> : null}
				<Logo />
				<WingBlank>
					<List >
						{this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
						<InputItem 
							onChange={(v => this.props.handleChange('user', v))}
						><span className="input-custom">用户</span></InputItem>
						<WhiteSpace />
						<InputItem
							onChange={(v => this.props.handleChange('pwd', v))}
							type="password"
						><span className="input-custom">密码</span></InputItem>
					</List>
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
					<Button 
						onClick={this.handleLogin} 
						disabled={(this.props.state.user && this.props.state.pwd) ? false : true}
						className="btn-custom" 
						type="primary"
					>进入招聘</Button>
					<WhiteSpace />
					<WhiteSpace />
					忘记密码？

					<span onClick={this.toRegister} className="register-custom" >立即注册</span>
				</WingBlank>		
			</div>
		)
	}
}

export default Login;