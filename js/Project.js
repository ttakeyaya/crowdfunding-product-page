// simple class to manage a crowdfund project

class Project{
  constructor(totalBacked=1000, deadLine=60){
    this.totalBacked = totalBacked;
    this.currentBacked = 0;
    this.deadLine = deadLine;
    this.backers = 0;
  }
  pushBacker(backAmount){
    let userInput = Number(backAmount);
    if(userInput == 0) return true;
    this.backers += 1;
    this.currentBacked += userInput;
  }
  getPercentageAchived(){
    return (this.currentBacked / this.totalBacked);
  }
  getCurrentBacked(){
    return this.currentBacked;
  }
  getTotalBacked(){
    return this.totalBacked;
  }
  getTotalBackers(){
    return this.backers;
  }
  getDeadLine(){
    return this.deadLine;
  }
}

export default Project;