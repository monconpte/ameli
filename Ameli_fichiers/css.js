(function(a){a.forEach(function(b){if(b.hasOwnProperty("after")){return}Object.defineProperty(b,"after",{configurable:true,enumerable:true,writable:true,value:function c(){var d=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();d.forEach(function(f){var g=f instanceof Node;e.appendChild(g?f:document.createTextNode(String(f)))});this.parentNode.insertBefore(e,this.nextSibling)}})})})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);function toggleCssDetailsTab(a,b){if(a.hasClass("hidden")){effect.tweenShow(a);if(b){toggleChevron(b,true)}}else{effect.tweenHide(a);if(b){toggleChevron(b,false)}}}function toggleChevron(b,a){if(a){b.removeClass("fermer");b.setAttribute("alt",chevronMasquer);b.setAttribute("title",chevronMasquer)}else{b.addClass("fermer");b.setAttribute("alt",chevronAfficher);b.setAttribute("title",chevronAfficher)}}function toggleCssBoutonSupprimable(b,c,a){c.value=a;if(a){b.removeClass("hidden")}else{b.addClass("hidden")}}function updateBlocs(){showHideBloc("etudiant",$(context+"enfantNon").checked);showHideBloc("aideCrous",$(context+"etudiantOui").checked);showHideBloc("habiteParents",$(context+"etudiantNon").checked||$(context+"aideCrousNon").checked);showHideBloc("declarationParents",$(context+"habiteParentsNon").checked);showHideBloc("pension",$(context+"declarationParentsNon").checked);$(context+"suivant").disabled=!isPageValid()}function isPageValid(){if($(context+"enfantNon").checked){if($(context+"etudiantNon").checked){return isHabiteParentBlocValid()}if($(context+"etudiantOui").checked){if($(context+"aideCrousNon").checked){return isHabiteParentBlocValid()}return $(context+"aideCrousOui").checked}return false}return $(context+"enfantOui").checked}function isHabiteParentBlocValid(){if($(context+"habiteParentsNon").checked){if($(context+"declarationParentsNon").checked){return $(context+"pensionOui").checked||$(context+"pensionNon").checked}return $(context+"declarationParentsOui").checked}return $(context+"habiteParentsOui").checked}function updateBlocEnfant(){showHideBloc("etudiant",$(context+"enfantNon").checked);resetBtnState("etudiant");showHideBloc("aideCrous",false);showHideBloc("habiteParents",false);showHideBloc("declarationParents",false);showHideBloc("pension",false);$(context+"suivant").disabled=$(context+"enfantNon").checked}function updateBlocEtudiant(){showHideBloc("aideCrous",$(context+"etudiantOui").checked);resetBtnState("aideCrous");showHideBloc("habiteParents",$(context+"etudiantNon").checked);resetBtnState("habiteParents");showHideBloc("declarationParents",false);showHideBloc("pension",false);$(context+"suivant").disabled=true}function updateBlocCrous(){showHideBloc("habiteParents",$(context+"aideCrousNon").checked);resetBtnState("habiteParents");showHideBloc("declarationParents",false);showHideBloc("pension",false);$(context+"suivant").disabled=$(context+"aideCrousNon").checked}function updateBlocParents(){showHideBloc("declarationParents",$(context+"habiteParentsNon").checked);resetBtnState("declarationParents");showHideBloc("pension",false);$(context+"suivant").disabled=$(context+"habiteParentsNon").checked}function updateBlocDeclaration(){showHideBloc("pension",$(context+"declarationParentsNon").checked);resetBtnState("pension");$(context+"suivant").disabled=$(context+"declarationParentsNon").checked}function updateBlocPension(){$(context+"suivant").disabled=!($(context+"pensionOui").checked||$(context+"pensionNon").checked)}function showHideBloc(b,a){if(a){effect.tweenShow($(b))}else{effect.tweenHide($(b))}}function resetBtnState(a){$(context+a+"Oui").checked=false;$(context+a+"Non").checked=false}function toggleSituationFamilialeStatus(){if($(context+"numAllocataire").checked){toggleCssDetailsTab($(context+"numAllocataireDetail"))}if($(context+"situationFamiliale").checked){toggleCssDetailsTab($(context+"situationFamilialeDetail"))}}function updateSituationFamilialeBtnStatus(){var a=false;if($(context+"nationalitesSelect").value.length===0){a=true}if($(context+"numAllocataire").checked&&$(context+"saisieNumAlloc").value.trim().length!==7){a=true}if($(context+"situationFamiliale").checked&&$(context+"situationFamilialeSelect").value.length===0){a=true}$(context+"suivant").disabled=a}function initPopinSupprimerAyantDroitComposition(b,a){$("popinText").innerHTML=b;$("indexAD").value=a;window.location.href="#suppressionFoyer"}function supprimerAyanDroitComposition(){var a=$("indexAD").value;toggleCssBoutonSupprimable($(context+"ayantDroitBtn"+a),$(context+"ayantDroitActif"+a),false);window.location.href="#"}function initPopinSupprimerMembre(b,a){$("indexMembre").value=b;$("isAyantDroit").value=a;window.location.href="#suppressionFoyer"}function supprimerMembre(){var a=$("isAyantDroit").value;var b=$("indexMembre").value;if(a==="true"){$(context+"actifBenef_"+b).value=false;effect.tweenHide($("personne_"+b))}else{$(context+"actifBenefB_"+b).value=false;effect.tweenHide($("personneB_"+b))}hideFooter();window.location.href="#"}function getCurrentCount(){return $("foyer").getElements('[id^="personneB"]').length-1}function controleAjouterPersonne(){var d=$("foyer").getElements('[id^="personne"]').length;var a=$("foyer").getElements('[id^="personne"].hidden').length;var c=d-a;var b;if(c==20){b=false}else{b=true}return b}function ajouterPersonneFoyer(){var c=controleAjouterPersonne();if(c){var g=$("foyer").getElements('[id^="personneB"]').length;var a=$("foyer").getElements('[id^="personneB"].hidden').length;var d=getCurrentCount();var f=d+1;var b=$("foyer").getElements('[id^="personneB"]').getLast();var e=b.clone(true,true);b.parentNode.insertBefore(e,b.nextSibling);e.setProperty("id",e.getProperty("id").replace("_"+d,"_"+f));e.getElements("label").each(function(m,k){var h=$(m);h.setProperty("for",h.getProperty("for").replace("_"+d,"_"+f));h.setProperty("id",h.getProperty("id").replace("_"+d,"_"+f))});e.getElements("input").each(function(h,k){var l=$(h);l.setProperty("id",l.getProperty("id").replace("_"+d,"_"+f));l.setProperty("name",l.getProperty("name").replace("["+d,"["+f));l.setProperty("value","")});e.getElementById("demandecssRsaB_"+f).setProperty("value","on");e.getElementById("demandecssGardeB_"+f).setProperty("value","on");e.getElementById("demandecssComplementaireB_"+f).setProperty("value","on");e.getElementById("demandecssDateNaissanceB_"+f).setProperty("value","");e.getElementById("demandecssDateNaissanceB_"+d+"_calendrier").dispose();new DatePicker("demandecssDateNaissanceB_"+f,{toggle:"demandecssDateNaissanceB_"+f+"_calendrier",pickerClass:"datepicker dpstandard",linkTitle:"Aide � la saisie de date"});$(context+"NomB_"+f).addEvent("input",function(){formatteNomPrenom($(context+"NomB_"+f))});$(context+"PrenomB_"+f).addEvent("input",function(){formatteNomPrenom($(context+"PrenomB_"+f))});new Formatter($(context+"NirB_"+f),{pattern:"{{999999*999999}}"});new Formatter($(context+"CleNirB_"+f),{pattern:"{{99}}"});new Formatter($(context+"CafB_"+f),{pattern:"{{9999999}}"});e.getElements("select").each(function(h,k){var l=$(h);l.setProperty("id",l.getProperty("id").replace("_"+d,"_"+f));l.setProperty("name",l.getProperty("name").replace("["+d,"["+f));l.setProperty("value","")});e.getElements("img").each(function(h,k){var l=$(h);l.setProperty("id",l.getProperty("id").replace("_"+d,"_"+f))});$(context+"actifBenefB_"+f).checked=true;$(context+"actifBenefB_"+f).value=true;$(context+"benefConnuB_"+f).value=false;$("personneB_"+f).removeClass("hidden");$("poubelleB_"+f).addEvent("click",function(){initPopinSupprimerMembre(f,"false")});$("poubelleB_"+f).addEvent("keypress",function(){initPopinSupprimerMembre(f,"false")});$(context+"RsaB_"+f).checked=false;$(context+"ComplementaireB_"+f).checked=false;$(context+"GardeB_"+f).checked=false;$("foyerNotes").setStyle("visibility","visible");$("personneB_"+f).style.display="flex";$("bulleAideNirB_"+f).addEvent("click",function(){var h=$("bulleAideNirB_"+f).getBoundingClientRect();initPopinAideNir(h.left,h.top)});$("bulleAideNirB_"+f).addEvent("keypress",function(){var h=$("bulleAideNirB_"+f).getBoundingClientRect();initPopinAideNir(h.left,h.top)})}else{if($("divErreurFoyer")!=null){effect.tweenHide($("divErreurFoyer"))}if($("divErreurObligatoire")!=null){effect.tweenHide($("divErreurObligatoire"))}effect.tweenShow($("erreurAjoutPersonne"));document.body.scrollTop=document.documentElement.scrollTop=0}}function initPopinAideNir(b,a){$("popupAide").style.position="fixed";$("popupAide").setStyle("z-index","101");$("popupAide").setStyle("left",(b+10));$("popupAide").setStyle("top",(a+10));window.location.href="#popupAide"}function formatteNomPrenom(d){const c=/[0-9]/;if(event.data&&event.data.match(c)){d.value=d.value.replace(c,"")}var b=d.selectionStart;var a=d.selectionEnd;d.value=d.value.toUpperCase();d.setSelectionRange(b,a)}function checkField(){const b=/[^0-9]/;const a=5;var c=$(context+"CafB_"+newCount).value;if(caf.length>a){caf=caf.slice(0,a)}if(event.data&&event.data.match(b)){caf=caf.replace(b,"")}$(context+"CafB_"+newCount).value=caf}function hideFooter(){var a=$("foyer").getElements('[id^="personne"]').length-$("foyer").getElements('[id^="personne"].hidden').length;if(a==0){$("foyerNotes").setStyle("visibility","hidden")}else{$("foyerNotes").setStyle("visibility","visible")}}function addRequiredSelect(a){$(context+a).setAttribute("aria-required",true)}function validerRetour(){$(context+"actionEvt").value="Retour";$(context+"demandeCssForm").submit()}function createDatePicker(){document.getElements("[id^='demandecssDateNaissance_']").each(function(d,c){var b=document.createElement("a");b.id="demandecssDateNaissance_"+getCurrentCount()+"_calendrier";b.className="calendrier inactif";b.tabIndex="-1";d.parentElement.appendChild(b)})}Element.implement({closest:function(b){var c=this.getElement(b),a=this;while(a&&!c){a=a.getParent();c=a?a.getElement(b):null}return c}});function affichage_rechercheOrganisme(d,a,e){var b=e.contains("_")?"_"+e.split("_").pop():"";b=e.contains("B_")?"B"+b:b;var c=document.getElementById("champsRechercheOrganisme"+b);if(!d){removeOrganismeChoisi(b);resultatPrecedent=c.getElementsByClassName("resultatPrecedent");for(j=0;j<resultatPrecedent.length;j++){resultatPrecedent[j].style.display="none"}selected=c.getElementsByClassName("selected");for(j=0;j<selected.length;j++){selected[j].removeClass("selected")}}}function rechercheAutoParDepartement(a){var b=false;document.getElementById(context+"choixAutreMutuelle").addEventListener("click",function(){if(!b){this.parentElement.parentElement.getElementById("champsRechercheOrganisme").getElementsByClassName("departement")[0].getElementsByClassName("titre")[0].click();document.getElementById("demandecssrechercheDepartement").value=a;rechercher("demandecssrechercheDepartement",a);b=true}})}function autoriserSuivantChoixOrganisme(c,b,a){if(c||b||a){$(context+"suivant").disabled=false}else{$(context+"suivant").disabled=true}}function removeCheck(a){if($(a).checked==true){$(a).checked=false}}function removeOrganismeChoisi(a){if(a===""){document.getElementById(context+"organismeChoisi").value=null;autoriserSuivantChoixOrganisme($(context+"choixCaisse"+a).checked,$(context+"choixAutreMutuelle"+a).checked&&$(context+"organismeChoisi"+a).value.trim().length>0,$(context+"choixMutuelle"+a).checked)}else{document.getElementById(context+"organismeChoisi"+a).value=null}}function delay(c,a){if(b){window.clearTimeout(b)}var b=window.setTimeout(function(){b=null;c()},a)}function gestionAccordeonsNoms(){var a=document.getElementsByClassName("cssNom");for(var b=0;b<a.length;b++){a[b].addEventListener("click",function(){this.classList.toggle("accNomActive");var c=this.parentElement.nextElementSibling;if(c.style.maxHeight){c.style.maxHeight=null}else{c.style.maxHeight="100%"}var d=this.parentElement.parentElement;var f=d.getAttribute("id");var e=f.contains("_")?"_"+f.split("_").pop():"";e=f.contains("B_")?"B"+e:e;if($(context+"choixAutreMutuelle"+e).checked){effect.tweenShow($("champsRechercheOrganisme"+e))}else{effect.tweenHide($("champsRechercheOrganisme"+e))}})}}function gestionAccordeonsCategories(){var b=document.getElementsByClassName("titre");var a;for(a=0;a<b.length;a++){b[a].addEventListener("click",function(){var g=$(this).closest(".blocViolet").id;var f=this.classList.contains("accActive");var k=document.getElementById(g).getElementsByClassName("rechercheConteneur");for(var e=0,c=k.length;e<c;e++){k[e].classList.remove("opened")}var h=document.getElementById(g).getElementsByClassName("accActive");for(var e=0,c=h.length;e<c;e++){h[e].classList.remove("accActive")}if(f){var d=this.nextElementSibling;d.classList.remove("opened")}else{this.classList.add("accActive");var d=this.nextElementSibling;if(d.classList.contains("opened")){d.classList.remove("opened")}else{d.classList.add("opened")}}})}}function ajouterResultatsHtml(c,b,e,a){var d=document.createElement("div");d.id="resultat_"+c;d.classList.add("resultatRecherche");orgName=document.createElement("p");orgName.textContent=b[c].organisme.nom;orgName.classList.add("nomOrg");orgAddr=document.createElement("p");orgAddr.textContent=b[c].adresse+", "+b[c].codePostal+", "+b[c].ville;orgAddr.classList.add("adresse");d.appendChild(orgName);d.appendChild(orgAddr);document.getElementById(e).parentElement.parentElement.getElementsByClassName("resultatContenu"+a)[0].appendChild(d)}function feedResults(a,c,f){var e=a.contains("_")?"_"+a.split("_").pop():"";e=a.contains("B_")?"B"+e:e;if(f===0){removeOrganismeChoisi(e)}var k=document.getElementsByClassName("resultatTitre");for(var b=0;b<k.length;b++){k[b].style.display="block"}previousSearch=document.getElementsByClassName("resultatContenu"+e);for(var d=0;d<previousSearch.length;d++){previousSearch[d].innerText=""}if(c.length===0){var g=document.getElementById(a).parentElement.parentElement.getElementsByClassName("pasDeResultat")[0];g.style.display="block";var h=document.getElementById(a).parentElement.parentElement.getElementsByClassName("recherchePlus")[0];h.style.display="none";return}else{var g=document.getElementsByClassName("pasDeResultat");for(var b=0;b<g.length;b++){g[b].style.display="none"}}for(var d=f;(d<f+3&&d<c.length);d++){ajouterResultatsHtml(d,c,a,e);document.getElementById(a).parentElement.parentElement.getElementById("resultat_"+d).addEventListener("click",function(){selected=document.getElementById(a).parentElement.parentElement.getElementsByClassName("selected");for(b=0;b<selected.length;b++){selected[b].classList.remove("selected")}this.classList.add("selected");document.getElementById(a).closest(".blocViolet").getElementById(context+"organismeChoisi"+e).setAttribute("value",this.id);document.getElementById(a).parentElement.parentElement.parentElement.parentElement.parentElement.getElementById(context+"organismeChoisi"+e).value=this.id;autoriserSuivantChoixOrganisme($(context+"choixCaisse"+e).checked,$(context+"choixAutreMutuelle"+e).checked&&$(context+"organismeChoisi"+e).value.trim().length>0);resultatPrecedent=document.getElementById(a).parentElement.parentElement.parentElement.parentElement.getElementsByClassName("resultatPrecedent");for(b=0;b<resultatPrecedent.length;b++){resultatPrecedent[b].style.display="none"}})}var h=document.getElementById(a).parentElement.parentElement.getElementsByClassName("recherchePlus")[0];h.onclick=function(){feedResults(a,c,f+3)};if(c[d+1]!==undefined){h.style.display="flex"}else{h.style.display="none"}}function appelActionRecherche(d,c){var b={};if(d.contains("_")){var a=d.split("_");b[a[0]]=c}else{b[d]=c}if(d.contains("_")){b.who=d.split("_").pop();if(d.contains("B_")){b.who="B"+b.who}}new Request({method:"POST",url:"/PortailAS/portlets/demandecss/demandecss.do?actionEvt=demandecssrechercheOrganisme",data:b,onSuccess:function(f,g){var e=JSON.parse(f);feedResults(d,e.resultats,0)},onFailure:function(e){}}).send()}function rechercher(b,a){if(b.contains("demandecssrechercheDepartement")&&!a.startsWith("97")&&a.length>1){appelActionRecherche(b,a)}else{if(a.length>2){appelActionRecherche(b,a)}}}function rechercheAutoParMutuelle(){document.getElementById("demandecsschoixAutreMutuelle").checked=true;document.getElementById("champsRechercheOrganisme").getElementsByClassName("titre")[0].click();document.getElementById("demandecssrechercheOrganisme").value=libelleMutuelle;rechercher("demandecssrechercheOrganisme",libelleMutuelle)}function debounce(d,f,b,c){var a;var e=null;return function(){var g=c||this,l=arguments;var k=function(){e=null;if(!b){a=d.apply(g,l)}};var h=b&&!e;clearTimeout(e);e=setTimeout(k,f);if(h){a=d.apply(g,l)}return a}}function traiterEvenement(){rechercher(this.id,this.value)}var traiterEvenementDebounce=debounce(traiterEvenement,500);function rechercheAsynchrone(b){for(var a=0;a<b.length;a++){b[a].addEventListener("keyup",traiterEvenementDebounce)}}function gestionChoixCommun(){if($(context+"choixOrganismeCommun").checked){var d=context+"choixAutreMutuelle";choixAutreMutuelle=document.getElements("[id^="+d+"]");for(var b=0;b<choixAutreMutuelle.length;b++){var e=choixAutreMutuelle[b].getAttribute("id");var a=e.contains("_")?"_"+e.split("_").pop():"";a=e.contains("B_")?"B"+a:a;choixAutreMutuelle[b].checked=false;choixAutreMutuelle[b].value=false;affichage_rechercheOrganisme(false,choixAutreMutuelle[b],a);var c=document.getElementById("champsRechercheOrganisme"+a);effect.tweenHide(c)}d=context+"choixCaisse";choixCaisse=document.getElements("[id^="+d+"]");for(var b=0;b<choixCaisse.length;b++){choixCaisse[b].checked=false;choixCaisse[b].value=false}}}var index_resultat=0;function affiche_resultat_premiere(){if($(context+"organismeChoisi").value.trim().length>0){index_resultat=$(context+"organismeChoisi").value;document.getElementById("resultat_"+index_resultat).addClass("selected");var a=0;while(a<3&&index_resultat<tailleListeMutuelle){document.getElementById("resultat_"+index_resultat).removeClass("hidden");a=a+1;index_resultat++}$(context+"suivant").disabled=false}else{var a=0;while(a<3&&a<tailleListeMutuelle){document.getElementById("resultat_"+a).removeClass("hidden");a=a+1}index_resultat=a}document.getElementById("recherchePlus").style.display="flex";if(index_resultat<3){document.getElementById("recherchePlus").style.display="none"}var b=document.getElementById("recherchePlus");b.onclick=function(){affiche_resultats_suivant()}}function affiche_resultats_suivant(){var a=0;($("resultat_"+(index_resultat-1))).addClass("hidden");($("resultat_"+(index_resultat-2))).addClass("hidden");($("resultat_"+(index_resultat-3))).addClass("hidden");if(index_resultat==tailleListeMutuelle){index_resultat=0}while(a<3&&index_resultat<tailleListeMutuelle){($("resultat_"+index_resultat)).removeClass("hidden");a=a+1;index_resultat++}}function selectionneResultat(a){var b=document.getElementsByClassName("selected");while(b[0]){b[0].classList.remove("selected")}($("resultat_"+a)).addClass("selected");$(context+"organismeChoisi").setAttribute("value",a);$(context+"suivant").disabled=false}function openBienImmobilier(){var a=$(context+"idBienImmobilier").value;if(a==="true"){effect.tweenShowInline($(context+"idBien0"));$("ajoutBien0").removeClass("hidden")}else{for(i=0;i<nbMaxSituationFiscale;i++){effect.tweenHide($(context+"idBien"+i));ResetChampUploadPJCSS("TaxeFonciere",i);ResetChampUploadPJCSS("TaxeHabitation",i)}}}function openNextBienImmobilier(){for(i=1;i<=nbMaxBien;i++){if($(context+"idBien"+i).hasClass("hidden")){effect.tweenShowInline($(context+"idBien"+i));$("ajoutBien"+(i-1)).addClass("hidden");$(context+"idSupprimerBien"+i).removeClass("hidden");if(i!=1){$(context+"idSupprimerBien"+(i-1)).addClass("hidden")}break}}}function closeBien(a){$(context+"NomBien"+a).value="";$(context+"idFichierTaxeFonciere"+a).value="";$(context+"idFichierTaxeHabitation"+a).value="";$(context+"idSupprimerBien"+a).addClass("hidden");if(a!=1){$(context+"idSupprimerBien"+(a-1)).removeClass("hidden")}$("ajoutBien"+(a-1)).removeClass("hidden");effect.tweenHide($(context+"idBien"+a));ResetChampUploadPJCSS("TaxeFonciere",a);ResetChampUploadPJCSS("TaxeHabitation",a)}function openNextSituationFiscale(b){var a=b+1;effect.tweenShowInline($(context+"idSituationFiscale"+a));$("ajoutSituationFiscale"+b).addClass("hidden");if(a<nbMaxSituationFiscale-1){$("ajoutSituationFiscale"+a).removeClass("hidden")}}function openSituationFiscale(){var a=$(context+"idSituationFiscale").value;if(a==="true"){effect.tweenShowInline($(context+"idSituationFiscale0"));$("ajoutSituationFiscale0").removeClass("hidden")}else{for(i=0;i<nbMaxSituationFiscale;i++){effect.tweenHide($(context+"idSituationFiscale"+i));ResetChampUploadPJCSS("SituationFiscale",i)}}}function ResetChampUploadPJCSS(b,a){$(context+"idFichier"+b+a).value="";$(context+"idImageErreurFichier"+b+a).addClass("iconeCache");$(context+"idImageValideFichier"+b+a).addClass("iconeCache");$(context+"idChampFichier"+b+a).addClass("hidden");$(context+"idChampFichier"+b+a).removeClass("encadre_erreur");$(context+"idFichier"+b+a).removeClass("r_file_css_ko");$(context+"idSupprimerFichier"+b+a).addClass("hidden");$(context+"idFichier"+b+a+"_messageErreur").innerHTML="";afficherSuitePJCSS()}function upload(a,b){return new Promise(function(e,d){var c=document.getElementsByClassName("encadre_erreur");while(c[0]){c[0].classList.add("hidden");c[0].classList.remove("encadre_erreur")}$("idErreurFichierCSS").style.display="none";$(context+"idFichier"+a+"_messageErreur").innerHTML="";$(context+"idSupprimerFichier"+a).removeClass("hidden");verificationUploadPJ(context,a,"encadre_erreur",afficherSuitePJCSS,"",b,"").then(function(){e(1)})})}function gereMessageErreur(a,b){if($(context+"idFichier"+a+"_messageErreur").innerHTML==""){$(context+"idFichier"+a+"_messageErreur").addClass("message_erreur_invisible");$(context+"idImageErreurFichier"+a).addClass("iconeCache");if($(context+"idFichier"+a).value==""){$(context+"idImageErreurFichier"+a).addClass("iconeCache")}else{$(context+"idImageValideFichier"+a).removeClass("iconeCache")}document.getElementById(context+"idChampFichier"+a).erase("class")}else{$(context+"idImageErreurFichier"+a).removeClass("iconeCache");$(context+"idImageValideFichier"+a).addClass("iconeCache");$(idErreurFichierCSS).style.display=""}}function uploadPJCSS(a,b){upload(a,b).then(function(){gereMessageErreur(a,b)})}function afficherSuitePJCSS(){var c=true;var d=0;var b=document.getElementsByClassName("message_erreur");for(var a=0;a<b.length;a++){if(b[a].innerHTML!=""){d=d+1}}if(d==0){c=false}}function verifierAI(){if(($(context+"idFichierAvisImpositionAssure").value=="")||($(context+"idFichierAvisImpositionAssure_messageErreur").innerHTML!="")){$(idErreurFichierCSS).style.display="";$(context+"idFichierAvisImpositionAssure_messageErreur").removeClass("message_erreur_invisible");$(context+"idFichierAvisImpositionAssure_messageErreur").innerHTML=erreurFichierObligatoire;$(context+"idChampFichierAvisImpositionAssure").addClass("encadre_erreur");$(context+"idChampFichierAvisImpositionAssure").removeClass("hidden")}else{$(context+"actionEvt").value="Suivant";$(context+"demandeCssForm").submit()}}function toggleRessourcesCss(){if($(context+"aucuneAutreRessourceCss").checked){var c=document.getElementsByClassName("boutonSupprimableBlanc");for(var a=0;a<c.length;a++){if(!c[a].classList.contains("hidden")){var b=document.getElementById(c[a].id+"Selected");toggleCssBoutonSupprimable(c[a],b,false)}}}}function updateAutresRessources1BtnSuivantStatus(){var b=true;if($(context+"aucuneAutreRessourceCss").checked){b=false}else{var c=document.getElementsByClassName("boutonSupprimableBlanc");for(var a=0;a<c.length;a++){if(!c[a].hasClass("hidden")){b=false;break}}}$(context+"suivant").disabled=b}function ajouterAutreRessourceCss(a){if($(context+"aucuneAutreRessourceCss").checked){$(context+"aucuneAutreRessourceCss").checked=false}toggleCssBoutonSupprimable($(context+a),$(context+a+"Selected"),true)}function supprimerAutreRessourceCss(a){toggleCssBoutonSupprimable($(context+a),$(context+a+"Selected"),false)}function validateMontant(b){var a=removeEuroSymbol(b.value);var c=/[\D]/g;if(a.match(c)){b.value=a.replace(c,"");if($(b.id+"Erreur").hasClass("hidden")){b.addClass("erreur_montant");effect.tweenShow($(b.id+"Erreur"))}}else{if(!$(b.id+"Erreur").hasClass("hidden")){b.removeClass("erreur_montant");effect.tweenHide($(b.id+"Erreur"))}}}function removeEuroSymbol(a){if(a.endsWith(euroSuffix)){return a.replace(euroSuffix,"")}return a}function addEuroSymbol(a){if(a.length!==0&&!a.endsWith(euroSuffix)){return a.concat(euroSuffix)}return a}function addEuroSymbolsToMontants(){var a=document.getElementsByClassName("saisieMontant");for(var b=0;b<a.length;b++){a[b].value=addEuroSymbol(a[b].value)}}function updateDeclaRessourcesDiversesBtnSuivantStatus(){var d=false;var b=document.getElementsByClassName("saisieMontant");var a=document.getElementsByClassName("saisieNature");for(var c=0;c<b.length;c++){if(b[c].value.trim().length===0){d=true;break}}for(var c=0;c<a.length;c++){if(a[c].value.trim().length===0){d=true;break}}$(context+"suivant").disabled=d}function addEscapeAndPlaceholdersToTextField(a){addEscapeAndPlaceholders(a,"saisieMontant");addEscapeAndPlaceholders(a,"saisieNature")}function addEscapeAndPlaceholders(e,c){var a=document.getElementsByClassName(c);for(var b=0;b<a.length;b++){var d=a[b];d.setAttribute("aria-required",e);if(d.hasClass("saisieMontant")){d.placeholder=montantPlaceholder+euroSuffix;d.setAttribute("aria-describedby",a[b].id+"Erreur")}}}function toogleAutreDureeIndep(a,b){if(b.checked){b.checked=false;toggleCssDetailsTab(a)}}function refreshToggledDureesTabStatus(a){if($(context+"moins2Ans"+a).checked){toggleCssDetailsTab($(context+"moins2Ans"+a+"_Detail"))}if($(context+"plus2Ans"+a).checked){toggleCssDetailsTab($(context+"plus2Ans"+a+"_Info"))}}function updateDeclaRessourcesIndepNonGerantsBtnSuivantStatus(){var c=false;var b=document.getElementsByClassName("declaRessourcesBenef");for(var a=0;a<b.length;a++){if(!isBenefIndepNonGerantsComplet(b[a])){c=true;break}}$(context+"suivant").disabled=c}function isBenefIndepNonGerantsComplet(b){var c=b.getElementsByClassName("indepNonGerantsDuree");for(var a=0;a<c.length;a++){if(c[a].checked){return true}}return false}function updateDeclaRessourcesIndepGerantsBtnSuivantStatus(){var c=false;var b=document.getElementsByClassName("declaRessourcesBenef");for(var a=0;a<b.length;a++){if(!isBenefIndepGerantsComplet(b[a])){c=true;break}}$(context+"suivant").disabled=c}function isBenefIndepGerantsComplet(d){var e=d.getElementsByClassName("indepGerantsDuree");for(var c=0;c<e.length;c++){var b=e[c];if(b.checked){if(b.id.contains("moins2Ans")){var a=$(b.id+"_Detail").getElementsByClassName("impotDetail");for(var c=0;c<a.length;c++){if(!isImpotComplet(a[c])){return false}}}return true}}return false}function isImpotComplet(b){if(b.checked){var a=$(b.id+"_montant").value;if(a.trim().length===0){return false}}return true}function refreshToggledImpotsTabStatus(a){if($(context+"impotRevenu"+a).checked){toggleCssDetailsTab($(context+"impotRevenu"+a+"_Detail"))}if($(context+"impotSocietes"+a).checked){toggleCssDetailsTab($(context+"impotSocietes"+a+"_Detail"))}}function addRequiredToField(a){a.setAttribute("aria-required",true)}function autoriserBoutonSuivantCaseACocher(a){$(context+"suivant").disabled=!($(a).checked)};