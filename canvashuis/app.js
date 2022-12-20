class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.fillRect(0,0,10,10);

        //line
        g.beginPath()
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.closePath();
        g.stroke();
    }
}

let app = new App();
app.runApplication();