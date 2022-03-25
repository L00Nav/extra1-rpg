
//console.debug("butt");

function init()
{
    canvas = document.getElementById("gamWindoe");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#999";
    ctx.fillRect(10, 10, 100, 50);

    xPos = 0;
    yPos = 0;
}

function clearCanvas()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function up()
{
    yPos = yPos - 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 100, 50);
}

function down()
{
    yPos = yPos + 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 100, 50);
}

function left()
{
    xPos = xPos - 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 100, 50);
}

function right()
{
    xPos = xPos + 10;
    clearCanvas();
    ctx.fillRect(xPos, yPos, 100, 50);
}