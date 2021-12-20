import Blazy from "blazy";

(function() {var bLazy = new Blazy();})();
var bLazy = new Blazy({container: '.popup__all'});
var inpcheck = document.querySelectorAll('.inputcheck');
var getbody = document.getElementById("body");
var getform = document.getElementById("form");
var gethdr = document.getElementById("header");
var swiperblck = document.getElementById("slide_uslug");
var reflink = document.querySelectorAll('.refclass');
var getbtncls = document.querySelectorAll('.btnclass');
var getspam = document.querySelectorAll('.spam');
var addscript = document.createElement('script');
addscript.setAttribute('src','/js/swiper.js');
addscript.setAttribute('src','https://www.google.com/recaptcha/api.js');
document.body.appendChild(addscript);
window.onscroll = function() {scrollFunction()};
var h = 50;//window.innerHeight/4;
function scrollFunction() {
if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {gethdr.classList.add("activeheader");}
else {gethdr.classList.remove("activeheader");}
};
window.onload = function(){
window.replainSettings = { id: '81269575-79a9-4b89-b277-eb8fd4a93fa5' };
setTimeout(() => {(function(u){var s=document.createElement('script');s.type='text/javascript';s.async=true;s.src=u;
var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');}, 6000);
var http_request;
var offline=true;
if (window.XMLHttpRequest) {
    http_request = new XMLHttpRequest();
}
else if (window.ActiveXObject) {
  try {
    http_request = new ActiveXObject("Msxml2.XMLHTTP");
  }
  catch (e) {
    try {
      http_request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (e) {
    }
  }
}
else {
}
if (http_request) {
  http_request.onreadystatechange = function() {
    if (http_request.readyState==4) {
      if (http_request.status==200) {
        offline=false;
        go_online();
      }
      else {
        offline=true;
        go_offline();
      }
    }
  };
  setInterval(function() {
    http_request.open('GET', '/offline.html', true);
    http_request.timeout=500;
    http_request.send('');
  }, 10000);
}
function go_online() {
  //grecaptcha.execute();
}
function go_offline() {
  for (var i = 0; i < getbtncls.length; i++) {
    getbtncls[i].setAttribute("disabled", "disabled");
    getbtncls[i].value = 'Нет подключения';
  }
}
for (var i = 0; i < reflink.length; i++) {
  reflink[i].value = document.referrer;
}
function popup_chk() {
  gethdr.classList.add("opacity-0");
  bodyLock();
  swiperblck.classList.add("lock-swiper");
}
function popup_unchk(){
  gethdr.classList.remove("opacity-0");
  getbody.classList.remove("overflow-hidden");
  getbody.style.paddingRight = '0px';
  setTimeout(() => {swiperblck.classList.remove("lock-swiper");}, 1500);
}
function popup_all(){
  for (var i = 0; i < inpcheck.length; i++) {
    if (inpcheck[i].checked = true) {
      inpcheck[i].checked = false;
      popup_unchk();
    }

}
}
for (var i = 0; i < inpcheck.length; i++) {
  inpcheck[i].addEventListener('change', function () {
    if ( this.checked ) {
      history.pushState(null, null);
      window.onpopstate = function(event) {
        popup_all();
        window.onpopstate = null;
      }
      popup_chk();
      }
    else {
      popup_unchk();
      }
  });}
function menu_chk(){
  //getbody.classList.add("overflow-hidden");
  bodyLock();
}
function menu_unchk(){
  getbody.classList.remove("overflow-hidden");
  getbody.style.paddingRight = '0px';

}
  document.querySelector('#menu__toggle').addEventListener('change', function () {
    if ( this.checked ) {history.pushState(null, null);
      window.onpopstate = function(event) {
          if (document.querySelector('#menu__toggle').checked = true) {
            menu_unchk();
            document.querySelector('#menu__toggle').checked = false;
          }
          window.onpopstate = null;
      };menu_chk();}
    else {menu_unchk();}
  });
grecaptcha.execute();
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    menu_unchk();
    document.querySelector('#menu__toggle').checked = false;
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
  })
}
};
function enablebtn(token) {
  for (var i = 0; i < getbtncls.length; i++) {
    getbtncls[i].removeAttribute("disabled", "disabled");
    getbtncls[i].value = 'Отправить';
  }
  for (var i = 0; i < getspam.length; i++) {
    getspam[i].value = 'Не спамер';
  }
};
function bodyLock() {
  const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
  getbody.style.paddingRight = lockPaddingValue;
  getbody.classList.add('overflow-hidden');
}
