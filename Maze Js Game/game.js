    window.onload = (event) =>{
        
    var game = document.getElementById("game");
    var elements = document.getElementById("game").getElementsByClassName("boundary");
    var example = document.getElementsByClassName('example');
    var status = document.getElementById('status');
    var end = document.getElementById("end");

    var score = 0;
    
    

    document.getElementById("start").addEventListener("click", startGame);
    
    for (let i = 0; i < example.length; i++) {
        example[i].addEventListener("click", (event) => {
            score = 0;
            status.innerHTML = 'You score was reset to  ' + score;
          }, false);
        }
    
    function startGame() {

        game.addEventListener("mouseleave", (event) => {
           
            for (let i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor="#eeeeee";
                }
            
            status.innerHTML = 'your score ' + score;

            end.onmouseover = function() {
            };

          }, false);
          

        end.addEventListener('mouseover', function(){
            score = score + 5;
            status.innerHTML = 'You win ' + score;
          })

        for (let i = 0; i < elements.length; i++) {
            elements[i].onmouseover = function() {
                for (let j = 0; j < elements.length; j++) {
                    elements[j].style.backgroundColor="red";
                }
                score = score - 10;
                status.innerHTML = 'You Lose and your score is ' + score;
            };
        }
    }
};