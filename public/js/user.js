$(function(){
    $.ajax({
      url:"http://127.0.0.1:3000/index.html",
      type:"get"
    })
.then(res=>{
    function isLogin(){
        $.ajax({
          url:"http://127.0.0.1:3000/user/islogin",
          type:"get",
          dataType:"json",
          success:function(data){
            if(data.ok==0){
              $("#signout").show().next().hide();
            }else{
              $("#signout").hide().next().show();
              $("#uname").html(data.uname);
              $("#upic").css('backgroundImage',`url('${data.avatar}')`);
            }
          }
        })
      }
      isLogin();
      $("#btnSignout").click(function(e){
        e.preventDefault();
        $.ajax({
          url:"http://127.0.0.1:3000/user/signout",
          type:"get",
          success:isLogin
        })
      })
      $("#btnLogin").click(function(e){
        e.preventDefault();
        location.href=
          "http://127.0.0.1:3000/login.html?back="+location.href;
      })
    });
  })