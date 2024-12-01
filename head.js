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
   
  {
    question: "A patient presents with difficulty swallowing and a hoarse voice following thyroid surgery. Which nerve is most likely injured?",
    options: [
      "External branch of superior laryngeal nerve",
      "Recurrent laryngeal nerve",
      "Glossopharyngeal nerve",
      "Hypoglossal nerve"
    ],
    correctAnswer: "Recurrent laryngeal nerve"
  },
  {
    question: "The danger area of the face communicates with the cavernous sinus through which venous structure?",
    options: [
      "Angular vein",
      "Pterygoid venous plexus",
      "Deep facial vein",
      "Superior ophthalmic vein"
    ],
    correctAnswer: "Superior ophthalmic vein"
  },
  {
    question: "Which muscle of the pharynx is not innervated by the vagus nerve?",
    options: [
      "Superior constrictor",
      "Middle constrictor",
      "Stylopharyngeus",
      "Inferior constrictor"
    ],
    correctAnswer: "Stylopharyngeus"
  },
  {
    question: "A tumor at the jugular foramen is most likely to affect which cranial nerve first?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "Which structure is most vulnerable during a submandibular gland excision?",
    options: [
      "Lingual nerve",
      "Hypoglossal nerve",
      "Marginal mandibular branch of the facial nerve",
      "Inferior alveolar nerve"
    ],
    correctAnswer: "Marginal mandibular branch of the facial nerve"
  },
  {
    question: "A patient is unable to close the eye on one side. Which nerve is most likely affected?",
    options: [
      "Facial nerve (CN VII)",
      "Oculomotor nerve (CN III)",
      "Abducens nerve (CN VI)",
      "Trigeminal nerve (CN V)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "Which nerve provides sensory innervation to the cornea?",
    options: [
      "Ophthalmic division of the trigeminal nerve",
      "Maxillary division of the trigeminal nerve",
      "Facial nerve",
      "Optic nerve"
    ],
    correctAnswer: "Ophthalmic division of the trigeminal nerve"
  },
  {
    question: "A lesion in the cavernous sinus is most likely to affect which cranial nerve first?",
    options: [
      "Abducens nerve (CN VI)",
      "Oculomotor nerve (CN III)",
      "Trochlear nerve (CN IV)",
      "Optic nerve (CN II)"
    ],
    correctAnswer: "Abducens nerve (CN VI)"
  },
  {
    question: "Which structure is responsible for the pupillary light reflex?",
    options: [
      "Oculomotor nerve (CN III)",
      "Optic nerve (CN II)",
      "Facial nerve (CN VII)",
      "Trochlear nerve (CN IV)"
    ],
    correctAnswer: "Oculomotor nerve (CN III)"
  },
  {
    question: "Which muscle of mastication is primarily responsible for opening the jaw?",
    options: [
      "Lateral pterygoid",
      "Medial pterygoid",
      "Temporalis",
      "Masseter"
    ],
    correctAnswer: "Lateral pterygoid"
  },
  {
    question: "A patient presents with loss of sensation over the cheek and upper lip. Which nerve is most likely affected?",
    options: [
      "Maxillary division of the trigeminal nerve",
      "Mandibular division of the trigeminal nerve",
      "Ophthalmic division of the trigeminal nerve",
      "Facial nerve"
    ],
    correctAnswer: "Maxillary division of the trigeminal nerve"
  },
  {
    question: "Which artery is at greatest risk of injury in a pterion fracture?",
    options: [
      "Middle meningeal artery",
      "Anterior cerebral artery",
      "Posterior cerebral artery",
      "Internal carotid artery"
    ],
    correctAnswer: "Middle meningeal artery"
  },
  {
    question: "A lesion of the hypoglossal nerve results in deviation of the tongue toward which side?",
    options: [
      "The affected side",
      "The unaffected side",
      "It does not deviate",
      "Depends on the location of the lesion"
    ],
    correctAnswer: "The affected side"
  },
  {
    question: "Which lymph nodes are the first to receive lymph from the tip of the tongue?",
    options: [
      "Submental nodes",
      "Submandibular nodes",
      "Deep cervical nodes",
      "Pretracheal nodes"
    ],
    correctAnswer: "Submental nodes"
  },
  {
    question: "Which sinus is most commonly involved in sinusitis?",
    options: [
      "Maxillary sinus",
      "Frontal sinus",
      "Sphenoidal sinus",
      "Ethmoidal sinus"
    ],
    correctAnswer: "Maxillary sinus"
  },
  {
    question: "The cribriform plate transmits which cranial nerve?",
    options: [
      "Olfactory nerve (CN I)",
      "Optic nerve (CN II)",
      "Oculomotor nerve (CN III)",
      "Facial nerve (CN VII)"
    ],
    correctAnswer: "Olfactory nerve (CN I)"
  },
  {
    question: "Which nerve passes through the foramen rotundum?",
    options: [
      "Maxillary division of the trigeminal nerve",
      "Mandibular division of the trigeminal nerve",
      "Ophthalmic division of the trigeminal nerve",
      "Facial nerve"
    ],
    correctAnswer: "Maxillary division of the trigeminal nerve"
  },
  {
    question: "What is the chief blood supply of the visual cortex?",
    options: [
      "Posterior cerebral artery",
      "Middle cerebral artery",
      "Anterior cerebral artery",
      "Basilar artery"
    ],
    correctAnswer: "Posterior cerebral artery"
  },
  {
    question: "Which muscle is supplied by the external branch of the superior laryngeal nerve?",
    options: [
      "Cricothyroid",
      "Posterior cricoarytenoid",
      "Lateral cricoarytenoid",
      "Thyroarytenoid"
    ],
    correctAnswer: "Cricothyroid"
  },
  {
    question: "Which cranial nerve is most commonly affected in raised intracranial pressure?",
    options: [
      "Abducens nerve (CN VI)",
      "Oculomotor nerve (CN III)",
      "Trochlear nerve (CN IV)",
      "Optic nerve (CN II)"
    ],
    correctAnswer: "Abducens nerve (CN VI)"
  },
  {
    question: "The stylopharyngeus muscle is supplied by which cranial nerve?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Hypoglossal nerve (CN XII)",
      "Accessory nerve (CN XI)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "A lesion at the internal acoustic meatus would affect which cranial nerves?",
    options: [
      "Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)",
      "Glossopharyngeal nerve (CN IX) and Vagus nerve (CN X)",
      "Trigeminal nerve (CN V) and Facial nerve (CN VII)",
      "Oculomotor nerve (CN III) and Trochlear nerve (CN IV)"
    ],
    correctAnswer: "Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)"
  },
  {
    question: "Which cranial nerve passes through the hypoglossal canal?",
    options: [
      "Hypoglossal nerve (CN XII)",
      "Glossopharyngeal nerve (CN IX)",
      "Accessory nerve (CN XI)",
      "Vagus nerve (CN X)"
    ],
    correctAnswer: "Hypoglossal nerve (CN XII)"
  },
  {
    question: "What structure is located in the cavernous sinus?",
    options: [
      "Internal carotid artery",
      "Optic nerve",
      "Superior sagittal sinus",
      "Sigmoid sinus"
    ],
    correctAnswer: "Internal carotid artery"
  },
  {
    question: "A patient has anosmia and a cerebrospinal fluid (CSF) leak. Which structure is most likely damaged?",
    options: [
      "Cribriform plate",
      "Sella turcica",
      "Middle cranial fossa",
      "Ethmoidal sinus"
    ],
    correctAnswer: "Cribriform plate"
  },
  {
    question: "Which cranial nerve provides parasympathetic innervation to the parotid gland?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)",
      "Vagus nerve (CN X)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "Which artery is most commonly affected in an epidural hematoma?",
    options: [
      "Middle meningeal artery",
      "Anterior cerebral artery",
      "Basilar artery",
      "Posterior cerebral artery"
    ],
    correctAnswer: "Middle meningeal artery"
  },
  {
    question: "Which nerve is responsible for motor innervation to the muscles of facial expression?",
    options: [
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)",
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "A lesion of the trochlear nerve results in weakness of which movement?",
    options: [
      "Depression of the eye when adducted",
      "Abduction of the eye",
      "Elevation of the eye",
      "Convergence of the eye"
    ],
    correctAnswer: "Depression of the eye when adducted"
  },
  {
    question: "The retropharyngeal space is clinically significant because:",
    options: [
      "Infections can spread to the mediastinum",
      "It contains the pharyngeal tonsils",
      "It provides venous drainage of the pharynx",
      "It contains the vagus nerve"
    ],
    correctAnswer: "Infections can spread to the mediastinum"
  },
  {
    question: "The spinal accessory nerve (CN XI) supplies which of the following muscles?",
    options: [
      "Sternocleidomastoid and trapezius",
      "Levator scapulae and trapezius",
      "Sternocleidomastoid and scalene",
      "Trapezius and latissimus dorsi"
    ],
    correctAnswer: "Sternocleidomastoid and trapezius"
  },
  {
    question: "The carotid body detects changes in which of the following?",
    options: [
      "Oxygen levels",
      "Carbon dioxide levels",
      "Blood pressure",
      "Heart rate"
    ],
    correctAnswer: "Oxygen levels"
  },
  {
    question: "Which nerve supplies the cricothyroid muscle?",
    options: [
      "External branch of the superior laryngeal nerve",
      "Recurrent laryngeal nerve",
      "Internal branch of the superior laryngeal nerve",
      "Hypoglossal nerve"
    ],
    correctAnswer: "External branch of the superior laryngeal nerve"
  },
  {
    question: "The inferior alveolar nerve is a branch of which cranial nerve?",
    options: [
      "Mandibular division of the trigeminal nerve",
      "Maxillary division of the trigeminal nerve",
      "Ophthalmic division of the trigeminal nerve",
      "Facial nerve"
    ],
    correctAnswer: "Mandibular division of the trigeminal nerve"
  },
  {
    question: "The structure passing through the foramen spinosum is:",
    options: [
      "Middle meningeal artery",
      "Internal carotid artery",
      "Ophthalmic artery",
      "Vertebral artery"
    ],
    correctAnswer: "Middle meningeal artery"
  },
  {
    question: "Which of the following muscles is involved in opening the auditory tube during swallowing?",
    options: [
      "Tensor veli palatini",
      "Levator veli palatini",
      "Palatoglossus",
      "Salpingopharyngeus"
    ],
    correctAnswer: "Tensor veli palatini"
  },
  {
    question: "Damage to the abducens nerve results in:",
    options: [
      "Inability to abduct the eye",
      "Inability to elevate the eye",
      "Inability to constrict the pupil",
      "Inability to depress the eye"
    ],
    correctAnswer: "Inability to abduct the eye"
  },
  {
    question: "Which structure is found in the posterior triangle of the neck?",
    options: [
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)",
      "Facial artery",
      "External carotid artery"
    ],
    correctAnswer: "Accessory nerve (CN XI)"
  },
  {
    question: "Which cranial nerve is responsible for taste sensation from the anterior two-thirds of the tongue?",
    options: [
      "Facial nerve (CN VII)",
      "Glossopharyngeal nerve (CN IX)",
      "Trigeminal nerve (CN V)",
      "Hypoglossal nerve (CN XII)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "Which cranial nerve exits the skull through the stylomastoid foramen?",
    options: [
      "Facial nerve (CN VII)",
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Accessory nerve (CN XI)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "The optic chiasm is located directly above which structure?",
    options: [
      "Pituitary gland",
      "Hypothalamus",
      "Third ventricle",
      "Internal carotid artery"
    ],
    correctAnswer: "Pituitary gland"
  },
  {
    question: "Which nerve innervates the posterior belly of the digastric muscle?",
    options: [
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)",
      "Hypoglossal nerve (CN XII)",
      "Glossopharyngeal nerve (CN IX)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "The ligament of Berry is associated with which gland?",
    options: [
      "Thyroid gland",
      "Parotid gland",
      "Submandibular gland",
      "Adrenal gland"
    ],
    correctAnswer: "Thyroid gland"
  },
  {
    question: "Which structure forms the medial wall of the middle ear cavity?",
    options: [
      "Promontory",
      "Tympanic membrane",
      "Malleus",
      "External acoustic meatus"
    ],
    correctAnswer: "Promontory"
  },
  {
    question: "Which cranial nerve is tested by the gag reflex?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "The platysma muscle is supplied by which nerve?",
    options: [
      "Facial nerve (CN VII)",
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)",
      "Mandibular nerve (CN V3)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },

      
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