$(function(){
    $(".btn-login").click(function(){
      var uname=$(".login-uname").val();
      var upwd=$(".login-upwd").val();
      $.ajax({
        url:"http://127.0.0.1:3000/user/signin",
        type:"post",
        data:{uname,upwd},
        dataType:"json",
        success:function(data){
          if(data.ok==0) alert(data.msg);
          else{
            alert("登录成功,自动返回上一页!");
            if(location.search.indexOf("back=")!=-1){
              var back=location.search.slice(6);
              location.href=back;
            }else{
              location.href="http://127.0.0.1:3000/index.html"
            }
          }
        }
      })
    })
  })