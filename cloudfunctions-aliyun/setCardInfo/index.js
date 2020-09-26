'use strict';
const db = uniCloud.database();
const cardDB = db.collection('card')
exports.main = async (event, context) => {
	const {_id,openid,cardName,cardTel,company,position,cardEmail,cardQQ,cardAddress} = event;
	if(!_id) return {success:false,msg:'缺少_id'};
	if(!openid) return {success:false,msg:'缺少openid'};
	if(!cardName) return {success:false,msg:'无效的姓名'};
	if(!cardTel) return {success:false,msg:'电话号码无效'};
	if(!company) return {success:false,msg:'无效的单位名称'};
	if(!position) return {success:false,msg:'无效的职位'};

	let {affectedDocs,result} = await cardDB.doc(_id).set({
	  openid,cardName,cardTel,cardCompanyList,cardEmail,cardQQ,cardAddress
	})
	
	if(affectedDocs){
		return {success:true,result}
	}
	
	return {success:false,msg:`${_id?'更新失败':'添加失败'}`}
};
