// Question bank
const questionBank = [
                 { question: "Which part of the brain is responsible for voluntary movement?", options: ["Cerebellum", "Medulla", "Cerebrum", "Thalamus"], answer: "Cerebrum" },
                { question: "What is the function of the basal ganglia?", options: ["Control posture and movement", "Regulate heart rate", "Process visual information", "Maintain homeostasis"], answer: "Control posture and movement" },
                { question: "Which area of the brain is primarily responsible for voluntary motor control?", options: ["Primary motor cortex", "Broca's area", "Wernicke's area", "Cerebellum"], answer: "Primary motor cortex" },
  { question: "The motor homunculus represents what aspect of the motor cortex?", options: ["Body parts by degree of control", "Regions for sensory input", "Areas for language processing", "Pain pathways"], answer: "Body parts by degree of control" },
  { question: "Where is the primary motor cortex located?", options: ["Precentral gyrus", "Postcentral gyrus", "Temporal lobe", "Parietal lobe"], answer: "Precentral gyrus" },
  { question: "The corticospinal tract primarily controls which type of movement?", options: ["Voluntary", "Involuntary", "Reflex", "Autonomic"], answer: "Voluntary" },
  { question: "Which part of the brain helps coordinate fine motor skills?", options: ["Cerebellum", "Medulla", "Hippocampus", "Thalamus"], answer: "Cerebellum" },
  { question: "Which structure modulates and inhibits unwanted motor movements?", options: ["Basal ganglia", "Thalamus", "Amygdala", "Hippocampus"], answer: "Basal ganglia" },
  { question: "What type of neurons are responsible for transmitting motor signals from the brain to the muscles?", options: ["Motor neurons", "Sensory neurons", "Interneurons", "Neuroglia"], answer: "Motor neurons" },
  { question: "Which neurotransmitter is predominantly involved in activating muscle contraction?", options: ["Acetylcholine", "Dopamine", "Serotonin", "GABA"], answer: "Acetylcholine" },
  { question: "What is the role of the supplementary motor area?", options: ["Planning complex movements", "Processing sensory information", "Regulating emotions", "Language comprehension"], answer: "Planning complex movements" },
  { question: "The premotor cortex is primarily involved in which function?", options: ["Movement planning and coordination", "Emotion regulation", "Sensory integration", "Memory processing"], answer: "Movement planning and coordination" },

  // Basal Ganglia and Motor Control
  { question: "The basal ganglia receive major input from which brain area?", options: ["Cerebral cortex", "Medulla", "Cerebellum", "Pons"], answer: "Cerebral cortex" },
  { question: "Dopamine plays a critical role in the function of which motor-related brain structure?", options: ["Basal ganglia", "Hippocampus", "Amygdala", "Thalamus"], answer: "Basal ganglia" },
  { question: "Which basal ganglia structure is most associated with initiating movement?", options: ["Putamen", "Caudate nucleus", "Globus pallidus", "Nucleus accumbens"], answer: "Putamen" },
  { question: "Damage to the basal ganglia can lead to which condition?", options: ["Parkinson's disease", "Alzheimer's disease", "Schizophrenia", "Bipolar disorder"], answer: "Parkinson's disease" },
  { question: "What is the function of the globus pallidus in the basal ganglia?", options: ["Inhibitory control of movement", "Sensory processing", "Language production", "Visual processing"], answer: "Inhibitory control of movement" },
  { question: "Huntington's disease is associated with degeneration in which area of the basal ganglia?", options: ["Caudate nucleus", "Putamen", "Substantia nigra", "Globus pallidus"], answer: "Caudate nucleus" },
  { question: "The direct pathway of the basal ganglia has what effect on movement?", options: ["Facilitates movement", "Inhibits movement", "Controls balance", "Processes emotions"], answer: "Facilitates movement" },
  { question: "The substantia nigra produces which neurotransmitter that is crucial for motor control?", options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"], answer: "Dopamine" },
  { question: "Which structure in the basal ganglia is involved in the indirect pathway to inhibit movement?", options: ["Subthalamic nucleus", "Thalamus", "Amygdala", "Cerebellum"], answer: "Subthalamic nucleus" },
  { question: "Which condition is associated with a loss of dopaminergic neurons in the substantia nigra?", options: ["Parkinson's disease", "Multiple sclerosis", "Epilepsy", "Depression"], answer: "Parkinson's disease" },

  // Cerebellum and Motor Control
  { question: "What is the primary role of the cerebellum in motor control?", options: ["Coordination and precision", "Emotional regulation", "Language processing", "Sensory processing"], answer: "Coordination and precision" },
  { question: "Damage to the cerebellum often results in which condition?", options: ["Ataxia", "Aphasia", "Amnesia", "Agnosia"], answer: "Ataxia" },
  { question: "Which lobe of the cerebellum is involved in coordinating body movements?", options: ["Anterior lobe", "Posterior lobe", "Flocculonodular lobe", "Temporal lobe"], answer: "Anterior lobe" },
  { question: "The cerebellum receives sensory input primarily from which structure?", options: ["Spinal cord", "Cerebral cortex", "Hippocampus", "Amygdala"], answer: "Spinal cord" },
  { question: "Which part of the cerebellum is associated with maintaining balance and eye movements?", options: ["Flocculonodular lobe", "Anterior lobe", "Posterior lobe", "Limbic system"], answer: "Flocculonodular lobe" },
  { question: "What is the function of Purkinje cells in the cerebellum?", options: ["Inhibit cerebellar nuclei", "Transmit sensory information", "Generate movement commands", "Process emotions"], answer: "Inhibit cerebellar nuclei" },
  { question: "Which tract carries information from the cerebellum to the motor cortex?", options: ["Cerebellothalamic tract", "Corticospinal tract", "Spinothalamic tract", "Vestibulospinal tract"], answer: "Cerebellothalamic tract" },
  { question: "Cerebellar lesions typically result in which type of movement disorder?", options: ["Intention tremor", "Resting tremor", "Rigidity", "Dyskinesia"], answer: "Intention tremor" },
  { question: "The cerebellum is connected to the brainstem via which structures?", options: ["Cerebellar peduncles", "Cranial nerves", "Basal ganglia", "Limbic system"], answer: "Cerebellar peduncles" },
  { question: "What is the role of the cerebellum's lateral zone?", options: ["Planning and timing of movements", "Balance and posture", "Coordination of reflexes", "Processing sensory information"], answer: "Planning and timing of movements" },

  // Brain Areas and Motor Learning
  { question: "Which area of the brain is critical for learning new motor skills?", options: ["Cerebellum", "Hypothalamus", "Broca's area", "Occipital lobe"], answer: "Cerebellum" },
  { question: "What is the function of the motor association cortex?", options: ["Planning motor actions", "Processing sensory information", "Emotional regulation", "Language comprehension"], answer: "Planning motor actions" },
  { question: "Broca's area is primarily associated with which function?", options: ["Speech production", "Speech comprehension", "Balance", "Emotion processing"], answer: "Speech production" },
  { question: "The reticular formation is involved in regulating what aspect of motor control?", options: ["Muscle tone", "Speech production", "Sensory processing", "Vision"], answer: "Muscle tone" },
  { question: "Which type of learning is associated with repeated practice of a motor skill?", options: ["Motor learning", "Cognitive learning", "Sensory learning", "Spatial learning"], answer: "Motor learning" },
  { question: "The lateral corticospinal tract primarily controls movement of which part of the body?", options: ["Distal limbs", "Head", "Axial muscles", "Internal organs"], answer: "Distal limbs" },
  { question: "Which brain structure plays a key role in procedural memory and motor skills?", options: ["Basal ganglia", "Amygdala", "Hippocampus", "Thalamus"], answer: "Basal ganglia" },
  { question: "Damage to which brain area would most likely affect fine motor control?", options: ["Primary motor cortex", "Occipital lobe", "Temporal lobe", "Wernicke's area"], answer: "Primary motor cortex" },
  { question: "The medial corticospinal tract primarily controls movement of which body region?", options: ["Trunk and proximal muscles", "Hands", "Feet", "Facial muscles"], answer: "Trunk and proximal muscles" },
  { question: "The premotor cortex is involved in which aspect of movement?", options: ["Planning and selection", "Execution", "Sensory feedback", "Reflex inhibition"], answer: "Planning and selection" },

  // Reflexes and Motor Pathways
  { question: "The monosynaptic reflex arc involves which type of response?", options: ["Direct motor response to a stimulus", "Complex multi-synaptic response", "Sensory processing only", "Emotional response"], answer: "Direct motor response to a stimulus" },
  { question: "Which structure relays motor signals from the cerebral cortex to the spinal cord?", options: ["Pyramidal tracts", "Limbic system", "Cerebellum", "Thalamus"], answer: "Pyramidal tracts" },
  { question: "Which pathway is responsible for voluntary motor control of the body's muscles?", options: ["Corticospinal tract", "Vestibulospinal tract", "Spinothalamic tract", "Reticulospinal tract"], answer: "Corticospinal tract" },
  { question: "The vestibulospinal tract helps maintain what?", options: ["Posture and balance", "Language comprehension", "Memory", "Sensory feedback"], answer: "Posture and balance" },
  { question: "Which type of motor neuron innervates muscle spindles?", options: ["Gamma motor neurons", "Alpha motor neurons", "Sensory neurons", "Interneurons"], answer: "Gamma motor neurons" },
  { question: "The rubrospinal tract primarily influences which muscles?", options: ["Flexor muscles", "Extensor muscles", "Facial muscles", "Cardiac muscles"], answer: "Flexor muscles" },
  { question: "Which brainstem nucleus modulates the vestibulospinal tract?", options: ["Vestibular nuclei", "Red nucleus", "Substantia nigra", "Lateral geniculate nucleus"], answer: "Vestibular nuclei" },
  { question: "Alpha motor neurons innervate which type of muscle fibers?", options: ["Skeletal muscle fibers", "Smooth muscle fibers", "Cardiac muscle fibers", "Spindle fibers"], answer: "Skeletal muscle fibers" },

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