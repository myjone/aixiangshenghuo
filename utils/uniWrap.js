const logError = (e) => {
	console.error(`-----${e}-----`)
}
export const setStorage = (key, data, callback) => {
	try {
		uni.setStorage({
			key: key,
			data: data,
			success: function(res) {
				if (callback) callback(res)
			}
		});
	} catch (e) {
		logError(e)
	}
}
export const setStorageSync = (key, data) => {
	try {
		uni.setStorageSync(key, data)
	} catch (e) {
		logError(e)
	}
}
export const getStorage = (key, callback) => {
	try {
		uni.getStorage({
			key: key,
			success: function(res) {
				if (callback) callback(res.data)
			}
		})
	} catch (e) {
		logError(e)
	}
}
export const getStorageSync = (key) => {
	try {
		let value = uni.getStorageSync(key) ? uni.getStorageSync(key) : '';
		return value;
	} catch (e) {
		logError(e)
	}
}
export const getStorageInfo = (callback) => {
	try {
		uni.getStorageInfo({
			success: function(res) {
				if (callback) callback(res)
			}
		});
	} catch (e) {
		logError(e)
	}
}
export const getStorageInfoSync = () => {
	try {
		const res = uni.getStorageInfoSync();
		return res
	} catch (e) {
		logError(e)
	}
}

export const removeStorage = (key, callback) => {
	try {
		uni.removeStorage({
			key: key,
			success: function(res) {
				if (callback) callback(res)
			}
		});
	} catch (e) {
		logError(e)
	}
}
export const removeStorageSync = (key) => {
	try {
		uni.removeStorageSync(key);
	} catch (e) {
		logError(e)
	}
}
export const clearStorage = () => {
	try {
		uni.clearStorage();
	} catch (e) {
		logError(e)
	}
}
export const clearStorageSync = () => {
	try {
		uni.clearStorageSync();
	} catch (e) {
		logError(e)
	}
}
//路由跳转模块
export const navigateTo = (url, animationType, animationDuration, callback) => {
	try {
		uni.navigateTo({
			url: url,
			animationType: animationType ? animationType : 'slide-in-right',
			animationDuration: animationDuration ? animationDuration : 150,
			complete: function(res) {
				if (callback) callback(res)
			}
		});
	} catch (e) {
		logError(e)
	}
}
export const redirectTo = (url, callback) => {
	try {
		uni.redirectTo({
			url: url,
			complete: function(res) {
				if (callback) callback(res)
			}
		});
	} catch (e) {
		logError(e)
	}
}
export const reLaunch = (url, callback) => {
	try {
		uni.reLaunch({
			url: url,
			complete: function(res) {
				if (callback) callback(res)
			}

		});
	} catch (e) {
		logError(e)
	}
}
export const switchTab = (url, callback) => {
	try {
		uni.switchTab({
			url: url,
			complete: function(res) {
				if (callback) callback(res)
			}
		});
	} catch (e) {
		logError(e)
	}
}
export const navigateBack = (number) => {
	try {
		uni.navigateBack({
			delta: number
		});
	} catch (e) {
		logError(e)
	}
}
export const showToast = (message) => {
	try {
		uni.showToast({
			title: message,
			icon: 'none',
			duration: 3000,
		});
	} catch (e) {
		logError(e)
	}
}
export const showLoading = () => {
	try {
		uni.showLoading({
			mask: true
		});
	} catch (e) {
		logError(e)
	}
}
export const hideLoading = () => {
	try {
		uni.hideLoading();
	} catch (e) {
		logError(e)
	}
}
//复制按钮
export const copy = (value, callback) => {
	try {
		uni.setClipboardData({
			data: value,
			success: function(res) {
				if (callback) {
					callback(res)
				}
			}
		});
	} catch (e) {
		logError(e)
	}
}

//返回顶部


export const ReturnTop = (scroll, duration) => {
	let uScroll = scroll || 0;
	let uDuration = duration || 500;
	try {
		uni.pageScrollTo({
			scrollTop: uScroll,
			duration: uDuration
		});
	} catch (e) {
		logError(e)
	}

}

//获取路由中的参数
export const getQuery = (url, name) => {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = url.substr(1).match(reg);
	if (r != null) {
		return unescape(r[2]);
	}
	return null;
}

//获取屏幕宽度
export const getSystemInfo = (callback) => {
	try {
		uni.getSystemInfo({
			success(e) {
				if (callback) {
					callback(e)
				}
			}
		})
	} catch (e) {
		logError(e)
	}
}
