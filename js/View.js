// TODO refactering
export class View{
  constructor(projectManager, products){
    this.projectManager = projectManager;
    this.products = products;

    // DOMS needed to update**************
    // stats
    this.backedAmount =document.querySelector('.backed-amount');
    this.backedTotal = document.querySelector('.backed-total');
    this.backers = document.querySelector('.backers');
    this.deadline = document.querySelector('.deadline');
    // products lefts
    this.bambooLefts = document.querySelectorAll('.bamboo-left');
    this.blackLefts = document.querySelectorAll('.black-left');
    this.specialLefts = document.querySelectorAll('.special-left');

  }

  update(){
    let forbiddens = [];
    // stats
    this.backedAmount.innerHTML = Number(this.projectManager.getCurrentBacked());
    this.backedTotal.innerHTML = this.projectManager.getTotalBacked();
    this.backers.innerHTML = this.projectManager.getTotalBackers();
    this.deadline.innerHTML = this.projectManager.getDeadLine();
    // products
    this.bambooLefts.forEach(bambooLeft => {
      if(this.products.getAmount(25) != 0){
        bambooLeft.innerHTML = this.products.getAmount(25);
      }else{
        bambooLeft.innerHTML = 0;
        let modal_forbid = bambooLeft.parentNode.parentNode.parentNode.parentNode;
        forbiddens.push(modal_forbid);
      }
      
    });
    this.blackLefts.forEach(blackLeft => {
      if(this.products.getAmount(75) != 0){
        blackLeft.innerHTML = this.products.getAmount(75);
      }else{
        blackLeft.innerHTML = 0;
        let modal_forbid = blacLeft.parentNode.parentNode.parentNode.parentNode;
        forbiddens.push(modal_forbid);
      }
    });
    this.specialLefts.forEach(specialLeft => {
      if(this.products.getAmount(200) != 0){
        specialLeft.innerHTML = this.products.getAmount(200);
      }else{
        specialLeft.innerHTML = 0;
        let modal_forbid = specialLeft.parentNode.parentNode.parentNode.parentNode;
        forbiddens.push(modal_forbid);
      }
    });
    forbiddens.forEach(elem =>{
      elem.classList.add('out-of-stock');
    })
  }
}