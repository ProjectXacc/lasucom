// Question bank
const questionBank = [
{ question: "Which organ is found in the right upper quadrant of the abdomen?", options: ["Liver", "Stomach", "Spleen", "Pancreas"], answer: "Liver" },
                { question: "The diaphragm is innervated by which nerve?", options: ["Phrenic", "Vagus", "Radial", "Sciatic"], answer: "Phrenic" },
                { question: "Which muscle forms the anterior wall of the abdomen?", options: ["Rectus abdominis", "Transversus abdominis", "Internal oblique", "External oblique"], answer: "Rectus abdominis" },
        { question: "What is the primary function of the diaphragm?", options: ["Breathing", "Digestion", "Circulation", "Excretion"], answer: "Breathing" },
        { question: "Which structure is the central part of the thoracic cavity?", options: ["Mediastinum", "Pleura", "Lungs", "Heart"], answer: "Mediastinum" },
        { question: "The pelvic cavity is bounded inferiorly by which structure?", options: ["Pelvic diaphragm", "Abdominal wall", "Ilium", "Sacrum"], answer: "Pelvic diaphragm" },
        { question: "What is the main arterial supply to the thoracic wall?", options: ["Intercostal arteries", "Subclavian arteries", "Carotid arteries", "Brachial arteries"], answer: "Intercostal arteries" },
        { question: "The primary muscle responsible for inhalation is the:", options: ["Diaphragm", "Intercostal muscles", "Sternocleidomastoid", "Scalenes"], answer: "Diaphragm" },
        { question: "Which organ is located in the right upper quadrant of the abdomen?", options: ["Spleen", "Liver", "Stomach", "Appendix"], answer: "Liver" },
        { question: "The perineum is divided into which two regions?", options: ["Urogenital and anal", "Anterior and posterior", "Superior and inferior", "Left and right"], answer: "Urogenital and anal" },
        { question: "Which of the following structures is NOT part of the mediastinum?", options: ["Heart", "Thymus", "Lungs", "Aorta"], answer: "Lungs" },
        { question: "What is the primary function of the rectus sheath?", options: ["Supports abdominal contents", "Protects thoracic organs", "Facilitates respiration", "Aids in digestion"], answer: "Supports abdominal contents" },
        { question: "Which muscle aids in forced expiration?", options: ["Internal intercostals", "External intercostals", "Serratus anterior", "Pectoralis major"], answer: "Internal intercostals" },
        { question: "Which structure separates the thoracic cavity from the abdominal cavity?", options: ["Diaphragm", "Thoracic duct", "Pleura", "Peritoneum"], answer: "Diaphragm" },
        { question: "The inguinal canal is located in which region of the body?", options: ["Abdomen", "Thorax", "Pelvis", "Perineum"], answer: "Abdomen" },
        { question: "What is the primary action of the external oblique muscle?", options: ["Trunk rotation", "Trunk flexion", "Lateral flexion", "All of the above"], answer: "All of the above" },
        { question: "The pelvic inlet is bounded by which structures?", options: ["Pelvic brim", "Ischial tuberosities", "Pubic symphysis", "Sacrum"], answer: "Pelvic brim" },
        { question: "Which nerve innervates the diaphragm?", options: ["Phrenic nerve", "Vagus nerve", "Intercostal nerves", "Lumbar plexus"], answer: "Phrenic nerve" },
        { question: "The thoracic aorta branches into which major arteries?", options: ["Bronchial arteries", "Intercostal arteries", "Esophageal arteries", "All of the above"], answer: "All of the above" },
        { question: "Which muscle is located in the anterior abdominal wall?", options: ["Transversus abdominis", "Psoas major", "Iliacus", "Quadratus lumborum"], answer: "Transversus abdominis" },
        { question: "What is the largest organ in the abdominal cavity?", options: ["Liver", "Spleen", "Kidney", "Pancreas"], answer: "Liver" },
        { question: "The costal margin is formed by which ribs?", options: ["True ribs", "False ribs", "Floating ribs", "All ribs"], answer: "False ribs" },
        { question: "What is the primary function of the peritoneum?", options: ["Protects abdominal organs", "Facilitates digestion", "Supports thoracic structures", "Regulates respiration"], answer: "Protects abdominal organs" },
        { question: "The gallbladder is located in which quadrant of the abdomen?", options: ["Right upper quadrant", "Left upper quadrant", "Right lower quadrant", "Left lower quadrant"], answer: "Right upper quadrant" },
        { question: "Which structure transports bile from the liver?", options: ["Bile duct", "Hepatic artery", "Cystic duct", "Pancreatic duct"], answer: "Bile duct" },
        { question: "The urethra passes through which part of the perineum?", options: ["Urogenital triangle", "Anal triangle", "Pelvic diaphragm", "Abdominal cavity"], answer: "Urogenital triangle" },
        { question: "Which of the following is a function of the spleen?", options: ["Filters blood", "Stores red blood cells", "Produces lymphocytes", "All of the above"], answer: "All of the above" },
        { question: "The pelvic floor is composed of which muscles?", options: ["Levator ani", "Coccygeus", "Perineal muscles", "All of the above"], answer: "All of the above" },
        { question: "Which artery supplies blood to the abdominal wall?", options: ["Inferior epigastric artery", "Superficial epigastric artery", "Celiac trunk", "Aorta"], answer: "Inferior epigastric artery" },
        { question: "The pubic symphysis is classified as which type of joint?", options: ["Cartilaginous joint", "Synovial joint", "Fibrous joint", "Suture joint"], answer: "Cartilaginous joint" },
        { question: "Which nerve is responsible for the sensation of the perineum?", options: ["Pudendal nerve", "Splanchnic nerve", "Femoral nerve", "Obturator nerve"], answer: "Pudendal nerve" },
        { question: "Which of the following is NOT part of the thoracic cavity?", options: ["Pleura", "Lungs", "Diaphragm", "Kidneys"], answer: "Kidneys" },
        { question: "What is the main action of the rectus abdominis?", options: ["Flexion of the trunk", "Extension of the trunk", "Rotation of the trunk", "Lateral flexion"], answer: "Flexion of the trunk" },
        { question: "Which structure is located posterior to the stomach?", options: ["Spleen", "Liver", "Pancreas", "Kidney"], answer: "Pancreas" },
        { question: "The thoracic duct drains lymph into which vein?", options: ["Subclavian vein", "Jugular vein", "Brachiocephalic vein", "Azygos vein"], answer: "Subclavian vein" },
        { question: "Which muscle helps in forced expiration?", options: ["Transversus thoracis", "Serratus posterior", "External intercostals", "Internal intercostals"], answer: "Internal intercostals" },
        { question: "What is the primary muscle involved in urination?", options: ["Detrusor muscle", "Transversus abdominis", "Sphincter muscle", "Rectus abdominis"], answer: "Detrusor muscle" },
        { question: "The major blood supply to the pelvic region comes from which artery?", options: ["Internal iliac artery", "External iliac artery", "Femoral artery", "Aorta"], answer: "Internal iliac artery" },
        { question: "What is the main function of the pelvic diaphragm?", options: ["Supports pelvic organs", "Facilitates respiration", "Aids in digestion", "Protects thoracic organs"], answer: "Supports pelvic organs" },
        { question: "Which muscle forms the floor of the mouth?", options: ["Digastric", "Mylohyoid", "Sternohyoid", "Geniohyoid"], answer: "Mylohyoid" },
        { question: "The major nerve supply to the abdominal wall is provided by which nerves?", options: ["Thoracoabdominal nerves", "Lumbar nerves", "Sacral nerves", "Cervical nerves"], answer: "Thoracoabdominal nerves" },
        { question: "What is the main function of the liver?", options: ["Detoxification", "Production of bile", "Metabolism", "All of the above"], answer: "All of the above" },
        { question: "Which structure is commonly referred to as the 'voice box'?", options: ["Larynx", "Pharynx", "Trachea", "Esophagus"], answer: "Larynx" },
        { question: "The anterior boundary of the abdomen is formed by which muscles?", options: ["Rectus abdominis", "Internal obliques", "External obliques", "All of the above"], answer: "All of the above" },
        { question: "What is the main arterial supply to the pelvic region?", options: ["Internal iliac artery", "External iliac artery", "Femoral artery", "Aorta"], answer: "Internal iliac artery" },
        { question: "Which muscle is primarily responsible for extension of the spine?", options: ["Erector spinae", "Rectus abdominis", "Psoas major", "Quadratus lumborum"], answer: "Erector spinae" },
        { question: "Which ligament supports the uterus?", options: ["Round ligament", "Suspensory ligament", "Broad ligament", "Ovarian ligament"], answer: "Broad ligament" },
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