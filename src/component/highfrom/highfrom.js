import React from 'react'


export default function highFrom(Comp) {
	
	return class WrapperComp extends React.Component{
		constructor(props) {
			super(props);
			this.state = {}
			this.handleChange = this.handleChange.bind(this);
		}

		handleChange(key, value) {
			//console.log(key, value);
			this.setState({
				[key]: value
			})
		} 

		render() {
			// 属性穿透
			// console.log(this.props, this.state);
			return <Comp
			 			handleChange={this.handleChange} 
			 		 	state={this.state}
			 		 	{...this.props}
			 		></Comp>
		}
	}
}