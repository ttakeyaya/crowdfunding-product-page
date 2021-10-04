/*
Helper functions to toggle radio button's status(check or not).
*/

/**toggleTruth
 * example:
[true, true, false, true] => [false, false, true, false]
*/
export const toggleTruth = (array) => {
  return array.map(elem => {
    return elem ? false : true;
  });
}
/**clearChecked
 * example:
 [false, false, false, false] => [false, false,false, false]
 [false, true, true, false] => [false, false, false,false]
 */
export const clearChecked = (array) =>{
  return array.map(elem => {
    return elem = false;
  });
}

export const toggleBackgroundColor = (container) =>{
  if(container.style.backgroundColor != 'green'){
    container.style.backgroundColor = "black";
  }else{
    container.style.backgroundColor = "green";
  }
}