var request = require('../common/request.js');//引入公用方法
var util = require('../common/util.js');//引入公用方法
//lm.js
//获取应用实例  
var app = getApp()
Page({
	data: {
		tabArr: {
			curHdIndex: 0
		},
		allData:{}
	},
	tabFun: function(e) {
		//获取触发事件组件的dataset属性 
		var _datasetId = e.target.dataset.id;
		console.log("----" + _datasetId + "----");
		var _obj = {};
		_obj.curHdIndex = _datasetId;
		this.setData({
			tabArr: _obj
		});
	},	
onTapToDetail:function(event) {
    var id = event.currentTarget.id;
    console.log(id);
	console.log(this.data.alldata);
    wx.navigateTo({
      url: 'lmlist/lmlist?id=' + id,
    })
  },

	onLoad: function(options) {
		console.log("------");
		var that = this;
		/*var a = {"result":[{"_id":"58e49f556b67b30da42a2290","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T07:40:05.858Z","createAt":"2017-04-05T07:40:05.858Z"},"status":"0","list":[{"_id":"58e60cc6a61ade1c605ab149","img":"","name":"建筑专业"},{"_id":"58e60ec1cde3771e4ca00e0a","img":"","name":"城市规划"},{"_id":"58ec6cb58a5df71cd099ef08","img":"","name":"电气大业"}],"name":"国家规范"},{"_id":"58e4ef986b67b30da42a2292","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T13:22:32.491Z","createAt":"2017-04-05T13:22:32.491Z"},"status":"0","list":[{"_id":"58f0553982939e1c64717c8a","img":"","name":"北京"},{"_id":"58f0554082939e1c64717c8b","img":"","name":"天津"},{"_id":"58f0554882939e1c64717c8c","img":"","name":"上海"},{"_id":"58f0554e82939e1c64717c8d","img":"","name":"广州"},{"_id":"58f0555682939e1c64717c8e","img":"","name":"深圳"}],"name":"地区规范"},{"_id":"58e4eff46b67b30da42a2293","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T13:24:04.536Z","createAt":"2017-04-05T13:24:04.536Z"},"status":"0","list":[{"_id":"58f05eba98121f146cf6a785","img":"","name":"专业书籍"}],"name":"其他资源"},{"_id":"58e4f0566b67b30da42a2294","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T13:25:42.458Z","createAt":"2017-04-05T13:25:42.458Z"},"status":"0","list":[],"name":"全额规范"},{"_id":"58e4f05f6b67b30da42a2295","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T13:25:51.868Z","createAt":"2017-04-05T13:25:51.868Z"},"status":"0","list":[{"_id":"58f05e2e98121f146cf6a781","img":"","name":"机械设备"},{"_id":"58f05e3d98121f146cf6a782","img":"","name":"土地测绘"}],"name":"行业标准"},{"_id":"58e4f06c6b67b30da42a2296","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T13:26:04.595Z","createAt":"2017-04-05T13:26:04.595Z"},"status":"0","list":[{"_id":"58f05e7098121f146cf6a783","img":"","name":"建筑师"},{"_id":"58f05e7e98121f146cf6a784","img":"","name":"造价师"}],"name":"注册考试"},{"_id":"58e4f0e26b67b30da42a2297","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T13:28:02.538Z","createAt":"2017-04-05T13:28:02.538Z"},"status":"0","list":[],"name":"哈哈规范"},{"_id":"58e4f0f16b67b30da42a2298","id":"1491378003722","__v":0,"meta":{"updateAt":"2017-04-05T13:28:17.690Z","createAt":"2017-04-05T13:28:17.690Z"},"status":"0","list":[],"name":"健身规范"}],"msg":"成功","code":0};
		var res = a.result
			that.setData({
				allData: res
			});*/
		request.request('theme/type/all', 'GET', {}, function(res) {
			console.log(res);
			that.setData({
				allData: res
			});
		});
	},
	onShow: function() {}
});