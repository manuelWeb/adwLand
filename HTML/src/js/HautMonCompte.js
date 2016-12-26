//-----------------------------------------------------------------------------------
//                                  LES ECOUTEURS
//-----------------------------------------------------------------------------------
/** 
* Ecouteur sur l'évènement click du lien déconnexion
*/
function EcouteurDeconnexion() {
    $("[id$=HL_DECONNEXION]").bind('click', function() {
        tb_show('', '#TB_inline?height=188&width=600&inlineId=layer&modal=false', '');
    });

    // Le lien A_DECONNEXION est dans la page compte_perso. Lorsque l'on clique sur celui-ci, on simule le click sur déconnexion dans le menu haut du compte
    $("[id$=A_DECONNEXION]").bind('click', function() {
        $("[id$=HL_DECONNEXION]").click();
    });
}

/** 
* Ecouteur sur l'évènement click du bouton Annuler la déconnexion
*/
function EcouteurAnnulerDeconnexion() {
    $("[id$=A_ANNULER]").bind('click', function() {
        tb_remove();
    });
}

//-----------------------------------------------------------------------------------
//                                  LES FONCTIONNALITES
//-----------------------------------------------------------------------------------

/**
 * Démarrage de la page
 */
$(document).ready(function() {
    EcouteurDeconnexion();
    EcouteurAnnulerDeconnexion();
});