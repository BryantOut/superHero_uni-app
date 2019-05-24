<template>
	<view class="page">
<<<<<<< HEAD
<!-- 		<div class="videosBox">
			<video id="myTrailer" :src="data.trailer" :poster="data.cover" class="hot-movie-single" controls>
			</video>
		</div> -->

		<!-- <part1 :data="data" v-if="dataLoad" /> -->
		<!-- <mLine /> -->
		<!-- <part2 :plotDesc="data.plotDesc" v-if="dataLoad" /> -->
		<!-- <mLine /> -->
		<!-- staff组件 start -->
		<!-- <part4 :staffList="staffList" v-if="staffDataLoad" /> -->
		<!-- staff组件 end -->
		<!-- <mLine /> -->
=======
		<div class="videosBox">
			<video id="myTrailer" :src="data.trailer" :poster="data.cover" class="hot-movie-single" controls>
			</video>
		</div>

		<part1 :data="data" v-if="dataLoad" />
		<mLine />
		<part2 :plotDesc="data.plotDesc" v-if="dataLoad" />
		<mLine />
		<!-- staff组件 start -->
		<part4 :staffList="staffList" v-if="staffDataLoad" />
		<!-- staff组件 end -->
		<mLine />
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
		<!-- plotPics组件 start -->
		<part3 :plotPics="plotPics" v-if="dataLoad" />
		<!-- plotPics组件 end -->
	</view>
</template>

<script>
	import common from "@/common/common.js"
	import part1 from "@/components/detail/part1/index.vue"
	import part2 from "@/components/detail/part2/index.vue"
	import part3 from "@/components/detail/part3/index.vue"
	import part4 from "@/components/detail/part4/index"
	import mLine from "@/components/line/index.vue"
	export default {
		data() {
			return {
				moviceId: '',
				data: {},
				plotPics: null,
				staffList: [],
				dataLoad: false,
				staffDataLoad: false,
				videoContext: ''
			}
		},
		components: {
			part1,
			part2,
			part3,
			part4,
			mLine
		},
		// 页面初次渲染完成，获得视频上下文对象
		onReady() {
			this.videoContext = uni.createVideoContext('myTrailer')
		},
		onHide() {
			// 页面被隐藏的时候，暂停播放 
			this.videoContext.pause()

		},
		onShow() {
			// 页面被再次显示的时候，可以继续播放
			if (this.videoContext) {
				this.videoContext.play()
			}
		},
		onLoad(params) {
			// 通过api修改导航栏的属性
			uni.setNavigationBarColor({
				frontColor: "#ffffff",
				backgroundColor: "000000"
			})

			this.moviceId = params.moviceId
			// 预告片详情数据
			common.urlRequest(`/search/trailer/${this.moviceId}`, null, 'POST', (res) => {
				// console.log(res.data)
				this.data = res.data
				this.plotPics = JSON.parse(this.data.plotPics)
				// console.log(this.plotPics)
				this.dataLoad = true
			})
			// 查询演职人员数据
			common.urlRequest(`/search/staff/${this.moviceId}/1`, null, 'POST', (res) => {
				this.staffList = res.data
				// 查询演导演数据
				common.urlRequest(`/search/staff/${this.moviceId}/2`, null, 'POST', (res) => {
					this.staffList.push(...res.data)
					// console.log(this.staffList)
					this.staffDataLoad = true
				})
			})
		},
		// 此函数仅仅只支持在小程序端的分享，分享到微信群或者微信好友
		onShareAppMessage(res) {
			return {
				title: this.data.name,
				path: `/pages/detail/detail?moviceId=${this.moviceId}`
			}
		},
		// 监听导航栏的按钮
		onNavigationBarButtonTap(e) {
			let index = e.index
			console.log(index)
			// index 为 0 的时候分享
			if (index == 0) {
				uni.showLoading({
					title: '切换到微信朋友圈',
					mask: false
				});
				// 分享图文
				uni.share({
					provider: "weixin",
					// scene 值说明 -- 分享到朋友圈
					scene: "WXSenceTimeline",
					type: 0,
					href: `http://www.imovietrailer.com/#/pages/movie/movie?trailerId=${this.moviceId}`,
					title: `Bryantout超英《${this.data.name}》预告`,
					summary: `Bryantout超英《${this.data.name}》预告`,
					imageUrl: `${this.data.cover}`,
					success: function(res) {
						console.log("success:" + JSON.stringify(res));
					},
					complete() {
						uni.hideLoading()
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page {
		.videosBox {
			width: 100%;

			.hot-movie-single {
				width: 100%;
			}
		}
	}
</style>
