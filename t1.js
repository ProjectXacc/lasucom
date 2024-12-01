// Question bank
const questionBank = [
      {
    question: "Which of the following mediators causes diapedesis?",
    options: ["CD31", "ICAM-1", "Selectins", "VCAM-1"],
    answer: "CD31"
  },
  {
    question: "Which of these is not a process in artificial intelligence?",
    options: ["Learning", "Reasoning", "Forgetting", "Classification"],
    answer: "Forgetting"
  },
  {
    question: "Which of the following is a proapoptotic molecule?",
    options: ["Bcl-2", "BAX", "Mcl-1", "Survivin"],
    answer: "BAX"
  },
  {
    question: "What is the Circle of Willis primarily responsible for?",
    options: ["Brain blood supply", "Cerebrospinal fluid production", "Pulmonary circulation", "Cardiac output regulation"],
    answer: "Brain blood supply"
  },
  {
    question: "The parietal lobe of the brain is primarily associated with?",
    options: ["Motor control", "Sensory processing", "Vision", "Memory"],
    answer: "Sensory processing"
  },
  {
    question: "Which of these does not participate in bacterial killing?",
    options: ["Reactive oxygen species", "Reactive nitrogen species", "Reactive hydrogen species", "Lysosomal enzymes"],
    answer: "Reactive hydrogen species"
  },
  {
    question: "Which of the following is a tumor suppressor gene?",
    options: ["BRCA1", "MYC", "HER2", "RAS"],
    answer: "BRCA1"
  },
  {
    question: "Memory cells are important because?",
    options: [
      "They prevent infection entirely",
      "They react faster after antigen exposure",
      "They enhance primary immune response",
      "They eliminate all pathogens immediately"
    ],
    answer: "They react faster after antigen exposure"
  },
  {
    question: "Which of the following occurs in living tissue?",
    options: ["Autolysis", "Necrosis", "Autophagy", "Cytolysis"],
    answer: "Autophagy"
  },
  {
    question: "Which of these bacteria is linked to cancer?",
    options: ["H. influenzae", "H. pylori", "E. coli", "S. aureus"],
    answer: "H. pylori"
  },
  {
    question: "Concerning radiation carcinogenesis, which is correct?",
    options: ["UVB (280-320 nm)", "UVA (320-400 nm)", "X-rays (low dose)", "Infrared radiation"],
    answer: "UVB (280-320 nm)"
  },
  {
    question: "Which of the following is true?",
    options: [
      "EBV causes nasopharyngeal cancer",
      "HPV causes hepatocellular carcinoma",
      "HIV directly causes cancer",
      "H. pylori causes lymphoma only"
    ],
    answer: "EBV causes nasopharyngeal cancer"
  },
  {
    question: "A right-dominant coronary artery is characterized by?",
    options: [
      "Right coronary artery giving rise to posterior descending artery",
      "Left circumflex artery supplying the right ventricle",
      "Balanced supply from both coronaries",
      "Only left coronary dominance"
    ],
    answer: "Right coronary artery giving rise to posterior descending artery"
  },
  {
    question: "Grading in cancer refers to?",
    options: ["Tumor size", "Stage of metastasis", "Degree of differentiation", "Lymphatic invasion"],
    answer: "Degree of differentiation"
  },
  {
    question: "Which of the following is not a mediator of acute inflammation?",
    options: ["Histamine", "TNF-alpha", "IL-1", "Dopamine"],
    answer: "Dopamine"
  },
  {
    question: "Mast cells produce which of the following preformed mediators?",
    options: ["Prostaglandins", "Histamine", "Leukotrienes", "Cytokines"],
    answer: "Histamine"
  },
  {
    question: "Which of the following is an opsonin?",
    options: ["IgA", "IgG", "C5a", "Fibrinogen"],
    answer: "IgG"
  },
  {
    question: "Which of these is a fixative used in histology?",
    options: ["Haematoxylin", "Formalin", "Eosin", "Toluene"],
    answer: "Formalin"
  },
  {
    question: "Putrefying bacteria cause necrosis on already dead cells. This is called?",
    options: ["Coagulative necrosis", "Liquefactive necrosis", "Gangrenous necrosis", "Caseous necrosis"],
    answer: "Gangrenous necrosis"
  },
  {
    question: "Which of these differentiates the large intestine from the small intestine?",
    options: [
      "Presence of villi in the large intestine",
      "Presence of Peyer's patches",
      "Tania coli in the large intestine",
      "Absence of crypts in the large intestine"
    ],
    answer: "Tania coli in the large intestine"
  },
  {
    question: "Cancer causes which of the following effects?",
    options: [
      "Tumor compresses surrounding organs",
      "Tumor prevents angiogenesis",
      "Tumor suppresses its own growth",
      "Tumor cells repair damaged DNA"
    ],
    answer: "Tumor compresses surrounding organs"
  },
  {
    question: "Factors promoting metastasis include?",
    options: [
      "Increasing ECM degradation",
      "Decreasing vascularization",
      "Preventing migration",
      "Enhancing cell adhesion"
    ],
    answer: "Increasing ECM degradation"
  },
  {
    question: "A hallmark of cancer is?",
    options: [
      "Limited replicative potential",
      "Loss of vascular supply",
      "Enhanced apoptosis",
      "Stable genome"
    ],
    answer: "Limited replicative potential"
  },
  {
    question: "Which of these is characteristic of an X-linked disorder?",
    options: [
      "Skipped generations in pedigree",
      "Always affects females",
      "Autosomal dominance",
      "Equal transmission to both sexes"
    ],
    answer: "Skipped generations in pedigree"
  },
  {
    question: "Autosomal recessive disorders typically?",
    options: [
      "Appear late in life",
      "Appear early in life",
      "Skip generations",
      "Affect males more frequently"
    ],
    answer: "Appear early in life"
  },
  {
    question: "Aneuploidy results from?",
    options: ["Nondisjunction", "Point mutations", "Translocations", "Gene deletions"],
    answer: "Nondisjunction"
  },
  {
    question: "What causes red infarcts?",
    options: ["Lung infarctions", "Kidney infarctions", "Arterial occlusion", "Venous obstruction"],
    answer: "Lung infarctions"
  },
  {
    question: "What is the primary cause of white infarcts?",
    options: ["Arterial occlusion", "Venous obstruction", "Hyperemia", "Reperfusion"],
    answer: "Arterial occlusion"
  },
  {
    question: "What is a key feature of shock pathogenesis?",
    options: ["Reperfusion injury", "Increased vascular resistance", "Normal oxygen delivery", "Stable hemodynamics"],
    answer: "Reperfusion injury"
  },
  {
    question: "MHC Class II genes are found on?",
    options: ["HLA-D", "HLA-A", "HLA-C", "HLA-B"],
    answer: "HLA-D"
  },
  {
    question: "What is the main reason for performing an autopsy?",
    options: [
      "Determining the cause of death",
      "Academic research",
      "Funeral preparation",
      "To certify death"
    ],
    answer: "Determining the cause of death"
  },
  {
    question: "Which of these is not considered a medicolegal autopsy?",
    options: [
      "Sudden death",
      "Prolonged hospital stay with known cause of death",
      "Unknown cause of death",
      "Suspicious circumstances"
    ],
    answer: "Prolonged hospital stay with known cause of death"
  },
  {
    question: "Which of the following is very important in cancer diagnosis?",
    options: [
      "Histopathology",
      "Blood smear",
      "Radiological imaging",
      "Genetic screening"
    ],
    answer: "Histopathology"
  },
  {
    question: "Which of these must be present for cancer to occur?",
    options: [
      "Initiator and promoter",
      "Promoter alone",
      "Mutator alone",
      "Initiator alone"
    ],
    answer: "Initiator and promoter"
  },
  {
    question: "Prothrombin time is used to evaluate?",
    options: ["Extrinsic pathway", "Intrinsic pathway", "Platelet count", "Fibrinolysis"],
    answer: "Extrinsic pathway"
  },
  {
    question: "Which of the following stops inflammation?",
    options: ["TGF-beta", "IL-1", "TNF-alpha", "Histamine"],
    answer: "TGF-beta"
  },
  {
    question: "Which of the following causes acute inflammation?",
    options: ["Infection", "Tumor", "Atherosclerosis", "Degeneration"],
    answer: "Infection"
  },
  {
    question: "What is the standard approach to treating cancer?",
    options: [
      "Surgical approach",
      "Radiotherapy alone",
      "Multidisciplinary approach",
      "Chemotherapy alone"
    ],
    answer: "Multidisciplinary approach"
  },
  {
    question: "What type of cell swelling occurs during reversible cell injury?",
    options: ["Hydropic swelling", "Pyknosis", "Karyolysis", "Necrosis"],
    answer: "Hydropic swelling"
  },
  {
    question: "What is a key characteristic of a red infarct?",
    options: ["Occurs in the lungs", "Results from arterial occlusion", "Happens in solid organs", "Associated with ischemia"],
    answer: "Occurs in the lungs"
  },
  {
    question: "White infarcts are most commonly caused by?",
    options: ["Arterial occlusion", "Venous obstruction", "Reperfusion injury", "Increased vascular permeability"],
    answer: "Arterial occlusion"
  },
  {
    question: "What is a primary feature of the pathogenesis of shock?",
    options: ["Reperfusion injury", "Decreased vascular permeability", "Increased oxygen delivery", "Stable blood pressure"],
    answer: "Reperfusion injury"
  },
  {
    question: "Which of these is essential for initiating an immune response in MHC Class II molecules?",
    options: ["HLA-D", "HLA-A", "HLA-B", "HLA-C"],
    answer: "HLA-D"
  },
  {
    question: "MHC Class II molecules primarily present antigens to?",
    options: ["CD4+ T cells", "CD8+ T cells", "B cells", "Natural killer cells"],
    answer: "CD4+ T cells"
  },
  {
    question: "What is the main reason for performing a medicolegal autopsy?",
    options: [
      "To determine the cause of death",
      "For academic research",
      "To assist in funeral arrangements",
      "To confirm death certification"
    ],
    answer: "To determine the cause of death"
  },
  {
    question: "What hallmark is crucial for a cancer cell's immortality?",
    options: [
      "Limitless replicative potential",
      "Uncontrolled apoptosis",
      "Enhanced angiogenesis",
      "Increased inflammation"
    ],
    answer: "Limitless replicative potential"
  },
  {
    question: "Which organelle is responsible for energy production in the cell?",
    options: ["Mitochondria", "Golgi apparatus", "Ribosomes", "Endoplasmic reticulum"],
    answer: "Mitochondria"
  },
  {
    question: "Which of these is not a hallmark of acute inflammation?",
    options: ["Pain", "Redness", "Fever", "Fibrosis"],
    answer: "Fibrosis"
  },
  {
    question: "What type of hypersensitivity is mediated by IgE antibodies?",
    options: ["Type I", "Type II", "Type III", "Type IV"],
    answer: "Type I"
  },
  {
    question: "What type of necrosis is commonly seen in tuberculosis?",
    options: ["Caseous necrosis", "Coagulative necrosis", "Fat necrosis", "Liquefactive necrosis"],
    answer: "Caseous necrosis"
  },
  {
    question: "Which of the following cytokines is anti-inflammatory?",
    options: ["IL-10", "TNF-alpha", "IL-6", "IL-1"],
    answer: "IL-10"
  },
  {
    question: "Which phase of the cell cycle is DNA synthesized?",
    options: ["S phase", "G1 phase", "G2 phase", "M phase"],
    answer: "S phase"
  },
  {
    question: "Which of the following is a feature of apoptosis?",
    options: ["Cell shrinkage", "Inflammation", "Loss of membrane integrity", "Necrotic debris"],
    answer: "Cell shrinkage"
  },
  {
    question: "Which of these enzymes is responsible for breaking down fibrin clots?",
    options: ["Plasmin", "Thrombin", "Factor X", "Prothrombin"],
    answer: "Plasmin"
  },
  {
    question: "Which type of hypersensitivity involves immune complex deposition?",
    options: ["Type III", "Type I", "Type II", "Type IV"],
    answer: "Type III"
  },
  {
    question: "What is the function of natural killer (NK) cells?",
    options: [
      "Kill virus-infected cells",
      "Produce antibodies",
      "Present antigens to T cells",
      "Stimulate B cells"
    ],
    answer: "Kill virus-infected cells"
  },
  {
    question: "What is the primary antibody in mucosal immunity?",
    options: ["IgA", "IgG", "IgM", "IgE"],
    answer: "IgA"
  },
  {
    question: "What is the major function of albumin in the plasma?",
    options: [
      "Maintaining oncotic pressure",
      "Transporting oxygen",
      "Clot formation",
      "Immune defense"
    ],
    answer: "Maintaining oncotic pressure"
  },
  {
    question: "Which vitamin deficiency leads to scurvy?",
    options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin A"],
    answer: "Vitamin C"
  },
  {
    question: "What type of anemia is caused by vitamin B12 deficiency?",
    options: ["Megaloblastic anemia", "Iron-deficiency anemia", "Aplastic anemia", "Hemolytic anemia"],
    answer: "Megaloblastic anemia"
  },
  {
    question: "Which type of immunity is conferred by vaccination?",
    options: [
      "Active artificial immunity",
      "Passive artificial immunity",
      "Active natural immunity",
      "Passive natural immunity"
    ],
    answer: "Active artificial immunity"
  },
  {
    question: "What is the most common cause of myocardial infarction?",
    options: [
      "Atherosclerotic plaque rupture",
      "Viral myocarditis",
      "Coronary artery spasm",
      "Pulmonary embolism"
    ],
    answer: "Atherosclerotic plaque rupture"
  },
  {
    question: "Which of the following is a granulocyte?",
    options: ["Neutrophil", "Monocyte", "Lymphocyte", "Macrophage"],
    answer: "Neutrophil"
  },
  {
    question: "What type of necrosis is seen in pancreatitis?",
    options: ["Fat necrosis", "Caseous necrosis", "Coagulative necrosis", "Liquefactive necrosis"],
    answer: "Fat necrosis"
  },
  {
    question: "Which part of the immune system provides the first line of defense?",
    options: ["Innate immunity", "Adaptive immunity", "Cell-mediated immunity", "Humoral immunity"],
    answer: "Innate immunity"
  },
  {
    question: "Which electrolyte imbalance is most associated with arrhythmias?",
    options: ["Potassium", "Calcium", "Sodium", "Magnesium"],
    answer: "Potassium"
  },
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
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
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