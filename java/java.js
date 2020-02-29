$("document").ready(function(){
    function order(size,toppings,number,delivery,type){
        this.size = size;
        this.toppings =toppings;
        this.number = number;
        this.delivery = delivery;
        this.type = type;
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
        $("#details").text("Your pizza will be ready shorty,The total price is "+Total);

        
    }
    
     $(".calc").click(function(){
         var type = $("#type").val()
         var size= $("#size").val();
         var toppings = $(".toppings").val();
         var number = $(".number").val();
         var delivery = $(".delivery").val();
          var myOrder = new order(size,toppings,number,delivery,type);
          myOrder.price()
     });   
})