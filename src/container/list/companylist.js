import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getUserList } from '../../redux/chat.redux'
import AuthList from './authlist'

@connect(
	state=>state.chatuser,
	{ getUserList }
)

class CompanyList extends React.Component{
	
	componentDidMount() {
		this.props.getUserList('company');
	}
	render(){
		
		/*console.log(this.state);
		console.log(this.props);*/
		console.log(this.props);
		return 	<AuthList userlist={this.props.userlist} />
		
	}

}
export default CompanyList

