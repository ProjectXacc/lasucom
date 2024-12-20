// Question bank
const questionBank = [
  { question: "What is the primary role of erythropoietin?", options: ["Regulate blood pressure", "Stimulate red blood cell production", "Enhance platelet aggregation", "Increase white blood cell count"], answer: "Stimulate red blood cell production" },
{ question: "What is the primary role of erythropoietin?", options: ["Regulate blood pressure", "Stimulate red blood cell production", "Enhance platelet aggregation", "Increase white blood cell count"], answer: "Stimulate red blood cell production" },
                { question: "What is the term for the movement of substances from an area of higher concentration to an area of lower concentration?", options: ["Active transport", "Facilitated diffusion", "Simple diffusion", "Osmosis"], answer: "Simple diffusion" },
                              { question: "What is the primary role of erythropoietin?", options: ["Regulate blood pressure", "Stimulate red blood cell production", "Enhance platelet aggregation", "Increase white blood cell count"], answer: "Stimulate red blood cell production" },
    { question: "Which part of the brain regulates autonomic functions such as heart rate and blood pressure?", options: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla oblongata"], answer: "Medulla oblongata" },
    { question: "What is the normal range of arterial blood pH in humans?", options: ["6.8-7.2", "7.35-7.45", "7.5-7.8", "8.0-8.5"], answer: "7.35-7.45" },
    { question: "Which type of leukocyte is primarily involved in the immune response?", options: ["Erythrocytes", "Neutrophils", "Monocytes", "Basophils"], answer: "Neutrophils" },
    { question: "What is the primary function of hemoglobin?", options: ["Transport oxygen", "Clot blood", "Regulate temperature", "Fight infections"], answer: "Transport oxygen" },
    { question: "What is the role of the spleen in the circulatory system?", options: ["Filter blood and recycle iron", "Produce insulin", "Store bile", "Regulate blood pressure"], answer: "Filter blood and recycle iron" },
    { question: "Which vitamin is essential for the synthesis of clotting factors?", options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin K"], answer: "Vitamin K" },
    { question: "What is the main site of gas exchange in the lungs?", options: ["Bronchi", "Alveoli", "Trachea", "Larynx"], answer: "Alveoli" },
    { question: "What condition is characterized by an increased number of red blood cells?", options: ["Anemia", "Leukemia", "Polycythemia", "Thrombocytopenia"], answer: "Polycythemia" },
    { question: "Which blood type is known as the universal recipient?", options: ["A", "B", "AB", "O"], answer: "AB" },
    { question: "What component of blood is primarily responsible for maintaining osmotic pressure?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma proteins"], answer: "Plasma proteins" },
    { question: "What is the primary function of lymphocytes?", options: ["Transport oxygen", "Produce antibodies", "Clot blood", "Phagocytize pathogens"], answer: "Produce antibodies" },
    { question: "Which organ produces the hormone erythropoietin?", options: ["Liver", "Kidney", "Spleen", "Bone marrow"], answer: "Kidney" },
    { question: "What is the main role of platelets in the blood?", options: ["Transport oxygen", "Initiate clotting process", "Regulate body temperature", "Fight infections"], answer: "Initiate clotting process" },
    { question: "What is the average lifespan of a red blood cell?", options: ["10 days", "30 days", "120 days", "1 year"], answer: "120 days" },
    { question: "Which condition is caused by a deficiency in vitamin B12?", options: ["Iron-deficiency anemia", "Sickle cell anemia", "Pernicious anemia", "Hemolytic anemia"], answer: "Pernicious anemia" },
    { question: "What is the primary electrolyte in extracellular fluid?", options: ["Potassium", "Sodium", "Calcium", "Chloride"], answer: "Sodium" },
    { question: "Which structure prevents backflow of blood in the heart?", options: ["Valves", "Septum", "Aorta", "Coronary arteries"], answer: "Valves" },
    { question: "What is the main function of the cardiovascular system?", options: ["Transport nutrients and oxygen", "Regulate body temperature", "Maintain fluid balance", "All of the above"], answer: "Transport nutrients and oxygen" },
    { question: "What is the primary cause of anemia?", options: ["Inadequate red blood cell production", "Excessive white blood cell production", "Increased platelet destruction", "High blood pressure"], answer: "Inadequate red blood cell production" },
    { question: "Which part of the blood is primarily responsible for immune defense?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "White blood cells" },
    { question: "What is the main action of anticoagulants?", options: ["Increase blood pressure", "Prevent clot formation", "Promote red blood cell production", "Enhance platelet function"], answer: "Prevent clot formation" },
    { question: "What is the normal range for white blood cell count?", options: ["4,000-11,000 cells/µL", "1,000-4,000 cells/µL", "11,000-20,000 cells/µL", "20,000-30,000 cells/µL"], answer: "4,000-11,000 cells/µL" },
    { question: "Which condition is characterized by a low platelet count?", options: ["Thrombocytopenia", "Polycythemia", "Leukemia", "Anemia"], answer: "Thrombocytopenia" },
    { question: "What is the primary function of the pulmonary circulation?", options: ["Transport oxygen-rich blood to the body", "Transport oxygen-poor blood to the lungs", "Regulate blood pressure", "Filter waste products"], answer: "Transport oxygen-poor blood to the lungs" },
    { question: "What is the function of the aorta?", options: ["Carry oxygen-poor blood to the lungs", "Carry oxygen-rich blood from the heart to the body", "Regulate blood flow", "Filter blood"], answer: "Carry oxygen-rich blood from the heart to the body" },
    { question: "Which cells are involved in the inflammatory response?", options: ["Erythrocytes", "Neutrophils", "Thrombocytes", "Lymphocytes"], answer: "Neutrophils" },
    { question: "What is the term for the formation of blood cells?", options: ["Hematopoiesis", "Hemolysis", "Erythropoiesis", "Thrombopoiesis"], answer: "Hematopoiesis" },
    { question: "Which of the following is a function of the liver in blood physiology?", options: ["Produce erythropoietin", "Filter toxins", "Store iron", "All of the above"], answer: "All of the above" },
    { question: "What is the role of the kidneys in blood pressure regulation?", options: ["Produce renin", "Filter blood", "Secrete hormones", "All of the above"], answer: "All of the above" },
    { question: "What type of leukocyte is primarily responsible for producing antibodies?", options: ["B lymphocytes", "T lymphocytes", "Monocytes", "Neutrophils"], answer: "B lymphocytes" },
    { question: "What is the role of fibrin in blood?", options: ["Transport oxygen", "Clot blood", "Regulate pH", "Fight infections"], answer: "Clot blood" },
    { question: "What is the primary gas transported by hemoglobin?", options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], answer: "Oxygen" },
    { question: "Which component of blood is primarily involved in the transport of nutrients and waste products?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "Plasma" },
    { question: "Which blood component is primarily responsible for maintaining blood viscosity?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma proteins"], answer: "Red blood cells" },
    { question: "What is the term for the pressure exerted by blood against the walls of blood vessels?", options: ["Osmotic pressure", "Hydrostatic pressure", "Oncotic pressure", "Systolic pressure"], answer: "Hydrostatic pressure" },
    { question: "What is the primary function of the circulatory system?", options: ["Distribute hormones", "Transport oxygen and nutrients", "Remove waste products", "All of the above"], answer: "All of the above" },
    { question: "Which type of blood vessel is responsible for carrying blood back to the heart?", options: ["Arteries", "Veins", "Capillaries", "Arterioles"], answer: "Veins" },
    { question: "What is the average blood volume in an adult human?", options: ["1-2 liters", "3-4 liters", "5-6 liters", "7-8 liters"], answer: "5-6 liters" },
    { question: "What type of feedback mechanism is most common in the human body?", options: ["Positive feedback", "Negative feedback", "Neutral feedback", "Adaptive feedback"], answer: "Negative feedback" },
    { question: "What is the primary mechanism by which water moves across cell membranes?", options: ["Active transport", "Facilitated diffusion", "Simple diffusion", "Osmosis"], answer: "Osmosis" },
    { question: "Which cellular structure is primarily responsible for regulating the movement of substances in and out of the cell?", options: ["Nucleus", "Mitochondria", "Plasma membrane", "Endoplasmic reticulum"], answer: "Plasma membrane" },
    { question: "What process involves the active transport of ions against their concentration gradient?", options: ["Facilitated diffusion", "Osmosis", "Endocytosis", "Active transport"], answer: "Active transport" },
    { question: "What is the term for the movement of substances from an area of higher concentration to an area of lower concentration?", options: ["Active transport", "Facilitated diffusion", "Simple diffusion", "Osmosis"], answer: "Simple diffusion" },
    { question: "What is the primary purpose of negative feedback in homeostasis?", options: ["Amplify changes", "Stabilize physiological functions", "Create imbalances", "None of the above"], answer: "Stabilize physiological functions" },
    { question: "Which process is responsible for the reabsorption of glucose in the kidneys?", options: ["Active transport", "Facilitated diffusion", "Osmosis", "Endocytosis"], answer: "Active transport" },
    { question: "What type of membrane transport requires energy (ATP)?", options: ["Passive transport", "Facilitated diffusion", "Active transport", "Osmosis"], answer: "Active transport" },
    { question: "What is the primary function of the endoplasmic reticulum?", options: ["Protein synthesis and lipid metabolism", "Energy production", "Waste elimination", "Cell division"], answer: "Protein synthesis and lipid metabolism" },
{ question: "What is the primary function of the pulmonary circulation?", options: ["Transport oxygen-rich blood to the body", "Transport oxygen-poor blood to the lungs", "Regulate blood pressure", "Filter waste products"], answer: "Transport oxygen-poor blood to the lungs" },
                { question: "Which structure prevents backflow of blood in the heart?", options: ["Valves", "Septum", "Aorta", "Coronary arteries"], answer: "Valves" },
                 { question: "What is the normal resting heart rate for an adult?", options: ["40–60 bpm", "60–100 bpm", "100–120 bpm", "120–150 bpm"], answer: "60–100 bpm" },
  { question: "Which heart valve is responsible for preventing backflow into the left ventricle?", options: ["Aortic valve", "Mitral valve", "Tricuspid valve", "Pulmonary valve"], answer: "Aortic valve" },
  { question: "The pacemaker of the heart is located in which node?", options: ["SA node", "AV node", "Bundle of His", "Purkinje fibers"], answer: "SA node" },
  { question: "Which law explains the relationship between the pressure and volume of the heart?", options: ["Frank-Starling Law", "Boyle's Law", "Laplace's Law", "Bernoulli's Principle"], answer: "Frank-Starling Law" },
  { question: "What is the primary function of hemoglobin in the blood?", options: ["Transport oxygen", "Regulate pH", "Fight infections", "Transport hormones"], answer: "Transport oxygen" },
  { question: "What percentage of blood is typically composed of plasma?", options: ["45%", "55%", "65%", "75%"], answer: "55%" },
  { question: "Which phase of the cardiac cycle is associated with ventricular contraction?", options: ["Systole", "Diastole", "Isovolumetric relaxation", "Ejection phase"], answer: "Systole" },
  { question: "Which of the following is responsible for increasing heart rate?", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Enteric nervous system"], answer: "Sympathetic nervous system" },
  { question: "What is the average cardiac output for a healthy adult at rest?", options: ["2 L/min", "5 L/min", "10 L/min", "15 L/min"], answer: "5 L/min" },
  { question: "Which blood vessels are primarily responsible for regulating blood pressure?", options: ["Arterioles", "Veins", "Capillaries", "Venules"], answer: "Arterioles" },
  { question: "Which component of the ECG represents atrial depolarization?", options: ["P wave", "QRS complex", "T wave", "U wave"], answer: "P wave" },
  { question: "The 'Lub' sound of the heart is caused by the closure of which valves?", options: ["AV valves", "Semilunar valves", "Aortic and pulmonary valves", "Mitral and tricuspid valves"], answer: "AV valves" },
  { question: "Which factor does not directly influence blood pressure?", options: ["Heart rate", "Blood viscosity", "Arterial radius", "Lung capacity"], answer: "Lung capacity" },
  { question: "Where is the vasomotor center located?", options: ["Medulla oblongata", "Cerebellum", "Pons", "Spinal cord"], answer: "Medulla oblongata" },
  { question: "What is the primary force that drives blood flow in the systemic circulation?", options: ["Blood pressure", "Osmotic pressure", "Lung expansion", "Blood viscosity"], answer: "Blood pressure" },
  { question: "Which hormone causes the kidneys to retain water and increase blood pressure?", options: ["Aldosterone", "Cortisol", "Antidiuretic hormone", "Epinephrine"], answer: "Antidiuretic hormone" },
  { question: "What is the normal range for systolic blood pressure in an adult?", options: ["80-100 mmHg", "100-120 mmHg", "120-140 mmHg", "140-160 mmHg"], answer: "100-120 mmHg" },
  { question: "Which structure in the heart prevents the backflow of blood from the right ventricle into the right atrium?", options: ["Tricuspid valve", "Bicuspid valve", "Aortic valve", "Pulmonary valve"], answer: "Tricuspid valve" },
  { question: "Which protein in blood is essential for clot formation?", options: ["Fibrin", "Hemoglobin", "Albumin", "Immunoglobulin"], answer: "Fibrin" },
  { question: "In which type of blood vessel is the velocity of blood flow the slowest?", options: ["Capillaries", "Arteries", "Veins", "Arterioles"], answer: "Capillaries" },
  { question: "Which part of the brain controls the respiratory rhythm?", options: ["Medulla oblongata", "Cerebellum", "Thalamus", "Frontal lobe"], answer: "Medulla oblongata" },
  { question: "What is the primary muscle involved in breathing?", options: ["Diaphragm", "Intercostal muscles", "Pectoralis major", "Latissimus dorsi"], answer: "Diaphragm" },
  { question: "What is the normal tidal volume in a healthy adult?", options: ["150 mL", "300 mL", "500 mL", "700 mL"], answer: "500 mL" },
  { question: "Oxygen binds to which part of the hemoglobin molecule?", options: ["Heme", "Globin", "Iron", "Protein chain"], answer: "Heme" },
  { question: "What term describes the maximum amount of air that can be exhaled after a maximum inhalation?", options: ["Vital capacity", "Tidal volume", "Inspiratory reserve volume", "Expiratory reserve volume"], answer: "Vital capacity" },
  { question: "What percentage of oxygen is transported dissolved in plasma?", options: ["1.5%", "10%", "20%", "50%"], answer: "1.5%" },
  { question: "Which gas law describes the relationship between pressure and volume in the lungs?", options: ["Boyle's Law", "Dalton's Law", "Henry's Law", "Charles' Law"], answer: "Boyle's Law" },
  { question: "Which receptor type in the carotid bodies responds to changes in blood pH?", options: ["Chemoreceptors", "Baroreceptors", "Mechanoreceptors", "Thermoreceptors"], answer: "Chemoreceptors" },
  { question: "Which structure prevents food from entering the trachea during swallowing?", options: ["Epiglottis", "Larynx", "Vocal cords", "Esophagus"], answer: "Epiglottis" },
  { question: "What is the partial pressure of oxygen (PaO2) in arterial blood?", options: ["40 mmHg", "60 mmHg", "80 mmHg", "100 mmHg"], answer: "100 mmHg" },
  { question: "What is the total lung capacity (TLC) in a healthy adult?", options: ["2-3 liters", "3-4 liters", "5-6 liters", "6-7 liters"], answer: "6-7 liters" },
  { question: "Which lung volume cannot be measured directly by spirometry?", options: ["Residual volume", "Tidal volume", "Vital capacity", "Inspiratory reserve volume"], answer: "Residual volume" },
  { question: "What is the primary driver for increased ventilation during exercise?", options: ["Increased CO2", "Decreased O2", "Increased pH", "Increased temperature"], answer: "Increased CO2" },
  { question: "Which condition is characterized by hyperinflation of the lungs and decreased alveolar surface area?", options: ["Emphysema", "Pneumonia", "Asthma", "Bronchitis"], answer: "Emphysema" },
  { question: "What is the term for the amount of air remaining in the lungs after a normal exhalation?", options: ["Functional residual capacity", "Residual volume", "Inspiratory reserve volume", "Expiratory reserve volume"], answer: "Functional residual capacity" },
  { question: "What is the primary function of surfactant in the lungs?", options: ["Reduce surface tension", "Increase surface area", "Trap particles", "Regulate oxygen diffusion"], answer: "Reduce surface tension" },
  { question: "Which lung zone has the highest perfusion during normal breathing?", options: ["Base", "Apex", "Middle", "Equal throughout"], answer: "Base" },
  { question: "Which cells in the alveoli are responsible for gas exchange?", options: ["Type I alveolar cells", "Type II alveolar cells", "Macrophages", "Ciliated cells"], answer: "Type I alveolar cells" },
  { question: "What is the normal respiratory rate for an adult at rest?", options: ["8-12 breaths/min", "12-16 breaths/min", "16-20 breaths/min", "20-24 breaths/min"], answer: "12-16 breaths/min" },
  { question: "Which structure carries deoxygenated blood to the lungs?", options: ["Pulmonary artery", "Pulmonary vein", "Bronchial artery", "Aorta"], answer: "Pulmonary artery" }, { question: "Which organ is responsible for the production of urine?", options: ["Liver", "Kidney", "Pancreas", "Bladder"], answer: "Kidney" },
                { question: "What is the primary function of the small intestine?", options: ["Absorption of nutrients", "Production of bile", "Storage of food", "Waste elimination"], answer: "Absorption of nutrients" },
                { question: "Which enzyme is primarily responsible for carbohydrate digestion in the mouth?", options: ["Amylase", "Pepsin", "Lipase", "Trypsin"], answer: "Amylase" },
  { question: "What is the main function of bile?", options: ["Emulsify fats", "Digest proteins", "Neutralize acids", "Absorb nutrients"], answer: "Emulsify fats" },
  { question: "Which hormone stimulates the release of gastric acid?", options: ["Gastrin", "Secretin", "CCK", "Motilin"], answer: "Gastrin" },
  { question: "Where in the digestive tract does most nutrient absorption occur?", options: ["Small intestine", "Stomach", "Large intestine", "Esophagus"], answer: "Small intestine" },
  { question: "Which structure increases the surface area for absorption in the small intestine?", options: ["Villi", "Rugae", "Microvilli", "Cilia"], answer: "Villi" },
  { question: "Which cells in the stomach produce hydrochloric acid?", options: ["Parietal cells", "Chief cells", "G cells", "Goblet cells"], answer: "Parietal cells" },
  { question: "What is the primary role of the large intestine?", options: ["Water absorption", "Protein digestion", "Fat emulsification", "Glucose absorption"], answer: "Water absorption" },
  { question: "The enteric nervous system is sometimes called what?", options: ["'The second brain'", "'The central system'", "'The spinal network'", "'The hepatic control'"], answer: "'The second brain'" },
  { question: "What enzyme breaks down proteins in the stomach?", options: ["Pepsin", "Amylase", "Lipase", "Lactase"], answer: "Pepsin" },
  { question: "Where is the hormone secretin released?", options: ["Duodenum", "Stomach", "Pancreas", "Gallbladder"], answer: "Duodenum" },
  { question: "Which vitamin is synthesized by bacteria in the large intestine?", options: ["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin B12"], answer: "Vitamin K" },
  { question: "What does CCK stimulate in digestion?", options: ["Release of bile", "Production of saliva", "Inhibition of gastric emptying", "Release of insulin"], answer: "Release of bile" },
  { question: "What is the role of the liver in digestion?", options: ["Produce bile", "Absorb water", "Produce gastric acid", "Store glycogen"], answer: "Produce bile" },
  { question: "The brush border is found in which part of the GI tract?", options: ["Small intestine", "Large intestine", "Stomach", "Esophagus"], answer: "Small intestine" },
  { question: "Which enzyme is released by the pancreas to digest proteins?", options: ["Trypsin", "Amylase", "Lipase", "Pepsin"], answer: "Trypsin" },
  { question: "The hormone motilin increases what kind of movements in the digestive tract?", options: ["Peristaltic", "Segmental", "Mixing", "None"], answer: "Peristaltic" },
  { question: "Which digestive hormone decreases gastric emptying?", options: ["CCK", "Gastrin", "Secretin", "Motilin"], answer: "CCK" },
  { question: "What is the pH range of the stomach during active digestion?", options: ["1-2", "4-5", "6-7", "7-8"], answer: "1-2" },
  { question: "Which part of the pancreas produces digestive enzymes?", options: ["Acinar cells", "Beta cells", "Alpha cells", "Goblet cells"], answer: "Acinar cells" },
  { question: "What is the primary nutrient absorbed in the ileum?", options: ["Vitamin B12", "Carbohydrates", "Proteins", "Fatty acids"], answer: "Vitamin B12" },
  { question: "Which hormone is known as the 'hunger hormone'?", options: ["Ghrelin", "Leptin", "Insulin", "Gastrin"], answer: "Ghrelin" },
  { question: "What structure prevents acid reflux in the esophagus?", options: ["Lower esophageal sphincter", "Upper esophageal sphincter", "Pyloric sphincter", "Ileocecal valve"], answer: "Lower esophageal sphincter" },
  { question: "Where does protein digestion begin?", options: ["Stomach", "Mouth", "Small intestine", "Large intestine"], answer: "Stomach" },
  { question: "What is the major function of the gallbladder?", options: ["Store bile", "Produce bile", "Store insulin", "Absorb nutrients"], answer: "Store bile" },
  { question: "What triggers the release of pancreatic juice?", options: ["Secretin", "Gastrin", "Leptin", "Motilin"], answer: "Secretin" },

  // Renal Physiology
  { question: "What is the primary functional unit of the kidney?", options: ["Nephron", "Glomerulus", "Ureter", "Bowman's capsule"], answer: "Nephron" },
  { question: "What process occurs in the glomerulus?", options: ["Filtration", "Reabsorption", "Secretion", "Excretion"], answer: "Filtration" },
  { question: "Which hormone increases water reabsorption in the kidneys?", options: ["ADH", "Aldosterone", "Renin", "Cortisol"], answer: "ADH" },
  { question: "What is the main function of the loop of Henle?", options: ["Concentrate urine", "Dilute plasma", "Reabsorb glucose", "Filter blood"], answer: "Concentrate urine" },
  { question: "Which part of the nephron is impermeable to water?", options: ["Ascending loop of Henle", "Descending loop of Henle", "Proximal tubule", "Collecting duct"], answer: "Ascending loop of Henle" },
  { question: "The release of which hormone is stimulated by low blood pressure?", options: ["Renin", "Insulin", "Gastrin", "Cortisol"], answer: "Renin" },
  { question: "Where does most sodium reabsorption occur in the nephron?", options: ["Proximal tubule", "Loop of Henle", "Distal tubule", "Collecting duct"], answer: "Proximal tubule" },
  { question: "Which substance is not normally found in the glomerular filtrate?", options: ["Proteins", "Glucose", "Urea", "Electrolytes"], answer: "Proteins" },
  { question: "Where is ADH produced?", options: ["Hypothalamus", "Pituitary gland", "Adrenal cortex", "Liver"], answer: "Hypothalamus" },
  { question: "What effect does aldosterone have on sodium in the kidneys?", options: ["Increases reabsorption", "Decreases reabsorption", "Increases excretion", "No effect"], answer: "Increases reabsorption" },
  { question: "What is the function of the juxtaglomerular apparatus?", options: ["Regulate blood pressure", "Filter blood", "Reabsorb potassium", "Concentrate urine"], answer: "Regulate blood pressure" },
  { question: "Which part of the kidney contains the glomeruli?", options: ["Cortex", "Medulla", "Renal pelvis", "Papilla"], answer: "Cortex" },
  { question: "What is the term for the volume of plasma filtered per unit time by the kidneys?", options: ["Glomerular filtration rate", "Tubular reabsorption rate", "Renal blood flow", "Urinary clearance"], answer: "Glomerular filtration rate" },
  { question: "In what part of the nephron does most water reabsorption occur?", options: ["Proximal tubule", "Loop of Henle", "Distal tubule", "Collecting duct"], answer: "Proximal tubule" },
  { question: "Which part of the nephron is sensitive to aldosterone?", options: ["Distal tubule", "Proximal tubule", "Loop of Henle", "Bowman's capsule"], answer: "Distal tubule" },
  { question: "Which ion's reabsorption is promoted by parathyroid hormone in the kidneys?", options: ["Calcium", "Sodium", "Potassium", "Chloride"], answer: "Calcium" },
  { question: "Which of the following is used to measure renal plasma flow?", options: ["PAH clearance", "Inulin clearance", "Glucose clearance", "Creatinine clearance"], answer: "PAH clearance" },
  { question: "What is the typical osmolarity of human urine?", options: ["500-800 mOsm/L", "800-1200 mOsm/L", "200-400 mOsm/L", "50-100 mOsm/L"], answer: "800-1200 mOsm/L" },
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
{ question: "Which part of the eye is responsible for focusing light?", options: ["Cornea", "Lens", "Retina", "Iris"], answer: "Lens" },
                { question: "What is the primary function of the cochlea?", options: ["Balance", "Vision", "Hearing", "Smell"], answer: "Hearing" },
                { question: "What type of receptors detect changes in temperature?", options: ["Thermoreceptors", "Mechanoreceptors", "Chemoreceptors", "Photoreceptors"], answer: "Thermoreceptors" },
  { question: "Which sensory receptor type is responsible for detecting pain?", options: ["Nociceptors", "Thermoreceptors", "Photoreceptors", "Mechanoreceptors"], answer: "Nociceptors" },
  { question: "What part of the brain processes most sensory information?", options: ["Thalamus", "Cerebellum", "Medulla oblongata", "Hypothalamus"], answer: "Thalamus" },
  { question: "The dorsal column-medial lemniscal pathway is primarily involved in which sense?", options: ["Touch and proprioception", "Pain", "Vision", "Smell"], answer: "Touch and proprioception" },
  { question: "What term describes the process by which a stimulus is converted into an electrical signal?", options: ["Transduction", "Translation", "Transmission", "Integration"], answer: "Transduction" },
  { question: "Which fiber type transmits fast, sharp pain?", options: ["A-delta fibers", "C fibers", "B fibers", "A-beta fibers"], answer: "A-delta fibers" },
  { question: "Where are somatosensory signals primarily processed?", options: ["Primary somatosensory cortex", "Prefrontal cortex", "Occipital lobe", "Temporal lobe"], answer: "Primary somatosensory cortex" },
  { question: "Which sensory pathway decussates in the spinal cord?", options: ["Spinothalamic tract", "Dorsal column-medial lemniscal pathway", "Optic nerve", "Trigeminal pathway"], answer: "Spinothalamic tract" },
  { question: "What type of receptors detect pressure and stretch in the skin?", options: ["Mechanoreceptors", "Nociceptors", "Thermoreceptors", "Chemoreceptors"], answer: "Mechanoreceptors" },
  { question: "What is the name of the tactile receptors located in the dermal papillae?", options: ["Meissner's corpuscles", "Pacinian corpuscles", "Merkel cells", "Ruffini endings"], answer: "Meissner's corpuscles" },

  // Vision
  { question: "Which part of the eye focuses light onto the retina?", options: ["Lens", "Iris", "Cornea", "Optic disc"], answer: "Lens" },
  { question: "What is the function of the rods in the retina?", options: ["Low-light vision", "Color vision", "Sharp vision", "Depth perception"], answer: "Low-light vision" },
  { question: "Which photopigment is found in rods?", options: ["Rhodopsin", "Photopsin", "Melanopsin", "Iodopsin"], answer: "Rhodopsin" },
  { question: "What part of the eye adjusts to control the amount of light entering?", options: ["Pupil", "Lens", "Cornea", "Retina"], answer: "Pupil" },
  { question: "The optic nerve transmits visual information to which part of the brain?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
  { question: "In which part of the retina are cones primarily concentrated?", options: ["Fovea", "Periphery", "Optic disc", "Ciliary body"], answer: "Fovea" },
  { question: "What is the role of the photoreceptors in the retina?", options: ["Convert light into electrical signals", "Detect sound", "Sense pressure", "Relay taste information"], answer: "Convert light into electrical signals" },
  { question: "Which structure is responsible for the production of aqueous humor?", options: ["Ciliary body", "Lens", "Cornea", "Retina"], answer: "Ciliary body" },
  { question: "What is the blind spot in the eye?", options: ["Point where the optic nerve exits the eye", "Fovea", "Peripheral vision", "Lens center"], answer: "Point where the optic nerve exits the eye" },
  { question: "Which cells in the retina are primarily responsible for detecting color?", options: ["Cones", "Rods", "Ganglion cells", "Bipolar cells"], answer: "Cones" },

  // Hearing
  { question: "Where are the auditory receptors (hair cells) located?", options: ["Cochlea", "Ossicles", "Tympanic membrane", "Eustachian tube"], answer: "Cochlea" },
  { question: "What is the function of the ossicles in the middle ear?", options: ["Amplify sound vibrations", "Detect head position", "Transmit visual signals", "Regulate pressure"], answer: "Amplify sound vibrations" },
  { question: "The organ of Corti is located in which part of the ear?", options: ["Cochlea", "Semicircular canals", "Middle ear", "Eustachian tube"], answer: "Cochlea" },
  { question: "Which nerve transmits auditory signals to the brain?", options: ["Vestibulocochlear nerve", "Optic nerve", "Olfactory nerve", "Vagus nerve"], answer: "Vestibulocochlear nerve" },
  { question: "What structure in the cochlea responds to specific frequencies of sound?", options: ["Basilar membrane", "Oval window", "Tympanic membrane", "Round window"], answer: "Basilar membrane" },
  { question: "Which structure separates the outer ear from the middle ear?", options: ["Tympanic membrane", "Oval window", "Round window", "Cochlea"], answer: "Tympanic membrane" },
  { question: "The Eustachian tube helps to equalize pressure in which part of the ear?", options: ["Middle ear", "Outer ear", "Inner ear", "Cochlea"], answer: "Middle ear" },
  { question: "What fluid fills the scala tympani and scala vestibuli in the cochlea?", options: ["Perilymph", "Endolymph", "Serum", "Cerebrospinal fluid"], answer: "Perilymph" },
  { question: "Where is the round window located?", options: ["Cochlea", "Middle ear", "Outer ear", "Eustachian tube"], answer: "Cochlea" },
  { question: "Which part of the ear contains the semicircular canals?", options: ["Inner ear", "Outer ear", "Middle ear", "Eustachian tube"], answer: "Inner ear" },

  // Taste and Smell
  { question: "What is the primary function of taste buds?", options: ["Detect taste", "Sense smell", "Measure pressure", "Detect temperature"], answer: "Detect taste" },
  { question: "What taste sensation is primarily triggered by glutamate?", options: ["Umami", "Sweet", "Sour", "Bitter"], answer: "Umami" },
  { question: "Which cranial nerve is involved in transmitting taste from the anterior two-thirds of the tongue?", options: ["Facial nerve (VII)", "Glossopharyngeal nerve (IX)", "Vagus nerve (X)", "Trigeminal nerve (V)"], answer: "Facial nerve (VII)" },
  { question: "Which part of the brain processes olfactory signals?", options: ["Olfactory bulb", "Thalamus", "Cerebellum", "Occipital lobe"], answer: "Olfactory bulb" },
  { question: "What type of receptors are involved in the sense of smell?", options: ["Chemoreceptors", "Mechanoreceptors", "Photoreceptors", "Thermoreceptors"], answer: "Chemoreceptors" },
  { question: "The glossopharyngeal nerve carries taste information from which part of the tongue?", options: ["Posterior one-third", "Anterior two-thirds", "Tip of the tongue", "Lateral sides"], answer: "Posterior one-third" },
  { question: "Which region of the brain processes taste information?", options: ["Gustatory cortex", "Somatosensory cortex", "Occipital lobe", "Cerebellum"], answer: "Gustatory cortex" },
  { question: "The olfactory nerve is also known by which cranial nerve number?", options: ["Cranial nerve I", "Cranial nerve II", "Cranial nerve III", "Cranial nerve IV"], answer: "Cranial nerve I" },
  { question: "What is the main function of the olfactory epithelium?", options: ["Detect odorants", "Detect sound", "Detect pressure", "Relay visual signals"], answer: "Detect odorants" },
  { question: "Which area of the brain is associated with the emotional responses to smell?", options: ["Limbic system", "Occipital lobe", "Medulla oblongata", "Cerebellum"], answer: "Limbic system" },

  // Vestibular System
  { question: "What is the primary function of the vestibular system?", options: ["Maintain balance", "Detect sound", "Process taste", "Control vision"], answer: "Maintain balance" },
  { question: "Which structure detects rotational acceleration of the head?", options: ["Semicircular canals", "Cochlea", "Eustachian tube", "Ossicles"], answer: "Semicircular canals" },
  { question: "The utricle and saccule detect which type of acceleration?", options: ["Linear", "Rotational", "Sound-based", "Temperature-based"], answer: "Linear" },
  { question: "The hair cells in the vestibular system are located within structures called what?", options: ["Ampullae", "Tympanic membrane", "Stapes", "Organ of Corti"], answer: "Ampullae" },
  { question: "What fluid is found in the vestibular system that helps detect head movement?", options: ["Endolymph", "Perilymph", "Cerebrospinal fluid", "Blood"], answer: "Endolymph" },
  { question: "Which nerve transmits signals from the vestibular system to the brain?", options: ["Vestibulocochlear nerve", "Olfactory nerve", "Optic nerve", "Glossopharyngeal nerve"], answer: "Vestibulocochlear nerve" }, { question: "Which part of the brain is responsible for voluntary movement?", options: ["Cerebellum", "Medulla", "Cerebrum", "Thalamus"], answer: "Cerebrum" },
                { question: "What is the function of the basal ganglia?", options: ["Control posture and movement", "Regulate heart rate", "Process visual information", "Maintain homeostasis"], answer: "Control posture and movement" },
                { question: "Which area of the brain is primarily responsible for voluntary motor control?", options: ["Primary motor cortex", "Broca's area", "Wernicke's area", "Cerebellum"], answer: "Primary motor cortex" },
  { question: "The motor homunculus represents what aspect of the motor cortex?", options: ["Body parts by degree of control", "Regions for sensory input", "Areas for language processing", "Pain pathways"], answer: "Body parts by degree of control" },
  { question: "Where is the primary motor cortex located?", options: ["Precentral gyrus", "Postcentral gyrus", "Temporal lobe", "Parietal lobe"], answer: "Precentral gyrus" },
  { question: "The corticospinal tract primarily controls which type of movement?", options: ["Voluntary", "Involuntary", "Reflex", "Autonomic"], answer: "Voluntary" },
  { question: "Which part of the brain helps coordinate fine motor skills?", options: ["Cerebellum", "Medulla", "Hippocampus", "Thalamus"], answer: "Cerebellum" },
  { question: "Which structure modulates and inhibits unwanted motor movements?", options: ["Basal ganglia", "Thalamus", "Amygdala", "Hippocampus"], answer: "Basal ganglia" },
  { question: "What type of neurons are responsible for transmitting motor signals from the brain to the muscles?", options: ["Motor neurons", "Sensory neurons", "Interneurons", "Neuroglia"], answer: "Motor neurons" },
  { question: "Which neurotransmitter is predominantly involved in activating muscle contraction?", options: ["Acetylcholine", "Dopamine", "Serotonin", "GABA"], answer: "Acetylcholine" },
  { question: "What is the role of the supplementary motor area?", options: ["Planning complex movements", "Processing sensory information", "Regulating emotions", "Language comprehension"], answer: "Planning complex movements" },
  { question: "The premotor cortex is primarily involved in which function?", options: ["Movement planning and coordination", "Emotion regulation", "Sensory integration", "Memory processing"], answer: "Movement planning and coordination" },

  // Basal Ganglia and Motor Control
  { question: "The basal ganglia receive major input from which brain area?", options: ["Cerebral cortex", "Medulla", "Cerebellum", "Pons"], answer: "Cerebral cortex" },
  { question: "Dopamine plays a critical role in the function of which motor-related brain structure?", options: ["Basal ganglia", "Hippocampus", "Amygdala", "Thalamus"], answer: "Basal ganglia" },
  { question: "Which basal ganglia structure is most associated with initiating movement?", options: ["Putamen", "Caudate nucleus", "Globus pallidus", "Nucleus accumbens"], answer: "Putamen" },
  { question: "Damage to the basal ganglia can lead to which condition?", options: ["Parkinson's disease", "Alzheimer's disease", "Schizophrenia", "Bipolar disorder"], answer: "Parkinson's disease" },
  { question: "What is the function of the globus pallidus in the basal ganglia?", options: ["Inhibitory control of movement", "Sensory processing", "Language production", "Visual processing"], answer: "Inhibitory control of movement" },
  { question: "Huntington's disease is associated with degeneration in which area of the basal ganglia?", options: ["Caudate nucleus", "Putamen", "Substantia nigra", "Globus pallidus"], answer: "Caudate nucleus" },
  { question: "The direct pathway of the basal ganglia has what effect on movement?", options: ["Facilitates movement", "Inhibits movement", "Controls balance", "Processes emotions"], answer: "Facilitates movement" },
  { question: "The substantia nigra produces which neurotransmitter that is crucial for motor control?", options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"], answer: "Dopamine" },
  { question: "Which structure in the basal ganglia is involved in the indirect pathway to inhibit movement?", options: ["Subthalamic nucleus", "Thalamus", "Amygdala", "Cerebellum"], answer: "Subthalamic nucleus" },
  { question: "Which condition is associated with a loss of dopaminergic neurons in the substantia nigra?", options: ["Parkinson's disease", "Multiple sclerosis", "Epilepsy", "Depression"], answer: "Parkinson's disease" },

  // Cerebellum and Motor Control
  { question: "What is the primary role of the cerebellum in motor control?", options: ["Coordination and precision", "Emotional regulation", "Language processing", "Sensory processing"], answer: "Coordination and precision" },
  { question: "Damage to the cerebellum often results in which condition?", options: ["Ataxia", "Aphasia", "Amnesia", "Agnosia"], answer: "Ataxia" },
  { question: "Which lobe of the cerebellum is involved in coordinating body movements?", options: ["Anterior lobe", "Posterior lobe", "Flocculonodular lobe", "Temporal lobe"], answer: "Anterior lobe" },
  { question: "The cerebellum receives sensory input primarily from which structure?", options: ["Spinal cord", "Cerebral cortex", "Hippocampus", "Amygdala"], answer: "Spinal cord" },
  { question: "Which part of the cerebellum is associated with maintaining balance and eye movements?", options: ["Flocculonodular lobe", "Anterior lobe", "Posterior lobe", "Limbic system"], answer: "Flocculonodular lobe" },
  { question: "What is the function of Purkinje cells in the cerebellum?", options: ["Inhibit cerebellar nuclei", "Transmit sensory information", "Generate movement commands", "Process emotions"], answer: "Inhibit cerebellar nuclei" },
  { question: "Which tract carries information from the cerebellum to the motor cortex?", options: ["Cerebellothalamic tract", "Corticospinal tract", "Spinothalamic tract", "Vestibulospinal tract"], answer: "Cerebellothalamic tract" },
  { question: "Cerebellar lesions typically result in which type of movement disorder?", options: ["Intention tremor", "Resting tremor", "Rigidity", "Dyskinesia"], answer: "Intention tremor" },
  { question: "The cerebellum is connected to the brainstem via which structures?", options: ["Cerebellar peduncles", "Cranial nerves", "Basal ganglia", "Limbic system"], answer: "Cerebellar peduncles" },
  { question: "What is the role of the cerebellum's lateral zone?", options: ["Planning and timing of movements", "Balance and posture", "Coordination of reflexes", "Processing sensory information"], answer: "Planning and timing of movements" },

  // Brain Areas and Motor Learning
  { question: "Which area of the brain is critical for learning new motor skills?", options: ["Cerebellum", "Hypothalamus", "Broca's area", "Occipital lobe"], answer: "Cerebellum" },
  { question: "What is the function of the motor association cortex?", options: ["Planning motor actions", "Processing sensory information", "Emotional regulation", "Language comprehension"], answer: "Planning motor actions" },
  { question: "Broca's area is primarily associated with which function?", options: ["Speech production", "Speech comprehension", "Balance", "Emotion processing"], answer: "Speech production" },
  { question: "The reticular formation is involved in regulating what aspect of motor control?", options: ["Muscle tone", "Speech production", "Sensory processing", "Vision"], answer: "Muscle tone" },
  { question: "Which type of learning is associated with repeated practice of a motor skill?", options: ["Motor learning", "Cognitive learning", "Sensory learning", "Spatial learning"], answer: "Motor learning" },
  { question: "The lateral corticospinal tract primarily controls movement of which part of the body?", options: ["Distal limbs", "Head", "Axial muscles", "Internal organs"], answer: "Distal limbs" },
  { question: "Which brain structure plays a key role in procedural memory and motor skills?", options: ["Basal ganglia", "Amygdala", "Hippocampus", "Thalamus"], answer: "Basal ganglia" },
  { question: "Damage to which brain area would most likely affect fine motor control?", options: ["Primary motor cortex", "Occipital lobe", "Temporal lobe", "Wernicke's area"], answer: "Primary motor cortex" },
  { question: "The medial corticospinal tract primarily controls movement of which body region?", options: ["Trunk and proximal muscles", "Hands", "Feet", "Facial muscles"], answer: "Trunk and proximal muscles" },
  { question: "The premotor cortex is involved in which aspect of movement?", options: ["Planning and selection", "Execution", "Sensory feedback", "Reflex inhibition"], answer: "Planning and selection" },

  // Reflexes and Motor Pathways
  { question: "The monosynaptic reflex arc involves which type of response?", options: ["Direct motor response to a stimulus", "Complex multi-synaptic response", "Sensory processing only", "Emotional response"], answer: "Direct motor response to a stimulus" },
  { question: "Which structure relays motor signals from the cerebral cortex to the spinal cord?", options: ["Pyramidal tracts", "Limbic system", "Cerebellum", "Thalamus"], answer: "Pyramidal tracts" },
  { question: "Which pathway is responsible for voluntary motor control of the body's muscles?", options: ["Corticospinal tract", "Vestibulospinal tract", "Spinothalamic tract", "Reticulospinal tract"], answer: "Corticospinal tract" },
  { question: "The vestibulospinal tract helps maintain what?", options: ["Posture and balance", "Language comprehension", "Memory", "Sensory feedback"], answer: "Posture and balance" },
  { question: "Which type of motor neuron innervates muscle spindles?", options: ["Gamma motor neurons", "Alpha motor neurons", "Sensory neurons", "Interneurons"], answer: "Gamma motor neurons" },
  { question: "The rubrospinal tract primarily influences which muscles?", options: ["Flexor muscles", "Extensor muscles", "Facial muscles", "Cardiac muscles"], answer: "Flexor muscles" },
  { question: "Which brainstem nucleus modulates the vestibulospinal tract?", options: ["Vestibular nuclei", "Red nucleus", "Substantia nigra", "Lateral geniculate nucleus"], answer: "Vestibular nuclei" },
  { question: "Alpha motor neurons innervate which type of muscle fibers?", options: ["Skeletal muscle fibers", "Smooth muscle fibers", "Cardiac muscle fibers", "Spindle fibers"], answer: "Skeletal muscle fibers" },
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