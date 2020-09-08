'use strict';
exports.main = async (event, context) => {
	console.log('-------------------------',event)
    //event为客户端上传的参数
    return {
		sum:event.a + event.b
	}
}