// Question bank
const questionBank = [
      { "question": "Which cranial nerve controls the movement of the tongue?", options: ["Hypoglossal", "Facial", "Vagus", "Accessory"], answer: "Hypoglossal" },
                { "question": "The occipital lobe is primarily responsible for which function?", options: ["Vision", "Hearing", "Balance", "Taste"], answer: "Vision" },
                { "question": "Which cranial nerve is responsible for vision?", options: ["Optic nerve", "Oculomotor nerve", "Trigeminal nerve", "Facial nerve"], answer: "Optic nerve" },
        { "question": "What is the primary function of the facial nerve?", options: ["Facial expressions", "Vision", "Hearing", "Taste"], answer: "Facial expressions" },
        { "question": "The hyoid bone is located in which part of the body?", options: ["Neck", "Head", "Thorax", "Pelvis"], answer: "Neck" },
        { "question": "Which muscle elevates the mandible?", options: ["Temporalis", "Masseter", "Pterygoid", "Digastric"], answer: "Masseter" },
        { "question": "What is the largest cranial nerve?", options: ["Trigeminal nerve", "Facial nerve", "Vagus nerve", "Glossopharyngeal nerve"], answer: "Trigeminal nerve" },
        { "question": "The primary artery supplying the brain is:", options: ["Carotid artery", "Vertebral artery", "Basilar artery", "All of the above"], answer: "All of the above" },
        { "question": "Which structure separates the anterior and posterior chambers of the eye?", options: ["Lens", "Cornea", "Iris", "Pupil"], answer: "Iris" },
        { "question": "Which cranial nerve controls the muscles of mastication?", options: ["Trigeminal nerve", "Facial nerve", "Vagus nerve", "Accessory nerve"], answer: "Trigeminal nerve" },
        { "question": "The foramen magnum is located in which bone?", options: ["Occipital bone", "Frontal bone", "Temporal bone", "Parietal bone"], answer: "Occipital bone" },
        { "question": "Which cranial nerve is involved in balance and hearing?", options: ["Vestibulocochlear nerve", "Trigeminal nerve", "Facial nerve", "Vagus nerve"], answer: "Vestibulocochlear nerve" },
        { "question": "What is the primary function of the vagus nerve?", options: ["Heart rate regulation", "Taste sensation", "Facial expression", "Vision"], answer: "Heart rate regulation" },
        { "question" : "Which sinus drains into the nasal cavity?", options: ["Maxillary sinus", "Frontal sinus", "Sphenoidal sinus", "All of the above"], answer: "All of the above" },
        { "question": "The temporomandibular joint (TMJ) connects which two bones?", options: ["Temporal and mandible", "Maxilla and mandible", "Frontal and parietal", "Occipital and temporal"], answer: "Temporal and mandible" },
        { "question": "Which part of the brain is responsible for coordination and balance?", options: ["Cerebellum", "Cerebrum", "Brainstem", "Thalamus"], answer: "Cerebellum" },
        { "question": "The cervical plexus primarily innervates which region?", options: ["Neck", "Shoulder", "Arm", "Face"], answer: "Neck" },
        { "question": "What structure protects the brain and spinal cord?", options: ["Meninges", "Cerebrospinal fluid", "Skull", "All of the above"], answer: "All of the above" },
        { "question": "The optic chiasm is formed by the crossing of which nerves?", options: ["Optic nerves", "Oculomotor nerves", "Facial nerves", "Trigeminal nerves"], answer: "Optic nerves" },
        { "question": "Which muscle is primarily responsible for the movement of the eyebrows?", options: ["Frontalis", "Orbicularis oculi", "Zygomaticus major", "Risorius"], answer: "Frontalis" },
        { "question": "The phrenic nerve is primarily responsible for innervating which muscle?", options: ["Diaphragm", "Sternocleidomastoid", "Trapezius", "Scalenes"], answer: "Diaphragm" },
        { "question": "Which cranial nerve is responsible for the sense of smell?", options: ["Olfactory nerve", "Optic nerve", "Trigeminal nerve", "Facial nerve"], answer: "Olfactory nerve" },
        { "question": "What is the primary role of the amygdala?", options: ["Emotion regulation", "Memory processing", "Sensory perception", "Motor control"], answer: "Emotion regulation" },
        { "question": "Which cranial nerve controls the movement of the tongue?", options: ["Hypoglossal nerve", "Glossopharyngeal nerve", "Facial nerve", "Vagus nerve"], answer: "Hypoglossal nerve" },
        { "question": "The carotid arteries branch into which two main arteries?", options: ["Internal and external carotid arteries", "Subclavian and vertebral arteries", "Brachial and radial arteries", "Femoral and popliteal arteries"], answer: "Internal and external carotid arteries" },
        { "question": "Which part of the brain is involved in the processing of visual information?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
        { "question": "Which structure connects the left and right hemispheres of the brain?", options: ["Corpus callosum", "Cerebellum", "Thalamus", "Pons"], answer: "Corpus callosum" },
        { "question": "Which muscle is responsible for neck rotation?", options: ["Sternocleidomastoid", "Trapezius", "Scalenes", "Levator scapulae"], answer: "Sternocleidomastoid" },
        { "question": "The spinal cord is protected by which structure?", options: ["Vertebral column", "Rib cage", "Skull", "Pelvis"], answer: "Vertebral column" },
        { "question": "Which cranial nerve has both sensory and motor functions?", options: ["Trigeminal nerve", "Olfactory nerve", "Optic nerve", "Hypoglossal nerve"], answer: "Trigeminal nerve" },
        { "question": "Which area of the brain is responsible for language comprehension?", options: ["Wernicke's area", "Broca's area", "Motor cortex", "Sensory cortex"], answer: "Wernicke's area" },
        { "question": "The sella turcica is a depression in which bone?", options: ["Sphenoid bone", "Frontal bone", "Occipital bone", "Temporal bone"], answer: "Sphenoid bone" },
        { "question": "Which cranial nerve is responsible for taste sensation in the anterior two-thirds of the tongue?", options: ["Facial nerve", "Glossopharyngeal nerve", "Hypoglossal nerve", "Trigeminal nerve"], answer: "Facial nerve" },
        { "question": "Which of the following structures is part of the larynx?", options: ["Epiglottis", "Thyroid cartilage", "Cricoid cartilage", "All of the above"], answer: "All of the above" },
        { "question": "What is the function of the choroid plexus?", options: ["Produces cerebrospinal fluid", "Regulates blood flow", "Facilitates respiration", "Aids in digestion"], answer: "Produces cerebrospinal fluid" },
        { "question": "The vertebral arteries merge to form which artery?", options: ["Basilar artery", "Carotid artery", "Cerebral artery", "Cerebellar artery"], answer: "Basilar artery" },
        { "question": "Which muscle is responsible for closing the eyelids?", options: ["Orbicularis oculi", "Frontalis", "Zygomaticus", "Buccinator"], answer: "Orbicularis oculi" },
        { "question": "The nasolacrimal duct drains tears into which structure?", options: ["Nasal cavity", "Pharynx", "Throat", "Mouth"], answer: "Nasal cavity" },
        { "question": "What is the role of the cerebellum?", options: ["Motor control and coordination", "Memory processing", "Emotional regulation", "Sensory perception"], answer: "Motor control and coordination" },
        { "question": "Which cranial nerve is responsible for swallowing?", options: ["Vagus nerve", "Glossopharyngeal nerve", "Hypoglossal nerve", "Accessory nerve"], answer: "Glossopharyngeal nerve" },
        { "question": "The internal jugular vein is primarily responsible for draining blood from which area?", options: ["Brain", "Face", "Neck", "All of the above"], answer: "All of the above" },
        { "question": "Which cranial nerve innervates the sternocleidomastoid and trapezius muscles?", options: ["Accessory nerve", "Vagus nerve", "Hypoglossal nerve", "Trigeminal nerve"], answer: "Accessory nerve" },
        { "question": "What is the primary role of the thalamus?", options: ["Relay sensory information", "Regulate emotions", "Control motor functions", "Coordinate balance"], answer: "Relay sensory information" },
        { "question" : "Which cranial nerve controls the muscles of the neck?", options: ["Accessory nerve", "Vagus nerve", "Glossopharyngeal nerve", "Hypoglossal nerve"], answer: "Accessory nerve" },
        { "question" : "Which part of the ear is responsible for hearing?", options: ["Cochlea", "Semicircular canals", "Eustachian tube", "Auricle"], answer: "Cochlea" },
        { "question" : "The optic nerve carries visual information from the retina to which part of the brain?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
        { "question": "Which artery supplies blood to the face?", options: ["Facial artery", "Maxillary artery", "Carotid artery", "All of the above"], answer: "All of the above" },
        { "question": "The epiglottis prevents food from entering which structure?", options: ["Trachea", "Esophagus", "Larynx", "Pharynx"], answer: "Trachea" },
        { "question": "The cervical vertebrae are located in which region of the body?", options: ["Neck", "Thorax", "Lumbar", "Sacral"], answer: "Neck" },
        { "question": "Which cranial nerve is involved in controlling pupil constriction?", options: ["Oculomotor nerve", "Optic nerve", "Trochlear nerve", "Abducens nerve"], answer: "Oculomotor nerve" },

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