document.getElementById("send").addEventListener('click', verification);

var mess_alerte = "Veuillez remplir tous les champs du formulaire.";
var mess_succès = "Formulaire soumis avec succès !";

function verification(){
	var formulaire = document.getElementById('myform');
	var reception = document.getElementById('destinataire');
	var envoyeur = document.getElementById('envoyeur');
	
	var texte_formulaire = formulaire.value;
	var texte_destinataire = reception.value;
	var texte_envoyeur = reception.value;
	
	if (texte_formulaire == '' || texte_destinataire == '' || texte_envoyeur == ''){
		alert(mess_alerte);
	} else{
		alert(mess_succès);
	};
}