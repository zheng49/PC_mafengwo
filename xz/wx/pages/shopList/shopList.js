// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     shopList:[],   //数据
     pageIndex:0,   //下标
     pageSize:8,    //页大小
	 hasMore:true,  //用于记录是否还有更多数据
	 tid:0          //当前类别id
  },
  loadMore:function(tid){
      //如果没有更多数据，就直接返回
	  if(!this.data.hasMore)return;

	  wx.request({
	    url:"http://127.0.0.1:3000/shopList",
        data:{
			 pageSize:this.data.pageSize,
			 pno:++this.data.pageIndex,
             tid:tid
			},
        success:(res)=>{
		  //console.log(res)  11:59
		  //解决问题:追加数据
		 var newList =  this.data.shopList
			 .concat(res.data.msg);

		  //判断条件，判断是否还有更多数据
		  var pageCount = res.data.pageCount;
		  //pageIndex 1 2 3 true 4 false
		  var flag = this.data.pageIndex <
			  pageCount;
		  this.setData({
			  shopList:newList,
              hasMore:flag
		  });
		}
	  });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);//shopList.js
	//获取当前商品类别参数 tid
	var tid = options.tid;
	this.setData({
	   tid:tid
	})
    this.loadMore(tid);  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   * 17:43
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 完成此操作需要修改配置文件
   * 当前组件配置项中添加值
   * {"enablePullDownRefresh":true}
   */
  onPullDownRefresh: function () {
    console.log("下拉事件");
	//显示第一页数据,清空原有数据 15:16
	this.setData({
	   shopList:[],
	   pageIndex:0,
	   hasMore:true
	});
    var tid = this.data.tid;
    this.loadMore(tid);
	//停止当前操作,手机端一直存在
	wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     //console.log("上拉触底");
	 var tid = this.data.tid;
	 this.loadMore(tid);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  showDetail:function(e){
    var tid = e.target.dataset.tid;
    console.log(tid);
    wx.reLaunch({
      url: '../detail/detail?tid='+tid,
    })
  }
})