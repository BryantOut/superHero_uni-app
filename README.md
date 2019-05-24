# uni-app项目实践一：《超英预告》

## 接口文档

```
https://www.imovietrailer.com/superhero/doc.html
```

## 项目线上地址

```
http://www.imovietrailer.com/#/
```

## 项目待解决问题

| 问题                 | 解决程度 |
| ------------------ | ---- |
| app+小程序首页视频排他性播放无效 |      |
| app+小程序第三方登录问题     |      |
| 一些接口信息存本地          |      |
| 图片懒加载              |      |
| 我的页面设置页面功能         |      |
| 搜索页面搜索功能存在问题       |      |
| 自适应一些样式的调整         |      |

## 项目重点

### 小程序端实现第三方登录

[button](https://uniapp.dcloud.io/component/button)

#### 组件button属性的open-type（开放能力）-- 获取到用户信息

> open-type 有效值

| 值           | 说明                                       | 平台支持  |
| ----------- | ---------------------------------------- | ----- |
| getUserInfo | 获取用户信息，可以从@getuserinfo回调中获取到用户信息，包括手机号、头像、昵称等信息 | 微信小程序 |

```vue
<template>
<!-- #ifdef MP-WEIXIN -->
  <button open-type='getUserInfo' @getuserinfo="wxLogin" class="third-btn-ico">
  </button>
<!-- #endif -->
</template>
<script>
// 微信小程序中登录按钮
wxLogin(e) {
  // 通过微信开放能力，获得微信用户的基本信息
  let userInfo = e.detail.userInfo
}
</script>
```

**日志打印**

![](/static/uni-app1.png)

#### 利用第三方服务--uni.login(OBJECT)登录

[uni.login(OBJECT)](https://uniapp.dcloud.io/api/plugins/login?id=login)（）

>  平台差异

| 5+App |  H5  | 微信小程序 |
| :---: | :--: | :---: |
|   ✔   |  ×   |   ✔   |

> OBJECT 参数说明

| 参数名      | 类型     | 必填   | 说明                                       | 平台差异说明 |
| -------- | ------ | ---- | ---------------------------------------- | ------ |
| provider | String | 否    | 登录服务提供商，通过 [uni.getProvider](https://uniapp.dcloud.io/api/plugins/provider) 获取，如果不设置则弹出登录列表选择界面 |        |

> provider 在不同服务类型下可能的取值说明

| provider  |   说明   |
| :-------: | :----: |
|  weixin   |  微信登录  |
|    qq     |  QQ登录  |
| sinaweibo | 新浪微博登录 |

```js
uni.login({
  provider:'weixin',
  success(res) {
    console.log(res)
    // 获得微信登录的code：授权码
    let code = res.code
  }
})
```

![](/static/uni-app2.png)

**注意**

![](/static/uni-app3.png)

### App端实现第三方登录

![](/static/uni-app4.png)

#### 绑定第三方登录类型

```html
<!-- 5+app 用qq/微信/微博 登录 小程序用微信小程序登录 h5不支持 -->
<!-- #ifdef APP-PLUS -->
<image src="../../static/icos/weixin.png" data-logintype="weixin" @click="appOAuthLogin" class="third-ico"></image>
<image src="../../static/icos/QQ.png" data-logintype="qq" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
<image src="../../static/icos/weibo.png" data-logintype="sinaweibo" @click="appOAuthLogin" class="third-ico" style="margin-left: 80upx;"></image>
<!-- #endif -->
```

#### 自定义appOAuthLogin方法(参考微信小程序第三方登录)

```js
appOAuthLogin(e) {
				let me = this;
				// 获取用户登录类型
				let logintype = e.currentTarget.dataset.logintype				
				// 授权登录
				uni.login({
					provider:logintype,
					success(res) {
						// 授权登录成功以后，获取用户的信息
						uni.getUserInfo({
							provider:logintype,
							success(info) {
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
							}
						})
					}
				})
			},
```

### 分享功能

### 项目发布与上线