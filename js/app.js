import {slideToggle} from './slide.js';
import Backed from './Bucked.js';

// let total backed to be $1,000.
let backedManager = new Backed(1000);

const noReward = document.getElementById('no-reward');
const pledge25 = document.getElementById("pledge-25");
const pledge75 = document.getElementById("pledge-75");
const pledge200 = document.getElementById("pledge-200");
const closeBtn = document.querySelector('.closeBtn') ;
const selectRewardBtns = document.querySelectorAll('.reward-btn');
const modal = document.querySelector('.modal-outer');
let formContainers = document.querySelectorAll('.modal__form-container');
const modalBtnIds ={
  0:noReward,
  25:pledge25,
  75:pledge75,
  200:pledge200
};
let continueBtns = document.querySelectorAll('.modal-submit-btn');
let modalThanks = document.querySelector('.modal-outer-thanks');
let successBtn = document.querySelector('.success-btn');
let progressBarContainer = document.querySelector('.stats__progress');

selectRewardBtns.forEach(selectBtn => {
  selectBtn.addEventListener('click', (e)=>{
    // e.preventDefault();
    modal.style.display = 'block';
    let pledgeAmountId = selectBtn.dataset.pledge;
  })
});

closeBtn.addEventListener('click', (e)=>{
  modal.style.display ='none';
})

for (const property in modalBtnIds){
  modalBtnIds[property].addEventListener('click', e=>{
    formContainers.forEach(formContainer => {
      if(property == formContainer.dataset.pledge){
        slideToggle(formContainer,400);
      };
    })
  });
}

continueBtns.forEach(continueBtn => {
  continueBtn.addEventListener('click', (e)=>{
    modal.style.display = 'none';
    modalThanks.style.display="block";
  })
});

successBtn.addEventListener('click', (e)=>{
  modalThanks.style.display="none";
});


let progressedBar = document.querySelector('.progressed');
backedManager.pushBacker(200);
backedManager.pushBacker(200);
backedManager.pushBacker(200);
backedManager.pushBacker(200);
rerenderProgressBar(progressBarContainer, progressedBar, backedManager);

function rerenderProgressBar(BarContainer, Bar, backedManager){
  /*
  <div class ="BarContainer">
    <div class="Bar"></div>
  </div>
  */
  let BarContainerWidth = window.getComputedStyle(BarContainer).width;
  BarContainerWidth = Number(BarContainerWidth.split('px')[0]);

  let BarWidth = Math.round(BarContainerWidth * backedManager.getPercentageAchived());
  Bar.style.width=`${BarWidth}px`;
}

