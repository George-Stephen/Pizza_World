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
 function calculate(){
     //*Business logic*//
     var person = function(names,number,location,Email){
        this.names=names;
        this.number=number;
        this.location=location;
        this.Email=Email;
    }
     var order = function(size,toppings,crust,number){
         this.size=size;
         this.toppings=toppings;
         this.crust=crust;
         this.number=number;
     }



 }
});