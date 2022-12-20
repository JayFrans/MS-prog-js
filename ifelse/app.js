class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        let title = document.getElementById("newstitle")
        let randomGetal = Math.random();
        g.fillRect(0,0,10,10);
        
        if (randomGetal == 0) {
            title.style.backgroundColor ="#00FF00";
        } else if (randomGetal < 0.2 && randomGetal > 0) {
            title.style.backgroundColor ="#FFFF00";
        } else if (randomGetal < 0.6 && randomGetal > 0.2) {
            title.style.backgroundColor ="#00FFFF";
        } else if (randomGetal > 0.6) {
            title.style.backgroundColor ="#F0F0F0";
        }
    }
}

let app = new App();
app.runApplication();