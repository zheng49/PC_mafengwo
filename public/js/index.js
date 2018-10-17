$(function(){
    $.ajax({
      url:"http://127.0.0.1:3000/strategy",
      type:"get",
      dataType:"json" 
    })
    .then(index=>{
      var first = '';
      var html ='';
      var title = index[0].title;
      for (var i = 6; i < 16; i++) {
          html+=`<li><a href="#" class="block">
          <span class="index-group-img float-left" style="background:url('http://${index[i].show_pic1}')"></span>
          <span class="index-title">${index[i].title}</span>
          <span class="news-font1">${index[i].detail}</span>
          <p class="only-p">
              <span class="position-icon"></span>
              <a href="#" class="font-place">${index[i].city}
                  <span class="place">，by</span></a>
              <a href="" class="username-block">
                  <span style="background:url('http://${index[i].show_pic1}');background-size:100% 100%"></span><span class="font-username" >${index[i].uname}</span></a>
              <span class="eye-icon"></span>
              <span class="font-count1">${index[i].browse}/${index[i].comment_count}</span>
              <span class="agree-icon"></span>
              <span class="font-count2">${index[i].agree_count}</span>
          </p>
      </a></li>`;
  }

  first=document.querySelector(`.index-group>ul`);
  first.innerHTML = html;
    });
  });