"use strict"
let request = require('./../common/request.js');

Page({
	data: {
		imgUrls: [
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		indicatorDots: true,
		autoplay: true,
		interval: 5000,
		duration: 1000,
		searchValue:"",
		msgList: []
	},
	dataChange: function(e) {//搜索输入监听
		let that = this;
		let searchValue = e.detail.value;
		that.setData({
			searchValue: searchValue
		})
	},
	dosearch: function(e) {//执行搜索
		let that = this;
		console.log(that.data.searchValue);
		let val = that.data.searchValue;
		if(!val){
			return;
		}
		request.request('norm/search', 'GET', { value: val }, function(res) {
			that.setData({
				msgList: res
			})
		})
	}
})