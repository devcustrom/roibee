;(function() {
    // Initialize
    var bLazy = new Blazy();
})();
window.onscroll = function() {scrollFunction()};
var h = 70;//window.innerHeight/4;
function scrollFunction() {
    if (document.body.scrollTop > h || document.documentElement.scrollTop > h) {
      document.getElementById("header").classList.add("activeheader");
    } else {
      document.getElementById("header").classList.remove("activeheader");
    }
  }
document.querySelector('#popup__show').addEventListener('change', function () {
    if ( this.checked ) {
      document.getElementById("body").classList.add("body__ovh");
    } else document.getElementById("body").classList.remove("body__ovh");
  }) 
  document.querySelector('#menu__toggle').addEventListener('change', function () {
    if ( this.checked ) {
      document.getElementById("body").classList.add("body__ovh");
    } else document.getElementById("body").classList.remove("body__ovh");
  })
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
          http_request.open('GET', 'robots.txt', true);
          http_request.timeout=500;
          http_request.send('');
      }, 10000);
  }
  function go_online() {
      document.getElementById("formbtn").removeAttribute("disabled", "disabled");
      document.getElementById('formbtn').value = 'Отправить';
  }
  function go_offline() {
      document.getElementById("formbtn").setAttribute("disabled", "disabled");
      document.getElementById('formbtn').value = 'Нет подключения';
  }  
