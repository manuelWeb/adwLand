var nbArticleVisibleDansPanier = 4; // Nombre d'articles affichés au niveau du panier en haut à droite
var panierSlider_Step = 1; // Nombre d'articles balayés lors de l'actionnement du carrousel.
var panierSlider_Width = 400; // Largeur du carrousel pour un seul élément
var panierSlider_Height = 80; // Hauteur du carrousel pour un seul élément
var panierSlider_Speed = 500; // Rapidité du carrousel
var numPagePanier = 1; //Va contenir la page courante du carrousel affiché


$(document).ready(function() {
    ChargementCarrouselPanier();
});

// NL : le 23/11/2012 : Permet de relancer l'initialisation des évènements JQuery après un callback AJAX.
var prm = Sys.WebForms.PageRequestManager.getInstance();

prm.add_endRequest(function() {
    ChargementCarrouselPanier();
});

/**
* Permet de charger le carrousel sur le panier affiché en haut à droite dans la page
*/
function ChargementCarrouselPanier() {
    // On récupère le nombre d'articles disponible dans le panier
    // En fonction de cela, on calcule le nombre d'articles visible pour le carrousel
    var nbrArticleTotal = $("[id$=HID_NB_LIGNES_PRD]").val();
    var nbrArticleVisible = nbrArticleTotal < nbArticleVisibleDansPanier ? nbrArticleTotal : nbArticleVisibleDansPanier;

    // Affichage du carrousel
    if (nbrArticleTotal > nbArticleVisibleDansPanier) {
        $("#panierSlider").rcarousel({
            visible: parseInt(nbrArticleVisible),
            step: panierSlider_Step,
            orientation: "vertical",
            width: panierSlider_Width,
            height: panierSlider_Height,
            speed: panierSlider_Speed,
            pageLoaded: panierSlider_PageLoaded,
            navigation: { next: "#A_CARROUSELPANIER_SUIVANT", prev: "#A_CARROUSELPANIER_PRECEDENT" }
        });

        if (numPagePanier > 1) {
            $("#panierSlider").rcarousel({ speed: 1 });
            // La focntionnalité goToPage démarre à 0 donc il faut décrémenter de 1 pour se retrouver au bon endroit
            $("#panierSlider").rcarousel("goToPage", numPagePanier - 1 < 0 ? 0 : numPagePanier - 1);
            $("#panierSlider").rcarousel({ speed: panierSlider_Speed });
        }
    }

    // En fonction du nombre d'articles visibles et du numéro de la page en cours, on affiche ou pas les boutons suivant/précédent
    var nbPageTotal = $("#panierSlider").rcarousel("getTotalPages");
    if (numPagePanier = 1) {
        $("[id$=A_CARROUSELPANIER_PRECEDENT]").css('display', 'none');

        if (nbrArticleTotal > nbArticleVisibleDansPanier)
            $("[id$=A_CARROUSELPANIER_SUIVANT]").css('display', 'inline');
        else
            $("[id$=A_CARROUSELPANIER_SUIVANT]").css('display', 'none');
    }
    else if (numPagePanier = nbPageTotal) {
        $("[id$=A_CARROUSELPANIER_SUIVANT]").css('display', 'none');

        if (nbrArticleTotal > nbArticleVisibleDansPanier)
            $("[id$=A_CARROUSELPANIER_PRECEDENT]").css('display', 'inline');
        else
            $("[id$=A_CARROUSELPANIER_PRECEDENT]").css('display', 'none');
    } else {
        $("[id$=A_CARROUSELPANIER_PRECEDENT]").css('display', 'inline');
        $("[id$=A_CARROUSELPANIER_SUIVANT]").css('display', 'inline');
    }
}


/**
* Chargement du carrousel
*/
function panierSlider_PageLoaded(event, data) {
    numPagePanier = $("#panierSlider").rcarousel("getCurrentPage");

    if ($("#panierSlider").rcarousel("getCurrentPage") > 1)
        $("#A_CARROUSELPANIER_PRECEDENT").show();
    else
        $("#A_CARROUSELPANIER_PRECEDENT").hide();

    if ($("#panierSlider").rcarousel("getCurrentPage") < $("#panierSlider").rcarousel("getTotalPages"))
        $("#A_CARROUSELPANIER_SUIVANT").show();
    else
        $("#A_CARROUSELPANIER_SUIVANT").hide();
}
