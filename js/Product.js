// simple obj to manage products

export let products = 
{
  /*Initial state
  productID : {productName, amount left}
  */
  25 :{
    "productName":"bamboo",
    "left":110
  } ,
  75 :{
    "productName":"black",
    "left":70,
  },
  200:{
    "productName":"special",
    "left":2
  },
  
  remove : function(Id, amount=1){
    if(Id == 0 ) return ;
    if(this[Id].left<= 0){
      throw new Error('Out of stock')
    }
    this[Id].left -= amount;
  },
  getAmount: function(Id){
    return this[Id].left;
  } 
}