import React from 'react'
import {
	NavBar,
	InputItem, 
	TextareaItem, 
	WingBlank,
	WhiteSpace, 
	Button
} from 'antd-mobile'
import AvatarSelector from '../../component/useravater/avatar-selector'
import LogoInfo from '../../component/logoinfo/logoinfo'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(
	state=>state.user,
	{ update }
)

class ApplicantInfo extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc: '',
			education: '',
			adress: ''
		}
	}
	onChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render(){
		const path = this.props.location.pathname;
		const redirect = this.props.redirectTo;
		const radius = {
			borderRadius: 0 
		}
			
		return (
			<div>
				{redirect && redirect!==path ? <Redirect to={this.props.redirectTo} /> : null}
				<NavBar mode="dark">完善信息</NavBar>
				<WingBlank>
					<LogoInfo 
						selectLogo={(imgname)=>{
							//console.log(imgname);
							this.setState({
								avatar: imgname
							})
						}}
					/>
					<InputItem 
						onChange={(v)=>this.onChange('title',v)}
					>
						求职职位
					</InputItem>
					<InputItem 
						onChange={(v)=>this.onChange('education',v)}
					>
						学历
					</InputItem><InputItem 
						onChange={(v)=>this.onChange('adress',v)}
					>
						目前所在地
					</InputItem>
					<TextareaItem
						onChange={(v)=>this.onChange('desc',v)}
						rows={3}
						autoHeight
						title='个人简介'
					/>
					<Button 
						disabled={(this.state.title && this.state.desc && this.state.adress && this.state.education) ? false : true}
						onClick={()=>{this.props.update(this.state)}}
						type='primary'
						style={radius}
					>保存</Button>
				</WingBlank>
			</div>
		)
	}
}

export default ApplicantInfo;