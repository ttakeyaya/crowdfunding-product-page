// simple obj to manage products

export let products = 
{
  /*Initial state
  productName : amount left
  */
  bamboo : 110,
  black :70,
  special:2,
  
  remove : function(productName, amount=1){
    if(this[productName]<= 0){
      throw new Error('Out of stock')
    }
    this[productName] -= amount;
  },
  getAmout: function(productName){
    return this[productName];
  }
  
}