### INFOS page d'atterrissage Google adWord
- extraction marquage html page :
	- http://www.latelierdelucie.fr/fr/boutique/rayon_evenement.aspx?evenement_id=791
- convert HTML to slim, clean HTML (supp onclick=gga)
- bash test slim render :
	- $ slimrb -p rayEvtRw_simpl.slim test2.html
- result adwLand/HTML/src/slim/index.slim
- architecture wd :
```
├───HTML  
│   └───src  
│       ├───cat  
│       ├───images  
│       ├───js  
│       ├───scss  
│       └───slim  
├───medias  
└───ZL  
```
- 