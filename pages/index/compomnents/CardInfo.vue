<!-- 名片信息录入 -->
<template>
	<view>
		<view class="avatar">
			<image src="../../../static/avatar.jpg" mode="aspectFit"></image>
		</view>
		<form @submit="createCard" @reset="">
			<view class="form-item">
				<text class="text">姓名</text>
				<input name="cardName" placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的真实姓名" />
			</view>
			<view class="form-item">
				<text class="text">电话</text>
				<input name="cardTel" placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的手机号" />
			</view>
			<view class="form-item">
				<text class="text">单位</text>
				<input name="company" placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的单位" />
			</view>
			<view class="form-item">
				<text class="text">职业</text>
				<input name="position" placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的职业" />
			</view>
			<view class="form-item">
				<text class="text">邮箱</text>
				<input name="cardEmail" placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的邮箱" />
			</view>
			<view class="form-item">
				<text class="text">微信/QQ</text>
				<input name="cardQQ" placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的微信/QQ" />
			</view>
			<view class="form-item">
				<text class="text">地址</text>
				<input name="cardAddress" placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的地址" />
			</view>
			
			<view class="form-item">
				<button type="primary" form-type="submit" class="button w100">下一步</button>
			</view>

		</form>
	</view>
</template>

<script>
	export default {
		created() {
			
		},
		methods:{
			async createCard(e) {
				const {value} = e.detail;
				const openid = uni.getStorageSync('openid');
				const params = {
					"_id": openid,
					"openid": openid,
					...value
				};
				
				const retult = await this.$uniCloud('setCardInfo', params);
				console.log('retult--',retult)
				// this.$emit('nextStep')
			}
		}
	}
</script>

<style scoped>
	.form-item {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}
	
	.form-item .text {
		padding-right: 10px;
	}
	.form-item input {
		background-color: #EEEEEE;
		border-radius: 5px;
		padding: 5px 5px;
		font-size: 14px;
	}
	
	input[placeholder] {
		color:#808080;
	}
	
	.w100 {
		width: 80%;
	}
	
	.avatar {
		display: flex;
		justify-content: center;
		padding: 10px;
	}
	.avatar image {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
	}
</style>
