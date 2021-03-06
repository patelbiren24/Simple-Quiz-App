
//Stores all the questions and the correct answer
const quizData = [
    {
        question: "What is the most used programming language in 2020?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "Who is the President of US?",
        a: "Elon Musk",
        b: "Donald Trump",
        c: "Barack Obama",
        d: "Joe Biden",
        correct: "d",
    },
    {
        question: "What is the capital of US?",
        a: "Chicago",
        b: "Washington",
        c: "California",
        d: "Texas",
        correct: "b",
    },
    {
        question: "Who won the 2021 Superbowl",
        a: "Kansas City Chiefs",
        b: "New England Patriots",
        c: "Tampa Bay Buccaneers",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "How many players are there in a rugby league team?",
        a: "9",
        b: "10",
        c: "20",
        d: "13",
        correct: "d"
    }
];

// Get the id of the elements 
const quiz = document.getElementById("quiz"); 
const submitBtn = document.getElementById("submit");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

//Gets the correct answers 
const answerEls = document.querySelectorAll(".answer");

//Intialize the score to  0
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers(); //unselect all answers 

    const currentQuizData = quizData[currentQuiz]; //keeps track of the # of times quiz is taken

    //Get all the options for a question and and its options
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a; //a
    b_text.innerText = currentQuizData.b; //b
    c_text.innerText = currentQuizData.c; //c 
    d_text.innerText = currentQuizData.d; //d
}

/*Function that returns which answer is selected for
    originally no answers are selected, then we use a for loop
    that checks to see if an answer is selected, if its selected,
    we return the id of the element and return the answer
*/
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

//makes sure no answers are selected to begin with
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    
    // check to see the answer
    const answer = getSelected();

    //if the correct answer is chosen, then increment the score
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++; // increase the count to 1, since user is taking the quiz
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});