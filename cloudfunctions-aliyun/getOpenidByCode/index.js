'use strict';
const uniID = require('uni-id');
const db = uniCloud.database();
const userDB = db.collection('user') // 获取表'user'的集合对象

exports.main = async (event, context) => {	
	const {code} = event;
	if(!code) return {success: false, msg:'缺少code'};
	
	const res = await uniID.code2SessionWeixin({code,platform:"mp-weixin"});
	
	if(!res.code){
	
		const openid = res.openid;
		const { affectedDocs } = await userDB.where({openid}).get();
		
		if(affectedDocs){
			const {success,msg,result } = await uniCloud.callFunction({
			    name: "getCardInfoByOpenid",
			    data: { openid }
			});
			
			if (success) return {success, openid, cardInfo: result}
			return {success, msg}
		}else{
			const {success,msg,result } = await uniCloud.callFunction({
			    name: "setUserInfo",
			    data: { openid }
			});
			if (success) return {success, openid, userId: result.id}
			return {success: false, msg}
		}
	}else{
		return {success: !res.code, msg: res.msg}
	}
};
