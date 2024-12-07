// Question bank
const questionBank = [
         {
    question: "Which of the following viruses is associated with the development of cervical cancer?",
    options: ["Human papillomavirus (HPV)", "Herpes simplex virus (HSV)", "Epstein-Barr virus (EBV)", "Hepatitis B virus (HBV)"],
    answer: "Human papillomavirus (HPV)"
  },
  {
    question: "Which virus is responsible for the characteristic 'slapped cheek' rash in children?",
    options: ["Human parvovirus B19", "Coxsackievirus", "Measles virus", "Rubella virus"],
    answer: "Human parvovirus B19"
  },
  {
    question: "Which of the following viruses causes a latent infection in the trigeminal ganglion?",
    options: ["Herpes simplex virus (HSV) type 1", "Varicella-zoster virus (VZV)", "Cytomegalovirus (CMV)", "Epstein-Barr virus (EBV)"],
    answer: "Herpes simplex virus (HSV) type 1"
  },
  {
    question: "Which viral infection is most commonly associated with the development of hepatocellular carcinoma in adults?",
    options: ["Hepatitis C virus", "Human immunodeficiency virus", "Epstein-Barr virus", "Herpes simplex virus"],
    answer: "Hepatitis C virus"
  },
  {
    question: "The hallmark of severe acute respiratory syndrome (SARS) is infection with which virus?",
    options: ["SARS coronavirus (SARS-CoV)", "MERS coronavirus (MERS-CoV)", "Influenza A virus", "Respiratory syncytial virus (RSV)"],
    answer: "SARS coronavirus (SARS-CoV)"
  },
  {
    question: "Which of the following viruses is transmitted through the respiratory route and causes a characteristic 'croup' cough in young children?",
    options: ["Parainfluenza virus", "Adenovirus", "Measles virus", "Enterovirus"],
    answer: "Parainfluenza virus"
  },
  {
    question: "Which virus is primarily associated with the development of Kaposi's sarcoma in immunocompromised individuals?",
    options: ["Human herpesvirus 8 (HHV-8)", "Human immunodeficiency virus (HIV)", "Cytomegalovirus (CMV)", "Epstein-Barr virus (EBV)"],
    answer: "Human herpesvirus 8 (HHV-8)"
  },
  {
    question: "Which virus is most commonly associated with the 'common cold'?",
    options: ["Rhinovirus", "Influenza virus", "Adenovirus", "Coronavirus"],
    answer: "Rhinovirus"
  },
  {
    question: "Which viral infection is known for causing 'roseola' in infants, with high fever followed by a rash?",
    options: ["Human herpesvirus 6 (HHV-6)", "Varicella-zoster virus (VZV)", "Rubella virus", "Cytomegalovirus (CMV)"],
    answer: "Human herpesvirus 6 (HHV-6)"
  },
  {
    question: "Which of the following viruses is responsible for the development of infectious mononucleosis (IM)?",
    options: ["Epstein-Barr virus (EBV)", "Human herpesvirus 6 (HHV-6)", "Cytomegalovirus (CMV)", "Hepatitis C virus (HCV)"],
    answer: "Epstein-Barr virus (EBV)"
  },
  {
    question: "Which virus is associated with the development of microcephaly in newborns when infected during pregnancy?",
    options: ["Zika virus", "Rubella virus", "Varicella-zoster virus", "Herpes simplex virus"],
    answer: "Zika virus"
  },
  {
    question: "Which virus is characterized by a 'bull's eye' or 'target' appearance in its histological structure?",
    options: ["Herpes simplex virus", "Varicella-zoster virus", "Human papillomavirus", "Cytomegalovirus"],
    answer: "Herpes simplex virus"
  },
  {
    question: "Which of the following viruses can cause congenital cataracts in newborns if the mother is infected during pregnancy?",
    options: ["Rubella virus", "Cytomegalovirus (CMV)", "Zika virus", "Varicella-zoster virus"],
    answer: "Rubella virus"
  },
  {
    question: "Which viral infection is most commonly associated with the development of severe gastroenteritis in children?",
    options: ["Rotavirus", "Norovirus", "Adenovirus", "Enterovirus"],
    answer: "Rotavirus"
  },
  {
    question: "Which of the following viruses is responsible for causing progressive multifocal leukoencephalopathy (PML)?",
    options: ["JC virus", "Human herpesvirus 6", "Epstein-Barr virus", "Varicella-zoster virus"],
    answer: "JC virus"
  },
  {
    question: "Which virus is associated with 'hepatitis' in neonates and can be transmitted through vertical transmission?",
    options: ["Hepatitis B virus", "Hepatitis C virus", "Hepatitis A virus", "Hepatitis E virus"],
    answer: "Hepatitis B virus"
  },
  {
    question: "Which of the following viruses is a common cause of viral pneumonia in infants and young children?",
    options: ["Respiratory syncytial virus (RSV)", "Influenza virus", "Adenovirus", "Human metapneumovirus"],
    answer: "Respiratory syncytial virus (RSV)"
  },
  {
    question: "Which of the following viruses causes a characteristic vesicular rash starting on the trunk and spreading to the limbs?",
    options: ["Varicella-zoster virus", "Coxsackievirus", "Herpes simplex virus", "Rubella virus"],
    answer: "Varicella-zoster virus"
  },
  {
    question: "Which of the following is the first-line treatment for chronic hepatitis C infection?",
    options: ["Sofosbuvir", "Ribavirin", "Interferon", "Adefovir"],
    answer: "Sofosbuvir"
  },
  {
    question: "Which virus is associated with the development of Burkitt's lymphoma?",
    options: ["Epstein-Barr virus (EBV)", "Human papillomavirus", "Cytomegalovirus", "Human T-cell leukemia virus (HTLV)"],
    answer: "Epstein-Barr virus (EBV)"
  },
  {
    question: "Which viral infection is most commonly associated with the development of an erythematous rash that begins at the hairline and spreads downward?",
    options: ["Measles virus", "Rubella virus", "Coxsackievirus", "Varicella-zoster virus"],
    answer: "Measles virus"
  },
  {
    question: "Which virus is a common cause of viral hemorrhagic fever and is endemic to West Africa?",
    options: ["Ebola virus", "Hantavirus", "Yellow fever virus", "Dengue virus"],
    answer: "Ebola virus"
  },
  {
    question: "Which of the following viruses is primarily associated with causing a febrile rash illness in children and adolescents?",
    options: ["Measles virus", "Rubella virus", "Chickenpox virus", "Coxsackievirus"],
    answer: "Measles virus"
  },
  {
    question: "Which virus is responsible for the development of progressive multifocal leukoencephalopathy (PML) in immunocompromised individuals?",
    options: ["JC virus", "Cytomegalovirus", "Human herpesvirus 6", "Varicella-zoster virus"],
    answer: "JC virus"
  },
  {
    question: "Which viral infection is associated with the development of congenital heart defects, hearing loss, and cataracts when the mother is infected during pregnancy?",
    options: ["Rubella virus", "Cytomegalovirus", "Herpes simplex virus", "Hepatitis B virus"],
    answer: "Rubella virus"
  },
  {
    question: "Which virus causes primary genital infections that can later reactivate as cold sores or genital lesions?",
    options: ["Herpes simplex virus (HSV) type 2", "Human papillomavirus (HPV)", "Cytomegalovirus", "Hepatitis B virus"],
    answer: "Herpes simplex virus (HSV) type 2"
  },
  {
    question: "Which virus is most commonly associated with causing a characteristic 'doughnut-shaped' inclusion body in infected cells?",
    options: ["Cytomegalovirus (CMV)", "Herpes simplex virus", "Varicella-zoster virus", "Epstein-Barr virus (EBV)"],
    answer: "Cytomegalovirus (CMV)"
  },
  {
    question: "Which virus is primarily transmitted via sexual contact and is associated with the development of anogenital warts and cervical cancer?",
    options: ["Human papillomavirus (HPV)", "Herpes simplex virus", "HIV", "Hepatitis B virus"],
    answer: "Human papillomavirus (HPV)"
  },
  {
    question: "Which of the following viruses is most commonly associated with causing pneumonia in elderly patients?",
    options: ["Influenza virus", "Respiratory syncytial virus (RSV)", "Human metapneumovirus", "Adenovirus"],
    answer: "Influenza virus"
  },
  {
    question: "Which of the following viruses causes primary infection with a characteristic 'shingles' or 'herpes zoster' rash in adults?",
    options: ["Varicella-zoster virus", "Herpes simplex virus", "Human herpesvirus 6", "Epstein-Barr virus"],
    answer: "Varicella-zoster virus"
  },
  {
    question: "Which virus is known to cause a disease characterized by a characteristic 'mottled' appearance on chest X-ray in immunocompromised individuals?",
    options: ["Cytomegalovirus (CMV)", "Human herpesvirus 6", "Epstein-Barr virus", "Herpes simplex virus"],
    answer: "Cytomegalovirus (CMV)"
  },
  {
    question: "Which of the following viruses is responsible for causing epidemic keratoconjunctivitis?",
    options: ["Adenovirus", "Coxsackievirus", "Herpes simplex virus", "Varicella-zoster virus"],
    answer: "Adenovirus"
  },
  {
    question: "Which of the following viruses is associated with causing a rapid-onset, severe, and widespread vesicular rash in infants?",
    options: ["Varicella-zoster virus", "Cytomegalovirus", "Herpes simplex virus", "Rubella virus"],
    answer: "Herpes simplex virus"
  },
  {
    question: "Which virus is associated with the development of a characteristic 'sunburst' pattern on MRI in encephalitis cases?",
    options: ["Herpes simplex virus", "West Nile virus", "Zika virus", "Japanese encephalitis virus"],
    answer: "Herpes simplex virus"
  },
  {
    question: "Which parasitic infection is associated with perianal itching, particularly at night?",
    options: ["Enterobius vermicularis", "Ascaris lumbricoides", "Strongyloides stercoralis", "Trichuris trichiura"],
    answer: "Enterobius vermicularis"
  },
  {
    question: "Which of the following parasites causes cerebral malaria?",
    options: ["Plasmodium falciparum", "Plasmodium vivax", "Plasmodium ovale", "Plasmodium malariae"],
    answer: "Plasmodium falciparum"
  },
  {
    question: "Which parasitic infection is commonly associated with megaloblastic anemia due to vitamin B12 deficiency?",
    options: ["Diphyllobothrium latum", "Ascaris lumbricoides", "Ancylostoma duodenale", "Taenia solium"],
    answer: "Diphyllobothrium latum"
  },
  {
    question: "What is the most common cause of protozoal diarrhea in immunocompromised patients, such as those with HIV/AIDS?",
    options: ["Cryptosporidium parvum", "Giardia lamblia", "Entamoeba histolytica", "Cyclospora cayetanensis"],
    answer: "Cryptosporidium parvum"
  },
  {
    question: "Which parasite is transmitted via freshwater snails and is associated with hematuria in chronic infections?",
    options: ["Schistosoma haematobium", "Schistosoma mansoni", "Fasciola hepatica", "Clonorchis sinensis"],
    answer: "Schistosoma haematobium"
  },
  {
    question: "What is the intermediate host of Taenia solium?",
    options: ["Pig", "Cow", "Sheep", "Fish"],
    answer: "Pig"
  },
  {
    question: "Which parasite is commonly associated with chorioretinitis in newborns when transmitted congenitally?",
    options: ["Toxoplasma gondii", "Plasmodium falciparum", "Trypanosoma cruzi", "Leishmania donovani"],
    answer: "Toxoplasma gondii"
  },
  {
    question: "What is the most common clinical manifestation of a Giardia lamblia infection?",
    options: ["Fatty diarrhea", "Hematuria", "Bloody diarrhea", "Constipation"],
    answer: "Fatty diarrhea"
  },
  {
    question: "Which parasitic infection is acquired through the ingestion of undercooked fish?",
    options: ["Clonorchis sinensis", "Schistosoma mansoni", "Taenia saginata", "Echinococcus granulosus"],
    answer: "Clonorchis sinensis"
  },
  {
    question: "Which parasitic infection can cause cutaneous creeping eruptions (serpiginous lesions)?",
    options: ["Ancylostoma braziliense", "Strongyloides stercoralis", "Necator americanus", "Onchocerca volvulus"],
    answer: "Ancylostoma braziliense"
  },
  {
    question: "Which parasite is associated with elephantiasis due to lymphatic obstruction?",
    options: ["Wuchereria bancrofti", "Brugia malayi", "Loa loa", "Onchocerca volvulus"],
    answer: "Wuchereria bancrofti"
  },
  {
    question: "Which parasite causes a 'ring-enhancing lesion' on brain imaging in immunocompromised patients?",
    options: ["Toxoplasma gondii", "Entamoeba histolytica", "Naegleria fowleri", "Trypanosoma cruzi"],
    answer: "Toxoplasma gondii"
  },
  {
    question: "Which parasite is responsible for kala-azar (visceral leishmaniasis)?",
    options: ["Leishmania donovani", "Leishmania braziliensis", "Leishmania tropica", "Leishmania mexicana"],
    answer: "Leishmania donovani"
  },
  {
    question: "Which parasitic infection is commonly transmitted by the sandfly?",
    options: ["Leishmania species", "Trypanosoma cruzi", "Onchocerca volvulus", "Plasmodium vivax"],
    answer: "Leishmania species"
  },
  {
    question: "Which parasitic infection is diagnosed using thick and thin blood smears?",
    options: ["Malaria (Plasmodium species)", "Trypanosomiasis", "Filariasis", "Babesiosis"],
    answer: "Malaria (Plasmodium species)"
  },
  {
    question: "Which of the following is the definitive host for Echinococcus granulosus?",
    options: ["Dog", "Human", "Sheep", "Pig"],
    answer: "Dog"
  },
  {
    question: "Which parasitic infection is most commonly associated with rectal prolapse in children?",
    options: ["Trichuris trichiura", "Ascaris lumbricoides", "Strongyloides stercoralis", "Ancylostoma duodenale"],
    answer: "Trichuris trichiura"
  },
  {
    question: "Which parasite is transmitted by the bite of the Tsetse fly and causes African sleeping sickness?",
    options: ["Trypanosoma brucei", "Leishmania donovani", "Onchocerca volvulus", "Trypanosoma cruzi"],
    answer: "Trypanosoma brucei"
  },
  {
    question: "Which parasite is known to cause cysticercosis when its eggs are ingested by humans?",
    options: ["Taenia solium", "Echinococcus granulosus", "Fasciola hepatica", "Schistosoma mansoni"],
    answer: "Taenia solium"
  },
  {
    question: "Which parasitic infection is characterized by 'Calabar swelling' and worm migration in the conjunctiva?",
    options: ["Loa loa", "Onchocerca volvulus", "Wuchereria bancrofti", "Toxocara canis"],
    answer: "Loa loa"
  },
 {
    question: "Which parasitic infection is associated with liver abscesses that have an 'anchovy paste' appearance on aspiration?",
    options: ["Entamoeba histolytica", "Echinococcus granulosus", "Fasciola hepatica", "Leishmania donovani"],
    answer: "Entamoeba histolytica"
  },
  {
    question: "Which parasite is detected using a 'string test' for diagnosing duodenal infections?",
    options: ["Giardia lamblia", "Strongyloides stercoralis", "Cryptosporidium parvum", "Entamoeba histolytica"],
    answer: "Giardia lamblia"
  },
  {
    question: "What is the gold standard diagnostic test for schistosomiasis?",
    options: ["Identification of eggs in stool or urine", "Serologic tests", "ELISA", "Polymerase chain reaction (PCR)"],
    answer: "Identification of eggs in stool or urine"
  },
  {
    question: "Which parasitic infection leads to myocarditis, megaesophagus, and megacolon in chronic stages?",
    options: ["Trypanosoma cruzi", "Leishmania donovani", "Toxoplasma gondii", "Strongyloides stercoralis"],
    answer: "Trypanosoma cruzi"
  },
  {
    question: "Which parasitic infection can mimic acute appendicitis and is diagnosed by detecting larvae in stool samples?",
    options: ["Strongyloides stercoralis", "Ascaris lumbricoides", "Enterobius vermicularis", "Trichinella spiralis"],
    answer: "Strongyloides stercoralis"
  },
  {
    question: "Which of the following parasites is associated with hyperinfection syndrome in immunocompromised patients?",
    options: ["Strongyloides stercoralis", "Giardia lamblia", "Ancylostoma duodenale", "Taenia solium"],
    answer: "Strongyloides stercoralis"
  },
  {
    question: "Which parasitic infection is linked to the characteristic 'hydatid sand' appearance in cyst fluid on imaging studies?",
    options: ["Echinococcus granulosus", "Taenia solium", "Fasciola hepatica", "Schistosoma mansoni"],
    answer: "Echinococcus granulosus"
  },
  {
    question: "Which parasite causes ocular larva migrans and is transmitted through accidental ingestion of eggs from dog or cat feces?",
    options: ["Toxocara canis", "Loa loa", "Onchocerca volvulus", "Strongyloides stercoralis"],
    answer: "Toxocara canis"
  },
  {
    question: "Which parasitic infection causes blackwater fever as a severe complication in its chronic stage?",
    options: ["Plasmodium falciparum", "Plasmodium vivax", "Babesia microti", "Leishmania donovani"],
    answer: "Plasmodium falciparum"
  },
  {
    question: "What is the diagnostic feature of a 'motile trophozoite with ingested red blood cells' on a wet mount of stool?",
    options: ["Entamoeba histolytica", "Giardia lamblia", "Cryptosporidium parvum", "Balantidium coli"],
    answer: "Entamoeba histolytica"
  },
  {
    question: "Which of the following viruses is associated with progressive multifocal leukoencephalopathy (PML) in immunocompromised patients?",
    options: ["JC virus", "BK virus", "Cytomegalovirus", "Epstein-Barr virus"],
    answer: "JC virus"
  },
  {
    question: "What is the most common congenital viral infection in the United States, characterized by sensorineural hearing loss and microcephaly?",
    options: ["Cytomegalovirus (CMV)", "Rubella virus", "Zika virus", "Herpes simplex virus"],
    answer: "Cytomegalovirus (CMV)"
  },
  {
    question: "Which viral infection presents with Koplik spots and a maculopapular rash spreading from the face to the trunk?",
    options: ["Measles (Rubeola)", "Rubella", "Parvovirus B19", "Varicella-zoster virus"],
    answer: "Measles (Rubeola)"
  },
  {
    question: "Which of the following viruses is a segmented RNA virus that undergoes genetic reassortment, leading to antigenic shift and pandemics?",
    options: ["Influenza virus", "Hantavirus", "Rotavirus", "Norovirus"],
    answer: "Influenza virus"
  },
  {
    question: "Which virus causes fever, retro-orbital pain, and a maculopapular rash, and can progress to hemorrhagic fever in severe cases?",
    options: ["Dengue virus", "Zika virus", "Yellow fever virus", "Chikungunya virus"],
    answer: "Dengue virus"
  },
  {
    question: "Which DNA virus is associated with Burkitt lymphoma and nasopharyngeal carcinoma?",
    options: ["Epstein-Barr virus (EBV)", "Cytomegalovirus (CMV)", "Human herpesvirus 6", "Adenovirus"],
    answer: "Epstein-Barr virus (EBV)"
  },
  {
    question: "Which virus is associated with a characteristic 'ground glass hepatocyte' appearance on liver biopsy in chronic infection?",
    options: ["Hepatitis B virus", "Hepatitis C virus", "Hepatitis A virus", "Hepatitis E virus"],
    answer: "Hepatitis B virus"
  },
  {
    question: "Which viral infection is diagnosed by the presence of Negri bodies in neurons on brain biopsy?",
    options: ["Rabies virus", "Herpes simplex virus", "West Nile virus", "Japanese encephalitis virus"],
    answer: "Rabies virus"
  },
  {
    question: "Which virus causes hemorrhagic fever with renal syndrome and is transmitted by rodent excreta?",
    options: ["Hantavirus", "Lassa virus", "Ebola virus", "Crimean-Congo hemorrhagic fever virus"],
    answer: "Hantavirus"
  },
  {
    question: "Which of the following viruses is a double-stranded RNA virus that causes severe gastroenteritis in children?",
    options: ["Rotavirus", "Norovirus", "Adenovirus", "Astrovirus"],
    answer: "Rotavirus"
  },
  {
    question: "What is the causative agent of viral encephalitis in the United States, transmitted by Culex mosquitoes?",
    options: ["West Nile virus", "Zika virus", "Dengue virus", "Chikungunya virus"],
    answer: "West Nile virus"
  },
  {
    question: "Which virus is associated with subacute sclerosing panencephalitis (SSPE), a late complication of infection?",
    options: ["Measles virus", "Rubella virus", "Herpes simplex virus", "Cytomegalovirus"],
    answer: "Measles virus"
  },
  {
    question: "Which virus is the leading cause of bronchiolitis and pneumonia in infants under 1 year old?",
    options: ["Respiratory syncytial virus (RSV)", "Adenovirus", "Parainfluenza virus", "Influenza virus"],
    answer: "Respiratory syncytial virus (RSV)"
  },
  {
    question: "Which virus is associated with the development of Kaposi sarcoma, especially in HIV/AIDS patients?",
    options: ["Human herpesvirus 8 (HHV-8)", "Human papillomavirus (HPV)", "Epstein-Barr virus (EBV)", "Cytomegalovirus (CMV)"],
    answer: "Human herpesvirus 8 (HHV-8)"
  },
  {
    question: "Which of the following viruses can cause flaccid paralysis and is diagnosed through stool culture or PCR?",
    options: ["Poliovirus", "West Nile virus", "Enterovirus D68", "Coxsackievirus A16"],
    answer: "Poliovirus"
  },
  {
    question: "Which serological marker indicates a recent infection with hepatitis B virus?",
    options: ["IgM anti-HBc", "HBsAg", "HBeAg", "IgG anti-HBs"],
    answer: "IgM anti-HBc"
  },
  {
    question: "Which culture medium is used to isolate influenza viruses from respiratory specimens?",
    options: ["Madin-Darby Canine Kidney (MDCK) cells", "Vero cells", "HEp-2 cells", "Blood agar"],
    answer: "Madin-Darby Canine Kidney (MDCK) cells"
  },
  {
    question: "Which serologic test is most commonly used to confirm Epstein-Barr virus (EBV) infection?",
    options: ["Monospot test for heterophile antibodies", "ELISA for IgM anti-VCA", "Western blot for anti-EBNA", "PCR for EBV DNA"],
    answer: "Monospot test for heterophile antibodies"
  },
  {
    question: "Which virus causes vesicular lesions on the hands, feet, and mouth, and is commonly diagnosed via PCR?",
    options: ["Coxsackievirus A16", "Herpes simplex virus", "Varicella-zoster virus", "Human papillomavirus"],
    answer: "Coxsackievirus A16"
  },
  {
    question: "Which virus is detected using the Tzanck smear, demonstrating multinucleated giant cells?",
    options: ["Herpes simplex virus", "Cytomegalovirus", "Varicella-zoster virus", "Epstein-Barr virus"],
    answer: "Herpes simplex virus"
  },
  {
    question: "Which serologic test is most commonly used to diagnose toxoplasmosis?",
    options: ["ELISA for IgG and IgM antibodies", "Complement fixation test", "Western blot", "PCR"],
    answer: "ELISA for IgG and IgM antibodies"
  },
  {
    question: "Which culture medium is used to isolate Leishmania species from clinical specimens?",
    options: ["Novy-MacNeal-Nicolle (NNN) medium", "Sabouraud dextrose agar", "Thioglycollate broth", "MacConkey agar"],
    answer: "Novy-MacNeal-Nicolle (NNN) medium"
  },
  {
    question: "In strongyloidiasis, which diagnostic test involves detecting larvae in fresh stool specimens?",
    options: ["Baermann concentration technique", "Kato-Katz method", "ELISA", "Acid-fast staining"],
    answer: "Baermann concentration technique"
  },
  {
    question: "Which of the following serological markers is most useful for the diagnosis of hydatid disease?",
    options: ["IgG antibodies by ELISA", "IgM antibodies by Western blot", "IgA antibodies by complement fixation", "PCR for hydatid DNA"],
    answer: "IgG antibodies by ELISA"
  },
  {
    question: "Which parasitic infection presents with 'pear-shaped trophozoites' on stool microscopy and uses trichrome staining for diagnosis?",
    options: ["Giardia lamblia", "Entamoeba histolytica", "Balantidium coli", "Cryptosporidium parvum"],
    answer: "Giardia lamblia"
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
    "car": new Date("2024-12-15T23:59:59").getTime()  // Custom expiration date and time
   "12345": new Date("2025-12-15T23:59:59").getTime()  // Custom expiration date and time
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