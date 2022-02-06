// document.querySelector('button').addEventListener('click',buttonClicked);
var soundArray = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/snare.mp3","sounds/kick-bass.mp3", "sounds/crash.mp3"];
var lenOfDrumBtn = document.querySelectorAll('.drum').length;
for(let i = 0;i<lenOfDrumBtn;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var audio = new Audio(soundArray[i]);
            audio.play();
    });
}
// document.querySelector('.w').addEventListener('click',function(){
//     var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
// });

document.onkeypress = function(event){
    // alert(event.key)
    if(event.key == 'a'){
        var audio1 = new Audio("sounds/tom-2.mp3");
        audio1.play();
    }else if(event.key == 's'){
        var audio2 = new Audio("sounds/tom-3.mp3");
        audio2.play();

    }else if(event.key == 'd'){
        var audio3 = new Audio("sounds/tom-4.mp3");
        audio3.play();
    }else if(event.key == 'j'){
        var audio4 = new Audio("sounds/snare.mp3");
        audio4.play();
    }else if(event.key == 'k'){
        var audio5 = new Audio("sounds/kick-bass.mp3");
        audio5.play();
        
    }else if(event.key == 'l'){
        var audi6 = new Audio("sounds/crash.mp3");
        audi6.play();
        
    }else if(event.key == 'w'){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        
    }
}


// function buttonClicked(){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }