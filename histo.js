// Question bank
const questionBank = [
        { "question" : "Which structure forms the placenta?", options: ["Chorion", "Amnion", "Allantois", "Yolk sac"], answer: "Chorion" },
                { question: "Which layer of the embryo gives rise to the nervous system?", options: ["Ectoderm", "Mesoderm", "Endoderm", "Trophoblast"], answer: "Ectoderm" },
                { question: "Which structure forms the basis for the development of all organs?", options: ["Germ layers", "Somites", "Mesoderm", "Ectoderm"], answer: "Germ layers" },
        { question: "The three primary germ layers are formed during which stage of development?", options: ["Gastrulation", "Neurulation", "Fertilization", "Cleavage"], answer: "Gastrulation" },
        { question: "Which layer gives rise to the nervous system?", options: ["Ectoderm", "Mesoderm", "Endoderm", "All of the above"], answer: "Ectoderm" },
        { question: "The development of the heart begins in which week of embryonic development?", options: ["Third week", "Fifth week", "Seventh week", "Ninth week"], answer: "Third week" },
        { question: "What is the name of the structure that eventually becomes the umbilical cord?", options: ["Allantois", "Yolk sac", "Chorion", "Amnion"], answer: "Allantois" },
        { question: "Which organ system is primarily derived from the mesoderm?", options: ["Musculoskeletal system", "Respiratory system", "Digestive system", "Nervous system"], answer: "Musculoskeletal system" },
        { question: "Which stage of embryonic development is characterized by the formation of the blastocyst?", options: ["Fertilization", "Cleavage", "Gastrulation", "Neurulation"], answer: "Cleavage" },
        { question: "What is the main function of the yolk sac?", options: ["Nutrient supply", "Gas exchange", "Waste removal", "Hormone production"], answer: "Nutrient supply" },
        { question: "The neural tube develops into which structures?", options: ["Spinal cord and brain", "Heart and blood vessels", "Lungs and trachea", "Kidneys and ureters"], answer: "Spinal cord and brain" },
        { question: "Which embryonic structure is responsible for forming the placenta?", options: ["Chorion", "Amnion", "Yolk sac", "Allantois"], answer: "Chorion" },
        { question: "Which process describes the formation of specialized cells from stem cells?", options: ["Differentiation", "Migration", "Proliferation", "Apoptosis"], answer: "Differentiation" },
        { question: "The limb buds begin to appear during which week of gestation?", options: ["4th week", "6th week", "8th week", "10th week"], answer: "4th week" },
        { question: "Which type of tissue is characterized by a matrix of fibers and ground substance?", options: ["Epithelial", "Muscle", "Connective", "Nervous"], answer: "Connective" },
        { question: "The main cell type found in nervous tissue is:", options: ["Neurons", "Fibroblasts", "Adipocytes", "Chondrocytes"], answer: "Neurons" },
        { question: "What type of epithelial tissue is specialized for absorption?", options: ["Simple cuboidal", "Simple columnar", "Stratified squamous", "Pseudostratified columnar"], answer: "Simple columnar" },
        { question: "The primary function of keratinocytes in the skin is:", options: ["Protection", "Sensation", "Secretion", "Absorption"], answer: "Protection" },
        { question: "Which type of connective tissue stores fat?", options: ["Adipose tissue", "Cartilage", "Bone", "Blood"], answer: "Adipose tissue" },
        { question: "Hematopoiesis primarily occurs in which tissue?", options: ["Bone marrow", "Liver", "Spleen", "Thymus"], answer: "Bone marrow" },
        { question: "The primary function of collagen in connective tissue is:", options: ["Support and strength", "Elasticity", "Transport", "Secretion"], answer: "Support and strength" },
        { question: "What type of muscle tissue is under voluntary control?", options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "All of the above"], answer: "Skeletal muscle" },
        { question: "Which type of epithelium is found lining the respiratory tract?", options: ["Pseudostratified columnar epithelium", "Simple cuboidal epithelium", "Stratified squamous epithelium", "Simple squamous epithelium"], answer: "Pseudostratified columnar epithelium" },
        { question: "What is the primary component of the extracellular matrix in connective tissue?", options: ["Collagen fibers", "Elastic fibers", "Ground substance", "All of the above"], answer: "All of the above" },
        { question: "Which cells are responsible for the formation of myelin in the central nervous system?", options: ["Oligodendrocytes", "Schwann cells", "Astrocytes", "Microglia"], answer: "Oligodendrocytes" },
        { question: "Which part of the brain is responsible for the regulation of temperature?", options: ["Hypothalamus", "Thalamus", "Cerebellum", "Cerebrum"], answer: "Hypothalamus" },
        { question: "Which type of connective tissue is responsible for connecting muscles to bones?", options: ["Tendons", "Ligaments", "Cartilage", "Adipose tissue"], answer: "Tendons" },
        { question: "The embryonic phase of development is characterized by which main process?", options: ["Rapid cell division", "Maturation of organs", "Differentiation of tissues", "All of the above"], answer: "Rapid cell division" },
        { question: "Which embryonic layer gives rise to the lining of the gastrointestinal tract?", options: ["Endoderm", "Mesoderm", "Ectoderm", "None of the above"], answer: "Endoderm" },
        { question: "The dermis is primarily composed of which type of tissue?", options: ["Connective tissue", "Epithelial tissue", "Nervous tissue", "Muscle tissue"], answer: "Connective tissue" },
        { question: "What type of cartilage is found in the intervertebral discs?", options: ["Fibrocartilage", "Elastic cartilage", "Hyaline cartilage", "None of the above"], answer: "Fibrocartilage" },
        { question: "Which type of epithelial tissue is specialized for diffusion?", options: ["Simple squamous epithelium", "Stratified squamous epithelium", "Cuboidal epithelium", "Columnar epithelium"], answer: "Simple squamous epithelium" },
        { question: "What is the primary function of adipose tissue?", options: ["Energy storage", "Insulation", "Cushioning", "All of the above"], answer: "All of the above" },
        { question: "The stratum corneum is found in which layer of the skin?", options: ["Epidermis", "Dermis", "Hypodermis", "None of the above"], answer: "Epidermis" },
        { question: "Which structure in the eye is responsible for refracting light?", options: ["Lens", "Cornea", "Retina", "Iris"], answer: "Cornea" },
        { question: "What is the primary purpose of the basement membrane?", options: ["Support and anchorage for epithelium", "Protection", "Secretion", "Absorption"], answer: "Support and anchorage for epithelium" },
        { question: "Which type of connective tissue is characterized by a gel-like matrix?", options: ["Loose connective tissue", "Dense connective tissue", "Adipose tissue", "Bone"], answer: "Loose connective tissue" },
        { question: "Which layer of the skin contains blood vessels and nerves?", options: ["Dermis", "Epidermis", "Hypodermis", "All of the above"], answer: "Dermis" },
        { question: "Which embryonic structure is responsible for the formation of blood vessels?", options: ["Mesoderm", "Ectoderm", "Endoderm", "Somites"], answer: "Mesoderm" },
        { question: "The primary type of cell found in cartilage is:", options: ["Chondrocytes", "Osteocytes", "Adipocytes", "Fibroblasts"], answer: "Chondrocytes" },
        { question: "What is the primary function of stratified squamous epithelium?", options: ["Protection", "Absorption", "Secretion", "Filtration"], answer: "Protection" },
        { question: "Which structure in the brain is primarily responsible for memory?", options: ["Hippocampus", "Amygdala", "Thalamus", "Cerebellum"], answer: "Hippocampus" },
        { question: "The embryonic disc consists of which two layers?", options: ["Epiblast and hypoblast", "Endoderm and ectoderm", "Mesoderm and ectoderm", "None of the above"], answer: "Epiblast and hypoblast" },
        { question: "What type of epithelial tissue lines the urinary bladder?", options: ["Transitional epithelium", "Simple squamous epithelium", "Stratified cuboidal epithelium", "Pseudostratified columnar epithelium"], answer: "Transitional epithelium" },
        { question: "Which component of blood is primarily responsible for oxygen transport?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "Red blood cells" },
        { question: "What is the primary function of the synovial membrane?", options: ["Secrete synovial fluid", "Provide structure", "Support nerves", "Absorb nutrients"], answer: "Secrete synovial fluid" },
        { question: "The primary function of the peritoneum is:", options: ["To line the abdominal cavity", "To protect the heart", "To enclose the lungs", "To separate the brain"], answer: "To line the abdominal cavity" },
        { question: "Which type of connective tissue provides strength and support to organs?", options: ["Dense regular connective tissue", "Loose connective tissue", "Adipose tissue", "Reticular connective tissue"], answer: "Dense regular connective tissue" },
        { question: "Which organelle is responsible for protein synthesis in a cell?", options: ["Ribosome", "Mitochondria", "Lysosome", "Endoplasmic reticulum"], answer: "Ribosome" },
        { question: "Which type of epithelium is found in the lining of the digestive tract?", options: ["Simple columnar epithelium", "Simple cuboidal epithelium", "Stratified squamous epithelium", "Pseudostratified columnar epithelium"], answer: "Simple columnar epithelium" },
        { question: "Which structure in the female reproductive system is responsible for the production of eggs?", options: ["Ovaries", "Uterus", "Fallopian tubes", "Vagina"], answer: "Ovaries" },
        { question: "Which cell type is responsible for the production of antibodies?", options: ["B lymphocytes", "T lymphocytes", "Macrophages", "Neutrophils"], answer: "B lymphocytes" },
        { question: "Which type of connective tissue connects bones to bones?", options: ["Ligaments", "Tendons", "Cartilage", "Adipose tissue"], answer: "Ligaments" },

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