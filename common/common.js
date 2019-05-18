const serverUrl = "https://www.imovietrailer.com/superhero"; // 生产环境
// const serverUrl = "https://www.imovietrailer-dev.com/superhero"; // 开发环境


// 参数： url:请求地址  param：请求参数  way：请求方式 callBack：回调函数
function urlRequest(url, params, methods, callback) {
	var serverUrl = this.serverUrl

	uni.request({
		url: serverUrl + url + '?qq=565580328',
		method: methods,
		data: params,
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: (res) => {
			// 获取真实数据之前，务必判断状态是否为200
			if (res.data.status == 200) {
				callback(res.data)
			}
		},
		complete() {
			uni.stopPullDownRefresh()
			uni.hideNavigationBarLoading();
			uni.hideLoading();
		}
	})
}

export default {
	serverUrl,
	urlRequest
}
