$("document").ready(function(){
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
    order.prototype.update = function(){
        if(this.delivery === "home-delivered"){
            Total = Total + 300 ;
        }
        else 
        if(this.delivery === "personal"){
            Total = Total + 0 ;
        }
        else
        alert("Please choose your delivery")
    }
    $("#details").text("Your pizza will be ready shorty,The total price is "+Total)
}

 $(".calc").click(function(){
     event.preventDefault();
     var size= $("#size").val();
     var toppings = $(".toppings").val();
     var number = $(".number").val();
     var delivery = $(".delivery").val();
      var myOrder = new order(size,toppings,number,delivery);
      myOrder.price()
 });
})
