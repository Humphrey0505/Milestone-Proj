var ched = document.getElementById("ched");
var point = document.getElementById("point");

function jump(){
    if(ched.classList != "animate"){
    ched.classList.add("animate")
    }
    setTimeout(function(){
        ched.classList.remove("animate");
    }, 500)
}

var checkDead = setInterval(function(){
    var chedTop =
    parseInt(window.getComputedStyle(ched).getPropertyValue("top"));
    var pointRight =
    parseInt(window.getComputedStyle(point).getPropertyValue("right"));
    if (pointRight<20 && pointRight>0 &&
        chedTop>=130){
            point.style.animation = "none";
            point.style.display = "none";
            alert("You Lose");
        }
},10);