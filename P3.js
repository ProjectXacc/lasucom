// Question bank
const questionBank = [
           { "question": "Which organ is responsible for the production of urine?", options: ["Liver", "Kidney", "Pancreas", "Bladder"], answer: "Kidney" },
                { "question": "What is the primary function of the small intestine?", options: ["Absorption of nutrients", "Production of bile", "Storage of food", "Waste elimination"], answer: "Absorption of nutrients" },
                { "question": "Which enzyme is primarily responsible for carbohydrate digestion in the mouth?", options: ["Amylase", "Pepsin", "Lipase", "Trypsin"], answer: "Amylase" },
  { question: "What is the main function of bile?", options: ["Emulsify fats", "Digest proteins", "Neutralize acids", "Absorb nutrients"], answer: "Emulsify fats" },
  { question: "Which hormone stimulates the release of gastric acid?", options: ["Gastrin", "Secretin", "CCK", "Motilin"], answer: "Gastrin" },
  { question: "Where in the digestive tract does most nutrient absorption occur?", options: ["Small intestine", "Stomach", "Large intestine", "Esophagus"], answer: "Small intestine" },
  { question: "Which structure increases the surface area for absorption in the small intestine?", options: ["Villi", "Rugae", "Microvilli", "Cilia"], answer: "Villi" },
  { question: "Which cells in the stomach produce hydrochloric acid?", options: ["Parietal cells", "Chief cells", "G cells", "Goblet cells"], answer: "Parietal cells" },
  { question: "What is the primary role of the large intestine?", options: ["Water absorption", "Protein digestion", "Fat emulsification", "Glucose absorption"], answer: "Water absorption" },
  { question: "The enteric nervous system is sometimes called what?", options: ["'The second brain'", "'The central system'", "'The spinal network'", "'The hepatic control'"], answer: "'The second brain'" },
  { question: "What enzyme breaks down proteins in the stomach?", options: ["Pepsin", "Amylase", "Lipase", "Lactase"], answer: "Pepsin" },
  { question: "Where is the hormone secretin released?", options: ["Duodenum", "Stomach", "Pancreas", "Gallbladder"], answer: "Duodenum" },
  { question: "Which vitamin is synthesized by bacteria in the large intestine?", options: ["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin B12"], answer: "Vitamin K" },
  { question: "What does CCK stimulate in digestion?", options: ["Release of bile", "Production of saliva", "Inhibition of gastric emptying", "Release of insulin"], answer: "Release of bile" },
  { question: "What is the role of the liver in digestion?", options: ["Produce bile", "Absorb water", "Produce gastric acid", "Store glycogen"], answer: "Produce bile" },
  { question: "The brush border is found in which part of the GI tract?", options: ["Small intestine", "Large intestine", "Stomach", "Esophagus"], answer: "Small intestine" },
  { question: "Which enzyme is released by the pancreas to digest proteins?", options: ["Trypsin", "Amylase", "Lipase", "Pepsin"], answer: "Trypsin" },
  { question: "The hormone motilin increases what kind of movements in the digestive tract?", options: ["Peristaltic", "Segmental", "Mixing", "None"], answer: "Peristaltic" },
  { question: "Which digestive hormone decreases gastric emptying?", options: ["CCK", "Gastrin", "Secretin", "Motilin"], answer: "CCK" },
  { question: "What is the pH range of the stomach during active digestion?", options: ["1-2", "4-5", "6-7", "7-8"], answer: "1-2" },
  { question: "Which part of the pancreas produces digestive enzymes?", options: ["Acinar cells", "Beta cells", "Alpha cells", "Goblet cells"], answer: "Acinar cells" },
  { question: "What is the primary nutrient absorbed in the ileum?", options: ["Vitamin B12", "Carbohydrates", "Proteins", "Fatty acids"], answer: "Vitamin B12" },
  { question: "Which hormone is known as the 'hunger hormone'?", options: ["Ghrelin", "Leptin", "Insulin", "Gastrin"], answer: "Ghrelin" },
  { question: "What structure prevents acid reflux in the esophagus?", options: ["Lower esophageal sphincter", "Upper esophageal sphincter", "Pyloric sphincter", "Ileocecal valve"], answer: "Lower esophageal sphincter" },
  { question: "Where does protein digestion begin?", options: ["Stomach", "Mouth", "Small intestine", "Large intestine"], answer: "Stomach" },
  { question: "What is the major function of the gallbladder?", options: ["Store bile", "Produce bile", "Store insulin", "Absorb nutrients"], answer: "Store bile" },
  { question: "What triggers the release of pancreatic juice?", options: ["Secretin", "Gastrin", "Leptin", "Motilin"], answer: "Secretin" },

  // Renal Physiology
  { question: "What is the primary functional unit of the kidney?", options: ["Nephron", "Glomerulus", "Ureter", "Bowman's capsule"], answer: "Nephron" },
  { question: "What process occurs in the glomerulus?", options: ["Filtration", "Reabsorption", "Secretion", "Excretion"], answer: "Filtration" },
  { question: "Which hormone increases water reabsorption in the kidneys?", options: ["ADH", "Aldosterone", "Renin", "Cortisol"], answer: "ADH" },
  { question: "What is the main function of the loop of Henle?", options: ["Concentrate urine", "Dilute plasma", "Reabsorb glucose", "Filter blood"], answer: "Concentrate urine" },
  { question: "Which part of the nephron is impermeable to water?", options: ["Ascending loop of Henle", "Descending loop of Henle", "Proximal tubule", "Collecting duct"], answer: "Ascending loop of Henle" },
  { question: "The release of which hormone is stimulated by low blood pressure?", options: ["Renin", "Insulin", "Gastrin", "Cortisol"], answer: "Renin" },
  { question: "Where does most sodium reabsorption occur in the nephron?", options: ["Proximal tubule", "Loop of Henle", "Distal tubule", "Collecting duct"], answer: "Proximal tubule" },
  { question: "Which substance is not normally found in the glomerular filtrate?", options: ["Proteins", "Glucose", "Urea", "Electrolytes"], answer: "Proteins" },
  { question: "Where is ADH produced?", options: ["Hypothalamus", "Pituitary gland", "Adrenal cortex", "Liver"], answer: "Hypothalamus" },
  { question: "What effect does aldosterone have on sodium in the kidneys?", options: ["Increases reabsorption", "Decreases reabsorption", "Increases excretion", "No effect"], answer: "Increases reabsorption" },
  { question: "What is the function of the juxtaglomerular apparatus?", options: ["Regulate blood pressure", "Filter blood", "Reabsorb potassium", "Concentrate urine"], answer: "Regulate blood pressure" },
  { question: "Which part of the kidney contains the glomeruli?", options: ["Cortex", "Medulla", "Renal pelvis", "Papilla"], answer: "Cortex" },
  { question: "What is the term for the volume of plasma filtered per unit time by the kidneys?", options: ["Glomerular filtration rate", "Tubular reabsorption rate", "Renal blood flow", "Urinary clearance"], answer: "Glomerular filtration rate" },
  { question: "In what part of the nephron does most water reabsorption occur?", options: ["Proximal tubule", "Loop of Henle", "Distal tubule", "Collecting duct"], answer: "Proximal tubule" },
  { question: "Which part of the nephron is sensitive to aldosterone?", options: ["Distal tubule", "Proximal tubule", "Loop of Henle", "Bowman's capsule"], answer: "Distal tubule" },
  { question: "Which ion's reabsorption is promoted by parathyroid hormone in the kidneys?", options: ["Calcium", "Sodium", "Potassium", "Chloride"], answer: "Calcium" },
  { question: "Which of the following is used to measure renal plasma flow?", options: ["PAH clearance", "Inulin clearance", "Glucose clearance", "Creatinine clearance"], answer: "PAH clearance" },
  { question: "What is the typical osmolarity of human urine?", options: ["500-800 mOsm/L", "800-1200 mOsm/L", "200-400 mOsm/L", "50-100 mOsm/L"], answer: "800-1200 mOsm/L" },
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
    "pin": new Date("2024-12-01T23:59:59").getTime(), // Custom expiration date and time
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