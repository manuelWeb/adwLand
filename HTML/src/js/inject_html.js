$(document).ready(function (argument) {
	// booleen affichage modules
	var modConseill_ = true,
			modGaranti_  = true,
			modKdo_      = true;
  // creation marquage HTML et texte
  var modConseill = '\
      <span class="tilCons">Une conseillère à votre écoute</span>\
      <p> > Vous pouvez nous contacter<br>par téléphone</p>\
      <div class="contConseil">\
        <span class="zl_numSva">0 892 780 790 <span>Service 0.45€ / min<br /> + prix appel</span> </span>\
        <p>du lundi au vendredi de 7h à 20h<br />et le samedi de 9h à 19h</p>\
      </div>\
  ';
	var modGaranti = '\
      <span class="tilGarant">Nos garanties</span>\
      <span class="eltRassur">Satisfait ou<br />remboursé</span>\
      <span class="eltRassur">Livraison<br />à la carte</span>\
      <span class="eltRassur">Paiement<br />sécurisé</span>\
      <span class="eltRassur">Garantie<br />un an</span>\
  ';
	var modKdo = '\
      <span class="tilKdo">Votre cadeau gratuit</span>\
      <img src="./images/imgZL/kdo_2372993_WEB1.jpg" alt="" />\
      <p class="libKdo"><b>La montre Geneva®* Noire ou Blanche</b> GRATUITE et sans obligation d\'achat.</p>\
      <span class="codKdo">avec le code <span>B1WB</span></span>\
      <a href="/versKdo">J\'utilise ce code</a>\
  ';
  // best solution to inject HTML by JS script (after dom ready)
  // fct to create modules
  function appendHTML(html, cible, class_) {
    var wrapper = document.createElement("div");
    wrapper.className = class_;
    wrapper.innerHTML = html;
    cible.appendChild(wrapper);
  };
  
  var target = document.querySelectorAll('.colRight')[0];
  
  // creation module conseillère >
  if (modConseill_) {
    appendHTML(modConseill, target, 'modConseill');
  }
  // creation module Nos garnaties >
  if (modGaranti_) {
    appendHTML(modGaranti, target, 'modGaranti');
  }
  // creation module Votre cadeau gratuit >
  if (modKdo_) {
    appendHTML(modKdo, target, 'modKdo');
  }

});