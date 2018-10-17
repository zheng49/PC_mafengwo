function ajax(url,data){
  console.log(333);
  return new Promise(function(open,err){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
        open(xhr.responseText);
      } 
    }
    if(data!==undefined){
      var arr=[];
      for(var key in data){
        arr.push(`${key}=${data[key]}`);
      }
      url+=`?${arr.join("&")}`;
    }
    xhr.open("get",url,true);
    xhr.send(null);
  })
}