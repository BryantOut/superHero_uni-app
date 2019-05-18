<template name="GuessYouLike"> 
	<view class="hot-part block">
		<view class="title">
			<image src="/static/icos/guess-u-like.png" mode=""></image>
			<span>猜你喜欢</span>
		</view>
		
		<view class="itemBox">
			<view class="item" v-for="(item,index) in guessULikeList" :key="item.id">
				<image class="pic" :src="item.cover" mode=""></image>
				<view class="con">
					<view class="title">
						{{item.name}}
					</view>
					<star :score="item.score" :showNum="0"/>
					
					<view class="basicInfo">{{item.basicInfo}}</view>
					<view class="releaseDate">{{item.releaseDate}}</view>
				</view>
				<view class="support" @click="supportEvent" :data-gIndex="index">
					<image class="icon" src="/static/icos/praise.png"></image>
					<view class="supportAuthor">点赞</view>
					<view class="supportAuthor animation-opacity" :animation="animationDataArr[index]" >点赞+1</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import common from "../../../common/common.js"
	import star from "../../star/index.vue"
	export default {
		name: "GuessYouLike",
		props: ['guessULikeList'],
		components: {
			star
		},
		data() {
			return {
				animationData: {},
				animationDataArr: [
					{},{},{},{},{}
				]
			}
		},
		created() {
			
			// #ifdef APP-PLUS || MP-WEIXIN
			// 在页面创建的时候，创建一个临时动画对象
			this.animation = uni.createAnimation({
			})
			// #endif
		},
		destroyed() {
			// 在页面卸载的时候，清楚动画数据
			this.animationData = {}
			this.animationDataArr = [
				{},{},{},{},{}
			]
		},
		methods:{
			// 实现点赞动画效果
			supportEvent(e) {
				// #ifdef APP-PLUS || MP-WEIXIN
				var gIndex = e.currentTarget.dataset.gindex;
				console.log(gIndex )
				// 构建动画数据，并且通过step来表示这组动画的完成
				this.animation.translateY(-60).opacity(1).step({duration:400})
				// 导出动画数据到view组件，实现组件的动画效果
				// this.animationData = this.animation.export()
				this.animationData = this.animation
				this.animationDataArr[gIndex] = this.animationData.export()	
						
				setTimeout(function(){
					this.animation.translateY(0).opacity(0).step({duration:0})
					this.animationData = this.animation
					this.animationDataArr[gIndex] = this.animationData.export()	
				}.bind(this),500)
				// #endif
			}
		}
	}
</script>

<style lang="scss">
	@import url('index.scss');
	.itemBox {
		display: flex;
		flex-direction: column;
		.item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin-bottom: 40upx;
			.pic {
				width: 180upx;
				height: 240upx;
				border-radius: 3%;
			}
			.con {
				display: flex;
				flex-direction: column;
				width: 340upx;
				.title {
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.basicInfo,.releaseDate {
					color: #808080;
					font-size: 14px;
				}
			}
			.support {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 140upx;
				border-left: 2px dashed #dbdbda;
				image {
					width: 40upx;
					height: 40upx;
					align-self: center;
				}
				.supportAuthor {
					font-size: 14px;
					color: #feab2a;
					align-self: center;
				}
				.animation-opacity {
					font-weight: bold;
					opacity: 0;
				}
			}
		}		
	}
</style>
