// Question bank
const questionBank = [
     { "question": "What is the primary role of erythropoietin?", options: ["Regulate blood pressure", "Stimulate red blood cell production", "Enhance platelet aggregation", "Increase white blood cell count"], answer: "Stimulate red blood cell production" },
                { question: "What is the term for the movement of substances from an area of higher concentration to an area of lower concentration?", options: ["Active transport", "Facilitated diffusion", "Simple diffusion", "Osmosis"], answer: "Simple diffusion" },
                              { question: "What is the primary role of erythropoietin?", options: ["Regulate blood pressure", "Stimulate red blood cell production", "Enhance platelet aggregation", "Increase white blood cell count"], answer: "Stimulate red blood cell production" },
    { question: "Which part of the brain regulates autonomic functions such as heart rate and blood pressure?", options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla oblongata"], answer: "Medulla oblongata" },
    { question: "What is the normal range of arterial blood pH in humans?", options: ["6.8-7.2", "7.35-7.45", "7.5-7.8", "8.0-8.5"], answer: "7.35-7.45" },
    { question: "Which type of leukocyte is primarily involved in the immune response?", options: ["Erythrocytes", "Neutrophils", "Monocytes", "Basophils"], answer: "Neutrophils" },
    { question: "What is the primary function of hemoglobin?", options: ["Transport oxygen", "Clot blood", "Regulate temperature", "Fight infections"], answer: "Transport oxygen" },
    { question: "What is the role of the spleen in the circulatory system?", options: ["Filter blood and recycle iron", "Produce insulin", "Store bile", "Regulate blood pressure"], answer: "Filter blood and recycle iron" },
    { question: "Which vitamin is essential for the synthesis of clotting factors?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"], answer: "Vitamin K" },
    { question: "What is the main site of gas exchange in the lungs?", options: ["Bronchi", "Alveoli", "Trachea", "Larynx"], answer: "Alveoli" },
    { question: "What condition is characterized by an increased number of red blood cells?", options: ["Anemia", "Leukemia", "Polycythemia", "Thrombocytopenia"], answer: "Polycythemia" },
    { question: "Which blood type is known as the universal recipient?", options: ["A", "B", "AB", "O"], answer: "AB" },
    { question: "What component of blood is primarily responsible for maintaining osmotic pressure?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma proteins"], answer: "Plasma proteins" },
    { question: "What is the primary function of lymphocytes?", options: ["Transport oxygen", "Produce antibodies", "Clot blood", "Phagocytize pathogens"], answer: "Produce antibodies" },
    { question: "Which organ produces the hormone erythropoietin?", options: ["Liver", "Kidney", "Spleen", "Bone marrow"], answer: "Kidney" },
    { question: "What is the main role of platelets in the blood?", options: ["Transport oxygen", "Initiate clotting process", "Regulate body temperature", "Fight infections"], answer: "Initiate clotting process" },
    { question: "What is the average lifespan of a red blood cell?", options: ["10 days", "30 days", "120 days", "1 year"], answer: "120 days" },
    { question: "Which condition is caused by a deficiency in vitamin B12?", options: ["Iron-deficiency anemia", "Sickle cell anemia", "Pernicious anemia", "Hemolytic anemia"], answer: "Pernicious anemia" },
    { question: "What is the primary electrolyte in extracellular fluid?", options: ["Potassium", "Sodium", "Calcium", "Chloride"], answer: "Sodium" },
    { question: "Which structure prevents backflow of blood in the heart?", options: ["Valves", "Septum", "Aorta", "Coronary arteries"], answer: "Valves" },
    { question: "What is the main function of the cardiovascular system?", options: ["Transport nutrients and oxygen", "Regulate body temperature", "Maintain fluid balance", "All of the above"], answer: "Transport nutrients and oxygen" },
    { question: "What is the primary cause of anemia?", options: ["Inadequate red blood cell production", "Excessive white blood cell production", "Increased platelet destruction", "High blood pressure"], answer: "Inadequate red blood cell production" },
    { question: "Which part of the blood is primarily responsible for immune defense?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "White blood cells" },
    { question: "What is the main action of anticoagulants?", options: ["Increase blood pressure", "Prevent clot formation", "Promote red blood cell production", "Enhance platelet function"], answer: "Prevent clot formation" },
    { question: "What is the normal range for white blood cell count?", options: ["4,000-11,000 cells/µL", "1,000-4,000 cells/µL", "11,000-20,000 cells/µL", "20,000-30,000 cells/µL"], answer: "4,000-11,000 cells/µL" },
    { question: "Which condition is characterized by a low platelet count?", options: ["Thrombocytopenia", "Polycythemia", "Leukemia", "Anemia"], answer: "Thrombocytopenia" },
    { question: "What is the primary function of the pulmonary circulation?", options: ["Transport oxygen-rich blood to the body", "Transport oxygen-poor blood to the lungs", "Regulate blood pressure", "Filter waste products"], answer: "Transport oxygen-poor blood to the lungs" },
    { question: "What is the function of the aorta?", options: ["Carry oxygen-poor blood to the lungs", "Carry oxygen-rich blood from the heart to the body", "Regulate blood flow", "Filter blood"], answer: "Carry oxygen-rich blood from the heart to the body" },
    { question: "Which cells are involved in the inflammatory response?", options: ["Erythrocytes", "Neutrophils", "Thrombocytes", "Lymphocytes"], answer: "Neutrophils" },
    { question: "What is the term for the formation of blood cells?", options: ["Hematopoiesis", "Hemolysis", "Erythropoiesis", "Thrombopoiesis"], answer: "Hematopoiesis" },
    { question: "Which of the following is a function of the liver in blood physiology?", options: ["Produce erythropoietin", "Filter toxins", "Store iron", "All of the above"], answer: "All of the above" },
    { question: "What is the role of the kidneys in blood pressure regulation?", options: ["Produce renin", "Filter blood", "Secrete hormones", "All of the above"], answer: "All of the above" },
    { question: "What type of leukocyte is primarily responsible for producing antibodies?", options: ["B lymphocytes", "T lymphocytes", "Monocytes", "Neutrophils"], answer: "B lymphocytes" },
    { question: "What is the role of fibrin in blood?", options: ["Transport oxygen", "Clot blood", "Regulate pH", "Fight infections"], answer: "Clot blood" },
    { question: "What is the primary gas transported by hemoglobin?", options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: "Oxygen" },
    { question: "Which component of blood is primarily involved in the transport of nutrients and waste products?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "Plasma" },
    { question: "Which blood component is primarily responsible for maintaining blood viscosity?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma proteins"], answer: "Red blood cells" },
    { question: "What is the term for the pressure exerted by blood against the walls of blood vessels?", options: ["Osmotic pressure", "Hydrostatic pressure", "Oncotic pressure", "Systolic pressure"], answer: "Hydrostatic pressure" },
    { question: "What is the primary function of the circulatory system?", options: ["Distribute hormones", "Transport oxygen and nutrients", "Remove waste products", "All of the above"], answer: "All of the above" },
    { question: "Which type of blood vessel is responsible for carrying blood back to the heart?", options: ["Arteries", "Veins", "Capillaries", "Arterioles"], answer: "Veins" },
    { question: "What is the average blood volume in an adult human?", options: ["1-2 liters", "3-4 liters", "5-6 liters", "7-8 liters"], answer: "5-6 liters" },
    { question: "What type of feedback mechanism is most common in the human body?", options: ["Positive feedback", "Negative feedback", "Neutral feedback", "Adaptive feedback"], answer: "Negative feedback" },
    { question: "What is the primary mechanism by which water moves across cell membranes?", options: ["Active transport", "Facilitated diffusion", "Simple diffusion", "Osmosis"], answer: "Osmosis" },
    { question: "Which cellular structure is primarily responsible for regulating the movement of substances in and out of the cell?", options: ["Nucleus", "Mitochondria", "Plasma membrane", "Endoplasmic reticulum"], answer: "Plasma membrane" },
    { question: "What process involves the active transport of ions against their concentration gradient?", options: ["Facilitated diffusion", "Osmosis", "Endocytosis", "Active transport"], answer: "Active transport" },
    { question: "What is the term for the movement of substances from an area of higher concentration to an area of lower concentration?", options: ["Active transport", "Facilitated diffusion", "Simple diffusion", "Osmosis"], answer: "Simple diffusion" },
    { question: "What is the primary purpose of negative feedback in homeostasis?", options: ["Amplify changes", "Stabilize physiological functions", "Create imbalances", "None of the above"], answer: "Stabilize physiological functions" },
    { question: "Which process is responsible for the reabsorption of glucose in the kidneys?", options: ["Active transport", "Facilitated diffusion", "Osmosis", "Endocytosis"], answer: "Active transport" },
    { question: "What type of membrane transport requires energy (ATP)?", options: ["Passive transport", "Facilitated diffusion", "Active transport", "Osmosis"], answer: "Active transport" },
    { question: "What is the primary function of the endoplasmic reticulum?", options: ["Protein synthesis and lipid metabolism", "Energy production", "Waste elimination", "Cell division"], answer: "Protein synthesis and lipid metabolism" },

    // Add more questions here
];

// Shuffle questions and initialize answers
const shuffledQuestions = questionBank.sort(() => Math.random() - 0.5).slice(0, 50);
const selectedAnswers = new Array(shuffledQuestions.length).fill(null); // Initialize answers to null
let currentPage = 0;
let totalScore = 0;
let timer;

// Function to display the questions
function displayQuestions(page) {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';
    const start = page * 2;
    const end = start + 2;
    const questionsForPage = shuffledQuestions.slice(start, end);

    questionsForPage.forEach((q, index) => {
        const questionIndex = start + index;
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>${questionIndex + 1}. ${q.question}</h3>
            <div class="options">
                ${q.options.map((option) => `
                    <label>
                        <input type="radio" name="question${questionIndex}" value="${option}" ${selectedAnswers[questionIndex] === option ? 'checked' : ''}>
                        ${option}
                    </label><br>
                `).join('')}
            </div>
        `;
        quizContainer.appendChild(questionDiv);
    });

    quizContainer.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.addEventListener('change', (event) => {
            const questionIndex = parseInt(event.target.name.replace('question', ''));
            selectedAnswers[questionIndex] = event.target.value;
        });
    });

    document.getElementById('pageIndicator').textContent = `Page ${page + 1} of ${Math.ceil(shuffledQuestions.length / 2)}`;
    document.getElementById('prevButton').style.display = currentPage === 0 ? 'none' : 'inline-block';
    document.getElementById('nextButton').style.display = (currentPage === Math.ceil(shuffledQuestions.length / 2) - 1) ? 'none' : 'inline-block';
    document.getElementById('submitButton').style.display = (currentPage === Math.ceil(shuffledQuestions.length / 2) - 1) ? 'inline-block' : 'none';
}

// Function to calculate and display the score
function calculateScore() {
    totalScore = 0;
    const incorrectAnswers = [];

    shuffledQuestions.forEach((q, index) => {
        const userAnswer = selectedAnswers[index];
        if (userAnswer === q.answer) {
            totalScore++;
        } else {
            incorrectAnswers.push({ question: q.question, userAnswer: userAnswer || 'No Answer', correctAnswer: q.answer });
        }
    });

    document.getElementById('score').textContent = totalScore;
    document.getElementById('resultTable').style.display = 'block';

    const incorrectAnswersTable = document.getElementById('incorrectAnswersTable');
    incorrectAnswersTable.innerHTML = '';
    incorrectAnswers.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.question}</td>
            <td style="color: red;">${item.userAnswer}</td>
            <td style="color: green;">${item.correctAnswer}</td>
        `;
        incorrectAnswersTable.appendChild(row);
    });
}

// Timer setup and countdown function
function startTimer(duration) {
    let timeRemaining = duration * 60;
    const timerDisplay = document.getElementById('timer');
    
    timer = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeRemaining <= 0) {
            clearInterval(timer);
            calculateScore();
            document.getElementById('quizContainer').style.display = 'none';
            document.getElementById('nav-buttons').style.display = 'none';
            document.getElementById('goto-page').style.display = 'none';
            alert('Time is up! The quiz has been submitted.');
        }

        timeRemaining--;
    }, 1000);
}

// Event listeners for navigation
document.getElementById('nextButton').addEventListener('click', () => {
    currentPage++;
    displayQuestions(currentPage);
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayQuestions(currentPage);
    }
});

document.getElementById('submitButton').addEventListener('click', () => {
    clearInterval(timer);
    calculateScore();
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('nav-buttons').style.display = 'none';
    document.getElementById('goto-page').style.display = 'none';
});

// Start the quiz when the "Start Quiz" button is clicked
document.getElementById('startQuizButton').addEventListener('click', () => {
    const timerInput = document.getElementById('timerInput').value;
    if (!timerInput || timerInput <= 0) {
        alert('Please enter a valid timer duration.');
        return;
    }

    document.getElementById('timerSetup').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('timerDisplay').style.display = 'block';
    document.getElementById('nav-buttons').style.display = 'flex';

    startTimer(timerInput);
    displayQuestions(currentPage);
});

// "Go to" page functionality
document.getElementById('goButton').addEventListener('click', () => {
    const pageInput = document.getElementById('pageInput').value;
    const pageIndex = parseInt(pageInput) - 1;
    const maxPage = Math.ceil(shuffledQuestions.length / 2) - 1;

    if (pageIndex >= 0 && pageIndex <= maxPage) {
        currentPage = pageIndex;
        displayQuestions(currentPage);
    } else {
        alert(`Please enter a page number between 1 and ${maxPage + 1}.`);
    }
});
// Password configuration with manually set expiration dates
const passwords = {
    "455205": new Date("2025-01-30T23:59:59").getTime(), // Custom expiration date and time
 "PADONU1": new Date("2024-12-01T23:59:59").getTime(), // Custom expiration date and time
    "222": new Date("2024-12-15T23:59:59").getTime()  // Custom expiration date and time
};

// Save the passwords in localStorage
localStorage.setItem("quizPasswords", JSON.stringify(passwords));

const passwordInput = document.getElementById("passwordInput");
const verifyPasswordButton = document.getElementById("verifyPasswordButton");
const passwordMessage = document.getElementById("passwordMessage");
const timerSetup = document.getElementById("timerSetup");
const quizContainer = document.getElementById("quizContainer");
const navButtons = document.getElementById("nav-buttons");
const pageIndicator = document.getElementById("pageIndicator");
const gotoPage = document.getElementById("goto-page");

// Checks if a password has expired by comparing the current time to the stored expiration timestamp
function isPasswordExpired(timestamp) {
    return Date.now() > timestamp;
}

// Removes expired passwords from the password list
function removeExpiredPasswords() {
    const savedPasswords = JSON.parse(localStorage.getItem("quizPasswords")) || {};
    for (let pwd in savedPasswords) {
        if (isPasswordExpired(savedPasswords[pwd])) {
            delete savedPasswords[pwd];
        }
    }
    localStorage.setItem("quizPasswords", JSON.stringify(savedPasswords));
}

// Verifies if the entered password is valid and not expired
function verifyPassword(inputPassword) {
    const savedPasswords = JSON.parse(localStorage.getItem("quizPasswords")) || {};
    if (savedPasswords[inputPassword] && !isPasswordExpired(savedPasswords[inputPassword])) {
        passwordMessage.textContent = "Password verified! Starting quiz.";
        showQuizElements();
    } else {
        passwordMessage.textContent = "Invalid or expired password. Please try again.";
    }
}

// Event listener for password verification
verifyPasswordButton.addEventListener("click", () => {
    verifyPassword(passwordInput.value);
});

// Shows quiz elements after successful password verification
function showQuizElements() {
    document.getElementById("passwordSection").style.display = "none";
    timerSetup.style.display = "block";
    quizContainer.style.display = "block";
    navButtons.style.display = "block";
    pageIndicator.style.display = "block";
    gotoPage.style.display = "block";
}

// Remove expired passwords on page load
window.onload = function() {
    removeExpiredPasswords();
    document.getElementById("passwordSection").style.display = "block";
    timerSetup.style.display = "none";
    quizContainer.style.display = "none";
    navButtons.style.display = "none";
    pageIndicator.style.display = "none";
    gotoPage.style.display = "none";
    passwordInput.value = ""; // Clear the password input
    passwordMessage.textContent = ""; // Clear previous messages
};

document.getElementById('submitButton').addEventListener('click', () => 
{
    // Show the modal when "Submit" is clicked
    document.getElementById('submitModal').style.display = 'flex';
});

document.getElementById('confirmSubmit').addEventListener('click', () => {
    // Handle quiz submission
    clearInterval(timer);
    calculateScore();
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('nav-buttons').style.display = 'none';
    document.getElementById('goto-page').style.display = 'none';
    document.getElementById('submitModal').style.display = 'none'; // Hide the modal
});

document.getElementById('cancelSubmit').addEventListener('click', () => {
    // Close the modal without submitting
    document.getElementById('submitModal').style.display = 'none';
});
// Function to display the submit modal
document.getElementById('submitButton').addEventListener('click', () => {
    document.getElementById('submissionContent').innerHTML = `
        <p>Are you sure you want to submit your quiz?</p>
        <button id="confirmSubmit" class="button">Yes, Submit</button>
        <button id="cancelSubmit" class="button cancel">Cancel</button>
    `;
    document.getElementById('submitModal').style.display = 'flex';

    // Confirm submit button
    document.getElementById('confirmSubmit').addEventListener('click', () => {
        // Calculate the score and display results in the modal
        clearInterval(timer);
        calculateScore();
        showSubmissionResults();
    });

    // Cancel button
    document.getElementById('cancelSubmit').addEventListener('click', () => {
        document.getElementById('submitModal').style.display = 'none';
    });
});

// Function to display submission results in the modal
function showSubmissionResults() {
    document.getElementById('submissionContent').innerHTML = `
        <h3>Your Score: ${totalScore}/${shuffledQuestions.length}</h3>
        <table id="resultTable">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                </tr>
            </thead>
            <tbody id="incorrectAnswersTable"></tbody>
        </table>
        <button class="button" id="closeModal">Close</button>
    `;

    // Add incorrect answers to the table
    const incorrectAnswersTable = document.getElementById('incorrectAnswersTable');
    shuffledQuestions.forEach((q, index) => {
        if (selectedAnswers[index] !== q.answer) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${q.question}</td>
                <td style="color: red;">${selectedAnswers[index] || 'No Answer'}</td>
                <td style="color: green;">${q.answer}</td>
            `;
            incorrectAnswersTable.appendChild(row);
        }
    });

    // Close modal button
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('submitModal').style.display = 'none';
    });
}