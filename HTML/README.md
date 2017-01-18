#### Résolution problème source image
- solution 1 sur rayon id=791
- l'URL de l'images en dehors de la zone libre ne fonctionne pas.
- Solution remplacement par expression régulière de "./images/imgZL/" par :
	- <code>gulp.src(['dest/js/inject_Html.js'])  
    .pipe(replace('./images/imgZL/', 'http://www.latelierdelucie.fr/Upload/ZonesLibres/da5e4f51-dda0-421b-84a2-951865963d7a/FR/'))</code>
- Test sur un nouveau rayon id=792 (toujours sur la même enseigne)
- Utilisation de la même zone libre que pour l'évènement id=791
- l'image affichée dans la colonne de droite et visible, l'URL suivant est toujours OK :
	- <code>src="http://www.latelierdelucie.fr/Upload/ZonesLibres/da5e4f51-dda0-421b-84a2-951865963d7a/FR/kdo_2372993_WEB1.jpg"</code>

#### Questions
- Le code da5e4f51-dda0-421b-84a2-951865963d7a est il le même pour tous les pages :
- www.choixboutique.fr/fr/boutique/rayon_evenement.aspx?evenement_id=num-num-num