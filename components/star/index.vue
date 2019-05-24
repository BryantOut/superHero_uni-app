<template name="star">
	<view class="startBox">
		<image src="../../static/icos/star-yellow.png" mode="" v-for="item in yellowStarNum"></image>
		<image src="../../static/icos/star-gray.png" mode="" v-for="item in grayStarNum"></image>
		<view class="movice-score" v-if="showNum!=0">{{score}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			score: 0,
			showNum: 0
		},
		data() {
			return {
				yellowStarNum: 0,
				grayStarNum: 5
			}
		},
		created() {
			let tempScore = 0
			if (this.score !== null && this.score !== undefined && this.score !== '') {
				tempScore = this.score
			}
			
			// 星星颜色个数
			this.yellowStarNum = parseInt(tempScore/2)
			this.grayStarNum = 5- this.yellowStarNum
		}
	}
</script>

<style lang="scss">
	.startBox {
		display: flex;
	}
	
	.startBox image {
		width: 20upx;
		height: 20upx;
		margin-top: 6upx;	
	}
	
	.startBox .movice-score {
		font-size: 12px;
		color: grey;
		margin-left: 8upx;
	}
</style>
