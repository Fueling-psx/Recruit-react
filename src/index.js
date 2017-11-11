import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'

import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import Dashboard from './container/dashboard/dashboard'
import CompanyInfo from './container/info/companyinfo'
import ApplicantInfo from './container/info/applicantinfo'
import Chat from './container/chat/chat'
import reducers from './reducer'
import './config'
import './index.css'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f=>f
))
 
ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
			<div>
				<AuthRoute />
				<Switch>
					<Route exact path='/' component={Login}></Route>
					<Route path='/login' component={Login}></Route>
					<Route path='/register' component={Register}></Route>
					<Route path='/companyinfo' component={CompanyInfo}></Route>
					<Route path='/applicantinfo' component={ApplicantInfo}></Route>
					<Route path='/chat/:user' component={Chat}></Route>
					<Route component={Dashboard} ></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)
