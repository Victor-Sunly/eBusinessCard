<!-- 名片排版样式 -->
<template>
	<view class="composition">
		<!-- 预览 -->
		<view class="preview public-style" :style="{background: selectBgImage?'url('+selectBgImage+')': '#ffffff'}">
			预览
		</view>
		<!-- 背景 -->
		<view class="bg-style public-style">
			<view class="title">选择背景</view>
			<scroll-view class="scroll-view_H" scroll-x="true" scroll-left="120">
				<view @click="clickBg(null)" class="scrol-item style-1"><span></span></view>
				<view @click="clickBg(1)" class="scrol-item style-2"><span></span></view>
				<view @click="clickBg(2)" class="scrol-item style-3"><span></span></view>
				<view @click="clickBg(3)" class="scrol-item style-4"><span></span></view>
				<view @click="clickBg(4)" class="scrol-item style-5"><span></span></view>
			</scroll-view>
		</view>
		<!-- 板式 -->
		<view class="type public-style">
			<view class="title">选择板式</view>
			板式
		</view>
		<!-- 标题 -->
		<view class="share-title public-style">
			<view class="title">分享标题</view>
			标题
		</view>
		
	</view>
</template>

<script>
	import bg2 from '../../../static/card2.jpg';
	import bg3 from '../../../static/card3.jpg';
	import bg4 from '../../../static/card4.jpg';
	import bg5 from '../../../static/card5.jpg';
	
	export default {
	    data() {
	        return {
	            bgImages: [null, bg2, bg3, bg4, bg5],
				selectBgImage: null,
	        }
	    },
	    methods: {
			clickBg(index) {
				this.selectBgImage = index !== null?this.bgImages[index]:null
			}
	    }
	}
</script>

<style scoped>
	.composition {
		display: flex;
		background-color: #efefef;
		flex-direction: column;
		justify-content: center;
	}
	.public-style {
		width: calc(100% - 20px);
	}
	.preview {
		margin: 10px;
		height: 173px;
		background-color: #FFFFFF;
		background-size: cover;
		border-radius: 10px;
	}
	.title {
		font-size: 18px;
		color: #0099FF;
		margin: 0 0 10px 10px;
	}
	
	.scroll-view_H {
		height: 150px;
		display: flex;
		padding: 0 0 0 5px;
		white-space: nowrap;
	}
	
	.scrol-item {
		display: inline-flex;
		justify-content: flex-end;
		align-items: flex-end;
		width: 100px;
		height: 70px;
		margin: 5px;
		border-radius: 10px;
		
	}
	.scrol-item span{
		display: block;
		width: 14px;
		height: 14px;
		border: 1px solid #0099FF;
		border-radius: 50%;
		margin: 5px;
	}
	
	.style-1 {
		background-color: #FFFFFF;
	}
	
	.style-2 {
		background: url(../../../static/card2.jpg);
		background-size: cover;
	}
	.style-3 {
		background: url(../../../static/card3.jpg);
		background-size: cover;
	}
	.style-4 {
		background: url(../../../static/card4.jpg);
		background-size: cover;
	}
	.style-5 {
		background: url(../../../static/card5.jpg);
		background-size: cover;
	}

	
</style>
