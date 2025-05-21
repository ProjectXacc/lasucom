// Question bank
const questionBank = [
                {
    question: "What is the primary function of the red blood cell (RBC)?",
    options: [
      "Defend against infection",
      "Transport O2 and CO2",
      "Produce antibodies",
      "Clot blood",
      "Regulate blood pressure"
    ],
    answer: "Transport O2 and CO2"
  },
  {
    question: "Which of the following is NOT a general property of blood?",
    options: [
      "Opaque fluid",
      "pH range of 7.35 to 7.45",
      "Specific Gravity of 1.055 - 1.065",
      "Viscosity of 4.5 - 5.5 times slower than water",
      "Always flows smoothly without clotting on standing"
    ],
    answer: "Always flows smoothly without clotting on standing"
  },
  {
    question: "Hemoglobin consists of a protein called GLOBIN and a pigment called HAEM, which contains what element?",
    options: [
      "Calcium",
      "Sodium",
      "Iron",
      "Potassium",
      "Zinc"
    ],
    answer: "Iron"
  },
  {
    question: "What is the average lifespan of a red blood cell in circulation?",
    options: [
      "30 days",
      "60 days",
      "90 days",
      "120 days",
      "150 days"
    ],
    answer: "120 days"
  },
  {
    question: "Which of the following is a function of blood?",
    options: [
      "Transport of hormones and enzymes",
      "Production of bile",
      "Regulation of body temperature only through sweating",
      "Synthesis of vitamin D",
      "Breakdown of old red blood cells in the kidneys"
    ],
    answer: "Transport of hormones and enzymes"
  },
  {
    question: "What cells does hemopoiesis (production of blood cells) in red bone marrow produce?",
    options: [
      "Only lymphocytes",
      "Only red blood cells",
      "Only white blood cells",
      "Only platelets",
      "All seven formed elements"
    ],
    answer: "All seven formed elements"
  },
  {
    question: "Which type of anemia is caused by a deficiency of Vitamin B12 or folic acid?",
    options: [
      "Blood loss anemia",
      "Aplastic anemia",
      "Megaloblastic anemia",
      "Pernicious anemia",
      "Hemolytic anemia"
    ],
    answer: "Megaloblastic anemia"
  },
  {
    question: "Pernicious anemia occurs when an abnormal atrophic gastric mucosa fails to produce normal gastric secretions, preventing parietal cells from secreting what factor essential for Vitamin B12 absorption?",
    options: [
      "Extrinsic factor",
      "Intrinsic factor",
      "Clotting factor",
      "Hemopoietic factor",
      "Agglutinin"
    ],
    answer: "Intrinsic factor"
  },
  {
    question: "In the ABO blood group system, individuals with Agglutinogen A on their RBCs have what blood group?",
    options: [
      "Blood Group B",
      "Blood Group AB",
      "Blood Group A",
      "Blood Group O",
      "Blood Group A1 and A2"
    ],
    answer: "Blood Group A"
  },
  {
    question: "According to Landsteiner's Law, if an antigen (agglutinogen) is present in the RBC, the corresponding antibody (agglutinin) must be absent in what?",
    options: [
      "Cytoplasm",
      "Nucleus",
      "Serum",
      "Interstitial fluid",
      "Bone marrow"
    ],
    answer: "Serum"
  },
  {
    question: "Which blood group is considered the universal recipient?",
    options: [
      "Blood Group A",
      "Blood Group B",
      "Blood Group AB",
      "Blood Group O",
      "Rhesus Positive"
    ],
    answer: "Blood Group AB"
  },
  {
    question: "Agglutination in blood transfusion can lead to the destruction of agglutinated cells by phagocytic WBCs, releasing hemoglobin into the plasma. What is this release of hemoglobin called?",
    options: [
      "Erythropoiesis",
      "Leukopoiesis",
      "Thrombopoiesis",
      "Hemolysis",
      "Hematocrit"
    ],
    answer: "Hemolysis"
  },
  {
    question: "Individuals whose erythrocytes have the Rhesus agglutinogens or D-antigen are designated as:",
    options: [
      "Rh-negative",
      "Rh-positive",
      "ABO Group A",
      "ABO Group B",
      "Universal donors"
    ],
    answer: "Rh-positive"
  },
  {
    question: "Erythroblastosis fetalis arises during pregnancy when an Rh-positive fetus is carried by an Rh-negative mother. What does the Rh-negative mother make upon exposure to the Rh-positive (D-antigen) of the fetal cells?",
    options: [
      "Anti-A antibodies",
      "Anti-B antibodies",
      "Anti-Rh (Anti-D) antibodies",
      "Anti-Kell antibodies",
      "Antibodies against maternal blood"
    ],
    answer: "Anti-Rh (Anti-D) antibodies"
  },
  {
    question: "Which of the following is a Granulocyte?",
    options: [
      "Lymphocyte",
      "Monocyte",
      "Neutrophil",
      "Plasma cell",
      "Erythrocyte"
    ],
    answer: "Neutrophil"
  },
  {
    question: "Increased numbers of neutrophils are typically seen in which type of infection?",
    options: [
      "Viral infections",
      "Fungal infections",
      "Parasitic infections",
      "Bacterial infections",
      "All types of infections"
    ],
    answer: "Bacterial infections"
  },
  {
    question: "What is the liquid portion of blood called?",
    options: [
      "Serum",
      "Hematocrit",
      "Buffy coat",
      "Formed elements",
      "Plasma"
    ],
    answer: "Plasma"
  },
  {
    question: "Serum is the remaining fluid when blood clots and the solids are removed. What protein is absent in serum compared to plasma?",
    options: [
      "Albumin",
      "Globulin",
      "Fibrinogen",
      "Hemoglobin",
      "Antibodies"
    ],
    answer: "Fibrinogen"
  },
  {
    question: "What percentage of total blood volume is represented by plasma?",
    options: [
      "1%",
      "38% to 52%",
      "45%",
      "48% - 62%",
      "8%"
    ],
    answer: "48% - 62%"
  },
  {
    question: "What are immunoglobulins (antibodies) produced by?",
    options: [
      "T-lymphocytes",
      "Neutrophils",
      "Plasma cells",
      "Monocytes",
      "Erythrocytes"
    ],
    answer: "Plasma cells"
  },
  {
    question: "The cell killing effects of innate and acquired immunity are mediated by plasma enzymes called the complement system. How many proteins approximately are involved in the complement system in normal human serum?",
    options: [
      "11",
      "15",
      "20",
      "30",
      "50"
    ],
    answer: "20"
  },
  {
    question: "In cellular immunity, cytotoxic T cells attack and destroy cells by inserting proteins that form pores in the membrane of target cells and by initiating apoptosis. What are these pore-forming proteins called?",
    options: [
      "Immunoglobulins",
      "Perforins",
      "Complement proteins",
      "Agglutinins",
      "Histamines"
    ],
    answer: "Perforins"
  },
  {
    question: "When an antigen first enters the body, it binds to appropriate B-lymphocytes, causing them to divide and form a clone of what type of cells that secrete immunoglobulins (antibodies)?",
    options: [
      "T-lymphocytes",
      "Plasma cells",
      "Memory cells",
      "Neutrophils",
      "Macrophages"
    ],
    answer: "Plasma cells"
  },
  {
    question: "Acquired immunity can be divided into cellular and:",
    options: [
      "Active immunity",
      "Passive immunity",
      "Humoral immunity",
      "Natural immunity",
      "Artificial immunity"
    ],
    answer: "Humoral immunity"
  },
  {
    question: "T-lymphocytes depend on which organ for maturation?",
    options: [
      "Bone marrow",
      "Spleen",
      "Lymph nodes",
      "Thymus",
      "Liver"
    ],
    answer: "Thymus"
  },
  {
    question: "Antibodies (immunoglobulins) are primarily involved in which type of acquired immunity?",
    options: [
      "Cellular immunity",
      "Innate immunity",
      "Passive immunity",
      "Humoral immunity",
      "Cell-mediated immunity"
    ],
    answer: "Humoral immunity"
  },
  {
    question: "The bicarbonate buffer system, the most important ECF buffer system, consists of which weak acid and weak base?",
    options: [
      "HCl and NaOH",
      "H2CO3 and HCO3−",
      "NH3 and NH4+",
      "H3PO4 and HPO42−",
      "H2SO4 and SO42−"
    ],
    answer: "H2CO3 and HCO3−"
  },
  {
    question: "Proteins in blood plasma behave as buffers because they possess which functional groups?",
    options: [
      "Phosphate (PO43−) groups",
      "Sulfate (SO42−) groups",
      "Amino (-NH2) and Carboxylic (-COOH) groups",
      "Hydroxyl (OH) groups",
      "Carbonyl (CO) groups"
    ],
    answer: "Amino (-NH2) and Carboxylic (-COOH) groups"
  },
  {
    question: "How does the Histidine molecule in hemoglobin contribute to buffering?",
    options: [
      "It neutralizes bases only.",
      "It neutralizes acids because it is basic and has H+ acceptor sites.",
      "It forms strong acids.",
      "It only buffers in the lungs.",
      "It forms carbonic acid."
    ],
    answer: "It neutralizes acids because it is basic and has H+ acceptor sites."
  },
  {
    question: "The phosphate buffer system consists of which two ions?",
    options: [
      "Na+ and Cl−",
      "K+ and Na+",
      "HPO42− and H2PO4−",
      "Ca2+ and PO43−",
      "SO42− and HPO42−"
    ],
    answer: "HPO42− and H2PO4−"
  },
  {
    question: "The cell membrane is a thin, pliable, elastic structure about 7.5 to 10nm in thickness. It consists of a lipid bilayer between which are what molecules?",
    options: [
      "Carbohydrate molecules",
      "Protein molecules",
      "Nucleic acid molecules",
      "Salt molecules",
      "Cholesterol molecules"
    ],
    answer: "Protein molecules"
  },
  {
    question: "Which component makes up about 50% of the weight of the cell membrane?",
    options: [
      "Lipids",
      "Proteins",
      "Carbohydrates",
      "Cholesterol",
      "Water"
    ],
    answer: "Proteins"
  },
  {
    question: "Which of the following is NOT listed as a function of membrane proteins?",
    options: [
      "Acts as receptors",
      "Acts as channel proteins",
      "Functions as adhesion molecules",
      "Functions as cell identity markers",
      "Synthesis of triglycerides"
    ],
    answer: "Synthesis of triglycerides"
  },
  {
    question: "Lysosomes contain enzymes capable of killing the cell and are called the 'suicide bag'. These enzymes are primarily what type?",
    options: [
      "Kinases",
      "Phosphatases",
      "Hydrolases",
      "Oxidoreductases",
      "Ligases"
    ],
    answer: "Hydrolases"
  },
  {
    question: "What causes Lysosome Storage Diseases?",
    options: [
      "Accumulation of excess enzymes",
      "Congenital absence of a lysosomal enzyme",
      "Too many lysosomes in the cell",
      "Damage to the lysosomal membrane",
      "Overproduction of substrate for lysosomal enzymes"
    ],
    answer: "Congenital absence of a lysosomal enzyme"
  },
  {
    question: "What is one of the key functions of the nucleus?",
    options: [
      "Site of protein synthesis",
      "Storage of calcium ions",
      "Replication of DNA",
      "Production of ATP",
      "Detoxification of drugs"
    ],
    answer: "Replication of DNA"
  },
  {
    question: "Which cellular process primarily occurs in the mitochondria ('powerhouse of the cell')?",
    options: [
      "Protein synthesis",
      "DNA replication",
      "ATP synthesis",
      "Lipid synthesis",
      "Carbohydrate synthesis"
    ],
    answer: "ATP synthesis"
  },
  {
    question: "What type of proteins do ribosomes on the Rough Endoplasmic Reticulum (rER) primarily produce?",
    options: [
      "Cytosolic proteins",
      "Nuclear proteins",
      "Mitochondrial proteins",
      "All transmembrane proteins, most secreted proteins, most proteins stored in Golgi apparatus, lysosomes and endosomes",
      "Ribosomal proteins"
    ],
    answer: "All transmembrane proteins, most secreted proteins, most proteins stored in Golgi apparatus, lysosomes and endosomes"
  },
  {
    question: "Which of the following is a carrier-mediated transport mechanism that does NOT require energy and is described as 'down hill'?",
    options: [
      "Diffusion",
      "Osmosis",
      "Facilitated Diffusion",
      "Active Transport",
      "Solvent Drag"
    ],
    answer: "Facilitated Diffusion"
  },
  {
    question: "Which type of pump is also known as ATP-binding cassette and includes more than 100 different transport proteins in various organisms?",
    options: [
      "P-class pump",
      "F-class pump",
      "V-class ATPase",
      "ABC Superfamily",
      "Sodium-potassium pump"
    ],
    answer: "ABC Superfamily"
  },
  {
    question: "Which of the following is a key characteristic of carrier-mediated transport mechanisms?",
    options: [
      "Always moves substances against their concentration gradient",
      "Does not involve protein carriers",
      "Can be inhibited by competitive or non-competitive inhibitors",
      "Is not affected by temperature",
      "Changes the chemical composition of the ligand being transported"
    ],
    answer: "Can be inhibited by competitive or non-competitive inhibitors"
  },
  {
    question: "Which feedback mechanism is described in the context of Homeostasis?",
    options: [
      "Positive feedback mechanism",
      "Negative feedback mechanism",
      "Feedforward mechanism",
      "Allosteric feedback",
      "Enzyme feedback"
    ],
    answer: "Negative feedback mechanism"
  },
  {
    question: "What is defined as the minimum stimulus strength (voltage) required to generate an Action Potential (AP) when applied for an infinite duration, representing the baseline excitability threshold?",
    options: [
      "Chronaxie",
      "Rheobase",
      "Refractory period",
      "Threshold potential",
      "Action potential amplitude"
    ],
    answer: "Rheobase"
  },
  {
    question: "In the context of the strength-duration curve, what is Chronaxie?",
    options: [
      "The minimum stimulus strength for an AP",
      "The minimum stimulus duration for an AP at rheobase strength",
      "The stimulus duration required to depolarize the tissue at twice the rheobase strength",
      "The time it takes for an AP to propagate",
      "The maximum stimulus strength the tissue can tolerate"
    ],
    answer: "The stimulus duration required to depolarize the tissue at twice the rheobase strength"
  },
  {
    question: "Myasthenia gravis is an autoimmune neuromuscular disorder resulting from antibodies targeting what at the postsynaptic membrane?",
    options: [
      "Voltage-gated calcium channels",
      "Acetylcholine receptors (AChRs)",
      "Sodium channels",
      "Potassium (K+) channels",
      "Myelin sheath"
    ],
    answer: "Acetylcholine receptors (AChRs)"
  },
  {
    question: "A common symptomatic management for Myasthenia gravis involves drugs that enhance Acetylcholine (ACh) availability. What type of inhibitors are these drugs (e.g., pyridostigmine)?",
    options: [
      "Acetylcholine inhibitors",
      "Acetylcholinesterase inhibitors",
      "Adrenergic inhibitors",
      "Muscarinic agonists",
      "Nicotinic agonists"
    ],
    answer: "Acetylcholinesterase inhibitors"
  },
  {
    question: "The Autonomic Nervous System (ANS) regulates what type of functions of the body?",
    options: [
      "Skeletal muscle movement",
      "Reflex actions like blinking",
      "Involuntary functions of the body",
      "Conscious perception of stimuli",
      "Speech and language"
    ],
    answer: "Involuntary functions of the body"
  },
  {
    question: "Which division of the ANS generally promotes functions concerned with vegetative aspects of day-to-day living, such as digestion and absorption of food?",
    options: [
      "Sympathetic division",
      "Parasympathetic division",
      "Enteric division",
      "Somatic nervous system",
      "Central nervous system"
    ],
    answer: "Parasympathetic division"
  },
  {
    question: "In the ANS, which type of fibers are always cholinergic in the parasympathetic division?",
    options: [
      "Postganglionic fibers",
      "Preganglionic fibers",
      "Effector organ fibers",
      "Sensory fibers",
      "Adrenergic fibers"
    ],
    answer: "Preganglionic fibers"
  },
  {
    question: "What is the primary source of fluid intake?",
    options: [
      "Food",
      "Metabolism",
      "Ingested liquids",
      "Intravenous fluids",
      "Absorption from the air"
    ],
    answer: "Ingested liquids"
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