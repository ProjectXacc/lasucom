// Question bank
const questionBank = [
                { question: "Which part of the eye is responsible for focusing light?", options: ["Cornea", "Lens", "Retina", "Iris"], answer: "Lens" },
                { question: "What is the primary function of the cochlea?", options: ["Balance", "Vision", "Hearing", "Smell"], answer: "Hearing" },
                { question: "What type of receptors detect changes in temperature?", options: ["Thermoreceptors", "Mechanoreceptors", "Chemoreceptors", "Photoreceptors"], answer: "Thermoreceptors" },
  { question: "Which sensory receptor type is responsible for detecting pain?", options: ["Nociceptors", "Thermoreceptors", "Photoreceptors", "Mechanoreceptors"], answer: "Nociceptors" },
  { question: "What part of the brain processes most sensory information?", options: ["Thalamus", "Cerebellum", "Medulla oblongata", "Hypothalamus"], answer: "Thalamus" },
  { question: "The dorsal column-medial lemniscal pathway is primarily involved in which sense?", options: ["Touch and proprioception", "Pain", "Vision", "Smell"], answer: "Touch and proprioception" },
  { question: "What term describes the process by which a stimulus is converted into an electrical signal?", options: ["Transduction", "Translation", "Transmission", "Integration"], answer: "Transduction" },
  { question: "Which fiber type transmits fast, sharp pain?", options: ["A-delta fibers", "C fibers", "B fibers", "A-beta fibers"], answer: "A-delta fibers" },
  { question: "Where are somatosensory signals primarily processed?", options: ["Primary somatosensory cortex", "Prefrontal cortex", "Occipital lobe", "Temporal lobe"], answer: "Primary somatosensory cortex" },
  { question: "Which sensory pathway decussates in the spinal cord?", options: ["Spinothalamic tract", "Dorsal column-medial lemniscal pathway", "Optic nerve", "Trigeminal pathway"], answer: "Spinothalamic tract" },
  { question: "What type of receptors detect pressure and stretch in the skin?", options: ["Mechanoreceptors", "Nociceptors", "Thermoreceptors", "Chemoreceptors"], answer: "Mechanoreceptors" },
  { question: "What is the name of the tactile receptors located in the dermal papillae?", options: ["Meissner's corpuscles", "Pacinian corpuscles", "Merkel cells", "Ruffini endings"], answer: "Meissner's corpuscles" },

  // Vision
  { question: "Which part of the eye focuses light onto the retina?", options: ["Lens", "Iris", "Cornea", "Optic disc"], answer: "Lens" },
  { question: "What is the function of the rods in the retina?", options: ["Low-light vision", "Color vision", "Sharp vision", "Depth perception"], answer: "Low-light vision" },
  { question: "Which photopigment is found in rods?", options: ["Rhodopsin", "Photopsin", "Melanopsin", "Iodopsin"], answer: "Rhodopsin" },
  { question: "What part of the eye adjusts to control the amount of light entering?", options: ["Pupil", "Lens", "Cornea", "Retina"], answer: "Pupil" },
  { question: "The optic nerve transmits visual information to which part of the brain?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
  { question: "In which part of the retina are cones primarily concentrated?", options: ["Fovea", "Periphery", "Optic disc", "Ciliary body"], answer: "Fovea" },
  { question: "What is the role of the photoreceptors in the retina?", options: ["Convert light into electrical signals", "Detect sound", "Sense pressure", "Relay taste information"], answer: "Convert light into electrical signals" },
  { question: "Which structure is responsible for the production of aqueous humor?", options: ["Ciliary body", "Lens", "Cornea", "Retina"], answer: "Ciliary body" },
  { question: "What is the blind spot in the eye?", options: ["Point where the optic nerve exits the eye", "Fovea", "Peripheral vision", "Lens center"], answer: "Point where the optic nerve exits the eye" },
  { question: "Which cells in the retina are primarily responsible for detecting color?", options: ["Cones", "Rods", "Ganglion cells", "Bipolar cells"], answer: "Cones" },

  // Hearing
  { question: "Where are the auditory receptors (hair cells) located?", options: ["Cochlea", "Ossicles", "Tympanic membrane", "Eustachian tube"], answer: "Cochlea" },
  { question: "What is the function of the ossicles in the middle ear?", options: ["Amplify sound vibrations", "Detect head position", "Transmit visual signals", "Regulate pressure"], answer: "Amplify sound vibrations" },
  { question: "The organ of Corti is located in which part of the ear?", options: ["Cochlea", "Semicircular canals", "Middle ear", "Eustachian tube"], answer: "Cochlea" },
  { question: "Which nerve transmits auditory signals to the brain?", options: ["Vestibulocochlear nerve", "Optic nerve", "Olfactory nerve", "Vagus nerve"], answer: "Vestibulocochlear nerve" },
  { question: "What structure in the cochlea responds to specific frequencies of sound?", options: ["Basilar membrane", "Oval window", "Tympanic membrane", "Round window"], answer: "Basilar membrane" },
  { question: "Which structure separates the outer ear from the middle ear?", options: ["Tympanic membrane", "Oval window", "Round window", "Cochlea"], answer: "Tympanic membrane" },
  { question: "The Eustachian tube helps to equalize pressure in which part of the ear?", options: ["Middle ear", "Outer ear", "Inner ear", "Cochlea"], answer: "Middle ear" },
  { question: "What fluid fills the scala tympani and scala vestibuli in the cochlea?", options: ["Perilymph", "Endolymph", "Serum", "Cerebrospinal fluid"], answer: "Perilymph" },
  { question: "Where is the round window located?", options: ["Cochlea", "Middle ear", "Outer ear", "Eustachian tube"], answer: "Cochlea" },
  { question: "Which part of the ear contains the semicircular canals?", options: ["Inner ear", "Outer ear", "Middle ear", "Eustachian tube"], answer: "Inner ear" },

  // Taste and Smell
  { question: "What is the primary function of taste buds?", options: ["Detect taste", "Sense smell", "Measure pressure", "Detect temperature"], answer: "Detect taste" },
  { question: "What taste sensation is primarily triggered by glutamate?", options: ["Umami", "Sweet", "Sour", "Bitter"], answer: "Umami" },
  { question: "Which cranial nerve is involved in transmitting taste from the anterior two-thirds of the tongue?", options: ["Facial nerve (VII)", "Glossopharyngeal nerve (IX)", "Vagus nerve (X)", "Trigeminal nerve (V)"], answer: "Facial nerve (VII)" },
  { question: "Which part of the brain processes olfactory signals?", options: ["Olfactory bulb", "Thalamus", "Cerebellum", "Occipital lobe"], answer: "Olfactory bulb" },
  { question: "What type of receptors are involved in the sense of smell?", options: ["Chemoreceptors", "Mechanoreceptors", "Photoreceptors", "Thermoreceptors"], answer: "Chemoreceptors" },
  { question: "The glossopharyngeal nerve carries taste information from which part of the tongue?", options: ["Posterior one-third", "Anterior two-thirds", "Tip of the tongue", "Lateral sides"], answer: "Posterior one-third" },
  { question: "Which region of the brain processes taste information?", options: ["Gustatory cortex", "Somatosensory cortex", "Occipital lobe", "Cerebellum"], answer: "Gustatory cortex" },
  { question: "The olfactory nerve is also known by which cranial nerve number?", options: ["Cranial nerve I", "Cranial nerve II", "Cranial nerve III", "Cranial nerve IV"], answer: "Cranial nerve I" },
  { question: "What is the main function of the olfactory epithelium?", options: ["Detect odorants", "Detect sound", "Detect pressure", "Relay visual signals"], answer: "Detect odorants" },
  { question: "Which area of the brain is associated with the emotional responses to smell?", options: ["Limbic system", "Occipital lobe", "Medulla oblongata", "Cerebellum"], answer: "Limbic system" },

  // Vestibular System
  { question: "What is the primary function of the vestibular system?", options: ["Maintain balance", "Detect sound", "Process taste", "Control vision"], answer: "Maintain balance" },
  { question: "Which structure detects rotational acceleration of the head?", options: ["Semicircular canals", "Cochlea", "Eustachian tube", "Ossicles"], answer: "Semicircular canals" },
  { question: "The utricle and saccule detect which type of acceleration?", options: ["Linear", "Rotational", "Sound-based", "Temperature-based"], answer: "Linear" },
  { question: "The hair cells in the vestibular system are located within structures called what?", options: ["Ampullae", "Tympanic membrane", "Stapes", "Organ of Corti"], answer: "Ampullae" },
  { question: "What fluid is found in the vestibular system that helps detect head movement?", options: ["Endolymph", "Perilymph", "Cerebrospinal fluid", "Blood"], answer: "Endolymph" },
  { question: "Which nerve transmits signals from the vestibular system to the brain?", options: ["Vestibulocochlear nerve", "Olfactory nerve", "Optic nerve", "Glossopharyngeal nerve"], answer: "Vestibulocochlear nerve" },

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