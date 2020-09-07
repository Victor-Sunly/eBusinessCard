<template>
	<view class="content">
		<view class="hint">您还没有电子名片</view>
		<view class="create">
			<button type="primary">创建我的名片</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.hint {
		padding: 10px;
	}
	.create button {
		padding: 0 25px;
		border-radius: 30px;
	}
</style>
