// Store questions in localStorage
let questions = JSON.parse(localStorage.getItem('quizQuestions')) || [];

document.addEventListener('DOMContentLoaded', function() {
    const addQuestionBtn = document.getElementById('add-question-btn');
    const viewQuizBtn = document.getElementById('view-quiz-btn');
    
    addQuestionBtn.addEventListener('click', addQuestion);
    viewQuizBtn.addEventListener('click', viewQuiz);
    
    updateQuestionsList();
});

function addQuestion() {
    const questionText = document.getElementById('question').value.trim();
    const option1 = document.getElementById('option1').value.trim();
    const option2 = document.getElementById('option2').value.trim();
    const option3 = document.getElementById('option3').value.trim();
    const correctAnswer = document.getElementById('correct-answer').value;
    
    // Validation
    if (!questionText || !option1 || !option2 || !option3 || !correctAnswer) {
        alert('Please fill all fields');
        return;
    }
    
    const question = {
        id: Date.now(), // Unique ID
        question: questionText,
        options: [option1, option2, option3],
        correctAnswer: parseInt(correctAnswer) - 1 // Convert to 0-based index
    };
    
    questions.push(question);
    localStorage.setItem('quizQuestions', JSON.stringify(questions));
    
    // Clear form
    document.getElementById('question').value = '';
    document.getElementById('option1').value = '';
    document.getElementById('option2').value = '';
    document.getElementById('option3').value = '';
    document.getElementById('correct-answer').value = '';
    
    updateQuestionsList();
    alert('Question added successfully!');
}

function updateQuestionsList() {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';
    
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}: ${q.question}</h3>
            <div class="options">
                <div class="option">1. ${q.options[0]}</div>
                <div class="option">2. ${q.options[1]}</div>
                <div class="option">3. ${q.options[2]}</div>
            </div>
            <p><strong>Correct Answer:</strong> Option ${q.correctAnswer + 1}</p>
        `;
        
        questionsList.appendChild(questionDiv);
    });
}

function viewQuiz() {
    if (questions.length === 0) {
        alert('No questions added yet!');
        return;
    }
    
    // Create user quiz page content
    const quizContent = generateQuizHTML();
    
    // Open quiz in new window
    const quizWindow = window.open('', '_blank');
    quizWindow.document.write(quizContent);
    quizWindow.document.close();
}

function generateQuizHTML() {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>User Quiz</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
                .question { margin-bottom: 30px; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
                .options label { display: block; margin: 5px 0; padding: 10px; border: 1px solid #eee; cursor: pointer; }
                .options label:hover { background: #f5f5f5; }
                button { background: #4CAF50; color: white; padding: 15px 30px; border: none; border-radius: 5px; cursor: pointer; font-size: 18px; }
                #result { margin-top: 20px; padding: 20px; background: #f9f9f9; border-radius: 5px; }
            </style>
        </head>
        <body>
            <h1>Quiz Time!</h1>
            <form id="quiz-form">
                ${questions.map((q, index) => `
                    <div class="question">
                        <h3>${index + 1}. ${q.question}</h3>
                        <div class="options">
                            ${q.options.map((opt, optIndex) => `
                                <label>
                                    <input type="radio" name="q${q.id}" value="${optIndex}">
                                    ${opt}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
                <button type="button" onclick="submitQuiz()">Submit Quiz</button>
            </form>
            <div id="result"></div>
            
            <script>
                function submitQuiz() {
                    let score = 0;
                    const resultDiv = document.getElementById('result');
                    
                    ${questions.map(q => `
                        const answer${q.id} = document.querySelector('input[name="