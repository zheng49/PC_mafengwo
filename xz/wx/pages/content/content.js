// pages/content/content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     message:"学子商城",
     uname:"dongdong",
     view:"app",
     rows:[1,3,5,7,9,11],
     list:[
		 {id:1,name:"苹果9"},
		 {id:2,name:"苹果8"},
		 {id:3,name:"苹果7"}
	 ],
     datas:[],
	 sliderList:[]   //图片轮播数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
   //14:29
  onLoad: function (options) {
     wx.request({
	   url:"http://127.0.0.1:3000/getImageList",
       success:(res)=>{
	      //console.log(1);
		  //console.log(res.data);
		  //获取服务器数据保存在指定属性中
		  //this.setData();
		  //(res)=>保存this
		  this.setData({
		    sliderList:res.data
		  })

	   },
       fail:(mes)=>{
	     console.log("2:"+mes)
	   }
	 });





    wx.request({
      url: 'http://127.0.0.1:3000/getList',//请求地址
      data:{id:1},   //请求参数
	  method:"GET",  //请求方式
	  dataType:"json",//返回数据类型
      success:(res)=>{         //成功请求
		  console.log(1);      //回调函数
		  //console.log(res);  //200
		  //console.log(res.data);
		  //微信不能使用方法 赋值
          //this.datas = res.data;
		  this.setData({
		    datas:res.data
		  });
	  },
      fail:function(res){
	      console.log(2);
		  console.log(res);
	  },
      complete:function(res){
	      console.log(3);
	  }

    })


	 //jquery  
     //$.ajax({
     //  type:"GET",
	 //  url:"/list",
     //  data:{},
     //  dataType:"json",
     //  success:function(res){},
     //  error:function(){}
	 //});
     


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
  fatherTapHandle:function(e){
    //页面按下某个元素事件处理函数
	//在xml文件调用函数不允许传递参数
	//<view bindtap="fatherTapHandle(123)" err
	console.log("a:点击父元素");
	//console.log(e);
	console.log("参数"+e.target.dataset.age);
  },
  sonTapHandle:function(e){
	 //区分二个不同组件
     console.log("b:点击子元素");
	 console.log("第几个子元素:"+e.target.dataset.index);
  },
  jump1:function(e){
     wx.switchTab({
	    url:"/pages/logs/logs"
	 })
  }
})