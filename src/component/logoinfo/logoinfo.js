import React from 'react'
import { Result, List, WhiteSpace, Modal } from 'antd-mobile'
import logoImg from './000.png'
import './logo.css'

const initImg = './000.png';

class LogoInfo extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			avatar: ''
		}
		console.log(this.state.avatar);
		this.handleImg = this.handleImg.bind(this);
	}
	handleImg(){
		var num = Math.round(Math.random()*10) + 1;
		// console.log(num);
		this.setState({
			avatar: num
		});
		this.props.selectLogo(num);
	}

	render(){
		// `../../../static/images/logo/${num}.jpg`
		// console.log(this.state.avatar);
		// console.log(this.props);
		return (
			<div>
				<div className="logoinfo-label">选择用户头像</div>
				<div className="logoinfo-container" >
					<img 
						onClick={ this.handleImg}
						src={(this.state.avatar) ? require(`../../../static/images/logo/${this.state.avatar}.jpg`) : require('./000.png')}
						alt="" title="选择个人头像"
					/>
				</div>
			</div>
		)
	}
}

export default LogoInfo
