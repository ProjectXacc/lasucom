// Question bank
const questionBank = [
      { "question": "Which cranial nerve controls the movement of the tongue?", options: ["Hypoglossal", "Facial", "Vagus", "Accessory"], answer: "Hypoglossal" },
                { "question": "The occipital lobe is primarily responsible for which function?", options: ["Vision", "Hearing", "Balance", "Taste"], answer: "Vision" },
                  {
    "question": "Which of the following is NOT part of the carotid triangle?",
    "options": ["Hypoglossal nerve", "Common carotid artery", "Thyrohyoid muscle", "Internal jugular vein"],
    "answer": "Thyrohyoid muscle"
  },
  {
    "question": "Which of these structures does NOT pierce the parotid gland?",
    "options": ["Facial nerve", "Retromandibular vein", "External carotid artery", "Lingual nerve"],
    "answer": "Lingual nerve"
  },
  {
    "question": "Which of these is NOT true about the cavernous sinus?",
    "options": ["It contains the internal carotid artery", "It is drained by the superior ophthalmic vein", "The maxillary nerve passes through it", "It communicates with the pterygoid venous plexus"],
    "answer": "The maxillary nerve passes through it"
  },
  {
    "question": "Which muscle is NOT supplied by the hypoglossal nerve?",
    "options": ["Styloglossus", "Hyoglossus", "Genioglossus", "Palatoglossus"],
    "answer": "Palatoglossus"
  },
  {
    "question": "Which of these arteries is NOT a branch of the external carotid artery?",
    "options": ["Facial artery", "Lingual artery", "Superior thyroid artery", "Vertebral artery"],
    "answer": "Vertebral artery"
  },
  {
    "question": "Which cranial nerve does NOT pass through the jugular foramen?",
    "options": ["Glossopharyngeal nerve", "Vagus nerve", "Accessory nerve", "Hypoglossal nerve"],
    "answer": "Hypoglossal nerve"
  },
  {
    "question": "Which of the following is NOT a content of the submandibular triangle?",
    "options": ["Submandibular gland", "Facial artery", "Hypoglossal nerve", "Parotid duct"],
    "answer": "Parotid duct"
  },
  {
    "question": "Which of these bones is NOT involved in forming the orbit?",
    "options": ["Frontal bone", "Maxilla", "Ethmoid bone", "Mandible"],
    "answer": "Mandible"
  },
  {
    "question": "Which of the following is  NOT true about the scalp?",
    "options": ["It is richly vascularized", "It has five layers", "The loose connective tissue layer facilitates infection spread", "The occipital belly of occipitofrontalis is innervated by the facial nerve"],
    "answer": "The occipital belly of occipitofrontalis is innervated by the facial nerve"
  },
  {
    "question": "Which of these is NOT a content of the posterior triangle of the neck?",
    "options": ["Spinal accessory nerve", "External jugular vein", "Subclavian artery", "Inferior thyroid artery"],
    "answer": "Inferior thyroid artery"
  },
  {
    "question": "Which of the following is NOT true about the Circle of Willis?",
    "options": ["It provides collateral circulation", "It includes the basilar artery", "It surrounds the optic chiasm", "It is completed by the anterior and posterior communicating arteries"],
    "answer": "It includes the basilar artery"
  },
  {
    "question": "Which structure is NOT part of the pharyngeal plexus?",
    "options": ["Glossopharyngeal nerve", "Vagus nerve", "Sympathetic fibers", "Hypoglossal nerve"],
    "answer": "Hypoglossal nerve"
  },
  {
    "question": "Which of the following is NOT related to the middle ear cavity?",
    "options": ["Facial nerve", "Chorda tympani", "Tensor tympani muscle", "Inferior alveolar nerve"],
    "answer": "Inferior alveolar nerve"
  },
  {
    "question": "Which muscle is NOT involved in mastication?",
    "options": ["Masseter", "Temporalis", "Buccinator", "Medial pterygoid"],
    "answer": "Buccinator"
  },
  {
    "question": "Which of these is NOT a feature of Bell's palsy?",
    "options": ["Inability to close the eye", "Loss of corneal reflex", "Deviation of the uvula", "Drooping of the mouth"],
    "answer": "Deviation of the uvula"
  },
  {
    "question": "Which artery is NOT involved in the blood supply to the brain?",
    "options": ["Anterior cerebral artery", "Middle cerebral artery", "Basilar artery", "Facial artery"],
    "answer": "Facial artery"
  },
  {
    "question": "Which nerve is  NOT a branch of the mandibular nerve (V3)?",
    "options": ["Auriculotemporal nerve", "Lingual nerve", "Inferior alveolar nerve", "Greater petrosal nerve"],
    "answer": "Greater petrosal nerve"
  },
  {
    "question": "Which of the following is NOT true about the optic chiasm?",
    "options": ["It lies above the sella turcica", "It is where optic nerve fibers decussate", "Lesions here cause bitemporal hemianopia", "It is supplied by the posterior cerebral artery"],
    "answer": "It is supplied by the posterior cerebral artery"
  },
  {
    "question": "Which of the following is NOT a branch of the facial nerve?",
    "options": ["Temporal branch", "Zygomatic branch", "Auricular branch", "Glossopharyngeal branch"],
    "answer": "Glossopharyngeal branch"
  },
  {
    "question": "Which of these is NOT a clinical feature of Horner’s syndrome?",
    "options": ["Ptosis", "Miosis", "Anhidrosis", "Exophthalmos"],
    "answer": "Exophthalmos"
  },
  {
    "question": "Which of these structures does NOT pass through the foramen magnum?",
    "options": ["Medulla oblongata", "Vertebral arteries", "Spinal accessory nerve", "Internal carotid artery"],
    "answer": "Internal carotid artery"
  },
  {
    "question": "Which muscle is NOT innervated by the ansa cervicalis?",
    "options": ["Sternohyoid", "Omohyoid", "Sternothyroid", "Thyrohyoid"],
    "answer": "Thyrohyoid"
  },
  {
    "question": "Which of these is NOT a nucleus of the trigeminal nerve?",
    "options": ["Mesencephalic nucleus", "Main sensory nucleus", "Spinal nucleus", "Edinger-Westphal nucleus"],
    "answer": "Edinger-Westphal nucleus"
  },
  {
    "question": "Which artery is NOT a branch of the subclavian artery?",
    "options": ["Vertebral artery", "Internal thoracic artery", "Thyrocervical trunk", "Facial artery"],
    "answer": "Facial artery"
  },
  {
    "question": "Which of these is  NOT true about the hypoglossal nerve?",
    "options": ["It supplies all intrinsic tongue muscles", "It supplies the genioglossus", "It passes through the hypoglossal canal", "It has sensory fibers"],
    "answer": "It has sensory fibers"
  },
  {
    "question": "Which of these is NOT a branch of the maxillary artery?",
    "options": ["Middle meningeal artery", "Inferior alveolar artery", "Infraorbital artery", "Superior thyroid artery"],
    "answer": "Superior thyroid artery"
  },
  {
    "question": "Which cranial nerve is  NOT involved in taste sensation?",
    "options": ["Facial nerve", "Glossopharyngeal nerve", "Vagus nerve", "Hypoglossal nerve"],
    "answer": "Hypoglossal nerve"
  },
  {
    "question": "Which of the following is NOT part of the orbit?",
    "options": ["Superior orbital fissure", "Optic canal", "Foramen spinosum", "Inferior orbital fissure"],
    "answer": "Foramen spinosum"
  },
  {
    "question": "Which of these is NOT a branch of the cervical plexus?",
    "options": ["Phrenic nerve", "Lesser occipital nerve", "Supraclavicular nerves", "Auriculotemporal nerve"],
    "answer": "Auriculotemporal nerve"
  },
  {
    "question": "Which of these structures does NOT pass through the superior orbital fissure?",
    "options": ["Oculomotor nerve", "Trochlear nerve", "Optic nerve", "Abducens nerve"],
    "answer": "Optic nerve"
  },
  {
    "question": "Which of these is NOT true about cerebrospinal fluid (CSF)?",
    "options": ["It is produced by the choroid plexus", "It is absorbed by arachnoid granulations", "It circulates in the subarachnoid space", "It directly nourishes neurons"],
    "answer": "It directly nourishes neurons"
  },
  {
    "question": "Which nerve is NOT involved in the corneal reflex?",
    "options": ["Facial nerve", "Trigeminal nerve", "Optic nerve", "Oculomotor nerve"],
    "answer": "Optic nerve"
  },
  {
    "question": "Which of these is NOT a branch of the vagus nerve?",
    "options": ["Auricular branch", "Pharyngeal branch", "Recurrent laryngeal nerve", "Hypoglossal nerve"],
    "answer": "Hypoglossal nerve"
  },
  {
    "question": "Which of the following is NOT true about the middle meningeal artery?",
    "options": ["It is a branch of the maxillary artery", "It enters the skull through the foramen spinosum", "It supplies the meninges", "It is a branch of the vertebral artery"],
    "answer": "It is a branch of the vertebral artery"
  },
  {
    "question": "Which of these is NOT a feature of an epidural hematoma?",
    "options": ["Biconvex shape on CT", "Middle meningeal artery rupture", "Venous bleeding", "Rapid onset of symptoms"],
    "answer": "Venous bleeding"
  },
  {
    "question": "Which cranial nerve does NOT pass through the internal acoustic meatus?",
    "options": ["Facial nerve", "Vestibulocochlear nerve", "Glossopharyngeal nerve", "None of the above"],
    "answer": "Glossopharyngeal nerve"
  },
  {
    "question": "Which of these is NOT a content of the carotid sheath?",
    "options": ["Common carotid artery", "Internal jugular vein", "Vagus nerve", "Phrenic nerve"],
    "answer": "Phrenic nerve"
  },
  {
    "question": "Which of the following is NOT part of the temporomandibular joint?",
    "options": ["Articular disc", "Synovial membrane", "Sphenomandibular ligament", "Stylomandibular ligament"],
    "answer": "Stylomandibular ligament"
  },
  {
    "question": "Which of these is NOT a clinical feature of raised intracranial pressure?",
    "options": ["Papilledema", "Headache", "Vomiting", "Hyperreflexia"],
    "answer": "Hyperreflexia"
  },
  {
    "question": "Which nerve is  NOT a content of the superior orbital fissure?",
    "options": ["Oculomotor nerve", "Trochlear nerve", "Abducens nerve", "Optic nerve"],
    "answer": "Optic nerve"
  },
  {
    "question": "Which structure is NOT involved in the auditory pathway?",
    "options": ["Cochlear nuclei", "Lateral lemniscus", "Superior olivary complex", "Dentate nucleus"],
    "answer": "Dentate nucleus"
  },
  {
    "question": "Which of these is  NOT a branch of the ophthalmic nerve (V1)?",
    "options": ["Frontal nerve", "Lacrimal nerve", "Nasociliary nerve", "Inferior alveolar nerve"],
    "answer": "Inferior alveolar nerve"
  },
  {
    "question": "Which of the following is NOT a feature of the jugular foramen?",
    "options": ["Passage of cranial nerve IX", "Passage of cranial nerve X", "Passage of cranial nerve XI", "Passage of cranial nerve VII"],
    "answer": "Passage of cranial nerve VII"
  },
  {
    "question": "Which of these is  NOT part of the diencephalon?",
    "options": ["Thalamus", "Hypothalamus", "Epithalamus", "Midbrain"],
    "answer": "Midbrain"
  },
  {
    "question": "Which of these is NOT true about the facial nerve?",
    "options": ["It innervates the stapedius muscle", "It carries taste sensation from the anterior two-thirds of the tongue", "It provides motor innervation to the parotid gland", "It exits the skull via the stylomastoid foramen"],
    "answer": "It provides motor innervation to the parotid gland"
  },
  {
    "question": "Which of the following is NOT NOT true regarding the sensory innervation of the tympanic membrane?",
    "options": [
      "The external surface is innervated by the auriculotemporal nerve.",
      "The external surface is innervated by the vagus nerve.",
      "The internal surface is innervated by the glossopharyngeal nerve.",
      "The internal surface is innervated by the facial nerve."
    ],
    "answer": "The internal surface is innervated by the facial nerve."
  },
  {
    "question": "A patient has a lesion in the nucleus ambiguus. Which of the following is the LEAST likely clinical finding?",
    "options": [
      "Dysphagia",
      "Dysarthria",
      "Ipsilateral deviation of the uvula",
      "Loss of the gag reflex"
    ],
    "answer": "Ipsilateral deviation of the uvula"
  },
  {
    "question": "A lesion of the left abducens nerve causes which of the following?",
    "options": [
      "Medial deviation of the left eye",
      "Inability to adduct the right eye",
      "Ptosis of the left eye",
      "Loss of accommodation in the left eye"
    ],
    "answer": "Medial deviation of the left eye"
  },
  {
    "question": "Which of the following is NOT NOT true about the venous drainage of the brain?",
    "options": [
      "The cavernous sinus drains into the superior petrosal sinus.",
      "The superior sagittal sinus drains into the transverse sinus.",
      "The sigmoid sinus exits the skull as the internal jugular vein.",
      "The basilar venous plexus drains into the vertebral veins exclusively."
    ],
    "answer": "The basilar venous plexus drains into the vertebral veins exclusively."
  },
  {
    "question": "Which of the following arteries is MOST likely to be involved in an epidural hematoma?",
    "options": [
      "Anterior cerebral artery",
      "Middle meningeal artery",
      "Posterior cerebral artery",
      "Basilar artery"
    ],
    "answer": "Middle meningeal artery"
  },
  {
    "question": "Which of these is NOT a branch of the thyrocervical trunk?",
    "options": [
      "Inferior thyroid artery",
      "Suprascapular artery",
      "Ascending cervical artery",
      "Vertebral artery"
    ],
    "answer": "Vertebral artery"
  },
  {
    "question": "Which of the following is NOT NOT true regarding the innervation of the pharyngeal constrictor muscles?",
    "options": [
      "The vagus nerve innervates all constrictors except the stylopharyngeus.",
      "The superior constrictor muscle is innervated by the pharyngeal plexus.",
      "The middle constrictor muscle is innervated by the glossopharyngeal nerve.",
      "The inferior constrictor is partially innervated by the external laryngeal nerve."
    ],
    "answer": "The middle constrictor muscle is innervated by the glossopharyngeal nerve."
  },
  {
    "question": "A tumor compressing the jugular foramen will most likely result in all EXCEPT:",
    "options": [
      "Loss of sensation over the posterior one-third of the tongue",
      "Deviation of the uvula away from the lesion",
      "Loss of parasympathetic innervation to the parotid gland",
      "Ipsilateral tongue deviation"
    ],
    "answer": "Ipsilateral tongue deviation"
  },
  {
    "question": "Which of these is NOT NOT true regarding the course of the hypoglossal nerve?",
    "options": [
      "It passes deep to the posterior belly of the digastric muscle.",
      "It supplies motor innervation to the genioglossus muscle.",
      "It courses superficial to the hyoglossus muscle.",
      "It provides sensory innervation to the posterior tongue."
    ],
    "answer": "It provides sensory innervation to the posterior tongue."
  },
  {
    "question": "Which of the following findings would MOST likely occur in a patient with damage to the facial colliculus?",
    "options": [
      "Ipsilateral facial paralysis",
      "Contralateral loss of pain and temperature",
      "Inability to abduct the eye",
      "Loss of taste from the posterior one-third of the tongue"
    ],
    "answer": "Ipsilateral facial paralysis"
  },
  {
    "question": "Which of the following is NOT NOT true about the parasympathetic innervation of the parotid gland?",
    "options": [
      "It is mediated by the glossopharyngeal nerve.",
      "The otic ganglion is involved in this pathway.",
      "The auriculotemporal nerve carries postganglionic fibers.",
      "It is mediated directly by the facial nerve."
    ],
    "answer": "It is mediated directly by the facial nerve."
  },
  {
    "question": "Damage to which of the following nerves will result in the inability to elevate the pharynx during swallowing?",
    "options": [
      "Glossopharyngeal nerve",
      "Vagus nerve",
      "Hypoglossal nerve",
      "Facial nerve"
    ],
    "answer": "Glossopharyngeal nerve"
  },
  {
    "question": "A patient presents with ptosis, miosis, and anhidrosis. Which of the following structures is MOST likely damaged?",
    "options": [
      "Cervical sympathetic chain",
      "Superior cervical ganglion",
      "Oculomotor nerve",
      "Edinger-Westphal nucleus"
    ],
    "answer": "Superior cervical ganglion"
  },
  {
    "question": "Which of the following is NOT NOT true about the blood supply to the larynx?",
    "options": [
      "The superior laryngeal artery is a branch of the superior thyroid artery.",
      "The inferior laryngeal artery is a branch of the inferior thyroid artery.",
      "Both arteries are branches of the external carotid artery.",
      "They anastomose at the midline."
    ],
    "answer": "Both arteries are branches of the external carotid artery."
  },
  {
    "question": "Which of the following is the LEAST likely result of a lesion to the vagus nerve?",
    "options": [
      "Hoarseness",
      "Loss of gag reflex",
      "Deviation of the tongue toward the side of the lesion",
      "Dysphagia"
    ],
    "answer": "Deviation of the tongue toward the side of the lesion"
  },
  {
    "question": "A patient with an internal carotid artery aneurysm in the cavernous sinus would MOST likely exhibit which symptom?",
    "options": [
      "Ptosis",
      "Inability to abduct the eye",
      "Loss of corneal reflex",
      "Loss of vision"
    ],
    "answer": "Inability to abduct the eye"
  },
  {
    "question": "Which of these is NOT NOT true about the course of the accessory nerve?",
    "options": [
      "It enters the skull through the foramen magnum.",
      "It exits the skull through the jugular foramen.",
      "It innervates the sternocleidomastoid and trapezius muscles.",
      "It carries parasympathetic fibers to the thorax."
    ],
    "answer": "It carries parasympathetic fibers to the thorax."
  },
  {
    "question": "Which of the following structures is LEAST likely to be affected by a tumor compressing the hypoglossal canal?",
    "options": [
      "Genioglossus muscle",
      "Hyoglossus muscle",
      "Palatoglossus muscle",
      "Intrinsic muscles of the tongue"
    ],
    "answer": "Palatoglossus muscle"
  },
  {
    "question": "Which of the following arteries does NOT NOT contribute to Kiesselbach's plexus?",
    "options": [
      "Sphenopalatine artery",
      "Greater palatine artery",
      "Superior labial artery",
      "Posterior ethmoidal artery"
    ],
    "answer": "Posterior ethmoidal artery"
  },
  {
    "question": "A patient with an aneurysm compressing the posterior cerebral artery would MOST likely exhibit which deficit?",
    "options": [
      "Contralateral homonymous hemianopia",
      "Ipsilateral oculomotor nerve palsy",
      "Loss of sensation in the contralateral face",
      "Contralateral hemiparesis"
    ],
    "answer": "Contralateral homonymous hemianopia"
  },
                { "question": "Which cranial nerve is responsible for vision?", options: ["Optic nerve", "Oculomotor nerve", "Trigeminal nerve", "Facial nerve"], answer: "Optic nerve" },
        { "question": "What is the primary function of the facial nerve?", options: ["Facial expressions", "Vision", "Hearing", "Taste"], answer: "Facial expressions" },
        { "question": "The hyoid bone is located in which part of the body?", options: ["Neck", "Head", "Thorax", "Pelvis"], answer: "Neck" },
        { "question": "Which muscle elevates the mandible?", options: ["Temporalis", "Masseter", "Pterygoid", "Digastric"], answer: "Masseter" },
        { "question": "What is the largest cranial nerve?", options: ["Trigeminal nerve", "Facial nerve", "Vagus nerve", "Glossopharyngeal nerve"], answer: "Trigeminal nerve" },
        { "question": "The primary artery supplying the brain is:", options: ["Carotid artery", "Vertebral artery", "Basilar artery", "All of the above"], answer: "All of the above" },
        { "question": "Which structure separates the anterior and posterior chambers of the eye?", options: ["Lens", "Cornea", "Iris", "Pupil"], answer: "Iris" },
        { "question": "Which cranial nerve controls the muscles of mastication?", options: ["Trigeminal nerve", "Facial nerve", "Vagus nerve", "Accessory nerve"], answer: "Trigeminal nerve" },
        { "question": "The foramen magnum is located in which bone?", options: ["Occipital bone", "Frontal bone", "Temporal bone", "Parietal bone"], answer: "Occipital bone" },
        { "question": "Which cranial nerve is involved in balance and hearing?", options: ["Vestibulocochlear nerve", "Trigeminal nerve", "Facial nerve", "Vagus nerve"], answer: "Vestibulocochlear nerve" },
        { "question": "What is the primary function of the vagus nerve?", options: ["Heart rate regulation", "Taste sensation", "Facial expression", "Vision"], answer: "Heart rate regulation" },
        { "question" : "Which sinus drains into the nasal cavity?", options: ["Maxillary sinus", "Frontal sinus", "Sphenoidal sinus", "All of the above"], answer: "All of the above" },
   
  {
    question: "A patient presents with difficulty swallowing and a hoarse voice following thyroid surgery. Which nerve is most likely injured?",
    options: [
      "External branch of superior laryngeal nerve",
      "Recurrent laryngeal nerve",
      "Glossopharyngeal nerve",
      "Hypoglossal nerve"
    ],
    correctAnswer: "Recurrent laryngeal nerve"
  },
  {
    question: "The danger area of the face communicates with the cavernous sinus through which venous structure?",
    options: [
      "Angular vein",
      "Pterygoid venous plexus",
      "Deep facial vein",
      "Superior ophthalmic vein"
    ],
    correctAnswer: "Superior ophthalmic vein"
  },
  {
    question: "Which muscle of the pharynx is not innervated by the vagus nerve?",
    options: [
      "Superior constrictor",
      "Middle constrictor",
      "Stylopharyngeus",
      "Inferior constrictor"
    ],
    correctAnswer: "Stylopharyngeus"
  },
  {
    question: "A tumor at the jugular foramen is most likely to affect which cranial nerve first?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "Which structure is most vulnerable during a submandibular gland excision?",
    options: [
      "Lingual nerve",
      "Hypoglossal nerve",
      "Marginal mandibular branch of the facial nerve",
      "Inferior alveolar nerve"
    ],
    correctAnswer: "Marginal mandibular branch of the facial nerve"
  },
  {
    question: "A patient is unable to close the eye on one side. Which nerve is most likely affected?",
    options: [
      "Facial nerve (CN VII)",
      "Oculomotor nerve (CN III)",
      "Abducens nerve (CN VI)",
      "Trigeminal nerve (CN V)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "Which nerve provides sensory innervation to the cornea?",
    options: [
      "Ophthalmic division of the trigeminal nerve",
      "Maxillary division of the trigeminal nerve",
      "Facial nerve",
      "Optic nerve"
    ],
    correctAnswer: "Ophthalmic division of the trigeminal nerve"
  },
  {
    question: "A lesion in the cavernous sinus is most likely to affect which cranial nerve first?",
    options: [
      "Abducens nerve (CN VI)",
      "Oculomotor nerve (CN III)",
      "Trochlear nerve (CN IV)",
      "Optic nerve (CN II)"
    ],
    correctAnswer: "Abducens nerve (CN VI)"
  },
  {
    question: "Which structure is responsible for the pupillary light reflex?",
    options: [
      "Oculomotor nerve (CN III)",
      "Optic nerve (CN II)",
      "Facial nerve (CN VII)",
      "Trochlear nerve (CN IV)"
    ],
    correctAnswer: "Oculomotor nerve (CN III)"
  },
  {
    question: "Which muscle of mastication is primarily responsible for opening the jaw?",
    options: [
      "Lateral pterygoid",
      "Medial pterygoid",
      "Temporalis",
      "Masseter"
    ],
    correctAnswer: "Lateral pterygoid"
  },
  {
    question: "A patient presents with loss of sensation over the cheek and upper lip. Which nerve is most likely affected?",
    options: [
      "Maxillary division of the trigeminal nerve",
      "Mandibular division of the trigeminal nerve",
      "Ophthalmic division of the trigeminal nerve",
      "Facial nerve"
    ],
    correctAnswer: "Maxillary division of the trigeminal nerve"
  },
  {
    question: "Which artery is at greatest risk of injury in a pterion fracture?",
    options: [
      "Middle meningeal artery",
      "Anterior cerebral artery",
      "Posterior cerebral artery",
      "Internal carotid artery"
    ],
    correctAnswer: "Middle meningeal artery"
  },
  {
    question: "A lesion of the hypoglossal nerve results in deviation of the tongue toward which side?",
    options: [
      "The affected side",
      "The unaffected side",
      "It does not deviate",
      "Depends on the location of the lesion"
    ],
    correctAnswer: "The affected side"
  },
  {
    question: "Which lymph nodes are the first to receive lymph from the tip of the tongue?",
    options: [
      "Submental nodes",
      "Submandibular nodes",
      "Deep cervical nodes",
      "Pretracheal nodes"
    ],
    correctAnswer: "Submental nodes"
  },
  {
    question: "Which sinus is most commonly involved in sinusitis?",
    options: [
      "Maxillary sinus",
      "Frontal sinus",
      "Sphenoidal sinus",
      "Ethmoidal sinus"
    ],
    correctAnswer: "Maxillary sinus"
  },
  {
    question: "The cribriform plate transmits which cranial nerve?",
    options: [
      "Olfactory nerve (CN I)",
      "Optic nerve (CN II)",
      "Oculomotor nerve (CN III)",
      "Facial nerve (CN VII)"
    ],
    correctAnswer: "Olfactory nerve (CN I)"
  },
  {
    question: "Which nerve passes through the foramen rotundum?",
    options: [
      "Maxillary division of the trigeminal nerve",
      "Mandibular division of the trigeminal nerve",
      "Ophthalmic division of the trigeminal nerve",
      "Facial nerve"
    ],
    correctAnswer: "Maxillary division of the trigeminal nerve"
  },
  {
    question: "What is the chief blood supply of the visual cortex?",
    options: [
      "Posterior cerebral artery",
      "Middle cerebral artery",
      "Anterior cerebral artery",
      "Basilar artery"
    ],
    correctAnswer: "Posterior cerebral artery"
  },
  {
    question: "Which muscle is supplied by the external branch of the superior laryngeal nerve?",
    options: [
      "Cricothyroid",
      "Posterior cricoarytenoid",
      "Lateral cricoarytenoid",
      "Thyroarytenoid"
    ],
    correctAnswer: "Cricothyroid"
  },
  {
    question: "Which cranial nerve is most commonly affected in raised intracranial pressure?",
    options: [
      "Abducens nerve (CN VI)",
      "Oculomotor nerve (CN III)",
      "Trochlear nerve (CN IV)",
      "Optic nerve (CN II)"
    ],
    correctAnswer: "Abducens nerve (CN VI)"
  },
  {
    question: "The stylopharyngeus muscle is supplied by which cranial nerve?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Hypoglossal nerve (CN XII)",
      "Accessory nerve (CN XI)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "A lesion at the internal acoustic meatus would affect which cranial nerves?",
    options: [
      "Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)",
      "Glossopharyngeal nerve (CN IX) and Vagus nerve (CN X)",
      "Trigeminal nerve (CN V) and Facial nerve (CN VII)",
      "Oculomotor nerve (CN III) and Trochlear nerve (CN IV)"
    ],
    correctAnswer: "Facial nerve (CN VII) and Vestibulocochlear nerve (CN VIII)"
  },
  {
    question: "Which cranial nerve passes through the hypoglossal canal?",
    options: [
      "Hypoglossal nerve (CN XII)",
      "Glossopharyngeal nerve (CN IX)",
      "Accessory nerve (CN XI)",
      "Vagus nerve (CN X)"
    ],
    correctAnswer: "Hypoglossal nerve (CN XII)"
  },
  {
    question: "What structure is located in the cavernous sinus?",
    options: [
      "Internal carotid artery",
      "Optic nerve",
      "Superior sagittal sinus",
      "Sigmoid sinus"
    ],
    correctAnswer: "Internal carotid artery"
  },
  {
    question: "A patient has anosmia and a cerebrospinal fluid (CSF) leak. Which structure is most likely damaged?",
    options: [
      "Cribriform plate",
      "Sella turcica",
      "Middle cranial fossa",
      "Ethmoidal sinus"
    ],
    correctAnswer: "Cribriform plate"
  },
  {
    question: "Which cranial nerve provides parasympathetic innervation to the parotid gland?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)",
      "Vagus nerve (CN X)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "Which artery is most commonly affected in an epidural hematoma?",
    options: [
      "Middle meningeal artery",
      "Anterior cerebral artery",
      "Basilar artery",
      "Posterior cerebral artery"
    ],
    correctAnswer: "Middle meningeal artery"
  },
  {
    question: "Which nerve is responsible for motor innervation to the muscles of facial expression?",
    options: [
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)",
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "A lesion of the trochlear nerve results in weakness of which movement?",
    options: [
      "Depression of the eye when adducted",
      "Abduction of the eye",
      "Elevation of the eye",
      "Convergence of the eye"
    ],
    correctAnswer: "Depression of the eye when adducted"
  },
  {
    question: "The retropharyngeal space is clinically significant because:",
    options: [
      "Infections can spread to the mediastinum",
      "It contains the pharyngeal tonsils",
      "It provides venous drainage of the pharynx",
      "It contains the vagus nerve"
    ],
    correctAnswer: "Infections can spread to the mediastinum"
  },
  {
    question: "The spinal accessory nerve (CN XI) supplies which of the following muscles?",
    options: [
      "Sternocleidomastoid and trapezius",
      "Levator scapulae and trapezius",
      "Sternocleidomastoid and scalene",
      "Trapezius and latissimus dorsi"
    ],
    correctAnswer: "Sternocleidomastoid and trapezius"
  },
  {
    question: "The carotid body detects changes in which of the following?",
    options: [
      "Oxygen levels",
      "Carbon dioxide levels",
      "Blood pressure",
      "Heart rate"
    ],
    correctAnswer: "Oxygen levels"
  },
  {
    question: "Which nerve supplies the cricothyroid muscle?",
    options: [
      "External branch of the superior laryngeal nerve",
      "Recurrent laryngeal nerve",
      "Internal branch of the superior laryngeal nerve",
      "Hypoglossal nerve"
    ],
    correctAnswer: "External branch of the superior laryngeal nerve"
  },
  {
    question: "The inferior alveolar nerve is a branch of which cranial nerve?",
    options: [
      "Mandibular division of the trigeminal nerve",
      "Maxillary division of the trigeminal nerve",
      "Ophthalmic division of the trigeminal nerve",
      "Facial nerve"
    ],
    correctAnswer: "Mandibular division of the trigeminal nerve"
  },
  {
    question: "The structure passing through the foramen spinosum is:",
    options: [
      "Middle meningeal artery",
      "Internal carotid artery",
      "Ophthalmic artery",
      "Vertebral artery"
    ],
    correctAnswer: "Middle meningeal artery"
  },
  {
    question: "Which of the following muscles is involved in opening the auditory tube during swallowing?",
    options: [
      "Tensor veli palatini",
      "Levator veli palatini",
      "Palatoglossus",
      "Salpingopharyngeus"
    ],
    correctAnswer: "Tensor veli palatini"
  },
  {
    question: "Damage to the abducens nerve results in:",
    options: [
      "Inability to abduct the eye",
      "Inability to elevate the eye",
      "Inability to constrict the pupil",
      "Inability to depress the eye"
    ],
    correctAnswer: "Inability to abduct the eye"
  },
  {
    question: "Which structure is found in the posterior triangle of the neck?",
    options: [
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)",
      "Facial artery",
      "External carotid artery"
    ],
    correctAnswer: "Accessory nerve (CN XI)"
  },
  {
    question: "Which cranial nerve is responsible for taste sensation from the anterior two-thirds of the tongue?",
    options: [
      "Facial nerve (CN VII)",
      "Glossopharyngeal nerve (CN IX)",
      "Trigeminal nerve (CN V)",
      "Hypoglossal nerve (CN XII)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "Which cranial nerve exits the skull through the stylomastoid foramen?",
    options: [
      "Facial nerve (CN VII)",
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Accessory nerve (CN XI)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "The optic chiasm is located directly above which structure?",
    options: [
      "Pituitary gland",
      "Hypothalamus",
      "Third ventricle",
      "Internal carotid artery"
    ],
    correctAnswer: "Pituitary gland"
  },
  {
    question: "Which nerve innervates the posterior belly of the digastric muscle?",
    options: [
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)",
      "Hypoglossal nerve (CN XII)",
      "Glossopharyngeal nerve (CN IX)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },
  {
    question: "The ligament of Berry is associated with which gland?",
    options: [
      "Thyroid gland",
      "Parotid gland",
      "Submandibular gland",
      "Adrenal gland"
    ],
    correctAnswer: "Thyroid gland"
  },
  {
    question: "Which structure forms the medial wall of the middle ear cavity?",
    options: [
      "Promontory",
      "Tympanic membrane",
      "Malleus",
      "External acoustic meatus"
    ],
    correctAnswer: "Promontory"
  },
  {
    question: "Which cranial nerve is tested by the gag reflex?",
    options: [
      "Glossopharyngeal nerve (CN IX)",
      "Vagus nerve (CN X)",
      "Facial nerve (CN VII)",
      "Trigeminal nerve (CN V)"
    ],
    correctAnswer: "Glossopharyngeal nerve (CN IX)"
  },
  {
    question: "The platysma muscle is supplied by which nerve?",
    options: [
      "Facial nerve (CN VII)",
      "Accessory nerve (CN XI)",
      "Hypoglossal nerve (CN XII)",
      "Mandibular nerve (CN V3)"
    ],
    correctAnswer: "Facial nerve (CN VII)"
  },

      
           { "question": "The temporomandibular joint (TMJ) connects which two bones?", options: ["Temporal and mandible", "Maxilla and mandible", "Frontal and parietal", "Occipital and temporal"], answer: "Temporal and mandible" },
        { "question": "Which part of the brain is responsible for coordination and balance?", options: ["Cerebellum", "Cerebrum", "Brainstem", "Thalamus"], answer: "Cerebellum" },
        { "question": "The cervical plexus primarily innervates which region?", options: ["Neck", "Shoulder", "Arm", "Face"], answer: "Neck" },
        { "question": "What structure protects the brain and spinal cord?", options: ["Meninges", "Cerebrospinal fluid", "Skull", "All of the above"], answer: "All of the above" },
        { "question": "The optic chiasm is formed by the crossing of which nerves?", options: ["Optic nerves", "Oculomotor nerves", "Facial nerves", "Trigeminal nerves"], answer: "Optic nerves" },
        { "question": "Which muscle is primarily responsible for the movement of the eyebrows?", options: ["Frontalis", "Orbicularis oculi", "Zygomaticus major", "Risorius"], answer: "Frontalis" },
        { "question": "The phrenic nerve is primarily responsible for innervating which muscle?", options: ["Diaphragm", "Sternocleidomastoid", "Trapezius", "Scalenes"], answer: "Diaphragm" },
        { "question": "Which cranial nerve is responsible for the sense of smell?", options: ["Olfactory nerve", "Optic nerve", "Trigeminal nerve", "Facial nerve"], answer: "Olfactory nerve" },
        { "question": "What is the primary role of the amygdala?", options: ["Emotion regulation", "Memory processing", "Sensory perception", "Motor control"], answer: "Emotion regulation" },
        { "question": "Which cranial nerve controls the movement of the tongue?", options: ["Hypoglossal nerve", "Glossopharyngeal nerve", "Facial nerve", "Vagus nerve"], answer: "Hypoglossal nerve" },
        { "question": "The carotid arteries branch into which two main arteries?", options: ["Internal and external carotid arteries", "Subclavian and vertebral arteries", "Brachial and radial arteries", "Femoral and popliteal arteries"], answer: "Internal and external carotid arteries" },
        { "question": "Which part of the brain is involved in the processing of visual information?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
        { "question": "Which structure connects the left and right hemispheres of the brain?", options: ["Corpus callosum", "Cerebellum", "Thalamus", "Pons"], answer: "Corpus callosum" },
        { "question": "Which muscle is responsible for neck rotation?", options: ["Sternocleidomastoid", "Trapezius", "Scalenes", "Levator scapulae"], answer: "Sternocleidomastoid" },
        { "question": "The spinal cord is protected by which structure?", options: ["Vertebral column", "Rib cage", "Skull", "Pelvis"], answer: "Vertebral column" },
        { "question": "Which cranial nerve has both sensory and motor functions?", options: ["Trigeminal nerve", "Olfactory nerve", "Optic nerve", "Hypoglossal nerve"], answer: "Trigeminal nerve" },
        { "question": "Which area of the brain is responsible for language comprehension?", options: ["Wernicke's area", "Broca's area", "Motor cortex", "Sensory cortex"], answer: "Wernicke's area" },
        { "question": "The sella turcica is a depression in which bone?", options: ["Sphenoid bone", "Frontal bone", "Occipital bone", "Temporal bone"], answer: "Sphenoid bone" },
        { "question": "Which cranial nerve is responsible for taste sensation in the anterior two-thirds of the tongue?", options: ["Facial nerve", "Glossopharyngeal nerve", "Hypoglossal nerve", "Trigeminal nerve"], answer: "Facial nerve" },
        { "question": "Which of the following structures is part of the larynx?", options: ["Epiglottis", "Thyroid cartilage", "Cricoid cartilage", "All of the above"], answer: "All of the above" },
        { "question": "What is the function of the choroid plexus?", options: ["Produces cerebrospinal fluid", "Regulates blood flow", "Facilitates respiration", "Aids in digestion"], answer: "Produces cerebrospinal fluid" },
        { "question": "The vertebral arteries merge to form which artery?", options: ["Basilar artery", "Carotid artery", "Cerebral artery", "Cerebellar artery"], answer: "Basilar artery" },
        { "question": "Which muscle is responsible for closing the eyelids?", options: ["Orbicularis oculi", "Frontalis", "Zygomaticus", "Buccinator"], answer: "Orbicularis oculi" },
        { "question": "The nasolacrimal duct drains tears into which structure?", options: ["Nasal cavity", "Pharynx", "Throat", "Mouth"], answer: "Nasal cavity" },
        { "question": "What is the role of the cerebellum?", options: ["Motor control and coordination", "Memory processing", "Emotional regulation", "Sensory perception"], answer: "Motor control and coordination" },
        { "question": "Which cranial nerve is responsible for swallowing?", options: ["Vagus nerve", "Glossopharyngeal nerve", "Hypoglossal nerve", "Accessory nerve"], answer: "Glossopharyngeal nerve" },
        { "question": "The internal jugular vein is primarily responsible for draining blood from which area?", options: ["Brain", "Face", "Neck", "All of the above"], answer: "All of the above" },
        { "question": "Which cranial nerve innervates the sternocleidomastoid and trapezius muscles?", options: ["Accessory nerve", "Vagus nerve", "Hypoglossal nerve", "Trigeminal nerve"], answer: "Accessory nerve" },
        { "question": "What is the primary role of the thalamus?", options: ["Relay sensory information", "Regulate emotions", "Control motor functions", "Coordinate balance"], answer: "Relay sensory information" },
        { "question" : "Which cranial nerve controls the muscles of the neck?", options: ["Accessory nerve", "Vagus nerve", "Glossopharyngeal nerve", "Hypoglossal nerve"], answer: "Accessory nerve" },
        { "question" : "Which part of the ear is responsible for hearing?", options: ["Cochlea", "Semicircular canals", "Eustachian tube", "Auricle"], answer: "Cochlea" },
        { "question" : "The optic nerve carries visual information from the retina to which part of the brain?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
        { "question": "Which artery supplies blood to the face?", options: ["Facial artery", "Maxillary artery", "Carotid artery", "All of the above"], answer: "All of the above" },
        { "question": "The epiglottis prevents food from entering which structure?", options: ["Trachea", "Esophagus", "Larynx", "Pharynx"], answer: "Trachea" },
        { "question": "The cervical vertebrae are located in which region of the body?", options: ["Neck", "Thorax", "Lumbar", "Sacral"], answer: "Neck" },
        { "question": "Which cranial nerve is involved in controlling pupil constriction?", options: ["Oculomotor nerve", "Optic nerve", "Trochlear nerve", "Abducens nerve"], answer: "Oculomotor nerve" },

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