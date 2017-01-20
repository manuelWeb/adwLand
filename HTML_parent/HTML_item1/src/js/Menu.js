var closetimer = null; // Gestio du Timer pour l'affichage du menu
var item = null; // item du menu selectionné (univers)

/*
* Initialisation du menu
*/
function iniMenu() {
    $('#menu > ul > li').bind('mouseenter', function () {
        item = this;
        closetimer = window.setTimeout("ouvre_menu()", 200);

    }).bind('mouseleave', function () {
        window.clearTimeout(closetimer);
        $(this).removeClass('hover').children('a:first').removeClass('hover');
        $('div', this).hide();
    });
}

/*
* Affiche le choix des rayons
*/
function ouvre_menu() {
    $(item).addClass('hover').children('a:first').addClass('hover');
    $('div', item).show();
}


