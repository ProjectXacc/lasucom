// Question bank
const questionBank = [
       { question: "Which type of bond stabilizes the secondary structure of proteins?", options: ["Hydrogen bond", "Covalent bond", "Ionic bond", "Van der Waals forces"], answer: "Hydrogen bond" },
                { "question": "Which monosaccharide is a component of lactose?", "options": ["Glucose", "Fructose", "Galactose", "Ribose"], "answer": "Galactose" },
        { "question": "Which amino acid contains sulfur?", "options": ["Methionine", "Leucine", "Valine", "Serine"], "answer": "Methionine" },
        { "question": "What is the primary function of albumin in blood?", "options": ["Enzyme catalysis", "Oxygen transport", "Maintaining osmotic pressure", "Hormone transport"], "answer": "Maintaining osmotic pressure" },
        { "question": "Which lipid class is the primary component of cell membranes?", "options": ["Phospholipids", "Triglycerides", "Steroids", "Waxes"], "answer": "Phospholipids" },
        { "question": "Vitamin C is also known as?", "options": ["Thiamine", "Ascorbic acid", "Folate", "Niacin"], "answer": "Ascorbic acid" },
        { "question": "Which mineral is essential for hemoglobin synthesis?", "options": ["Iron", "Zinc", "Calcium", "Potassium"], "answer": "Iron" },
        { "question": "What is the active site of an enzyme?", "options": ["The location where substrates bind", "The site where inhibitors attach", "The enzyme’s storage area", "The site where coenzymes bind"], "answer": "The location where substrates bind" },
        { "question": "The genetic code is universal except in which organisms?", "options": ["Eukaryotes", "Prokaryotes", "Mitochondria", "Viruses"], "answer": "Mitochondria" },
        { "question": "The powerhouse of the cell is known as?", "options": ["Nucleus", "Endoplasmic reticulum", "Golgi apparatus", "Mitochondria"], "answer": "Mitochondria" },
        { "question": "Which base is unique to RNA?", "options": ["Thymine", "Adenine", "Uracil", "Cytosine"], "answer": "Uracil" },
        { "question": "During which phase of mitosis do chromosomes align in the center of the cell?", "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"], "answer": "Metaphase" },
        { "question": "What does the Michaelis constant (Km) represent?", "options": ["Maximum velocity", "Enzyme-substrate affinity", "Reaction rate", "Inhibitor concentration"], "answer": "Enzyme-substrate affinity" },
        { "question": "A buffer solution can resist changes in pH because it contains?", "options": ["Strong acids", "Weak acids and their salts", "Strong bases", "Salts only"], "answer": "Weak acids and their salts" },
        { "question": "The primary structure of a protein is determined by?", "options": ["Hydrogen bonds", "Amino acid sequence", "Disulfide bonds", "3D folding pattern"], "answer": "Amino acid sequence" },
        { "question": "Which of these is a reducing sugar?", "options": ["Glucose", "Sucrose", "Starch", "Cellulose"], "answer": "Glucose" },
        { "question": "What is the basic unit of nucleic acids?", "options": ["Nucleotide", "Amino acid", "Monosaccharide", "Fatty acid"], "answer": "Nucleotide" },
        { "question": "Which vitamin is crucial for calcium absorption?", "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], "answer": "Vitamin D" },
        { "question": "The function of tRNA is to?", "options": ["Carry DNA instructions", "Deliver amino acids", "Generate energy", "Replicate DNA"], "answer": "Deliver amino acids" },
        { "question": "The TCA cycle occurs in the?", "options": ["Nucleus", "Mitochondria", "Cytoplasm", "Golgi apparatus"], "answer": "Mitochondria" },
        { "question": "Which bond forms the backbone of DNA?", "options": ["Hydrogen bond", "Phosphodiester bond", "Peptide bond", "Ionic bond"], "answer": "Phosphodiester bond" },
        { "question": "An allosteric enzyme has?", "options": ["One active site", "Multiple active sites", "Active and regulatory sites", "Only regulatory sites"], "answer": "Active and regulatory sites" },
        { "question": "What is the pH of neutral solutions?", "options": ["7", "5", "3", "9"], "answer": "7" },
        { "question": "Which organ stores glycogen?", "options": ["Liver", "Heart", "Pancreas", "Kidney"], "answer": "Liver" },
        { "question": "The codon AUG is known as the?", "options": ["Stop codon", "Start codon", "Mutation site", "Splicing signal"], "answer": "Start codon" },
        { "question": "Phospholipids are characterized by their?", "options": ["Hydrophobic nature", "Amphipathic nature", "Hydrophilic nature", "Nonpolar nature"], "answer": "Amphipathic nature" },
        { "question": "Which enzyme catalyzes the conversion of glucose to glucose-6-phosphate?", "options": ["Hexokinase", "Phosphofructokinase", "Glucose-6-phosphatase", "Lactase"], "answer": "Hexokinase" },
        { "question": "ATP synthesis in mitochondria occurs via?", "options": ["Substrate-level phosphorylation", "Photophosphorylation", "Oxidative phosphorylation", "Direct coupling"], "answer": "Oxidative phosphorylation" },
        { "question": "What is the role of ribosomes?", "options": ["Lipid synthesis", "Protein synthesis", "DNA replication", "Energy production"], "answer": "Protein synthesis" },
        { "question": "NAD+ functions as a?", "options": ["Oxidizing agent", "Reducing agent", "Enzyme", "Substrate"], "answer": "Oxidizing agent" },
        { "question": "Which macromolecule can form micelles in water?", "options": ["Carbohydrates", "Proteins", "Lipids", "Nucleic acids"], "answer": "Lipids" },
        { "question": "Inhibitors that bind to the active site are known as?", "options": ["Competitive inhibitors", "Noncompetitive inhibitors", "Allosteric inhibitors", "Uncompetitive inhibitors"], "answer": "Competitive inhibitors" },
        { "question": "A molecule that binds to an enzyme away from the active site is called?", "options": ["Substrate", "Product", "Allosteric modulator", "Coenzyme"], "answer": "Allosteric modulator" },
        { "question": "Which mineral is vital for ATP synthesis?", "options": ["Magnesium", "Iron", "Calcium", "Zinc"], "answer": "Magnesium" },
        { "question": "What is the term for DNA to RNA transcription?", "options": ["Translation", "Replication", "Mutation", "Transcription"], "answer": "Transcription" },
        { "question": "Which process describes RNA to protein?", "options": ["Translation", "Transcription", "Replication", "Elongation"], "answer": "Translation" },
        { "question": "During mitosis, sister chromatids separate during?", "options": ["Anaphase", "Prophase", "Metaphase", "Telophase"], "answer": "Anaphase" },
        { "question": "Enzymes with different structures but similar functions are called?", "options": ["Isoenzymes", "Apoenzymes", "Holoenzymes", "Proenzymes"], "answer": "Isoenzymes" },
        { "question": "The effect of pH on enzymes is often due to?", "options": ["Changes in substrate concentration", "Alteration in active site structure", "Enzyme denaturation", "Water availability"], "answer": "Alteration in active site structure" },
        { "question": "Hydrogen bonds are important in stabilizing?", "options": ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"], "answer": "Secondary structure" },
        { "question": "Which of the following is an essential amino acid?", "options": ["Glutamate", "Alanine", "Leucine", "Glycine"], "answer": "Leucine" },
        { "question": "What is the main nitrogenous waste in humans?", "options": ["Urea", "Ammonia", "Uric acid", "Creatinine"], "answer": "Urea" },
        { "question": "The fluid mosaic model describes the structure of?", "options": ["DNA", "Cell membrane", "Nucleus", "Ribosomes"], "answer": "Cell membrane" },
        { "question": "Which vitamin deficiency causes scurvy?", "options": ["Vitamin B12", "Vitamin A", "Vitamin C", "Vitamin D"], "answer": "Vitamin C" },
        { "question": "What is the precursor molecule for steroid hormones?", "options": ["Phospholipid", "Cholesterol", "Triglyceride", "Lecithin"], "answer": "Cholesterol" },
        { "question": "The pH range for most enzyme activity is?", "options": ["3-5", "5-7", "6-8", "8-10"], "answer": "6-8" },
        { "question": "In glycolysis, glucose is converted to?", "options": ["Acetyl-CoA", "Lactate", "Pyruvate", "Citric acid"], "answer": "Pyruvate" },
        { "question": "The backbone of a polypeptide chain consists of?", "options": ["Amino groups only", "Carbonyl groups only", "Amino and carboxyl groups", "Carbohydrates"], "answer": "Amino and carboxyl groups" },
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
 "mightdeletelater": new Date("2024-12-07T23:59:59").getTime(), // Custom expiration date and time
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