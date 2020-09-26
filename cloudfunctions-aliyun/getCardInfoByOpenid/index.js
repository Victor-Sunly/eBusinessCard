'use strict';
const db = uniCloud.database();
const cardDB = db.collection('card') // 获取表'user'的集合对象

exports.main = async (event, context) => {
	const {openid} = event;
	const {affectedDocs,result} = await cardDB.where({openid}).get() ;
	if(affectedDocs){
		return {success:true,result}
	}
	
	return {success:false,,msg:'获取名片失败'}
};
