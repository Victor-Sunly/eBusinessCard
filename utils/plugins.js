// 以下内容在 /utils/plugins.js 中
import Vue from 'vue'


// 以下内容在 /utils/plugins.js 中
Vue.prototype.$toast = (title, duration = 1500) => uni.showToast({
	icon: 'none',
	title,
	duration
})


Vue.prototype.$router = (url) => uni.navigateTo({
	url: '/pages' + url,
	animationType:"slide-in-left", // 跳转动画
	animationDuration: 800
})
// 跳转底部 tabbar 对应的页面
Vue.prototype.$switchTab = (url) => uni.switchTab({
	url: '/pages' + url
})
// 关闭其它页面，跳转
Vue.prototype.$relaunch = (url) => uni.reLaunch({
	url: '/pages' + url
})


Vue.prototype.$uniCloud = async (name, data) => {
	
	uni.showLoading()
	try{
		let {success, result} = await uniCloud.callFunction({
			name, // 云函数名字
			data // 传输数据
		})
	
		
		if (success) {
			return Promise.resolve(result)
		} else {
			return Promise.reject('err')
		}
		
	} catch(e) {
		return Promise.reject(e.message)
	} finally{
		uni.hideLoading()
	}
}
