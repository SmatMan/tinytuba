var clicks = 0;
function play(){
     var audio = document.getElementById("audio");
     audio.play();
     clicks += 1;
     document.getElementById("clicks").innerHTML = clicks;
}