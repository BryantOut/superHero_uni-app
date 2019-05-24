<template>
	<view class="block">
		<image :src="currentPic" mode="widthFix" v-if="currentPic!==null" @longpress="operate()"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentPic: null
			}
		},
		methods: {
			operate() {
				var _this = this
				uni.showActionSheet({
					itemList: ["保存图片到本地"],
					success(res) {
						// 下标为0为下载
						if (res.tapIndex == 0) {
							uni.showLoading({
								title: '保存图片中…'
							})
							uni.downloadFile({
								url: _this.currentPic,
								success(res) {
									let tempFilePath = res.tempFilePath
									uni.saveImageToPhotosAlbum({
										filePath: tempFilePath,
										success() {
											uni.showToast({
												title: "保存成功",
												duration: 2000
											})
										},
										complete() {
											uni.hideLoading()
										}
									})
								}
							})
						}
					}
				})
			}
		},
		onLoad(params) {
			// 通过api修改导航栏的属性
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "#000000"
			});

			this.currentPic = params.cover
		}
	}
</script>

<style lang="scss">
	.block {
		width: 100%;
		height: 100%;
		background-color: #000;
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: center;

		image {
			align-self: center;
		}
	}
</style>
