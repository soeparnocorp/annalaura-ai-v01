const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 16;
const columns = width / fontSize;
const drops = [];

for(let x=0; x<columns; x++) {
  drops[x] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#fff";
  ctx.font = fontSize + "px monospace";

  for(let i=0; i<drops.length; i++){
    const text = letters.charAt(Math.floor(Math.random()*letters.length));
    ctx.fillText(text, i*fontSize, drops[i]*fontSize);

    if(drops[i]*fontSize > height && Math.random() > 0.975){
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(draw, 50);

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
