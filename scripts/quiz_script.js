const quizContainer = document.getElementById('question');
const resultsContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');

const questions = 
[
    {
        question: 'When was the drafting of constitution of India completed?',
        answers:
        {
            a: '26 January, 1950',
            b: '26 November, 1949',
            c: '26 August, 1947'
        },
        correctAnswer: 'b'
    },
    {
        question: 'Who was the chairman of the drafting committee?',
        answers:
        {
            a: 'DR Rajendra Prasad',
            b: 'Mahatma Gandhi',
            c: 'DR B.R. Ambedkar'
        },
        correctAnswer: 'c'
    },
    {
        question: 'Which of the following is not one of the six fundamental rights?',
        answers:
        {
            a: 'Right to Education',
            b: 'Right to Freedom',
            c: 'Right to Equality'
        },
        correctAnswer: 'a'
    },
];

function buildQuiz() {
    const output = [];

    questions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for (letter in currentQuestion.answers) {
                answers.push(`<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
              </label><br>`)
            }

            output.push(
                `<div class="question">Q${questionNumber + 1}. ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div><br>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
    resultsContainer.innerHTML = '';
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    const question = quizContainer.querySelectorAll('.question');

    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            ++numCorrect;

            question[questionNumber].style.color = 'green';
        } else {
            question[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `Result : ${numCorrect} out of ${questions.length}`;
}

submitButton.addEventListener('click', showResults);
resetButton.addEventListener('click', buildQuiz);

buildQuiz();
