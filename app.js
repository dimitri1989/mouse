var MouseEvents = document.querySelector(".Mouse-events")
var audio = new Audio('mixed-whip-crack-1-102825.mp3');
document.addEventListener("mousemove", function(elemets){
    //MouseEvents.style.cssText = "left: " + elemets.offsetX + "px; top: " + elemets.offsetY + "px;";
    var x = elemets.clientX;
    var y = elemets.clientY;
    MouseEvents.style.left = x + "px";
    MouseEvents.style.top = y + "px";
    if(y > "300"){
        MouseEvents.classList.add("Mouse-events2")
        MouseEvents.classList.remove("Mouse-events")
        MouseEvents.classList.remove("Mouse-events3")
        MouseEvents.classList.remove("Mouse-events4")
       
    }
    if(y < "300"){
        MouseEvents.classList.add("Mouse-events")
        MouseEvents.classList.remove("Mouse-events2")
        MouseEvents.classList.remove("Mouse-events3")
        MouseEvents.classList.remove("Mouse-events4")
      
    }
    if(x < "50"){
        MouseEvents.classList.add("Mouse-events3")
        MouseEvents.classList.remove("Mouse-events2")
        MouseEvents.classList.remove("Mouse-events")
      
    }
    if(x < "50"){
        MouseEvents.classList.add("Mouse-events3")
        MouseEvents.classList.remove("Mouse-events2")
        MouseEvents.classList.remove("Mouse-events")
        
    }
   
    console.log(y);
    
})