// Question bank
const questionBank = [
               {
    question: "Which part of the duodenum is the widest and most fixed?",
    options: ["First part", "Second part", "Third part", "Fourth part"],
    answer: "Second part"
  },
  {
    question: "The second part of the duodenum is most vulnerable to:",
    options: ["External trauma", "Peptic ulceration", "Ischemic injury", "Iatrogenic damage"],
    answer: "Peptic ulceration"
  },
  {
    question: "The third part of the duodenum is most susceptible to injury from:",
    options: ["Blunt abdominal trauma", "Gallstones", "Pancreatic tumors", "Hiatal hernia"],
    answer: "Blunt abdominal trauma"
  },
  {
    question: "The first part of the duodenum is:",
    options: ["Fully retroperitoneal", "Intraperitoneal", "Partially retroperitoneal", "Suspended by a mesentery"],
    answer: "Intraperitoneal"
  },
  {
    question: "The definitive kidney develops from which embryonic region?",
    options: ["Cervical", "Thoracic", "Lumbar", "Sacral"],
    answer: "Lumbar"
  },
  {
    question: "Calyces of the kidney develop from the:",
    options: ["Mesonephric duct", "Metanephric blastema", "Ureteric bud", "Pronephros"],
    answer: "Metanephric blastema"
  },
  {
    question: "The ureter is derived from the:",
    options: ["Pronephric tubules", "Mesonephric diverticulum", "Cloaca", "Metanephros"],
    answer: "Mesonephric diverticulum"
  },
  {
    question: "The anterior boundary of the superior mediastinum is:",
    options: ["Shorter than the posterior boundary", "Longer than the posterior boundary", "Equal in length", "Nonexistent"],
    answer: "Longer than the posterior boundary"
  },
  {
    question: "The mediastinum in a living person is:",
    options: ["Rigid and immobile", "Mobile and compressible", "Fixed by fibrous tissue", "Filled with bone"],
    answer: "Mobile and compressible"
  },
  {
    question: "The posterior mediastinum communicates with the pretracheal fascia via the:",
    options: ["Anterior superior mediastinum", "Middle mediastinum", "Inferior mediastinum", "Thoracic inlet"],
    answer: "Anterior superior mediastinum"
  },
  {
    question: "Esophageal varices result from obstruction in the:",
    options: ["Splenic vein", "Portal vein", "Inferior vena cava", "Hepatic artery"],
    answer: "Portal vein"
  },
  {
    question: "Post-hepatic portal hypertension is most commonly caused by:",
    options: ["Portal vein thrombosis", "Liver cirrhosis", "Splenic vein occlusion", "Right heart failure"],
    answer: "Liver cirrhosis"
  },
  {
    question: "Portal hypertension leads to:",
    options: ["Congestive splenomegaly", "Renal atrophy", "Pulmonary embolism", "Gallbladder necrosis"],
    answer: "Congestive splenomegaly"
  },
  {
    question: "The stomach is:",
    options: ["Entirely retroperitoneal", "Mostly intraperitoneal", "Completely extraperitoneal", "Fused to the pancreas"],
    answer: "Mostly intraperitoneal"
  },
  {
    question: "The cardiac orifice is located approximately:",
    options: ["1.5 cm left of the midline at T11", "1.5 cm right of the midline at L1", "At the xiphoid process", "Behind the liver"],
    answer: "1.5 cm right of the midline at L1"
  },
  {
    question: "During development, the stomach rotates in how many planes?",
    options: ["1", "2", "3", "4"],
    answer: "2"
  },
  {
    question: "The anal columns (of Morgagni) number:",
    options: ["4", "6", "8", "10"],
    answer: "6"
  },
  {
    question: "In males, the anal canal is anatomically related to the:",
    options: ["Base of the prostate", "Uterus", "Bladder dome", "Seminal vesicles"],
    answer: "Base of the prostate"
  },
  {
    question: "The most consistent rectal fold is the:",
    options: ["Upper fold", "Middle fold", "Lower fold", "Transverse fold"],
    answer: "Upper fold"
  },
  {
    question: "Which structure is found in the deep perineal pouch?",
    options: ["Scrotal vein", "Cowper's glands", "Greater vestibular glands", "Artery to the bulb of the penis"],
    answer: "Cowper's glands"
  },
  {
    question: "The pulmonary ligament is derived from which type of pleura?",
    options: ["Mediastinal pleura", "Cervical pleura", "Visceral pleura", "Costal pleura"],
    answer: "Mediastinal pleura"
  },
  {
    question: "Which statement about uterine anatomy is INCORRECT?",
    options: ["Retroversion always causes infertility", "It is normally anteverted", "It is normally anteflexed", "The cervix forms a 90° angle with the vagina"],
    answer: "Retroversion always causes infertility"
  },
  {
    question: "During truncal vagotomy, nerve resection is performed at the:",
    options: ["Greater curvature of stomach", "Lower esophagus", "Lesser curvature", "Pyloric orifice"],
    answer: "Lower esophagus"
  },
  {
    question: "Which structure does NOT support the uterus?",
    options: ["Round ligament", "Broad ligament", "Levator ani", "Transverse cervical ligament"],
    answer: "Broad ligament"
  },
  {
    question: "Which muscle is NOT part of the pelvic floor?",
    options: ["Pyramidalis", "Pubococcygeus", "Iliococcygeus", "Ischiococcygeus"],
    answer: "Pyramidalis"
  },
  {
    question: "Which embryonic structure contributes to the 5-chambered heart?",
    options: ["Sinus venarum", "Primitive ventricle", "Bulbus cordis", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which vessel is NOT a branch of the celiac trunk?",
    options: ["Gastroduodenal artery", "Cystic artery", "Left gastric artery", "Jejunal branches"],
    answer: "Jejunal branches"
  },
  {
    question: "The pleura covering the mediastinum is called:",
    options: ["Pleural cavity", "Mediastinal pleura", "Visceral pleura", "Diaphragmatic pleura"],
    answer: "Mediastinal pleura"
  },
  {
    question: "An atrial septal defect may result from:",
    options: ["Large foramen ovale", "Over-resorption of septum primum", "Underdeveloped septum secundum", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "The inferior mediastinum is divided by the:",
    options: ["Heart", "Pericardium", "Great vessels", "Trachea"],
    answer: "Pericardium"
  },
  {
    question: "Which statement about muscles is FALSE?",
    options: ["Smooth muscle enables peristalsis", "Cilia are used for cellular movement", "Actin/myosin are the only contractile proteins", "The functional unit is the myocyte"],
    answer: "Actin/myosin are the only contractile proteins"
  },
  {
    question: "The 'policeman of the abdomen' does NOT:",
    options: ["Store adipose tissue", "Shield abdominal organs", "Contain milky spots", "Extend into the thoracic cavity"],
    answer: "Extend into the thoracic cavity"
  },
  {
    question: "Which abdominal organ moves with respiration?",
    options: ["Pancreas", "Duodenum", "Liver", "Kidneys"],
    answer: "Liver"
  },
  {
    question: "Deep gastric pits are characteristic of the:",
    options: ["Pylorus", "Fundus", "Cardia", "Esophagus"],
    answer: "Pylorus"
  },
  {
    question: "Which structure does NOT support the uterus?",
    options: ["Uterosacral ligament", "Pubocervical ligament", "Broad ligament", "Levator ani"],
    answer: "Broad ligament"
  },
  {
    question: "Which is NOT a part of the anal sphincter complex?",
    options: ["Subcutaneous external sphincter", "Deep external sphincter", "Longitudinal muscle layer", "Internal oblique muscle"],
    answer: "Internal oblique muscle"
  },
  {
    question: "Abundant lymphoid tissue is found in the lamina propria of the:",
    options: ["Ileum", "Duodenum", "Esophagus", "Appendix"],
    answer: "Appendix"
  },
  {
    question: "Which structure does NOT lie anterior to the stomach?",
    options: ["Diaphragm", "Spleen", "Anterior abdominal wall", "Left liver lobe"],
    answer: "Spleen"
  },
  {
    question: "Which artery is NOT a branch of the superior mesenteric artery?",
    options: ["Middle colic", "Right colic", "Ileocolic", "Superior rectal"],
    answer: "Superior rectal"
  },
  {
    question: "Which is NOT part of Tetralogy of Fallot?",
    options: ["Overriding aorta", "Left ventricular hypertrophy", "Ventricular septal defect", "Pulmonary stenosis"],
    answer: "Left ventricular hypertrophy"
  },
  {
    question: "How many types of peritoneal folds exist?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    question: "Which statement about the pelvic diaphragm is TRUE?",
    options: ["Contracts to increase intra-abdominal pressure", "Puborectalis assists urethral sphincter in micturition", "Ischiococcygeus is its largest component", "Iliococcygeus is called \"agitator caudae\" in tailed animals"],
    answer: "Iliococcygeus is called \"agitator caudae\" in tailed animals"
  },
  {
    question: "Carcinoma cells metastasize to supraclavicular nodes via the:",
    options: ["Azygos vein", "Thoracic duct", "Descending aorta", "Inferior vena cava"],
    answer: "Thoracic duct"
  },
  {
    question: "Which is NOT a kidney covering?",
    options: ["Fibrous capsule", "Pararenal fat", "Renal pelvis", "Renal fascia"],
    answer: "Renal pelvis"
  },
  {
    question: "The pleural reflection at the mid-axillary line is at rib:",
    options: ["5th", "8th", "10th", "12th"],
    answer: "10th"
  },
  {
    question: "The definitive kidney:",
    options: ["Develops from lateral plate mesoderm", "Forms from metanephros in the 5th week", "Uses mesonephric tubules", "Extends from cervical to sacral regions"],
    answer: "Forms from metanephros in the 5th week"
  },
  {
    question: "According to Couinaud, liver segment IV is the:",
    options: ["Caudate lobe", "Right lobe", "Quadrate lobe", "Left lobe"],
    answer: "Quadrate lobe"
  },
  {
    question: "Which cell type is NOT found in tracheal mucosa?",
    options: ["Kulchitsky cells", "Clara cells", "Microglia", "Brush cells"],
    answer: "Microglia"
  },
  {
    question: "Plicae circulares are present in the:",
    options: ["Small intestine", "Large intestine", "Stomach", "Esophagus"],
    answer: "Small intestine"
  },
  {
    question: "Which statement about the inguinal canal is FALSE?",
    options: ["Contains the ilioinguinal nerve", "Falx inguinalis lies posterior to it", "Internal oblique forms part of its anterior wall", "Measures ~4 cm in length"],
    answer: "Falx inguinalis lies posterior to it"
  },
   {
    question: "The first part of the duodenum is fully retroperitoneal.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "The second part of the duodenum is the most vulnerable to peptic ulceration.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "The third part of the duodenum is most susceptible to external trauma.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "The definitive kidney develops from the sacral region.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "Calyces of the kidney form from the metanephric blastema.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "The ureter develops from the mesonephric diverticulum.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "The anterior boundary of the superior mediastinum is longer than the posterior boundary.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "The mediastinum in a living person is rigid and immobile.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "The posterior mediastinum communicates with the pretracheal fascia.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "Esophageal varices in portal hypertension cause hemorrhoids.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "Liver cirrhosis is a post-hepatic cause of portal hypertension.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "The stomach is completely intraperitoneal.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "The cardiac orifice is always 1.5 cm to the right of the median plane at L1.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "The anal canal has six longitudinal columns (of Morgagni).",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "True"
  },
  {
    question: "The puborectalis muscle assists in micturition.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "Meckel’s diverticulum is a normal anatomical variant.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "In gastrochisis, intestines herniate into the umbilical cord.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "The exocrine pancreas secretes cholecystokinin (CCK).",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "The perineal membrane consists of a double layer of fascia.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
  {
    question: "The deep perineal pouch contains the scrotal nerves and vessels.",
    options: ["True", "False", "Maybe", "Sometimes"],
    answer: "False"
  },
               

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
