<!-- 不存在电子名片时，创建操作页面 -->
<template>
	<view class="no-card">
		<view class="hint">您还没有电子名片</view>
		<view class="create">
			<button open-type="getUserInfo" @getuserinfo="createCard"  type="primary" class="button">创建我的名片</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			createCard(e) {
				const _this = this;
				const {errMsg} = e.target;
				if (errMsg === 'getUserInfo:fail auth deny') {
					return _this.$toast('授权失败!')
				}
			
				uni.login({
					 provider: 'weixin',
					 success: async (res) => {
					 	const {code} = res;
					 	const retult = await _this.$uniCloud('getOpenidByCode', {code})
						uni.setStorageSync('openid', retult.openid);
						_this.$emit('nextStep')
					 }
				})
			}
		}
	}
</script>

<style scoped>
	.no-card {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
