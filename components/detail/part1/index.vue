<template name="part1">
	<view class="block">
		<navigator :url="'../../pages/cover/cover?cover='+data.cover">
			<image :src="data.cover" mode="" class="pic"></image>
		</navigator>
		<div class="infoBox">
			<div class="title">{{data.name}}</div>
			<div class="basicInfo">{{data.basicInfo}}</div>
			<div class="originalName">{{data.originalName}}</div>
			<div class="totalTime">{{data.totalTime}}</div>
			<div class="releaseDate">{{data.releaseDate}}</div>
			
			<scoreCard :score="data.score" :prisedCounts="data.prisedCounts" class="scoreCard"/>
		</div>
	</view>
</template>

<script>
	import scoreCard from "@/components/detail/scoreCard/index.vue"
	export default {
		props: ['data'],
		components: {
			scoreCard
		},
		methods:{
		}
	}
</script>

<style lang="scss" scoped>
	.block {
		display: flex;
		justify-content: space-around;
		padding: 20upx 10upx;			
		.pic {
			width: 280upx;
			height: 380upx;
			margin-right: 30upx;
		}
		.infoBox {
			font-size: 12px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			.title {
				font-size: 26px;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.releaseDate {
				margin-bottom: 40upx;
			}
			.scoreCard {
				margin-right: 30upx;
			}
		}
	}
</style>
