(function(){
     
    // select the cursor and a tag
    let cursor = document.querySelector(".cursor");
    let links = document.querySelectorAll("a");

    // add a event listner to dom element 
    document.addEventListener("mousemove", (event)=>{

        // take mouse point where is our mouse is pointing to be 
        const possitionX = event.clientX;
        const possitionY = event.clientY;

        // set transform property to the cursor point
        cursor.style.transform = `translate3d(calc(${possitionX}px - 50%),calc(${possitionY}px - 50%),0)`
    });

    // add style to hovering a tag element
    links.forEach(function(link){
        link.addEventListener("mouseover",function(){
            cursor.classList.add("hovered")
            // adding class list to the a tag
        })
        link.addEventListener("mouseleave",function(){
            cursor.classList.remove("hovered")
        })
    })
})()





