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
- convert CSS to SCSS
- Usage: sass-convert [options] [INPUT] [OUTPUT]
-

### architecture compléte src + render
```
│   .gitignore
│   gulpfile.js
│
├───build
│       archive.zip
│       index.css
│       index.html
│       injectHtml.js
│
├───dest
│   │   index.html
│   │
│   ├───css
│   │   │   modifTempl.css
│   │   │   NOT_IE_PositionFixed.css
│   │   │   playerVOTV.css
│   │   │   styleV4.css
│   │   │   theOnlyException.css
│   │   │
│   │   └───.maps
│   │           modifTempl.css.map
│   │           NOT_IE_PositionFixed.css.map
│   │           playerVOTV.css.map
│   │           styleV4.css.map
│   │           theOnlyException.css.map
│   │
│   ├───fonts
│   │       TheOnlyException-webfont.eot
│   │       TheOnlyException-webfont.svg
│   │       TheOnlyException-webfont.ttf
│   │       TheOnlyException-webfont.woff
│   │
│   ├───images
│   │   ├───commun
│   │   │       pix.gif
│   │   │
│   │   ├───Noel
│   │   │       bg_body-shadow.png
│   │   │       bg_texture_rx-boulesNoel15.png
│   │   │       couture.png
│   │   │
│   │   ├───telephone
│   │   │       sva-c2_payant_prixAppel.png
│   │   │       sva-left-innerglow.png
│   │   │       sva-right-innerglow.png
│   │   │
│   │   └───Version4
│   │           bg_foo-Z2.png
│   │           bg_foo-Z3.png
│   │           bg_footer-zone1-form.png
│   │           bg_footer-zone2.png
│   │           bg_header-account-puce.png
│   │           bg_header-account.png
│   │           bg_header-basket-puce.png
│   │           bg_header-basket.png
│   │           bg_header-phone.png
│   │           bg_header-search.png
│   │           bg_hpslider-title.png
│   │           bg_logo.png
│   │           bg_puce-garantie.png
│   │           flecheContactHeader.png
│   │           footer-conseilliere.jpg
│   │           pictosRayons_1.png
│   │
│   ├───js
│   │       AjoutPrdPanier.js
│   │       CataInteractif.js
│   │       common.js
│   │       Entree.js
│   │       HautMonCompte.js
│   │       injectHtml.js
│   │       jquery-1.8.3.min.js
│   │       jquery.ui.core.min.js
│   │       jquery.ui.rcarousel.min.js
│   │       jquery.ui.widget.min.js
│   │       Menu.js
│   │       PanierHaut.js
│   │       playerVOTV.js
│   │       statJS.js
│   │
│   └───Visuels
│       └───Produits
│           └───grand
│                   1017193_WEB1.jpg
│                   1019199_WEB1.jpg
│                   1028190_WEB1.jpg
│                   1029198_WEB1.jpg
│                   1157494_WEB1.jpg
│                   3231396_WEB1.jpg
│                   4032496_WEB1.jpg
│                   4064499_WEB1.jpg
│                   4389490_WEB1.jpg
│                   4390498_WEB1.jpg
│                   4742490_WEB1.jpg
│                   6352397_WEB1.jpg
│                   8394397_WEB1.jpg
│                   9671397_WEB1.jpg
│                   9690397_WEB1.jpg
│                   9693391_WEB1.jpg
│
└───src
    ├───cat
    │   └───fr
    │           AC_OETags.js
    │           MiniFlip.swf
    │           page1-1.jpg
    │           page2-1.jpg
    │           page3-2.jpg
    │           page4-1.jpg
    │           page5-2.jpg
    │           page6-1.jpg
    │           page7-2.jpg
    │           page8-1.jpg
    │           page9-2.jpg
    │
    ├───fonts
    │       TheOnlyException-webfont.eot
    │       TheOnlyException-webfont.svg
    │       TheOnlyException-webfont.ttf
    │       TheOnlyException-webfont.woff
    │
    ├───images
    │   ├───commun
    │   │       pix.gif
    │   │
    │   ├───compte
    │   ├───favicon
    │   ├───imgZL
    │   ├───Noel
    │   │       bg_body-shadow.png
    │   │       bg_texture_rx-boulesNoel15.png
    │   │       couture.png
    │   │
    │   ├───portail
    │   ├───telephone
    │   │       sva-c2_payant_prixAppel.png
    │   │       sva-left-innerglow.png
    │   │       sva-right-innerglow.png
    │   │
    │   └───Version4
    │       │   bg_foo-Z2.png
    │       │   bg_foo-Z3.png
    │       │   bg_footer-zone1-form.png
    │       │   bg_footer-zone2.png
    │       │   bg_header-account-puce.png
    │       │   bg_header-account.png
    │       │   bg_header-basket-puce.png
    │       │   bg_header-basket.png
    │       │   bg_header-phone.png
    │       │   bg_header-search.png
    │       │   bg_hpslider-title.png
    │       │   bg_logo.png
    │       │   bg_puce-garantie.png
    │       │   flecheContactHeader.png
    │       │   footer-conseilliere.jpg
    │       │   pictosRayons_1.png
    │       │
    │       └───suiviCmd
    ├───js
    │       AjoutPrdPanier.js
    │       CataInteractif.js
    │       common.js
    │       Entree.js
    │       HautMonCompte.js
    │       injectHtml.js
    │       jquery-1.8.3.min.js
    │       jquery.ui.core.min.js
    │       jquery.ui.rcarousel.min.js
    │       jquery.ui.widget.min.js
    │       Menu.js
    │       PanierHaut.js
    │       playerVOTV.js
    │       statJS.js
    │
    ├───scss
    │       modifTempl.scss
    │       NOT_IE_PositionFixed.scss
    │       playerVOTV.scss
    │       styleV4.scss
    │       theOnlyException.scss
    │
    ├───slim
    │   │   index.slim
    │   │
    │   ├───partial
    │   │       _container.slim
    │   │       _fooZone1.slim
    │   │       _fooZone2.slim
    │   │       _fooZone3.slim
    │   │       _fooZone4.slim
    │   │       _form.slim
    │   │       _gg-analyticTag.slim
    │   │       _header.slim
    │   │       _masterFormAndContent.slim
    │   │       _menu.slim
    │   │       _shadContentAndFoo.slim
    │   │       _UPP_ACCESADULTE.slim
    │   │       _UPP_DIALOGUE.slim
    │   │       _UPP_PROGRESS.slim
    │   │       _UPP_STATS.slim
    │   │       _ZL_rayevt.slim
    │   │
    │   └───var
    └───Visuels
        └───Produits
            └───grand
                    1017193_WEB1.jpg
                    1019199_WEB1.jpg
                    1028190_WEB1.jpg
                    1029198_WEB1.jpg
                    1157494_WEB1.jpg
                    3231396_WEB1.jpg
                    4032496_WEB1.jpg
                    4064499_WEB1.jpg
                    4389490_WEB1.jpg
                    4390498_WEB1.jpg
                    4742490_WEB1.jpg
                    6352397_WEB1.jpg
                    8394397_WEB1.jpg
                    9671397_WEB1.jpg
                    9690397_WEB1.jpg
                    9693391_WEB1.jpg
```