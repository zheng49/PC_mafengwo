$(function(){
    $.ajax({
      url:"http://127.0.0.1:3000/hotel",
      type:"get",
      dataType:"json" 
    })
    .then(hotelinfo=>{
      var first = '';
    //   var title1='';
    //   var title2='';
    //   var url ='';
    var html ='';
    for (var i = 0; i <= 5; i++) {
        if(i==0){
            var a='active';
        }else{
            var a="";
        }
        html += ` <div class=" tab-pane ${a}" id="item${i+1}">
        <ul class="d-flex justify-content-around list-unstyled row">`;
        for(var j =0;j<=5;j++){
            var n = (i*6)+j;
        title1 = hotelinfo[n].title1;
        title2 = hotelinfo[n].title2;
        html+=`
    		<li class="col-md-4">
             <div class="hotel-info tilt_front" style="background-image:url('${hotelinfo[n].h_image}')">
              <span></span><span></span><span></span>
              <div class="hotel-price">${hotelinfo[n].title1}<span
              >${hotelinfo[n].title2}</span></div>
             </div>
            </li>`
    }
		html+=`</ul>
          </div>`;
  }
      first=document.querySelector(
        `#style-hotel`);
      first.innerHTML=html;
      // for(var i=1;i<7;i++){
      //     for(var j=1;j<7;j++){
      //       var change = document.querySelector(`item${i}>ul>li:nth-child(${j})`);
      //     }
      // }

    html ='';
    for (var i = 7; i <= 12; i++) {
        if(i==7){
            var a='active';
        }else{
            var a="";
        }
        html += ` <div class=" tab-pane ${a}" id="item${i}">
        <ul class="d-flex justify-content-around list-unstyled row">`;
        for(var j =0;j<8;j++){
            var n = (i*8)+j-20;
            console.log(n);
        score = hotelinfo[n].score;
        title1 = hotelinfo[n].title1;
        title2 = hotelinfo[n].title2;
        html+=` <li class="col-md-3">
        <div class="hotel-info" style="background-image:url('${hotelinfo[n].h_image}')">
            <div class="hotel-price"><span>${score}分</span><span>${title1}</span><span>${title2}</span></div></div>
    </li>`
    }
		html+=`</ul>
          </div>`;
  }
  console.log(first);
    first =document.querySelector(`#discount-hotel`);
    first.innerHTML=html;
    console.log(first);
    // for(var i=7;i<13;i++){
    //     for(var j=1;j<7;j++){
    //       var change = document.querySelector(`item${i}>ul>li:nth-child(${j})>div.hotel-info`);
    //     }
    // }
    });
  });