// Question bank
const questionBank = [
    { question: "What is the longest bone in the body?", options: ["Femur", "Humerus", "Radius", "Tibia"], answer: "Femur" },
                { question: "Which muscle is responsible for flexion at the elbow?", options: ["Biceps", "Triceps", "Deltoid", "Brachialis"], answer: "Biceps" },
                { question: "Which is the longest bone in the human body?", options: ["Femur", "Humerus", "Radius", "Tibia"], answer: "Femur" },
        { question: "What muscle is primarily responsible for shoulder abduction?", options: ["Deltoid", "Pectoralis Major", "Latissimus Dorsi", "Supraspinatus"], answer: "Deltoid" },
        { question: "What is the primary action of the biceps brachii?", options: ["Extension of the elbow", "Flexion of the elbow", "Pronation of the forearm", "Supination of the forearm"], answer: "Flexion of the elbow" },
        { question: "Which nerve innervates the quadriceps femoris?", options: ["Femoral nerve", "Sciatic nerve", "Obturator nerve", "Tibial nerve"], answer: "Femoral nerve" },
        { question: "What structure connects the femur to the pelvis?", options: ["Acetabulum", "Tendon", "Ligament", "Cartilage"], answer: "Acetabulum" },
        { question: "Which muscle flexes the hip joint?", options: ["Iliopsoas", "Gluteus Maximus", "Rectus Femoris", "Sartorius"], answer: "Iliopsoas" },
        { question: "What is the function of the rotator cuff?", options: ["Stabilizes the shoulder joint", "Allows hip rotation", "Supports the knee joint", "Facilitates wrist movement"], answer: "Stabilizes the shoulder joint" },
    
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
     { question: "Which organ is found in the right upper quadrant of the abdomen?", options: ["Liver", "Stomach", "Spleen", "Pancreas"], answer: "Liver" },
                { question: "The diaphragm is innervated by which nerve?", options: ["Phrenic", "Vagus", "Radial", "Sciatic"], answer: "Phrenic" },
                { question: "Which muscle forms the anterior wall of the abdomen?", options: ["Rectus abdominis", "Transversus abdominis", "Internal oblique", "External oblique"], answer: "Rectus abdominis" },
        { question: "What is the primary function of the diaphragm?", options: ["Breathing", "Digestion", "Circulation", "Excretion"], answer: "Breathing" },
        { question: "Which structure is the central part of the thoracic cavity?", options: ["Mediastinum", "Pleura", "Lungs", "Heart"], answer: "Mediastinum" },
        { question: "The pelvic cavity is bounded inferiorly by which structure?", options: ["Pelvic diaphragm", "Abdominal wall", "Ilium", "Sacrum"], answer: "Pelvic diaphragm" },
        { question: "What is the main arterial supply to the thoracic wall?", options: ["Intercostal arteries", "Subclavian arteries", "Carotid arteries", "Brachial arteries"], answer: "Intercostal arteries" },
        { question: "The primary muscle responsible for inhalation is the:", options: ["Diaphragm", "Intercostal muscles", "Sternocleidomastoid", "Scalenes"], answer: "Diaphragm" },
        { question: "Which organ is located in the right upper quadrant of the abdomen?", options: ["Spleen", "Liver", "Stomach", "Appendix"], answer: "Liver" },
        { question: "The perineum is divided into which two regions?", options: ["Urogenital and anal", "Anterior and posterior", "Superior and inferior", "Left and right"], answer: "Urogenital and anal" },
        { question: "Which of the following structures is NOT part of the mediastinum?", options: ["Heart", "Thymus", "Lungs", "Aorta"], answer: "Lungs" },
        { question: "What is the primary function of the rectus sheath?", options: ["Supports abdominal contents", "Protects thoracic organs", "Facilitates respiration", "Aids in digestion"], answer: "Supports abdominal contents" },
        { question: "Which muscle aids in forced expiration?", options: ["Internal intercostals", "External intercostals", "Serratus anterior", "Pectoralis major"], answer: "Internal intercostals" },
        { question: "Which structure separates the thoracic cavity from the abdominal cavity?", options: ["Diaphragm", "Thoracic duct", "Pleura", "Peritoneum"], answer: "Diaphragm" },
        { question: "The inguinal canal is located in which region of the body?", options: ["Abdomen", "Thorax", "Pelvis", "Perineum"], answer: "Abdomen" },
        { question: "What is the primary action of the external oblique muscle?", options: ["Trunk rotation", "Trunk flexion", "Lateral flexion", "All of the above"], answer: "All of the above" },
        { question: "The pelvic inlet is bounded by which structures?", options: ["Pelvic brim", "Ischial tuberosities", "Pubic symphysis", "Sacrum"], answer: "Pelvic brim" },
        { question: "Which nerve innervates the diaphragm?", options: ["Phrenic nerve", "Vagus nerve", "Intercostal nerves", "Lumbar plexus"], answer: "Phrenic nerve" },
        { question: "The thoracic aorta branches into which major arteries?", options: ["Bronchial arteries", "Intercostal arteries", "Esophageal arteries", "All of the above"], answer: "All of the above" },
        { question: "Which muscle is located in the anterior abdominal wall?", options: ["Transversus abdominis", "Psoas major", "Iliacus", "Quadratus lumborum"], answer: "Transversus abdominis" },
        { question: "What is the largest organ in the abdominal cavity?", options: ["Liver", "Spleen", "Kidney", "Pancreas"], answer: "Liver" },
        { question: "The costal margin is formed by which ribs?", options: ["True ribs", "False ribs", "Floating ribs", "All ribs"], answer: "False ribs" },
        { question: "What is the primary function of the peritoneum?", options: ["Protects abdominal organs", "Facilitates digestion", "Supports thoracic structures", "Regulates respiration"], answer: "Protects abdominal organs" },
        { question: "The gallbladder is located in which quadrant of the abdomen?", options: ["Right upper quadrant", "Left upper quadrant", "Right lower quadrant", "Left lower quadrant"], answer: "Right upper quadrant" },
        { question: "Which structure transports bile from the liver?", options: ["Bile duct", "Hepatic artery", "Cystic duct", "Pancreatic duct"], answer: "Bile duct" },
        { question: "The urethra passes through which part of the perineum?", options: ["Urogenital triangle", "Anal triangle", "Pelvic diaphragm", "Abdominal cavity"], answer: "Urogenital triangle" },
        { question: "Which of the following is a function of the spleen?", options: ["Filters blood", "Stores red blood cells", "Produces lymphocytes", "All of the above"], answer: "All of the above" },
        { question: "The pelvic floor is composed of which muscles?", options: ["Levator ani", "Coccygeus", "Perineal muscles", "All of the above"], answer: "All of the above" },
        { question: "Which artery supplies blood to the abdominal wall?", options: ["Inferior epigastric artery", "Superficial epigastric artery", "Celiac trunk", "Aorta"], answer: "Inferior epigastric artery" },
        { question: "The pubic symphysis is classified as which type of joint?", options: ["Cartilaginous joint", "Synovial joint", "Fibrous joint", "Suture joint"], answer: "Cartilaginous joint" },
        { question: "Which nerve is responsible for the sensation of the perineum?", options: ["Pudendal nerve", "Splanchnic nerve", "Femoral nerve", "Obturator nerve"], answer: "Pudendal nerve" },
        { question: "Which of the following is NOT part of the thoracic cavity?", options: ["Pleura", "Lungs", "Diaphragm", "Kidneys"], answer: "Kidneys" },
        { question: "What is the main action of the rectus abdominis?", options: ["Flexion of the trunk", "Extension of the trunk", "Rotation of the trunk", "Lateral flexion"], answer: "Flexion of the trunk" },
        { question: "Which structure is located posterior to the stomach?", options: ["Spleen", "Liver", "Pancreas", "Kidney"], answer: "Pancreas" },
        { question: "The thoracic duct drains lymph into which vein?", options: ["Subclavian vein", "Jugular vein", "Brachiocephalic vein", "Azygos vein"], answer: "Subclavian vein" },
        { question: "Which muscle helps in forced expiration?", options: ["Transversus thoracis", "Serratus posterior", "External intercostals", "Internal intercostals"], answer: "Internal intercostals" },
        { question: "What is the primary muscle involved in urination?", options: ["Detrusor muscle", "Transversus abdominis", "Sphincter muscle", "Rectus abdominis"], answer: "Detrusor muscle" },
        { question: "The major blood supply to the pelvic region comes from which artery?", options: ["Internal iliac artery", "External iliac artery", "Femoral artery", "Aorta"], answer: "Internal iliac artery" },
        { question: "What is the main function of the pelvic diaphragm?", options: ["Supports pelvic organs", "Facilitates respiration", "Aids in digestion", "Protects thoracic organs"], answer: "Supports pelvic organs" },
        { question: "Which muscle forms the floor of the mouth?", options: ["Digastric", "Mylohyoid", "Sternohyoid", "Geniohyoid"], answer: "Mylohyoid" },
        { question: "The major nerve supply to the abdominal wall is provided by which nerves?", options: ["Thoracoabdominal nerves", "Lumbar nerves", "Sacral nerves", "Cervical nerves"], answer: "Thoracoabdominal nerves" },
        { question: "What is the main function of the liver?", options: ["Detoxification", "Production of bile", "Metabolism", "All of the above"], answer: "All of the above" },
        { question: "Which structure is commonly referred to as the 'voice box'?", options: ["Larynx", "Pharynx", "Trachea", "Esophagus"], answer: "Larynx" },
        { question: "The anterior boundary of the abdomen is formed by which muscles?", options: ["Rectus abdominis", "Internal obliques", "External obliques", "All of the above"], answer: "All of the above" },
        { question: "What is the main arterial supply to the pelvic region?", options: ["Internal iliac artery", "External iliac artery", "Femoral artery", "Aorta"], answer: "Internal iliac artery" },
        { question: "Which muscle is primarily responsible for extension of the spine?", options: ["Erector spinae", "Rectus abdominis", "Psoas major", "Quadratus lumborum"], answer: "Erector spinae" },
        { question: "Which ligament supports the uterus?", options: ["Round ligament", "Suspensory ligament", "Broad ligament", "Ovarian ligament"], answer: "Broad ligament" },
              { question: "Which cranial nerve controls the movement of the tongue?", options: ["Hypoglossal", "Facial", "Vagus", "Accessory"], answer: "Hypoglossal" },
                { question: "The occipital lobe is primarily responsible for which function?", options: ["Vision", "Hearing", "Balance", "Taste"], answer: "Vision" },
                { question: "Which cranial nerve is responsible for vision?", options: ["Optic nerve", "Oculomotor nerve", "Trigeminal nerve", "Facial nerve"], answer: "Optic nerve" },
        { question: "What is the primary function of the facial nerve?", options: ["Facial expressions", "Vision", "Hearing", "Taste"], answer: "Facial expressions" },
        { question: "The hyoid bone is located in which part of the body?", options: ["Neck", "Head", "Thorax", "Pelvis"], answer: "Neck" },
        { question: "Which muscle elevates the mandible?", options: ["Temporalis", "Masseter", "Pterygoid", "Digastric"], answer: "Masseter" },
        { question: "What is the largest cranial nerve?", options: ["Trigeminal nerve", "Facial nerve", "Vagus nerve", "Glossopharyngeal nerve"], answer: "Trigeminal nerve" },
        { question: "The primary artery supplying the brain is:", options: ["Carotid artery", "Vertebral artery", "Basilar artery", "All of the above"], answer: "All of the above" },
        { question: "Which structure separates the anterior and posterior chambers of the eye?", options: ["Lens", "Cornea", "Iris", "Pupil"], answer: "Iris" },
        { question: "Which cranial nerve controls the muscles of mastication?", options: ["Trigeminal nerve", "Facial nerve", "Vagus nerve", "Accessory nerve"], answer: "Trigeminal nerve" },
        { question: "The foramen magnum is located in which bone?", options: ["Occipital bone", "Frontal bone", "Temporal bone", "Parietal bone"], answer: "Occipital bone" },
        { question: "Which cranial nerve is involved in balance and hearing?", options: ["Vestibulocochlear nerve", "Trigeminal nerve", "Facial nerve", "Vagus nerve"], answer: "Vestibulocochlear nerve" },
        { question: "What is the primary function of the vagus nerve?", options: ["Heart rate regulation", "Taste sensation", "Facial expression", "Vision"], answer: "Heart rate regulation" },
        { question: "Which sinus drains into the nasal cavity?", options: ["Maxillary sinus", "Frontal sinus", "Sphenoidal sinus", "All of the above"], answer: "All of the above" },
        { question: "The temporomandibular joint (TMJ) connects which two bones?", options: ["Temporal and mandible", "Maxilla and mandible", "Frontal and parietal", "Occipital and temporal"], answer: "Temporal and mandible" },
        { question: "Which part of the brain is responsible for coordination and balance?", options: ["Cerebellum", "Cerebrum", "Brainstem", "Thalamus"], answer: "Cerebellum" },
        { question: "The cervical plexus primarily innervates which region?", options: ["Neck", "Shoulder", "Arm", "Face"], answer: "Neck" },
        { question: "What structure protects the brain and spinal cord?", options: ["Meninges", "Cerebrospinal fluid", "Skull", "All of the above"], answer: "All of the above" },
        { question: "The optic chiasm is formed by the crossing of which nerves?", options: ["Optic nerves", "Oculomotor nerves", "Facial nerves", "Trigeminal nerves"], answer: "Optic nerves" },
        { question: "Which muscle is primarily responsible for the movement of the eyebrows?", options: ["Frontalis", "Orbicularis oculi", "Zygomaticus major", "Risorius"], answer: "Frontalis" },
        { question: "The phrenic nerve is primarily responsible for innervating which muscle?", options: ["Diaphragm", "Sternocleidomastoid", "Trapezius", "Scalenes"], answer: "Diaphragm" },
        { question: "Which cranial nerve is responsible for the sense of smell?", options: ["Olfactory nerve", "Optic nerve", "Trigeminal nerve", "Facial nerve"], answer: "Olfactory nerve" },
        { question: "What is the primary role of the amygdala?", options: ["Emotion regulation", "Memory processing", "Sensory perception", "Motor control"], answer: "Emotion regulation" },
        { question: "Which cranial nerve controls the movement of the tongue?", options: ["Hypoglossal nerve", "Glossopharyngeal nerve", "Facial nerve", "Vagus nerve"], answer: "Hypoglossal nerve" },
        { question: "The carotid arteries branch into which two main arteries?", options: ["Internal and external carotid arteries", "Subclavian and vertebral arteries", "Brachial and radial arteries", "Femoral and popliteal arteries"], answer: "Internal and external carotid arteries" },
        { question: "Which part of the brain is involved in the processing of visual information?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
        { question: "Which structure connects the left and right hemispheres of the brain?", options: ["Corpus callosum", "Cerebellum", "Thalamus", "Pons"], answer: "Corpus callosum" },
        { question: "Which muscle is responsible for neck rotation?", options: ["Sternocleidomastoid", "Trapezius", "Scalenes", "Levator scapulae"], answer: "Sternocleidomastoid" },
        { question: "The spinal cord is protected by which structure?", options: ["Vertebral column", "Rib cage", "Skull", "Pelvis"], answer: "Vertebral column" },
        { question: "Which cranial nerve has both sensory and motor functions?", options: ["Trigeminal nerve", "Olfactory nerve", "Optic nerve", "Hypoglossal nerve"], answer: "Trigeminal nerve" },
        { question: "Which area of the brain is responsible for language comprehension?", options: ["Wernicke's area", "Broca's area", "Motor cortex", "Sensory cortex"], answer: "Wernicke's area" },
        { question: "The sella turcica is a depression in which bone?", options: ["Sphenoid bone", "Frontal bone", "Occipital bone", "Temporal bone"], answer: "Sphenoid bone" },
        { question: "Which cranial nerve is responsible for taste sensation in the anterior two-thirds of the tongue?", options: ["Facial nerve", "Glossopharyngeal nerve", "Hypoglossal nerve", "Trigeminal nerve"], answer: "Facial nerve" },
        { question: "Which of the following structures is part of the larynx?", options: ["Epiglottis", "Thyroid cartilage", "Cricoid cartilage", "All of the above"], answer: "All of the above" },
        { question: "What is the function of the choroid plexus?", options: ["Produces cerebrospinal fluid", "Regulates blood flow", "Facilitates respiration", "Aids in digestion"], answer: "Produces cerebrospinal fluid" },
        { question: "The vertebral arteries merge to form which artery?", options: ["Basilar artery", "Carotid artery", "Cerebral artery", "Cerebellar artery"], answer: "Basilar artery" },
        { question: "Which muscle is responsible for closing the eyelids?", options: ["Orbicularis oculi", "Frontalis", "Zygomaticus", "Buccinator"], answer: "Orbicularis oculi" },
        { question: "The nasolacrimal duct drains tears into which structure?", options: ["Nasal cavity", "Pharynx", "Throat", "Mouth"], answer: "Nasal cavity" },
        { question: "What is the role of the cerebellum?", options: ["Motor control and coordination", "Memory processing", "Emotional regulation", "Sensory perception"], answer: "Motor control and coordination" },
        { question: "Which cranial nerve is responsible for swallowing?", options: ["Vagus nerve", "Glossopharyngeal nerve", "Hypoglossal nerve", "Accessory nerve"], answer: "Glossopharyngeal nerve" },
        { question: "The internal jugular vein is primarily responsible for draining blood from which area?", options: ["Brain", "Face", "Neck", "All of the above"], answer: "All of the above" },
        { question: "Which cranial nerve innervates the sternocleidomastoid and trapezius muscles?", options: ["Accessory nerve", "Vagus nerve", "Hypoglossal nerve", "Trigeminal nerve"], answer: "Accessory nerve" },
        { question: "What is the primary role of the thalamus?", options: ["Relay sensory information", "Regulate emotions", "Control motor functions", "Coordinate balance"], answer: "Relay sensory information" },
        { question: "Which cranial nerve controls the muscles of the neck?", options: ["Accessory nerve", "Vagus nerve", "Glossopharyngeal nerve", "Hypoglossal nerve"], answer: "Accessory nerve" },
        { question: "Which part of the ear is responsible for hearing?", options: ["Cochlea", "Semicircular canals", "Eustachian tube", "Auricle"], answer: "Cochlea" },
        { question: "The optic nerve carries visual information from the retina to which part of the brain?", options: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"], answer: "Occipital lobe" },
        { question: "Which artery supplies blood to the face?", options: ["Facial artery", "Maxillary artery", "Carotid artery", "All of the above"], answer: "All of the above" },
        { question: "The epiglottis prevents food from entering which structure?", options: ["Trachea", "Esophagus", "Larynx", "Pharynx"], answer: "Trachea" },
        { question: "The cervical vertebrae are located in which region of the body?", options: ["Neck", "Thorax", "Lumbar", "Sacral"], answer: "Neck" },
        { question: "Which cranial nerve is involved in controlling pupil constriction?", options: ["Oculomotor nerve", "Optic nerve", "Trochlear nerve", "Abducens nerve"], answer: "Oculomotor nerve" },
                { question: "Which structure forms the placenta?", options: ["Chorion", "Amnion", "Allantois", "Yolk sac"], answer: "Chorion" },
                { question: "Which layer of the embryo gives rise to the nervous system?", options: ["Ectoderm", "Mesoderm", "Endoderm", "Trophoblast"], answer: "Ectoderm" },
                { question: "Which structure forms the basis for the development of all organs?", options: ["Germ layers", "Somites", "Mesoderm", "Ectoderm"], answer: "Germ layers" },
        { question: "The three primary germ layers are formed during which stage of development?", options: ["Gastrulation", "Neurulation", "Fertilization", "Cleavage"], answer: "Gastrulation" },
        { question: "Which layer gives rise to the nervous system?", options: ["Ectoderm", "Mesoderm", "Endoderm", "All of the above"], answer: "Ectoderm" },
        { question: "The development of the heart begins in which week of embryonic development?", options: ["Third week", "Fifth week", "Seventh week", "Ninth week"], answer: "Third week" },
        { question: "What is the name of the structure that eventually becomes the umbilical cord?", options: ["Allantois", "Yolk sac", "Chorion", "Amnion"], answer: "Allantois" },
        { question: "Which organ system is primarily derived from the mesoderm?", options: ["Musculoskeletal system", "Respiratory system", "Digestive system", "Nervous system"], answer: "Musculoskeletal system" },
        { question: "Which stage of embryonic development is characterized by the formation of the blastocyst?", options: ["Fertilization", "Cleavage", "Gastrulation", "Neurulation"], answer: "Cleavage" },
        { question: "What is the main function of the yolk sac?", options: ["Nutrient supply", "Gas exchange", "Waste removal", "Hormone production"], answer: "Nutrient supply" },
        { question: "The neural tube develops into which structures?", options: ["Spinal cord and brain", "Heart and blood vessels", "Lungs and trachea", "Kidneys and ureters"], answer: "Spinal cord and brain" },
        { question: "Which embryonic structure is responsible for forming the placenta?", options: ["Chorion", "Amnion", "Yolk sac", "Allantois"], answer: "Chorion" },
        { question: "Which process describes the formation of specialized cells from stem cells?", options: ["Differentiation", "Migration", "Proliferation", "Apoptosis"], answer: "Differentiation" },
        { question: "The limb buds begin to appear during which week of gestation?", options: ["4th week", "6th week", "8th week", "10th week"], answer: "4th week" },
        { question: "Which type of tissue is characterized by a matrix of fibers and ground substance?", options: ["Epithelial", "Muscle", "Connective", "Nervous"], answer: "Connective" },
        { question: "The main cell type found in nervous tissue is:", options: ["Neurons", "Fibroblasts", "Adipocytes", "Chondrocytes"], answer: "Neurons" },
        { question: "What type of epithelial tissue is specialized for absorption?", options: ["Simple cuboidal", "Simple columnar", "Stratified squamous", "Pseudostratified columnar"], answer: "Simple columnar" },
        { question: "The primary function of keratinocytes in the skin is:", options: ["Protection", "Sensation", "Secretion", "Absorption"], answer: "Protection" },
        { question: "Which type of connective tissue stores fat?", options: ["Adipose tissue", "Cartilage", "Bone", "Blood"], answer: "Adipose tissue" },
        { question: "Hematopoiesis primarily occurs in which tissue?", options: ["Bone marrow", "Liver", "Spleen", "Thymus"], answer: "Bone marrow" },
        { question: "The primary function of collagen in connective tissue is:", options: ["Support and strength", "Elasticity", "Transport", "Secretion"], answer: "Support and strength" },
        { question: "What type of muscle tissue is under voluntary control?", options: ["Skeletal muscle", "Cardiac muscle", "Smooth muscle", "All of the above"], answer: "Skeletal muscle" },
        { question: "Which type of epithelium is found lining the respiratory tract?", options: ["Pseudostratified columnar epithelium", "Simple cuboidal epithelium", "Stratified squamous epithelium", "Simple squamous epithelium"], answer: "Pseudostratified columnar epithelium" },
        { question: "What is the primary component of the extracellular matrix in connective tissue?", options: ["Collagen fibers", "Elastic fibers", "Ground substance", "All of the above"], answer: "All of the above" },
        { question: "Which cells are responsible for the formation of myelin in the central nervous system?", options: ["Oligodendrocytes", "Schwann cells", "Astrocytes", "Microglia"], answer: "Oligodendrocytes" },
        { question: "Which part of the brain is responsible for the regulation of temperature?", options: ["Hypothalamus", "Thalamus", "Cerebellum", "Cerebrum"], answer: "Hypothalamus" },
        { question: "Which type of connective tissue is responsible for connecting muscles to bones?", options: ["Tendons", "Ligaments", "Cartilage", "Adipose tissue"], answer: "Tendons" },
        { question: "The embryonic phase of development is characterized by which main process?", options: ["Rapid cell division", "Maturation of organs", "Differentiation of tissues", "All of the above"], answer: "Rapid cell division" },
        { question: "Which embryonic layer gives rise to the lining of the gastrointestinal tract?", options: ["Endoderm", "Mesoderm", "Ectoderm", "None of the above"], answer: "Endoderm" },
        { question: "The dermis is primarily composed of which type of tissue?", options: ["Connective tissue", "Epithelial tissue", "Nervous tissue", "Muscle tissue"], answer: "Connective tissue" },
        { question: "What type of cartilage is found in the intervertebral discs?", options: ["Fibrocartilage", "Elastic cartilage", "Hyaline cartilage", "None of the above"], answer: "Fibrocartilage" },
        { question: "Which type of epithelial tissue is specialized for diffusion?", options: ["Simple squamous epithelium", "Stratified squamous epithelium", "Cuboidal epithelium", "Columnar epithelium"], answer: "Simple squamous epithelium" },
        { question: "What is the primary function of adipose tissue?", options: ["Energy storage", "Insulation", "Cushioning", "All of the above"], answer: "All of the above" },
        { question: "The stratum corneum is found in which layer of the skin?", options: ["Epidermis", "Dermis", "Hypodermis", "None of the above"], answer: "Epidermis" },
        { question: "Which structure in the eye is responsible for refracting light?", options: ["Lens", "Cornea", "Retina", "Iris"], answer: "Cornea" },
        { question: "What is the primary purpose of the basement membrane?", options: ["Support and anchorage for epithelium", "Protection", "Secretion", "Absorption"], answer: "Support and anchorage for epithelium" },
        { question: "Which type of connective tissue is characterized by a gel-like matrix?", options: ["Loose connective tissue", "Dense connective tissue", "Adipose tissue", "Bone"], answer: "Loose connective tissue" },
        { question: "Which layer of the skin contains blood vessels and nerves?", options: ["Dermis", "Epidermis", "Hypodermis", "All of the above"], answer: "Dermis" },
        { question: "Which embryonic structure is responsible for the formation of blood vessels?", options: ["Mesoderm", "Ectoderm", "Endoderm", "Somites"], answer: "Mesoderm" },
        { question: "The primary type of cell found in cartilage is:", options: ["Chondrocytes", "Osteocytes", "Adipocytes", "Fibroblasts"], answer: "Chondrocytes" },
        { question: "What is the primary function of stratified squamous epithelium?", options: ["Protection", "Absorption", "Secretion", "Filtration"], answer: "Protection" },
        { question: "Which structure in the brain is primarily responsible for memory?", options: ["Hippocampus", "Amygdala", "Thalamus", "Cerebellum"], answer: "Hippocampus" },
        { question: "The embryonic disc consists of which two layers?", options: ["Epiblast and hypoblast", "Endoderm and ectoderm", "Mesoderm and ectoderm", "None of the above"], answer: "Epiblast and hypoblast" },
        { question: "What type of epithelial tissue lines the urinary bladder?", options: ["Transitional epithelium", "Simple squamous epithelium", "Stratified cuboidal epithelium", "Pseudostratified columnar epithelium"], answer: "Transitional epithelium" },
        { question: "Which component of blood is primarily responsible for oxygen transport?", options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], answer: "Red blood cells" },
        { question: "What is the primary function of the synovial membrane?", options: ["Secrete synovial fluid", "Provide structure", "Support nerves", "Absorb nutrients"], answer: "Secrete synovial fluid" },
        { question: "The primary function of the peritoneum is:", options: ["To line the abdominal cavity", "To protect the heart", "To enclose the lungs", "To separate the brain"], answer: "To line the abdominal cavity" },
        { question: "Which type of connective tissue provides strength and support to organs?", options: ["Dense regular connective tissue", "Loose connective tissue", "Adipose tissue", "Reticular connective tissue"], answer: "Dense regular connective tissue" },
        { question: "Which organelle is responsible for protein synthesis in a cell?", options: ["Ribosome", "Mitochondria", "Lysosome", "Endoplasmic reticulum"], answer: "Ribosome" },
        { question: "Which type of epithelium is found in the lining of the digestive tract?", options: ["Simple columnar epithelium", "Simple cuboidal epithelium", "Stratified squamous epithelium", "Pseudostratified columnar epithelium"], answer: "Simple columnar epithelium" },
        { question: "Which structure in the female reproductive system is responsible for the production of eggs?", options: ["Ovaries", "Uterus", "Fallopian tubes", "Vagina"], answer: "Ovaries" },
        { question: "Which cell type is responsible for the production of antibodies?", options: ["B lymphocytes", "T lymphocytes", "Macrophages", "Neutrophils"], answer: "B lymphocytes" },
        { question: "Which type of connective tissue connects bones to bones?", options: ["Ligaments", "Tendons", "Cartilage", "Adipose tissue"], answer: "Ligaments" },
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
 "mightdeletelater": new Date("2024-12-07T23:59:59").getTime(), // Custom expiration date and time
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