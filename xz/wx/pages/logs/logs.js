
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rows:[],   //图片轮播列表
	datas:[]   //九宫格列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.uid = 9;
    //功能一:图片列表
    wx.request({
	   url:"http://127.0.0.1:3000/getImageList",
	   success:(res)=>{
	    console.log(res.data);
		this.setData({
		  rows:res.data
		});
	   }
	}); 
	//功能二:九宫格图片列表
	wx.request({
	  url:"http://127.0.0.1:3000/getIndexList2",
      success:(res)=>{
	      this.setData({
		    datas:res.data
		  });
	  }
	});
    
    //console.log("获取content组件参数");
	//console.log(options);
    //console.log("A2:首页--监听页面加载-onload-1");
	//我们需从网上请求过来一些事件,显示小程序上
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("B1:首页--监听页面初始渲染完成-onReady-3");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("C2:首页监听页面显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("D2:首页页面隐藏"); 
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
     console.log("E2:监听页面卸载");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  jumpShopList:function(e){
    console.log("九宫格跳转");
	//console.log(e.target.dataset.tid);
    var tid = e.target.dataset.tid;
    wx.reLaunch({
	   url:"../shopList/shopList?tid="+tid
	});
  }
})