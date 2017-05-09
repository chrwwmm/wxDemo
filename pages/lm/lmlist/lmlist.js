var request = require('../../common/request.js');//引入公用方法
var util = require('../../common/util.js');//引入公用方法
var app = getApp();  
Page({  
  data:{ 
    allData:{}
  },
	onTapToItem:function(event) {
    var id = event.currentTarget.id;
    console.log(id);
	console.log(this.data.alldata);
    wx.navigateTo({
      url: 'lmitem/lmitem?id=' + id,
    })
  },
  onLoad: function(options) {
    var that = this;
		request.request('norm/type/all', 'GET', {}, function(res) {
			console.log(res);
			that.setData({
				allData: res
			});
		});
	}
})  