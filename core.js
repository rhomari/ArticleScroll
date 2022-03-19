const parentdiv= document.querySelector(".parent")
const imagesList = [
    {image:"images/6.png", left : 600, width : 300, height : 500, top : 5 ,blur : 0, zindex : -1, visible : 0},
    {image:"images/1.png", left : 520, width : 300, height : 500, top : 10, blur : 0, zindex : 999, visible : 1},
    {image:"images/2.png", left : 370, width : 280, height : 400, top : 20, blur : 3 , zindex : 998, visible : 1},
    {image:"images/3.png", left : 220, width : 250, height : 300,top : 30, blur : 5, zindex : 997, visible : 1},
    {image:"images/4.png", left : 120, width : 220, height : 200, top : 40,blur : 7, zindex : 996, visible : 1},
    {image:"images/5.png", left : 30, width : 190, height : 100, top : 50, blur :10, zindex : 995, visible : 1},
 ]
window.onload = ()=>{
    console.log("loaded")
   
   
    
    imagesList.forEach((e,i)=>{
        let newimg= document.createElement('img')
        newimg.className ='newimg'
        newimg.style.width = e.width + 'px'
        newimg.style.height = e.height + 'px'
        newimg.style.borderStyle = 'solid 1px'
        newimg.style.position = 'absolute'
        newimg.style.left = e.left + 'px'
        newimg.style.top = e.top+ 'px'
        newimg.style.zIndex = e.zindex
        newimg.style.opacity = e.visible
        newimg.style.transform = 'rotate3d(0, 1, 0, 3.142rad)'
        newimg.style.filter = `blur(${e.blur}px)`
        newimg.setAttribute('currentposition', i)
        newimg.setAttribute('draggable', 'false')
        newimg.src= e.image
        parentdiv.appendChild(newimg)
        
      
      
    })
   

}

function moveRight(index){
    const imgs=parentdiv.querySelectorAll(".newimg")
   

    let currentposition = parseInt(imgs[index].getAttribute("currentposition"))
    
    if (currentposition == 0) {
        currentposition = imgs.length
        imgs[index].style.transitionDuration = '0s'
    }
    else{
        imgs[index].style.transitionDuration = '1.5s'
    }
    imgs[index].style.opacity= imagesList[currentposition - 1].visible
    imgs[index].style.left = imagesList[currentposition - 1].left  + 'px'
    imgs[index].style.width= imagesList[currentposition-1].width + 'px'
    imgs[index].style.height= imagesList[currentposition -1].height + 'px'
    imgs[index].style.top= imagesList[currentposition- 1].top + 'px'
    imgs[index].style.zIndex =imagesList[currentposition-1].zindex
    imgs[index].style.filter = `blur(${imagesList[currentposition -1].blur}px)`
    imgs[index].setAttribute('currentposition', currentposition- 1)
    
  
   
     
    
}

function moveLeft(index){
   
    const imgs=parentdiv.querySelectorAll(".newimg")
 
     let currentposition = parseInt(imgs[index].getAttribute("currentposition"))
     
     if (currentposition == imgs.length -1) {
         currentposition = -1
         imgs[index].style.transitionDuration = '0s'
     }
     else{
         imgs[index].style.transitionDuration = '1s'
     }
     
     imgs[index].style.left = imagesList[currentposition + 1].left  + 'px'
     imgs[index].style.width= imagesList[currentposition+1].width + 'px'
     imgs[index].style.height= imagesList[currentposition +1].height + 'px'
     imgs[index].style.top= imagesList[currentposition+ 1].top + 'px'
     imgs[index].style.zIndex =imagesList[currentposition+1].zindex
     imgs[index].style.filter = `blur(${imagesList[currentposition +1].blur}px)`
     imgs[index].style.opacity = imagesList[currentposition + 1].visible
     imgs[index].setAttribute('currentposition', currentposition+ 1)
     
   
    
      
     
 }
function moveRightAll(){
       imagesList.forEach((e,i)=>{
        moveRight(i)
       })
       
      
    
}
function moveLeftAll(){

    imagesList.forEach((e,i)=>{
        moveLeft(i)
    })
       

 
}