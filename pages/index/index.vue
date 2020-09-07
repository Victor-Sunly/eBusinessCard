<template>
	<view class="content">
		<!-- 创建电子名片表单 -->
		<view v-if="createCard">
			<view class="avatar">
				<image src="../../static/avatar.jpg" mode="aspectFit"></image>
			</view>
			<form @submit="" @reset="">
				<view class="form-item">
					<text class="text">姓名</text>
					<input placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的真实姓名" />
				</view>
				<view class="form-item">
					<text class="text">电话</text>
					<input placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的手机号" />
				</view>
				<view class="form-item">
					<text class="text">单位</text>
					<input placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的单位" />
				</view>
				<view class="form-item">
					<text class="text">职业</text>
					<input placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的职业" />
				</view>
				<view class="form-item">
					<text class="text">邮箱</text>
					<input placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的邮箱" />
				</view>
				<view class="form-item">
					<text class="text">微信/QQ</text>
					<input placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的微信/QQ" />
				</view>
				<view class="form-item">
					<text class="text">地址</text>
					<input placeholder-style="font-size:13px" class="uni-input" focus placeholder="请输入您的地址" />
				</view>
				
				<view class="form-item">
					<button type="primary" form-type="submit" class="button w100">下一步</button>
				</view>

			</form>
		</view>
		<!-- 不存在电子名片提示 -->
		<view class="no-card" v-else>
			<view class="hint">您还没有电子名片</view>
			<view class="create">
				<button @click="clickCreateCard()" type="primary" class="button">创建我的名片</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// hasCard: false
				createCard: true
			}
		},
		onLoad() {

		},
		methods: {
			clickCreateCard: function(e) {
				this.createCard = true;
			}
		}
	}
</script>

<style>
	.no-card {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.hint {
		padding: 10px;
	}
	.button {
		padding: 0 25px;
		border-radius: 30px;
	}
	
	
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
