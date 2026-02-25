// Question bank
const questionBank = [
               
  { "question": "Which scientist is considered the \"Father of Modern Physiology\" for discovering the circulation of blood?", "options": ["Aristotle", "Galen", "William Harvey", "Claude Bernard"], "answer": "William Harvey" },
  { "question": "Homeostasis is best defined as:", "options": ["The study of how normal organisms function.", "The maintenance of a relatively constant internal environment.", "The amplification of a response to a stimulus.", "The study of how normal functions become altered in disease."], "answer": "The maintenance of a relatively constant internal environment." },
  { "question": "In historical medical beliefs, the \"Sanguine\" temperament was associated with which body fluid?", "options": ["Phlegm", "Yellow Bile", "Black Bile", "Blood"], "answer": "Blood" },
  { "question": "Which organelle is responsible for energy (ATP) production through oxidative phosphorylation?", "options": ["Ribosomes", "Mitochondria", "Golgi Apparatus", "Lysosomes"], "answer": "Mitochondria" },
  { "question": "The \"tails\" of the phospholipids in the cell membrane are:", "options": ["Hydrophilic (water-liking)", "Hydrophobic (water-hating)", "Made of proteins", "Selectively permeable"], "answer": "Hydrophobic (water-hating)" },
  { "question": "Which of the following is an example of Positive Feedback mechanism?", "options": ["Temperature control", "Blood pressure regulation", "Oxytocin in childbirth", "pH balance"], "answer": "Oxytocin in childbirth" },
  { "question": "Simple diffusion is a type of transport used for:", "options": ["Large polar molecules", "Small, non-polar molecules like O2 and CO2", "Moving ions against their concentration gradient", "Moving glucose via carrier proteins"], "answer": "Small, non-polar molecules like O2 and CO2" },
  { "question": "When a blood cell is placed in a hypotonic solution, what happens?", "options": ["The cell shrinks.", "The cell remains undamaged.", "The cell swells and may burst (haemolysis).", "There is no movement of water."], "answer": "The cell swells and may burst (haemolysis)." },
  { "question": "The Na+/K+ ATPase pump moves ions in which ratio?", "options": ["2 Na+ out, 3 K+ in", "3 Na+ in, 2 K+ out", "3 Na+ out, 2 K+ in", "2 Na+ in, 3 K+ out"], "answer": "3 Na+ out, 2 K+ in" },
  { "question": "Secondary active transport is characterized by:", "options": ["The direct use of ATP.", "Using energy stored in ion gradients (usually Na+).", "Moving substances only from high to low concentration.", "Occurring only in the mitochondria."], "answer": "Using energy stored in ion gradients (usually Na+)." },

  { "question": "Cell eating, where the membrane wraps around large particles like bacteria, is known as:", "options": ["Pinocytosis", "Exocytosis", "Phagocytosis", "Facilitated diffusion"], "answer": "Phagocytosis" },
  { "question": "The resting membrane potential (RMP) of a typical neuron is approximately:", "options": ["+30 mV", "-55 mV", "-70 mV", "0 mV"], "answer": "-70 mV" },
  { "question": "During the depolarization phase of an action potential:", "options": ["Voltage-gated K+ channels open.", "Voltage-gated Na+ channels open and Na+ rushes in.", "The Na+/K+ pump stops working.", "The membrane becomes more negative."], "answer": "Voltage-gated Na+ channels open and Na+ rushes in." },
  { "question": "The All-or-None principle of action potentials states that:", "options": ["Every stimulus produces an action potential.", "An action potential occurs fully or not at all once threshold is reached.", "Larger stimuli produce larger action potentials.", "Action potentials can summate to reach higher peaks."], "answer": "An action potential occurs fully or not at all once threshold is reached." },
  { "question": "Which part of the neuron is the decision point for firing an action potential?", "options": ["Dendrites", "Soma (Cell body)", "Axon hillock", "Synaptic terminal"], "answer": "Axon hillock" },
  { "question": "A refractory period where the Na+ channels are inactivated and no new action potential can be generated is called the:", "options": ["Relative refractory period", "Hyperpolarization period", "Absolute refractory period", "Threshold period"], "answer": "Absolute refractory period" },
  { "question": "Unlike action potentials, graded potentials:", "options": ["Do not decrease with distance.", "Decrease in amplitude as they spread (passive spread).", "Follow the all-or-none principle.", "Only occur in the axon."], "answer": "Decrease in amplitude as they spread (passive spread)." },
  { "question": "Which transporter is an example of an antiport (exchanger)?", "options": ["Na+/glucose cotransporter (SGLT)", "Na+/Ca2+ exchanger (NCX)", "GLUT transporters", "Na+/K+ ATPase"], "answer": "Na+/Ca2+ exchanger (NCX)" },
  { "question": "What happens during the hyperpolarization phase of an action potential?", "options": ["The membrane potential becomes more positive than RMP.", "Na+ channels stay open for a long time.", "K+ channels remain open briefly, making the membrane more negative than RMP.", "The cell reaches its peak voltage of +40 mV."], "answer": "K+ channels remain open briefly, making the membrane more negative than RMP." },
  { "question": "Local anesthetics work by:", "options": ["Opening potassium channels.", "Blocking sodium channels.", "Increasing ATP production.", "Stimulating the Na+/K+ pump."], "answer": "Blocking sodium channels." },

  { "question": "What is the typical color of venous blood?", "options": ["Bright red", "Opaque white", "Purplish", "Blue"], "answer": "Purplish" },
  { "question": "Which of the following can be used to prevent blood from solidifying or clotting?", "options": ["Distilled water", "Oxalate or heparin", "Sodium chloride", "Glucose"], "answer": "Oxalate or heparin" },
  { "question": "What is the specific gravity range of blood?", "options": ["0.850 - 0.900", "1.055 - 1.065", "7.350 - 7.450", "4.500 - 5.500"], "answer": "1.055 - 1.065" },
  { "question": "Blood flows how many times more slowly than water due to its viscosity?", "options": ["1 to 2 times", "4.5 to 5.5 times", "8 to 10 times", "36 to 47 times"], "answer": "4.5 to 5.5 times" },
  { "question": "The normal pH range of blood is:", "options": ["6.85 - 7.15", "7.35 - 7.45", "7.00 - 8.00", "1.05 - 1.06"], "answer": "7.35 - 7.45" },

  { "question": "What percentage of total body weight does blood typically constitute?", "options": ["5%", "8%", "45%", "55%"], "answer": "8%" },
  { "question": "The formation of \"Rouleaux\" in normal human blood is minimal because:", "options": ["Red blood cells lack a nucleus.", "Negative charges repel each other.", "Positive charges attract each other.", "Blood is too viscous."], "answer": "Negative charges repel each other." },
  { "question": "What is the normal Packed Cell Volume (PCV) range for women?", "options": ["40-54%", "55-60%", "36-47%", "8-10%"], "answer": "36-47%" },
  { "question": "Microscopically, what percentage of blood is composed of Formed Elements?", "options": ["55%", "1%", "45%", "99%"], "answer": "45%" },
  { "question": "The Buffy Coat in a blood sample consists of:", "options": ["Red blood cells and plasma", "White blood cells and platelets", "Proteins and minerals", "Water and salts"], "answer": "White blood cells and platelets" },
  { "question": "Which organ is NOT mentioned as a site where blood carries waste products for excretion?", "options": ["Kidney", "Skin", "Liver", "Pancreas"], "answer": "Pancreas" },
  { "question": "The respiratory function of blood involves carrying oxygen from the:", "options": ["Tissues to the lungs", "Alveoli of lungs to tissues", "GIT to the liver", "Kidney to the skin"], "answer": "Alveoli of lungs to tissues" },
  { "question": "Which of the following is a physical property of Red Blood Cells (RBCs)?", "options": ["Spherical shape", "Biconcave discs", "Multi-nucleated", "10.5µm diameter"], "answer": "Biconcave discs" },
  { "question": "The average diameter of a Red Blood Cell is:", "options": ["2.0µm", "7.5µm", "86µm", "138µm"], "answer": "7.5µm" },
  { "question": "The network of protein contained within an RBC is called the:", "options": ["Globin", "Stroma", "Agglutinogen", "Haem"], "answer": "Stroma" },
  { "question": "What is the average lifespan of an RBC in circulation?", "options": ["30 days", "90 days", "120 days", "365 days"], "answer": "120 days" },
  { "question": "The average RBC count in men is approximately:", "options": ["4.8 million/µL", "5.4 million/µL", "7.5 million/µL", "1.05 million/µL"], "answer": "5.4 million/µL" },
  { "question": "Haemoglobin consists of a pigment called Haem which contains:", "options": ["Magnesium", "Iron", "Calcium", "Copper"], "answer": "Iron" },
  { "question": "How many ferrous atoms in one haemoglobin molecule combine with oxygen?", "options": ["1", "2", "4", "8"], "answer": "4" },
  { "question": "In the tissues, which part of haemoglobin combines with a molecule of CO2?", "options": ["The Iron atom", "The Haem portion", "The Globin portion", "The Stroma"], "answer": "The Globin portion" },

  { "question": "The surface of the RBC contains which of the following that determines blood groups?", "options": ["Agglutinins", "Agglutinogens", "Stroma proteins", "Haem pigments"], "answer": "Agglutinogens" },
  { "question": "In the lungs, Carbon Dioxide is:", "options": ["Combined with the Haem portion", "Released from the Globin portion", "Absorbed by the stroma", "Converted into oxygen"], "answer": "Released from the Globin portion" },
  { "question": "Under what physiological conditions are stored important substances taken back from the blood?", "options": ["High blood pressure and stress", "Dehydration and starvation", "Exercise and sleep", "Digestion and growth"], "answer": "Dehydration and starvation" },
  { "question": "According to Landsteiner:", "options": ["If an antigen is present, corresponding antibody must be present.", "One has an antibody against any agglutinogen one synthesizes.", "One has antibodies that attack one's agglutinogen.", "If an antigen is absent in the RBC, the corresponding antibody must be present in the serum."], "answer": "If an antigen is absent in the RBC, the corresponding antibody must be present in the serum." },
  { "question": "Vitamin K dependent factors include the following except?", "options": ["Factor II", "Factor X", "Factor VIII", "Factor VII"], "answer": "Factor VIII" },

  { "question": "Who were the scientists responsible for developing Recombinant DNA technology in the early 1970s?", "options": ["Jennifer Doudna and Emmanuelle Charpentier", "Stanley N. Cohen and Herbert W. Boyer", "Louis Pasteur and Robert Koch", "Cohen and Doudna"], "answer": "Stanley N. Cohen and Herbert W. Boyer" },
  { "question": "In the production of recombinant human insulin (Humulin), which organism is typically used as the host to express the protein?", "options": ["Saccharomyces cerevisiae", "Staphylococcus aureus", "Escherichia coli", "Bacillus thuringiensis"], "answer": "Escherichia coli" },
  { "question": "Which component of recombinant DNA technology acts as the molecular glue to join DNA fragments together?", "options": ["Restriction enzymes", "Plasmids", "DNA Ligase", "Taq polymerase"], "answer": "DNA Ligase" },
  { "question": "What is the primary characteristic of Pluripotency in embryonic stem cells?", "options": ["Differentiate into limited cell types", "Differentiate into all three germ layers", "Found only in adult bone marrow", "Cannot divide indefinitely"], "answer": "Differentiate into all three germ layers" },
  { "question": "Which branch of biotechnology specifically involves bioremediation and waste treatment?", "options": ["Medical Biotechnology", "Agricultural Biotechnology", "Industrial Biotechnology", "Environmental Biotechnology"], "answer": "Environmental Biotechnology" },

  { "question": "The CRISPR-Cas9 system was originally adapted from what natural source?", "options": ["Defense mechanism in bacteria", "Yeast fermentation method", "Pig and cow pancreas genes", "Gene in daffodils and maize"], "answer": "Defense mechanism in bacteria" },
  { "question": "Bt Cotton is genetically modified to produce Cry proteins. What is the purpose of these proteins?", "options": ["Increase vitamin A", "Resistant to herbicides", "Toxic to insect pests", "Grow in high salinity"], "answer": "Toxic to insect pests" },
  { "question": "Which Biosafety Level (BSL) is required for handling extreme risks like Ebola or Marburg viruses?", "options": ["BSL-1", "BSL-2", "BSL-3", "BSL-4"], "answer": "BSL-4" },
  { "question": "What was the major scientific contribution of Louis Pasteur to biotechnology?", "options": ["Discovered EcoRI", "Proved fermentation caused by microorganisms", "Cloned insulin gene", "Developed PCR"], "answer": "Proved fermentation caused by microorganisms" },
  { "question": "Induced Pluripotent Stem Cells (iPSCs) are created by:", "options": ["Extracting blastocyst cells", "Umbilical cord stem cells", "Introducing reprogramming factors into adult somatic cells", "Removing nucleus from egg"], "answer": "Introducing reprogramming factors into adult somatic cells" },

  { "question": "How is pH mathematically defined?", "options": ["Positive log of OH-", "Negative log of H+", "Product of H+ and OH-", "Dissociation constant"], "answer": "Negative log of H+" },
  { "question": "According to the dissociation constant for water (Kw), what is the value of pH + pOH?", "options": ["7", "10", "14", "10^-14"], "answer": "14" },
  { "question": "Which of the following is true regarding the strength of an acid?", "options": ["Lower tendency to lose proton", "Greater tendency to lose proton", "High pKa values", "Only exist in buffers"], "answer": "Greater tendency to lose proton" },
  { "question": "What are the two essential components of a buffer system?", "options": ["Strong acid and conjugate base", "Weak acid and conjugate base", "Weak base and indicator", "H+ and OH-"], "answer": "Weak acid and conjugate base" },
  { "question": "Which buffer system operates specifically in the internal fluids of all cells?", "options": ["Carbonic acid-bicarbonate", "Protein buffer", "Phosphate buffer", "Haemoglobin buffer"], "answer": "Phosphate buffer" },

  { "question": "In the phosphate buffer system, which ion acts as the hydrogen ion donor?", "options": ["Hydrogen phosphate ion", "Bicarbonate ion", "Dihydrogen phosphate ion", "Hydroxide ion"], "answer": "Dihydrogen phosphate ion" },
  { "question": "What is the Henderson-Hasselbalch equation used for?", "options": ["Calculating blood gravity", "Understanding buffer action", "Measuring temperature", "Determining blood velocity"], "answer": "Understanding buffer action" },
  { "question": "When an acid is half-neutralized at midpoint of titration, what is the relationship between pH and pKa?", "options": ["pH twice pKa", "pH = pKa", "pH = pKa + 1", "pH = pKa - 1"], "answer": "pH = pKa" },
  { "question": "Which component of the pH meter consists of a glass electrode and reference electrode?", "options": ["Indicating unit", "KCl bridge", "Detecting unit", "Slope switch"], "answer": "Detecting unit" },
  { "question": "How many buffers should be used to calibrate a pH meter before measurement?", "options": ["At least one", "At least two", "Exactly three", "None"], "answer": "At least two" },

  { "question": "The term Autonomic is derived from Greek words meaning:", "options": ["Self-rule", "Brain-law", "Automatic-motion", "Self-law"], "answer": "Self-law" },
  { "question": "Which division of the nervous system regulates involuntary organs like the heart?", "options": ["Somatic", "Central", "Autonomic", "Enteric only"], "answer": "Autonomic" },
  { "question": "The peripheral motor portion of the ANS is composed of how many neurons?", "options": ["One", "Two", "Three", "Four"], "answer": "Two" },
  { "question": "The cell bodies of preganglionic neurons in the ANS are primarily located in:", "options": ["Dorsal horn", "Ventral horn", "Intermediolateral column", "Paravertebral ganglia"], "answer": "Intermediolateral column" },
  { "question": "The Sympathetic division is also known as the:", "options": ["Craniosacral", "Thoracolumbar", "Cervical", "Myenteric"], "answer": "Thoracolumbar" },

  { "question": "In the sympathetic division, typical ratio of postganglionic to preganglionic axons is:", "options": ["1:1", "10:1", "100:1", "1000:1"], "answer": "100:1" },
  { "question": "Which cranial nerves are associated with parasympathetic preganglionic neurons?", "options": ["CN I, II, III, IV", "CN III, VII, IX, X", "CN V, VII, X, XII", "CN III, V, VII, IX"], "answer": "CN III, VII, IX, X" },
  { "question": "Which neurotransmitter is secreted by all preganglionic autonomic neurons?", "options": ["Norepinephrine", "Epinephrine", "Acetylcholine", "Dopamine"], "answer": "Acetylcholine" },
  { "question": "Sympathetic postganglionic neurons producing vasodilation in skeletal muscle are termed:", "options": ["Noradrenergic", "Cholinergic", "Adrenergic", "C-fibers"], "answer": "Cholinergic" },
  { "question": "At noradrenergic junctions, the receptors are collectively known as:", "options": ["Nicotinic", "Muscarinic", "Adrenoreceptors", "Cholinoceptors"], "answer": "Adrenoreceptors" },

  { "question": "Stimulation of which receptor type found primarily in the heart causes increased rate and force?", "options": ["Alpha-1", "Beta-1", "Beta-2", "Muscarinic-2"], "answer": "Beta-1" },
  { "question": "Which drug is used to selectively block muscarinic receptors before surgery?", "options": ["Salbutamol", "Hexamethonium", "Atropine", "Epinephrine"], "answer": "Atropine" },
  { "question": "The fight or flight response is a function of the:", "options": ["Parasympathetic", "Sympathetic", "Enteric", "Somatic"], "answer": "Sympathetic" },
  { "question": "Which brain region directly controls autonomic actions like cardiovascular activity?", "options": ["Hypothalamus", "Prefrontal cortex", "Medulla", "Spinal cord"], "answer": "Medulla" },
  { "question": "The Enteric Nervous System contains which plexus between longitudinal and circular muscles?", "options": ["Submucosal plexus", "Paravertebral plexus", "Myenteric plexus", "Celiac plexus"], "answer": "Myenteric plexus" },
               

    // Add more questions here
];

// Shuffle questions and initialize answers
const shuffledQuestions = questionBank.sort(() => Math.random() - 0.5).slice(0, 70);
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
