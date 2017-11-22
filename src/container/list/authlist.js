import React from 'react'
import PropTypes from 'prop-types'
import {
	Card, 
	WhiteSpace,
	WingBlank,
	SearchBar,
	Carousel
} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import carouselImg_0 from './img/0.jpg'
import carouselImg_1 from './img/1.jpg'
import './list.css'

@withRouter

class AuthList extends React.Component {
	
	constructor(props){
		super(props);

		this.handleTime = this.handleTime.bind(this);
	}

	static propTypes = {
		userlist: PropTypes.array.isRequired
	}

	handleClick(v) {
		this.props.history.push(`/chat/${v._id}`);
	}

	handleTime(data){
		let dataDate = new Date(data);
		let month = dataDate.getMonth()+1;
		let date = dataDate.getDate();
		return month+'月'+date+'日'
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<SearchBar className="top-search" placeholder="搜索职位/公司" maxLength={16} />
				
				<Carousel autopaly infinite>
					<img src={carouselImg_0} />
					<img src={carouselImg_1} />
				</Carousel>
		        <div className="header-tips">
		        	<div className="header-tips-content clearfix">
			        	<div className="tips tips-worker">
			        		<img className="img-radius" src={require('./img/work.png')} />
							<p>日常任务</p>			        	
			        	</div>
			        	<div className="tips tips-worker">
			        		<img className="img-radius" src={require('./img/live.png')} />
							<p>实时直播</p>			        	
			        	</div>
			        	<div className="tips tips-worker">
			        		<img className="img-radius" src={require('./img/zhi.png')} />
							<p>高效求职</p>			        	
			        	</div>
			        	<div className="tips tips-worker">
			        		<img className="img-radius" src={require('./img/ai.png')} />
							<p>人工智能</p>			        	
			        	</div>
			        </div>	
		        </div>
			    <div className="list-header">
			    	<div className="list-header-title">
			    		- 为您推荐 -
			    	</div>
			    </div>    
				{this.props.userlist.map(v => (
					v.avatar ?
					<div onClick={() => this.handleClick(v)}>
						<div className="list-content">
							<div className="clearfix">
								<div className="tips-info-left">
									<p className="tips-info-title">{v.title}</p>
									<p className="tips-info-ask">{v.adress}|{v.education}</p>
								</div>
								<div className="tips-info-right">
									<p className="tips-info-salary">{v.salary}</p>
									<p className="tips-info-date">{this.handleTime(v.create_time)}</p>
								</div>
							</div>
							<div className="clearfix">
								<div className="tips-user-left">
									<img src={require(`../../../static/images/logo/${v.avatar}.jpg`)} />
								</div>
								{v.type=='company' ?
									<div className="tips-user-right">
										<p className="tips-margin">{v.companyName}</p>
										<p className="tips-margin tips-second">{v.desc}|{v.details}</p>
									</div> :
									<div className="tips-user-right">
										<p className="tips-margin">姓名：{v.user}</p>
										<p className="tips-margin">{v.desc}</p>
									</div> 
								}
							</div>
						</div>
						<div className="list-whitespace"></div>
					</div> : null

				))}
				<WhiteSpace />
				<WhiteSpace />
				<WhiteSpace />
				<WhiteSpace />
			</div>	
		)
	}
}

export default AuthList