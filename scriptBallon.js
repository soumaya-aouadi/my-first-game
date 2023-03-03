var container = document.getElementById('container');
var score = 0;
var scoreValue = document.getElementById('score-value');
var timerValue = document.getElementById('timer-value');
var timer = 30;


""""""""""
this functoin that update the score every time you click on a ballon
function createBallon() {
	var ballon = document.createElement('div');
	ballon.className = 'ballon';
	ballon.style.left = Math.random() * 420 + 'px';
	container.appendChild(ballon);
	ballon.addEventListener('click', function() {
		container.removeChild(ballon);
		updateScore();
	});
}
function updateTime() {
	timer--;
	timerValue.innerHTML = timer;
	if (timer == 0) {--
		clearInterval(intervalId);
		alert('Temps écoulé ! Score : ' + score);
	}
}
function updateScore() {
	score++;
	scoreValue.innerHTML = score;
}
setInterval(createBallon, 1000);
var intervalId = setInterval(updateTime, 1000);