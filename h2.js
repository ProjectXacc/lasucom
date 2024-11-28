// Question bank
const questionBank = [
      
  {
    question: "Woman went to UK, came back, woke up with purpura, neck and headache, has abdominal laparoscopic scars, prednisone 20mg. HPF shows hypospleenism. What is the indication for spleenectomy?",
    options: [
      "Hypersplenism causing pancytopenia",
      "Absence of spleen after laparoscopic surgery",
      "Autoimmune hemolytic anemia",
      "Chronic steroid use causing splenic atrophy"
    ],
    answer: "Hypersplenism causing pancytopenia"
  },
  {
    question: "X linked hemophilia",
    options: [
      "Autosomal recessive inheritance",
      "Only affects females",
      "Deficiency in factor VIII or IX",
      "Typically presents after age 40"
    ],
    answer: "Deficiency in factor VIII or IX"
  },
  {
    question: "Difference between HUS and TTP",
    options: [
      "HUS involves renal failure, TTP does not",
      "HUS is associated with neurological symptoms, TTP is not",
      "TTP is more common in children, HUS in adults",
      "TTP is characterized by the presence of thrombosis in small vessels"
    ],
    answer: "TTP is characterized by the presence of thrombosis in small vessels"
  },
  {
    question: "HIF and erythropoietin",
    options: [
      "HIF inhibits erythropoietin production",
      "HIF activates erythropoietin gene expression",
      "Erythropoietin inhibits HIF activity",
      "Both are unrelated in their functions"
    ],
    answer: "HIF activates erythropoietin gene expression"
  },
  {
    question: "Factor V is labile",
    options: [
      "It is resistant to activated protein C",
      "It is a key regulator in fibrinolysis",
      "It is essential for initiating coagulation",
      "It is unstable and breaks down rapidly in blood"
    ],
    answer: "It is unstable and breaks down rapidly in blood"
  },
  {
    question: "Thrombin activates protein C",
    options: [
      "Inactivates factor V and VIII",
      "Promotes clotting by increasing fibrinogen",
      "Enhances platelet aggregation",
      "Inhibits clot formation"
    ],
    answer: "Inactivates factor V and VIII"
  },
  {
    question: "Bleeding due to tooth extraction 10 years ago, no other bleeding episodes – VWD",
    options: [
      "Suggests a congenital platelet disorder",
      "Could indicate a secondary platelet dysfunction",
      "Points towards a chronic clotting disorder",
      "Typical of von Willebrand disease"
    ],
    answer: "Typical of von Willebrand disease"
  },
  {
    question: "Platelet is needed for secondary hemostatic plug",
    options: [
      "Platelets play no role in secondary hemostasis",
      "Platelets provide fibrinogen for clot formation",
      "Platelets cause vasoconstriction to stop bleeding",
      "Platelets secrete thrombin to initiate fibrinolysis"
    ],
    answer: "Platelets provide fibrinogen for clot formation"
  },
  {
    question: "WHO",
    options: [
      "World Hematology Organization",
      "World Health Organization",
      "World Hospital Organization",
      "World Hepatitis Organization"
    ],
    answer: "World Health Organization"
  },
  {
    question: "HIV is not needed for immediate blood transfusion reaction",
    options: [
      "HIV is a critical factor in blood transfusion reactions",
      "Blood transfusion reactions are unrelated to HIV status",
      "HIV testing is irrelevant in acute reactions",
      "Only Hepatitis B and C are considered in transfusion reactions"
    ],
    answer: "Blood transfusion reactions are unrelated to HIV status"
  },
  {
    question: "Target joint (Neovasculization)",
    options: [
      "Typically found in hemophilia patients",
      "Is a primary feature of rheumatoid arthritis",
      "Can occur due to post-operative complications",
      "Is irrelevant to musculoskeletal disorders"
    ],
    answer: "Typically found in hemophilia patients"
  },
  {
    question: "Tsat for monitoring HH",
    options: [
      "Transferrin saturation is a key marker for iron overload",
      "Tsat is used to monitor blood volume",
      "Tsat is used to assess vitamin D levels",
      "Tsat is irrelevant in the management of HH"
    ],
    answer: "Transferrin saturation is a key marker for iron overload"
  },
  {
    question: "Duffy for P vivax",
    options: [
      "Duffy antigen is a receptor for the parasite",
      "Duffy antigen is protective against P vivax",
      "Duffy antigen is unrelated to malaria resistance",
      "Duffy negativity enhances P vivax infection"
    ],
    answer: "Duffy antigen is a receptor for the parasite"
  },
  {
    question: "Gata 1 and Fog",
    options: [
      "GATA1 is a transcription factor, FOG1 is a cofactor in erythropoiesis",
      "Both are unrelated to hematopoiesis",
      "GATA1 inhibits FOG1 during red blood cell formation",
      "FOG1 enhances the expression of GATA1 in megakaryocytes"
    ],
    answer: "GATA1 is a transcription factor, FOG1 is a cofactor in erythropoiesis"
  },
  {
    question: "IL7 – stimulate proliferation (not an inhibitor)",
    options: [
      "IL-7 stimulates the proliferation of T and B cells",
      "IL-7 inhibits the production of white blood cells",
      "IL-7 has no impact on immune cell proliferation",
      "IL-7 is only involved in the maturation of red blood cells"
    ],
    answer: "IL-7 stimulates the proliferation of T and B cells"
  },
  {
    question: "Immune thrombocytopenia purpura- mother and child bleeding diathesis in first 48 hours",
    options: [
      "Indicates maternal immune thrombocytopenia transmitted to the child",
      "Occurs only if the mother has an active infection",
      "Is unrelated to any bleeding disorder",
      "Only occurs in mothers with a history of bleeding disorders"
    ],
    answer: "Indicates maternal immune thrombocytopenia transmitted to the child"
  },
  {
    question: "Bone marrow biopsy and histology",
    options: [
      "Bone marrow biopsy is used to assess bone density",
      "Histology is used to examine the blood cells and bone marrow architecture",
      "Bone marrow biopsy is not needed for diagnosis of leukemia",
      "Histology involves only the examination of peripheral blood cells"
    ],
    answer: "Histology is used to examine the blood cells and bone marrow architecture"
  },
  {
    question: "Massive pE",
    options: [
      "Requires anticoagulation and fibrinolysis",
      "Is treated by immediate surgery",
      "Is best managed with rest and observation",
      "Requires prompt reversal of anticoagulation therapy"
    ],
    answer: "Requires anticoagulation and fibrinolysis"
  },
  {
    question: "Causes of DIC – sepsis",
    options: [
      "Sepsis is the most common cause of DIC",
      "DIC is always due to genetic mutations",
      "DIC is not associated with sepsis",
      "DIC is caused by excessive platelet aggregation only"
    ],
    answer: "Sepsis is the most common cause of DIC"
  },
  {
    question: "Most important intervention for DIC – removal trigger",
    options: [
      "Administer blood transfusions immediately",
      "Remove the underlying trigger of DIC",
      "Increase clotting factors",
      "Inhibit all coagulation pathways"
    ],
    answer: "Remove the underlying trigger of DIC"
  },
  {
    question: "Most common pathogen in platelet transfusion",
    options: [
      "HIV",
      "Bacterial contamination",
      "Malaria",
      "Hepatitis C"
    ],
    answer: "Bacterial contamination"
  },
  {
    question: "Increased WBC, neutrophil- 90%, platelet- 700,000; CML, essential thrombocythemia",
    options: [
      "Suggests chronic myelogenous leukemia (CML)",
      "Is a sign of bone marrow failure",
      "Is typical of essential thrombocythemia",
      "Indicates an infection"
    ],
    answer: "Suggests chronic myelogenous leukemia (CML)"
  },
  {
    question: "Criteria for blood storage",
    options: [
      "Blood should be stored at room temperature for up to 48 hours",
      "Blood should be kept at 4°C for a maximum of 21 days",
      "Blood must be frozen immediately after donation",
      "Plasma should be stored at room temperature"
    ],
    answer: "Blood should be kept at 4°C for a maximum of 21 days"
  },
  {
    question: "Folic acid- polyglutamate",
    options: [
      "Folic acid is converted into polyglutamate forms for biological activity",
      "Polyglutamate forms are inactive and need to be converted back",
      "Folic acid only exists in polyglutamate form",
      "Polyglutamate is not involved in folic acid metabolism"
    ],
    answer: "Folic acid is converted into polyglutamate forms for biological activity"
  },
  {
    question: "Folic acid- methyl donor",
    options: [
      "Folic acid serves as a methyl donor in one-carbon metabolism",
      "Folic acid is not involved in methylation processes",
      "Folic acid is only involved in DNA synthesis",
      "Folic acid donates phosphates, not methyl groups"
    ],
    answer: "Folic acid serves as a methyl donor in one-carbon metabolism"
  },
  {
    question: "Cytochrome p450 mutation- HFE mutation",
    options: [
      "HFE mutation leads to impaired iron absorption",
      "Cytochrome P450 mutations affect liver function",
      "Cytochrome P450 mutations are unrelated to iron metabolism",
      "HFE mutation causes drug metabolism issues"
    ],
    answer: "HFE mutation leads to impaired iron absorption"
  },
  {
    question: "G6PD- it is self-limiting",
    options: [
      "G6PD deficiency is a lifelong condition",
      "G6PD deficiency resolves after the acute hemolytic episode",
      "G6PD deficiency can be cured with treatment",
      "G6PD deficiency is irrelevant to hemolysis"
    ],
    answer: "G6PD deficiency is a lifelong condition"
  },
  {
    question: "Thrombin activate- factor 5, c, 8, 13",
    options: [
      "Thrombin activates protein C and Factor V",
      "Thrombin enhances fibrinogen conversion into fibrin",
      "Thrombin does not activate Factor VIII",
      "Thrombin promotes the inhibition of clotting factors"
    ],
    answer: "Thrombin activates protein C and Factor V"
  },
  {
    question: "Woman with relapsed ovarian cancer, She's bleeding, current tx is cisplatin, answer is DIC",
    options: [
      "DIC is not common with cisplatin treatment",
      "DIC is a possible complication of ovarian cancer treatment",
      "Cisplatin is a blood thinner",
      "DIC can be caused by other chemotherapy drugs"
    ],
    answer: "DIC is a possible complication of ovarian cancer treatment"
  },
  {
    question: "Concerning Hemophilia A, method of inheritance from female carrier",
    options: [
      "Hemophilia A is passed on via X-linked inheritance",
      "Hemophilia A is inherited autosomally",
      "Only males are carriers of hemophilia",
      "Females cannot inherit hemophilia A"
    ],
    answer: "Hemophilia A is passed on via X-linked inheritance"
  },
  {
    question: "Phosphatidyl choline is outer",
    options: [
      "Phosphatidyl choline is predominantly on the outer leaflet of the membrane",
      "Phosphatidyl choline is found on the inner leaflet of the membrane",
      "Phosphatidyl choline has no role in the plasma membrane structure",
      "Phosphatidyl choline is a lipid that forms bilayers but is not membrane-bound"
    ],
    answer: "Phosphatidyl choline is predominantly on the outer leaflet of the membrane"
  },
  {
    question: "Well factor – All of the above",
    options: [
      "All options are correct",
      "Well factor only relates to factor VIII",
      "Well factor affects both intrinsic and extrinsic pathways",
      "Well factor is involved in platelet aggregation"
    ],
    answer: "All options are correct"
  },

  {
    question: "Which of the following is seen in splenectomy?",
    options: [
      "Howell Jolly Bodies",
      "Heinz Bodies",
      "Sideroblasts",
      "Pappenheimer Bodies"
    ],
    answer: "Howell Jolly Bodies"
  },
  {
    question: "In the thymus, T cells presented with MHC are positively selected.",
    options: [
      "True",
      "False",
      "Only in the presence of IL-2",
      "Only in the absence of IL-2"
    ],
    answer: "True"
  },
  {
    question: "A patient with polycythemia vera: NS: JAK2",
    options: [
      "JAK2 mutation is a hallmark of polycythemia vera",
      "JAK2 mutation is not found in polycythemia vera",
      "JAK2 mutation is found in chronic myelogenous leukemia",
      "JAK2 mutation causes iron deficiency"
    ],
    answer: "JAK2 mutation is a hallmark of polycythemia vera"
  },
  {
    question: "BCL-APR is associated with tyrosine kinase receptor.",
    options: [
      "True",
      "False",
      "BCL-APR is a tumor suppressor gene",
      "BCL-APR is unrelated to receptor kinases"
    ],
    answer: "True"
  },
  {
    question: "Philadelphia chromosome is 9;22.",
    options: [
      "True",
      "False",
      "It’s 8;14",
      "It’s 11;17"
    ],
    answer: "True"
  },
  {
    question: "Heterozygous mutation of sickle cell anemia has resistance to malaria.",
    options: [
      "True",
      "False",
      "Only homozygous mutations confer resistance",
      "This is true for all hemoglobinopathies"
    ],
    answer: "True"
  },
  {
    question: "C282Y is checked using TSAT.",
    options: [
      "True",
      "False",
      "C282Y is related to hemoglobinopathies",
      "TSAT checks for iron overload, not mutations"
    ],
    answer: "True"
  },
  {
    question: "Which has poor prognosis – lymphocyte depleted?",
    options: [
      "Hodgkin lymphoma",
      "Non-Hodgkin lymphoma",
      "Chronic lymphocytic leukemia",
      "Hairy cell leukemia"
    ],
    answer: "Hodgkin lymphoma"
  },
  {
    question: "Which of the following fights against encapsulated bacteria? T-independent T cell?",
    options: [
      "T-cell independent immunity is crucial for fighting encapsulated bacteria",
      "T-cells are required for combating all bacterial infections",
      "B-cells are the primary defense against encapsulated bacteria",
      "T-cells do not interact with encapsulated bacteria"
    ],
    answer: "T-cell independent immunity is crucial for fighting encapsulated bacteria"
  },
  {
    question: "Which is a very bad aggressive lymphoma?",
    options: [
      "Burkitt lymphoma",
      "Follicular lymphoma",
      "Diffuse large B-cell lymphoma",
      "Chronic lymphocytic leukemia"
    ],
    answer: "Burkitt lymphoma"
  },
  {
    question: "Trephine biopsy shows infiltrative, nodular biopsy – Aplastic anemia.",
    options: [
      "True",
      "False",
      "This is more typical of leukemia",
      "Trephine biopsy does not help in diagnosing aplastic anemia"
    ],
    answer: "True"
  },
  {
    question: "PBS – 5%.",
    options: [
      "5% refers to the percentage of blasts in the peripheral blood smear",
      "5% is a normal finding for a peripheral blood smear",
      "5% is highly abnormal and suggests leukemia",
      "5% refers to the reticulocyte count"
    ],
    answer: "5% refers to the percentage of blasts in the peripheral blood smear"
  },
  {
    question: "Radiosensitive only",
    options: [
      "Tumors that are sensitive to radiation",
      "All tumors are equally radiosensitive",
      "Radiosensitive refers to normal tissues only",
      "Radiosensitivity is unrelated to the tumor type"
    ],
    answer: "Tumors that are sensitive to radiation"
  },
  {
    question: "Examples are cisplatin, gemcitabine – radiosensitizers.",
    options: [
      "True",
      "False",
      "Only gemcitabine is a radiosensitizer",
      "Cisplatin does not enhance radiation effects"
    ],
    answer: "True"
  },
  {
    question: "Mycosis fungoides – predisposing for non-Hodgkin lymphoma.",
    options: [
      "True",
      "False",
      "Mycosis fungoides is unrelated to lymphoma risk",
      "Mycosis fungoides causes Hodgkin lymphoma"
    ],
    answer: "True"
  },
  {
    question: "Features of CML.",
    options: [
      "Chronic myelogenous leukemia is characterized by a Philadelphia chromosome",
      "CML features include lymphadenopathy and splenomegaly",
      "CML has low WBC counts",
      "CML is a type of lymphoma"
    ],
    answer: "Chronic myelogenous leukemia is characterized by a Philadelphia chromosome"
  },
  {
    question: "Organ features of multiple myeloma – hypercalcemia.",
    options: [
      "True",
      "False",
      "Hypercalcemia is not related to multiple myeloma",
      "Multiple myeloma is associated with hyperkalemia"
    ],
    answer: "True"
  },
  {
    question: "Which of this is not a type of leukemia?",
    options: [
      "Promegaloblastic leukemia",
      "Chronic myelogenous leukemia",
      "Acute lymphoblastic leukemia",
      "Acute myelogenous leukemia"
    ],
    answer: "Promegaloblastic leukemia"
  },
  {
    question: "Which is a predisposing factor for H. pylori?",
    options: [
      "Chronic gastritis",
      "Acid reflux",
      "Crohn’s disease",
      "Ulcerative colitis"
    ],
    answer: "Chronic gastritis"
  },
  {
    question: "Which of the following is associated with pulmonary thromboembolism?",
    options: [
      "Constant hormonal therapy",
      "Chronic hypertension",
      "Hyperlipidemia",
      "Autoimmune diseases"
    ],
    answer: "Constant hormonal therapy"
  },
  {
    question: "Which of these is not true about immunotherapy – targeted therapy?",
    options: [
      "Immunotherapy targets specific immune cells",
      "Immunotherapy enhances the body's natural defense",
      "Immunotherapy is the same as chemotherapy",
      "Targeted therapy focuses on specific molecules involved in cancer growth"
    ],
    answer: "Immunotherapy is the same as chemotherapy"
  },
  {
    question: "Which of these is not true about oncolytic therapy – it makes use of staph and strep?",
    options: [
      "Oncolytic therapy uses viruses to target cancer cells",
      "Oncolytic therapy can utilize bacteria but primarily uses viruses",
      "Oncolytic therapy is unrelated to bacterial infections",
      "Oncolytic therapy enhances immune response against tumors"
    ],
    answer: "Oncolytic therapy uses viruses to target cancer cells"
  },
  {
    question: "Vertical interactions.",
    options: [
      "Interactions between two hierarchical levels in biology",
      "Interactions within the same biological level",
      "Interactions in non-biological systems",
      "Vertical interactions do not occur in biological systems"
    ],
    answer: "Interactions between two hierarchical levels in biology"
  },
  {
    question: "Spherical elliptocytosis.",
    options: [
      "A type of hereditary spherocytosis",
      "A condition where red blood cells are shaped like spheres and ellipses",
      "Occurs due to a defect in hemoglobin production",
      "Results in increased red blood cell life span"
    ],
    answer: "A type of hereditary spherocytosis"
  },
  {
    question: "About MGUS – free light chain ratios.",
    options: [
      "MGUS involves an abnormal increase in free light chains",
      "MGUS is associated with a decrease in free light chains",
      "Free light chain ratios are used to confirm multiple myeloma",
      "MGUS has no effect on free light chains"
    ],
    answer: "MGUS involves an abnormal increase in free light chains"
  },
  {
    question: "Immune thrombocytopenic purpura.",
    options: [
      "Is an autoimmune disorder",
      "Causes an increase in platelet count",
      "Is treated with blood transfusions",
      "Only occurs in children"
    ],
    answer: "Is an autoimmune disorder"
  },
  {
    question: "Bone marrow and biopsy.",
    options: [
      "Bone marrow biopsy helps diagnose hematologic conditions",
      "Bone marrow biopsy is irrelevant in diagnosing anemia",
      "Bone marrow biopsy is unnecessary in cancer patients",
      "Bone marrow biopsy only assesses bone density"
    ],
    answer: "Bone marrow biopsy helps diagnose hematologic conditions"
  },
  {
    question: "Concerning folic acid – it’s a methyl donor.",
    options: [
      "True",
      "False",
      "Folic acid acts as a coenzyme",
      "Folic acid has no role in methylation"
    ],
    answer: "True"
  },
  {
    question: "Folic acid is stored as polyglutamate.",
    options: [
      "True",
      "False",
      "Folic acid is stored in the liver as vitamin B12",
      "Folic acid is stored in a methylated form"
    ],
    answer: "True"
  },
  {
    question: "Man with 99fl as MCV, 38 as MCH has – macrocytic anemia.",
    options: [
      "True",
      "False",
      "This suggests microcytic anemia",
      "This suggests normocytic anemia"
    ],
    answer: "True"
  },
  {
    question: "Man that has undergone terminal colostomy – vitamin B12 absorption.",
    options: [
      "B12 absorption may be compromised after colostomy",
      "Colostomy has no effect on vitamin B12 absorption",
      "B12 is absorbed in the large intestine",
      "Vitamin B12 deficiency is rare after colostomy"
    ],
    answer: "B12 absorption may be compromised after colostomy"
  },
  {
    question: "Kidney donor, what blood group will you give?",
    options: [
      "O+",
      "A+",
      "B+",
      "AB+"
    ],
    answer: "O+"
  },
  {
    question: "20-30 minutes into transfusion, and there's a spike in temperature, what do you do?",
    options: [
      "Stop transfusion and send bag for analysis",
      "Give paracetamol and continue transfusion",
      "Stop transfusion and give hydrocortisone",
      "Ignore the temperature spike and continue"
    ],
    answer: "Stop transfusion and send bag for analysis"
  },
  {
    question: "Acute GVHD because it occurs in less than 100 days.",
    options: [
      "True",
      "False",
      "GVHD can occur up to 200 days post-transplant",
      "GVHD is not related to transplant timing"
    ],
    answer: "True"
  },
  {
    question: "Susceptible infection in blood transfusion – Staph aureus.",
    options: [
      "True",
      "False",
      "Staph aureus is not typically associated with blood transfusions",
      "Infection risk is low in blood transfusions"
    ],
    answer: "True"
  },
  {
    question: "TRALI – multiparous women.",
    options: [
      "True",
      "False",
      "TRALI is more common in men",
      "Multiparous women are not at higher risk for TRALI"
    ],
    answer: "True"
  },
  {
    question: "Which of these is not important in screening for immediate blood transfusion?",
    options: [
      "HIV",
      "Hepatitis B",
      "Hepatitis C",
      "Herpes Simplex Virus"
    ],
    answer: "Herpes Simplex Virus"
  },
  {
    question: "Is phosphatidylcholine an outer membrane phospholipid?",
    options: [
      "True",
      "False",
      "It is a mitochondrial phospholipid",
      "Phosphatidylcholine is found in the inner membrane"
    ],
    answer: "True"
  },
  {
    question: "Aplastic crisis – parvovirus infection.",
    options: [
      "True",
      "False",
      "Aplastic crisis is caused by a viral infection",
      "Aplastic crisis is related to iron deficiency"
    ],
    answer: "True"
  },
  {
    question: "Specific feature of iron deficiency anemia – koilonychia.",
    options: [
      "True",
      "False",
      "Koilonychia is unrelated to anemia",
      "Koilonychia is a feature of thalassemia"
    ],
    answer: "True"
  },
  {
    question: "About conditioning, which is false?",
    options: [
      "Conditioning is used to prepare the body for stem cell transplant",
      "Conditioning involves chemotherapy and/or radiation",
      "Conditioning is only for cancer patients",
      "Conditioning has no effect on immune system function"
    ],
    answer: "Conditioning has no effect on immune system function"
  },
  {
    question: "Difference between thalassemia and IDA – HbA2.",
    options: [
      "HbA2 levels are elevated in thalassemia",
      "HbA2 levels are decreased in thalassemia",
      "HbA2 levels are normal in IDA",
      "HbA2 is only relevant for sickle cell anemia"
    ],
    answer: "HbA2 levels are elevated in thalassemia"
  },
  {
    question: "Which of the following bacteria can't progress to cancer?",
    options: [
      "Hepatitis A",
      "Hepatitis B",
      "Helicobacter pylori",
      "Human papillomavirus"
    ],
    answer: "Hepatitis A"
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