// 合并所有reducer 并且返回
import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { chatuser } from './redux/chat.redux'
import { chat } from './redux/chatinfo.redux'

export default combineReducers({user, chatuser, chat})

