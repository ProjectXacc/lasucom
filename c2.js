// Question bank
const questionBank = [
       
  {
    question: "A patient with a history of fever for five days, proteins ++, blood +++, nitrite absent. What is the diagnosis?",
    options: [
      "Urinary Tract Infection (UTI)",
      "Nephritic Syndrome",
      "Acute Pyelonephritis",
      "Hematuria"
    ],
    answer: "Nephritic Syndrome"
  },
  {
    question: "What is the difference between hematuria and hemoglobinuria?",
    options: [
      "Hematuria involves intact red blood cells; hemoglobinuria does not",
      "Hematuria is a type of anemia",
      "Hemoglobinuria is caused by bacterial infections",
      "Hematuria results in reduced hemoglobin levels"
    ],
    answer: "Hematuria involves intact red blood cells; hemoglobinuria does not"
  },
  {
    question: "Hypercholesteremia is a secondary feature of:",
    options: [
      "Tangier disease",
      "Familial Hypercholesterolemia",
      "Type II Diabetes",
      "Cholesterol Ester Storage Disease"
    ],
    answer: "Tangier disease"
  },
  {
    question: "In the diagnosis of hirsutism, what is the purpose of ruling out hypertrichosis?",
    options: [
      "To confirm an endocrine etiology",
      "To evaluate insulin resistance",
      "To exclude drug-induced hair growth",
      "To check for an androgen-secreting tumor"
    ],
    answer: "To confirm an endocrine etiology"
  },
  {
    question: "Is coma an indication for enteral nutrition?",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Is dysphagia an indication for enteral nutrition?",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Which of the following is NOT a feature of enteral nutrition?",
    options: [
      "Short bowel syndrome",
      "Inflammatory bowel disease",
      "Glucose intolerance",
      "Chronic constipation"
    ],
    answer: "Chronic constipation"
  },
  {
    question: "In a glucose stimulation test, an increase in growth hormone in a normal person is:",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "In what direction does DNA synthesis occur?",
    options: [
      "5’ to 3’",
      "3’ to 5’",
      "Both directions",
      "It varies"
    ],
    answer: "5’ to 3’"
  },
  {
    question: "Which cardiac biomarker is most preferred for myocardial infarction?",
    options: [
      "Troponin I",
      "Myoglobin",
      "Creatine Kinase-MB",
      "Lactate Dehydrogenase"
    ],
    answer: "Troponin I"
  },
  {
    question: "Cholesterol is the precursor for all of the following EXCEPT:",
    options: [
      "Bile pigments",
      "Steroid hormones",
      "Vitamin D",
      "Bile salts"
    ],
    answer: "Bile pigments"
  },
  {
    question: "Which of these is a primary bile salt?",
    options: [
      "Cholic acid",
      "Taurocholic acid",
      "Deoxycholic acid",
      "Glycocholic acid"
    ],
    answer: "Cholic acid"
  },
  {
    question: "What is the corrected serum calcium level if albumin is 2.172 g/dL?",
    options: [
      "8.5 mg/dL",
      "10.0 mg/dL",
      "9.5 mg/dL",
      "7.8 mg/dL"
    ],
    answer: "9.5 mg/dL"
  },
  {
    question: "Convert 5.5 mmol/L of blood glucose to mg/dL:",
    options: [
      "99",
      "140",
      "200",
      "120"
    ],
    answer: "99"
  },
  {
    question: "Hyperinsulinemia is a cause of non-ketotic hypoglycemia.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Starvation is a cause of non-ketotic hypoglycemia.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "A cause of hypoglycemia is a disorder of:",
    options: [
      "Fructose metabolism",
      "Glucose-6-phosphatase deficiency",
      "Lipid metabolism",
      "Amino acid catabolism"
    ],
    answer: "Fructose metabolism"
  },
  {
    question: "What is the inability to mount an immune reaction against a specific antigen called?",
    options: [
      "Anergy",
      "Hypersensitivity",
      "Autoimmunity",
      "Tolerance"
    ],
    answer: "Anergy"
  },
  {
    question: "The absence of a co-stimulatory receptor is implicated in:",
    options: [
      "Anergy",
      "Autoimmune disorders",
      "Immune complex diseases",
      "Cytokine storm"
    ],
    answer: "Anergy"
  },
  {
    question: "Suppression of T regulatory cells is a mechanism of:",
    options: [
      "Immune tolerance",
      "Autoimmunity",
      "Hypersensitivity",
      "Inflammatory response"
    ],
    answer: "Immune tolerance"
  },
  {
    question: "Antigen sequestration is a mechanism of:",
    options: [
      "Immune tolerance",
      "Autoimmunity",
      "Hypersensitivity",
      "Inflammatory response"
    ],
    answer: "Immune tolerance"
  },
  {
    question: "Macrophage activation includes:",
    options: [
      "Bacteria invasion and release of proteases",
      "Virus invasion and antigen presentation",
      "Fungal infection and cytokine release",
      "Parasitic invasion and phagocytosis"
    ],
    answer: "Bacteria invasion and release of proteases"
  },
  {
    question: "Presence of an immunologic reaction is a criterion for:",
    options: [
      "Autoimmune reaction",
      "Allergy",
      "Hypersensitivity",
      "Immune deficiency"
    ],
    answer: "Autoimmune reaction"
  },
  {
    question: "Absence of another well-defined cause is a criterion for:",
    options: [
      "Autoimmune reaction",
      "Cancer",
      "Chronic inflammation",
      "Infectious disease"
    ],
    answer: "Autoimmune reaction"
  },
  {
    question: "Evidence that a reaction is secondary to tissue damage is a criterion for:",
    options: [
      "Autoimmune reaction",
      "Infectious disease",
      "Allergy",
      "Immune tolerance"
    ],
    answer: "Autoimmune reaction"
  },
  {
    question: "In tolerance, central tolerance comes after peripheral tolerance:",
    options: [
      "False",
      "True"
    ],
    answer: "False"
  },
  {
    question: "Autoimmune hemolytic anemia is an example of:",
    options: [
      "Type II hypersensitivity",
      "Type I hypersensitivity",
      "Type III hypersensitivity",
      "Type IV hypersensitivity"
    ],
    answer: "Type II hypersensitivity"
  },
  {
    question: "Soluble antigens are seen in what type of hypersensitivity reaction?",
    options: [
      "Type III hypersensitivity",
      "Type II hypersensitivity",
      "Type IV hypersensitivity",
      "Type I hypersensitivity"
    ],
    answer: "Type III hypersensitivity"
  },
  {
    question: "Immune complexes are seen in what type of hypersensitivity reaction?",
    options: [
      "Type III hypersensitivity",
      "Type II hypersensitivity",
      "Type IV hypersensitivity",
      "Type I hypersensitivity"
    ],
    answer: "Type III hypersensitivity"
  },
  {
    question: "Type I hypersensitivity is mediated by:",
    options: [
      "IgE",
      "IgA",
      "IgM",
      "IgG"
    ],
    answer: "IgE"
  },
  {
    question: "Cell-mediated reactions occur in what type of hypersensitivity reaction?",
    options: [
      "Type IV hypersensitivity",
      "Type II hypersensitivity",
      "Type I hypersensitivity",
      "Type III hypersensitivity"
    ],
    answer: "Type IV hypersensitivity"
  },
  {
    question: "Duration of Type IV hypersensitivity is:",
    options: [
      "24–72 hours",
      "Within minutes",
      "12–24 hours",
      "Non-specific"
    ],
    answer: "24–72 hours"
  },
  {
    question: "What cells mediate hypersensitivity?",
    options: [
      "T cells",
      "B cells",
      "Macrophages",
      "Natural Killer cells"
    ],
    answer: "T cells"
  },
  {
    question: "Molecular mimicry is:",
    options: [
      "A mechanism of hypersensitivity",
      "A viral defense mechanism",
      "A bacterial invasion mechanism",
      "A type of autoimmunity"
    ],
    answer: "A mechanism of hypersensitivity"
  },
  {
    question: "To perform semen analysis, the patient must abstain for:",
    options: [
      "2–5 days",
      "1–2 days",
      "5–7 days",
      "No restriction"
    ],
    answer: "2–5 days"
  },
  {
    question: "To diagnose Cushing syndrome, a 24-hour urine cortisol test can be used:",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Monoamine oxidase inhibitors are used to inhibit the synthesis of:",
    options: [
      "Epinephrine and norepinephrine",
      "Dopamine",
      "Serotonin",
      "Histamine"
    ],
    answer: "Epinephrine and norepinephrine"
  },
  {
    question: "Which cardiac biomarker is checked 1–4 hours after a cardiac event?",
    options: [
      "Myoglobin",
      "Troponin I",
      "Creatine Kinase-MB",
      "Lactate Dehydrogenase"
    ],
    answer: "Myoglobin"
  },
  {
    question: "Anti-Mullerian hormone checks for:",
    options: [
      "Ovarian reserve",
      "Pituitary function",
      "Thyroid function",
      "Adrenal reserve"
    ],
    answer: "Ovarian reserve"
  },
  {
    question: "Which of the following exhibits a positive feedback mechanism?",
    options: [
      "Estrogen and LH",
      "FSH and LH",
      "Progesterone and GnRH",
      "Prolactin and Oxytocin"
    ],
    answer: "Estrogen and LH"
  },
  {
    question: "Which is the most potent estrogen?",
    options: [
      "Estradiol",
      "Estriol",
      "Estrone",
      "Ethinyl estradiol"
    ],
    answer: "Estradiol"
  },
  {
    question: "Dehydroepiandrosterone sulfate (DHEA-S) is an adrenal androgen:",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Clonidine suppression test assesses:",
    options: [
      "Adrenal medulla function",
      "Pituitary function",
      "Thyroid function",
      "Pancreatic function"
    ],
    answer: "Adrenal medulla function"
  },
  {
    question: "Which is NOT a colligative property?",
    options: [
      "Osmotic diffusion",
      "Boiling point elevation",
      "Freezing point depression",
      "Vapor pressure lowering"
    ],
    answer: "Osmotic diffusion"
  },
  {
    question: "Non-ketotic hypoglycemia is seen in:",
    options: [
      "Growth hormone deficiency",
      "Cortisol deficiency",
      "Insulin resistance",
      "Glucagon deficiency"
    ],
    answer: "Growth hormone deficiency"
  },
  {
    question: "Transferrin is classified as a:",
    options: [
      "Negative acute-phase protein",
      "Positive acute-phase protein",
      "Transport protein",
      "Storage protein"
    ],
    answer: "Negative acute-phase protein"
  },
  {
    question: "C-reactive protein belongs to what class of proteins?",
    options: [
      "Acute-phase proteins",
      "Structural proteins",
      "Transport proteins",
      "Enzymes"
    ],
    answer: "Acute-phase proteins"
  },
  {
    question: "Albumin-to-globulin ratio is reduced in which condition?",
    options: [
      "Liver cirrhosis",
      "Acute inflammation",
      "Chronic kidney disease",
      "Multiple myeloma"
    ],
    answer: "Liver cirrhosis"
  },
  {
    question: "Alpha-1 antitrypsin deficiency is implicated in:",
    options: [
      "Pulmonary emphysema and liver cirrhosis",
      "Nephrotic syndrome and pancreatitis",
      "Cystic fibrosis and diabetes",
      "Hypertension and atherosclerosis"
    ],
    answer: "Pulmonary emphysema and liver cirrhosis"
  },
  {
    question: "A person with a BMI of 18.24 and dyslipidemia is classified as:",
    options: [
      "Underweight with metabolic syndrome",
      "Normal weight with lipid disorder",
      "Obese with insulin resistance",
      "Severely underweight with malabsorption"
    ],
    answer: "Normal weight with lipid disorder"
  },             

  {
    question: "Fatty liver is caused by the accumulation/deposition of fats in the liver. Which of the following condition is not the likely cause of fatty liver?",
    options: ["a) Obesity", "b) Starvation", "c) Pregnancy", "d) Diabetes mellitus"],
    correctAnswer: "c) Pregnancy"
  },
  {
    question: "Which of the following are the nonfunctional plasma enzymes increased in alcoholic subjects?",
    options: ["a) Alkaline phosphatase", "b) Acid Phosphatase", "c) Lactate dehydrogenase", "d) Gamma-glutamyltransferase"],
    correctAnswer: "d) Gamma-glutamyltransferase"
  },
  {
    question: "Crigler Najjar syndrome is a genetic disorder associated with unconjugated hyperbilirubinemia. What is the deficient enzyme responsible for the disease?",
    options: ["a) Bilirubin UDP-glucuronosyl transferase", "b) Biliverdin reductase", "c) Bilirubin UDP-glucuronosyl synthase", "d) Heme oxygenase"],
    correctAnswer: "a) Bilirubin UDP-glucuronosyl transferase"
  },
  {
    question: "All of the following statements are true concerning urobilinogen, Except:",
    options: ["a) Produced by oxidative action of intestinal bacteria.", "b) Undergoes significant enterohepatic circulation.", "c) Urinary levels increased in biliary obstruction.", "d) Fecal levels decreased in biliary obstruction."],
    correctAnswer: "c) Urinary levels increased in biliary obstruction."
  },
  {
    question: "Galactosemia is caused by a deficiency of the enzyme responsible for galactose metabolism. Name the enzyme.",
    options: ["a) Galactokinase", "b) Galactose 1- phosphate Uridyl transferase", "c) UDP-4- Epimerase", "d) Galactose dehydrogenase"],
    correctAnswer: "b) Galactose 1- phosphate Uridyl transferase"
  },
  {
    question: "The biochemical investigation of the blood specimen showed Bilirubin- 4.5 mg/dl, ALT- 150 IU/L, AST- 200 IU/L, and Albumin- 25 mg/dL. What is the likely biochemical diagnosis?",
    options: ["a) Chronic hepatic disease", "b) Acute hepatic disease", "c) Hemolytic Jaundice", "d) Obstructive liver disease"],
    correctAnswer: "b) Acute hepatic disease"
  },
  {
    question: "Which of the following enzyme is a sensitive marker of alcoholic liver disease?",
    options: ["a) Alanine transaminase", "b) Aspartate transaminase", "c) Gamma-Glutamyltransferase", "d) Alkaline phosphatase"],
    correctAnswer: "c) Gamma-Glutamyltransferase"
  },
  {
    question: "Which of the following marker is used for the differential diagnosis of obstructive jaundice?",
    options: ["a) Lactate dehydrogenase", "b) Creatine Kinase", "c) Carbonic anhydrase", "d) 5’- Nucleotidase"],
    correctAnswer: "d) 5’- Nucleotidase"
  },
  {
    question: "Which of the following samples is usually taken for the liver function test?",
    options: ["a) Blood sample", "b) Urine sample", "c) Intestine Biopsy sample", "d) Sputum sample"],
    correctAnswer: "a) Blood sample"
  },
  {
    question: "Gluconeogenesis occurs in the liver because of the presence of..................................",
    options: ["a) Phosphofructokinase", "b) Pyruvate carboxylase", "c) Glucose 6 phosphatase", "d) Glucokinase"],
    correctAnswer: "c) Glucose 6 phosphatase"
  },
  {
    question: "Which of the following statements is true of warfarin?",
    options: ["a) competitive antagonist of vitamin", "b) co-administration of aspirin is safe", "c) prolonged prothrombin time", "d) reduced synthesis of coagulation factor VIII."],
    correctAnswer: "c) prolonged prothrombin time"
  },
  {
    question: "Starch contains glucose units with 1-4 and 1-6 bonds and which enzyme helps to hydrolyze branched-chain?",
    options: ["a) amylase", "b) maltase", "c) isomaltase", "d) sucrase"],
    correctAnswer: "c) isomaltase"
  },
  {
    question: "Which of the following molecule is the substrate for ketogenesis?",
    options: ["a) alanine", "b) oxaloacetate", "c) triacylglycerol", "d) acetyl CoA"],
    correctAnswer: "d) acetyl CoA"
  },
  {
    question: "Which of the following enzyme is a sensitive marker of alcoholic liver disease?",
    options: ["a) Alanine transaminase", "b) Aspartate transaminase", "c) Alkaline phosphatase", "d) Gamma-Glutamyltransferase"],
    correctAnswer: "d) Gamma-Glutamyltransferase"
  },
  {
    question: "Which of the following marker is used for the differential diagnosis of 'obstructive jaundice'?",
    options: ["a) Lactate dehydrogenase", "b) Creatine Kinase", "c) Carbonic anhydrase", "d) 5’- Nucleotidase"],
    correctAnswer: "d) 5’- Nucleotidase"
  },
  {
    question: "Crigler's Najjar Syndrome II occurs due to...................................",
    options: ["a) Excessive production of bilirubin", "b) Complete Absence of a conjugating enzyme", "c) Partial deficiency of the conjugating enzyme", "d) Overexpression of conjugating enzymes"],
    correctAnswer: "c) Partial deficiency of the conjugating enzyme"
  },
  {
    question: "Which of the following enzyme regulates the TCA cycle:",
    options: ["a) succinate dehydrogenase", "b) fumarase", "c) isocitrate dehydrogenase", "d) malate dehydrogenase"],
    correctAnswer: "c) isocitrate dehydrogenase"
  },
  {
    question: "A person is suffering from a glycogen storage disease known as von Gierke disease. Identify the missing enzyme from the following:",
    options: ["a) glucokinase", "b) glucose-6- phosphatase", "c) phosphoglucomutase", "d) phosphoglucoisomerase"],
    correctAnswer: "b) glucose-6- phosphatase"
  },
  {
    question: "What is the cause of the 'Wernicke-Korsakoff' syndrome?",
    options: ["a) high-calorie intake from carbohydrate", "b) high intake of energy from alcohol", "c) high intake of fat for energy", "d) high intake of protein for energy"],
    correctAnswer: "b) high intake of energy from alcohol"
  },
  {
    question: "Which of the following trace metal are localized in the taste bud and play an important role as structural components of the taste bud?",
    options: ["a) Cu (copper)", "b) Zn (zinc)", "c) Cr (chromium)", "d) Fe (iron)"],
    correctAnswer: "b) Zn (zinc)"
  },
  {
    question: "Identify the pentose phosphate pathway intermediate that oxidizes and generates co-enzyme NADPH",
    options: ["a) fructose 6 phosphate", "b) ribose-5-phosphate", "c) glucose -6 phosphate", "d) glucose -1 phosphate"],
    correctAnswer: "c) glucose -6 phosphate"
  },
  {
    question: "What is 'Wilson disease'?",
    options: [
      "a) A autoimmune disorder with the excessive deposition of zinc in the liver",
      "b) A autoimmune disorder with the excessive deposition of antibiotics in the liver",
      "c) A autoimmune disorder with the excessive deposition of bilirubin in the liver",
      "d) A autoimmune disorder with the excessive deposition of copper in the liver"
    ],
    correctAnswer: "d) A autoimmune disorder with the excessive deposition of copper in the liver"
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
    "pin": new Date("2024-12-01T23:59:59").getTime(), // Custom expiration date and time
 "PADONU1": new Date("2024-12-01T23:59:59").getTime(), // Custom expiration date and time
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
  "OGUNLEYE": new Date("2025-12-01T23:59:59").getTime(), // Custom expiration date and time
    "222": new Date("2024-12-15T23:59:59").getTime()  // Custom expiration date and time
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