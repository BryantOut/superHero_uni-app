<template>
	<view class="page page-fill">
		<view class="header">
			<view v-if="userIsLogin">
				<image :src="userInfo.faceImage" class="face"></image>
			</view>
			<view v-else>
				<image src="../../static/icos/default-face.png" class="face"></image>
			</view>

			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">
<<<<<<< HEAD
					{{userInfo.nickname}}
=======
					{{userInfo.username}}
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
				</view>
				<view class="nav-info">ID：{{userInfo.id}}</view>
			</view>
			<view class="info-wapper" v-else>
				<navigator url="../registerOrLogin/registerOrLogin">
					<view class="nickname regist-login">
						注册/登录
					</view>
				</navigator>
			</view>

			<view class="set-wapper" v-if="userIsLogin">
				<navigator url="../infoEditor/infoEditor">
					<image src="/static/icos/settings.png" mode="" class="settings"></image>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: {}
			}
		},
		methods: {

		},
		onShow() {
			// 使用挂在方法获取用户数据
			let globalUser = this.getGlobalUser('globalUser')
			if (globalUser !== null) {
				this.userIsLogin = true
				this.userInfo = globalUser
			} else {
				this.userIsLogin = false
				this.userInfo = {}
			}
		}
	}
</script>

<style lang="scss">
	.page-fill {
		width: 100%;
		height: 100%;
	}

	.page {
		background-color: aliceblue;

		/* 头部个人信息 start */
		.header {
			/* #ifdef MP */
			padding: 0upx 30upx 40upx 30upx;
			/* #endif */
			/* #ifndef MP */
			padding: 120upx 30upx 40upx 30upx;
			/* #endif */
			background-color: #ffd655;
			background: url(http://122.152.205.72:88/group1/M00/00/03/CpoxxFwu_1OAYFAIAAAzO_Q1tPg693.png) repeat;

			display: flex;
			flex-direction: row;
			justify-content: flex-start;

			.face {
				width: 120upx;
				height: 120upx;
				border-radius: 50%;
				flex-shrink: 0;
			}

			.info-wapper {
				width: 80%;
				margin-left: 40upx;
				display: flex;
				flex-direction: column;

				.nickname {
					color: #6a5018;
					font-size: 18px;
					font-weight: bold;
				}

				.regist-login {
					margin-left: 60upx;
					margin-top: 30upx;
				}

				.set-wapper {
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					width: 15%;
				}

				.nav-info {
					color: #a38e62;
					font-size: 14px;
					margin-top: 10upx;
				}
			}

			.settings {
				width: 40upx;
				height: 40upx;
			}
		}


	}
</style>
