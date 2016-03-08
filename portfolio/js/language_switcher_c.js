   document.getElementById('enbutton').addEventListener("click", function() {
      
var appBanners = document.getElementsByClassName('ruu'), i;
var appBannerss = document.getElementsByClassName('en'), i;
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'none';
}
for (var i = 0; i < appBannerss.length; i ++) {
    appBannerss[i].style.display = 'block';
}

document.getElementById('enbutton').style.backgroundColor = "white";
document.getElementById('rubutton').style.backgroundColor = "black";
    });


document.getElementById('rubutton').addEventListener("click", function() {
      
var appBanners = document.getElementsByClassName('ruu'), i;
var appBannerss = document.getElementsByClassName('en'), i;
for (var i = 0; i < appBanners.length; i ++) {
    appBanners[i].style.display = 'block';
}
for (var i = 0; i < appBannerss.length; i ++) {
    appBannerss[i].style.display = 'none';
}

document.getElementById('enbutton').style.backgroundColor = "black";
document.getElementById('rubutton').style.backgroundColor = "white";

    });



