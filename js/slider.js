let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')

let counter = 0;

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
        }
        counter = i;
        imageSlider[counter].classList.add('activeImage');
        point[counter].classList.add('activeImage');
    })
}

leftBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter--
    if (counter <0){
        counter = imageSlider.length-1
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})

rightBtn.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})


function slowSlider () {
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
}

let second = 1000*2
let TimerImage = setInterval(()=>slowSlider(), second)

let blockSlider = document.getElementById('blockSlider')
blockSlider.addEventListener('mouseover',()=>{
    clearInterval(TimerImage)
})

blockSlider.addEventListener('mouseleave',()=>{
    TimerImage = setInterval(()=>slowSlider(), second)
})






document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("shineButton");
    const button2 = document.getElementById("openModalButton");
    const button3 = document.getElementById("openModalButton2");
    const button4 = document.getElementById("shineButton2");
    
    button.addEventListener("mouseenter", function() {
        button.classList.add("shine-effect");
    });

    button.addEventListener("mouseleave", function() {
        button.classList.remove("shine-effect");
    });
    button2.addEventListener("mouseenter", function() {
        button2.classList.add("shine-effect");
    });

    button2.addEventListener("mouseleave", function() {
        button2.classList.remove("shine-effect");
    });
    button3.addEventListener("mouseenter", function() {
        button3.classList.add("shine-effect");
    });

    button3.addEventListener("mouseleave", function() {
        button3.classList.remove("shine-effect");
    });
    button4.addEventListener("mouseenter", function() {
        button4.classList.add("shine-effect");
    });

    button4.addEventListener("mouseleave", function() {
        button4.classList.remove("shine-effect");
    });
});




