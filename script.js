var next = document.getElementById('bar');

var ArrImage = ["Img/pic02.png","Img/pic03.png","Img/pic04.png","Img/pic05.png","Img/pic06.png","Img/pic07.png"];
var IndexImage = 0;

function chang() {
    next.setAttribute("src", ArrImage[IndexImage]);
    IndexImage++;
    if (IndexImage>=ArrImage.length) {
        IndexImage=0;
    }
}

//setInterval(chang,4000);
var stop = setInterval(chang,4000);

sImage.onclick = function () {
    clearInterval(stop);
}
