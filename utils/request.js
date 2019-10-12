import qs from "qs";
import baseUrl from './baseUrl.js'
import {
	showToast,
	showLoading,
	hideLoading,
	getStorageSync,
	navigateTo,
	clearStorageSync
} from './uniWrap.js'
export const axios = (type, url, data, _callback, that, needLoading) => {
	if (needLoading) {
		showLoading();
	}
	//#ifdef H5
	let requestUrl ='';
	//#endif
	//#ifndef H5
	let requestUrl = baseUrl + url;
	//#endif
	let config = {
		method: type,
		url: requestUrl,
		data: qs.stringify(data, {
			skipNulls: true
		}),
		header: {
			'Content-Type': 'application/x-www-form-urlencoded',
			"Access-Control-Allow-Origin": "*",
			"client": "android",
			"version": 'v1.0.0.1',
			"sessionId": getStorageSync('sessionId') || "",
			"sign": getStorageSync('sign') || "",
		}
	}
	uni.request(config).then(
		function(data) {
			hideLoading();
			let res = data[1];
			if (res.statusCode == 200) {
				if (res.data.code == 0) {
					_callback(res.data.data)
				} else if (res.data.code == 200004) {
					_callback(res.data)
				} else if (res.data.code == 200002) {
					showToast('用户未登录');
					clearStorageSync();
					setTimeout(() => {
						navigateTo('/pages/login/login')
					}, 600)
				} else {
					if (res.data.msg == '用户未登录') {
						console.log('userNeadLogin')
					} else {
						showToast(res.data.msg);
					}
				}
			} else {
				switch (res.statusCode) {
					case 400:
						res.message = '请求错误'
						break
					case 401:
						res.message = '未授权，请登录'
						break
					case 403:
						res.message = '拒绝访问'
						break
					case 404:
						res.message = '请求地址出错'
						break
					case 408:
						res.message = '请求超时'
						break
					case 500:
						res.message = '服务器内部错误'
						break
					case 501:
						res.message = '服务未实现'
						break
					case 502:
						res.message = '网关错误'
						break
					case 503:
						res.message = '服务不可用'
						break
					case 504:
						res.message = '网关超时'
						break
					case 505:
						res.message = 'HTTP版本不受支持'
						break
					default:
				}
				showToast(res.message)
			}
		}
	)
};
