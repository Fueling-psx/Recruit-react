import React from 'react'
import {
	NavBar,
	InputItem, 
	TextareaItem, 
	WingBlank,
	WhiteSpace, 
	Button
} from 'antd-mobile'
import LogoInfo from '../../component/logoinfo/logoinfo.js'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { update } from '../../redux/user.redux'

@connect(
	state=>state.user,
	{ update }
)
class CompanyInfo extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			title:'',
			desc:'',
			adress:'',
			companyName:'',
			education:'',
			salary:'',
			details:''
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
		const redius = {
			borderRadius: 0 
		}
			
		return (
			<div>
				{redirect && redirect!== path ? <Redirect to={this.props.redirectTo} /> : null}
				<NavBar mode="dark">基本资料填写</NavBar>
				<WingBlank>
					<LogoInfo 
						selectLogo={(imgname)=>{
							console.log(imgname);
							this.setState({
								avatar: imgname
							})
						}}
					/>
					<InputItem 
						onChange={(v)=>this.onChange('title',v)}
					>
						招聘职位
					</InputItem>
					<InputItem 
						onChange={(v)=>this.onChange('companyName',v)}
					>
						公司名称
					</InputItem>
					<InputItem 
						onChange={(v)=>this.onChange('adress',v)}
					>
						公司地址
					</InputItem>
					<InputItem 
						onChange={(v)=>this.onChange('details',v)}
					>
						公司详情
					</InputItem>
					<InputItem 
						onChange={(v)=>this.onChange('education',v)}
					>
						最低学历
					</InputItem>
					<InputItem 
						onChange={(v)=>this.onChange('salary',v)}
					>
						职位薪资
					</InputItem>

					<TextareaItem
						onChange={(v)=>this.onChange('desc',v)}
						rows={3}
						autoHeight
						title='职位要求'
					/>
					<Button 
						disabled={(this.state.title && this.state.desc && this.state.companyName && this.state.adress && this.state.education && this.state.details && this.state.salary) ? false : true}
						onClick={()=>{this.props.update(this.state)}}
						type='primary'
						style={redius}
					>保存信息</Button>
					<WhiteSpace />
					<WhiteSpace />
					<WhiteSpace />
				</WingBlank>
			</div>
		)
	}
}

export default CompanyInfo;