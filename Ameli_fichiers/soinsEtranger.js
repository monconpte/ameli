(function(a){a.forEach(function(b){if(b.hasOwnProperty("after")){return}Object.defineProperty(b,"after",{configurable:true,enumerable:true,writable:true,value:function c(){var d=Array.prototype.slice.call(arguments),e=document.createDocumentFragment();d.forEach(function(f){var g=f instanceof Node;e.appendChild(g?f:document.createTextNode(String(f)))});this.parentNode.insertBefore(e,this.nextSibling)}})})})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);function openInfoAvantSoinsEtranger(){if($("avantCommencer").hasClass("hidden")){chevronMasquer($("chevronSoinEtrangerInfo"));effect.tweenShowInline($("avantCommencer"));if(!$("soinsProgrammes").hasClass("hidden")){effect.tweenHide($("soinsProgrammes"));chevronAfficher($("chevronSoinEtrangerProgrammes"))}if(!$("detachementProfessionel").hasClass("hidden")){effect.tweenHide($("detachementProfessionel"));chevronAfficher($("chevronSoinEtrangerDetachement"))}if(!$("nombreuxDocuments").hasClass("hidden")){effect.tweenHide($("nombreuxDocuments"));chevronAfficher($("chevronSoinEtrangerNbDocs"))}}else{chevronAfficher($("chevronSoinEtrangerInfo"));effect.tweenHide($("avantCommencer"))}}function openInfoProgrammesSoinsEtranger(){if($("soinsProgrammes").hasClass("hidden")){chevronMasquer($("chevronSoinEtrangerProgrammes"));effect.tweenShowInline($("soinsProgrammes"));if(!$("avantCommencer").hasClass("hidden")){effect.tweenHide($("avantCommencer"));chevronAfficher($("chevronSoinEtrangerInfo"))}if(!$("detachementProfessionel").hasClass("hidden")){effect.tweenHide($("detachementProfessionel"));chevronAfficher($("chevronSoinEtrangerDetachement"))}if(!$("nombreuxDocuments").hasClass("hidden")){effect.tweenHide($("nombreuxDocuments"));chevronAfficher($("chevronSoinEtrangerNbDocs"))}}else{chevronAfficher($("chevronSoinEtrangerProgrammes"));effect.tweenHide($("soinsProgrammes"))}}function openInfoDetachementSoinsEtranger(){if($("detachementProfessionel").hasClass("hidden")){chevronMasquer($("chevronSoinEtrangerDetachement"));effect.tweenShowInline($("detachementProfessionel"));if(!$("soinsProgrammes").hasClass("hidden")){effect.tweenHide($("soinsProgrammes"));chevronAfficher($("chevronSoinEtrangerProgrammes"))}if(!$("avantCommencer").hasClass("hidden")){effect.tweenHide($("avantCommencer"));chevronAfficher($("chevronSoinEtrangerInfo"))}if(!$("nombreuxDocuments").hasClass("hidden")){effect.tweenHide($("nombreuxDocuments"));chevronAfficher($("chevronSoinEtrangerNbDocs"))}}else{chevronAfficher($("chevronSoinEtrangerDetachement"));effect.tweenHide($("detachementProfessionel"))}}function openInfoNbDocsSoinsEtranger(){if($("nombreuxDocuments").hasClass("hidden")){chevronMasquer($("chevronSoinEtrangerNbDocs"));effect.tweenShowInline($("nombreuxDocuments"));if(!$("soinsProgrammes").hasClass("hidden")){effect.tweenHide($("soinsProgrammes"));chevronAfficher($("chevronSoinEtrangerProgrammes"))}if(!$("detachementProfessionel").hasClass("hidden")){effect.tweenHide($("detachementProfessionel"));chevronAfficher($("chevronSoinEtrangerDetachement"))}if(!$("avantCommencer").hasClass("hidden")){effect.tweenHide($("avantCommencer"));chevronAfficher($("chevronSoinEtrangerInfo"))}}else{chevronAfficher($("chevronSoinEtrangerNbDocs"));effect.tweenHide($("nombreuxDocuments"))}}function openSoinsEtrangerChevron(c,b,a,d){if($(c).hasClass("hidden")){chevronMasquer($("chevronSoinsEtranger"+c));effect.tweenShowInline($(c));closeSoinsEtrangerAutreChevron(b);closeSoinsEtrangerAutreChevron(a);closeSoinsEtrangerAutreChevron(d)}else{chevronAfficher($("chevronSoinsEtranger"+c));effect.tweenHide($(c))}}function closeSoinsEtrangerAutreChevron(a){if(!$(a).hasClass("hidden")){effect.tweenHide($(a));chevronAfficher($("chevronSoinsEtranger"+a))}}function chevronAfficher(a){a.style.transform="rotate(0deg)";a.setAttribute("alt",popinChevronAfficher);a.setAttribute("title",popinChevronAfficher)}function chevronMasquer(a){a.style.transform="rotate(180deg)";a.setAttribute("alt",popinChevronMasquer);a.setAttribute("title",popinChevronMasquer)}function initBtChoixSujetSuivantSoinsEtranger(){var b=false;if($(context+"idChoixNationalite2").checked){if($(context+"nationalitesSelect").value.length===0){b=true}}else{if((!$(context+"idChoixNationalite0").checked)&&(!$(context+"idChoixNationalite1").checked)){b=true}}if($(context+"idChoixSituation6").checked){if($(context+"saisieSituationAutre").value.length<5){b=true}}else{var a=false;for(j=0;j<6;j++){if($(context+"idChoixSituation"+j).checked){a=true}}if(!a){b=true}}$(context+"suivant").disabled=b}function updatePrecisionStatus(){updateNbCaracPrecision();updateNbCaracPrecisionColor()}function updateNbCaracPrecision(){$(context+"idNbCarac").textContent=getSituationAdminLength()}function updateNbCaracPrecisionColor(){var c=getSituationAdminLength()>maxLengthPrecision;var b=getSituationAdminLength()<minLengthPrecision;var a="black";if(c||b){a="red"}$(context+"idNbCarac").style.color=a}function getSituationAdminLength(){var a=$(context+"saisieSituationAutre").value;a=a.replace(/[\r\n]+/gm," ");return a.length}function toggleElementSoinsEtranger(){if($(context+"idChoixNationalite2").checked){toggleNationaliteDetailsTab(2,$(context+"nationaliteAutreDetail"))}if($(context+"idChoixSituation6").checked){toggleSituationDetailsTab(6,$(context+"idPrecision"))}}function toggleNationaliteDetailsTab(a,b){toggleElement(a,2,b)}function toggleSituationDetailsTab(a,b){toggleElement(a,6,b)}function toggleElement(a,c,b){if(a==c){if(b.hasClass("hidden")){effect.tweenShow(b)}}else{effect.tweenHide(b)}}function initPageSoinsBeneficiaires(){$(context+"idPrecisionSoins").placeholder=placeholderTextArea;$(context+"idPrecisionSoins").maxLength=maxLength;$(context+"idPrecisionSoins").setAttribute("aria-required",true);$(context+"idPrecisionSoins").setAttribute("aria-describedby","idErreurInfo");$(context+"idMaxCarac").textContent="/"+maxLength+" "+caracteres;boutonDisabledSoinsBeneficiaires()}function getPrecisionSoinsLength(){var a=$(context+"idPrecisionSoins").value;a=a.replace(/[\r\n]+/gm," ");return a.length}function updatePagePrecisionsSoins(){updateNbCaracPrecisionSoins();boutonDisabledSoinsBeneficiaires();updateNbCaracColorPrecisionSoins()}function updatePrecisionsSoins(){updateNbCaracPrecisionSoins();updateNbCaracColorPrecisionSoins()}function updateNbCaracPrecisionSoins(){$(context+"idNbCarac").textContent=getPrecisionSoinsLength()}function updateNbCaracColorPrecisionSoins(){var c=getPrecisionSoinsLength()>maxLength;var b=getPrecisionSoinsLength()<minLength;var a="black";if(c||b){a="red"}$(context+"idNbCarac").style.color=a}function boutonDisabledSoinsBeneficiaires(){var c=true;var d=$(context+"idListeBeneficiairesLength").value;var a=$(context+"idListeNatureSoinsLength").value;var b=false;var e=false;for(j=0;j<d;j++){if($(context+"selectionBenefId"+j).checked){e=true}}for(j=0;j<a;j++){if($(context+"idChoixNature"+j).checked){b=true;if($(context+"idChoixNature"+j).value==="ATMP"){b=($(context+"saisieDateMaladiePro").value.length>0)}if($(context+"idChoixNature"+j).value==="TIERS"){b=($(context+"saisieDateAccidentTiers").value.length>0)}}}if($(soinsEtrangerForm.beneficiaireSelectionneChaine)!=""&&(getPrecisionSoinsLength()>=minLength)&&($(context+"montantSoins").value.length>0)&&($(context+"montantSoins").value.replace(",",".")>=0)&&($(soinsEtrangerForm.natureSoins)!="")&&$(context+"montantSelect").value!=""&&$(context+"montantSelect").value!="Separateur"&&e&&b){c=false}$(context+"suivant").disabled=c}function toggleElementSoinsEtrangerBeneficiaires(){if($(context+"idChoixNature3").checked){toggleDateSoinsEtrangerMaladiePro(3,$(context+"idDateMaladiePro"))}if($(context+"idChoixNature4").checked){toggleDateSoinsEtrangerAccidentTiers(4,$(context+"idDateAccidentTiers"))}}function toggleDateSoinsEtrangerMaladiePro(a,b){toggleElement(3,a,b)}function toggleDateSoinsEtrangerAccidentTiers(a,b){toggleElement(4,a,b)}function setInputFilter(b,a){["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach(function(c){b.addEventListener(c,function(){if(a(this.value)){this.oldValue=this.value;this.oldSelectionStart=this.selectionStart;this.oldSelectionEnd=this.selectionEnd}else{if(this.hasOwnProperty("oldValue")){this.value=this.oldValue;this.setSelectionRange(this.oldSelectionStart,this.oldSelectionEnd)}else{this.value=""}}})})}function autoriserSuivantPjSoinsEtranger(){var b=false;var c=$(context+"idFichier0");var a=($(pcPageEnCours+"idChampFichier"+0).classList.contains("r_file_selected")||$(pcPageEnCours+"idFichier"+0+"_messageErreur").innerHTML=="");if(!($(context+"attesterExactitude").checked)||!($(context+"attesterOriginaux").checked)||!a||c.value==""){b=true}$(context+"suivant").disabled=b}function boutonDisabledPjSoinsEtranger(){var b=numeroFichier;if($(pcPageEnCours+"idChampFichier"+b).classList.contains("r_file_selected")||$(pcPageEnCours+"idFichier"+b+"_messageErreur").innerHTML==""){var d=false;var f=false;var a=nbMaxPiecesJointes;var c=0;for(c=0;c<=a;c++){var e=$(context+"idFichier"+c);if(e.value!=""){f=true}}if(!f||!afficherSuiteUploadSoinsEtranger(b,a)){d=true}autoriserSuivantPjSoinsEtranger()}else{$(context+"idChampFichier"+b).style.display="";document.body.scrollTop=document.documentElement.scrollTop=0}}function afficherSuiteUploadSoinsEtranger(c,a){if($(pcPageEnCours+"idChampFichier"+c).classList.contains("r_file_selected")||$(pcPageEnCours+"idFichier"+c+"_messageErreur").innerHTML==""){for(var d=0;d<=a;d++){$("pjTelecharge"+d).addClass("hidden");$(context+"idSupprimerFichierSoinsEtranger"+d).style.display="none"}$("pjTelecharge"+c).removeClass("hidden");$(context+"idSupprimerFichierSoinsEtranger"+c).style.display="flex";var e=c+1;afficheCompteur(a,e);$("btnChargement"+c).addClass("hidden");$("nomFichier"+c).removeClass("hidden");$("nomFichier"+c).style.display="flex";$("separateurNomFichier"+c).removeClass("hidden");var b=$(context+"idFichier"+c).value;var f=b.substr(b.lastIndexOf("\\")+1);$("libelleFichier"+c).innerHTML=f;afficherAjouterDocumentSoinsEtranger(a);return true}return false}function afficherAjouterDocumentSoinsEtranger(c){var d=0;var a=-1;var b=0;if($(context+"idFichier0").value!=""){b++}for(d=1;d<=c;d++){var e=$(context+"idFichier"+d);if(e.value==""||e.value==undefined){if(a==-1){a=d}}else{b++}$("btnChargement"+d).addClass("hidden")}if(b<c){$("btnChargement"+a).removeClass("hidden")}}function supprimerPJSoinsEtranger(a,d){for(var b=0;b<d;b++){$(context+"idFichier"+b+"_messageErreur").innerHTML="";$(context+"idFichier"+b+"_messageErreur").addClass("message_erreur_invisible");$(context+"idChampFichier"+b).style.display="none";$(context+"idChampFichier"+b).addClass("hidden");$(context+"idChampFichier"+b).removeClass("encadre_erreur")}$("pjTelecharge"+a).addClass("hidden");$(context+"idFichier"+a).value="";$("libelleFichier"+a).innerHTML="";$("nomFichier"+a).addClass("hidden");$("nomFichier"+a).style.display="none";$("btnChargement"+a).addClass("hidden");$("separateurNomFichier"+a).addClass("hidden");if(a==0){$("btnChargement"+1).addClass("hidden");$("btnChargement"+0).removeClass("hidden");$("blocNbDocuments").style.display="none";$(context+"suivant").disabled=true}else{var c=a-1;$("pjTelecharge"+c).removeClass("hidden");$(context+"idSupprimerFichierSoinsEtranger"+c).style.display="flex";afficherAjouterDocumentSoinsEtranger(d);afficheCompteur(d,a)}}function afficheCompteur(e,b){var d=compteurPartie1;var c=compteurPartie2;var a=compteurPartie3;$("libelleNblocNbDocuments").innerHTML="";$("libelleNblocNbDocuments").innerHTML=(d+b+" "+c+" "+e+" "+a);$("blocNbDocuments").style.display="flex"}function validerPJSoinsEtranger(){$(context+"actionEvt").value="Suivant";$(context+"soinsEtrangerForm").submit()}function moulinetteEtValiderPJSoinsEtranger(c,b){var a=getTailleMaxInBytes(c);let promises=[];let nomsFichiers=[];for(let i=0;i<=nbMaxPiecesJointes-1;i++){if($(context+"idFichier"+i).files[0]){let promise=resize($(context+"idFichier"+i).files[0],a,b);promises.push(promise);nomsFichiers.push($(context+"idFichier"+i).files[0].name)}}Promise.all(promises).then(function(d){envoiFormDataSoinsEtranger(d,nomsFichiers)});event.preventDefault()}function envoiFormDataSoinsEtranger(b,a){var d=new FormData();for(let i=0;i<=b.length-1;i++){d.append(context+"listPieceJointe["+i+"].fileForm",b[i],a[i])}d.append(context+"actionEvt","Suivant");d.append(context+"pageEnCours","ENREGISTRER_PIECES_JOINTES");d.append("_ct",$$('input[name="_ct"]')[0].value);var c=new XMLHttpRequest();c.open("POST",$(context+"soinsEtrangerForm").action);c.onload=function(f){if(c.status==200){var e=c.response.substring(0,c.response.indexOf("}")+1);var g=JSON.parse(e);if(g.codeRetour==="OK"){viderFichiers();validerPJSoinsEtranger()}else{numeroFichier=0;affichageErreurUploadPJ(context,0,"encadre_erreur",g.messageErreur);boutonDisabledPjSoinsEtranger()}}else{return false}};c.send(d)}function viderFichiers(){for(let i=0;i<=nbMaxPiecesJointes-1;i++){if($(context+"idFichier"+i).files[0]){$(context+"idFichier"+i).value=""}}}function choixDuPaysSejourModalite(){const b="ROYAUME_UNI";const c="SUISSE";var d=$(context+"listepaysEuEeeRs").value;var a=$(context+"sejourModalite").getSelected()[0].value;if(d.indexOf(a)!==-1){switch(a){case b:$("msgPaysRoymuni").removeClass("hidden");$("msgPays").removeClass("hidden");$("msgSuisse").addClass("hidden");$("msgHorsPaysUe").addClass("hidden");break;case c:$("msgSuisse").removeClass("hidden");$("msgPays").removeClass("hidden");$("msgPaysRoymuni").addClass("hidden");$("msgHorsPaysUe").addClass("hidden");break;default:$("msgPays").removeClass("hidden");$("msgSuisse").addClass("hidden");$("msgPaysRoymuni").addClass("hidden");$("msgHorsPaysUe").addClass("hidden")}}else{$("msgHorsPaysUe").removeClass("hidden");$("msgPays").addClass("hidden");$("msgSuisse").addClass("hidden");$("msgPaysRoymuni").addClass("hidden");$(context+"remboursementSelect").value=""}}function updateDatesPeriodeSejourSoinsEtranger(b,a){if(!controleDateObligatoireSoinsEtranger(b,"Debut")){updateErrorStatusSoinsEtranger($(context+b+"Debut"),$(context+a),msgErreurDateVide,false)}else{if(controleDateObligatoireSoinsEtranger(b,"Fin")&&!controleOrdreDateSoinsEtranger(b)){updateErrorStatusSoinsEtranger($(context+b+"Fin"),$(context+a),msgErreurDateSup,false);updateErrorStatusSoinsEtranger($(context+b+"Debut"),$(context+a),msgErreurDateSup,false)}else{updateErrorStatusSoinsEtranger($(context+b+"Debut"),$(context+a),"",true);updateErrorStatusSoinsEtranger($(context+b+"Fin"),$(context+a),"",true)}}}function boutonDisabledPeriodeModaliteSejour(){var d=false;var c="idDateSejour";var a="idErreurDateSejour";var e="idDateHospitalEtranger";var f="idErreurDateSejourHospital";var g=$(context+"listepaysEuEeeRs").value;var b=$(context+"sejourModalite").getSelected()[0].value;if($(context+"sejourModalite").value.length===0){d=true}if(g.indexOf(b)!==-1){if((!$(context+"tarificationFrancaise").checked)&&(!$(context+"tarificationEtrangere").checked)){d=true}if($(context+"remboursementSelect").value.length===0){d=true}if(!controleDateObligatoireSoinsEtranger(c,"Debut")||!controleDateObligatoireSoinsEtranger(c,"Fin")||!controleOrdreDateSoinsEtranger(c)){d=true}if($(context+"motifSejourSelect").value.length===0){d=true}if((!$(context+"tarificationFrancaise").checked)&&(!$(context+"tarificationEtrangere").checked)){d=true}if($(context+"idHospitalEntranger").value==="true"){if(!controleDateObligatoireSoinsEtranger(e,"Debut")||!controleDateObligatoireSoinsEtranger(e,"Fin")||!controleOrdreDateSoinsEtranger(e)){d=true}}}else{if(!controleDateObligatoireSoinsEtranger(c,"Debut")||!controleDateObligatoireSoinsEtranger(c,"Fin")||!controleOrdreDateSoinsEtranger(c)){d=true}if($(context+"motifSejourSelect").value.length===0){d=true}if($(context+"idHospitalEntranger").value==="true"){if(!controleDateObligatoireSoinsEtranger(e,"Debut")||!controleDateObligatoireSoinsEtranger(e,"Fin")||!controleOrdreDateSoinsEtranger(e)){d=true}}}$(context+"validerPeriodeSejour").disabled=d}function openHospitalisationEtranger(){var a=$(context+"idHospitalEntranger").value;if(a==="true"){effect.tweenShowInline($(context+"DateHospitalEtranger"))}else{effect.tweenHide($(context+"DateHospitalEtranger"))}}function controleDateObligatoireSoinsEtranger(b,a){return isNotChampVideSoinsEtranger($(context+b+a))}function isNotChampVideSoinsEtranger(a){return a.value.trim().length>0}function updateErrorStatusSoinsEtranger(d,b,a,c){if(c){d.removeClass("field_error");b.textContent=""}else{d.addClass("field_error");b.textContent=a;b.removeClass("hidden")}}function controleOrdreDateSoinsEtranger(b){var a=process($(context+b+"Debut").value);var c=process($(context+b+"Fin").value);return a<=c}function process(a){var b=a.split("/");return new Date(b[2],b[1]-1,b[0])}function changeTitle(){if($(context+"idSoinsPrevus").checked===false){var a=$("switchsoinsprevus").title=afficherTitleOui;$(context+"idSoinsPrevus").checked=true}else{$(context+"idSoinsPrevus").checked=false;var a=$("switchsoinsprevus").title=afficherTitleNon}};