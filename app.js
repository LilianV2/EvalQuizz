// Array on which we iterate to get all the elements we need

let quizz = [
    {"number": 1, "question" : "Quel est le nom de famille de Naruto ?", "answer1" : "Uzukima", "answer2" : "Uzamuki", "answer3" : "Umazuki", "answer4" : "Uzumaki", "picture" : "img/naruto.jfif"},
    {"number": 2, "question" : "Quel est le nom de famille du père de Naruto ?", "answer1" : "Uzumaki", "answer2" : "Senju", "answer3" : "Namikaze", "answer4" : "Satoru", "picture" : "img/minato.png"},
    {"number": 3, "question" : "Comment Shisui est-il mort ?", "answer1" : "Tué par son meilleur ami", "answer2" : "Tué par les ninja de Konoha", "answer3" : "Il était malade", "answer4" : "Il s'est suicidé", "picture" : "img/shisui.png"},
    {"number": 4, "question" : "Quel est le prénom de ce démon ?", "answer1" : "Son Goku", "answer2" : "Ichigo", "answer3" : "Yonbi", "answer4" : "Gobi", "picture" : "img/yonbi.png"},
    {"number": 5, "question" : "Qui possède l'arme Kubikiribôchô", "answer1" : "Chôjûrô", "answer2" : "Yagura", "answer3" : "Zabuza", "answer4" : "Kagura", "picture" : "img/kubikiri.png"},
    {"number": 6, "question" : "Quel est l'élément permettant d'utiliser des techniques de bois ?", "answer1" : "Doton", "answer2" : "Mokuton", "answer3" : "Katon", "answer4" : "Jinton", "picture" : "img/mokuton.png"},
    {"number": 7, "question" : "Quelle est l'évolution final du sharingan ?", "answer1" : "Le Mangekyo Sharingan", "answer2" : "Le Mangekyo Sharingan Eternel", "answer3" : "Le Rinnegan", "answer4" : "Le Rinne Sharingan", "picture" : "img/sharingan.gif"},
    {"number": 8, "question" : "Quel est le prénom de l'Ermite pas net ?", "answer1" : "Ebisu", "answer2" : "Azuma", "answer3" : "Yamato", "answer4" : "Jiraya", "picture" : "img/jiji.png"},
    {"number": 9, "question" : "Comment s'appelle le nom de la Formation d'Ino, Shikamaru, et Choji ?", "answer1" : "Cho-Ino-Shika", "answer2" : "Shika-Cho-Ino", "answer3" : "Ino-Shika-Cho", "answer4" : "Shika-Cho-Ino", "picture" : "img/inoshikacho.png"},
    {"number": 10, "question" : "Pour finir, quel sont les noms des frères d'Or et d'Argent ?", "answer1" : "Igor et Grichka", "answer2" : "Jinkaku et Kinkaku", "answer3" : "Bonnie & Clyde", "answer4" : "Minkaku et Ginkaku", "picture" : "img/orargent.png"},
]

// Get every elements we need for the rest of the quiz

let index = 0
let nextQuestion = $('#next')
let displayResult = $('#total')
let ans = $('#answer')
let answer1 = $('#answer1')
let answer2 = $('#answer2')
let answer3 = $('#answer3')
let answer4 = $('#answer4')
let displayAll = $('#displayAll')
let finalScore = 0

// Display the first question

$('#questionNumber').html(quizz[0].number)
$('#question').html(quizz[0].question)
$('#labAnswer1').html(quizz[0].answer1)
$('#labAnswer2').html(quizz[0].answer2)
$('#labAnswer3').html(quizz[0].answer3)
$('#labAnswer4').html(quizz[0].answer4)
$("#img").attr("src", quizz[0].picture)

// Little transition between questions

ans.fadeIn();
$('img').fadeIn();
$('h1').fadeIn();

// Get all the correct answers by getting the index and the id of the real answwer in the array above

const correctAnswer1 = quizz[0].answer4
const correctAnswer2 = quizz[1].answer3
const correctAnswer3 = quizz[2].answer4
const correctAnswer4 = quizz[3].answer1
const correctAnswer5 = quizz[4].answer3
const correctAnswer6 = quizz[5].answer2
const correctAnswer7 = quizz[6].answer3
const correctAnswer8 = quizz[7].answer4
const correctAnswer9 = quizz[8].answer3
const correctAnswer10 = quizz[9].answer2

// See if the correct answer is checked or not

function trueOrFalse(i, correct, answer){
    if (index === i) {
        if (correct.is(':checked')){
            alert("C'est la bonne réponse !")
            finalScore++;
        }
        else {
            alert("Mauvaise réponse... La bonne réponse était : " + answer)
        }
    }
}

// Browse through the index for each question, the params refer to the function above

nextQuestion.click( () => {
    trueOrFalse(0, answer4, correctAnswer1)
    trueOrFalse(1, answer3, correctAnswer2)
    trueOrFalse(2, answer4, correctAnswer3)
    trueOrFalse(3, answer1, correctAnswer4)
    trueOrFalse(4, answer3, correctAnswer5)
    trueOrFalse(5, answer2, correctAnswer6)
    trueOrFalse(6, answer3, correctAnswer7)
    trueOrFalse(7, answer4, correctAnswer8)
    trueOrFalse(8, answer3, correctAnswer9)
    trueOrFalse(9, answer2, correctAnswer10)

    if (index === 9) {
        $('#image').css({display:"none"})
        displayResult.css({display:"block"})
        nextQuestion.css({display:"none"})
        $('h1').html('Partie terminée !')
    }
    else {
        index++
    }

    ans.fadeOut(1)
    ans.fadeIn(1000)
    $('img').fadeOut(1);
    $('img').fadeIn(500);
    $('h1').fadeOut(1);
    $('h1').fadeIn(1000);

    $('#questionNumber').html(quizz[index].number)
    $('#question').html(quizz[index].question)
    $('#labAnswer1').html(quizz[index].answer1)
    $('#labAnswer2').html(quizz[index].answer2)
    $('#labAnswer3').html(quizz[index].answer3)
    $('#labAnswer4').html(quizz[index].answer4)
    $("#img").attr("src", quizz[index].picture)
    $('input:radio').prop("checked", false)
})

// Display the result of the correct answers in a final page and also the final score /10

displayResult.click( () => {

    $('#finalScore').html(finalScore)
    $('#answer').css({display:"none"})
    displayResult.css({display:"none"})
    $('#finalResult').css({display:"block"})
    $('#displayAll').css({display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"})

    displayAll.append("<p>Question 1 : " + correctAnswer1 + "</p>")
    displayAll.append("<p>Question 2 : " + correctAnswer2 + "</p>")
    displayAll.append("<p>Question 3 : " + correctAnswer3 + "</p>")
    displayAll.append("<p>Question 4 : " + correctAnswer4 + "</p>")
    displayAll.append("<p>Question 5 : " + correctAnswer5 + "</p>")
    displayAll.append("<p>Question 6 : " + correctAnswer6 + "</p>")
    displayAll.append("<p>Question 7 : " + correctAnswer7 + "</p>")
    displayAll.append("<p>Question 8 : " + correctAnswer8 + "</p>")
    displayAll.append("<p>Question 9 : " + correctAnswer9 + "</p>")
    displayAll.append("<p>Question 10 : " + correctAnswer10 + "</p>")
})

