
$(".dropdown-select").on("click",function(){
  let elem=$(".dropdown-list");
  if(elem.hasClass("active")==true){
    elem.removeClass("active");
  }else{
    elem.addClass("active");
  }
});

$(".dropdown-list a").on("click",function(){
  $(".dropdown-list").removeClass("active");

  let href=$(this).attr("data-href");
  let elem=$(href);
  if(elem.hasClass("active")==true){
    elem.removeClass("active");
  }else{
    elem.addClass("active");
  }
});





