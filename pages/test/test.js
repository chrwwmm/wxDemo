var request = require('../common/request.js');
var util = require('../common/util.js');
var userInfo = {};
Page({
	data: {
		list: [],
		message: '',
		empty: false
	},
	onShareAppMessage: function() {
		return {
			title: '健康险理赔',
			desc: '众安健康在线保单管理和理赔服务',
			path: 'pages/test/index'
		}
	},
	onLoad: function() {},
	onShow: function() {
		console.log(1213);
		var that = this;
		request.request('theme/type/all', 'GET', {}, function(res) {
			console.log(res);
		});
	},
	onReady: function() {
		wx.showToast({
			title: '加载中',
			icon: 'loading',
			duration: 10000,
			mask: true
		});
	},
	toQuestion: function() {
		wx.navigateTo({
			url: '../question/question'
		})
	},
	toPlan: function() {
		wx.navigateTo({
			url: '../plan/plan'
		})
	},
	toProgress: function() {
		wx.navigateTo({
			url: '../progress/progress'
		})
	},
	toApply: function() {
		wx.navigateTo({
			url: '../claim/apply/apply'
		})
	},
	toMessage: function() {
		wx.navigateTo({
			url: '../message/message'
		})
	},
	toDetail: function(event) {
		var policyId = event.currentTarget.dataset.id;
		console.log("policyId:" + policyId);
		wx.navigateTo({
			url: '../detail/detail?policyId=' + policyId
		})
	}
});

function filter(list) {
	for(var i = 0; i < list.length; i++) {
		list[i].effectiveDate = util.transformTimeByDot(list[i].effectiveDate);
		list[i].expiryDate = util.transformTimeByDot(list[i].expiryDate);
		list[i].avatarUrl = judgeAvatar(list[i].holderRelation, list[i].holderSex);
		for(var j = 0; j < list[i].productList.length; j++) {
			list[i].productList[j].leftInsured = util.transformMoney(list[i].productList[j].leftInsured);
			list[i].productList[j].sumInsured = util.transformMoney(list[i].productList[j].sumInsured);
		}
	}
}

function judgeAvatar(holderRelation, holderSex) {
	if(holderRelation == "SELF") {
		return userInfo.avatarUrl
	} else if(holderRelation == "CHILDREN") {
		return "https://tongbao.zhongan.com/a00000/Project/healthV3/img/sex_children.png"
	} else if(holderSex == "M") {
		return "https://tongbao.zhongan.com/a00000/Project/healthV3/img/sex_male.png"
	} else {
		return "https://tongbao.zhongan.com/a00000/Project/healthV3/img/sex_famale.png"
	}
}