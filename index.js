var int = setInterval(changeImg,6000);
let i = 0;
let src = "";
let changeInProgress = false;
let manual = false;
function changeImg() {
    i++;
    if (i == 1) {
        src = "./milk2.jpg";
    } else if (i == 2) {
        src = "./milk3.jpg";
    } else if (i == 3) {
        src = "./milk4.webp";
    } else {
        src = "./milk1.jpg";
        i = 0;
    }
    changeInProgress = true;
    for (let j = 0; j < document.getElementsByClassName("circle").length; j++) {
        document.getElementsByClassName("circle")[j].className = "circle";
    }
    document.getElementById("c" + i).className = "circle black";
    document.getElementById("slideImg").className = "fadeOut";
    setTimeout(doChange,1000);
}

function doChange() {
    document.getElementById("slideImg").src = src;
    document.getElementById("slideImg").className = "fadeIn";
    setTimeout(resetCycle,1000);
}

function manualSlideChange(x) {
    if (changeInProgress == false) {
        changeInProgress = true;
        clearInterval(int);
        manual = true;
        i = x - 1;
        changeImg();
    }
}
function resetCycle() {
    changeInProgress = false;
    if (manual == true) {
        manual = false;
        int = setInterval(changeImg,6000);
    }
}