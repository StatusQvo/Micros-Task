class imageSizeAndAction{
  constructor (classElt){
    this.classElttoAdd = this.getClassSize(classElt);
  }

  getClassSize(classElt) {
     
    let lL = classElt[classElt.length-1]
   
    if(lL === "s"){
      return "work__image_hover"
    } else {
      return "work__image-l_hover"
    }
  }

}


// Start
const startFunc = ()=>{
 // DOM elements
 const workPicContainer = document.querySelector('.work-pictures');
 workPicContainer.addEventListener("mouseover", (event) => {
 workSectionEvent(workPicContainer,event);
});
 workPicContainer.addEventListener("mouseout", (event) => {
 workSectionEventOut(workPicContainer,event);
});

}

function deleteClass(workPicContainer,dataID) {
  
  $pictureDOM = workPicContainer.querySelector(`.work__container-img[data-id="${dataID}"]`)
  $pictureDOMSub = $pictureDOM.children[0].classList

  if($pictureDOMSub.length){
      let classListArr = Array.prototype.slice.call($pictureDOMSub);
      $pictureDOM.children[0].classList.remove(...classListArr )
  }
} 



function workSectionEvent(workPicContainer,event) {
  const { target } = event;
  let classNeedAdd = null;
  let dataID = null;
   
if (target.children.length){
  
   
   ClassArr = Array.prototype.slice.call(target.classList)
  
    if(ClassArr.includes('work__container-img')){
       classInDivArr = Array.prototype.slice(target.children.classList);
      
      dataID = "" + target.dataset.id
      classObj = new imageSizeAndAction(ClassArr[1]);
      classNeedAdd = classObj.classElttoAdd;
      
     
      $pictureDOM = workPicContainer.querySelector(`.work__container-img[data-id="${dataID}"]`)
      $pictureDOMSub = $pictureDOM.children[0].classList.add(classNeedAdd);
      
      event.stopPropogation();
    } 
      
   //target.children[0].classList.add(classNeedAdd)
   //$pictureDOMSub.removeEventListener();
  } else {

  }
 }


function workSectionEventOut(workPicContainer,event) {
  const { target } = event;
  let classNeedAdd = null;
  let dataID = null;
   
  
  if (target.classList.length){
  
    let ClassArr = Array.prototype.slice.call(target.classList)
  
    if(ClassArr.includes('work__container-img')){
        // find data-id
        dataID = "" + target.dataset.id
        deleteClass(workPicContainer,dataID)
    }
  }
}

startFunc()