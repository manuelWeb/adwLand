// name of cookie, value of, days before he died
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

// fct createCookie callback return its arguments
function cb(arg) {
  var wrapper = document.createElement("div");
  wrapper.className += 'instead-button';
  wrapper.innerHTML += 'Votre code '
  + '<span class="cbCode">' + arg + '<br /></span>'
  + ' à été ajouté à votre panier !';
  $('.codKdo + a').fadeOut( "slow", function() {
    document.querySelectorAll('.modKdo')[0].appendChild(wrapper);
  });
};

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}