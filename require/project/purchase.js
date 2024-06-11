function purchaseProduct(){
    console.log("Function : purchaseProduct");
  
    var credits = getCredits();
    if(credits > 0){
      reserveProduct();
      return true;
    }
    return false;
  }

  