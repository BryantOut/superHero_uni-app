<template>
	<view class="page page-fill">
		
		<view class="pending-wapper">
			<image id="face" :src="tempFilePath" class="pending-face" mode="scaleToFill"></image>
		</view>
		
		<view class="notice">
			<view class="notice-words">
				* 请从相册中选择等比宽高的图片噢~
			</view>
		</view>
		
		<view class="footer-opertor">
			<view class="opertor-words" @click="changePendingFace">
				重新选择
			</view>
			<view class="opertor-words" @click="upload">
				确认上传
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tempFilePath: '',
				globalUser: ''
			}
		},
		methods: {
			changePendingFace() {
				let me = this
				 // 选择上传头像
				 uni.chooseImage({
				 	count: 1,
				 	sizeType:["compressed"],
				 	sourceType: ["album"],
				 	success(res) {
				 		// 获得临时路径
				 		me.tempFilePath = res.tempFilePaths[0]
				 	}
				 })
			},
			upload() {
				let me = this
				// 用户状态切换
				let globalUser = me.getGlobalUser('globalUser')
				this.globalUser = globalUser
				console.log(me.serverUrl + `/user/uploadFace?userId=`+ globalUser.id +`&qq=565580328`)
				uni.showLoading({
					mask: true,
					title: '上传中,请稍等'
				})
				
				uni.uploadFile({
					url:  me.serverUrl + `/user/uploadFace?userId=`+ globalUser.id +`&qq=565580328`,
					filePath: me.tempFilePath,
					name: "file",
					header: {
						"headerUserId": globalUser.id,
						"headerUserToken": globalUser.userUniqueToken
					},
					success(res) {
						let reDataStr = res.data
						let reData = JSON.parse(reDataStr)
						console.log(reData)
						if (reData.status == 200) {
							// 获得最新的用户数据
							let userInfo = reData.data
							uni.setStorageSync('globalUser',userInfo)
							uni.navigateBack({
								delta: 1
							})
						} else if (reData.status == 502 || reData.status == 500) {
							uni.showToast({
								title: res.data.msg,
								image: "../../static/icos/error.png ",
								duration: 2000
							})
						}
					},
					complete() {
						uni.hideLoading()
					}
				})
			}
		},
		onLoad(params) {
			let me = this
			this.tempFilePath = params.tempFilePath			
		}
	}
</script>

<style>
/* 页面铺满屏幕 */
.page-fill {
	width:100%;
	height: 100%;
	position: absolute;
	background: black;
}

.pending-wapper {
	display: flex;
	flex-direction: row;
	justify-content: center;
	
	margin-top: 40upx;
}
.pending-face {
	width: 600upx;
	height: 600upx;
}

.notice {
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

.notice-words {
	color: gray;
	font-size: 13px;
	margin-top: 30upx;
	width: 600upx;
}

/* 底部操作 start */
.footer-opertor {
	position: fixed;
	bottom: 0;
	
	border-top: #515050 solid 1px;
	width: 100%;
	
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	
	padding: 30upx;
}
.opertor-words {
	color: #e8e5e5;
	font-size: 16px;
	width: 200upx;
}
/* 底部操作 end */
</style>
