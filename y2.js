// Question bank
const questionBank = [
       
  {
    question: "Local anesthetics produce:",
    options: [
      "Analgesia, amnesia, loss of consciousness",
      "Blocking pain sensation without loss of consciousness",
      "Alleviation of anxiety and pain with an altered level of consciousness",
      "A stupor or somnolent state",
    ],
    answer: "Blocking pain sensation without loss of consciousness",
  },
  {
    question: "A good local anesthetic agent shouldn’t cause:",
    options: [
      "Local irritation and tissue damage",
      "Systemic toxicity",
      "Fast onset and long duration of action",
      "Vasodilatation",
    ],
    answer: "Vasodilatation",
  },
  {
    question: "Most local anesthetic agents consist of:",
    options: [
      "Lipophylic group (frequently an aromatic ring)",
      "Intermediate chain (commonly including an ester or amide)",
      "Amino group",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question: "Which one of the following groups is responsible for the duration of the local anesthetic action?",
    options: [
      "Intermediate chain",
      "Lipophylic group",
      "Ionizable group",
      "All of the above",
    ],
    answer: "Intermediate chain",
  },
  {
    question: "Indicate the local anesthetic agent, which has a shorter duration of action:",
    options: ["Lidocaine", "Procaine", "Bupivacaine", "Ropivacaine"],
    answer: "Procaine",
  },
  {
    question: "Which one of the following groups is responsible for the potency and the toxicity of local anesthetics?",
    options: [
      "Ionizable group",
      "Intermediate chain",
      "Lipophylic group",
      "All of the above",
    ],
    answer: "Lipophylic group",
  },
  {
    question: "Indicate the drug, which has greater potency of the local anesthetic action:",
    options: ["Lidocaine", "Bupivacaine", "Procaine", "Mepivacaine"],
    answer: "Bupivacaine",
  },
  {
    question: "Ionizable group is responsible for:",
    options: [
      "The potency and the toxicity",
      "The duration of action",
      "The ability to diffuse to the site of action",
      "All of the above",
    ],
    answer: "The ability to diffuse to the site of action",
  },
  {
    question: "Which one of the following local anesthetics is an ester of benzoic acid?",
    options: ["Lidocaine", "Procaine", "Ropivacaine", "Cocaine"],
    answer: "Cocaine",
  },
  {
    question: "Indicate the local anesthetic, which is an ester of paraaminobenzoic acid:",
    options: ["Mepivacaine", "Cocaine", "Procaine", "Lidocaine"],
    answer: "Procaine",
  },
  {
    question: "Which of the following local anesthetics is an acetanilide derivative?",
    options: ["Tetracaine", "Lidocaine", "Cocaine", "Procaine"],
    answer: "Lidocaine",
  },
  {
    question: "Indicate the local anesthetic, which is a toluidine derivative:",
    options: ["Lidocaine", "Bupivacaine", "Prilocaine", "Procaine"],
    answer: "Prilocaine",
  },
  {
    question: "Which of the following local anesthetics is a thiophene derivative?",
    options: ["Procaine", "Ultracaine", "Lidocaine", "Mepivacaine"],
    answer: "Ultracaine",
  },
  {
    question: "Local anesthetics are:",
    options: ["Weak bases", "Weak acids", "Salts", "None of the above"],
    answer: "Weak bases",
  },
  {
    question:
      "For therapeutic application local anesthetics are usually made available as salts for the reasons of:",
    options: [
      "Less toxicity and higher potency",
      "Higher stability and greater lipid solubility",
      "Less local tissue damage and more potency",
      "More stability and greater water solubility",
    ],
    answer: "More stability and greater water solubility",
  },
  {
    question: "Which of the following statements is not correct for local anesthetics?",
    options: [
      "In a tissue they exist either as an uncharged base or as a cation",
      "A charged cationic form penetrates biologic membranes more readily than an uncharged form",
      "Local anesthetics are much less effective in inflamed tissues",
      "Low pH in inflamed tissues decreases the dissociation of nonionized molecules",
    ],
    answer:
      "A charged cationic form penetrates biologic membranes more readily than an uncharged form",
  },
  {
    question: "Which one of the following statements about the metabolism of local anesthetics is incorrect?",
    options: [
      "Metabolism of local anesthetics occurs at the site of administration",
      "Metabolism occurs in the plasma or liver but not at the site of administration",
      "Ester group of anesthetics like procaine, are metabolized systemically by pseudocholinesterase",
      "Amides such as lidocaine, are metabolized in the liver by microsomal mixed function oxidases",
    ],
    answer: "Metabolism of local anesthetics occurs at the site of administration",
  },
    {"question": "Acetylcholine is not a specific neurotransmitter at:", "options": ["Sympathetic ganglia", "Sympathetic postganglionic nerve endings", "Parasympathetic ganglia", "Parasympathetic postganglionic nerve endings"], "answer": "Sympathetic postganglionic nerve endings"},
    {"question": "Muscarinic receptors are located in:", "options": ["Autonomic ganglia", "Skeletal muscle neuromuscular junctions", "Autonomic effector cells", "Sensory carotid sinus baroreceptor zone"], "answer": "Autonomic effector cells"},
    {"question": "Indicate the location of M2 cholinoreceptor type:", "options": ["Heart", "Glands", "Smooth muscle", "Endothelium"], "answer": "Heart"},
    {"question": "The symptoms of mushroom poisoning include all of the following EXCEPT:", "options": ["Salivation, lacrimation, nausea, vomiting", "Dryness of mouth, hyperpyrexia, hallucination", "Headache, abdominal colic", "Bradycardia, hypotension and shock"], "answer": "Dryness of mouth, hyperpyrexia, hallucination"},
    {"question": "Which of the following cholinomimetics activates both muscarinic and nicotinic receptors?", "options": ["Lobeline", "Pilocarpine", "Nicotine", "Bethanechol"], "answer": "Nicotine"},
    {"question": "Indicate a cholinomimetic agent, which is related to direct-acting drugs:", "options": ["Edrophonium", "Physostigmine", "Carbachol", "Isoflurophate"], "answer": "Carbachol"},
    {"question": "Characteristics of carbachol include all of the following EXCEPT:", "options": ["It decreases intraocular pressure", "It causes mydriasis", "It exerts both nicotinic and muscarinic effects", "It is resistant to acethylcholiesterase"], "answer": "It causes mydriasis"},
    {"question": "Acetylcholine is not used in clinical practice because:", "options": ["It is very toxic", "The doses required are very high", "It is very rapidly hydrolyzed", "It is very costly"], "answer": "It is very rapidly hydrolyzed"},
    {"question": "Parasympathomimetic drugs cause:", "options": ["Bronchodilation", "Mydriasis", "Bradycardia", "Constipation"], "answer": "Bradycardia"},
    {"question": "Which of the following direct-acting cholinomimetics is mainly muscarinic in action?", "options": ["Bethanechol", "Carbachol", "Acetylcholine", "None of the above"], "answer": "Bethanechol"},
    {"question": "Which of the following direct-acting cholinomimetics has the shortest duration of action?", "options": ["Acetylcholine", "Methacholine", "Carbachol", "Bethanechol"], "answer": "Acetylcholine"},
    {"question": "Bethanechol has all of the following properties EXCEPT:", "options": ["It is extremely resistant to hydrolysis", "Purely muscarinic in its action", "It is used for abdominal urinary bladder distention", "It exerts both nicotinic and muscarinic effects"], "answer": "It exerts both nicotinic and muscarinic effects"},
    {"question": "A M-cholinimimetic agent is:", "options": ["Carbachol", "Pilocarpine", "Acetylcholine", "Bethanechol"], "answer": "Pilocarpine"},
    {"question": "Characteristics of pilocarpine include all of the following EXCEPT:", "options": ["It is a tertiary amine alkaloid", "It causes miosis and a decrease in intraocular pressure", "Causes a decrease in secretory and motor activity of gut", "It is useful in the treatment of glaucoma"], "answer": "Causes a decrease in secretory and motor activity of gut"},
    {"question": "Which of the following cholinomimetics is a plant derivative with lower potency than nicotine but with a similar spectrum of action?", "options": ["Lobeline", "Pilocarpine", "Carbochol", "Acetylcholine"], "answer": "Lobeline"},
    {"question": "Which of the following cholinomimetics is indirect-acting?", "options": ["Lobeline", "Edrophonium", "Pilocarpine", "Carbachol"], "answer": "Edrophonium"},
    {"question": "The mechanism of action of indirect-acting cholinomimetic agents is:", "options": ["Binding to and activation of muscarinic or nicotinic receptors", "Inhibition of the hydrolysis of endogenous acetylcholine", "Stimulation of the action of acetylcholinesterase", "Releasing acetylcholine from storage sites"], "answer": "Inhibition of the hydrolysis of endogenous acetylcholine"},
    {"question": "Indicate a reversible cholinesterase inhibitor:", "options": ["Isoflurophate", "Carbochol", "Physostigmine", "Parathion"], "answer": "Physostigmine"},
    {"question": "Which of the following cholinesterase inhibitors is irreversible?", "options": ["Physostigmine", "Edrophonium", "Neostigmine", "Isoflurophate"], "answer": "Isoflurophate"},
    {"question": "Indicate cholinesterase activator:", "options": ["Pralidoxime", "Edrophonium", "Pilocarpine", "Isoflurophate"], "answer": "Pralidoxime"},
    {"question": "Isofluorophate increases all of the following effects except:", "options": ["Lacrimation", "Bronchodilation", "Muscle twitching", "Salivation"], "answer": "Bronchodilation"},
    {"question": "Indicate a cholinesterase inhibitor, which has an additional direct nicotinic agonist effect:", "options": ["Edrophonium", "Carbochol", "Neostigmine", "Lobeline"], "answer": "Lobeline"},
    {"question": "Сholinesterase inhibitors do not produce:", "options": ["Bradycardia, no change or modest fall in blood pressure", "Increased strength of muscle contraction, especially in muscles weakened by myasthenia gravis", "Miosis and reduction of intraocular pressure", "Dramatic hypertension and tachycardia"], "answer": "Dramatic hypertension and tachycardia"},
    {"question": "Which of the following cholinomimetics is commonly used in the treatment of glaucoma?", "options": ["Pilocarpine", "Lobeline", "Acethylcholine", "Neostigmine"], "answer": "Pilocarpine"},
    {"question": "Indicate the organophosphate cholinesterase inhibitor, which can be made up in an aqueous solution for ophthalmic use and retains its activity within a week:", "options": ["Physoctigmine", "Edrophonium", "Echothiophate", "Neostigmine"], "answer": "Echothiophate"},
    {"question": "Which of the following cholinomimetics is most widely used for paralytic ileus and atony of the urinary bladder?", "options": ["Lobeline", "Neostigmine", "Pilocarpine", "Echothiophate"], "answer": "Neostigmine"},
    {"question": "Chronic long-term therapy of myasthenia is usually accomplished with:", "options": ["Edrophonium", "Neostigmine", "Echothiophate", "Carbachol"], "answer": "Neostigmine"},
    {"question": "Which of the following cholinomimetics is a drug of choice for reversing the effects of nondepolarizing neuromuscular relaxants?", "options": ["Echothiophate", "Physostigmine", "Edrophonium", "Pilocarpine"], "answer": "Edrophonium"},
    {"question": "Indicate the reversible cholinesterase inhibitor, which penetrates the blood-brain barrier:", "options": ["Physostigmine", "Edrophonium", "Neostigmine", "Piridostigmine"], "answer": "Physostigmine"},
    {"question": "Which of the following cholinomimetics is used in the treatment of atropine intoxication?", "options": ["Neostigmine", "Carbochol", "Physostigmine", "Lobeline"], "answer": "Physostigmine"},
    {"question": "Which of the following is a muscarinic agonist?", "options": ["Pilocarpine", "Bethanechol", "Neostigmine", "Physostigmine"], "answer": "Bethanechol"},
    {"question": "Which of the following drugs inhibits acetylcholinesterase?", "options": ["Physostigmine", "Edrophonium", "Carbachol", "Neostigmine"], "answer": "Physostigmine"},
    {"question": "Which of the following statements is true regarding atropine?", "options": ["It causes bradycardia", "It inhibits acetylcholine release", "It is a muscarinic antagonist", "It causes miosis"], "answer": "It is a muscarinic antagonist"},
    {"question": "Which of the following is the most important adverse effect of atropine?", "options": ["Tachycardia", "Hypotension", "Diarrhea", "Hypertension"], "answer": "Tachycardia"},
    {"question": "Which of the following is used in the treatment of organophosphate poisoning?", "options": ["Pralidoxime", "Atropine", "Physostigmine", "Neostigmine"], "answer": "Pralidoxime"},
    {"question": "The mechanism of action of atropine is:", "options": ["Inhibition of acetylcholine release", "Blockade of muscarinic receptors", "Inhibition of acetylcholinesterase", "Activation of nicotinic receptors"], "answer": "Blockade of muscarinic receptors"},
    {"question": "Which of the following is a major effect of muscarinic antagonists?", "options": ["Bronchoconstriction", "Dry mouth", "Miosis", "Increased salivation"], "answer": "Dry mouth"},
    {"question": "Which of the following drugs is used to treat bradycardia?", "options": ["Atropine", "Pilocarpine", "Physostigmine", "Neostigmine"], "answer": "Atropine"},
    {"question": "Which of the following is the primary use of scopolamine?", "options": ["Treatment of motion sickness", "Treatment of glaucoma", "Treatment of myasthenia gravis", "Treatment of organophosphate poisoning"], "answer": "Treatment of motion sickness"},
    {"question": "Which of the following is a side effect of muscarinic antagonists?", "options": ["Hypotension", "Bradycardia", "Dry mouth", "Excessive sweating"], "answer": "Dry mouth"},
    {"question": "Which of the following agents is used to treat overactive bladder by blocking muscarinic receptors?", "options": ["Oxybutynin", "Pilocarpine", "Neostigmine", "Pralidoxime"], "answer": "Oxybutynin"},
    {"question": "Which of the following muscarinic antagonists is used for the treatment of peptic ulcers?", "options": ["Atropine", "Pirenzepine", "Scopolamine", "Ipratropium"], "answer": "Pirenzepine"},
    {"question": "Which of the following is the main indication for the use of ipratropium?", "options": ["Asthma", "Chronic obstructive pulmonary disease", "Hypertension", "Pneumonia"], "answer": "Chronic obstructive pulmonary disease"},
    {"question": "Which of the following drugs is a selective M3 muscarinic antagonist?", "options": ["Darifenacin", "Ipratropium", "Oxybutynin", "Scopolamine"], "answer": "Darifenacin"},
    {"question": "The primary action of ganglionic blockers is:", "options": ["Inhibition of acetylcholine release", "Blocking of nicotinic receptors", "Blocking of muscarinic receptors", "Activation of adrenergic receptors"], "answer": "Blocking of nicotinic receptors"},
    {"question": "Which of the following is a common side effect of ganglionic blockers?", "options": ["Hypotension", "Tachycardia", "Dry mouth", "Increased sweating"], "answer": "Hypotension"},
    {"question": "Which of the following is an example of a ganglionic blocker?", "options": ["Hexamethonium", "Scopolamine", "Atropine", "Neostigmine"], "answer": "Hexamethonium"},
    {"question": "Which of the following is the primary action of neuromuscular blockers?", "options": ["Blockade of nicotinic receptors at the neuromuscular junction", "Inhibition of acetylcholine release", "Inhibition of acetylcholinesterase", "Blocking of muscarinic receptors"], "answer": "Blockade of nicotinic receptors at the neuromuscular junction"},
    {"question": "Which of the following is a depolarizing neuromuscular blocker?", "options": ["Succinylcholine", "Pancuronium", "Atracurium", "Rocuronium"], "answer": "Succinylcholine"},
    {"question": "Which of the following neuromuscular blockers is non-depolarizing?", "options": ["Succinylcholine", "Pancuronium", "Cisatracurium", "Mivacurium"], "answer": "Pancuronium"},
    {"question": "Which of the following is a side effect of succinylcholine?", "options": ["Bradycardia", "Hypotension", "Muscle rigidity", "Hyperkalemia"], "answer": "Hyperkalemia"},
    {"question": "Which of the following drugs is used to reverse the effects of non-depolarizing neuromuscular blockers?", "options": ["Neostigmine", "Atropine", "Physostigmine", "Pralidoxime"], "answer": "Neostigmine"},
    {"question": "Which of the following is a side effect of non-depolarizing neuromuscular blockers?", "options": ["Hyperkalemia", "Hypotension", "Fasciculations", "Muscle rigidity"], "answer": "Hypotension"},
    {"question": "Which of the following drugs is used to induce paralysis during surgery?", "options": ["Succinylcholine", "Pilocarpine", "Neostigmine", "Atropine"], "answer": "Succinylcholine"},
    {"question": "Which of the following is a muscarinic antagonist used for the treatment of asthma?", "options": ["Ipratropium", "Oxybutynin", "Scopolamine", "Darifenacin"], "answer": "Ipratropium"},
    {"question": "Which of the following is a characteristic of muscarinic receptor antagonists?", "options": ["Decreased heart rate", "Decreased saliva secretion", "Increased bladder contraction", "Increased bronchoconstriction"], "answer": "Decreased saliva secretion"},
    {"question": "Which of the following drugs blocks the effects of acetylcholine at muscarinic receptors?", "options": ["Atropine", "Neostigmine", "Pilocarpine", "Physostigmine"], "answer": "Atropine"},
    {"question": "Which of the following muscarinic antagonists has the longest duration of action?", "options": ["Atropine", "Ipratropium", "Scopolamine", "Pirenzepine"], "answer": "Scopolamine"},

    {
        question: "Which of the following is the primary mechanism of action of adrenergic agonists?",
        options: ["Blockade of beta receptors", "Activation of alpha receptors", "Inhibition of norepinephrine reuptake", "Activation of adrenergic receptors"],
        answer: "Activation of adrenergic receptors"
    },
    {
        question: "Which of the following drugs is a non-selective beta-adrenergic antagonist?",
        options: ["Propranolol", "Metoprolol", "Atenolol", "Labetalol"],
        answer: "Propranolol"
    },
    {
        question: "Which of the following adrenergic agonists is most commonly used to treat anaphylactic shock?",
        options: ["Epinephrine", "Norepinephrine", "Dopamine", "Isoproterenol"],
        answer: "Epinephrine"
    },
    {
        question: "Which receptor subtype does norepinephrine primarily act on?",
        options: ["Alpha-1", "Beta-1", "Alpha-2", "Beta-2"],
        answer: "Alpha-1"
    },
    {
        question: "Which of the following is a direct-acting adrenergic agonist?",
        options: ["Dopamine", "Ephedrine", "Pseudoephedrine", "Phenylephrine"],
        answer: "Phenylephrine"
    },
    {
        question: "Which of the following drugs is an alpha-2 adrenergic agonist?",
        options: ["Clonidine", "Dobutamine", "Albuterol", "Terbutaline"],
        answer: "Clonidine"
    },
    {
        question: "Which of the following drugs is used to treat hypertension through central action?",
        options: ["Methyldopa", "Phenylephrine", "Dopamine", "Norepinephrine"],
        answer: "Methyldopa"
    },
    {
        question: "Which of the following is a selective beta-1 adrenergic antagonist?",
        options: ["Atenolol", "Propranolol", "Labetalol", "Carvedilol"],
        answer: "Atenolol"
    },
    {
        question: "Which of the following drugs would be contraindicated in patients with asthma?",
        options: ["Albuterol", "Propranolol", "Clonidine", "Epinephrine"],
        answer: "Propranolol"
    },
    {
        question: "Which of the following adrenergic drugs is used as a vasopressor to treat hypotension?",
        options: ["Norepinephrine", "Dobutamine", "Isoproterenol", "Albuterol"],
        answer: "Norepinephrine"
    },
    {
        question: "Which of the following is the primary effect of alpha-1 adrenergic receptor activation?",
        options: ["Vasodilation", "Vasoconstriction", "Bronchodilation", "Increased heart rate"],
        answer: "Vasoconstriction"
    },
    {
        question: "Which of the following drugs is a beta-2 adrenergic agonist used to treat asthma?",
        options: ["Albuterol", "Dobutamine", "Clonidine", "Epinephrine"],
        answer: "Albuterol"
    },
    {
        question: "Which of the following adrenergic agents is used in the treatment of shock due to its positive inotropic effect?",
        options: ["Dopamine", "Norepinephrine", "Epinephrine", "Isoproterenol"],
        answer: "Dopamine"
    },
    {
        question: "Which of the following is the most common side effect of beta-blockers?",
        options: ["Bradycardia", "Tachycardia", "Hypertension", "Hypotension"],
        answer: "Bradycardia"
    },
    {
        question: "Which adrenergic receptor subtype mediates bronchodilation?",
        options: ["Alpha-1", "Beta-1", "Beta-2", "Alpha-2"],
        answer: "Beta-2"
    },
    {
        question: "Which of the following drugs is an indirect-acting adrenergic agonist?",
        options: ["Ephedrine", "Dopamine", "Albuterol", "Phenylephrine"],
        answer: "Ephedrine"
    },
    {
        question: "Which of the following is a common side effect of alpha-1 adrenergic agonists?",
        options: ["Bradycardia", "Tachycardia", "Dry mouth", "Hypertension"],
        answer: "Hypertension"
    },
    {
        question: "Which of the following drugs is used to treat cardiac arrest by activating both alpha and beta adrenergic receptors?",
        options: ["Epinephrine", "Norepinephrine", "Dobutamine", "Isoproterenol"],
        answer: "Epinephrine"
    },
    {
        question: "Which of the following drugs primarily stimulates beta-1 adrenergic receptors?",
        options: ["Dobutamine", "Albuterol", "Isoproterenol", "Clonidine"],
        answer: "Dobutamine"
    },
    {
        question: "Which of the following is the mechanism of action of selective beta-blockers?",
        options: ["Block beta-1 adrenergic receptors", "Block alpha-1 adrenergic receptors", "Activate beta-2 adrenergic receptors", "Inhibit norepinephrine release"],
        answer: "Block beta-1 adrenergic receptors"
    },
    {
        question: "Which of the following adrenergic drugs is used to treat nasal congestion?",
        options: ["Pseudoephedrine", "Phenylephrine", "Dopamine", "Clonidine"],
        answer: "Pseudoephedrine"
    },
    {
        question: "Which of the following drugs is a non-selective beta-adrenergic agonist used to treat bradycardia?",
        options: ["Isoproterenol", "Epinephrine", "Dopamine", "Dobutamine"],
        answer: "Isoproterenol"
    },
    {
        question: "Which of the following drugs is a selective alpha-1 adrenergic antagonist?",
        options: ["Prazosin", "Labetalol", "Propranolol", "Carvedilol"],
        answer: "Prazosin"
    },
    {
        question: "Which of the following is a major side effect of alpha-1 adrenergic antagonists?",
        options: ["Hypotension", "Hypertension", "Bradycardia", "Tachycardia"],
        answer: "Hypotension"
    },
    {
        question: "Which of the following drugs is used to treat anxiety through central alpha-2 adrenergic receptor stimulation?",
        options: ["Clonidine", "Alprazolam", "Diazepam", "Buspirone"],
        answer: "Clonidine"
    },
    {
        question: "Which of the following is a major effect of beta-2 adrenergic agonists?",
        options: ["Bronchodilation", "Vasoconstriction", "Increased heart rate", "Mydriasis"],
        answer: "Bronchodilation"
    },
    {
        question: "Which of the following adrenergic agents can be used to treat shock by acting as both a vasoconstrictor and inotropic agent?",
        options: ["Norepinephrine", "Epinephrine", "Dopamine", "Isoproterenol"],
        answer: "Norepinephrine"
    },
    {
        question: "Which of the following drugs is primarily used to treat acute hypotension?",
        options: ["Phenylephrine", "Epinephrine", "Dopamine", "Norepinephrine"],
        answer: "Dopamine"
    },
    {
        question: "Which of the following drugs is used as a vasoconstrictor to treat hypotension?",
        options: ["Norepinephrine", "Epinephrine", "Dopamine", "Isoproterenol"],
        answer: "Norepinephrine"
    },
    {
        question: "Which of the following drugs acts by inhibiting the release of norepinephrine?",
        options: ["Reserpine", "Clonidine", "Methyldopa", "Alprazolam"],
        answer: "Reserpine"
    },
    {
        question: "Which of the following is a side effect of alpha-2 adrenergic agonists like clonidine?",
        options: ["Bradycardia", "Tachycardia", "Hypotension", "Nausea"],
        answer: "Bradycardia"
    },
    {
        question: "Which of the following drugs is classified as a selective serotonin reuptake inhibitor (SSRI)?",
        options: ["Fluoxetine", "Amitriptyline", "Clonazepam", "Haloperidol"],
        answer: "Fluoxetine"
    },
    {
        question: "Which of the following neurotransmitters is primarily involved in the action of benzodiazepines?",
        options: ["GABA", "Dopamine", "Serotonin", "Norepinephrine"],
        answer: "GABA"
    },
    {
        question: "Which class of drugs is commonly used to treat generalized anxiety disorder (GAD)?",
        options: ["Selective serotonin reuptake inhibitors (SSRIs)", "Beta-blockers", "Benzodiazepines", "Monoamine oxidase inhibitors (MAOIs)"],
        answer: "Selective serotonin reuptake inhibitors (SSRIs)"
    },
    {
        question: "Which of the following is the primary mechanism of action of barbiturates?",
        options: ["Enhancement of GABAergic activity", "Inhibition of serotonin reuptake", "Blockade of dopamine receptors", "Activation of NMDA receptors"],
        answer: "Enhancement of GABAergic activity"
    },
    {
        question: "Which of the following drugs is commonly used as a first-line treatment for acute migraine attacks?",
        options: ["Sumatriptan", "Amitriptyline", "Phenelzine", "Risperidone"],
        answer: "Sumatriptan"
    },
    {
        question: "Which of the following is a major side effect of antipsychotic drugs?",
        options: ["Weight gain", "Bradycardia", "Diarrhea", "Hypotension"],
        answer: "Weight gain"
    },
    {
        question: "Which of the following is the main effect of amphetamines on the central nervous system?",
        options: ["Increased release of norepinephrine and dopamine", "Inhibition of GABA release", "Increased serotonin reuptake", "Blocking acetylcholine receptors"],
        answer: "Increased release of norepinephrine and dopamine"
    },
    {
        question: "Which of the following drugs is a selective dopamine D2 receptor antagonist?",
        options: ["Haloperidol", "Lorazepam", "Sertraline", "Cyclobenzaprine"],
        answer: "Haloperidol"
    },
    {
        question: "Which of the following is the main mechanism of action of tricyclic antidepressants (TCAs)?",
        options: ["Inhibition of serotonin and norepinephrine reuptake", "Blockade of dopamine receptors", "Enhancement of GABAergic transmission", "Inhibition of MAO-A"],
        answer: "Inhibition of serotonin and norepinephrine reuptake"
    },
    {
        question: "Which of the following is an adverse effect of chronic use of corticosteroids on the central nervous system?",
        options: ["Mood swings and psychosis", "Seizures", "Bradycardia", "Excessive sedation"],
        answer: "Mood swings and psychosis"
    },
    {
        question: "Which of the following drugs is a monoamine oxidase inhibitor (MAOI)?",
        options: ["Phenelzine", "Fluoxetine", "Trazodone", "Diazepam"],
        answer: "Phenelzine"
    },
    {
        question: "Which of the following is the most common indication for the use of lithium?",
        options: ["Bipolar disorder", "Schizophrenia", "Generalized anxiety disorder", "Major depressive disorder"],
        answer: "Bipolar disorder"
    },
    {
        question: "Which of the following drugs can be used as an anticonvulsant?",
        options: ["Valproate", "Diphenhydramine", "Dipyridamole", "Haloperidol"],
        answer: "Valproate"
    },
    {
        question: "Which of the following is a common side effect of anticholinergic drugs used in the treatment of Parkinson's disease?",
        options: ["Dry mouth", "Bradycardia", "Diarrhea", "Hypotension"],
        answer: "Dry mouth"
    },
    {
        question: "Which of the following drugs is a non-benzodiazepine hypnotic used for the treatment of insomnia?",
        options: ["Zolpidem", "Lorazepam", "Clonazepam", "Dantrolene"],
        answer: "Zolpidem"
    },
    {
        question: "Which of the following is the mechanism of action of selective serotonin reuptake inhibitors (SSRIs)?",
        options: ["Inhibition of serotonin reuptake", "Inhibition of dopamine reuptake", "Activation of GABA receptors", "Inhibition of MAO-A"],
        answer: "Inhibition of serotonin reuptake"
    },
    {
        question: "Which of the following drugs is primarily used in the treatment of schizophrenia?",
        options: ["Clozapine", "Diazepam", "Paroxetine", "Trazodone"],
        answer: "Clozapine"
    },
    {
        question: "Which of the following drugs acts by inhibiting the reuptake of both serotonin and norepinephrine?",
        options: ["Duloxetine", "Sertraline", "Mirtazapine", "Clonazepam"],
        answer: "Duloxetine"
    },
    {
        question: "Which of the following medications is used for the management of acute alcohol withdrawal symptoms?",
        options: ["Diazepam", "Haloperidol", "Caffeine", "Propranolol"],
        answer: "Diazepam"
    },
    {
        question: "Which of the following drugs is used to treat Alzheimer's disease by increasing acetylcholine levels?",
        options: ["Donepezil", "Haloperidol", "Methylphenidate", "Citalopram"],
        answer: "Donepezil"
    },
    {
        question: "Which of the following is the primary neurotransmitter involved in the action of selective serotonin reuptake inhibitors (SSRIs)?",
        options: ["Serotonin", "Norepinephrine", "Dopamine", "GABA"],
        answer: "Serotonin"
    },
    {
        question: "Which of the following drugs is used as an anti-epileptic and mood stabilizer?",
        options: ["Valproate", "Gabapentin", "Lisdexamfetamine", "Clozapine"],
        answer: "Valproate"
    },
    {
        question: "Which of the following is a side effect commonly associated with lithium treatment?",
        options: ["Tremor", "Bradycardia", "Weight loss", "Hypertension"],
        answer: "Tremor"
    },
    {
        question: "Which of the following is a risk of using benzodiazepines in combination with alcohol?",
        options: ["Respiratory depression", "Increased alertness", "Reduced sedation", "Hypotension"],
        answer: "Respiratory depression"
    },
    {
        question: "Which of the following is the main therapeutic use of benzodiazepines?",
        options: ["Anxiety disorders", "Epilepsy", "Bipolar disorder", "Schizophrenia"],
        answer: "Anxiety disorders"
    },
    {
        question: "Which of the following antipsychotic drugs is known for its low risk of extrapyramidal side effects?",
        options: ["Clozapine", "Haloperidol", "Risperidone", "Chlorpromazine"],
        answer: "Clozapine"
    },
    {
        question: "Which of the following is a typical side effect of the antipsychotic drug haloperidol?",
        options: ["Extrapyramidal symptoms", "Hyperglycemia", "Weight loss", "Insomnia"],
        answer: "Extrapyramidal symptoms"
    },
    {
        question: "Which of the following CNS stimulants is commonly prescribed for ADHD?",
        options: ["Methylphenidate", "Caffeine", "Modafinil", "Nicotine"],
        answer: "Methylphenidate"
    },
    {
        question: "Which of the following is the primary action of gamma-aminobutyric acid (GABA) in the CNS?",
        options: ["Inhibition of neuronal activity", "Excitation of neurons", "Stimulation of serotonin release", "Enhancement of dopamine synthesis"],
        answer: "Inhibition of neuronal activity"
    },
    {
        question: "Which of the following drugs is used to reverse opioid overdose?",
        options: ["Naloxone", "Naltrexone", "Flumazenil", "Acetylcysteine"],
        answer: "Naloxone"
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