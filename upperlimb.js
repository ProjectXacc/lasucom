// Question bank
const questionBank = [
{ question: "Which muscle is responsible for flexion at the elbow?", options: ["Biceps", "Triceps", "Deltoid", "Brachialis"], answer: "Biceps" },

      { question: "What muscle is primarily responsible for shoulder abduction?", options: ["Deltoid", "Pectoralis Major", "Latissimus Dorsi", "Supraspinatus"], answer: "Deltoid" },
        { question: "What is the primary action of the biceps brachii?", options: ["Extension of the elbow", "Flexion of the elbow", "Pronation of the forearm", "Supination of the forearm"], answer: "Flexion of the elbow" },
        { question: "Which artery supplies blood to the arm?", options: ["Brachial artery", "Radial artery", "Ulnar artery", "Subclavian artery"], answer: "Brachial artery" },
        { question: "Which ligament stabilizes the shoulder joint?", options: ["Glenohumeral ligament", "Rotator cuff", "Coracoacromial ligament", "Acromioclavicular ligament"], answer: "Glenohumeral ligament" },
        { question: "What structure allows for the rotation of the forearm?", options: ["Ulna", "Radius", "Humerus", "Carpal bones"], answer: "Radius" },
        { question: "Which nerve is responsible for wrist extension?", options: ["Radial nerve", "Ulnar nerve", "Median nerve", "Musculocutaneous nerve"], answer: "Radial nerve" },
        { question: "What is the longest bone in the body?", options: ["Femur", "Humerus", "Radius", "Tibia"], answer: "Femur" },
                { question: "Which muscle is responsible for flexion at the elbow?", options: ["Biceps", "Triceps", "Deltoid", "Brachialis"], answer: "Biceps" },
                { question: "Which is the longest bone in the human body?", options: ["Femur", "Humerus", "Radius", "Tibia"], answer: "Femur" },
        { question: "What muscle is primarily responsible for shoulder abduction?", options: ["Deltoid", "Pectoralis Major", "Latissimus Dorsi", "Supraspinatus"], answer: "Deltoid" },
        { question: "What is the primary action of the biceps brachii?", options: ["Extension of the elbow", "Flexion of the elbow", "Pronation of the forearm", "Supination of the forearm"], answer: "Flexion of the elbow" },
        { question: "Which nerve innervates the quadriceps femoris?", options: ["Femoral nerve", "Sciatic nerve", "Obturator nerve", "Tibial nerve"], answer: "Femoral nerve" },
        { question: "What structure connects the femur to the pelvis?", options: ["Acetabulum", "Tendon", "Ligament", "Cartilage"], answer: "Acetabulum" },
        { question: "Which muscle flexes the hip joint?", options: ["Iliopsoas", "Gluteus Maximus", "Rectus Femoris", "Sartorius"], answer: "Iliopsoas" },
        { question: "What is the function of the rotator cuff?", options: ["Stabilizes the shoulder joint", "Allows hip rotation", "Supports the knee joint", "Facilitates wrist movement"], answer: "Stabilizes the shoulder joint" },
        { question: "Which artery supplies blood to the arm?", options: ["Brachial artery", "Radial artery", "Ulnar artery", "Subclavian artery"], answer: "Brachial artery" },
        { question: "What bone forms the base of the spine?", options: ["Sacrum", "Coccyx", "Lumbar", "Thoracic"], answer: "Sacrum" },
        { question: "The hip joint is classified as which type of joint?", options: ["Ball and socket", "Hinge", "Pivot", "Saddle"], answer: "Ball and socket" },
        { question: "Which muscle is responsible for extension of the knee?", options: ["Biceps femoris", "Rectus femoris", "Sartorius", "Semitendinosus"], answer: "Rectus femoris" },
        { question: "What structure allows for the rotation of the forearm?", options: ["Ulna", "Radius", "Humerus", "Carpal bones"], answer: "Radius" },
        { question: "Which ligament stabilizes the shoulder joint?", options: ["Glenohumeral ligament", "Rotator cuff", "Coracoacromial ligament", "Acromioclavicular ligament"], answer: "Glenohumeral ligament" },
        { question: "Which muscle is primarily involved in knee flexion?", options: ["Biceps femoris", "Quadriceps", "Rectus femoris", "Gastrocnemius"], answer: "Gastrocnemius" },
        { question: "The Achilles tendon connects which muscle to the heel?", options: ["Soleus", "Gastrocnemius", "Tibialis anterior", "Flexor digitorum"], answer: "Gastrocnemius" },
        { question: "Which muscle is responsible for elbow flexion?", options: ["Biceps brachii", "Triceps brachii", "Brachialis", "Anconeus"], answer: "Biceps brachii" },
        { question: "The greater sciatic notch is located on which bone?", options: ["Ilium", "Sacrum", "Ischium", "Pubis"], answer: "Ilium" },
        { question: "What is the primary action of the triceps brachii?", options: ["Flexion of the elbow", "Extension of the elbow", "Adduction of the arm", "Abduction of the arm"], answer: "Extension of the elbow" },
        { question: "Which nerve is responsible for wrist extension?", options: ["Radial nerve", "Ulnar nerve", "Median nerve", "Musculocutaneous nerve"], answer: "Radial nerve" },
        { question: "The patella is classified as which type of bone?", options: ["Sesamoid", "Flat", "Long", "Irregular"], answer: "Sesamoid" },
        { question: "Which muscle is responsible for the adduction of the arm?", options: ["Pectoralis major", "Deltoid", "Supraspinatus", "Infraspinatus"], answer: "Pectoralis major" },
        { question: "What is the main function of the iliotibial band?", options: ["Stabilizes the knee", "Supports the hip", "Facilitates ankle movement", "Connects muscles of the thigh"], answer: "Stabilizes the knee" },
        { question: "Which of the following is a carpal bone?", options: ["Scaphoid", "Cuneiform", "Talus", "Navicular"], answer: "Scaphoid" },
        { question: "Which artery is primarily responsible for blood supply to the lower limb?", options: ["Femoral artery", "Popliteal artery", "Iliac artery", "Tibial artery"], answer: "Femoral artery" },
        { question: "Which joint is classified as a hinge joint?", options: ["Elbow joint", "Shoulder joint", "Hip joint", "Wrist joint"], answer: "Elbow joint" },
        { question: "What is the primary action of the gluteus maximus?", options: ["Hip extension", "Hip flexion", "Hip abduction", "Hip adduction"], answer: "Hip extension" },
        { question: "Which muscle group is primarily responsible for hip flexion?", options: ["Quadriceps", "Hamstrings", "Iliopsoas", "Gluteals"], answer: "Iliopsoas" },
        { question: "Which ligament prevents excessive abduction of the hip?", options: ["Iliofemoral ligament", "Pubofemoral ligament", "Ischiofemoral ligament", "Ligamentum teres"], answer: "Pubofemoral ligament" },
        { question: "What structure forms the anatomical snuffbox?", options: ["Abductor pollicis longus", "Extensor pollicis brevis", "Extensor pollicis longus", "All of the above"], answer: "All of the above" },
        { question: "Which nerve innervates the anterior compartment of the thigh?", options: ["Femoral nerve", "Obturator nerve", "Sciatic nerve", "Common peroneal nerve"], answer: "Femoral nerve" },
        { question: "The radius is located on which side of the forearm when in the anatomical position?", options: ["Lateral", "Medial", "Posterior", "Anterior"], answer: "Lateral" },
        { question: "Which muscle is responsible for the plantar flexion of the foot?", options: ["Tibialis anterior", "Soleus", "Gastrocnemius", "Fibularis longus"], answer: "Gastrocnemius" },
        { question: "What is the primary function of the adductor group of muscles?", options: ["Hip adduction", "Hip abduction", "Knee flexion", "Knee extension"], answer: "Hip adduction" },
        { question: "Which bone articulates with the acetabulum?", options: ["Femur", "Tibia", "Fibula", "Sacrum"], answer: "Femur" },
        { question: "What muscle is involved in the pronation of the forearm?", options: ["Pronator teres", "Supinator", "Biceps brachii", "Triceps brachii"], answer: "Pronator teres" },
        { question: "Which muscle extends the fingers?", options: ["Flexor digitorum superficialis", "Extensor digitorum", "Flexor pollicis longus", "Abductor digiti minimi"], answer: "Extensor digitorum" },
        { question: "Which structure protects the knee joint?", options: ["Meniscus", "Patella", "Ligaments", "All of the above"], answer: "All of the above" },
        { question: "Which muscle performs hip abduction?", options: ["Gluteus medius", "Adductor magnus", "Iliopsoas", "Rectus femoris"], answer: "Gluteus medius" },
        { question: "What type of joint is the shoulder joint?", options: ["Ball and socket", "Hinge", "Pivot", "Saddle"], answer: "Ball and socket" },
        { question: "Which nerve innervates the posterior compartment of the arm?", options: ["Radial nerve", "Ulnar nerve", "Median nerve", "Musculocutaneous nerve"], answer: "Radial nerve" },
        { question: "What structure is formed by the fusion of the ilium, ischium, and pubis?", options: ["Pelvis", "Sacrum", "Coccyx", "Femur"], answer: "Pelvis" },
        { question: "The tibia is commonly referred to as which bone?", options: ["Shin bone", "Thigh bone", "Upper arm bone", "Wrist bone"], answer: "Shin bone" },
        { question: "Which muscle is a powerful hip extensor?", options: ["Gluteus maximus", "Gluteus medius", "Biceps femoris", "Rectus femoris"], answer: "Gluteus maximus" },
        { question: "Which structure is responsible for the stability of the shoulder?", options: ["Rotator cuff", "Glenoid labrum", "Deltoid", "Pectoralis minor"], answer: "Rotator cuff" },
        { question: "What is the main function of the deltoid muscle?", options: ["Shoulder abduction", "Shoulder flexion", "Shoulder extension", "All of the above"], answer: "All of the above" },
        { question: "Which muscle is responsible for inversion of the foot?", options: ["Tibialis anterior", "Fibularis brevis", "Gastrocnemius", "Soleus"], answer: "Tibialis anterior" },
        { question: "What is the primary function of the hamstrings?", options: ["Knee flexion", "Hip flexion", "Hip extension", "Ankle dorsiflexion"], answer: "Knee flexion" },
        { question: "Which ligament connects the femur to the tibia?", options: ["Cruciate ligament", "Collateral ligament", "Patellar ligament", "Acetabular ligament"], answer: "Cruciate ligament" },
        { question: "Which structure is referred to as the 'funny bone'?", options: ["Ulnar nerve", "Median nerve", "Radial nerve", "Musculocutaneous nerve"], answer: "Ulnar nerve" },
        { question: "The axillary nerve innervates which muscle?", options: ["Deltoid", "Pectoralis major", "Serratus anterior", "Subscapularis"], answer: "Deltoid" },
        { question: "Which muscle is the main antagonist to the biceps brachii?", options: ["Triceps brachii", "Brachialis", "Coracobrachialis", "Pectoralis major"], answer: "Triceps brachii" },
        { question: "Which muscle allows for the outward rotation of the arm?", options: ["Infraspinatus", "Supraspinatus", "Subscapularis", "Teres major"], answer: "Infraspinatus" },
        { question: "The base of the skull articulates with which vertebra?", options: ["Atlas", "Axis", "Cervical", "Thoracic"], answer: "Atlas" },
        { question: "Which nerve is responsible for the sensation of the lateral aspect of the forearm?", options: ["Musculocutaneous nerve", "Median nerve", "Ulnar nerve", "Radial nerve"], answer: "Musculocutaneous nerve" },
        { question: "The flexor retinaculum forms the roof of which structure?", options: ["Carpal tunnel", "Tarsal tunnel", "Cubital tunnel", "Thoracic outlet"], answer: "Carpal tunnel" },
        { question: "Which muscles are responsible for the fine motor control of the fingers?", options: ["Intrinsic hand muscles", "Extrinsic hand muscles", "Flexor muscles", "Extensor muscles"], answer: "Intrinsic hand muscles" },
        { question: "The femoral triangle contains which important structure?", options: ["Femoral nerve", "Femoral artery", "Femoral vein", "All of the above"], answer: "All of the above" },
        { question: "What is the primary function of the tibialis posterior?", options: ["Foot inversion", "Foot eversion", "Plantar flexion", "Dorsiflexion"], answer: "Foot inversion" },
        { question: "Which joint connects the forearm to the hand?", options: ["Wrist joint", "Elbow joint", "Shoulder joint", "Carpal joint"], answer: "Wrist joint" },
        { question: "Which of the following muscles is NOT a part of the rotator cuff?", options: ["Supraspinatus", "Infraspinatus", "Teres minor", "Deltoid"], answer: "Deltoid" },
        { question: "Which structure separates the thoracic cavity from the abdominal cavity?", options: ["Diaphragm", "Intercostal muscles", "Costal cartilage", "Pleura"], answer: "Diaphragm" },
        { question: "What is the primary action of the soleus muscle?", options: ["Plantar flexion", "Dorsiflexion", "Knee flexion", "Hip flexion"], answer: "Plantar flexion" },
        { question: "Which muscle group is primarily responsible for the extension of the knee?", options: ["Quadriceps femoris", "Hamstrings", "Adductors", "Iliopsoas"], answer: "Quadriceps femoris" },
        { question: "Which muscle is located on the anterior side of the thigh?", options: ["Vastus lateralis", "Biceps femoris", "Semitendinosus", "Semimembranosus"], answer: "Vastus lateralis" },
        { question: "Which of the following bones is part of the pelvic girdle?", options: ["Ilium", "Ischium", "Pubis", "All of the above"], answer: "All of the above" },
        { question: "What structure provides support to the lateral aspect of the ankle?", options: ["Lateral ligament", "Medial ligament", "Achilles tendon", "Calcaneus"], answer: "Lateral ligament" },
        { question: "Which muscle acts as the primary extensor of the hip?", options: ["Gluteus maximus", "Rectus femoris", "Biceps femoris", "Sartorius"], answer: "Gluteus maximus" },
        { question: "The axillary nerve is a branch of which plexus?", options: ["Cervical plexus", "Brachial plexus", "Lumbar plexus", "Sacral plexus"], answer: "Brachial plexus" },
        { question: "Which artery supplies blood to the gluteal region?", options: ["Inferior gluteal artery", "Superior gluteal artery", "Femoral artery", "Obturator artery"], answer: "Superior gluteal artery" },
        { question: "Which muscle extends the fingers?", options: ["Flexor digitorum superficialis", "Extensor digitorum", "Flexor pollicis longus", "Abductor digiti minimi"], answer: "Extensor digitorum" },
        { question: "Which muscle is responsible for elbow flexion?", options: ["Biceps brachii", "Triceps brachii", "Brachialis", "Anconeus"], answer: "Biceps brachii" },
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