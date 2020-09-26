'use strict';
const db = uniCloud.database();
const userDB = db.collection('user') // 获取表'user'的集合对象

exports.main = async (event, context) => {	  
	const {openid} = event;
	
	let {affectedDocs,id} = await userDB.add({openid})
	if(affectedDocs||id){
		return {success:true,result:{id}}
	}
	
	return {success:false,msg:'保存用户信息失败'}
};
