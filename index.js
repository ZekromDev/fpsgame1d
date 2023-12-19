let container = document.querySelector('.container');
let btn = document.querySelector('#btn');
let scoreCount = document.querySelector('.gameInfoValue');
let timeCount = document.querySelector(".gameTimeValue");
let bestScore = document.querySelector(".bestScoreValue");
bestScore.innerHTML = localStorage.getItem('bestScore') || 0;

btn.addEventListener('click', function () {
    let score = 0;
    let time = 60;
    container.innerHTML = "";

    let interval = setInterval(() => {
        let target = document.createElement('img');
        console.log(target);
        target.id = "target";
        target.src = "target.png";
        container.appendChild(target);
        target.style.top = Math.random() * (500 - target.offsetHeight) + "px";
        target.style.left = Math.random() * (600 - target.offsetWidth) + "px";

        setTimeout(() => {
            target.remove();
        }, 2000);

        target.addEventListener('click', function (){
            score++;
            scoreCount.innerHTML = score;
            target.remove();
        });
        time -=1;
        timeCount.innerHTML = time;

        if (time === 0)
        {
            clearInterval(interval);
            container.innerHTML = `End game ! Score : ${score}` ;
            if (score > localStorage.getItem('bestScore') || localStorage.getItem('bestScore') === null)
            {
                saveBestScore(score);
            }
        }
        
    }, 1000);

});


const saveBestScore = (score) => {
    localStorage.setItem('bestScore', score);
    bestScore.innerHTML = score;
}
