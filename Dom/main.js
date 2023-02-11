const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];
let quizContainer = document.querySelector(".quiz-container");

function renderQuiz() {
    const render = quizes.map(e => {
        let infor = "";
        e.answers.forEach(item => {
            return infor +=
                `                        
                <div class="quiz-answer-item">
                    <input type="radio" name=${e.id}>
                    <label>${item}</label>
                </div>                         `
        });
        return `
    <div class="quiz-item">
        <h3>${e.question}</h3>
        <div class="quiz-answer">
            ${infor}
        </div>
    </div>`
    }

    )
    quizContainer.innerHTML = render.join('');
}
renderQuiz();

const btn = document.getElementById("btn")
const radio = document.querySelectorAll(".quiz-answer .quiz-answer-item input");

function TaoSoNgauNhien(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
btn.addEventListener('click', e => {

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].name == 1) {
            radio[TaoSoNgauNhien(0, 4)].checked = true;
        }
        if (radio[i].name == 2) {
            radio[TaoSoNgauNhien(4, 8)].checked = true;
        }
        if (radio[i].name == 3) {
            radio[TaoSoNgauNhien(8, 12)].checked = true;
        }
    }
})