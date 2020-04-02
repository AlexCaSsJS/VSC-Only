

var rectangle = document.querySelector("div");

function minimize() {
    var computedStyle = window.getComputedStyle(rectangle);
    current = computedStyle.height;
    var n = current.substring(0, current.length - 2)
    n = Math.round(n);
    var newerH = --n + "px";
    rectangle.style.height = newerH;
    if(n > 0){
        setTimeout(minimize, 10);
    }
}

minimize();