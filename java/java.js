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
 //*Business logic*//
 function person (names,phone,location,Email){
    this.names=names;
    this.phone=phone;
    this.location=location;
    this.Email=Email;
}
  function order (size,toppings,crust,number,delivery){
     this.size=size;
     this.toppings=toppings;
     this.crust=crust;
     this.number=number;
     this.delivery=delivery;
 }
//*User logic*//
var names =$(".name").val();
var phone=$(".phone").val();
var location=$(".location").val();
var email =$(".Email").val();
var topping_price=300;
var User = new person(names,phone,location,email);


var size = $(".size").val();
var toppings =$(".toppings").val();
var crust = $(".crust").val();
var number =$(".number").val();
var delivery=$(".delivery").val();
var Myorder = new order(size,toppings,crust,number,delivery);
let price = 0;
let Total =0;
let Balance =0;
 
  $(".calc").click(function(){
switch(size){
    case size="Large":
        price=1100;
        alert(price)
        Total = price + 300;
        alert(Total)
        Balance= Total * 7;
          alert(Balance)
        break
     case  size="Medium":
         price=800;
         alert(price)
    Total = price + 300;
    alert(Total)
    Balance= Total * 7;
    alert(Balance)
         break
     case size="small":
         price = 500;
         alert(price)
    Total = price + 300;
    alert(Total)
    Balance= Total * 7;
    alert(Balance);
    break
    default:
        alert("Make your order correctly")
}
  });
})