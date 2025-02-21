// Question bank
const questionBank = [
       { question: "Which molecule is the primary carrier of chemical energy in cells?", options: ["ATP", "DNA", "RNA", "GTP"], answer: "ATP" },
                { "question": "Which type of metabolism involves the breakdown of organic molecules to release energy?", "options": ["Anabolism", "Catabolism", "Fermentation", "Photosynthesis"], "answer": "Catabolism" },
        { "question": "What is the primary energy currency of the cell?", "options": ["ATP", "NADH", "FADH2", "GTP"], "answer": "ATP" },
        { "question": "Which process do microorganisms use to generate energy in anaerobic conditions?", "options": ["Aerobic respiration", "Fermentation", "Krebs cycle", "Oxidative phosphorylation"], "answer": "Fermentation" },
        { "question": "Which pathway is involved in glucose catabolism under aerobic conditions?", "options": ["Glycolysis", "Fermentation", "Krebs cycle", "Pentose phosphate pathway"], "answer": "Krebs cycle" },
        { "question": "What is the end product of fermentation of glucose by yeast?", "options": ["Ethanol", "Lactic acid", "Acetic acid", "Butyric acid"], "answer": "Ethanol" },
        { "question": "In which cellular compartment does the Krebs cycle occur in eukaryotes?", "options": ["Cytoplasm", "Mitochondria", "Nucleus", "Endoplasmic reticulum"], "answer": "Mitochondria" },
        { "question": "Which enzyme catalyzes the conversion of glucose to glucose-6-phosphate?", "options": ["Hexokinase", "Phosphofructokinase", "Glycogen phosphorylase", "Lactate dehydrogenase"], "answer": "Hexokinase" },
        { "question": "Which metabolic pathway generates NADPH for biosynthetic reactions?", "options": ["Glycolysis", "Krebs cycle", "Pentose phosphate pathway", "Beta-oxidation"], "answer": "Pentose phosphate pathway" },
        { "question": "The process of converting nitrogen gas into ammonia is called?", "options": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"], "answer": "Nitrogen fixation" },
        { "question": "Which type of microorganisms primarily use the Entner-Doudoroff pathway?", "options": ["Gram-positive bacteria", "Gram-negative bacteria", "Archaea", "Fungi"], "answer": "Gram-negative bacteria" },
        { "question": "The main purpose of the electron transport chain is to?", "options": ["Produce ATP", "Generate NADH", "Convert glucose to pyruvate", "Synthesize fatty acids"], "answer": "Produce ATP" },
        { "question": "In anaerobic respiration, which molecule is commonly used as a terminal electron acceptor?", "options": ["Oxygen", "Nitrate", "Sulfate", "Carbon dioxide"], "answer": "Nitrate" },
        { "question": "Which type of fermentation occurs in muscle cells during intense exercise?", "options": ["Alcoholic fermentation", "Lactic acid fermentation", "Acetic acid fermentation", "Mixed acid fermentation"], "answer": "Lactic acid fermentation" },
        { "question": "What is the primary function of coenzymes in metabolism?", "options": ["Act as substrates", "Act as catalysts", "Transfer electrons or functional groups", "Store energy"], "answer": "Transfer electrons or functional groups" },
        { "question": "What is produced during the beta-oxidation of fatty acids?", "options": ["Acetyl-CoA", "Glycerol", "NADH", "ATP"], "answer": "Acetyl-CoA" },
        { "question": "Which vitamin is a precursor for NAD+ synthesis?", "options": ["Thiamine", "Riboflavin", "Niacin", "Pyridoxine"], "answer": "Niacin" },
        { "question": "The TCA cycle is also known as the?", "options": ["Krebs cycle", "Glycolysis", "Pentose phosphate pathway", "Beta-oxidation"], "answer": "Krebs cycle" },
        { "question": "Which type of microorganism is most likely to perform photosynthesis?", "options": ["Bacteria", "Fungi", "Viruses", "Protozoa"], "answer": "Bacteria" },
        { "question": "Which of the following processes is NOT a part of aerobic respiration?", "options": ["Glycolysis", "Krebs cycle", "Fermentation", "Electron transport chain"], "answer": "Fermentation" },
        { "question": "What is the primary function of the pentose phosphate pathway?", "options": ["ATP production", "NADPH production", "Amino acid synthesis", "Nucleotide synthesis"], "answer": "NADPH production" },
        { "question": "Which metabolic process involves the incorporation of carbon dioxide into organic compounds?", "options": ["Carbon fixation", "Fermentation", "Glycolysis", "Oxidative phosphorylation"], "answer": "Carbon fixation" },
        { "question": "What is the byproduct of the anaerobic metabolism of glucose in lactic acid bacteria?", "options": ["Ethanol", "Lactic acid", "Carbon dioxide", "Acetic acid"], "answer": "Lactic acid" },
        { "question": "Which metabolic pathway do strict anaerobes primarily rely on for energy production?", "options": ["Aerobic respiration", "Fermentation", "Krebs cycle", "Glycolysis"], "answer": "Fermentation" },
        { "question": "Which compound is a key intermediate in both glycolysis and the Krebs cycle?", "options": ["Glucose", "Pyruvate", "Acetyl-CoA", "Oxaloacetate"], "answer": "Acetyl-CoA" },
        { "question": "Which enzyme is responsible for the conversion of pyruvate to acetyl-CoA?", "options": ["Pyruvate kinase", "Lactate dehydrogenase", "Pyruvate dehydrogenase", "Aldolase"], "answer": "Pyruvate dehydrogenase" },
        { "question": "Which of the following is a terminal electron acceptor used by certain bacteria during anaerobic respiration?", "options": ["Oxygen", "Sulfate", "Glucose", "Nitrate"], "answer": "Sulfate" },
        { "question": "What is the main product of the glycolytic pathway?", "options": ["NADH", "ATP", "Acetyl-CoA", "Pyruvate"], "answer": "Pyruvate" },
        { "question": "In bacteria, which structure is involved in ATP production through oxidative phosphorylation?", "options": ["Plasma membrane", "Nucleus", "Ribosome", "Cell wall"], "answer": "Plasma membrane" },
        { "question": "Which metabolic pathway produces the most ATP per glucose molecule?", "options": ["Fermentation", "Anaerobic respiration", "Aerobic respiration", "Glycolysis"], "answer": "Aerobic respiration" },
        { "question": "What type of microorganism primarily utilizes nitrogen fixation?", "options": ["Bacteria", "Viruses", "Fungi", "Algae"], "answer": "Bacteria" },
        { "question": "Which of the following is NOT a product of glycolysis?", "options": ["ATP", "NADH", "Acetyl-CoA", "Pyruvate"], "answer": "Acetyl-CoA" },
        { "question": "What is the function of ATP synthase in the electron transport chain?", "options": ["To transport electrons", "To produce ATP", "To pump protons", "To oxidize NADH"], "answer": "To produce ATP" },
        { "question": "In what cellular location does glycolysis occur?", "options": ["Cytoplasm", "Mitochondria", "Nucleus", "Endoplasmic reticulum"], "answer": "Cytoplasm" },
        { "question": "Which factor can inhibit enzyme activity?", "options": ["Temperature", "pH", "Substrate concentration", "All of the above"], "answer": "All of the above" },
        { "question": "The process by which bacteria can directly utilize atmospheric nitrogen is called?", "options": ["Nitrification", "Ammonification", "Nitrogen fixation", "Denitrification"], "answer": "Nitrogen fixation" },
        { "question": "Which of the following enzymes is involved in the breakdown of hydrogen peroxide?", "options": ["Catalase", "Lactate dehydrogenase", "Hexokinase", "Aldose reductase"], "answer": "Catalase" },
        { "question": "Which pathway is utilized by bacteria to ferment glucose to lactic acid?", "options": ["Pentose phosphate pathway", "Krebs cycle", "Lactic acid fermentation", "Glycolysis"], "answer": "Lactic acid fermentation" },
        { "question": "What is the fate of pyruvate under anaerobic conditions in yeast?", "options": ["Converted to acetyl-CoA", "Converted to ethanol", "Converted to lactic acid", "Remains unchanged"], "answer": "Converted to ethanol" },
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