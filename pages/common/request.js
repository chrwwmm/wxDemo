"use strict"

var server = 'chy',
	accessToken = '',
	userInfo = {},
	systemInfo = {};

//配置环境：本地、开发、生产
function getServerUrl(route) {
	var url = '',
		fileName = route.replace(/\//g, '_');
	switch(server) {
		case 'local':
			url = `https://xxx.tunnel.qydev.com/${route}`;
			break;
		case 'chy':
			url = `https://chy.tunnel.qydev.com/${route}`;
			break;
		default:
			url = `https://test.zhongan.com/${route}`;
			break;
	}
	return url;
}

function saveError(msg, detail, data) {}

function login(success) {
	if(ajaxBufferList.length > 1) {
		return; //请求队列还有多个请求则等待请求返回。
	}
	wx.login({
		success: function(res) {
			if(res.code) {
				var code = res.code
				var method = (server == 'local' ? 'GET' : 'POST')
				wx.getUserInfo({
					success: function(resInfo) {
						userInfo = resInfo.userInfo //保存用户信息
					},
					fail: function(err) {
						console.error('wx.getUserInfo error:' + err.errMsg);
						saveError('调用用户信息接口', err);
					}
				})
			} else {
				console.error('wx.login error:' + res.errMsg)
			}
		},
		error: function() {
			wx.showToast({
				title: '调用登录接口失败'
			})
			saveError('调用登录接口失败');
		}
	});
}

function request(route, method, data, success, fail) {
	wx.request({
		url: getServerUrl(route),
		method: server == 'local' ? 'GET' : method,
		data: data,
		header: {
			'content-type': 'application/json',
			'minitoken': accessToken
		},
		success: function(res) {
			wx.hideToast();
			if(res.data.code == 0 && typeof success == 'function') {
				success.call(this, res.data.result);
			} else if(res.data.code != 0) {
				wx.showModal({
					showCancel: false,
					content: res.data.msg
				})
				saveError('服务端接口异常：' + route, res, data);
			}
		},
		fail: function(err) {
			wx.hideToast();
			wx.showModal({
				title: '服务端接口错误',
				content: route
			})
			saveError('服务端接口失败：' + route, err, data);
		}
	});
}

function initInfo() {
	wx.getSystemInfo({
		success: function(res) {
			systemInfo = res;
		},
		error: function() {
			saveError('获取信息失败');
		}
	})
}

function parseData(data) {
	//针对移动端数据返回非JSON数据，作临时处理
	if(typeof data == "object") {
		return data;
	}
	var str = data.slice(1).replace('\\', '');
	return JSON.parse(str);
}

function getUserInfo() {
	return userInfo;
}

function getAccessToken() {
	return accessToken;
}

try {
	userInfo = wx.getStorageSync('userInfo');
} catch(e) {}

initInfo(); //初始化系统信息

//对外的接口
module.exports = {
	getAccessToken: getAccessToken,
	getUserInfo: getUserInfo,
	getServerUrl: getServerUrl,
	saveError: saveError,
	request: request
}