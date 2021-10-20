let currentYear = new Date().getFullYear();
let elemCurrentYear = document.querySelector('#current-year')

elemCurrentYear.innerHTML = currentYear

let menuHumburger = document.querySelector('.menu-humburger')
let modalClose = document.querySelector('.close')
let modal = document.querySelector('.modal')

if (menuHumburger) {
    menuHumburger.addEventListener('click', function () {
        modal.style.display = 'block'
    })
}

if (modal) {
    modalClose.addEventListener('click', function () {
        modal.style.display = 'none'
    })
}

/* SMOOTH LINK REFERENCE */
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {
                window.location.hash = hash;
            });
        }
    });
});

/* GOTO THE TOP EVENT */
let goUp = document.querySelector('#go-up');

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goUp.style.display = "flex";
    } else {
        goUp.style.display = "none";
    }
}
if (goUp) {
    goUp.addEventListener('click', () => {
        goTop();
    })
}

/* HANDLE TOP EVENT */
const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// HANDLE LAZY LOAD 
! function (window) {
    var $q = function (q, res) {
            if (document.querySelectorAll) {
                res = document.querySelectorAll(q);
            } else {
                var d = document,
                    a = d.styleSheets[0] || d.createStyleSheet();
                a.addRule(q, 'f:b');
                for (var l = d.all, b = 0, c = [], f = l.length; b < f; b++)
                    l[b].currentStyle.f && c.push(l[b]);

                a.removeRule(0);
                res = c;
            }
            return res;
        },
        addEventListener = function (evt, fn) {
            window.addEventListener ?
                this.addEventListener(evt, fn, false) :
                (window.attachEvent) ?
                this.attachEvent('on' + evt, fn) :
                this['on' + evt] = fn;
        },
        _has = function (obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
        };

    function loadImage(el, fn) {
        var img = new Image(),
            src = el.getAttribute('data-src');
        img.onload = function () {
            if (!!el.parent)
                el.parent.replaceChild(img, el)
            else
                el.src = src;

            fn ? fn() : null;
        }
        img.src = src;
    }

    function elementInViewport(el) {
        var rect = el.getBoundingClientRect()

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
    }

    var images = new Array(),
        query = $q('img.lazy'),
        processScroll = function () {
            for (var i = 0; i < images.length; i++) {
                if (elementInViewport(images[i])) {
                    loadImage(images[i], function () {
                        images.splice(i, i);
                    });
                }
            };
        };
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll', processScroll);

}(this);
