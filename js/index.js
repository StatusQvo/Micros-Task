class imageSizeAndAction{
  constructor (imageClass){
    this.Ssize = "work__image_hover";
    this.Lsize = "work__image-l_hover";
    this.class = String(imageClass);
  }

  getClassSize() {
    let lL = this.class[this.class.length-1]
    if(lL === "s"){
      return this.Ssize
    } else {
      return this.Lsize
    }
  }

}


// Start
const startFunc = ()=>{
 // DOM elements
 const workPicContainer = document.querySelector('.work-pictures');
 const blogPicContainer = document.querySelector('.blog__container');
  workSectionEvent(workPicContainer);
  blogSectionEvent(blogPicContainer);
}

startFunc()

function workSectionEvent(workPicContainer) {
  const imagesContainer = workPicContainer.querySelectorAll('.work__container-img')

  imagesContainer.forEach(imgElt => {
    imgElt.addEventListener("mouseover", (event) => {
      const { target } = event;
      EventHoverIn(imgElt,workPicContainer)
     }); 
  })

  imagesContainer.forEach(imgElt => {
    imgElt.addEventListener("mouseout", (event) => {
      const { target } = event;
      EventHoverOut(imgElt,workPicContainer)
     }); 
  })

  workPicContainer.addEventListener("mousedown", (event) => {
    const { target } = event;
    const NeededClickClass = 'work__image_click'; 
    $hoverToClickElt = workPicContainer.querySelector(`.work__image_hover`) ?? workPicContainer.querySelector(`.work__image-l_hover`) 
    if(target === $hoverToClickElt){
        $hoverToClickElt.classList.add(NeededClickClass);
      }
  })
   
  workPicContainer.addEventListener("mouseup", (event) => {
    const { target } = event;
    const NeededClickClass = 'work__image_click'; 
    $hoverToClickElt = workPicContainer.querySelector(`.work__image_hover`) ?? workPicContainer.querySelector(`.work__image-l_hover`) 
    if(target === $hoverToClickElt){
        $hoverToClickElt.classList.remove(NeededClickClass);
    }
  })
}

function EventHoverIn(imgElt,workPicContainer){
  dataID          = "" + imgElt.dataset.id

  imgClassArr  = Array.prototype.slice.call(imgElt.classList)
  ClassObj    = new imageSizeAndAction(imgClassArr[1]);
  NeededClass = ClassObj.getClassSize();
  
  $pictureDOM = workPicContainer.querySelector(`.work__container-img[data-id="${dataID}"]`)
  $pictureDOM.children[0].classList.add(NeededClass);
}

function EventHoverOut(imgElt,workPicContainer){
  dataID          = "" + imgElt.dataset.id

  imgClassArr  = Array.prototype.slice.call(imgElt.classList)
  ClassObj    = new imageSizeAndAction(imgClassArr[1]);
  NeededClass = ClassObj.getClassSize();
  
  $pictureDOM = workPicContainer.querySelector(`.work__container-img[data-id="${dataID}"]`)
  $pictureDOM.children[0].classList.remove(NeededClass);
}


function blogSectionEvent(blogPicContainer){
  const blogImagesContainer = blogPicContainer.querySelectorAll('.blog__container-img')
  const NeededClass = 'blog__image_hover';

  blogImagesContainer.forEach(imgElt => {
    imgElt.addEventListener("mouseenter", (event) => {
      const { target } = event;
      if(target === imgElt){
        target.children[0].classList.add(NeededClass);
      }
    })
  }); 

  blogImagesContainer.forEach(imgElt => {
    imgElt.addEventListener("mouseleave", (event) => {
      const { target } = event;
      if(target === imgElt){
            target.children[0].classList.remove(NeededClass);
       }
    });   
  })

  
  blogPicContainer.addEventListener("mousedown", (event) => {
    const { target } = event;
    const NeededClickClass = 'work__image_click'; 
    $hoverToClickElt = blogPicContainer.querySelector(`.blog__image_hover`) ?? workPicContainer.querySelector(`.work__image-l_hover`) 
    if(target === $hoverToClickElt){
        $hoverToClickElt.classList.add(NeededClickClass);
      }
  })
   
  blogPicContainer.addEventListener("mouseup", (event) => {
    const { target } = event;
    const NeededClickClass = 'work__image_click'; 
    $hoverToClickElt = blogPicContainer.querySelector(`.blog__image_hover`) ?? workPicContainer.querySelector(`.work__image-l_hover`) 
    if(target === $hoverToClickElt){
        $hoverToClickElt.classList.remove(NeededClickClass);
    }
  })
}




