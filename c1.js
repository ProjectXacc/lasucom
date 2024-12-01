// Question bank
const questionBank = [
         {
    question: "What accepts a pair of electrons?",
    options: ["Acid", "Base", "Salt", "Oxidizing agent"],
    answer: "Acid"
  },
  {
    question: "Which unit prefix represents nano?",
    options: ["Micro", "Nano", "Pico", "Milli"],
    answer: "Nano"
  },
  {
    question: "What is alkaemia?",
    options: [
      "State of uncompensated acidic blood pH",
      "State of uncompensated alkaline blood pH",
      "State of balanced blood pH",
      "State of hypoxia in blood"
    ],
    answer: "State of uncompensated alkaline blood pH"
  },
  {
    question: "Causes of high anion gap metabolic acidosis include all except:",
    options: [
      "Lactic acidosis",
      "Diabetic ketoacidosis",
      "Renal tubular acidosis",
      "Methanol poisoning"
    ],
    answer: "Renal tubular acidosis"
  },
  {
    question: "Compensation for respiratory alkalosis involves:",
    options: [
      "Increased H+ secretion",
      "Decreased H+ secretion",
      "Increased bicarbonate excretion",
      "Decreased bicarbonate excretion"
    ],
    answer: "Decreased bicarbonate excretion"
  },
  {
    question: "All these are derived from cholesterol except:",
    options: [
      "Bile salts",
      "Sex steroids",
      "Vitamin D",
      "Bile pigments"
    ],
    answer: "Bile pigments"
  },
  {
    question: "Which substance is biologically inert?",
    options: ["Inulin", "Creatinine", "Urea", "Ammonia"],
    answer: "Inulin"
  },
  {
    question: "What does an MSDS sheet indicate?",
    options: [
      "Chemical hazards",
      "Biological hazards",
      "Physical hazards",
      "Radiation hazards"
    ],
    answer: "Chemical hazards"
  },
  {
    question: "What type of hazard does poor posture represent?",
    options: [
      "Chemical hazard",
      "Ergonomic hazard",
      "Physical hazard",
      "Environmental hazard"
    ],
    answer: "Ergonomic hazard"
  },
  {
    question: "In an upright position, plasma protein concentration:",
    options: [
      "Increases",
      "Decreases",
      "Remains constant",
      "Fluctuates randomly"
    ],
    answer: "Increases"
  },
  {
    question: "What can affect stool occult blood tests?",
    options: [
      "Meat intake",
      "Vitamin C",
      "Calcium supplements",
      "Fasting"
    ],
    answer: "Meat intake"
  },
  {
    question: "The precursor for de novo cholesterol synthesis is:",
    options: [
      "Acetyl-CoA",
      "Malonyl-CoA",
      "Farnesyl pyrophosphate",
      "Isopentenyl pyrophosphate"
    ],
    answer: "Acetyl-CoA"
  },
  {
    question: "Plasma cholesterol level in adults should be:",
    options: [
      "Below 200 mg/dL",
      "200–240 mg/dL",
      "Above 240 mg/dL",
      "Below 100 mg/dL"
    ],
    answer: "Below 200 mg/dL"
  },
  {
    question: "Marker for acute pancreatitis:",
    options: ["Amylase", "Lipase", "GGT", "ALT"],
    answer: "Amylase"
  },
  {
    question: "Which of these is an endogenous marker?",
    options: ["Cystatin C", "Inulin", "Myoglobin", "Iohexol"],
    answer: "Cystatin C"
  },
  {
    question: "Which of these can cause hypokalemia?",
    options: [
      "Carbenoxolone",
      "ACE inhibitors",
      "Beta-blockers",
      "Spironolactone"
    ],
    answer: "Carbenoxolone"
  },
  {
    question: "Which plasma cholesterol doesn’t contain ApoB?",
    options: ["HDL", "LDL", "VLDL", "IDL"],
    answer: "HDL"
  },
  {
    question: "Insulin stimulation tests involve:",
    options: [
      "Induced hypoglycemia",
      "Increased cortisol levels",
      "Decreased insulin levels",
      "Increased glycogen breakdown"
    ],
    answer: "Induced hypoglycemia"
  },
  {
    question: "A urine specific gravity of 1.0003 suggests:",
    options: ["Dehydration", "Overhydration", "Diabetes insipidus", "Normal hydration"],
    answer: "Dehydration"
  },
  {
    question: "Bartter syndrome is associated with:",
    options: [
      "Increased renin and aldosterone levels",
      "Decreased renin levels",
      "Hyperkalemia",
      "Hypocalcemia"
    ],
    answer: "Increased renin and aldosterone levels"
  },
  {
    question: "Lipid transport from intestinal lumen to epithelial cells involves:",
    options: ["Bile salts", "LDL", "HDL", "VLDL"],
    answer: "Bile salts"
  },
  {
    question: "Which of these is not a colloid?",
    options: ["Dextran", "Sodium chloride", "Hetastarch", "Human albumin"],
    answer: "Sodium chloride"
  },
  {
    question: "Which of these is a crystalloid?",
    options: [
      "Human albumin",
      "Ringer’s lactate",
      "Dextran",
      "Hetastarch"
    ],
    answer: "Ringer’s lactate"
  },
  {
    question: "What is the serum marker for acute pancreatitis?",
    options: ["Amylase", "Lipase", "GGT", "ALT"],
    answer: "Amylase"
  },
  {
    question: "Normal total cholesterol reference range is:",
    options: [
      "Below 200 mg/dL",
      "200–240 mg/dL",
      "Above 240 mg/dL",
      "100–150 mg/dL"
    ],
    answer: "Below 200 mg/dL"
  },
  {
    question: "Which lipoprotein does not have ApoB?",
    options: ["HDL", "LDL", "VLDL", "IDL"],
    answer: "HDL"
  },
  {
    question: "Endogenous marker for GFR is:",
    options: ["Cystatin C", "Inulin", "Creatinine", "Iohexol"],
    answer: "Cystatin C"
  },
  {
    question: "Which of these activates LCAT?",
    options: ["ApoA", "ApoB", "ApoC", "ApoE"],
    answer: "ApoA"
  },
  {
    question: "Chylomicrons are classified as:",
    options: [
      "Lipoprotein origins",
      "Transport lipids",
      "Energy storage particles",
      "Bile salt precursors"
    ],
    answer: "Lipoprotein origins"
  },
  {
    question: "The precursor for de novo cholesterol synthesis is:",
    options: [
      "Acetyl-CoA",
      "Malonyl-CoA",
      "Farnesyl pyrophosphate",
      "Isopentenyl pyrophosphate"
    ],
    answer: "Acetyl-CoA"
  },
 {
    question: "Pyloric stenosis is associated with:",
    options: [
      "Metabolic alkalosis",
      "Respiratory alkalosis",
      "Metabolic acidosis",
      "Respiratory acidosis"
    ],
    answer: "Metabolic alkalosis"
  },
  {
    question: "Cholesterol is a precursor for all except:",
    options: [
      "Bile salts",
      "Sex steroids",
      "Vitamin D",
      "Bile pigments"
    ],
    answer: "Bile pigments"
  },
  {
    question: "Hyponatremia is associated with:",
    options: [
      "Hypoaldosteronism",
      "Hypercortisolism",
      "Excessive sodium intake",
      "Hyperkalemia"
    ],
    answer: "Hypoaldosteronism"
  },
  {
    question: "In an upright position, hydrostatic pressure:",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "Decreases initially then stabilizes"
    ],
    answer: "Decreases"
  },
  {
    question: "Which hormone has a postprandial increase?",
    options: ["Gastrin", "Prolactin", "Progesterone", "Glucagon"],
    answer: "Gastrin"
  },
  {
    question: "Caffeine is known to:",
    options: [
      "Activate phosphodiesterase",
      "Inhibit adenylate cyclase",
      "Stimulate cortisol release",
      "Block insulin secretion"
    ],
    answer: "Activate phosphodiesterase"
  },
  {
    question: "Lesch-Nyhan syndrome is characterized by:",
    options: [
      "Self-mutilation",
      "Hyperkalemia",
      "Dehydration",
      "Respiratory alkalosis"
    ],
    answer: "Self-mutilation"
  },
  {
    question: "The main component of surfactant is:",
    options: [
      "Palmitoyl phosphatidylcholine",
      "Phosphatidylserine",
      "Phosphatidylethanolamine",
      "Sphingomyelin"
    ],
    answer: "Palmitoyl phosphatidylcholine"
  },
  {
    question: "A stone in the upper bile duct is likely to cause:",
    options: [
      "Jaundice",
      "Cholecystitis",
      "Gastritis",
      "Pancreatitis"
    ],
    answer: "Jaundice"
  },
  {
    question: "How does hypothyroidism affect hyperuricemia?",
    options: [
      "Reduced excretion",
      "Overproduction",
      "Increased renal clearance",
      "Reduced renal clearance"
    ],
    answer: "Reduced excretion"
  },
  {
    question: "Uric acid saturation occurs at:",
    options: [
      "6.0–6.8 mg/dL",
      "5.0–6.0 mg/dL",
      "7.0–8.0 mg/dL",
      "8.0–9.0 mg/dL"
    ],
    answer: "6.0–6.8 mg/dL"
  },
  {
    question: "What is the anion gap?",
    options: [
      "Difference between measured cations and anions",
      "Difference between total cations and anions",
      "Total cation concentration",
      "Total anion concentration"
    ],
    answer: "Difference between measured cations and anions"
  },
  {
    question: "Electrical fires cannot be extinguished with:",
    options: [
      "Water fire extinguishers",
      "Carbon dioxide extinguishers",
      "Dry chemical extinguishers",
      "Foam extinguishers"
    ],
    answer: "Water fire extinguishers"
  },
  {
    question: "Water deprivation test is used to diagnose:",
    options: [
      "Central diabetes insipidus",
      "Type 1 diabetes",
      "Type 2 diabetes",
      "Cushing's syndrome"
    ],
    answer: "Central diabetes insipidus"
  },
  {
    question: "What is commonly seen after exercise?",
    options: [
      "Decreased lactate levels",
      "Decreased pyruvate levels",
      "Decreased CO2 levels",
      "Increased oxygen levels"
    ],
    answer: "Decreased pyruvate levels"
  },
  {
    question: "Alpha-fetoprotein is a marker for:",
    options: [
      "Primary cell carcinoma",
      "Pancreatic cancer",
      "Breast cancer",
      "Renal cancer"
    ],
    answer: "Primary cell carcinoma"
  },
  {
    question: "Which is correct about unit prefixes?",
    options: [
      "0.001 is milli",
      "pH = log(H+)",
      "0.00000001 is nano",
      "0.01 is centi"
    ],
    answer: "0.001 is milli"
  },
  {
    question: "Beta and gamma fusion occur in:",
    options: [
      "Lipid metabolism",
      "Carbohydrate metabolism",
      "Protein synthesis",
      "Nucleotide synthesis"
    ],
    answer: "Lipid metabolism"
  },
  {
    question: "A 33-year-old suspected of diabetes insipidus has low ADH levels after deprivation. Diagnosis?",
    options: [
      "Central diabetes insipidus",
      "Nephrogenic diabetes insipidus",
      "Psychogenic polydipsia",
      "Diabetic ketoacidosis"
    ],
    answer: "Central diabetes insipidus"
  },
  {
    question: "FeNa% is less than 1 in pre-renal causes and greater than 1 in:",
    options: [
      "Renal tubular acidosis",
      "Nephrotic syndrome",
      "Glomerulonephritis",
      "Pyelonephritis"
    ],
    answer: "Renal tubular acidosis"
  },
  {
    question: "Electron acceptors are classified as:",
    options: ["Acids", "Bases", "Oxidants", "Reductants"],
    answer: "Acids"
  },
  {
    question: "What does not contain apoprotein B?",
    options: ["HDL", "LDL", "VLDL", "IDL"],
    answer: "HDL"
  },
  {
    question: "Transport of lipids from the intestinal lumen involves:",
    options: ["Bile salts", "LDL", "HDL", "VLDL"],
    answer: "Bile salts"
  },
  {
    question: "Increased urine osmolality after ADH suggests:",
    options: [
      "Central diabetes insipidus",
      "Nephrogenic diabetes insipidus",
      "Psychogenic polydipsia",
      "Dehydration"
    ],
    answer: "Central diabetes insipidus"
  },
  {
    question: "Albumin-adjusted calcium calculation is required in:",
    options: [
      "Hypoalbuminemia",
      "Hyperalbuminemia",
      "Normal albumin levels",
      "Hypercalcemia"
    ],
    answer: "Hypoalbuminemia"
  },
  {
    question: "Hyperchloremic metabolic acidosis is associated with:",
    options: [
      "Type IV renal tubular acidosis",
      "Type I renal tubular acidosis",
      "Diabetic ketoacidosis",
      "Lactic acidosis"
    ],
    answer: "Type IV renal tubular acidosis"
  },
  {
    question: "Bartter syndrome is associated with:",
    options: [
      "Metabolic alkalosis",
      "Respiratory alkalosis",
      "Metabolic acidosis",
      "Respiratory acidosis"
    ],
    answer: "Metabolic alkalosis"
  },
  {
    question: "Normal anion gap metabolic acidosis is seen in:",
    options: [
      "Renal tubular acidosis",
      "Diabetic ketoacidosis",
      "Methanol poisoning",
      "Lactic acidosis"
    ],
    answer: "Renal tubular acidosis"
  },
  {
    question: "Non-parametric statistical measures include:",
    options: [
      "Percentile and median",
      "Mean and standard deviation",
      "Variance and standard error",
      "Correlation and regression"
    ],
    answer: "Percentile and median"
  },
  {
    question: "What is not part of a chem path lab?",
    options: [
      "Recovery room",
      "Reagent preparation",
      "Centrifuge room",
      "Quality control room"
    ],
    answer: "Recovery room"
  },
  {
    question: "Which hormone is elevated postprandially?",
    options: ["Gastrin", "Prolactin", "Glucagon", "Progesterone"],
    answer: "Gastrin"
  },
  {
    question: "Strict vegetarians often have:",
    options: [
      "Reduced HDL levels",
      "Increased LDL levels",
      "Elevated triglycerides",
      "Increased VLDL levels"
    ],
    answer: "Reduced HDL levels"
  },
  {
    question: "SIADH (Syndrome of Inappropriate ADH secretion) is associated with:",
    options: [
      "No edema",
      "Severe dehydration",
      "Polyuria",
      "Hypernatremia"
    ],
    answer: "No edema"
  },
  {
    question: "Serum occult blood tests can be affected by:",
    options: [
      "Increased meat intake",
      "High carbohydrate intake",
      "Low protein intake",
      "Vitamin C supplementation"
    ],
    answer: "Increased meat intake"
  },
  {
    question: "On centrifugation, hemoglobinuria will:",
    options: [
      "Be homogeneous",
      "Form a clot",
      "Separate into layers",
      "Settle at the bottom"
    ],
    answer: "Be homogeneous"
  }, 

  {
    question: "A person was admitted in a coma. Analysis of the arterial blood gave the following values: PCO2 16 mm Hg, HCO3- 5 mmol/l and pH 7.1. What is the underlying acid-base disorder?",
    options: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "Respiratory Alkalosis"],
    answer: "Metabolic Acidosis"
  },
  {
    question: "In a man undergoing surgery, it was necessary to aspirate the contents of the upper gastrointestinal tract. After surgery, the following values were obtained from an arterial blood sample: pH 7.55, PCO2 52 mm Hg and HCO3- 40 mmol/l. What is the underlying disorder?",
    options: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "Respiratory Alkalosis"],
    answer: "Metabolic Alkalosis"
  },
  {
    question: "A young woman is found comatose, having taken an unknown number of sleeping pills an unknown time before. An arterial blood sample yields the following values: pH – 6.90, HCO3- 13 meq/liter, PaCO2 68 mmHg. This patient’s acid-base status is most accurately described as:",
    options: [
      "Uncompensated metabolic acidosis",
      "Uncompensated respiratory acidosis",
      "Simultaneous respiratory and metabolic acidosis",
      "Respiratory acidosis with partial renal compensation"
    ],
    answer: "Simultaneous respiratory and metabolic acidosis"
  },
  {
    question: "A student is nervous for a big exam and is breathing rapidly. What do you expect out of the followings?",
    options: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "Respiratory Alkalosis"],
    answer: "Respiratory Alkalosis"
  },
  {
    question: "A 45-year-old female with renal failure missed her dialysis and was feeling sick. What could be the reason?",
    options: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "Respiratory Alkalosis"],
    answer: "Metabolic Acidosis"
  },
  {
    question: "An 80-year-old man had a bad cold. After two weeks he said, 'It went into my chest, I am feeling tightness in my chest, I am coughing, suffocated, and unable to breathe!' What could be the possible reason?",
    options: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "Respiratory Alkalosis"],
    answer: "Respiratory Acidosis"
  },
  {
    question: "A post-operative surgical patient had a nasogastric tube in for three days. The nurse caring for the patient stated that there was much drainage from the tube, that is why she felt so sick. What could be the reason?",
    options: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "Respiratory Alkalosis"],
    answer: "Metabolic Alkalosis"
  },
  {
    question: "The pH of the body fluids is stabilized by buffer systems. Which of the following compounds is the most effective buffer system at physiological pH?",
    options: ["Bicarbonate buffer", "Phosphate buffer", "Protein buffer", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following laboratory results below indicates compensated metabolic alkalosis?",
    options: [
      "Low pCO2, normal bicarbonate, and high pH",
      "Low pCO2, low bicarbonate, low pH",
      "High pCO2, normal bicarbonate, and low pH",
      "High pCO2, high bicarbonate, and high pH"
    ],
    answer: "High pCO2, high bicarbonate, and high pH"
  },
  {
    question: "The greatest buffering capacity at physiological pH would be provided by a protein rich in which of the following amino acids?",
    options: ["Lysine", "Histidine", "Aspartic acid", "Leucine"],
    answer: "Histidine"
  },
  {
    question: "Which of the following is most appropriate for a female suffering from insulin-dependent diabetes mellitus with a pH of 7.2, HCO3-17 mmol/L and pCO2-20 mm Hg?",
    options: ["Metabolic Acidosis", "Metabolic Alkalosis", "Respiratory Acidosis", "Respiratory Alkalosis"],
    answer: "Metabolic Acidosis"
  },
  {
    question: "Causes of metabolic alkalosis include all the following except:",
    options: [
      "Mineralocorticoid deficiency",
      "Hypokalemia",
      "Thiazide diuretic therapy",
      "Recurrent vomiting"
    ],
    answer: "Mineralocorticoid deficiency"
  },
  {
    question: "Renal glutaminase activity is increased in:",
    options: ["Metabolic Acidosis", "Respiratory Acidosis", "Both of the above", "None of the above"],
    answer: "Both of the above"
  },
  {
    question: "Causes of lactic acidosis include all except:",
    options: ["Acute Myocardial Infarction", "Hypoxia", "Circulatory Failure", "Infections"],
    answer: "Infections"
  },
  {
    question: "Which out of the following conditions will not cause respiratory alkalosis?",
    options: ["Fever", "Anxiety", "Laryngeal Obstruction", "Salicylate Toxicity"],
    answer: "Laryngeal Obstruction"
  },
  {
    question: "All are true about metabolic alkalosis except one:",
    options: [
      "Associated with hyperkalemia",
      "Associated with decreased ionic calcium concentration",
      "Can be caused due to primary hyperaldosteronism",
      "Can be caused due to renin-secreting tumor"
    ],
    answer: "Associated with hyperkalemia"
  },
  {
    question: "Choose the incorrect statement out of the following:",
    options: [
      "Deoxyhemoglobin is a weak base",
      "Oxyhemoglobin is a relatively strong acid",
      "The buffering capacity of hemoglobin is lesser than plasma protein",
      "The buffering capacity of hemoglobin is due to histidine residues"
    ],
    answer: "The buffering capacity of hemoglobin is lesser than plasma protein"
  },
  {
    question: "Carbonic anhydrase is present at all places except:",
    options: ["Gastric parietal cells", "Red blood cells", "Renal tubular cells", "Plasma"],
    answer: "Plasma"
  },
  {
    question: "All are true for renal handling of acids in metabolic acidosis except:",
    options: [
      "Hydrogen ion secretion is increased",
      "Bicarbonate reabsorption is decreased",
      "Urinary acidity is increased",
      "Urinary ammonia is increased"
    ],
    answer: "Bicarbonate reabsorption is decreased"
  },
  {
    question: "Choose the incorrect statement about the anion gap out of the following:",
    options: [
      "In lactic acidosis anion gap is increased",
      "Anion gap is decreased in hypercalcemia",
      "Anion gap is decreased in lithium toxicity",
      "Anion gap is decreased in ketoacidosis"
    ],
    answer: "Anion gap is decreased in ketoacidosis"
  },
  {
    question: "Excessive citrate in transfused blood can cause which of the following abnormalities?",
    options: ["Metabolic Alkalosis", "Metabolic Acidosis", "Respiratory Alkalosis", "Respiratory Acidosis"],
    answer: "Metabolic Alkalosis"
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
// Password configuration with manually set expiration dates
const passwords = {
    "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
 "PADONU1": new Date("2024-12-01T23:59:59").getTime(), // Custom expiration date and time
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
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