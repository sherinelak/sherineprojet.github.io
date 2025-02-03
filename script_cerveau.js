const questions = [
    {
        q: "Quelle proportion de l'énergie totale est consommée par le cerveau ?",
        o: ["2%", "10%", "20%", "50%"],
        a: "20%"
    },
    {
        q: "À combien de pourcentage d'eau le cerveau est-il constitué ?",
        o: ["50%", "60%", "65%", "73%"],
        a: "73%"
    },
    {
        q: "Une déshydratation de quel pourcentage affecte les capacités cognitives ?",
        o: ["1%", "2%", "5%", "10%"],
        a: "2%"
    },
    {
        q: "Si l'eau est retirée du cerveau, à quel pourcentage est-il graisse ?",
        o: ["40%", "50%", "60%", "70%"],
        a: "60%"
    },
    {
        q: "Si l'on déroulait les fibres nerveuses du cerveau, combien de fois ferait-on le tour de la Terre ?",
        o: ["1 fois", "3 fois", "5 fois", "10 fois"],
        a: "5 fois"
    },
    {
        q: "Combien de cellules nerveuses dans un cerveau humain ?",
        o: ["10 milliards", "50 milliards", "90 à 100 milliards", "200 milliards"],
        a: "90 à 100 milliards"
    },
    {
        q: "Combien de synapses sont connectées à chaque neurone ?",
        o: ["10 000", "20 000", "40 000", "100 000"],
        a: "40 000"
    },
    {
        q: "À quel âge le cerveau est-il complètement développé ?",
        o: ["18 ans", "21 ans", "25 ans", "30 ans"],
        a: "25 ans"
    },
    {
        q: "Quel pourcentage des pensées humaines sont négatives ?",
        o: ["50%", "60%", "70%", "80%"],
        a: "70%"
    },
    {
        q: "Capacité d'attention moyenne d'un humain en 2000 ?",
        o: ["9 s", "10 s", "12 s", "15 s"],
        a: "12 s"
    },
    {
        q: "Comment la mémoire des jeunes adultes d'aujourd'hui se compare-t-elle à celle de la génération précédente ?",
        o: ["Identique", "Supérieure", "Inférieure", "Meilleure"],
        a: "Inférieure"
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
