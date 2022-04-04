//console.debug("butt");


let xPos = 10;
let yPos = 10;

let menuOn = true;

let canvasBG = document.getElementById("bgLayer");
let ctxBG = canvasBG.getContext("2d");
let backgroundIMG = new Image();
backgroundIMG.src = "./img/bg.png";

let canvasE = document.getElementById("eLayer");
let ctxEnemy = canvasE.getContext("2d");
let enemyIMG = new Image();
enemyIMG.src = "./img/enemy.png";
    
let canvasP = document.getElementById("pLayer");
let ctxPlayer = canvasP.getContext("2d");
let playerIMG = new Image();
playerIMG.src = "./img/player.png";

let canvasEP = document.getElementById("epLayer");
let ctxEParticles = canvasEP.getContext("2d");

let canvasPP = document.getElementById("ppLayer");
let ctxPParticles = canvasPP.getContext("2d");

let particleIMG = new Image();
particleIMG.src = "./img/particle.png";

let menuLayer = document.getElementById("menu");


function init()
{
    //draw background
    ctxBG.drawImage(backgroundIMG, -10, -10, (canvasBG.width + 10), (canvasBG.height + 10));

    //draw the combatants
    ctxEnemy.drawImage(enemyIMG, 200, 80, 60, 60);
    ctxPlayer.drawImage(playerIMG, 100, 90, 60, 60);

    //ctx.fillStyle = "#999";
    //ctx.fillRect(10, 10, 50, 50);

    //ctx2.fillStyle = "#666";

    
    menuLayer.setAttribute("style", "display: none");
    menuOn = false;
}

function randomInt(max)
{
    return Math.floor(Math.random() * max - (max * 0.5));
}

function toggleMenu()
{
    menuOn = !menuOn;
    if (menuOn)
        menuLayer.setAttribute("style", "display: block");
    else
        menuLayer.setAttribute("style", "display: none");
}

function drawEParticle()
{ 
    ctxEParticles.drawImage(particleIMG, 200, 80, 60, 60);
}

function drawPParticle()
{ 
    ctxPParticles.drawImage(particleIMG, 100, 90, 60, 60);
}

function clearEPCanvas()
{
    ctxEParticles.clearRect(0, 0, canvasEP.width, canvasEP.height);
}

function clearPPCanvas()
{
    ctxPParticles.clearRect(0, 0, canvasPP.width, canvasPP.height);
}

function particleE()
{
    let tick1 = setInterval(drawEParticle, 100);
    let tick2
    setTimeout(() => 
    {
        tick2 = setInterval(clearEPCanvas, 100)
    }, 50);

    setTimeout(() =>
    {
        clearInterval(tick1);
        clearInterval(tick2);
    }, 500);
}

function particleP()
{
    let tick1 = setInterval(drawPParticle, 100);
    let tick2
    setTimeout(() => 
    {
        tick2 = setInterval(clearPPCanvas, 100)
    }, 50);

    setTimeout(() =>
    {
        clearInterval(tick1);
        clearInterval(tick2);
    }, 500);
}


/////////////////////////////////////////////////////////////////////////////////
///Test functions
/////////////////////////////////////////////////////////////////////////////////

/*
function drawParticle()
{
    ctx2.fillRect(50, 50, 40, 40);
}

function particle()
{
    tick1 = setInterval(drawParticle, 100);
    setTimeout(() => 
    {
        tick2 = setInterval(clearCanvas2, 100)
    }, 50)

    setTimeout(() =>
    {
        clearInterval(tick1);
        clearInterval(tick2);
    }, 500)
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function clearCanvas2()
{
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
}

function up()
{
    yPos = yPos - 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 50, 50);
}

function down()
{
    yPos = yPos + 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 50, 50);
}

function left()
{
    xPos = xPos - 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 50, 50);
}

function right()
{
    xPos = xPos + 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 50, 50);
}


function testWrite ()
{
    document.getElementById("UILayer1").innerHTML = "<button>Click Me</button>";
}

function singleShake()
{
    var xShake = xPos + randomInt(10);
    var yShake = yPos + randomInt(10);
    clearCanvas();
    ctx.fillRect(xShake, yShake, 50, 50);
}

function shake()
{
    shakeID = setInterval(singleShake, 40);
    setTimeout(() => 
    {
        clearInterval(shakeID)
        clearCanvas();
        ctx.fillRect(xPos, yPos, 50, 50);
    }, 300);
}
*/