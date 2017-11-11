


export function getRedirectPath({type, avatar}){
	// 根据用户信息，返回跳转地址
	// user.type / company/ applicant
	// user.avatar / companyInfo / applicantInfo
	console.log(type, avatar);
	let url = (type === 'company') ? '/company': '/applicant'	 
	if(!avatar) {
		url += 'info'
	}
	return url
}

export function getChatId(userId, targetId){
	return [userId, targetId].sort().join('_')
}