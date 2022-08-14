var bullets=document.querySelectorAll(".bullets li"),
    landing=document.getElementById("landing"),
    img=document.getElementById("img"),
    toggol=document.getElementById("toggol");
var numBullets=0;
document.querySelector(".landing .bullets .active").classList.remove("active");
bullets[numBullets].classList.add("active");
    var img_src=bullets[numBullets].getAttribute("data-name");
    img.setAttribute("src",img_src);
bullets.forEach(bullet=> {
    bullet.onclick=()=>{
        document.querySelector(".landing .bullets .active").classList.remove("active");
        bullet.classList.add("active");
        var img_src=bullet.getAttribute("data-name");
        img.setAttribute("src",img_src);
        numBullets=(numBullets+1)%6;
    }
});
toggol.onclick=()=>{
    document.getElementById("list").classList.toggle("list");
    document.getElementById("list").classList.toggle("activelist");
}
document.getElementById("next").onclick=()=>{
    if(numBullets!=5)
    {
    numBullets=(numBullets+1)%6;
    document.querySelector(".landing .bullets .active").classList.remove("active");
    bullets[numBullets].classList.add("active");
    var img_src=bullets[numBullets].getAttribute("data-name");
    img.setAttribute("src",img_src);
    }
}
document.getElementById("prev").onclick=()=>{
    if(numBullets!=0)
    {
    numBullets=(numBullets-1)%6;
    document.querySelector(".landing .bullets .active").classList.remove("active");
    bullets[numBullets].classList.add("active");
    var img_src=bullets[numBullets].getAttribute("data-name");
    img.setAttribute("src",img_src);
    }
}
setInterval(() => {
    numBullets=(numBullets+1)%6;
    document.querySelector(".landing .bullets .active").classList.remove("active");
    bullets[numBullets].classList.add("active");
    var img_src=bullets[numBullets].getAttribute("data-name");
    img.setAttribute("src",img_src);
},3000);