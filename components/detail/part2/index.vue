<template>
	<view class="plotDescBox">
		<div class="title">剧情介绍</div>
		<div class="plotDesc">
			{{plotDesc}} 
		</div>
	</view>
</template>

<script>
	export default {
		props: ["plotDesc"]
	}
</script>

<style lang="scss">
	.plotDescBox {
		padding: 20upx;
		.title {
			font-size: 18px;
			margin-bottom: 10upx;
		}
		.plotDesc {
			font-size: 14px;
			color: gray;
		}
	}
</style>
