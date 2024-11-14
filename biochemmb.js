// Question bank
const questionBank = [
   { question: "Which type of bond stabilizes the secondary structure of proteins?", options: ["Hydrogen bond", "Covalent bond", "Ionic bond", "Van der Waals forces"], answer: "Hydrogen bond" },
                { "question": "Which monosaccharide is a component of lactose?", "options": ["Glucose", "Fructose", "Galactose", "Ribose"], "answer": "Galactose" },
        { "question": "Which amino acid contains sulfur?", "options": ["Methionine", "Leucine", "Valine", "Serine"], "answer": "Methionine" },
        { "question": "What is the primary function of albumin in blood?", "options": ["Enzyme catalysis", "Oxygen transport", "Maintaining osmotic pressure", "Hormone transport"], "answer": "Maintaining osmotic pressure" },
        { "question": "Which lipid class is the primary component of cell membranes?", "options": ["Phospholipids", "Triglycerides", "Steroids", "Waxes"], "answer": "Phospholipids" },
        { "question": "Vitamin C is also known as?", "options": ["Thiamine", "Ascorbic acid", "Folate", "Niacin"], "answer": "Ascorbic acid" },
        { "question": "Which mineral is essential for hemoglobin synthesis?", "options": ["Iron", "Zinc", "Calcium", "Potassium"], "answer": "Iron" },
        { "question": "What is the active site of an enzyme?", "options": ["The location where substrates bind", "The site where inhibitors attach", "The enzyme’s storage area", "The site where coenzymes bind"], "answer": "The location where substrates bind" },
        { "question": "The genetic code is universal except in which organisms?", "options": ["Eukaryotes", "Prokaryotes", "Mitochondria", "Viruses"], "answer": "Mitochondria" },
        { "question": "The powerhouse of the cell is known as?", "options": ["Nucleus", "Endoplasmic reticulum", "Golgi apparatus", "Mitochondria"], "answer": "Mitochondria" },
        { "question": "Which base is unique to RNA?", "options": ["Thymine", "Adenine", "Uracil", "Cytosine"], "answer": "Uracil" },
        { "question": "During which phase of mitosis do chromosomes align in the center of the cell?", "options": ["Prophase", "Metaphase", "Anaphase", "Telophase"], "answer": "Metaphase" },
        { "question": "What does the Michaelis constant (Km) represent?", "options": ["Maximum velocity", "Enzyme-substrate affinity", "Reaction rate", "Inhibitor concentration"], "answer": "Enzyme-substrate affinity" },
        { "question": "A buffer solution can resist changes in pH because it contains?", "options": ["Strong acids", "Weak acids and their salts", "Strong bases", "Salts only"], "answer": "Weak acids and their salts" },
        { "question": "The primary structure of a protein is determined by?", "options": ["Hydrogen bonds", "Amino acid sequence", "Disulfide bonds", "3D folding pattern"], "answer": "Amino acid sequence" },
        { "question": "Which of these is a reducing sugar?", "options": ["Glucose", "Sucrose", "Starch", "Cellulose"], "answer": "Glucose" },
        { "question": "What is the basic unit of nucleic acids?", "options": ["Nucleotide", "Amino acid", "Monosaccharide", "Fatty acid"], "answer": "Nucleotide" },
        { "question": "Which vitamin is crucial for calcium absorption?", "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], "answer": "Vitamin D" },
        { "question": "The function of tRNA is to?", "options": ["Carry DNA instructions", "Deliver amino acids", "Generate energy", "Replicate DNA"], "answer": "Deliver amino acids" },
        { "question": "The TCA cycle occurs in the?", "options": ["Nucleus", "Mitochondria", "Cytoplasm", "Golgi apparatus"], "answer": "Mitochondria" },
        { "question": "Which bond forms the backbone of DNA?", "options": ["Hydrogen bond", "Phosphodiester bond", "Peptide bond", "Ionic bond"], "answer": "Phosphodiester bond" },
        { "question": "An allosteric enzyme has?", "options": ["One active site", "Multiple active sites", "Active and regulatory sites", "Only regulatory sites"], "answer": "Active and regulatory sites" },
        { "question": "What is the pH of neutral solutions?", "options": ["7", "5", "3", "9"], "answer": "7" },
        { "question": "Which organ stores glycogen?", "options": ["Liver", "Heart", "Pancreas", "Kidney"], "answer": "Liver" },
        { "question": "The codon AUG is known as the?", "options": ["Stop codon", "Start codon", "Mutation site", "Splicing signal"], "answer": "Start codon" },
        { "question": "Phospholipids are characterized by their?", "options": ["Hydrophobic nature", "Amphipathic nature", "Hydrophilic nature", "Nonpolar nature"], "answer": "Amphipathic nature" },
        { "question": "Which enzyme catalyzes the conversion of glucose to glucose-6-phosphate?", "options": ["Hexokinase", "Phosphofructokinase", "Glucose-6-phosphatase", "Lactase"], "answer": "Hexokinase" },
        { "question": "ATP synthesis in mitochondria occurs via?", "options": ["Substrate-level phosphorylation", "Photophosphorylation", "Oxidative phosphorylation", "Direct coupling"], "answer": "Oxidative phosphorylation" },
        { "question": "What is the role of ribosomes?", "options": ["Lipid synthesis", "Protein synthesis", "DNA replication", "Energy production"], "answer": "Protein synthesis" },
        { "question": "NAD+ functions as a?", "options": ["Oxidizing agent", "Reducing agent", "Enzyme", "Substrate"], "answer": "Oxidizing agent" },
        { "question": "Which macromolecule can form micelles in water?", "options": ["Carbohydrates", "Proteins", "Lipids", "Nucleic acids"], "answer": "Lipids" },
        { "question": "Inhibitors that bind to the active site are known as?", "options": ["Competitive inhibitors", "Noncompetitive inhibitors", "Allosteric inhibitors", "Uncompetitive inhibitors"], "answer": "Competitive inhibitors" },
        { "question": "A molecule that binds to an enzyme away from the active site is called?", "options": ["Substrate", "Product", "Allosteric modulator", "Coenzyme"], "answer": "Allosteric modulator" },
        { "question": "Which mineral is vital for ATP synthesis?", "options": ["Magnesium", "Iron", "Calcium", "Zinc"], "answer": "Magnesium" },
        { "question": "What is the term for DNA to RNA transcription?", "options": ["Translation", "Replication", "Mutation", "Transcription"], "answer": "Transcription" },
        { "question": "Which process describes RNA to protein?", "options": ["Translation", "Transcription", "Replication", "Elongation"], "answer": "Translation" },
        { "question": "During mitosis, sister chromatids separate during?", "options": ["Anaphase", "Prophase", "Metaphase", "Telophase"], "answer": "Anaphase" },
        { "question": "Enzymes with different structures but similar functions are called?", "options": ["Isoenzymes", "Apoenzymes", "Holoenzymes", "Proenzymes"], "answer": "Isoenzymes" },
        { "question": "The effect of pH on enzymes is often due to?", "options": ["Changes in substrate concentration", "Alteration in active site structure", "Enzyme denaturation", "Water availability"], "answer": "Alteration in active site structure" },
        { "question": "Hydrogen bonds are important in stabilizing?", "options": ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"], "answer": "Secondary structure" },
        { "question": "Which of the following is an essential amino acid?", "options": ["Glutamate", "Alanine", "Leucine", "Glycine"], "answer": "Leucine" },
        { "question": "What is the main nitrogenous waste in humans?", "options": ["Urea", "Ammonia", "Uric acid", "Creatinine"], "answer": "Urea" },
        { "question": "The fluid mosaic model describes the structure of?", "options": ["DNA", "Cell membrane", "Nucleus", "Ribosomes"], "answer": "Cell membrane" },
        { "question": "Which vitamin deficiency causes scurvy?", "options": ["Vitamin B12", "Vitamin A", "Vitamin C", "Vitamin D"], "answer": "Vitamin C" },
        { "question": "What is the precursor molecule for steroid hormones?", "options": ["Phospholipid", "Cholesterol", "Triglyceride", "Lecithin"], "answer": "Cholesterol" },
        { "question": "The pH range for most enzyme activity is?", "options": ["3-5", "5-7", "6-8", "8-10"], "answer": "6-8" },
        { "question": "In glycolysis, glucose is converted to?", "options": ["Acetyl-CoA", "Lactate", "Pyruvate", "Citric acid"], "answer": "Pyruvate" },
        { "question": "The backbone of a polypeptide chain consists of?", "options": ["Amino groups only", "Carbonyl groups only", "Amino and carboxyl groups", "Carbohydrates"], "answer": "Amino and carboxyl groups" },
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
          
                { question: "Which enzyme is responsible for DNA synthesis during replication?", options: ["DNA polymerase", "RNA polymerase", "Ligase", "Helicase"], answer: "DNA polymerase" },
                { "question": "What is the primary function of antibodies in the immune response?", "options": ["Neutralizing toxins", "Producing hormones", "Transmitting nerve signals", "Storing energy"], "answer": "Neutralizing toxins" },
        { "question": "Which nutrient is essential for the synthesis of nucleic acids?", "options": ["Carbohydrates", "Proteins", "Lipids", "Vitamins"], "answer": "Proteins" },
        { "question": "What structure do bacteria use to transfer genetic material during conjugation?", "options": ["Pilus", "Flagellum", "Cilia", "Capsule"], "answer": "Pilus" },
        { "question": "What is the main purpose of recombinant DNA technology?", "options": ["To create new proteins", "To synthesize vitamins", "To isolate microbes", "To enhance food preservation"], "answer": "To create new proteins" },
        { "question": "Which vitamin deficiency can lead to impaired immune function?", "options": ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], "answer": "Vitamin A" },
        { "question": "Which type of RNA carries amino acids to the ribosome during protein synthesis?", "options": ["mRNA", "tRNA", "rRNA", "siRNA"], "answer": "tRNA" },
        { "question": "What is the role of the enzyme reverse transcriptase?", "options": ["DNA replication", "RNA synthesis", "Conversion of RNA to DNA", "Protein synthesis"], "answer": "Conversion of RNA to DNA" },
        { "question": "Which microbial metabolic pathway is responsible for the production of ethanol from glucose?", "options": ["Lactic acid fermentation", "Alcoholic fermentation", "Aerobic respiration", "Anaerobic respiration"], "answer": "Alcoholic fermentation" },
        { "question": "What is the primary function of the complement system in immunity?", "options": ["Antigen presentation", "Pathogen lysis", "Phagocytosis enhancement", "Antibody production"], "answer": "Pathogen lysis" },
        { "question": "In molecular cloning, what is the role of a plasmid?", "options": ["Energy storage", "Gene expression", "Gene transfer", "Protein synthesis"], "answer": "Gene transfer" },
        { "question": "Which method is commonly used to amplify DNA segments?", "options": ["Gel electrophoresis", "PCR", "DNA sequencing", "Southern blotting"], "answer": "PCR" },
        { "question": "What is the primary source of energy for bacteria in the human gut?", "options": ["Glucose", "Fatty acids", "Amino acids", "Short-chain fatty acids"], "answer": "Short-chain fatty acids" },
        { "question": "Which component of the immune system is responsible for cell-mediated immunity?", "options": ["B cells", "T cells", "Antibodies", "Complement proteins"], "answer": "T cells" },
        { "question": "What is the main function of cytokines in the immune response?", "options": ["Cell signaling", "Energy production", "Pathogen destruction", "Antibody production"], "answer": "Cell signaling" },
        { "question": "Which of the following is a characteristic of a pathogen?", "options": ["It is always beneficial", "It can cause disease", "It is non-living", "It does not reproduce"], "answer": "It can cause disease" },
        { "question": "What is the role of ribosomes in a cell?", "options": ["Energy production", "Protein synthesis", "DNA replication", "RNA degradation"], "answer": "Protein synthesis" },
        { "question": "Which nucleic acid is responsible for carrying the genetic information of most viruses?", "options": ["DNA", "RNA", "Protein", "Carbohydrate"], "answer": "RNA" },
        { "question": "Which nutrient serves as the primary energy source for microbial growth?", "options": ["Lipids", "Proteins", "Carbohydrates", "Nucleic acids"], "answer": "Carbohydrates" },
        { "question": "What is the main advantage of using recombinant DNA technology in medicine?", "options": ["Increased disease transmission", "Rapid protein production", "Reduced patient compliance", "Enhanced viral replication"], "answer": "Rapid protein production" },
        { "question": "Which vitamin is crucial for collagen synthesis and immune function?", "options": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B6"], "answer": "Vitamin C" },
        { "question": "What type of mutation involves a change in a single nucleotide?", "options": ["Insertion", "Deletion", "Substitution", "Frameshift"], "answer": "Substitution" },
        { "question": "Which process involves the uptake of naked DNA by a bacterial cell?", "options": ["Transduction", "Conjugation", "Transformation", "Replication"], "answer": "Transformation" },
        { "question": "What is the main function of lysozyme in the immune system?", "options": ["To produce antibodies", "To lyse bacterial cell walls", "To activate complement", "To neutralize toxins"], "answer": "To lyse bacterial cell walls" },
        { "question": "Which metabolic process occurs in the mitochondria and produces ATP?", "options": ["Glycolysis", "Fermentation", "Krebs cycle", "Lactic acid fermentation"], "answer": "Krebs cycle" },
        { "question": "What is the primary function of aquaporins in microbial cells?", "options": ["Transporting ions", "Facilitating water movement", "Transporting glucose", "Generating ATP"], "answer": "Facilitating water movement" },
        { "question": "What type of biomolecule are enzymes classified as?", "options": ["Lipids", "Nucleic acids", "Proteins", "Carbohydrates"], "answer": "Proteins" },
        { "question": "Which component of the immune system helps in the direct killing of infected cells?", "options": ["B cells", "Cytotoxic T cells", "Helper T cells", "Antibodies"], "answer": "Cytotoxic T cells" },
        { "question": "Which genetic technique is used to analyze the expression of multiple genes simultaneously?", "options": ["Northern blotting", "Microarray", "PCR", "Western blotting"], "answer": "Microarray" },
        { "question": "What is the role of the enzyme DNA ligase?", "options": ["To separate DNA strands", "To synthesize RNA", "To join DNA fragments", "To degrade RNA"], "answer": "To join DNA fragments" },
        { "question": "What is the primary energy source for the synthesis of glucose during gluconeogenesis?", "options": ["Fatty acids", "Amino acids", "Lactate", "Pyruvate"], "answer": "Lactate" },
        { "question": "Which structure in eukaryotic cells is responsible for packaging and modifying proteins?", "options": ["Endoplasmic reticulum", "Golgi apparatus", "Lysosome", "Mitochondria"], "answer": "Golgi apparatus" },
        { "question": "Which of the following is a characteristic of Gram-positive bacteria?", "options": ["Thin peptidoglycan layer", "Outer membrane present", "Thick peptidoglycan layer", "Endotoxins present"], "answer": "Thick peptidoglycan layer" },
        { "question": "Which vitamin is essential for the synthesis of coenzyme A?", "options": ["Vitamin B1", "Vitamin B2", "Vitamin B3", "Vitamin B5"], "answer": "Vitamin B5" },
        { "question": "In which type of organisms does the process of photosynthesis occur?", "options": ["Animals", "Plants", "Bacteria", "All of the above"], "answer": "All of the above" },
        { "question": "What is the primary function of the immune system's memory cells?", "options": ["To produce antibodies", "To remember past infections", "To phagocytize pathogens", "To activate complement"], "answer": "To remember past infections" },
        { "question": "Which microbial structure is essential for biofilm formation?", "options": ["Capsule", "Pilus", "Flagellum", "Endospore"], "answer": "Capsule" },
        { "question": "Which type of genetic material can be found in viruses?", "options": ["DNA only", "RNA only", "Both DNA and RNA", "Neither"], "answer": "Both DNA and RNA" },
        { "question": "Which metabolic process is characterized by the conversion of glucose into lactate?", "options": ["Glycolysis", "Fermentation", "Citric acid cycle", "Electron transport chain"], "answer": "Fermentation" },
        { "question": "What is the main role of the T helper cells in the immune response?", "options": ["To produce antibodies", "To kill infected cells", "To activate B and T cells", "To phagocytize pathogens"], "answer": "To activate B and T cells" },
        { "question": "What type of gene is involved in promoting cell division and can lead to cancer when mutated?", "options": ["Tumor suppressor gene", "Oncogene", "Proto-oncogene", "Apoptosis gene"], "answer": "Oncogene" },
        { "question": "Which of the following techniques is used to separate DNA fragments by size?", "options": ["PCR", "Gel electrophoresis", "Western blotting", "Southern blotting"], "answer": "Gel electrophoresis" },
        { "question": "Which type of microorganism is known for nitrogen fixation?", "options": ["Viruses", "Fungi", "Bacteria", "Protozoa"], "answer": "Bacteria" },
        { "question": "What is the function of the immune system's phagocytes?", "options": ["To produce antibodies", "To engulf and destroy pathogens", "To activate T cells", "To produce cytokines"], "answer": "To engulf and destroy pathogens" },
        { "question": "Which enzyme is responsible for the degradation of proteins in the stomach?", "options": ["Amylase", "Pepsin", "Lipase", "Trypsin"], "answer": "Pepsin" },
        { "question": "What is the primary role of the blood-brain barrier?", "options": ["To allow nutrient exchange", "To protect the brain from pathogens", "To regulate neurotransmitter levels", "To store energy"], "answer": "To protect the brain from pathogens" },
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