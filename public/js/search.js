$(function(){
    if(location.search.indexOf("key=")!=-1){
        var key=decodeURI(
          location.search.split("=")[1]
        );
    $.ajax({
      url:"http://127.0.0.1:3000/search",
      type:"get",
      data:{key},
      dataType:"json" 
    })
    .then(search=>{
    var first = '';
    var html =`<span class="result-count">相关结果共有${search.length}条</span>`;
    var page = Math.ceil(search.length/5);
    console.log(page)
    var time =new Array;
    for (var i = 0; i < search.length; i++) {




        var date ='';
        time = `${search[i].date.split('T')}`;
        for(var n= 0;n<=9;n++){
            date +=time[n]
        }
        html+=`
        <li class="d-block"><a href="#" class="d-block">
            <span class="user-pic" style="background-image:url('http://${search[i].show_pic1}')"></span>
            <div>
            <p class="result-title">${search[i].title}</p>
            <p class="result-detail">${search[i].detail}</p>
            <p><span class="city">${search[i].city}</span>
            <span class="user-img" style="background-image:url('http://${search[i].show_pic2}')"></span>
            <span class="user-name">${search[i].uname}</span>
            <span class="browse-count"><b>${search[i].browse}</b>浏览</span>
            <span class="pub-time">${date}</span><p>
            </div>
        </a></li>`;
    }
    
    first =document.querySelector(`#search-list`);
    first.innerHTML=html;
    html='';
// for(var i=1;i<=page;i++){
//     if(i==1){
        
//     html+=`<li class="page-item" data-toggle="tab"><a class="page-link bg-transparent" href="#" id="${i}">${i}</a></li>`;
//     }else{
//     html += `<li class="page-item"><a class="page-link bg-transparent" href="#" id="${i}">${i}</a></li>
//     `;
//     }
// }
//     var insert = document.querySelector("nav>ul.pagination");
//     insert.innerHTML = html;
//     var btn = document.querySelector(".active");


// var num = btn.id;
// console.log(num);
//     btn.onclick = function(){
//         html ='';
//         for (var i = num*5-4; i <=5*num; i++) {
//             html+=`
//             <li class="d-block"><a href="#" class="d-block">
//                 <p class="result-title">${search[i].title}</p>
//                 <p class="result-detail"></p>
//                 <span class="user-pic"></span>
//                 <span class="user-name"></span>
//                 <span class="result-count"></span>
//                 <span class="agree-count"></span>
//             </a></li>`;
//         }
//         first.innerHTML=html; 
//     }
    });
    
    }
  });