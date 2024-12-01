// Question bank
const questionBank = [
       { "question": "Which enzyme is responsible for DNA synthesis during replication?", options: ["DNA polymerase", "RNA polymerase", "Ligase", "Helicase"], answer: "DNA polymerase" },
                { "question": "What is the primary function of antibodies in the immune response?", "options": ["Neutralizing toxins", "Producing hormones", "Transmitting nerve signals", "Storing energy"], "answer": "Neutralizing toxins" },
        { "question": "Which nutrient is essential for the synthesis of nucleic acids?", "options": ["Carbohydrates", "Proteins", "Lipids", "Vitamins"], "answer": "Proteins" },
        { "question": "What structure do bacteria use to transfer genetic material during conjugation?", "options": ["Pilus", "Flagellum", "Cilia", "Capsule"], "answer": "Pilus" },
        { "question": "What is the main purpose of recombinant DNA technology?", "options": ["To create new proteins", "To synthesize vitamins", "To isolate microbes", "To enhance food preservation"], "answer": "To create new proteins" },
        { "question": "Which vitamin deficiency can lead to impaired immune function?", "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], "answer": "Vitamin A" },
        { "question": "Which type of RNA carries amino acids to the ribosome during protein synthesis?", "options": ["mRNA", "tRNA", "rRNA", "siRNA"], "answer": "tRNA" },
        { "question": "What is the role of the enzyme reverse transcriptase?", "options": ["DNA replication", "RNA synthesis", "Conversion of RNA to DNA", "Protein synthesis"], "answer": "Conversion of RNA to DNA" },
        { "question": "Which microbial metabolic pathway is responsible for the production of ethanol from glucose?", "options": ["Lactic acid fermentation", "Alcoholic fermentation", "Aerobic respiration", "Anaerobic respiration"], "answer": "Alcoholic fermentation" },
        { "question": "What is the primary function of the complement system in immunity?", "options": ["Antigen presentation", "Pathogen lysis", "Phagocytosis enhancement", "Antibody production"], "answer": "Pathogen lysis" },
        { "question": "In molecular cloning, what is the role of a plasmid?", "options": ["Energy storage", "Gene expression", "Gene transfer", "Protein synthesis"], "answer": "Gene transfer" },
        { "question": "Which method is commonly used to amplify DNA segments?", "options": ["Gel electrophoresis", "PCR", "DNA sequencing", "Southern blotting"], "answer": "PCR" },
        { "question": "What is the primary source of energy for bacteria in the human gut?", "options": ["Glucose", "Fatty acids", "Amino acids", "Short-chain fatty acids"], "answer": "Short-chain fatty acids" },
        { "question": "Which component of the immune system is responsible for cell-mediated immunity?", "options": ["B cells", "T cells", "Antibodies", "Complement proteins"], "answer": "T cells" },
        { "question": "What is the main function of cytokines in the immune response?", "options": ["Cell signaling", "Energy production", "Pathogen destruction", "Antibody production"], "answer": "Cell signaling" },
        { "question": "Which of the following is a characteristic of a pathogen?", "options": ["It is always beneficial", "It can cause disease", "It is non-living", "It does not reproduce"], "answer": "It can cause disease" },
        { "question": "What is the role of ribosomes in a cell?", "options": ["Energy production", "Protein synthesis", "DNA replication", "RNA degradation"], "answer": "Protein synthesis" },
        { "question": "Which nucleic acid is responsible for carrying the genetic information of most viruses?", "options": ["DNA", "RNA", "Protein", "Carbohydrate"], "answer": "RNA" },
        { "question": "Which nutrient serves as the primary energy source for microbial growth?", "options": ["Lipids", "Proteins", "Carbohydrates", "Nucleic acids"], "answer": "Carbohydrates" },
        { "question": "What is the main advantage of using recombinant DNA technology in medicine?", "options": ["Increased disease transmission", "Rapid protein production", "Reduced patient compliance", "Enhanced viral replication"], "answer": "Rapid protein production" },
        { "question": "Which vitamin is crucial for collagen synthesis and immune function?", "options": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B6"], "answer": "Vitamin C" },
        { "question": "What type of mutation involves a change in a single nucleotide?", "options": ["Insertion", "Deletion", "Substitution", "Frameshift"], "answer": "Substitution" },
        { "question": "Which process involves the uptake of naked DNA by a bacterial cell?", "options": ["Transduction", "Conjugation", "Transformation", "Replication"], "answer": "Transformation" },
        { "question": "What is the main function of lysozyme in the immune system?", "options": ["To produce antibodies", "To lyse bacterial cell walls", "To activate complement", "To neutralize toxins"], "answer": "To lyse bacterial cell walls" },
        { "question": "Which metabolic process occurs in the mitochondria and produces ATP?", "options": ["Glycolysis", "Fermentation", "Krebs cycle", "Lactic acid fermentation"], "answer": "Krebs cycle" },
        { "question": "What is the primary function of aquaporins in microbial cells?", "options": ["Transporting ions", "Facilitating water movement", "Transporting glucose", "Generating ATP"], "answer": "Facilitating water movement" },
        { "question": "What type of biomolecule are enzymes classified as?", "options": ["Lipids", "Nucleic acids", "Proteins", "Carbohydrates"], "answer": "Proteins" },
        { "question": "Which component of the immune system helps in the direct killing of infected cells?", "options": ["B cells", "Cytotoxic T cells", "Helper T cells", "Antibodies"], "answer": "Cytotoxic T cells" },
        { "question": "Which genetic technique is used to analyze the expression of multiple genes simultaneously?", "options": ["Northern blotting", "Microarray", "PCR", "Western blotting"], "answer": "Microarray" },
        { "question": "What is the role of the enzyme DNA ligase?", "options": ["To separate DNA strands", "To synthesize RNA", "To join DNA fragments", "To degrade RNA"], "answer": "To join DNA fragments" },
        { "question": "What is the primary energy source for the synthesis of glucose during gluconeogenesis?", "options": ["Fatty acids", "Amino acids", "Lactate", "Pyruvate"], "answer": "Lactate" },
        { "question": "Which structure in eukaryotic cells is responsible for packaging and modifying proteins?", "options": ["Endoplasmic reticulum", "Golgi apparatus", "Lysosome", "Mitochondria"], "answer": "Golgi apparatus" },
        { "question": "Which of the following is a characteristic of Gram-positive bacteria?", "options": ["Thin peptidoglycan layer", "Outer membrane present", "Thick peptidoglycan layer", "Endotoxins present"], "answer": "Thick peptidoglycan layer" },
        { "question": "Which vitamin is essential for the synthesis of coenzyme A?", "options": ["Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B5"], "answer": "Vitamin B5" },
        { "question": "In which type of organisms does the process of photosynthesis occur?", "options": ["Animals", "Plants", "Bacteria", "All of the above"], "answer": "All of the above" },
        { "question": "What is the primary function of the immune system's memory cells?", "options": ["To produce antibodies", "To remember past infections", "To phagocytize pathogens", "To activate complement"], "answer": "To remember past infections" },
        { "question": "Which microbial structure is essential for biofilm formation?", "options": ["Capsule", "Pilus", "Flagellum", "Endospore"], "answer": "Capsule" },
        { "question": "Which type of genetic material can be found in viruses?", "options": ["DNA only", "RNA only", "Both DNA and RNA", "Neither"], "answer": "Both DNA and RNA" },
        { "question": "Which metabolic process is characterized by the conversion of glucose into lactate?", "options": ["Glycolysis", "Fermentation", "Citric acid cycle", "Electron transport chain"], "answer": "Fermentation" },
        { "question": "What is the main role of the T helper cells in the immune response?", "options": ["To produce antibodies", "To kill infected cells", "To activate B and T cells", "To phagocytize pathogens"], "answer": "To activate B and T cells" },
        { "question": "What type of gene is involved in promoting cell division and can lead to cancer when mutated?", "options": ["Tumor suppressor gene", "Oncogene", "Proto-oncogene", "Apoptosis gene"], "answer": "Oncogene" },
        { "question": "Which of the following techniques is used to separate DNA fragments by size?", "options": ["PCR", "Gel electrophoresis", "Western blotting", "Southern blotting"], "answer": "Gel electrophoresis" },
        { "question": "Which type of microorganism is known for nitrogen fixation?", "options": ["Viruses", "Fungi", "Bacteria", "Protozoa"], "answer": "Bacteria" },
        { "question": "What is the function of the immune system's phagocytes?", "options": ["To produce antibodies", "To engulf and destroy pathogens", "To activate T cells", "To produce cytokines"], "answer": "To engulf and destroy pathogens" },
        { "question": "Which enzyme is responsible for the degradation of proteins in the stomach?", "options": ["Amylase", "Pepsin", "Lipase", "Trypsin"], "answer": "Pepsin" },
        { "question": "What is the primary role of the blood-brain barrier?", "options": ["To allow nutrient exchange", "To protect the brain from pathogens", "To regulate neurotransmitter levels", "To store energy"], "answer": "To protect the brain from pathogens" },

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
 "12345678": new Date("2024-12-07T23:59:59").getTime(), // Custom expiration date and time
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