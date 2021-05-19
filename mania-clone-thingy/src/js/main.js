var game = document.getElementById('game');

var startBtn = document.createElement("button");
game.appendChild(startBtn);
startBtn.innerText = "start";
startBtn.setAttribute("class", "startBtn")
startBtn.onclick = function(){
    alert("starting now");
}

