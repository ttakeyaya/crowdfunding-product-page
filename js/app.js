import {slideToggle} from './helpers/slide.js';
import Project from './Project.js';
import {rerenderProgressBar} from './ProgressBar.js';
import {products} from './Product.js';
import {View} from './View.js';


// Initialize the Project Obj
let ProjectManager = new Project();
// console.log(ProjectManager.getCurrentBacked());
// Initialize the view;
let view = new View(ProjectManager, products);
view.update();

// DOMs:first modal
const noReward = document.getElementById('no-reward');
const pledge25 = document.getElementById("pledge-25");
const pledge75 = document.getElementById("pledge-75");
const pledge200 = document.getElementById("pledge-200");
const closeBtn = document.querySelector('.closeBtn') ;
const modal = document.querySelector('.modal-outer');
let formContainers = document.querySelectorAll('.modal__form-container');
let continueBtns = document.querySelectorAll('.modal-submit-btn');


//DOMS:second modal(Thank you page).
let modalThanks = document.querySelector('.modal-outer-thanks');
let successBtn = document.querySelector('.success-btn');

// DOMs: top page's select product button
const selectRewardBtns = document.querySelectorAll('.reward-btn');

// 
const modalBtnIds ={
  0:noReward,
  25:pledge25,
  75:pledge75,
  200:pledge200
};


// clicks "Select Reward" button, show the first modal
selectRewardBtns.forEach(selectBtn => {
  selectBtn.addEventListener('click', (e)=>{
  // show the first modal
  modal.style.display = 'block';
  // 
  document.body.classList.toggle('hide-scroll-bar');
  header.classList.toggle('forbid-click');
  main.classList.toggle('forbid-click');
  // let clickedPledgeId = selectBtn.dataset.pledge;
  });
});
// *********************************************

// close first modal**********************
closeBtn.addEventListener('click', (e)=>{
  modal.style.display ='none';
});
// ***************************************

// check radio button on the first modal***************
let modalOpens = {
  0:false,
  25:false,
  75:false,
  200:false,
};
for (const property in modalBtnIds){
  modalBtnIds[property].addEventListener('click', e=>{
    formContainers.forEach(formContainer => {
      if(property == formContainer.dataset.pledge && !modalOpens[property]){
        modalOpens[property] = !modalOpens[property];
        slideToggle(formContainer,400);
      };
    })
  });
}
// ***********************

// Click 'continue' button on the first modal **********
continueBtns.forEach(continueBtn => {
  // console.log(continueBtn);
  continueBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let amountBacked = continueBtn.closest('.modal__form').amount.value;
    // increse the current amount 
    ProjectManager.pushBacker(amountBacked);
    
    // find the productId and update the view
    let productId = continueBtn.closest('.modal__form-container').dataset.pledge;
    if(productId !== 0){
      products.remove(productId);
    }
    view.update(products);

    rerenderProgressBar(progressBarContainer, progressedBar, ProjectManager);


    modal.style.display = 'none';
    modalThanks.style.display="block";
  })
});
// *****************************************

// click the btn on the second modal*********
successBtn.addEventListener('click', (e)=>{
  modalThanks.style.display="none";
  document.body.classList.toggle('hide-scroll-bar');
  header.classList.toggle('forbid-click');
  main.classList.toggle('forbid-click');
});
// ******************************

// ***********************
// ProgressBar
let progressBarContainer = document.querySelector('.stats__progress');
let progressedBar = document.querySelector('.progressed');
window.onresize=()=>{
  rerenderProgressBar(progressBarContainer, progressedBar, ProjectManager);
}
rerenderProgressBar(progressBarContainer, progressedBar, ProjectManager);
//************************** 

// click navigation button(for small screen)*********
let navBtn = document.querySelector('#navBtn');
let navImg = navBtn.children[0];
navBtn.addEventListener('click', e => {
  navImg.src="../images/icon-close-menu.svg";
  let isOpen = document.querySelector('.nav').classList.toggle('open');
  if(isOpen){
    navImg.src="../images/icon-close-menu.svg";
  }else{
    navImg.src="../images/icon-hamburger.svg";
  }
});
// ***********************************

// toggle bookmark image*******************
let bookMark = document.querySelector('.bookmark');
let bookmarkText = document.querySelector('.bookmark-text');
bookMark.addEventListener('click', (e) =>{
  let bookMarkPath = "/images/icon-bookmark.svg";
  let bookMarkCyanPath= "/images/icon-bookmark-cyan.svg";
  const fullPath = e.target.src;

  const origin = new URL(fullPath).origin;
  const bookMarkFullPath = origin + bookMarkPath;
  const bookMarkCyanFullPath = origin + bookMarkCyanPath;
  
  if(fullPath === bookMarkFullPath){
    e.target.src = bookMarkCyanFullPath;
    bookmarkText.style.color="#147A73";
    bookmarkText.innerHTML = "Bookmarked";
  }else{
    e.target.src = bookMarkFullPath;
    bookmarkText.style.color="#7a7a7a";
    bookmarkText.innerHTML ="Bookmark"
  }
});
// ***********************************************