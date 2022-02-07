
var lenOfDrumBtn = document.querySelectorAll('.drum').length;
for(let i = 0;i<lenOfDrumBtn;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        buttonAnimation(buttonHTML);
    });
}
document.addEventListener("keydown",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
})

function makeSound(key){
    if(key == 'a'){
        var audio1 = new Audio("sounds/tom-2.mp3");
        audio1.play();
    }else if(key == 's'){
        var audio2 = new Audio("sounds/tom-3.mp3");
        audio2.play();
        
    }else if(key == 'd'){
        var audio3 = new Audio("sounds/tom-4.mp3");
        audio3.play();
    }else if(key == 'j'){
        var audio4 = new Audio("sounds/snare.mp3");
        audio4.play();
    }else if(key == 'k'){
        var audio5 = new Audio("sounds/kick-bass.mp3");
        audio5.play();
        
    }else if(key == 'l'){
        var audi6 = new Audio("sounds/crash.mp3");
        audi6.play();
        
    }else if(key == 'w'){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}




// function buttonClicked(){
    //     var audio = new Audio("sounds/tom-1.mp3");
    //     audio.play();
    // }
    // document.querySelector('.w').addEventListener('click',function(){
    //     var audio = new Audio("sounds/tom-1.mp3");
    //         audio.play();
    // });
    // document.querySelector('button').addEventListener('click',buttonClicked);
