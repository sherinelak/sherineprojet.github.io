const questions = [ 
    {
        q: "Quelle est la fonction principale des poumons ?",
        o: ["Filtrer l’air", "Produire du CO2", "Assurer les échanges gazeux", "Pomper le sang"],
        a: "Assurer les échanges gazeux"
    },
    {
        q: "Quel muscle joue un rôle clé dans la respiration ?",
        o: ["Biceps", "Diaphragme", "Trapèze", "Fémoral"],
        a: "Diaphragme"
    },
    {
        q: "Combien d’alvéoles contient un poumon adulte environ ?",
        o: ["100 millions", "200 millions", "300 millions", "500 millions"],
        a: "300 millions"
    },
    {
        q: "Quel gaz est expulsé lors de l’expiration ?",
        o: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"],
        a: "Dioxyde de carbone"
    },
    {
        q: "Comment l’oxygène est-il transporté dans le sang ?",
        o: ["Par les plaquettes", "Par l’hémoglobine", "Par le plasma", "Par les leucocytes"],
        a: "Par l’hémoglobine"
    },
    {
        q: "Où se situent les centres de régulation de la respiration ?",
        o: ["Cortex", "Moelle épinière", "Tronc cérébral", "Cervelet"],
        a: "Tronc cérébral"
    },
    {
        q: "Quel phénomène se produit lors de l’inspiration ?",
        o: ["Le diaphragme se relâche", "Les côtes s’abaissent", "La cage thoracique s’élargit", "Les poumons se contractent"],
        a: "La cage thoracique s’élargit"
    },
    {
        q: "Quel est le principal stimulus de la respiration ?",
        o: ["Le taux d’oxygène", "Le taux de CO2", "La température corporelle", "La pression artérielle"],
        a: "Le taux de CO2"
    },
    {
        q: "Quelle est la fréquence respiratoire moyenne chez l’adulte ?",
        o: ["8 cycles/min", "12 cycles/min", "20 cycles/min", "30 cycles/min"],
        a: "12 cycles/min"
    },
    {
        q: "Quelle structure empêche les aliments d’entrer dans la trachée ?",
        o: ["L’épiglotte", "La glotte", "L’œsophage", "Le larynx"],
        a: "L’épiglotte"
    }
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
    userAnswers.push({
        question: questions[i].q,
        correct: questions[i].a,
        user: o
    });

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
