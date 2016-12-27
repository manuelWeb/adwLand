$(document).ready(function (argument) {
var modConseill_ = true;
var modGaranti_  = false;
  // creation marquage HTML et texte
  var modConseill = '\
      <span class="tilCons">Une conseillère à votre écoute</span>\
      <p> > Vous pouvez nous contacter<br>par téléphone</p>\
      <span class="zl_numSva">0 892 780 790 <span>Service 0.45€ / min<br /> + prix appel</span> </span>\
  ',  modGaranti = '\
      <span>Nos garanties</span>\
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