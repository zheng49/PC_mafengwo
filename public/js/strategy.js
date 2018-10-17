$(function(){
    $.ajax({
      url:"http://127.0.0.1:3000/strategy",
      type:"get",
      dataType:"json" 
    })
    .then(strategy=>{
      
      var first = '';
      var html ='';
      for (var i = 0; i <= 2; i++) {
        if(i==0){
            var a='active';
        }else{
            var a="";
        }
        // for(var j =0;j<=2;j++){
        //     var n = (i*6)+j;
        // title = strategy[i].title;
        // detail = strategy[i].detail;
        // acount = strategy[i].agree_count;
        // ccount = strategy[i].comment_count;
        // city = strategy[i].city;
        // bcount = strategy[i].browse;
        type = strategy[i].type;
        pic1 = strategy[i].show_pic1;
        pic2 = strategy[i].show_pic2;
        pic3 = strategy[i].show_pic3;
        if(type==1){
            type = '自由行攻略';
        }else{
            type='游记';
        }
        html+=`<li>
        <a href="#">
            <p>
                <span><i></i>来自<span>${type}</span></span>
                <span><span>${strategy[i].experience}</span>蜂蜂体验过<i></i></span>
            </p>
            <p>${strategy[i].title}</p>
            <p>${strategy[i].detail}</p>
            <p>
                <img src="http://${pic1}" alt=""/>
                <img src="http://${pic2}" alt=""/>
                <img src="http://${pic3}" alt=""/>
                <span>${strategy[i].browse}浏览</span>
            </p>
        </a>
    </li>`
    // }
  }
      first=document.querySelector(`#strategy_list>ul:first-child`);
      first.innerHTML = html;


      html='';
      first='';
      for (var i = 3; i <= 5; i++) {
        // if(i==0){
        //     var a='active';
        // }else{
        //     var a="";
        // }
        // for(var j =0;j<=2;j++){
        //     var n = (i*6)+j;
        // title = strategy[i].title;
        // detail = strategy[i].detail;
        // acount = strategy[i].agree_count;
        // ccount = strategy[i].comment_count;
        // city = strategy[i].city;
        // bcount = strategy[i].browse;
        type = strategy[i].type;
        pic1 = strategy[i].show_pic1;
        pic2 = strategy[i].show_pic2;
        pic3 = strategy[i].show_pic3;
        if(type==1){
            type = '自由行攻略';
        }else{
            type='游记';
        }
        html+=`
        <li>
            <a href="#" class="clearfix">
                <p>
                    <span><i></i>来自<span>${type}</span></span>
                    <span><span>${strategy[i].agree_count}</span>蜂蜂顶<i></i></span>
                </p>
                <p>${strategy[i].title}</p>
                <img src="http://${pic1}" alt="" class="float-left"/>
                <p>
                    <span>${strategy[i].detail}
                    </span>
                </p>
                <p>
                    <i style="background:url('http://${pic2}');background-size:100% 100%"></i>
                    <span>${strategy[i].uname}</span>
                    <span>${strategy[i].browse}浏览，&nbsp;${strategy[i].comment_count}评论</span>
                </p>
            </a>
        </li>`
    // }
  }

  first=document.querySelector(`#strategy_list>ul:nth-child(2)`);
  first.innerHTML = html;
  console.log(first)
    });
  });