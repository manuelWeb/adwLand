// best solution to inject HTML by JS script (after dom ready)
// fct to create modules
function appendHTML(html, cible, class_) {
	var wrapper = document.createElement("div");
	wrapper.className += ' '+class_;
	wrapper.innerHTML = html;
	cible.appendChild(wrapper);
}
// creation marquage HTML et texte
var modConseill = '\
		<span>Une conseillère à votre écoute</span>\
',  modGaranti = '\
		<span>Nos garanties</span>\
';
var target = document.getElementsByClassName('colRight')[0];
// creation module conseillère >
appendHTML(modConseill, target, 'modConseill');
appendHTML(modGaranti, target, 'modGaranti');
