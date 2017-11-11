import React from 'react'
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
@withRouter
@connect (
	state => state.chat
)
class NavLinkBar extends React.Component{
	static propTypes = {
		data: PropTypes.array.isRequired
	}
	render(){
		
		const navList = this.props.data.filter(v=>!v.hide)
		const {pathname} = this.props.location
		// console.log(this.props, navList);
		
		return (
			
				<TabBar barTintColor='#F2F5F4' tintColor='#00b38a'>
					{navList.map(v => (
						<TabBar.Item
							dot={v.path=='/msglist' ? true : false}
							key={v.path}
							title={v.text}
							icon={{uri: require(`./img/${v.icon}.png`)}}
							selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
							selected={pathname === v.path}
							onPress={()=>{
								this.props.history.push(v.path)
							}}
						>
						</TabBar.Item>
					))}
				</TabBar>
			
		)
	}
}

export default NavLinkBar