window.addEventListener("scroll", function(){

    const body = document.body;
    const scrollY = window.scrollY;

    if(scrollY > 100){
        body.classList.add("scrolled");
    }else{
        body.classList.remove("scrolled");
    }

});