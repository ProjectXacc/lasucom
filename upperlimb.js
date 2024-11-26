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
      
    { 
        "question": "Which bone is found in the upper arm?", 
        "options": ["Humerus", "Femur", "Radius", "Tibia"], 
        "answer": "Humerus" 
    },
    { 
        "question": "What is the primary action of the biceps brachii muscle?", 
        "options": ["Flexion of the forearm", "Extension of the forearm", "Rotation of the shoulder", "Abduction of the arm"], 
        "answer": "Flexion of the forearm" 
    },
    { 
        "question": "Which nerve might be injured in a patient presenting with difficulty in extending the wrist, following a mid-shaft humeral fracture?", 
        "options": ["Radial nerve", "Ulnar nerve", "Median nerve", "Axillary nerve"], 
        "answer": "Radial nerve" 
    },
    { 
        "question": "A patient reports numbness over the lateral part of their forearm after a deep cut near the elbow. Which nerve is likely affected?", 
        "options": ["Musculocutaneous nerve", "Median nerve", "Ulnar nerve", "Radial nerve"], 
        "answer": "Musculocutaneous nerve" 
    },
    { 
        "question": "A construction worker presents with weakened hand grip and numbness in the pinky finger. Which nerve is most likely affected?", 
        "options": ["Ulnar nerve", "Radial nerve", "Median nerve", "Axillary nerve"], 
        "answer": "Ulnar nerve" 
    },
    { 
        "question": "In a posterior hip dislocation, which structure is most at risk of injury?", 
        "options": ["Sciatic nerve", "Femoral artery", "Obturator nerve", "Popliteal artery"], 
        "answer": "Sciatic nerve" 
    },
    { 
        "question": "Which muscle group is most likely to atrophy in carpal tunnel syndrome?", 
        "options": ["Thenar muscles", "Hypothenar muscles", "Forearm extensors", "Brachialis"], 
        "answer": "Thenar muscles" 
    },
    { 
        "question": "A patient suffers a laceration on the medial side of the wrist and has difficulty with finger abduction. Which nerve is likely damaged?", 
        "options": ["Ulnar nerve", "Median nerve", "Radial nerve", "Axillary nerve"], 
        "answer": "Ulnar nerve" 
    },
    { 
        "question": "A 35-year-old runner presents with pain at the anterior knee, especially when climbing stairs. Which structure is most likely involved?", 
        "options": ["Patellar tendon", "Anterior cruciate ligament", "Medial meniscus", "Lateral collateral ligament"], 
        "answer": "Patellar tendon" 
    },
    { 
        "question": "A soccer player complains of swelling and bruising along the outside of their ankle. Which ligament is most likely injured?", 
        "options": ["Anterior talofibular ligament", "Deltoid ligament", "Calcaneofibular ligament", "Posterior talofibular ligament"], 
        "answer": "Anterior talofibular ligament" 
    },
    { 
        "question": "A patient with wrist drop is unable to extend the wrist or fingers. Which nerve is likely injured?", 
        "options": ["Radial nerve", "Median nerve", "Ulnar nerve", "Musculocutaneous nerve"], 
        "answer": "Radial nerve" 
    },
    { 
        "question": "During a knee examination, you find a positive Lachman's test. Which structure is likely damaged?", 
        "options": ["Anterior cruciate ligament", "Posterior cruciate ligament", "Medial meniscus", "Lateral meniscus"], 
        "answer": "Anterior cruciate ligament" 
    },
    { 
        "question": "A patient presents with pain on the lateral side of the hip and difficulty lying on the affected side. Which structure is most likely involved?", 
        "options": ["Greater trochanteric bursa", "Gluteus medius tendon", "Piriformis muscle", "Iliotibial band"], 
        "answer": "Greater trochanteric bursa" 
    },
    { 
        "question": "A positive Froment's sign indicates weakness in which muscle?", 
        "options": ["Adductor pollicis", "Flexor carpi ulnaris", "Brachioradialis", "Pronator teres"], 
        "answer": "Adductor pollicis" 
    },
    { 
        "question": "A 40-year-old patient with chronic plantar fasciitis is advised to stretch which structure?", 
        "options": ["Plantar fascia", "Achilles tendon", "Tibialis anterior", "Peroneus longus"], 
        "answer": "Plantar fascia" 
    },
    { 
        "question": "Injury to the long thoracic nerve results in which characteristic sign?", 
        "options": ["Winged scapula", "Claw hand", "Foot drop", "Wrist drop"], 
        "answer": "Winged scapula" 
    },
    { 
        "question": "Which muscle is commonly affected in lateral epicondylitis (tennis elbow)?", 
        "options": ["Extensor carpi radialis brevis", "Flexor carpi ulnaris", "Biceps brachii", "Pronator teres"], 
        "answer": "Extensor carpi radialis brevis" 
    },
    { 
        "question": "A patient presents with a fracture of the fibular neck. Which nerve is most at risk?", 
        "options": ["Common peroneal nerve", "Tibial nerve", "Sciatic nerve", "Saphenous nerve"], 
        "answer": "Common peroneal nerve" 
    },
    { 
        "question": "In a radial nerve injury, which thumb movement is typically affected?", 
        "options": ["Extension", "Adduction", "Abduction", "Opposition"], 
        "answer": "Extension" 
    },
    { 
        "question": "Which test is used to assess the integrity of the Achilles tendon?", 
        "options": ["Thompson test", "Phalen's test", "McMurray's test", "Finkelstein's test"], 
        "answer": "Thompson test" 
    },
    { 
        "question": "A cyclist presents with numbness in the medial hand after prolonged riding. Which nerve is likely compressed?", 
        "options": ["Ulnar nerve", "Radial nerve", "Median nerve", "Musculocutaneous nerve"], 
        "answer": "Ulnar nerve" 
    },
    { 
        "question": "Which bone is found in the upper arm?", 
        "options": ["Humerus", "Femur", "Radius", "Tibia"], 
        "answer": "Humerus" 
    },
    { 
        "question": "What is the primary action of the biceps brachii muscle?", 
        "options": ["Flexion of the forearm", "Extension of the forearm", "Rotation of the shoulder", "Abduction of the arm"], 
        "answer": "Flexion of the forearm" 
    },
    { 
        "question": "Which nerve supplies the deltoid muscle?", 
        "options": ["Radial nerve", "Median nerve", "Axillary nerve", "Ulnar nerve"], 
        "answer": "Axillary nerve" 
    },
    { 
        "question": "What is the main blood supply to the lower limb?", 
        "options": ["Axillary artery", "Femoral artery", "Subclavian artery", "Radial artery"], 
        "answer": "Femoral artery" 
    },
    { 
        "question": "Which muscle is involved in the extension of the knee?", 
        "options": ["Quadriceps femoris", "Biceps femoris", "Gastrocnemius", "Sartorius"], 
        "answer": "Quadriceps femoris" 
    },
    { 
        "question": "A fracture of the humeral shaft may injure which nerve?", 
        "options": ["Radial nerve", "Ulnar nerve", "Median nerve", "Axillary nerve"], 
        "answer": "Radial nerve" 
    },
    { 
        "question": "Which muscle's weakness is associated with a positive Trendelenburg sign?", 
        "options": ["Gluteus medius", "Quadriceps femoris", "Gastrocnemius", "Sartorius"], 
        "answer": "Gluteus medius" 
    },
    { 
        "question": "A positive Tinel sign over the carpal tunnel indicates compression of which nerve?", 
        "options": ["Median nerve", "Ulnar nerve", "Radial nerve", "Axillary nerve"], 
        "answer": "Median nerve" 
    },
    { 
        "question": "What type of joint is the knee?", 
        "options": ["Hinge joint", "Ball-and-socket joint", "Pivot joint", "Saddle joint"], 
        "answer": "Hinge joint" 
    },
    { 
        "question": "Damage to which nerve causes foot drop?", 
        "options": ["Common peroneal nerve", "Tibial nerve", "Sciatic nerve", "Femoral nerve"], 
        "answer": "Common peroneal nerve" 
    },
    { 
        "question": "Which tendon is inflamed in lateral epicondylitis (tennis elbow)?", 
        "options": ["Extensor carpi radialis brevis", "Biceps brachii", "Flexor carpi ulnaris", "Palmaris longus"], 
        "answer": "Extensor carpi radialis brevis" 
    },
    { 
        "question": "A patient with an anterior dislocation of the shoulder is at risk of injuring which nerve?", 
        "options": ["Axillary nerve", "Radial nerve", "Median nerve", "Ulnar nerve"], 
        "answer": "Axillary nerve" 
    },
    { 
        "question": "What is the typical deformity in a Colles' fracture?", 
        "options": ["Dorsal displacement of the distal radius", "Volar displacement of the distal radius", "Distal humerus fracture", "Dislocation of the elbow"], 
        "answer": "Dorsal displacement of the distal radius" 
    },
    { 
        "question": "Which muscle is responsible for initiating abduction of the arm?", 
        "options": ["Supraspinatus", "Deltoid", "Infraspinatus", "Teres minor"], 
        "answer": "Supraspinatus" 
    },
    { 
        "question": "An injury to the ulnar nerve at the elbow leads to which hand deformity?", 
        "options": ["Claw hand", "Wrist drop", "Ape hand", "Dupuytren's contracture"], 
        "answer": "Claw hand" 
    },
    { 
        "question": "Which artery is commonly injured in a supracondylar fracture of the humerus?", 
        "options": ["Brachial artery", "Radial artery", "Ulnar artery", "Axillary artery"], 
        "answer": "Brachial artery" 
    },
    { 
        "question": "Which of the following muscles is located in the posterior compartment of the forearm?", 
        "options": ["Extensor carpi ulnaris", "Flexor carpi radialis", "Pronator teres", "Palmaris longus"], 
        "answer": "Extensor carpi ulnaris" 
    },
    { 
        "question": "Which ligament is most commonly injured in an ankle sprain?", 
        "options": ["Anterior talofibular ligament", "Deltoid ligament", "Calcaneofibular ligament", "Posterior talofibular ligament"], 
        "answer": "Anterior talofibular ligament" 
    },
    { 
        "question": "Which nerve is compressed in cubital tunnel syndrome?", 
        "options": ["Ulnar nerve", "Median nerve", "Radial nerve", "Musculocutaneous nerve"], 
        "answer": "Ulnar nerve" 
    },
    { 
        "question": "Which muscle group is primarily responsible for dorsiflexion of the ankle?", 
        "options": ["Anterior tibial muscles", "Posterior tibial muscles", "Lateral leg muscles", "Plantar flexors"], 
        "answer": "Anterior tibial muscles" 
    },
    { 
        "question": "Damage to which nerve would affect sensation in the lateral forearm?", 
        "options": ["Musculocutaneous nerve", "Radial nerve", "Median nerve", "Ulnar nerve"], 
        "answer": "Musculocutaneous nerve" 
    },
    { 
        "question": "Which bony landmark is palpated to check for a hip fracture?", 
        "options": ["Greater trochanter", "Lesser trochanter", "Ischial tuberosity", "Iliac crest"], 
        "answer": "Greater trochanter" 
    },
    { 
        "question": "Which nerve innervates the quadriceps femoris muscle?", 
        "options": ["Femoral nerve", "Sciatic nerve", "Obturator nerve", "Tibial nerve"], 
        "answer": "Femoral nerve" 
    },
    { 
        "question": "A radial head fracture may lead to limited movement in which joint?", 
        "options": ["Elbow", "Shoulder", "Wrist", "Hip"], 
        "answer": "Elbow" 
    },
    { 
        "question": "Which structure is compressed in thoracic outlet syndrome?", 
        "options": ["Brachial plexus", "Femoral artery", "Ulnar nerve", "Sciatic nerve"], 
        "answer": "Brachial plexus" 
    },
    { 
        "question": "Damage to the sciatic nerve affects which major action?", 
        "options": ["Hip extension", "Elbow flexion", "Shoulder abduction", "Ankle plantar flexion"], 
        "answer": "Hip extension" 
    },
    { 
        "question": "Which muscle is commonly injured in a groin strain?", 
        "options": ["Adductor longus", "Biceps femoris", "Quadriceps femoris", "Rectus femoris"], 
        "answer": "Adductor longus" 
    },
    { 
        "question": "A supracondylar fracture of the humerus can damage which nerve, leading to a 'hand of benediction' deformity?", 
        "options": ["Median nerve", "Ulnar nerve", "Radial nerve", "Axillary nerve"], 
        "answer": "Median nerve" 
    },
    { 
        "question": "A fracture at the neck of the fibula may injure which nerve?", 
        "options": ["Common peroneal nerve", "Tibial nerve", "Sural nerve", "Sciatic nerve"], 
        "answer": "Common peroneal nerve" 
    },
    { 
        "question": "Which movement is restricted in a frozen shoulder (adhesive capsulitis)?", 
        "options": ["Shoulder abduction", "Elbow extension", "Wrist flexion", "Forearm supination"], 
        "answer": "Shoulder abduction" 
    },

    { 
        "question": "Which bone is found in the upper arm?", 
        "options": ["Humerus", "Femur", "Radius", "Tibia"], 
        "answer": "Humerus" 
    },
    { 
        "question": "What is the primary action of the biceps brachii muscle?", 
        "options": ["Flexion of the forearm", "Extension of the forearm", "Rotation of the shoulder", "Abduction of the arm"], 
        "answer": "Flexion of the forearm" 
    },
    { 
        "question": "Which nerve supplies the deltoid muscle?", 
        "options": ["Radial nerve", "Median nerve", "Axillary nerve", "Ulnar nerve"], 
        "answer": "Axillary nerve" 
    },
    { 
        "question": "What is the main blood supply to the lower limb?", 
        "options": ["Axillary artery", "Femoral artery", "Subclavian artery", "Radial artery"], 
        "answer": "Femoral artery" 
    },
    { 
        "question": "Which muscle is involved in the extension of the knee?", 
        "options": ["Quadriceps femoris", "Biceps femoris", "Gastrocnemius", "Sartorius"], 
        "answer": "Quadriceps femoris" 
    },
    { 
        "question": "Which bone forms the knee joint along with the femur and tibia?", 
        "options": ["Patella", "Fibula", "Scapula", "Clavicle"], 
        "answer": "Patella" 
    },
    { 
        "question": "Which ligament is commonly injured in a knee sprain?", 
        "options": ["Anterior cruciate ligament", "Medial collateral ligament", "Lateral collateral ligament", "Posterior cruciate ligament"], 
        "answer": "Anterior cruciate ligament" 
    },
    { 
        "question": "The sciatic nerve divides into which two main branches at the knee?", 
        "options": ["Tibial and fibular nerves", "Femoral and saphenous nerves", "Radial and ulnar nerves", "Axillary and musculocutaneous nerves"], 
        "answer": "Tibial and fibular nerves" 
    },
    { 
        "question": "What is the function of the rotator cuff muscles in the shoulder?", 
        "options": ["Stabilize the shoulder joint", "Flex the elbow", "Extend the wrist", "Rotate the hip joint"], 
        "answer": "Stabilize the shoulder joint" 
    },
    { 
        "question": "Which muscle is primarily responsible for plantar flexion at the ankle?", 
        "options": ["Gastrocnemius", "Tibialis anterior", "Soleus", "Peroneus longus"], 
        "answer": "Gastrocnemius" 
    },
    { 
        "question": "The femoral nerve innervates which group of muscles?", 
        "options": ["Quadriceps", "Hamstrings", "Calf muscles", "Forearm flexors"], 
        "answer": "Quadriceps" 
    },
    { 
        "question": "Which structure is located at the medial aspect of the elbow?", 
        "options": ["Ulnar nerve", "Radial nerve", "Median nerve", "Brachial artery"], 
        "answer": "Ulnar nerve" 
    },
    { 
        "question": "Which artery supplies the posterior compartment of the thigh?", 
        "options": ["Profunda femoris artery", "Femoral artery", "Popliteal artery", "Anterior tibial artery"], 
        "answer": "Profunda femoris artery" 
    },
    { 
        "question": "Which bone is commonly referred to as the collarbone?", 
        "options": ["Clavicle", "Scapula", "Sternum", "Humerus"], 
        "answer": "Clavicle" 
    },
    { 
        "question": "Which muscle abducts the arm at the shoulder?", 
        "options": ["Deltoid", "Pectoralis major", "Latissimus dorsi", "Biceps brachii"], 
        "answer": "Deltoid" 
    },
    { 
        "question": "What is the largest nerve in the human body?", 
        "options": ["Sciatic nerve", "Femoral nerve", "Radial nerve", "Median nerve"], 
        "answer": "Sciatic nerve" 
    },
    { 
        "question": "The triceps brachii is located in which part of the upper limb?", 
        "options": ["Posterior arm", "Anterior arm", "Forearm", "Shoulder"], 
        "answer": "Posterior arm" 
    },
    { 
        "question": "Which of these muscles is NOT found in the upper limb?", 
        "options": ["Gluteus maximus", "Biceps brachii", "Deltoid", "Triceps brachii"], 
        "answer": "Gluteus maximus" 
    },
    { 
        "question": "The main action of the gluteus maximus is to:", 
        "options": ["Extend the hip", "Flex the knee", "Abduct the thigh", "Rotate the leg"], 
        "answer": "Extend the hip" 
    },
    { 
        "question": "The hamstrings are located in which region?", 
        "options": ["Posterior thigh", "Anterior thigh", "Medial thigh", "Lateral thigh"], 
        "answer": "Posterior thigh" 
    },
    { 
        "question": "Which joint is classified as a hinge joint?", 
        "options": ["Elbow", "Shoulder", "Hip", "Wrist"], 
        "answer": "Elbow" 
    },
    { 
        "question": "Which bone is located on the lateral side of the forearm?", 
        "options": ["Radius", "Ulna", "Fibula", "Tibia"], 
        "answer": "Radius" 
    },
    { 
        "question": "The Achilles tendon attaches to which bone?", 
        "options": ["Calcaneus", "Femur", "Tibia", "Fibula"], 
        "answer": "Calcaneus" 
    },
    { 
        "question": "Which structure runs through the carpal tunnel?", 
        "options": ["Median nerve", "Ulnar nerve", "Radial artery", "Brachial artery"], 
        "answer": "Median nerve" 
    },
    { 
        "question": "Which of these muscles is NOT a part of the quadriceps group?", 
        "options": ["Biceps femoris", "Rectus femoris", "Vastus lateralis", "Vastus medialis"], 
        "answer": "Biceps femoris" 
    },
    { 
        "question": "Which nerve is commonly compressed in carpal tunnel syndrome?", 
        "options": ["Median nerve", "Radial nerve", "Ulnar nerve", "Sciatic nerve"], 
        "answer": "Median nerve" 
    },
  { 
        "question": "Which bone is found in the upper arm?", 
        "options": ["Humerus", "Femur", "Radius", "Tibia"], 
        "answer": "Humerus" 
    },
    { 
        "question": "What is the primary action of the biceps brachii muscle?", 
        "options": ["Flexion of the forearm", "Extension of the forearm", "Rotation of the shoulder", "Abduction of the arm"], 
        "answer": "Flexion of the forearm" 
    },
    { 
        "question": "Which nerve supplies the deltoid muscle?", 
        "options": ["Radial nerve", "Median nerve", "Axillary nerve", "Ulnar nerve"], 
        "answer": "Axillary nerve" 
    },
    { 
        "question": "What is the main blood supply to the lower limb?", 
        "options": ["Axillary artery", "Femoral artery", "Subclavian artery", "Radial artery"], 
        "answer": "Femoral artery" 
    },
    { 
        "question": "Which muscle is involved in the extension of the knee?", 
        "options": ["Quadriceps femoris", "Biceps femoris", "Gastrocnemius", "Sartorius"], 
        "answer": "Quadriceps femoris" 
    },
    { 
        "question": "Which bone forms the knee joint along with the femur and tibia?", 
        "options": ["Patella", "Fibula", "Scapula", "Clavicle"], 
        "answer": "Patella" 
    },
    { 
        "question": "Which ligament is commonly injured in a knee sprain?", 
        "options": ["Anterior cruciate ligament", "Medial collateral ligament", "Lateral collateral ligament", "Posterior cruciate ligament"], 
        "answer": "Anterior cruciate ligament" 
    },
    { 
        "question": "The sciatic nerve divides into which two main branches at the knee?", 
        "options": ["Tibial and fibular nerves", "Femoral and saphenous nerves", "Radial and ulnar nerves", "Axillary and musculocutaneous nerves"], 
        "answer": "Tibial and fibular nerves" 
    },
    { 
        "question": "What is the function of the rotator cuff muscles in the shoulder?", 
        "options": ["Stabilize the shoulder joint", "Flex the elbow", "Extend the wrist", "Rotate the hip joint"], 
        "answer": "Stabilize the shoulder joint" 
    },
    { 
        "question": "Which muscle is primarily responsible for plantar flexion at the ankle?", 
        "options": ["Gastrocnemius", "Tibialis anterior", "Soleus", "Peroneus longus"], 
        "answer": "Gastrocnemius" 
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
window.onload = function() {
    // Check if the sessionStorage has the flag indicating the user visited index.html
    if (!sessionStorage.getItem('visitedIndex')) {
        // If the user hasn't visited index.html, clear localStorage and sessionStorage
        localStorage.clear();
        sessionStorage.clear();

        // Redirect to index.html
        window.location.href = "/index.html";  // Adjust path as needed
    }
};
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