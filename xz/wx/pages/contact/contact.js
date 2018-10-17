// pages/contact/contact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  checkUname:function(e){
	  console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  //自定义函数
  radioChange:function(e){
	  console.log(e);
	  console.log("当前值选中:"+e.detail.value);
	  console.log("扩展属性:"+e.target.dataset.par);
  },
  useSubmit:function(e){
    console.log("提交....");
	console.log(e);
  var u = e.detail.value.uname;
  var p = e.detail.value.upwd;
  var a = e.detail.value.uage;
  console.log(e.detail.value);
  console.log(e.detail.value.uname);
  var reg = /^[a-z0-9_]{3,12}$/i;
  if(!reg.test(u)){
    wx.showToast({
      title:'用户名不能为空',
      icon:"none",
      duration:1500
    });
    setTimeout(()=>{
      wx.hideToast();
    },2000);
     return;
  }

   if (!reg.test(p)) {
    wx.showToast({
      title: '密码不能为空',
      icon: "loading",
      duration: 1500
    });
    setTimeout(() => {
      wx.hideToast();
    }, 2000);
    return;
  }
  var regage = /^[0-9]{1,3}$/;
   if (!regage.test(a)) {
    wx.showToast({
      title: '年龄不能为空',
      icon: "success",
      duration: 1500
    });
    setTimeout(() => {
      wx.hideToast();
    }, 2000);
    return;
  }
	  //作业1:完成学子商城用户注册:contact 表单验证
    //作业2:发送ajax请求
    wx.request({
      url: 'http://127.0.0.1:3000/addUser',
      method:"POST",
      header:{
        "Content-Type":
        "application/x-www-form-urlencoded"
      },
      data:{},
      success:function(res){
        console.log(res);
      }
    })
  }
})