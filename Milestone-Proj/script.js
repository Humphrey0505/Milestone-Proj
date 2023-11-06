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
    if (pointLeft<20 && pointLeft>1450 &&
        chedTop>=130){
            point.style.animation = "none";
            point.style.display = "none";
            alert("You Lose");
            setInterval(checkDead);
        }
},10);