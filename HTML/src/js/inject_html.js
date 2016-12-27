$(document).ready(function (argument) {
var modConseill_ = true;
var modGaranti_  = true;
  // creation marquage HTML et texte
  var modConseill = '\
      <span>Une conseillère à votre écoute</span>\
  ',  modGaranti = '\
      <span>Nos garanties bla...bla...</span>\
  ';
  // best solution to inject HTML by JS script (after dom ready)
  // fct to create modules
  function appendHTML(html, cible, class_) {
    var wrapper = document.createElement("div");
    wrapper.className = class_;
    wrapper.innerHTML = html;
    cible.appendChild(wrapper);
  };
  
  var target = document.getElementsByClassName('colRight')[0];
  
  // creation module conseillère >
  if (modConseill_) {
    appendHTML(modConseill, target, 'modConseill');
  }
  if (modGaranti_) {
    appendHTML(modGaranti, target, 'modGaranti');
  }

});