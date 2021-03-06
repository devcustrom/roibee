(function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
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