$(document).ready(function (argument) {
			// test comment
  // NE PAS UTILISER DE " sans echappement: \"
  var codekdo  = "XXXX",
      txtkdo_b = "La montre Geneva®* Noire ou Blanche",
      txtkdo   = "GRATUITE et sans obligation d'achat.",
      imgkdo   = "kdo_2372993_WEB1.jpg";
  // booleen affichage modules
  var modConseill_ = true,
      modGaranti_  = true,
      modKdo_      = true,
      modInsNews_  = true;
  // DO-NOT-TOUCH creation marquage HTML et texte
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
      <img src="./images/imgZL/'+imgkdo+'" alt="" />\
      <p class="libKdo"><b>'+txtkdo_b+'</b><br />'+txtkdo+'</p>\
      <span class="codKdo">avec le code <span>'+codekdo+'</span></span>\
      <a href="/versKdo">J\'utilise ce code</a>\
  ';
  var modInsNews = '\
      <span class="tilKdo">La newsletter</span>\
      <p> > Recevez nos nouveautés<br />et avantages exclusifs par email</p>\
      <br />\
      <a href="http://www.latelierdelucie.fr/fr/animation/newsletter.aspx"><img src="./images/imgZL/zl_imgForm.png" alt="" /></a>\
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
  // creation module La newsletter >
  if (modInsNews_) {
    appendHTML(modInsNews, target, 'modInsNews');
  }

});