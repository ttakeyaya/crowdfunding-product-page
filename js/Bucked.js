// simple bucked manager class
class Backed{
  constructor(totalBacked=100000, deadLine=60){
    this._totalBacked = totalBacked;
    this._currentBacked = 0;
    this._deadLine = deadLine;
    this._backers = 0;
  }
  pushBacker(backAmount){
    this._backers += 1;
    this._currentBacked += backAmount;
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

export default Backed;