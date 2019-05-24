<template>
	<view class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="../../static/icos/default-face.png" class="face"></image>
			</view>

			<view class="info-wapper">
				<label class="words-lbl">账号</label>
				<input name="username" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords" />
			</view>

			<view class="info-wapper" style="margin-top: 40upx;">
				<label class="words-lbl">密码</label>
				<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords" />
			</view>

			<button type="primary" form-type="submit" style="background-color:#ffd655;margin-top: 60upx;width: 90%;">注册/登录</button>
		</form>

		<!-- 第三方登录H5不支持，所以隐藏掉 -->
		<!-- #ifndef H5 -->
		<view class="third-wapper">
			<view class="third-line">
				<view class="single-line">
					<view class="line"></view>
				</view>

				<view class="third-words">第三方账号登录</view>

				<view class="single-line">
					<view class="line"></view>
				</view>
			</view>

			<view class="third-icos-wapper">
				<!-- 5+app 用qq/微信/微博 登录 小程序用微信小程序登录 h5不支持 -->
				<!-- #ifdef APP-PLUS -->
				<image src="/static/icos/weixin.png" data-logintype="weixin" @click="appOAuthLogin" class="third-ico"></image>
				<image src="/static/icos/QQ.png" data-logintype="qq" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
				<image src="/static/icos/weibo.png" data-logintype="sinaweibo" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
				<!-- #endif -->
				<!-- #ifdef MP-WEIXIN -->
				<button open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
				</button>
				<!-- #endif -->
			</view>
		</view>
		<!-- #endif -->
<<<<<<< HEAD
		<view>
			{{console}}
		</view>
=======
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
	</view>
</template>

<script>
	import common from "../../common/common.js"
	export default {
		data() {
			return {
<<<<<<< HEAD
				console:''
=======

>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
			}
		},
		methods: {
			appOAuthLogin(e) {
<<<<<<< HEAD
				let me = this;
				// 获取用户登录类型
				let logintype = e.currentTarget.dataset.logintype				
=======
				// 获取用户登录类型
				let logintype = e.currentTarget.dataset.logintype
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
				// 授权登录
				uni.login({
					provider:logintype,
					success(res) {
<<<<<<< HEAD
=======
						console.log(res)
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
						// 授权登录成功以后，获取用户的信息
						uni.getUserInfo({
							provider:logintype,
							success(info) {
<<<<<<< HEAD
								var userInfo = info.userInfo;
								var face = "";
								var nickname = "";
								var openIdOrUid = "";
								if (logintype == "weixin") {
									face = userInfo.avatarUrl;
									nickname = userInfo.nickName;
									openIdOrUid = userInfo.openId;
								} else if (logintype == "qq") {
									openIdOrUid = userInfo.openId;
									nickname = userInfo.nickname;
									face = userInfo.figureurl_qq_2;
								} else if (logintype == "sinaweibo") {
									openIdOrUid = userInfo.id;
									nickname = userInfo.nickname;
									face = userInfo.avatar_large;
								}
								
								// 调用开发者后台，执行一键注册或登录
								uni.request({
									url: common.serverUrl + `/appUnionLogin/` + logintype+ '?qq=565580328',
									data: {
										"openIdOrUid": openIdOrUid,
										"nickname": nickname,
										"face": face
									},
									method: "POST",
									success: (result) => {
										if (result.data.status == 200) {
											var userInfo = result.data.data;
											// 保存用户信息到全局的缓存中
											uni.setStorageSync("globalUser", userInfo);
											// 切换页面跳转，使用tab切换的api
											uni.switchTab({
												url: "../me/me"
											});
										}
									}
								})
=======
								console.log(info)
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
							}
						})
					}
				})
			},
			// 微信小程序中登录按钮
			wxLogin(e) {
				// console.log(e)
				// 通过微信开放能力，获得微信用户的基本信息
				let userInfo = e.detail.userInfo
<<<<<<< HEAD
				// console.log('userInfo:',userInfo)
=======
				
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
				// 实现微信登录
				uni.login({
					provider:'weixin',
					success(res) {		
						// 获得微信登录的code：授权码
						let code = res.code
<<<<<<< HEAD
						// console.log(res)
=======
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
						// 设置登录到哪个对应的小程序，大家可以根据自己的后端去实现业务参数
						// 使用哪个小程序[0:NEXT超英预告][1:超英预告][2:NEXT学院电影预告]
						let loginWhichMP = 1
						// common.urlRequest(`/stu/mpWXLogin/${code}`,{"avatarUrl":userInfo.avatarUrl,"nickName":userInfo.nickName,"whichMP":loginWhichMP},'POST',(res)=>{
						// 	console.log(res)
						// })
						let obj = {"avatarUrl":userInfo.avatarUrl,"nickName":userInfo.nickName,"whichMP":loginWhichMP}
<<<<<<< HEAD
						console.log(obj)
						
						uni.request({
							url: common.serverUrl + '/stu/mpWXLogin/${code}' + '?qq=565580328',
							data: {
								"avatarUrl": userInfo.avatarUrl,
								"nickName": userInfo.nickName,
								"whichMP": loginWhichMP
							},
=======
						uni.request({
							url: common.serverUrl + '/stu/mpWXLogin/${code}' + '?qq=565580328',
							data: obj,
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
							method: "POST",
							success: (res) => {
								console.log(res)
								if (res.data.status == 200) {
									// 保存用户信息到全局的缓存中
									uni.setStorageSync('globalUser', res.data.data)
									// 切换页面跳转，使用tab切换的api
									uni.switchTab({
										url: '../me/me'
									})
								}
							}
						})
					}
				})
			},
			// 登录/注册按钮事件
			formSubmit(e) {
				let userName = e.detail.value.username
				let password = e.detail.value.password

				let obj = {
					'username': userName,
					'password': password
				}

				console.log(obj)
				// 发起注册/登录请求
				uni.request({
					url: common.serverUrl + '/user/registOrLogin' + '?qq=565580328',
					data: obj,
					method: "POST",
					success: (res) => {
						if (res.data.status == 200) {
							// 保存用户信息到全局的缓存中
							uni.setStorageSync('globalUser', res.data.data)
							// 切换页面跳转，使用tab切换的api
							uni.switchTab({
								url: '../me/me'
							})
						} else if (res.data.status == 500) {
							uni.showToast({
								title: res.data.msg,
								duration: 2000,
								image: "/static/icos/error.png"
							})
						}
					}
				})
<<<<<<< HEAD
			},
			
=======

				// common.urlRequest('/user/registOrLogi',obj,'POST',(res)=>{
				// 	console.log(res)
				// })
			}
>>>>>>> fa75a6ebd76c631e945876f515e3287c132981f8
		}
	}
</script>

<style>
	@import url('registerOrLogin.css')		
</style>
