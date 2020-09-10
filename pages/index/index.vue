<template>
	<view class="content">
		<!-- 不存在名片创建操作 -->
		<NoCard @nextStep="createCard('createinfo')" v-if="createStatus=== 1"></NoCard>
		<!-- 创建名片信息 -->
		<CardInfo @nextStep="createCard('createcomposition')" v-else-if="createStatus=== 2"></CardInfo>
		<!-- 创建名片板式 -->
		<Composition v-else></Composition>
	</view>
</template>

<script>
	import NoCard from './compomnents/NoCard.vue';
	import CardInfo from './compomnents/CardInfo.vue';
	import Composition from './compomnents/Composition.vue';
	
	// 创建过程控制状态
	const createStatusEnum = Object.freeze({
		createcard: 1,
		createinfo: 2,
		createcomposition: 3
	})
	export default {
		components:{
			NoCard,
			CardInfo,
			Composition
		},
		data() {
			return {
				createStatus: createStatusEnum['createcomposition'],
				// createStatus: createStatusEnum['createcard'],
			}
		},
		onLoad() {

		},
		methods: {
			// 创建名片
			createCard: async function(type) {
				this.createStatus = createStatusEnum[type];
			}
		}
	}
</script>

<style>

	.hint {
		padding: 10px;
	}
	.button {
		padding: 0 25px;
		border-radius: 30px;
	}
	
</style>
