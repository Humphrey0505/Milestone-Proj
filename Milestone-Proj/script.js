
document.addEventListener("DOMContentLoaded", function () {
    const aBtn = document.getElementById("aBtn");
    let jump = 10;
    let jumpCount = 0;
   

    console.log("Hello")


    aBtn.addEventListener("click", function (e) {
        const beginning = prompt("Let's save Gertrude");
    
        if (beginning === null || beginning.trim() === "") {
            return;
        }

        const ched = document.getElementById("ched");
        const point = createPoint();

        point.style.animationPlayState = "running";

        gameStart(ched, point,);
    
    });

    });
    
   function createPoint(){
    const point = document.createElement("div");
    point.id = "point"
    document.body.appendChild(point);
    point.style.width = "0";
    point.style.height = "0";
    point.style.borderLeft = "25px solid transparent";
    point.style.borderRight = "25px solid transparent";
    point.style.borderBottom = "50px solid #555";
    point.style.position = "relative";
    point.style.top = "130px";
    point.style.left = "758px";

    const animation = {
      name: "point",
      duration: "3s",
      iterationCount: "infinite",
      timingFunction: "ease-in-out",
      delay: "0s",
      direction: "forwards",
      playState: "paused",
    };

    point.style.animationName = animation.name;
    point.style.animationDuration = animation.duration;
    point.style.animationIterationCount = animation.iterationCount;
    point.style.animationTimingFunction = animation.timingFunction;
    point.style.animationDelay = animation.delay;
    point.style.animationDirection = animation.direction;
    point.style.animationPlayState = animation.playState;

    return point;
  }

   createPoint();

    function gameStart(ched, point, square) {
       let isJumping = false;

        document.addEventListener("click", jump);

        function jump() {
            if (!isJumping) {
                isJumping = true;

                ched.classList.add("jumping");

                setTimeout(() => {
                    ched.classList.remove("jumping");
                    isJumping = false;
                }, 300);
        
                if(hasLost) {
                    return;
                }
            }
        }
        jump();


        function getBoundingClientRect(element) {
            return element.getBoundingClientRect();
          }
    

        function checkCollision() {
            const collisionInterval = setInterval(checkCollision, 100);
            const chedRect = ched.getBoundingClientRect();
            const pointRect = point.getBoundingClientRect();
            console.log({collisionInterval, chedRect, pointRect,})
            
             {
                document.removeEventListener("click", jump);
                clearInterval(collisionInterval);
                let hasLost = false;
                if (!hasLost && confirm("You have lost! Do you want to play again?")) {
                    resetGame();
                }
                hasLost = true;
            }

            if (
                chedRect.left < squareRect.right &&
                chedRect.right > squareRect.left
            ) {
                document.removeEventListener("click", jump);
                clearInterval(collisionInterval);
                if (confirm("You have lost! Do you want to play again?")) {
                    resetGame();
                }
            }
        }
            checkCollision();

        function resetGame() {
            alert("Game Reset!");
            location.reload();
            resetGame();
        }
    }


    // const point = document.createElement("div");
    // point.id = "point";
    // document.body.appendChild(point);

    // point.style.width = "0";
    // point.style.height = "0";
    // point.style.borderLeft = "25px solid transparent";
    // point.style.borderRight = "25px solid transparent";
    // point.style.borderBottom = "50px solid #555";
    // point.style.position = "relative";
    // point.style.top = "130px";
    // point.style.left = "758px";

    // const animation = {
    //     name: "point",
    //     duration: "3s",
    //     iterationCount: "infinite",
    //     timingFunction: "ease-in-out",
    //     delay: "0s",
    //     direction: "forwards",
    //     playState: "paused",
    //   };
    //   point.style.animationName = animation.name;
    //   point.style.animationDuration = animation.duration;
    //   point.style.animationIterationCount = animation.iterationCount;
    //   point.style.animationTimingFunction = animation.timingFunction;
    //   point.style.animationDelay = animation.delay;
    //   point.style.animationDirection = animation.direction;
    //   point.style.animationPlayState = animation.playState;

    //   point.style.animationPlayState = "running";