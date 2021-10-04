// simple class to manage a crowdfund project

class Project{
  constructor(totalBacked=1000, deadLine=60){
    this._totalBacked = totalBacked;
    this._currentBacked = 0;
    this._deadLine = deadLine;
    this._backers = 0;
  }
  pushBacker(backAmount){
    let userInput = Number(backAmount);
    if(userInput == 0) return true;
    this._backers += 1;
    this._currentBacked += userInput;
  }
  getPercentageAchived(){
    return (this._currentBacked / this._totalBacked);
  }
  getTotalBacked(){
    return this._totalBacked;
  }
  getDeadLine(){
    return this._deadLine;
  }
}

export default Project;