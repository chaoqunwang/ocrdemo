import {httpRequest} from './http.js'
let url = {
	// 获取Access Token
	token:'oauth/2.0/token',
	//身份证识别

	idCard:'rest/2.0/ocr/v1/idcard',
}

module.exports = {
	getToken(){
		return httpRequest({
			url:`${url.token}?grant_type=client_credentials&client_id=UEGsSuXcWGn2uYyIMIMIMdwR&client_secret=Qo1RWA8G1ZX48fTu43Kebv3H0yDtV9H1`
		})
	},
	getIdCard(params){
		return httpRequest({
			url:`${url.idCard}?access_token=${params.access_token}`,
			data:params.data,
			header:{
				"Content-Type":"application/x-www-form-urlencoded"
			}
		})
	}
 }
