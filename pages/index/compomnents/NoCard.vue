<!-- 不存在电子名片时，创建操作页面 -->
<template>
	<view class="no-card">
		<view class="hint">您还没有电子名片</view>
		<view class="create">
			<button @click="createCard()" type="primary" class="button">创建我的名片</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			createCard() {
				this.$emit('nextStep')
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
