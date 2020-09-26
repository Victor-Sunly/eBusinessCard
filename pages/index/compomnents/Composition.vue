<!-- 名片排版样式 -->
<template>
	<view class="composition">
		<!-- 预览 -->
		<view class="preview public-style" :style="{background: selectedBgIndex!==null ?'url('+bgImages[selectedBgIndex]+')': '#ffffff'}">
			预览
		</view>
		<!-- 背景 -->
		<view class="bg-style public-style">
			<view class="title">选择背景</view>
			<scroll-view class="scroll-view_H" scroll-x="true">
				<block v-for="(item,index) in bgImages" :key="index">
					<view @click="selectedBg(index)" class="scrol-item" :class="'style-'+index"><span :class="{active: selectedBgIndex === index}"></span></view>
				</block>
			</scroll-view>
		</view>
		<!-- 板式 -->
		<view class="type public-style">
			<view class="title">选择板式</view>
			<scroll-view class="scroll-view_H" scroll-x="true">
				<block v-for="(item,index) in typesets" :key="index">
					<view @click="selectedTs(index)" class="scrol-item special-font">
						{{item}}
						<span :class="{active: selectedTsIndex === index}"></span>
					</view>
				</block>
			</scroll-view>
		</view>
		<!-- 标题 -->
		<view class="share-title public-style">
			<view class="title">分享标题</view>
			<textarea
				maxlength="28"
				@input="inputShareTitle"
				class="share-content"
				value=""
				placeholder="您好这是我的名片,请惠存!"
			/>
			<text class="tips">{{shareTitle.length}}/28</text>
		</view>
		<button>保存</button>
	</view>
</template>

<script>
	
	import bg0 from '../../../static/card0.jpg';
	import bg1 from '../../../static/card1.jpg';
	import bg2 from '../../../static/card2.jpg';
	import bg3 from '../../../static/card3.jpg';
	import bg4 from '../../../static/card4.jpg';
	
	export default {
	    data() {
	        return {
	            bgImages: [bg0, bg1, bg2, bg3, bg4],
				selectedBgIndex: 0, //默认为选择第一张背景图
				typesets: ['简约', '通用', '商务'],
				selectedTsIndex: 0, // 默认选择第一个板式
				shareTitle: ''
	        }
	    },
	    methods: {
			selectedBg(index) {
				this.selectedBgIndex = index;
			},
			selectedTs(index) {
				this.selectedTsIndex = index;
			},
			inputShareTitle(e) {
				this.shareTitle = e.detail.value;
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
		font-size: 16px;
		color: #0099FF;
		margin: 10px 0 10px 10px;
	}
	
	.scroll-view_H {
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
		background-color: #FFFFFF;
		text-align: center;
		line-height: 70px;
	}
	.scrol-item span{
		display: block;
		width: 14px;
		height: 14px;
		border: 1px solid #0099FF;
		border-radius: 50%;
		margin: 5px;
	}

	
	.style-0 {
		background: url('../../../static/card0.jpg');
		background-size: cover;
	}
	.style-1 {
		background: url('../../../static/card1.jpg');
		background-size: cover;
	}
	.style-2 {
		background: url('../../../static/card2.jpg');
		background-size: cover;
	}
	.style-3 {
		background: url('../../../static/card3.jpg');
		background-size: cover;
	}
	.style-4 {
		background: url('../../../static/card4.jpg');
		background-size: cover;
	}
	.active {
		background-color: #0099FF;
	}
	
	.special-font {
		border: 1px solid #D8D3CB;
		background-image: -webkit-linear-gradient(left,green,yellow,pink, blue, red 25%,green 35%,
		    blue 50%,yellow 60%, red 75%, pink 85%,blue 100%); 
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}
	
	.share-title {
		display: flex;
		position: relative;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 10px;
	}
	
	.share-content {
		height: 100px;
		background: #FFFFFF;
		box-sizing: border-box;
		padding: 5px;
		font-size: 14px;
		border-radius: 10px;
		margin: 0 10px;
	}
	.share-title .tips {
		align-self: flex-end;
		position: absolute;
		bottom: 4px;
		font-size: 12px;
		color: #808080;
	}
	button {
		font-size: 16px;
		border-radius: 30px;
		padding: 0 80px;
		color: #FFFFFF;
		background-color: #0099FF;
		margin-bottom: 10px;
	}
	
</style>
