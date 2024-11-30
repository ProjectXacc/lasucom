// Question bank
const questionBank = [
     { "question": "What is the primary function of the pulmonary circulation?", options: ["Transport oxygen-rich blood to the body", "Transport oxygen-poor blood to the lungs", "Regulate blood pressure", "Filter waste products"], answer: "Transport oxygen-poor blood to the lungs" },
                { question: "Which structure prevents backflow of blood in the heart?", options: ["Valves", "Septum", "Aorta", "Coronary arteries"], answer: "Valves" },
                 { question: "What is the normal resting heart rate for an adult?", options: ["40–60 bpm", "60–100 bpm", "100–120 bpm", "120–150 bpm"], answer: "60–100 bpm" },
  { question: "Which heart valve is responsible for preventing backflow into the left ventricle?", options: ["Aortic valve", "Mitral valve", "Tricuspid valve", "Pulmonary valve"], answer: "Aortic valve" },
  { question: "The pacemaker of the heart is located in which node?", options: ["SA node", "AV node", "Bundle of His", "Purkinje fibers"], answer: "SA node" },
  { question: "Which law explains the relationship between the pressure and volume of the heart?", options: ["Frank-Starling Law", "Boyle's Law", "Laplace's Law", "Bernoulli's Principle"], answer: "Frank-Starling Law" },
  { question: "What is the primary function of hemoglobin in the blood?", options: ["Transport oxygen", "Regulate pH", "Fight infections", "Transport hormones"], answer: "Transport oxygen" },
  { question: "What percentage of blood is typically composed of plasma?", options: ["45%", "55%", "65%", "75%"], answer: "55%" },
  { question: "Which phase of the cardiac cycle is associated with ventricular contraction?", options: ["Systole", "Diastole", "Isovolumetric relaxation", "Ejection phase"], answer: "Systole" },
  { question: "Which of the following is responsible for increasing heart rate?", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Enteric nervous system"], answer: "Sympathetic nervous system" },
  { question: "What is the average cardiac output for a healthy adult at rest?", options: ["2 L/min", "5 L/min", "10 L/min", "15 L/min"], answer: "5 L/min" },
  { question: "Which blood vessels are primarily responsible for regulating blood pressure?", options: ["Arterioles", "Veins", "Capillaries", "Venules"], answer: "Arterioles" },
  { question: "Which component of the ECG represents atrial depolarization?", options: ["P wave", "QRS complex", "T wave", "U wave"], answer: "P wave" },
  { question: "The 'Lub' sound of the heart is caused by the closure of which valves?", options: ["AV valves", "Semilunar valves", "Aortic and pulmonary valves", "Mitral and tricuspid valves"], answer: "AV valves" },
  { question: "Which factor does not directly influence blood pressure?", options: ["Heart rate", "Blood viscosity", "Arterial radius", "Lung capacity"], answer: "Lung capacity" },
  { question: "Where is the vasomotor center located?", options: ["Medulla oblongata", "Cerebellum", "Pons", "Spinal cord"], answer: "Medulla oblongata" },
  { question: "What is the primary force that drives blood flow in the systemic circulation?", options: ["Blood pressure", "Osmotic pressure", "Lung expansion", "Blood viscosity"], answer: "Blood pressure" },
  { question: "Which hormone causes the kidneys to retain water and increase blood pressure?", options: ["Aldosterone", "Cortisol", "Antidiuretic hormone", "Epinephrine"], answer: "Antidiuretic hormone" },
  { question: "What is the normal range for systolic blood pressure in an adult?", options: ["80-100 mmHg", "100-120 mmHg", "120-140 mmHg", "140-160 mmHg"], answer: "100-120 mmHg" },
  { question: "Which structure in the heart prevents the backflow of blood from the right ventricle into the right atrium?", options: ["Tricuspid valve", "Bicuspid valve", "Aortic valve", "Pulmonary valve"], answer: "Tricuspid valve" },
  { question: "Which protein in blood is essential for clot formation?", options: ["Fibrin", "Hemoglobin", "Albumin", "Immunoglobulin"], answer: "Fibrin" },
  { question: "In which type of blood vessel is the velocity of blood flow the slowest?", options: ["Capillaries", "Arteries", "Veins", "Arterioles"], answer: "Capillaries" },
  { question: "Which part of the brain controls the respiratory rhythm?", options: ["Medulla oblongata", "Cerebellum", "Thalamus", "Frontal lobe"], answer: "Medulla oblongata" },
  { question: "What is the primary muscle involved in breathing?", options: ["Diaphragm", "Intercostal muscles", "Pectoralis major", "Latissimus dorsi"], answer: "Diaphragm" },
  { question: "What is the normal tidal volume in a healthy adult?", options: ["150 mL", "300 mL", "500 mL", "700 mL"], answer: "500 mL" },
  { question: "Oxygen binds to which part of the hemoglobin molecule?", options: ["Heme", "Globin", "Iron", "Protein chain"], answer: "Heme" },
  { question: "What term describes the maximum amount of air that can be exhaled after a maximum inhalation?", options: ["Vital capacity", "Tidal volume", "Inspiratory reserve volume", "Expiratory reserve volume"], answer: "Vital capacity" },
  { question: "What percentage of oxygen is transported dissolved in plasma?", options: ["1.5%", "10%", "20%", "50%"], answer: "1.5%" },
  { question: "Which gas law describes the relationship between pressure and volume in the lungs?", options: ["Boyle's Law", "Dalton's Law", "Henry's Law", "Charles' Law"], answer: "Boyle's Law" },
  { question: "Which receptor type in the carotid bodies responds to changes in blood pH?", options: ["Chemoreceptors", "Baroreceptors", "Mechanoreceptors", "Thermoreceptors"], answer: "Chemoreceptors" },
  { question: "Which structure prevents food from entering the trachea during swallowing?", options: ["Epiglottis", "Larynx", "Vocal cords", "Esophagus"], answer: "Epiglottis" },
  { question: "What is the partial pressure of oxygen (PaO2) in arterial blood?", options: ["40 mmHg", "60 mmHg", "80 mmHg", "100 mmHg"], answer: "100 mmHg" },
  { question: "What is the total lung capacity (TLC) in a healthy adult?", options: ["2-3 liters", "3-4 liters", "5-6 liters", "6-7 liters"], answer: "6-7 liters" },
  { question: "Which lung volume cannot be measured directly by spirometry?", options: ["Residual volume", "Tidal volume", "Vital capacity", "Inspiratory reserve volume"], answer: "Residual volume" },
  { question: "What is the primary driver for increased ventilation during exercise?", options: ["Increased CO2", "Decreased O2", "Increased pH", "Increased temperature"], answer: "Increased CO2" },
  { question: "Which condition is characterized by hyperinflation of the lungs and decreased alveolar surface area?", options: ["Emphysema", "Pneumonia", "Asthma", "Bronchitis"], answer: "Emphysema" },
  { question: "What is the term for the amount of air remaining in the lungs after a normal exhalation?", options: ["Functional residual capacity", "Residual volume", "Inspiratory reserve volume", "Expiratory reserve volume"], answer: "Functional residual capacity" },
  { question: "What is the primary function of surfactant in the lungs?", options: ["Reduce surface tension", "Increase surface area", "Trap particles", "Regulate oxygen diffusion"], answer: "Reduce surface tension" },
  { question: "Which lung zone has the highest perfusion during normal breathing?", options: ["Base", "Apex", "Middle", "Equal throughout"], answer: "Base" },
  { question: "Which cells in the alveoli are responsible for gas exchange?", options: ["Type I alveolar cells", "Type II alveolar cells", "Macrophages", "Ciliated cells"], answer: "Type I alveolar cells" },
  { question: "What is the normal respiratory rate for an adult at rest?", options: ["8-12 breaths/min", "12-16 breaths/min", "16-20 breaths/min", "20-24 breaths/min"], answer: "12-16 breaths/min" },
  { question: "Which structure carries deoxygenated blood to the lungs?", options: ["Pulmonary artery", "Pulmonary vein", "Bronchial artery", "Aorta"], answer: "Pulmonary artery" },

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
    "car": new Date("2024-12-15T23:59:59").getTime()  // Custom expiration date and time
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