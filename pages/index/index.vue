<template>
	<view class="content">
		<!-- 不存在名片创建操作 -->
		<NoCard @nextStep="createCard('createinfo')" v-if="createStatus=== 1"></NoCard>
		<!-- 创建名片信息 -->
		<CardInfo @nextStep="createCard('createcomposition')" v-else-if="createStatus=== 2"></CardInfo>
		<!-- 存在名片 -->
		<MyCard :cardInfo="cardInfo" v-else-if="createStatus===3"></MyCard>
		<!-- 创建名片板式 -->
		<Composition v-else></Composition>
	</view>
</template>

<script>
	import NoCard from './compomnents/NoCard.vue';
	import CardInfo from './compomnents/CardInfo.vue';
	import Composition from './compomnents/Composition.vue';
	import MyCard from './compomnents/MyCard.vue';
	
	// 创建过程控制状态
	const createStatusEnum = Object.freeze({
		createcard: 1,
		createinfo: 2,
		hasCard: 3,
		createcomposition: 4
	})
	export default {
		components:{
			NoCard,
			CardInfo,
			Composition,
			MyCard
		},
		data() {
			return {
				// createStatus: createStatusEnum['createcomposition'],
				cardInfo: {},
				createStatus: createStatusEnum['createcard'],
			}
		},
		async onLoad() {
			const openid = uni.getStorageSync('openid');
			if (openid) {
				const result = await this.$uniCloud('getCardInfoByOpenid', {openid})
			
				this.cardInfo = result;
			} else {
				this.createCard('createinfo')
			}
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
