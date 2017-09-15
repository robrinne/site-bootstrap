// On récupère le canvas
var canvas = document.getElementById('draw');
// On récupère le contexte du canvas
var context = canvas.getContext('2d');

// On définit les dimensions du canvas
canvas.width = 600;
canvas.height = 400;

// On définit la couleur du fond du canvas
//canvas.style.backgroundColor = 'yellow';

// On dessine un rectangle à l'intérieur -> rect(x,y,largeur,longueur)
context.rect(110, 50, 50, 20);
context.fillStyle = 'red';
context.fill();
context.beginPath();

// On dessine un cercle -> arc(x,y,rayon,angle début,angle fin,sens trigo ?)
context.arc(60, 60, 50, 0, 2*Math.PI, false);
context.fill();
// beginPath() pour 'lever la main' afin de faire une nouvelle forme
context.beginPath();
context.arc(210, 60, 50, 0, 2*Math.PI, false);
context.lineWidth = 10;
context.stroke();
context.fill();

context.beginPath();
// Se déplacer sur le canvas
context.moveTo(150, 200);
// Dessiner un trait
context.lineTo(100, 100);
// Définir la couleur du trait
context.strokeStyle = 'black';
// Définir la taille du trait
context.lineWidth = 2;
// Permet d'afficher le trait
context.stroke();

// Afficher une image
var img = new Image();
img.src = 'img/piaf.png';
context.drawImage(img, 0, 0);


var x = 0, speed = 10, direction = 1;

function draw()
{
  x += speed * direction;
  if(x > canvas.width - 100 || x < 0)
  {
    direction = -direction;
  }

  context.beginPath();
  context.fillStyle = 'green';
  context.rect(x, canvas.height/2, 100, 20);
  context.fill();
}

function animate()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  draw();
}

// setInterval(fonction à boucler, temps de raffraichissement en sec)
/*
  setInterval(animate, 1000/30);
*/
