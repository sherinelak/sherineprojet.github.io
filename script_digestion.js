const questions = [
    { q: "Où se produit la digestion principale ?", o: ["Estomac", "Foie", "Intestin", "Pancréas"], a: "Intestin" },
    { q: "Quel organe sécrète la bile ?", o: ["Foie", "Estomac", "Pancréas", "Côlon"], a: "Foie" },
    { q: "Quel enzyme décompose l’amidon ?", o: ["Amylase", "Pepsine", "Lipase", "Trypsine"], a: "Amylase" },
    { q: "Où se trouve la villosité intestinale ?", o: ["Intestin grêle", "Estomac", "Côlon", "Foie"], a: "Intestin grêle" },
    { q: "Combien d’acides gastriques existent ?", o: ["1", "2", "3", "4"], a: "1" },
    { q: "Quel organe produit l’insuline ?", o: ["Pancréas", "Foie", "Cœur", "Estomac"], a: "Pancréas" },
    { q: "Quel est le rôle de la salive ?", o: ["Digérer", "Lubrifier", "Absorber", "Fermenter"], a: "Lubrifier" },
    { q: "Quel organe filtre les toxines ?", o: ["Foie", "Pancréas", "Rein", "Estomac"], a: "Foie" },
    { q: "Quel est l’organe principal de l’absorption ?", o: ["Intestin grêle", "Estomac", "Côlon", "Foie"], a: "Intestin grêle" },
    { q: "Quel type de digestion se fait dans l’estomac ?", o: ["Mécanique", "Chimique", "Digestive", "Enzymatique"], a: "Chimique" },
    { q: "Combien de temps l’aliment reste dans l’estomac ?", o: ["30 min", "1 h", "3 h", "5 h"], a: "3 h" },
    { q: "Quel sucre est décomposé par l’amylase ?", o: ["Fructose", "Glucose", "Saccharose", "Amidon"], a: "Amidon" },
    { q: "Quel organe est responsable de la déglutition ?", o: ["Langue", "Gorge", "Estomac", "Foie"], a: "Gorge" },
    { q: "Quel est l’acide principal dans l’estomac ?", o: ["HCl", "Acétique", "Citrique", "Lactique"], a: "HCl" },
    { q: "Quelle partie du côlon absorbe l’eau ?", o: ["Cæcum", "Iléon", "Rectum", "Colon ascendant"], a: "Colon ascendant" }
];

let i = 0, score = 0;
let userAnswers = [];

function showQuestion() {
    if (i >= questions.length) {
        showResults();
        return;
    }
    document.getElementById("question").innerText = questions[i].q;
    document.getElementById("options").innerHTML = questions[i].o
        .map(o => `<button onclick="check('${o}')">${o}</button>`) 
        .join("");
}

function check(o) {
    userAnswers.push({ question: questions[i].q, correct: questions[i].a, user: o });
    if (o === questions[i].a) score++;
    i++;
    showQuestion();
}

function showResults() {
    let resultHTML = `<h2>Fin ! Score: ${score}/${questions.length}</h2>`;
    resultHTML += "<h3>Correction :</h3><ul>";
    userAnswers.forEach(answer => {
        resultHTML += `<li><strong>${answer.question}</strong><br>
                        Votre réponse: ${answer.user} <br>
                        Réponse correcte: ${answer.correct}</li><br>`;
    });
    resultHTML += "</ul>";
    document.body.innerHTML = resultHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    showQuestion();
});
