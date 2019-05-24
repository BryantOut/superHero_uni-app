<<<<<<< HEAD

=======
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
<template>
	<view class="plotPics">
		<div class="title">剧照</div>
		<scroll-view scroll-x="true" class="scroll-view_H itemBox">
			<view class="item" v-for="(item,index) in plotPics" :key="index">
<<<<<<< HEAD
				<image :src="item" mode="aspectFill" class="" @click="showBigPic(index)" lazy-load></image>
=======
				<image :src="item" mode="aspectFill" class="" @click="showBigPic(index)"></image>
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ['plotPics'],
		methods:{
			showBigPic(index) {
				uni.previewImage({
					current: this.plotPics[index],
					urls: this.plotPics
				})
			}
		}
	}
</script>

<style lang="scss">
	.plotPics {
		padding: 20upx;
		.title {
			margin-bottom: 10upx;
		}

		.itemBox {
			width: 100%;
			white-space: nowrap;
			.item {
				display: inline-block;
				width: 170upx;
				height: 240upx;
				margin-right: 20upx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
