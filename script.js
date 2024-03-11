function conertir() {
    // Récupérer les objets à partir du formulaire
    const txtMdh = document.getElementById("mdh");
    const txtResultat = document.getElementById("resultat");
    const sltDevise = document.getElementById("devise");
    const outErrMdh = document.getElementById("errMdh");
    
    //Initialisation
    outErrMdh.value = "";


    // Déclaration des variables
    var mdh, resultat;
    // Récupérer le contenu des objets dans des variables
    // avec le contrôle de saisie
    if (txtMdh.value == "")
        outErrMdh.value = "Champs obligatoire";
    else if (isNaN(txtMdh.value))
        outErrMdh.value = "Saisissez un nombre";
    else
        mdh = parseFloat(txtMdh.value);


    // Traiter les erreurs
    if (mdh == undefined) {
        txtMdh.focus();
        txtMdh.style.border = "1px solid red";
    }
    else {
        txtMdh.style.border=""
        // Effectuer la conversion
        switch(sltDevise.value){
            case "euro" : resultat=mdh/12; break;
            default : resultat=mdh/8;
        }
        // Afficher le résultat
        txtResultat.value =  resultat;
    }
}
function initialiser() {
    // Récupérer les objets à partir du formulaire
    const txtMdt = document.getElementById("mdh");
    const txtResultat = document.getElementById("resultat");
    const sltDevise = document.getElementById("devise");

    // Effacer le contenu des différentes zones en selectionnant
    // la première option de la liste
    txtMdt.value = "";
    sltDevise.value="euro";
    txtResultat.value = "";
}