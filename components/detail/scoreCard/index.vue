<template name="scoreCard">
	<view class="scoreCard">
		<div class="left-p">
			<div class="subTit">综合评分：</div>
			<div class="score">9</div>
		</div>
		<div class="right-p">
			<star :showNum="0" :score="score"></star>
			<div class="prisedCounts">
				{{prisedCounts}} 人点赞
			</div>
		</div>
	</view>
</template>

<script>
	import star from "../../star/index.vue"
	export default {
		props: ["score","prisedCounts"],
		components: {
			star
		}
	}
</script>

<style lang="scss" scoped>
	.scoreCard {
		display: flex;
		justify-content: space-around;
		width: 300upx;
		height: 100upx;
		background-color: #fff;
		box-shadow: 3px 2px 10px #dedede;
		.left-p {
			.subTit {
				
			}
			.score {
				color: #feab2a;
				font-size: 26px;
				text-align: center;
			}
		}
		.right-p {
			.prisedCounts {
				margin-top: 10upx;
			}
		}
	}
</style>
