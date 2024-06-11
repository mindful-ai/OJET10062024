require.config({
  baseUrl: "./scripts", 
  paths: { c2:"./credit2",
           cdn4jquery: "https://code.jquery.com/jquery-3.6.0.min.js"}
})


define(["c2","./product2", "cdn4jquery"], function(credits,products, $) {

    console.log("Function : purchaseProduct");
    return {
        
        purchaseProduct: function() {
              
                var credit = credits.getCredits();
                this.incrpoints();
                if(credit > 0){
                  products.reserveProduct();
                  return true;
        };
        return false;
      },
      
      newfunc: function(){
        
      }
    }
  });