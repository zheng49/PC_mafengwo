// pages/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:1,
    rows:[],
    shopInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.uid);
    app.globalData.uid = 1001;
     console.log("jies参数")
     console.log(options.tid)
     var tid = options.tid;
     console.log(app.globalData.uid);

     wx.request({
       url: 'http://127.0.0.1:3000/getImageList',
       success:(res)=>{
         this.setData({
           rows:res.data
         })
         wx.request({
           url: 'http://127.0.0.1:3000/shopInfo',
           data:{tid:tid},
           success:(res)=>{
             this.setData({
               shopInfo:res.data
             })
           }
         })
       }
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
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
  nextNum: function () {
    var num = this.data.number - 1;
    if (num < 1) {
      num = 1;
    }
    this.setData({
      number: num
    });
  },
  prevNum:function(){
    var num = this.data.number + 1;
    if(num>99){
      num=99;
    }
    this.setData({
      number:num
    });
    console.log("+");
  }
})