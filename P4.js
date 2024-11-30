// Question bank
const questionBank = [
          { question: "Which hormone is primarily responsible for regulating the menstrual cycle?", options: ["Estrogen", "Testosterone", "Progesterone", "Insulin"], answer: "Estrogen" },
                { question: "What is the primary function of the thyroid gland?", options: ["Regulate metabolism", "Control blood sugar", "Maintain water balance", "Produce sex hormones"], answer: "Regulate metabolism" },
                { question: "Which hormone triggers ovulation?", options: ["Luteinizing hormone (LH)", "Follicle-stimulating hormone (FSH)", "Estrogen", "Progesterone"], answer: "Luteinizing hormone (LH)" },
  { question: "Where does fertilization of the ovum typically occur?", options: ["Fallopian tube", "Uterus", "Ovary", "Cervix"], answer: "Fallopian tube" },
  { question: "Which hormone is produced by the corpus luteum after ovulation?", options: ["Progesterone", "Estrogen", "FSH", "LH"], answer: "Progesterone" },
  { question: "What is the main male sex hormone?", options: ["Testosterone", "Estrogen", "Progesterone", "LH"], answer: "Testosterone" },
  { question: "The endometrium is the inner lining of which organ?", options: ["Uterus", "Ovary", "Fallopian tube", "Vagina"], answer: "Uterus" },
  { question: "What is the function of the Sertoli cells in the testes?", options: ["Support spermatogenesis", "Produce testosterone", "Store sperm", "Transport sperm"], answer: "Support spermatogenesis" },
  { question: "The acrosome reaction is essential for which process?", options: ["Sperm penetration of the ovum", "Fertilization", "Embryo implantation", "Menstrual cycle"], answer: "Sperm penetration of the ovum" },
  { question: "Which hormone maintains the corpus luteum during early pregnancy?", options: ["Human chorionic gonadotropin (hCG)", "FSH", "LH", "Progesterone"], answer: "Human chorionic gonadotropin (hCG)" },
  { question: "What phase of the menstrual cycle follows ovulation?", options: ["Luteal phase", "Follicular phase", "Proliferative phase", "Menstrual phase"], answer: "Luteal phase" },
  { question: "Which hormone is primarily responsible for the development of secondary sexual characteristics in females?", options: ["Estrogen", "Progesterone", "Testosterone", "FSH"], answer: "Estrogen" },
  { question: "Where are Leydig cells located?", options: ["Testes", "Ovaries", "Fallopian tubes", "Uterus"], answer: "Testes" },
  { question: "What is the typical duration of the menstrual cycle?", options: ["28 days", "21 days", "14 days", "35 days"], answer: "28 days" },
  { question: "During pregnancy, which hormone is responsible for milk production?", options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"], answer: "Prolactin" },
  { question: "What structure in the male reproductive system stores sperm until ejaculation?", options: ["Epididymis", "Vas deferens", "Seminal vesicles", "Prostate gland"], answer: "Epididymis" },
  { question: "Which layer of the uterus sheds during menstruation?", options: ["Endometrium", "Myometrium", "Perimetrium", "Serosa"], answer: "Endometrium" },
  { question: "Which hormone is produced in higher levels during the follicular phase of the menstrual cycle?", options: ["Estrogen", "Progesterone", "LH", "hCG"], answer: "Estrogen" },
  { question: "The seminal vesicles contribute to semen by providing which substance?", options: ["Fructose", "Progesterone", "Sperm", "FSH"], answer: "Fructose" },
  { question: "The zona pellucida surrounds which part of the female gamete?", options: ["Ovum", "Follicle", "Endometrium", "Corpus luteum"], answer: "Ovum" },
  { question: "Which structure produces estrogen and progesterone during the first trimester of pregnancy?", options: ["Corpus luteum", "Placenta", "Ovary", "Pituitary gland"], answer: "Corpus luteum" },
  { question: "Which hormone is responsible for the contraction of the uterus during labor?", options: ["Oxytocin", "Prolactin", "Estrogen", "FSH"], answer: "Oxytocin" },
  { question: "In males, FSH primarily acts on which cells?", options: ["Sertoli cells", "Leydig cells", "Epididymal cells", "Spermatogonia"], answer: "Sertoli cells" },
  { question: "What term describes the process of egg formation in females?", options: ["Oogenesis", "Spermatogenesis", "Ovulation", "Menstruation"], answer: "Oogenesis" },
  { question: "Which phase of the menstrual cycle is marked by an increase in progesterone?", options: ["Luteal phase", "Follicular phase", "Ovulatory phase", "Menstrual phase"], answer: "Luteal phase" },
  { question: "What is the primary site of fertilization in humans?", options: ["Ampulla of the fallopian tube", "Endometrium", "Ovary", "Vagina"], answer: "Ampulla of the fallopian tube" },
  { question: "Which hormone promotes the development of mammary glands for lactation?", options: ["Progesterone", "Estrogen", "Oxytocin", "Prolactin"], answer: "Progesterone" },

  // Endocrine Physiology
  { question: "Where is the hormone insulin produced?", options: ["Pancreas", "Liver", "Thyroid", "Pituitary"], answer: "Pancreas" },
  { question: "Which gland is referred to as the 'master gland'?", options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"], answer: "Pituitary gland" },
  { question: "What hormone does the thyroid produce that regulates metabolism?", options: ["Thyroxine (T4)", "Insulin", "Glucagon", "Cortisol"], answer: "Thyroxine (T4)" },
  { question: "The adrenal medulla secretes which two hormones?", options: ["Epinephrine and norepinephrine", "Cortisol and aldosterone", "Thyroxine and insulin", "Estrogen and progesterone"], answer: "Epinephrine and norepinephrine" },
  { question: "Which hormone increases blood calcium levels?", options: ["Parathyroid hormone (PTH)", "Calcitonin", "Aldosterone", "Insulin"], answer: "Parathyroid hormone (PTH)" },
  { question: "Which hormone is responsible for regulating the sleep-wake cycle?", options: ["Melatonin", "Insulin", "Thyroxine", "Aldosterone"], answer: "Melatonin" },
  { question: "What is the primary action of glucagon?", options: ["Increase blood glucose", "Decrease blood glucose", "Regulate body temperature", "Control salt and water balance"], answer: "Increase blood glucose" },
  { question: "Which hormone inhibits the release of growth hormone?", options: ["Somatostatin", "Insulin", "Glucagon", "Cortisol"], answer: "Somatostatin" },
  { question: "Where are mineralocorticoids, such as aldosterone, produced?", options: ["Adrenal cortex", "Adrenal medulla", "Pancreas", "Pituitary gland"], answer: "Adrenal cortex" },
  { question: "What hormone stimulates milk ejection during breastfeeding?", options: ["Oxytocin", "Prolactin", "Estrogen", "LH"], answer: "Oxytocin" },
  { question: "Which hormone is involved in the regulation of sodium and potassium balance?", options: ["Aldosterone", "ADH", "Insulin", "Cortisol"], answer: "Aldosterone" },
  { question: "What effect does cortisol have on blood sugar?", options: ["Increases blood sugar", "Decreases blood sugar", "No effect", "Inhibits glucose absorption"], answer: "Increases blood sugar" },
  { question: "Which hormone regulates the body’s metabolic rate and heat production?", options: ["Thyroxine (T4)", "Insulin", "Cortisol", "Growth hormone"], answer: "Thyroxine (T4)" },
  { question: "What triggers the release of ADH?", options: ["Increased plasma osmolarity", "Low blood pressure", "High calcium levels", "Low blood sugar"], answer: "Increased plasma osmolarity" },
  { question: "Which endocrine gland releases calcitonin?", options: ["Thyroid gland", "Parathyroid gland", "Pituitary gland", "Pancreas"], answer: "Thyroid gland" },
  { question: "Which hormone stimulates glycogen breakdown in the liver?", options: ["Glucagon", "Insulin", "Cortisol", "ADH"], answer: "Glucagon" },
  { question: "Which hormone is important in the body's response to stress?", options: ["Cortisol", "Insulin", "Thyroxine", "Growth hormone"], answer: "Cortisol" },
  { question: "What hormone causes the kidneys to retain water?", options: ["ADH", "Aldosterone", "Insulin", "Oxytocin"], answer: "ADH" },
  { question: "Which gland secretes growth hormone (GH)?", options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"], answer: "Pituitary gland" },
  { question: "The release of TSH stimulates the production of what hormone?", options: ["Thyroxine", "Cortisol", "Insulin", "Glucagon"], answer: "Thyroxine" },
  { question: "What is the primary role of aldosterone?", options: ["Increase sodium reabsorption", "Lower blood glucose", "Inhibit protein synthesis", "Increase body temperature"], answer: "Increase sodium reabsorption" },
  { question: "Which hormone is critical for regulating blood sugar levels?", options: ["Insulin", "Cortisol", "ADH", "Calcitonin"], answer: "Insulin" },
  { question: "The hypothalamus controls the release of hormones from which gland?", options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"], answer: "Pituitary gland" },
  { question: "Which hormone is released in response to hypoglycemia?", options: ["Glucagon", "Insulin", "Thyroxine", "Growth hormone"], answer: "Glucagon" },
  { question: "Which hormone helps decrease calcium levels in the blood?", options: ["Calcitonin", "PTH", "Insulin", "Aldosterone"], answer: "Calcitonin" },
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