//console.debug("butt");


let xPos = 10;
let yPos = 10;


function init()
{
    canvas = document.getElementById("layer1");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#999";
    ctx.fillRect(10, 10, 50, 50);
    
    canvas2 = document.getElementById("layer2");
    ctx2 = canvas2.getContext("2d");
    ctx2.fillStyle = "#666";
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

function randomInt(max)
{
    return Math.floor(Math.random() * max - (max * 0.5));
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