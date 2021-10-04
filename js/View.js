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
    // stats
    this.backedAmount.innerHTML = Number(this.projectManager.getCurrentBacked());
    this.backedTotal.innerHTML = this.projectManager.getTotalBacked();
    this.backers.innerHTML = this.projectManager.getTotalBackers();
    this.deadline.innerHTML = this.projectManager.getDeadLine();
    // products
    this.bambooLefts.forEach(bambooLeft => {
      bambooLeft.innerHTML = this.products.getAmount(25);
    });
    this.blackLefts.forEach(blackLeft => {
      blackLeft.innerHTML = this.products.getAmount(75);
    });
    this.specialLefts.forEach(specialLeft => {
      specialLeft.innerHTML = this.products.getAmount(200);
    });
  }
}