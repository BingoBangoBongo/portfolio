 window.addEventListener('scroll', function(e) {
  var nav = document.querySelectorAll('section[id^="nav"]');
  for (var i = 0; i < nav.length; i++) { 
    document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top 
      && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'navvy' : '');
  }
}, false);
var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 0.2;  
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function(){
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
 }
}