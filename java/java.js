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
     Total = Total * this.number;
    }
    else if (this.size === "Medium"){
        price = 800;
        Total = price + 300;
        Total =Total * this.number;
    }
    else if(this.size ==="small"){
        price=500
        Total = price + 300;
        Total = Total * this.number;
    }
    else alert("Enter your sizes ")
    $("#details").text("Your pizza will be ready shorty,The total price is "+Total)
    order.prototype.update = function(){
        if(this.delivery === "home-delivered"){
            Total = Total + 300 ;
        }
        else if(this.delivery === "personal"){
            Total = Total + 0 ;
        }
    }
}
 $("#price_show").click(function(){
     var size= $("#size").val();
     var toppings = $(".toppings").val();
     var number = $(".number").val();
     var delivery = $(".delivery").val();
      var myOrder = new order(size,toppings,number,delivery);
      myOrder.price()
 });
 $("#update").click(function(){
    myOrder.update()
 })
})
