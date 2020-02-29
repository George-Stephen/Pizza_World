$("document").ready(function(){
 $(".Neo").click(function(){
     $(".1").slideToggle();
 })
 $(".sic").click(function(){
    $(".2").slideToggle();
})
$(".det").click(function(){
    $(".3").slideToggle();
}) 
$(".chic").click(function(){
    $(".4").slideToggle();
})
$(".greek").click(function(){
    $(".5").slideToggle();
})
$(".louis").click(function(){
    $(".6").slideToggle();
})
$(".Nyc").click(function(){
    $(".7").slideToggle();
})
$(".cali").click(function(){
    $(".8").slideToggle();
})
function order(size,toppings,number,delivery){
    this.size = size;
    this.toppings =toppings;
    this.number = number;
    this.delivery = delivery;
}
order.prototype.price = function(){
    let price =0;
    let Total =0;
    if (this.size === "Large"){
     price =1100;
     Total = price + 300;
      if(this.delivery ===  "Home-delivered"){ 
          Total= Total + 300
      } 
      else 
      Total = Total + 0
    }
    else if (this.size === "Medium"){
        price = 800;
        Total = price + 300;
        if(this.delivery ===  "Home-delivered"){ 
            Total= Total + 300
        } 
        else 
        Total = Total + 0
    }
    else if(this.size ==="small"){
        price=500
        Total = price + 300;
        if(this.delivery ===  "Home-delivered"){ 
            Total= Total + 300
        } 
        else 
        Total = Total + 0
    }
    else alert("Enter your sizes ")
}
})
