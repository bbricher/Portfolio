// window.addEventListener('scroll', function() {
//     console.log("scrolling")
// })

var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000/60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top  <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}


// add show-on-scroll to each item scrolling in; add class to header
// opacity - 0 for fade in
// transform: translateY(4em) rotateZ(-5deg); --- 
// transition: transfrom 4s .25s cubis-bezier(0,1,.3,1), opacity .3s .25s ease-out; 
// will-change: transform, opacity;
 
//inline-photo.is-visible {
//   opacity: 1;
// transform: rotate(-2deg);
//}
// header { opacity: 0; transition: opacity .5s .25s ease-out;}
// header.is-visible { opacity: 1;}
// .main-photo { transform: scale(.8);}
// .heading { transform: translate(-50%, calc(-50% = 1 em))}
// .is-visible .main-photo { transform: none; }
// is-visible .heading { transform: translate(-50%, -50%);}
// .main-photo, .heading { transition: transform 4s .35s cubic-bezier(0,1,.3,1); will-change: transform;}