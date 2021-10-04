export function rerenderProgressBar(BarContainer, Bar, ProjectManager){
  /*
  <div class ="BarContainer">
    <div class="Bar"></div>
  </div>
  */
  let BarContainerWidth = window.getComputedStyle(BarContainer).width;
  BarContainerWidth = Number(BarContainerWidth.split('px')[0]);
  let BarWidth = 0;
  if(ProjectManager.getPercentageAchived() >= 1){
    BarWidth = BarContainerWidth;
  }else{
    BarWidth = Math.round(BarContainerWidth * ProjectManager.getPercentageAchived());
  }

  Bar.style.width=`${BarWidth}px`;
}