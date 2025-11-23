// Question bank for LLM course - 12 weeks
export const questionBank = {
  week1: {
    title: "Week 1: Introduction to NLP",
    questions: [
      {
        id: "w1q1",
        question: "Which of the following best demonstrates the principle of distributional semantics?",
        options: [
          "Words that co-occur frequently tend to share semantic properties.",
          "Each word has a unique, fixed meaning regardless of context.",
          "Syntax determines the entire meaning of a sentence.",
          "Distributional semantics is unrelated to word embeddings."
        ],
        correctAnswer: 0,
        explanation: "Distributional semantics is based on the idea that words appearing in similar contexts tend to have related meanings.",
        cheat: "💡 Remember: 'You shall know a word by the company it keeps' - words hanging out together share meaning!"
      },
      {
        id: "w1q2",
        question: "Which of the following words is least likely to be polysemous?",
        options: ["Bank", "Tree", "Gravity", "Idea"],
        correctAnswer: 2,
        explanation: "Gravity has a specific scientific meaning and is least likely to have multiple meanings.",
        cheat: "🎯 GRAVITY = Grounded in one meaning (unlike 'bank' which could be money or river!)"
      },
      {
        id: "w1q3",
        question: "Consider the following sentence pair: Sentence 1: Riya dropped the glass. Sentence 2: The glass broke. Does Sentence 1 entail Sentence 2?",
        options: ["Yes", "No"],
        correctAnswer: 1,
        explanation: "Entailment is not guaranteed – the glass might not have broken.",
        cheat: "🔄 DROP ≠ BREAK - Dropping doesn't guarantee breaking (could land on pillow!)"
      },
      {
        id: "w1q4",
        question: "Which sentence contains a homonym?",
        options: [
          "He wound the clock before bed.",
          "She tied her hair in a bun.",
          "I can't bear the noise.",
          "He likes to bat after lunch."
        ],
        correctAnswer: 3,
        explanation: "'Bat' - sports equipment or animal, depending on usage.",
        cheat: "🦇 BAT = Baseball or Batman's friend - same spelling, different meanings!"
      },
      {
        id: "w1q5",
        question: "Which of the following relationships are incorrectly labeled?",
        options: [
          "Car is a meronym of wheel.",
          "Rose is a hyponym of flower.",
          "Keyboard is a holonym of key.",
          "Tree is a hypernym of oak."
        ],
        correctAnswer: 0,
        explanation: "Wheel is a meronym of car, not the other way around.",
        cheat: "🚗 MERONYM = PART of whole. Wheel is PART of car (not car part of wheel!)"
      },
      {
        id: "w1q6",
        question: "_________ studies how context influences the interpretation of meaning.",
        options: ["Syntax", "Morphology", "Pragmatics", "Semantics"],
        correctAnswer: 2,
        explanation: "Pragmatics studies contextual meaning.",
        cheat: "🎭 PRAGMATICS = Practical context (How 'Can you pass the salt?' isn't really a question!)"
      },
      {
        id: "w1q7",
        question: "In 'After Sita praised Radha, she smiled shyly,' who does 'she' most likely refer to?",
        options: ["Sita", "Radha", "Ambiguous", "Neither"],
        correctAnswer: 2,
        explanation: "The pronoun reference is ambiguous in this sentence.",
        cheat: "❓ SHE = Could be either! When pronouns are unclear, answer is AMBIGUOUS"
      },
      {
        id: "w1q8",
        question: "Which of the following statements is true? (i) Word embeddings capture semantic similarity through context. (ii) Morphological analysis is irrelevant in LLMs. (iii) Hypernyms are more specific than hyponyms.",
        options: ["Only (i)", "Only (i) and (iii)", "Only (ii) and (iii)", "All of the above"],
        correctAnswer: 0,
        explanation: "Only statement (i) is true.",
        cheat: "✅ HYPER = Higher/broader (Animal > Dog). HYPO = Lower/specific. Embeddings DO capture similarity!"
      },
      {
        id: "w1q9",
        question: "What issues can be observed in the following text? On a much-needed #workcation in beautiful Goa. Workin &amp; chillin by d waves!",
        options: ["Idioms", "Non-standard English", "Tricky Entity Names", "Neologisms"],
        correctAnswer: [1,3],
        explanation: "Contains non-standard English (d, &amp;, workin) and neologisms (#workcation). Both b and d are correct.",
        cheat: "📱 Social media = Non-standard + Neologisms (new words like 'workcation'!)"
      },
      {
        id: "w1q10",
        question: "In semantic role labelling, we determine the semantic role of each argument with respect to the ___________ of the sentence.",
        options: ["noun phrase", "subject", "predicate", "adjunct"],
        correctAnswer: 2,
        explanation: "Semantic roles are determined with respect to the predicate.",
        cheat: "🎯 PREDICATE = The action/verb is the center of semantic roles (who did what to whom)"
      }
    ]
  },
  week2: {
    title: "Week 2: Language Models",
    questions: [
      {
        id: "w2q1",
        question: "Which does NOT directly affect perplexity?",
        options: ["Vocabulary size", "Sentence probability", "Number of tokens", "Sentence length"],
        correctAnswer: 0,
        explanation: "Vocabulary size doesn't directly affect perplexity calculation.",
        cheat: "📊 PERPLEXITY = How surprised the model is. Vocab size doesn't change surprise!"
      },
      {
        id: "w2q2",
        question: "What is the goal of a probabilistic language model?",
        options: ["Translate sentences", "Predict the next word in a sequence", "Classify documents", "Summarize text"],
        correctAnswer: 1,
        explanation: "Language models predict the next word.",
        cheat: "🔮 LM = Crystal ball for NEXT WORD (that's literally what it does!)"
      },
      {
        id: "w2q3",
        question: "Which expresses the chain rule for a 4-word sentence?",
        options: [
          "P(w1,w2,w3,w4) = P(w1) + P(w2|w1) + P(w3|w2) + P(w4|w3)",
          "P(w1,w2,w3,w4) = P(w1) × P(w2|w1) × P(w3|w1,w2) × P(w4|w1,w2,w3)",
          "P(w1,w2,w3,w4) = P(w1) × P(w2|w1) × P(w3|w2) × P(w4|w3)",
          "P(w1,w2,w3,w4) = P(w4|w3) × P(w3|w2) × P(w2|w1) × P(w1)"
        ],
        correctAnswer: 1,
        explanation: "Chain rule uses full context for each word.",
        cheat: "⛓️ CHAIN RULE = Each word depends on ALL previous (not just one before!)"
      },
      {
        id: "w2q4",
        question: "Which assumption allows n-gram models to reduce computation?",
        options: ["Bayes Assumption", "Chain Rule", "Independence Assumption", "Markov Assumption"],
        correctAnswer: 3,
        explanation: "Markov assumption limits context to n-1 previous words.",
        cheat: "🏃 MARKOV = Memory loss! Only remember last few words, forget the rest"
      },
      {
        id: "w2q5",
        question: "In trigram model, correct linear interpolation example?",
        options: [
          "P(wi|wi-2,wi-1)=λ1P(wi|wi-2,wi-1)",
          "P(wi|wi-2,wi-1)=λ1P(wi|wi-2,wi-1)+λ2P(wi|wi-1)+λ3P(wi)",
          "P(wi|wi-2,wi-1)=max(P(wi|wi-2,wi-1),P(wi|wi-1))",
          "P(wi|wi-2,wi-1)=P(wi)P(wi-1)/P(wi-2)"
        ],
        correctAnswer: 1,
        explanation: "Linear interpolation combines multiple n-gram levels.",
        cheat: "🎚️ INTERPOLATION = Mix all levels (trigram + bigram + unigram) with weights λ"
      },
      {
        id: "w2q5b",
        question: "A trigram model is equivalent to which order Markov model?",
        options: ["3", "2", "1", "4"],
        correctAnswer: 1,
        explanation: "Trigram = 3 words = depends on 2 previous = 2nd order Markov.",
        cheat: "3️⃣ TRI-gram = Look at 3 words = 2nd order (n-1 rule!)"
      },
      {
        id: "w2q6",
        question: "Which smoothing technique leverages the number of unique contexts a word appears in?",
        options: ["Good-Turing", "Add-k", "Kneser-Ney", "Absolute Discounting"],
        correctAnswer: 2,
        explanation: "Kneser-Ney uses continuation probability which counts the number of unique left contexts.",
        cheat: "🌍 KNESER-NEY = Counts how DIVERSE contexts are (not just frequency!)"
      },
      {
        id: "w2q7",
        question: "For Question 4 to 5, consider the following corpus: <s> the sky is blue </s> <s> birds fly in the sky </s> <s> the blue birds sing </s> QUESTION 4: Assuming a bi-gram language model, calculate the probability of the sentence: <s> birds fly in the blue sky </s> Ignore the unigram probability of P(<s>) in your calculation.",
        options: ["2/37", "1/27", "0", "1/36"],
        correctAnswer: 2,
        explanation: "P(sky|blue) = 0 because 'blue sky' never appears in corpus. P(<s> birds fly in the blue sky </s>) = P(<s>) x P(birds | <s>) × P(fly | birds) × P(in | fly) × P(the | in) × P(blue | the) × P(sky | blue) × P(</s> | sky). From the corpus: P(birds | <s>) = Count(<s> birds) / Count(<s>) = 1 / 3, P(fly | birds) = Count(birds fly) / Count(birds) = 1 / 2, P(in | fly) = Count(fly in) / Count(fly) = 1 / 1, P(the | in) = Count(in the) / Count(in) = 1 / 1, P(blue | the) = Count(the blue) / Count(the) = 1 / 3, P(sky | blue) = Count(blue sky) = 0. Therefore P(<s> birds fly in the blue sky </s>) = 0",
        cheat: "⚠️ ZERO = If bigram NEVER seen in training, probability is ZERO (no blue sky!)"
      },
      {
        id: "w2q8",
        question: "Assuming a bi-gram language model, calculate the perplexity of the sentence: <s> birds fly in the blue sky </s> Please do not consider <s> and </s> as words of the sentence.",
        options: ["271/4", "271/5", "91/6", "None of these"],
        correctAnswer: 3,
        explanation: "As calculated in the previous question, P(<s> birds fly in the blue sky </s>) = 0. Thus, Perplexity = undefined",
        cheat: "❌ UNDEFINED = Can't calculate perplexity when probability is 0!"
      }
    ]
  },
  week3: {
    title: "Week 3: Neural Networks & MLPs",
    questions: [
      {
        id: "w3q1",
        question: "In backpropagation, which method computes gradients?",
        options: ["Gradient descent", "Chain rule of derivatives", "Matrix factorization", "Linear regression"],
        correctAnswer: 1,
        explanation: "Backpropagation uses chain rule to calculate gradients layer by layer.",
        cheat: "⛓️ BACKPROP = CHAIN RULE backwards through layers!"
      },
      {
        id: "w3q2",
        question: "Which function is NOT differentiable at zero?",
        options: ["Sigmoid", "Tanh", "ReLU", "Linear"],
        correctAnswer: 2,
        explanation: "ReLU has different left/right derivatives at zero.",
        cheat: "⚡ ReLU at 0 = Sharp corner! Left says 0, right says 1 = not differentiable"
      },
      {
        id: "w3q3",
        question: "In regularization, which is true?",
        options: [
          "L2 regularization produces sparse weights",
          "Dropout applied during inference",
          "L1 adds squared weight penalties",
          "Dropout prevents overfitting by randomly disabling neurons"
        ],
        correctAnswer: 3,
        explanation: "Dropout deactivates neurons randomly during training to prevent overfitting.",
        cheat: "🎲 DROPOUT = Randomly turn off neurons (like unplugging random lights during training!)"
      },
      {
        id: "w3q4",
        question: "Which activation least suffers from vanishing gradients?",
        options: ["Tanh", "Sigmoid", "ReLU"],
        correctAnswer: 2,
        explanation: "ReLU gradient is 1 for positive, allowing effective flow.",
        cheat: "✨ ReLU = Gradient stays 1 (not squashed to tiny numbers like sigmoid!)"
      },
      {
        id: "w3q5",
        question: "Derivative of sigmoid function?",
        options: ["σ(x)·(1+σ(x))", "σ(x)²", "σ(x)·(1-σ(x))", "1/(1+e^x)"],
        correctAnswer: 2,
        explanation: "Sigmoid derivative is σ(x)(1−σ(x)).",
        cheat: "🎢 σ' = σ(1-σ) ... like 'sigma loves one minus itself'"
      },
      {
        id: "w3q6",
        question: "Perceptron convergence requires data to be?",
        options: ["Learning rate zero", "Non-linearly separable", "Linearly separable", "Sigmoid activation"],
        correctAnswer: 2,
        explanation: "Perceptron only converges for linearly separable data.",
        cheat: "📏 PERCEPTRON = Draws straight line. Needs LINEAR separation to work!"
      },
      {
        id: "w3q7",
        question: "Which logic function needs hidden layer?",
        options: ["AND", "OR", "NOT", "XOR"],
        correctAnswer: 3,
        explanation: "XOR is the classic non-linearly separable function.",
        cheat: "❌ XOR = The rebel! Can't draw one line to separate it (needs hidden layer)"
      },
      {
        id: "w3q8",
        question: "Why non-linear activations between MLP layers?",
        options: [
          "Without them, network is just linear",
          "They prevent overfitting",
          "They allow backpropagation"
        ],
        correctAnswer: 0,
        explanation: "Without non-linearity, stacking layers just creates another linear function.",
        cheat: "🍰 NO ACTIVATION = Stacking linear layers = still linear (like adding flat pancakes!)"
      },
      {
        id: "w3q9",
        question: "Output activation for binary classification?",
        options: ["Tanh", "ReLU", "Sigmoid", "Softmax"],
        correctAnswer: 2,
        explanation: "Sigmoid outputs probability for binary classification.",
        cheat: "2️⃣ BINARY = SIGMOID (squashes to 0-1 probability!)"
      },
      {
        id: "w3q10",
        question: "Which regularization encourages weight sparsity?",
        options: ["L1 regularization", "L2 regularization", "Dropout", "Early stopping"],
        correctAnswer: 0,
        explanation: "L1 regularization encourages sparsity.",
        cheat: "1️⃣ L1 = Makes weights exactly ZERO (sparse!). L2 = just makes them small"
      }
    ]
  },
  week4: {
    title: "Week 4: Word Embeddings",
    questions: [
      {
        id: "w4q1",
        question: "A one-hot vector representation captures semantic similarity between related words like \"king\" and \"queen\".",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "One-hot vectors are orthogonal; no similarity is encoded.",
        cheat: "🚫 ONE-HOT = All vectors perpendicular. King and Queen = strangers in one-hot world!"
      },
      {
        id: "w4q2",
        question: "Which method is used to reduce the dimensionality of a term-context matrix in count-based word representations?",
        options: ["Principal Component Analysis", "Matrix Inversion", "Singular Value Decomposition (SVD)", "Latent Dirichlet Allocation"],
        correctAnswer: 2,
        explanation: "SVD is used to obtain low-dimensional representations in latent semantic analysis.",
        cheat: "📉 SVD = The compressor! Squeezes big matrix into smaller meaningful one"
      },
      {
        id: "w4q3",
        question: "Which property makes tf-idf a better representation than raw term frequency?",
        options: [
          "It is non-linear",
          "It accounts for the informativeness of words",
          "It penalizes longer documents",
          "It uses hierarchical clustering"
        ],
        correctAnswer: 2,
        explanation: "IDF downweights common terms like 'the' and emphasizes rare but important ones.",
        cheat: "⭐ TF-IDF = Rare words shine! Common words like 'the' get dimmed down"
      },
      {
        id: "w4q4",
        question: "What is the purpose of using negative sampling in Word2Vec training?",
        options: [
          "To reduce dimensionality of word vectors",
          "To ensure gradient convergence",
          "To balance class distribution in classification",
          "To simplify softmax computation"
        ],
        correctAnswer: 3,
        explanation: "Negative sampling avoids computing softmax over the entire vocabulary.",
        cheat: "🎯 NEG SAMPLING = Don't check ALL words, just sample few negatives (saves compute!)"
      },
      {
        id: "w4q5",
        question: "In skip-gram Word2Vec, the model:",
        options: [
          "Predicts a word given its context",
          "Predicts the next sentence",
          "Predicts surrounding context words given a target word",
          "Learns n-gram frequencies"
        ],
        correctAnswer: 2,
        explanation: "Skip-gram learns by predicting surrounding words given a center word.",
        cheat: "⏭️ SKIP-GRAM = Center word → surrounding words (opposite of CBOW!)"
      },
      {
        id: "w4q6",
        question: "Why does SVD-based word embedding struggle with adding new words to the vocabulary?",
        options: [
          "It uses online learning",
          "It lacks semantic interpretability",
          "It assumes word order",
          "It is computationally expensive to retrain"
        ],
        correctAnswer: 3,
        explanation: "New words require recomputing the entire decomposition.",
        cheat: "🔨 SVD = Rebuild EVERYTHING for one new word (expensive renovation!)"
      },
      {
        id: "w4q7",
        question: "Which of the following best describes the term \"distributional hypothesis\" in NLP?",
        options: [
          "Words with high frequency have greater meaning",
          "Words are defined by their part-of-speech tags",
          "A word's meaning is characterized by the words around it",
          "Words should be normalized before vectorization"
        ],
        correctAnswer: 2,
        explanation: "A word's meaning is characterized by its context.",
        cheat: "👥 You ARE the company you keep - words defined by neighbors!"
      },
      {
        id: "w4q8",
        question: "In Word2Vec, similarity between word vectors is computed using Euclidean distance.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "Similarity is computed using dot product or cosine similarity.",
        cheat: "📐 Word2Vec = COSINE similarity (angle between vectors, not straight distance!)"
      },
      {
        id: "w4q9",
        question: "Which method solves the problem of OOV (Out-Of-Vocabulary) words better?",
        options: ["One-hot encoding", "CBOW", "Skip-gram with subsampling", "FastText embedding"],
        correctAnswer: 3,
        explanation: "FastText builds embeddings using character n-grams and handles unseen words.",
        cheat: "⚡ FASTTEXT = Breaks words into pieces (char n-grams). Can handle 'unknownword'!"
      },
      {
        id: "w4q10",
        question: "If the word \"economy\" occurs 4 times in a corpus, and \"growth\" appears in a window of 5 words around it 3 times, what is the entry for (economy, growth) in a term-context matrix?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: "It counts co-occurrences in the window — here, 3 times.",
        cheat: "🪟 WINDOW COUNT = How many times they appear TOGETHER (3!), not alone"
      }
    ]
  },
  week5: {
    title: "Week 5: RNNs & Attention",
    questions: [
      {
        id: "w5q1",
        question: "Which of the following best explains the vanishing gradient problem in RNNs?",
        options: [
          "RNNs lack memory mechanisms for long-term dependencies.",
          "Gradients grow too large during backpropagation.",
          "Gradients shrink exponentially over long sequences.",
          "RNNs cannot process variable-length sequences."
        ],
        correctAnswer: 2,
        explanation: "Gradients shrink exponentially through time.",
        cheat: "📉 VANISHING = Gradient gets multiplied <1 many times → becomes tiny!"
      },
      {
        id: "w5q2",
        question: "In an attention mechanism, what does the softmax function ensure?",
        options: [
          "Normalization of decoder outputs",
          "Stability of gradients during backpropagation",
          "Values lie between -1 and 1",
          "Attention weights sum to 1"
        ],
        correctAnswer: 3,
        explanation: "The softmax is applied to attention scores to produce a probability distribution over encoder hidden states. This ensures the weights sum to 1.",
        cheat: "🎯 SOFTMAX = Makes weights into probabilities (must sum to 1!)"
      },
      {
        id: "w5q3",
        question: "Which of the following is true about the difference between a standard RNN and an LSTM?",
        options: [
          "LSTM does not use any non-linear activation.",
          "LSTM has a gating mechanism to control information flow.",
          "RNNs have fewer parameters than LSTMs because they use convolution.",
          "LSTMs cannot learn long-term dependencies."
        ],
        correctAnswer: 1,
        explanation: "LSTM has gates to control information flow.",
        cheat: "🚪 LSTM = Has GATES (forget, input, output) - RNN has none!"
      },
      {
        id: "w5q4",
        question: "Which gate in an LSTM is responsible for deciding how much of the cell state to keep?",
        options: ["Forget gate", "Input gate", "Output gate", "Cell candidate gate"],
        correctAnswer: 0,
        explanation: "The forget gate determines what fraction of the previous cell state should be retained in the current timestep.",
        cheat: "🧠 FORGET GATE = Eraser! Decides what to keep vs forget from memory"
      },
      {
        id: "w5q5",
        question: "What improvement does attention bring to the basic Seq2Seq model?",
        options: [
          "Reduces training time",
          "Removes the need for an encoder",
          "Allows access to all encoder states during decoding",
          "Reduces the number of model parameters"
        ],
        correctAnswer: 2,
        explanation: "Attention allows the decoder to consider all encoder hidden states dynamically.",
        cheat: "👀 ATTENTION = Decoder can look at ALL encoder states (not just last one!)"
      },
      {
        id: "w5q6",
        question: "Which of the following is a correct statement about the encoder-decoder architecture?",
        options: [
          "The encoder generates tokens one at a time.",
          "The decoder summarizes the input sequence.",
          "The decoder generates outputs based on encoder representations and its own prior outputs.",
          "The encoder stores only the first token of the sequence."
        ],
        correctAnswer: 2,
        explanation: "The decoder uses both the encoder's output and its own previously generated tokens to produce the next output.",
        cheat: "🔄 DECODER = Uses encoder output + what it already generated"
      },
      {
        id: "w5q7",
        question: "What is self-attention in Transformers used for?",
        options: [
          "To enable sequential computation",
          "To attend to the previous layer's output",
          "To relate different positions in the same sequence",
          "To enforce fixed-length output"
        ],
        correctAnswer: 2,
        explanation: "Self-attention allows each token to focus on all other tokens in the same sequence.",
        cheat: "🔗 SELF-ATTENTION = Each word looks at ALL other words in sentence"
      },
      {
        id: "w5q8",
        question: "Why are RNNs preferred over fixed-window neural models?",
        options: [
          "They have a smaller parameter size.",
          "They can process sequences of arbitrary length.",
          "They eliminate the need for embedding layers.",
          "None of the above."
        ],
        correctAnswer: 1,
        explanation: "RNNs can handle variable-length sequences.",
        cheat: "📏 RNN = Flexible length! Fixed-window = stuck with one size"
      },
      {
        id: "w5q9",
        question: "Given the following encoder and decoder hidden states, compute the attention scores. (Use dot product as the scoring function) Encoder hidden states: h1=[7,3], h2=[0,2], h3=[1,4] Decoder hidden state: s=[0.2,1.5]",
        options: ["0.42, 0.02, 0.56", "0.15, 0.53, 0.32", "0.64, 0.18, 0.18", "0.08, 0.91, 0.01"],
        correctAnswer: 0,
        explanation: "e1 = 7*0.2+3*1.5 = 5.9, e2 = 0*0.2+2*1.5 = 3, e3 = 1*0.2+4*1.5 = 6.2. α1 = e^5.9/(e^5.9 + e^3 + e^6.2) = 0.42, α2 = e^3/(e^5.9 + e^3 + e^6.2) = 0.02, α3 = e^6.2/(e^5.9 + e^3 + e^6.2) = 0.56",
        cheat: "🧮 ATTENTION = Dot product scores → softmax → probabilities!"
      }
    ]
  },
  week6: {
    title: "Week 6: Transformers",
    questions: [
      {
        id: "w6q1",
        question: "True or False: RoPE uses additive embeddings like sinusoidal encoding.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "RoPE uses rotary/multiplicative embeddings, not additive.",
        cheat: "🌀 RoPE = ROTARY (spins vectors), not additive like sinusoidal!"
      },
      {
        id: "w6q2",
        question: "Which of the following is true about multi-head attention?",
        options: [
          "It increases model interpretability by using a single set of attention weights",
          "Each head operates on different parts of the input in parallel",
          "It reduces the number of parameters in the model",
          "Heads are averaged before applying the softmax function"
        ],
        correctAnswer: 1,
        explanation: "Each attention head processes different learned projections of the input, enabling the model to capture different features.",
        cheat: "👥 MULTI-HEAD = Multiple experts looking at different aspects SIMULTANEOUSLY"
      },
      {
        id: "w6q3",
        question: "What is the role of the residual connection in the Transformer architecture?",
        options: [
          "Improve gradient flow during backpropagation",
          "Normalize input embeddings",
          "Reduce computational complexity",
          "Prevent overfitting"
        ],
        correctAnswer: 0,
        explanation: "Residual connections help gradients flow.",
        cheat: "🌊 RESIDUAL = Highway for gradients (shortcuts past layers!)"
      },
      {
        id: "w6q4",
        question: "True or False: The feedforward network in a Transformer block introduces non-linearity between attention layers.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "FFN introduces non-linearity between attention layers.",
        cheat: "⚡ FFN = Adds non-linearity (ReLU!) between attention layers"
      },
      {
        id: "w6q5",
        question: "Fill in the blank: The sinusoidal positional encoding uses sine for even dimensions and ___ for odd dimensions.",
        options: ["sine", "cosine", "tangent", "None of these"],
        correctAnswer: 1,
        explanation: "Uses sine for even, cosine for odd dimensions.",
        cheat: "🎵 SIN-COS pattern: EVEN=SIN, ODD=COS (alternating waves!)"
      },
      {
        id: "w6q6",
        question: "Why is positional encoding added to input embeddings in Transformers?",
        options: [
          "To provide unique values for each word",
          "To indicate the position of tokens since Transformers are non-sequential",
          "To scale embeddings",
          "To avoid vanishing gradients"
        ],
        correctAnswer: 1,
        explanation: "Transformers process all tokens in parallel, need position info.",
        cheat: "📍 TRANSFORMER = Processes all at once (parallel), needs position labels!"
      },
      {
        id: "w6q7",
        question: "You are given a self-attention layer with input dimension 512, using 8 heads. What is the output dimension per head?",
        options: ["64", "128", "32", "256"],
        correctAnswer: 0,
        explanation: "Each head processes 512/8 = 64 dimensions",
        cheat: "➗ SPLIT EVENLY: Total / Heads = 512/8 = 64"
      },
      {
        id: "w6q8",
        question: "For a transformer with dmodel = 512, calculate the positional encoding for position p=14 and dimensions 6 and 7 using the sinusoidal formula: PE(p,2i) = sin(p/10000^(2i/dmodel)), PE(p,2i+1) = cos(p/10000^(2i/dmodel))",
        options: [
          "sin(14/10000^(3/256)), cos(14/10000^(3/256))",
          "cos(14/10000^(6/256)), sin(14/10000^(7/256))",
          "cos(14/10000^(3/256)), sin(14/10000^(3/256))",
          "sin(14/10000^(3/512)), cos(14/10000^(3/256))"
        ],
        correctAnswer: 0,
        explanation: "For dimension 6, PE(14,6) = sin(14/10000^(6/512)) = sin(14/10000^(3/256)). For dimension 7, PE(14,7) = cos(14/10000^(6/512)) = cos(14/10000^(3/256))",
        cheat: "📐 POSITIONAL ENCODING = Even dims use sin, odd dims use cos!"
      }
    ]
  },
  week7: {
    title: "Week 7: Pre-training & Fine-tuning",
    questions: [
      {
        id: "w7q1",
        question: "Why can a pre-trained BART model be fine-tuned directly for abstractive summarization?",
        options: [
          "Its encoder alone is sufficient.",
          "It shares vocabulary with summarization datasets.",
          "It uses a larger context window than BERT.",
          "It already contains a generative decoder trained jointly during pre-training."
        ],
        correctAnswer: 3,
        explanation: "BART (Bidirectional and Auto-Regressive Transformer) is explicitly designed as an encoder-decoder model. Its pre-training task involves corrupting an input and training the model to reconstruct the original, clean text. This pre-training process jointly trains a bidirectional encoder and an autoregressive decoder. Because BART already possesses this powerful, pre-trained generative decoder, it is perfectly suited for fine-tuning on other generative tasks like summarization.",
        cheat: "🎯 BART = Has both encoder AND decoder pre-trained (ready for generation!)"
      },
      {
        id: "w7q2",
        question: "For pre-training of encoder-decoder models, which statement(s) is/are true?",
        options: [
          "The encoder attends bidirectionally to its whole input.",
          "The decoder conditions on earlier decoder tokens and encoder outputs.",
          "Unlabelled text is turned into a supervised task via a noising scheme.",
          "Training relies on a next-sentence-prediction loss."
        ],
        correctAnswer: [0, 1, 2],
        explanation: "(a) True: The encoder part is designed to be bidirectional, allowing it to build a rich representation by considering both left and right context. (b) True: The decoder is autoregressive, using causal self-attention for previously generated tokens and cross-attention for encoder outputs. (c) True: This is the core idea - apply a noising function to input and train the model to denoise it. (d) False: NSP was used for BERT (encoder-only), not encoder-decoder models like BART and T5.",
        cheat: "🔄 ENCODER-DECODER: Bi-directional encoder + autoregressive decoder + denoising task"
      },
      {
        id: "w7q3",
        question: "Which attention mask(s) prevent(s) a token from looking at future positions?",
        options: ["Causal mask", "Fully-visible mask", "Prefix-LM mask", "All of the above", "None of the above"],
        correctAnswer: [0, 2],
        explanation: "(a) Causal mask: Standard mask in decoder-only models ensuring a token at position i can only attend to tokens at positions 1...i. (c) Prefix-LM mask: Hybrid that allows fully-visible attention over the prefix but applies causal mask to the suffix, preventing future peeking in the generated part. (b) Fully-visible mask: Used in encoders, allows every token to attend to every other token including future ones.",
        cheat: "🙈 CAUSAL + PREFIX-LM = No time travel! Can't see future tokens"
      },
      {
        id: "w7q4",
        question: "T5 experiments showed that clean and compact pre-training data can outperform a larger but noisier corpus primarily because:",
        options: [
          "Larger corpora overfit.",
          "Noise forces the model to waste capacity on modelling irrelevant patterns.",
          "Clean data has longer documents.",
          "Compact data allows bigger batches."
        ],
        correctAnswer: 1,
        explanation: "The T5 paper introduced the \"Colossal Clean Crawled Corpus\" (C4), which was meticulously filtered to remove non-natural-language content. A model trained on noisy data must use a portion of its finite capacity to learn patterns in the noise (e.g., how to predict JavaScript code or HTML tags). This \"wasted capacity\" is then unavailable for learning the useful patterns of natural language.",
        cheat: "🗑️ GARBAGE IN = Model learns junk (wastes brain on HTML tags!)"
      },
      {
        id: "w7q5",
        question: "What makes sampling from an auto-regressive language model straightforward?",
        options: [
          "The model is deterministic.",
          "The vocabulary is small.",
          "Each conditional distribution over the vocabulary is readily normalised and can be sampled token-by-token.",
          "Beam search guarantees optimality."
        ],
        correctAnswer: 2,
        explanation: "At each step, the model takes the context and produces a vector of logits for every token in the vocabulary. A softmax function is applied to these logits to create a complete, normalized probability distribution. Sampling is then the straightforward process of picking one token from this distribution.",
        cheat: "🎲 AUTO-REGRESSIVE = Softmax gives clean probabilities → easy to sample!"
      },
      {
        id: "w7q6",
        question: "Why does ELMo build its input token representations from a character-level CNN instead of fixed word embeddings?",
        options: [
          "To reduce training time by sharing parameters",
          "To avoid UNK tokens and generate representations for any string",
          "To compress embeddings to 128 dimensions",
          "To ensure the same vector for a word in every context"
        ],
        correctAnswer: 1,
        explanation: "The primary advantage of using a character-level CNN is to handle out-of-vocabulary (OOV) words. A model with fixed word embeddings has a finite vocabulary; any word not in this vocabulary is mapped to a single \"UNK\" token, losing all its meaning. By building representations from characters, ELMo can compose a unique vector for any word, including rare words, misspelled words, or new words, as long as it's made of known characters.",
        cheat: "🔤 ELMo = Builds from CHARACTERS → handles any word (even typos!)"
      },
      {
        id: "w7q7",
        question: "The einsum function in numpy is used as a generalized operation for performing tensor multiplications. Now, consider two matrices: A = [[2, 8], [4, 3]] and B = [[-9, 9], [0, 11]]. Then, what is the output of the following numpy operation? numpy.einsum('ij,ij->', A, B)",
        options: ["87", "54", "33", "120"],
        correctAnswer: 0,
        explanation: "The einsum notation 'ij,ij->' defines element-wise multiplication followed by sum. A⊙B = [[-18, 72], [0, 33]]. Sum = (-18) + 72 + 0 + 33 = 87",
        cheat: "🧮 EINSUM = Element-wise multiply then sum all elements!"
      }
    ]
  },
  week8: {
    title: "Week 8: Instruction Tuning & RLHF",
    questions: [
      {
        id: "w8q1",
        question: "In standard instruction tuning with a decoder-only LM, which tokens typically contribute to the next-token prediction loss?",
        options: ["Only the prompt tokens", "Only the response tokens", "Both prompt and response tokens", "Neither; loss is computed at the sequence level only"],
        correctAnswer: 1,
        explanation: "Instruction tuning trains a model to generate a desired response given an instruction (prompt). In a decoder-only model, the prompt and response are concatenated. The model's objective is to predict the next token. The loss (e.g., cross-entropy) is only calculated for the response tokens. The prompt tokens serve as the conditioning context, but we are not training the model to predict the prompt itself, only to predict the correct answer that should follow it.",
        cheat: "🎓 INSTRUCTION TUNING = Train on RESPONSE only (prompt is just context!)"
      },
      {
        id: "w8q2",
        question: "Why can using multiple instruction templates for the same task help?",
        options: [
          "It only increases the dataset size.",
          "It regularizes the reward model.",
          "It improves generalization by exposing the model to different phrasings of the instruction.",
          "It ensures the same tokenization across tasks."
        ],
        correctAnswer: 2,
        explanation: "The goal of instruction tuning is to teach the model to follow instructions in general, not just to memorize a few specific task formats. By training on multiple templates—which are different phrasings of the same underlying instruction—the model is exposed to a wider variety of linguistic structures. This helps the model learn and generalize more effectively to new, unseen instructions at test time.",
        cheat: "🎭 TEMPLATES = Different ways to ask same thing → better generalization!"
      },
      {
        id: "w8q3",
        question: "As the model size grows, what happens to prompt length and initialization sensitivity in prompt tuning?",
        options: [
          "Both matter more.",
          "Both matter less.",
          "Length matters less but initialization matters more.",
          "Initialization matters less but length matters more."
        ],
        correctAnswer: 1,
        explanation: "As the model size increases, the performance gap between different prompt lengths becomes very small and they converge to a similar high score. While smaller models are very sensitive to how the soft prompt is initialized, larger models achieve high performance regardless of the initialization method. Therefore, as models scale, they become more robust, and both prompt length and initialization \"matter less.\"",
        cheat: "💪 BIGGER MODEL = Less picky about prompt length & initialization!"
      },
      {
        id: "w8q4",
        question: "Which of the following statement(s) is/are true about the POSIX metric for quantifying prompt sensitivity?",
        options: [
          "POSIX is independent of the correctness of the generated responses and captures sensitivity as a property independent of correctness",
          "POSIX is a length-normalized metric",
          "POSIX compares the generated responses against the ground-truth to quantify prompt sensitivity",
          "POSIX captures the variance in the log-likelihood of the same response for different input prompt variations"
        ],
        correctAnswer: [0, 1, 3],
        explanation: "(a) True: The POSIX metric measures the stability of a model's output probabilities in response to prompt variations, not whether those outputs are factually correct. (b) True: The POSIX formula explicitly includes the term 1/L for length normalization. (c) False: The POSIX formula only compares the model's probabilities for its own generated responses given different prompts. It does not use a ground-truth label. (d) True: The core of the metric is the log of the likelihood ratio, which directly captures the relative-change in log-likelihood of a response when the prompt is changed.",
        cheat: "📏 POSIX = Measures SENSITIVITY (not correctness!) with length normalization"
      },
      {
        id: "w8q5",
        question: "Which statement is true about prompt sensitivity as captured by POSIX?",
        options: [
          "Larger models always have lower prompt sensitivity than smaller ones.",
          "Larger models always have higher prompt sensitivity than smaller ones.",
          "Prompt sensitivity decreases for models with a parameter count above a certain threshold.",
          "Increasing parameter count does not necessarily reduce prompt sensitivity."
        ],
        correctAnswer: 3,
        explanation: "The experimental results demonstrate that the relationship between model size and sensitivity is not linear or guaranteed. Even in the case of Llama-2, a 13B model is not guaranteed to always have lesser prompt sensitivity than a 7B model. We can thus infer that an increase in parameter count does not necessarily decrease prompt sensitivity.",
        cheat: "❓ SIZE ≠ GUARANTEE - Bigger doesn't always mean less sensitive!"
      },
      {
        id: "w8q6",
        question: "In training a reward model with pairwise preferences (x, y+, y-), the Bradley-Terry style objective encourages:",
        options: [
          "Maximizing r(x,y-) - r(x,y+)",
          "Minimizing the entropy of the policy",
          "Maximizing log σ(r(x,y+) - r(x,y-))",
          "Setting r(x,y) equal to the log-probability under π"
        ],
        correctAnswer: 2,
        explanation: "The goal of training a reward model is to teach it to assign a higher score to the preferred response (y+) than to the rejected response (y-). The Bradley-Terry model defines the probability that y+ is preferred as a function of the difference in their scores, passed through a sigmoid function. To train the RM, we use Maximum Likelihood Estimation, which aims to find the parameters that maximize the log-probability of the observed human preferences. This directly leads to the objective function: max ∑ log σ(r(x,y+)−r(x,y−)).",
        cheat: "➕ BRADLEY-TERRY = Reward(good) - Reward(bad) → positive difference!"
      },
      {
        id: "w8q7",
        question: "Which of the following are recommended while performing REINFORCE-style policy optimization?",
        options: [
          "Use the log-derivative trick to obtain an unbiased gradient estimator.",
          "Weight token-level log-probs by the advantage function to reduce variance.",
          "Use importance weights and clip them when sampling from a fixed policy.",
          "Avoid any clipping to preserve gradient magnitude."
        ],
        correctAnswer: [0, 1, 2],
        explanation: "(a) True: The log-derivative trick is the core mathematical technique used to rewrite the policy gradient objective into an expectation. (b) True: Standard REINFORCE has high variance. To reduce this, the gradient is weighted by the advantage function instead of the full cumulative reward. (c) True: To improve sample efficiency, PPO uses importance weights to allow for multiple gradient updates using samples from an old policy. To ensure stability, these importance weights are clipped. (d) False: Clipping importance weights is a crucial part of PPO to prevent large, unstable gradient updates.",
        cheat: "🎯 REINFORCE = Log trick + Advantage + Clipped importance weights"
      },
      {
        id: "w8q8",
        question: "Which method combines reward maximization and minimizing KL divergence?",
        options: ["REINFORCE", "Monte Carlo Approximation", "Proximal Policy Optimization", "Constitutional AI"],
        correctAnswer: 2,
        explanation: "Proximal Policy Optimization (PPO) is the specific algorithm used to optimize the combined objective. It uses a clipped surrogate objective that approximates this KL-constrained function, effectively balancing reward-seeking with policy stability.",
        cheat: "⚖️ PPO = Maximize reward BUT don't change too much (KL constraint!)"
      },
      {
        id: "w8q9",
        question: "Which of the following is the reason for performing alignment beyond instruction tuning in LLMs?",
        options: [
          "Instruction tuning guarantees safety on harmful queries.",
          "Alignment can prevent outputs that a model might otherwise deem correct, but humans find unacceptable.",
          "Alignment is only needed for small models.",
          "Instruction tuning already optimizes a human preference model."
        ],
        correctAnswer: 1,
        explanation: "Instruction tuning might produce both a helpful answer and a harmful one. Instruction tuning cannot reliably prevent the harmful output. Alignment (like RLHF) is the next step, which uses human preference data to fine-tune the model. Its specific purpose is to prevent certain outputs that the model assumes to be correct, but humans consider wrong (or harmful/unacceptable).",
        cheat: "🛡️ ALIGNMENT = Safety layer! Model might be 'correct' but harmful"
      },
      {
        id: "w8q10",
        question: "Let πθ be the probability of choosing token a in state s assigned by the current policy being optimized, πk be that by the old/reference policy and ε > 0 be the clip parameter. When the token-level advantage At is positive, PPO-CLIP maximizes which of the following expression at step t?",
        options: [
          "max(πθ/πk, 1-ε)At",
          "max(πk/πθ, 1-ε)At",
          "min(πk/πθ, 1+ε)At",
          "min(πθ/πk, 1+ε)At"
        ],
        correctAnswer: 3,
        explanation: "The PPO-CLIP objective is designed to prevent the new policy from moving too far from the old policy in a single update. When the advantage At is positive, it means the action was good, and we want to increase its probability. This means we want to increase the ratio r = πθ/πk. However, to ensure stability, we \"clip\" this increase. We don't want the ratio r to go higher than (1+ε). Therefore, the algorithm takes the minimum of the actual ratio (r) and the clipped ratio ((1+ε)). This clipped ratio is then multiplied by the positive advantage At. The objective to maximize is: min(πθ/πk, 1+ε)At(s,a).",
        cheat: "✂️ CLIP = Don't let ratio grow beyond 1+ε (prevent big jumps!)"
      }
    ]
  },
  week9: {
    title: "Week 9: Knowledge Graphs",
    questions: [
      {
        id: "w9q1",
        question: "In the knowledge-graph training pipeline that models P(o | s, r) with a softmax over all entities, what practical difficulty motivates the use of negative sampling?",
        options: [
          "The softmax is undefined for KG scores.",
          "The denominator sums over all entities, which is computationally expensive.",
          "The numerator requires the full adjacency list for each relation.",
          "The scores must be normalized per relation rather than globally."
        ],
        correctAnswer: 1,
        explanation: "The softmax probability for predicting the object o given a subject s and relation r requires summing the exponentiated scores over all possible entities in the entire knowledge graph. Knowledge graphs can contain millions of entities, making this summation computationally intractable or extremely expensive during training. Negative sampling is introduced as a technique to approximate this denominator by sampling a small subset of \"negative\" entities, rather than summing over all of them, thereby making the computation feasible.",
        cheat: "💰 NEGATIVE SAMPLING = Don't sum ALL entities (millions!), just sample few"
      },
      {
        id: "w9q2",
        question: "Which statements correctly characterize the local closed-world assumption in KG training with negative sampling?",
        options: [
          "Any unobserved triple is treated as false for training purposes.",
          "It is strictly correct because KGs are exhaustive.",
          "It helps training but may mislabel genuinely missing positives as negatives.",
          "It eliminates the need for development/test splits."
        ],
        correctAnswer: [0, 2],
        explanation: "(a) True: Negative sampling works by taking a known positive fact and corrupting it to create a triple. The training process then assumes this newly generated, unobserved triple is false (negative). (c) True: This assumption is made for practical training purposes. However, real-world knowledge graphs are known to be highly incomplete. Therefore, it's possible that a randomly generated triple is actually a true fact that just happens to be missing from the KG. Treating it as negative during training is technically incorrect in such cases, but it's a necessary approximation. (b) False: Knowledge graphs are far from exhaustive or complete. (d) False: The local closed-world assumption is a training assumption. It does not replace the need for separate development and test sets.",
        cheat: "🌍 CLOSED-WORLD = Assume 'not seen' = false (but KGs incomplete, so risky!)"
      },
      {
        id: "w9q3",
        question: "For discriminative training, why is it infeasible to enforce all constraints f(s, r, o) ≥ m + f(s',r,o') over every possible negative triple?",
        options: [
          "The number of possible facts is O(E²R), overwhelmingly larger than positives.",
          "Because scores cannot be compared across relations.",
          "Because margins must be tuned per entity.",
          "Because negatives are always ambiguous."
        ],
        correctAnswer: 0,
        explanation: "Discriminative training aims to ensure that the score of a true positive fact f(s,r,o) is higher than the score of a negative fact f(s',r',o') by at least a margin m. If a knowledge graph has E entities and R relations, the total number of possible triples (potential facts) is E × R × E = E²R. Typically, only a very small fraction of these possible triples are actual true facts present in the KG. Trying to enforce the margin constraint against every possible negative triple would involve computing a loss term for nearly E²R triples for each positive triple. This number is astronomically large for typical KGs, making it computationally infeasible.",
        cheat: "🌌 E²R = ASTRONOMICAL number (millions × millions!). Can't check all!"
      },
      {
        id: "w9q4",
        question: "Which statement best describes score polarity in KG models?",
        options: [
          "Scores must always be larger for false triples.",
          "Score polarity is fixed by the dataset.",
          "Some models use higher scores for more plausible triples; others use lower, and probabilities/losses can be adapted accordingly.",
          "Polarity only matters for RotatE."
        ],
        correctAnswer: 2,
        explanation: "KG completion models use a scoring function f(s,r,o) to assign a real-valued score indicating the plausibility of a triple. Some models are designed such that a higher score means the triple is more likely to be true (e.g., models trained with softmax loss where the score is in the exponent). Other models, like TransE, use a distance-based score (e.g., ||s+r-o||) where a lower score indicates higher plausibility. The choice of polarity depends on the model design. The loss function (e.g., softmax cross-entropy vs. margin-based hinge loss) can typically be adjusted to work with either polarity.",
        cheat: "🔄 POLARITY = Flexible! Higher OR lower can mean 'true' (model choice)"
      },
      {
        id: "w9q5",
        question: "Compared to semantic interpretation (logical-form execution), a differentiable KGQA system:",
        options: [
          "Requires a hand-coded logical form for every question.",
          "Cannot be trained end-to-end.",
          "Provides complete interpretability of reasoning steps.",
          "Learns dense question and graph embeddings and uses cross-attention to align them."
        ],
        correctAnswer: 3,
        explanation: "Semantic Interpretation: This approach first translates the natural language question into a formal, structured query. This query is then executed against the KG. It is generally more interpretable but harder to train end-to-end. Differentiable KG QA: This approach avoids creating an explicit logical form. Instead, it learns dense vector representations (embeddings) for both the question (e.g., using BERT) and the graph elements (e.g., using GCNs). Cross-attention mechanisms are then used to find correspondences between the question embedding and the graph embeddings to identify the relevant subgraph or answer entity. This allows for end-to-end training but is less interpretable.",
        cheat: "🧠 DIFFERENTIABLE = Dense vectors + cross-attention (no explicit logic!)"
      },
      {
        id: "w9q6",
        question: "Which statements correctly describe filtered evaluation?",
        options: [
          "It removes candidates that are true facts in train/dev from the ranked list before scoring the test query.",
          "It increases fairness by not penalizing the model for ranking another correct answer that happened to be in training data.",
          "It always decreases MRR.",
          "It affects measures like MRR and MAP."
        ],
        correctAnswer: [0, 1, 3],
        explanation: "(a) True: During evaluation for a query like (s,r,?), the model produces a ranked list of candidate objects. Filtered evaluation involves checking if any highly ranked candidates are already known to be true answers in the training or development sets. If so, these known answers are removed from the list before calculating the rank of the actual test answer(s). (b) True: Without filtering, if the model correctly ranks a known training fact higher than the test fact, the rank of the test fact would be penalized. Filtering removes the known answer, potentially improving the rank of the test answer. This is considered fairer because the model shouldn't be penalized for retrieving other valid answers. (d) True: By changing the effective rank of the correct test answer(s), filtered evaluation directly impacts rank-based metrics like Mean Reciprocal Rank (MRR) and Mean Average Precision (MAP). (c) False: Filtering typically increases (or keeps the same) metrics like MRR and Hits@K because it removes \"competing\" correct answers that might have ranked higher than the target test answer.",
        cheat: "🔍 FILTERED = Remove known answers from ranking (fairer evaluation!)"
      },
      {
        id: "w9q7",
        question: "Which of the following best captures the motivation for KG completion?",
        options: [
          "KGs are complete; KG completion mainly compresses them.",
          "Manual curation keeps KGs fully up-to-date.",
          "KGs are useful but incomplete, so we learn embeddings and a scoring function to infer missing facts.",
          "KG completion is only for alignment across languages."
        ],
        correctAnswer: 2,
        explanation: "Knowledge graphs (KGs) are valuable resources for many applications like QA and search. However, they suffer from significant incompleteness; many true facts are missing. It's impossible to manually curate all human knowledge or keep it perfectly current. Therefore, KG completion is a crucial task. It aims to automatically infer missing facts by learning patterns from the existing KG structure, often by training embeddings for entities and relations and defining a scoring function to predict the likelihood of potential triples.",
        cheat: "🧩 KG COMPLETION = Fill the gaps! KGs always have missing pieces"
      },
      {
        id: "w9q8",
        question: "Consider pairwise hinge/ReLU loss for discriminative training with margin m: max{ 0, m + f(s'k , r, o'k) − f(s, r, o) }. When does this loss become exactly zero for a given negative (s'k , r, o'k)?",
        options: [
          "When f(s, r, o) ≥ m + f(s'k , r, o'k)",
          "When f(s, r, o) = f(s'k , r, o'k)",
          "When f(s'k , r, o'k) ≥ m + f(s, r, o)",
          "Only when m = 0"
        ],
        correctAnswer: 0,
        explanation: "The hinge/ReLU loss is defined as max{0,argument}. The loss is zero if and only if the argument is less than or equal to zero. In this case, the argument is m + f(s'k ,r,o'k) − f(s,r,o). So, the loss is zero when: m + f(s'k ,r,o'k) − f(s,r,o) ≤ 0. Rearranging this inequality gives: f(s,r,o) ≥ m + f(s'k ,r,o'k). This matches the desired condition for discriminative training: the score of the positive triple f(s, r, o) should be greater than the score of the negative triple f(s'k ,r,o'k) by at least the margin m.",
        cheat: "✅ ZERO LOSS = Positive beats negative by at least margin m!"
      },
      {
        id: "w9q9",
        question: "Uniform negative sampling can introduce an extra bias unless you do which of the following when forming the sampled denominator?",
        options: [
          "Exclude the true object o from the denominator.",
          "Normalize scores per relation type.",
          "Sample only from entities not connected to s.",
          "Always include the true object o in the denominator."
        ],
        correctAnswer: 3,
        explanation: "When approximating the softmax denominator using negative sampling, we replace the full sum with a scaled sum over sampled negatives. However, this sampled sum doesn't necessarily include the true object o. To get a better-behaved estimate (reducing potential bias in the denominator), one must include o into the denominator by force. This ensures the true positive score always contributes to the normalization term.",
        cheat: "✨ INCLUDE TRUE = Don't forget the actual answer in your sample!"
      },
      {
        id: "w9q10",
        question: "Which of the following is the RotatE scoring function?",
        options: [
          "f(s, r, o) = ||s+r−o||²",
          "f(s, r, o) = ||s⊙r−o||², where r lies on the unit circle element-wise",
          "f(s, r, o) = sᵀRᵣo with Rᵣ orthonormal",
          "f(s, r, o) = −⟨s, r, o⟩"
        ],
        correctAnswer: 1,
        explanation: "The RotatE model represents entities (s,o) and relations (r) as vectors in complex space. Crucially, the relation embeddings r are constrained such that each element has a magnitude of 1 (i.e., |r_i| = 1), representing a rotation in that complex dimension. The scoring function measures the squared distance between the rotated subject (s ⊙ r, where ⊙ is element-wise complex multiplication) and the object (o): f(s, r, o) = ||s ⊙ r - o||². This exactly matches option (b).",
        cheat: "🌀 RotatE = ROTATE subject by relation (⊙ = complex multiplication!)"
      }
    ]
  },
  week10: {
    title: "Week 10: Parameter-Efficient Fine-tuning",
    questions: [
      {
        id: "w10q1",
        question: "How do Prefix Tuning and Adapters differ in terms of where they inject new task-specific parameters in the Transformer architecture?",
        options: [
          "Prefix Tuning adds new feed-forward networks after every attention block, while Adapters prepend tokens.",
          "Both approaches modify only the final output layer but in different ways.",
          "Prefix Tuning learns trainable \"prefix\" hidden states at each layer's input, whereas Adapters insert small bottleneck modules inside the Transformer blocks.",
          "Both approaches rely entirely on attention masks to inject new task-specific knowledge."
        ],
        correctAnswer: 2,
        explanation: "Prefix Tuning: In this approach, we learn a sequence of \"prefix\" embeddings - trainable hidden states - that get prepended to the model's internal representations at each layer. This means the main Transformer weights stay frozen, and the prefix acts like extra context or \"virtual tokens\" that the model attends to. Adapters: Adapters insert small, trainable modules (often feed-forward \"bottleneck\" layers) inside each Transformer layer, typically after the attention or feed-forward sub-layers. They are small enough to keep the main model weights mostly intact while still enabling fine-tuning for new tasks. Therefore, the main difference is that Prefix Tuning adds trainable \"prefix\" embeddings at the input side of each layer, while Adapters add small modules inside the architecture.",
        cheat: "📌 PREFIX = Virtual tokens at start. ADAPTERS = Small modules inside layers"
      },
      {
        id: "w10q2",
        question: "The Structure-Aware Intrinsic Dimension (SAID) improves over earlier low-rank adaptation approaches by:",
        options: [
          "Ignoring the network structure entirely",
          "Learning one scalar per layer for layer-wise scaling",
          "Sharing the same random matrix across all layers",
          "Using adapters within self-attention layers"
        ],
        correctAnswer: 1,
        explanation: "Structure-Aware Intrinsic Dimension (SAID): This method learns a small set of parameters - often including one scalar per layer - to scale or adjust each layer. Instead of ignoring the model's structure, it captures the global scaling behaviour across layers with minimal additional parameters.",
        cheat: "🎚️ SAID = One knob per layer (structure-aware scaling!)"
      },
      {
        id: "w10q3",
        question: "Which of the following are correct about the extensions of LoRA?",
        options: [
          "LongLoRA supports inference on longer sequences using global attention",
          "QLoRA supports low-rank adaptation on 4-bit quantized models",
          "DyLoRA automatically selects the optimal rank during training",
          "LoRA+ introduces gradient clipping to stabilize training"
        ],
        correctAnswer: [1, 2],
        explanation: "QLoRA (b) applies the LoRA idea to a quantized model, typically at 4-bit precision, enabling efficient fine-tuning with significantly reduced memory use. DyLoRA (c) is an approach that dynamically picks the optimal rank during training, thereby adapting the low-rank decomposition to the task at hand. Both (b) and (c) are correct.",
        cheat: "4️⃣ QLoRA = LoRA on 4-bit! DyLoRA = Dynamic rank selection"
      },
      {
        id: "w10q4",
        question: "Which pruning technique specifically removes weights with the smallest absolute values first, potentially followed by retraining to recover accuracy?",
        options: ["Magnitude Pruning", "Structured Pruning", "Random Pruning", "Knowledge Distillation"],
        correctAnswer: 0,
        explanation: "Magnitude Pruning removes weights whose absolute values are below a certain threshold (i.e., the smallest magnitudes). The rationale is that weights with small magnitudes contribute less to overall model outputs. After pruning them, one can optionally retrain (also called \"fine-tuning\" after pruning) to recover lost accuracy.",
        cheat: "✂️ MAGNITUDE = Cut the weakest (smallest absolute values go first!)"
      },
      {
        id: "w10q5",
        question: "In Post-Training Quantization (PTQ) for LLMs, why is a calibration dataset used?",
        options: [
          "To precompute the entire attention matrix for all tokens.",
          "To remove outlier dimensions before applying magnitude-based pruning.",
          "To fine-tune the entire model on a small dataset and store the new weights.",
          "To estimate scale factors for quantizing weights and activations under representative data conditions."
        ],
        correctAnswer: 3,
        explanation: "Calibration Dataset: In PTQ, you typically don't retrain the model. Instead, you gather a small \"calibration set\" of representative examples. By running these examples through the model, you observe the distribution of activations (and possibly weights). This helps you pick appropriate scale factors (or quantization parameters) so that the quantized model preserves accuracy as much as possible. Thus, it's about extracting distribution statistics to set the quantization scale and zero points.",
        cheat: "📏 CALIBRATION = Find right scale by testing on sample data!"
      },
      {
        id: "w10q6",
        question: "Which best summarizes the function of the unembedding matrix W_U?",
        options: [
          "It merges the queries and keys for each token before final classification.",
          "It converts the final residual vector into vocabulary logits for next-token prediction.",
          "It is used for normalizing the QK and OV circuits so that their norms match.",
          "It acts as a second attention layer that aggregates multiple heads."
        ],
        correctAnswer: 1,
        explanation: "The unembedding matrix (often the transpose of the embedding matrix – if weight sharing is enabled) takes the final hidden state (i.e., the final residual or contextual representation of each token) and maps it to a distribution over the vocabulary. That distribution is used to pick the next token.",
        cheat: "📤 UNEMBEDDING = Final step: hidden vector → word probabilities"
      },
      {
        id: "w10q7",
        question: "Which definition best matches an induction head as discovered in certain Transformer circuits?",
        options: [
          "A head that specifically attends to punctuation tokens to determine sentence boundaries",
          "A feed-forward sub-layer specialized for outputting next-token probabilities for out-of-distribution tokens",
          "A head that looks for previous occurrences of a token A, retrieves the token B that followed it last time, and then predicts B again",
          "A masking head that prevents the model from looking ahead at future tokens"
        ],
        correctAnswer: 2,
        explanation: "Induction heads: These specialized attention heads implement a pattern that can be described like: \"If we see a token A repeated, we look back to see what token came after A the last time it appeared, and we hypothesize that token will appear again.\" This mechanism is behind repeating patterns or reusing local context the model has seen before. It is effectively a memory pattern that picks up repeated sequences in text.",
        cheat: "🔁 INDUCTION = Pattern repeater! Saw A→B before? Predict B after A again!"
      },
      {
        id: "w10q8",
        question: "In mechanistic interpretability, how can we define 'circuit'?",
        options: [
          "A data pipeline for collecting training examples in an autoregressive model",
          "A small LSTM module inserted into a Transformer for additional memory",
          "A device external to the neural network used to fine-tune certain parameters after training",
          "A subgraph of the neural network hypothesized to implement a specific function or behaviour"
        ],
        correctAnswer: 3,
        explanation: "In mechanistic interpretability, a circuit is a subgraph of a neural network— specific connections and components (e.g., heads, neurons, MLP layers)—that collectively implement a certain interpretable function. Researchers attempt to identify and visualize these circuits to understand how the model handles specific patterns or tasks.",
        cheat: "🔌 CIRCUIT = Specific pathway in network doing one job (like induction!)"
      },
      {
        id: "w10q9",
        question: "Which best describes the role of Double Quantization in QLoRA?",
        options: [
          "It quantizes the attention weights twice to achieve 1-bit representations.",
          "It reinitializes parts of the model with random bit patterns for improved regularization.",
          "It quantizes the quantization constants themselves for additional memory savings.",
          "It systematically reverts partial quantized weights back to FP16 whenever performance degrades."
        ],
        correctAnswer: 2,
        explanation: "Double Quantization in QLoRA means not only are the main weights quantized, but the scaling factors (quantization constants) are themselves stored in a lower precision format to reduce memory usage further. It's essentially a second layer of quantization on top of the initial quantization scheme, yielding additional memory compression.",
        cheat: "2️⃣ DOUBLE Q = Quantize weights AND the scale factors (meta-quantization!)"
      },
      {
        id: "w10q10",
        question: "Which of the following are true about sequence-level distillation for LLMs?",
        options: [
          "It trains a student model by matching the teacher's sequence outputs (e.g., predicted token sequences) rather than just individual token distributions.",
          "It requires storing only the top-1 predictions from the teacher model for each token.",
          "It can be combined with word-level distillation to transfer both local and global knowledge.",
          "It forces the teacher to produce a chain-of-thought explanation for each example."
        ],
        correctAnswer: [0, 2],
        explanation: "Sequence-level distillation: Instead of just matching the teacher's probability distribution at each token, the student is trained to mimic the teacher's entire output sequence (which can capture global, multi-token patterns). (a) True: The student tries to match the teacher's full sequence outputs, not just per-token probabilities in isolation. (c) True: Combining sequence-level with word-level distillation can yield a comprehensive approach where the student learns local token distribution and overall sequence structure. Both (a) and (c) are correct.",
        cheat: "📝 SEQ DISTILLATION = Copy entire output sequence (not just token-by-token!)"
      }
    ]
  },
  week11: {
    title: "Week 11: Advanced Embeddings",
    questions: [
      {
        id: "w11q1",
        question: "Assume that you build a document–term matrix M (rows: documents; columns: words) and take its thin SVD M = U Σ Vᵀ. Which statement is most accurate for interpreting V in classical Latent Semantic Analysis (LSA)?",
        options: [
          "Columns of V (and rows of Vᵀ) give low-dimensional word representations that capture co-occurrence similarity.",
          "V gives only document embeddings; words are in U.",
          "V and U are not orthonormal in LSA.",
          "Σ can be ignored without affecting similarity."
        ],
        correctAnswer: 0,
        explanation: "Latent Semantic Analysis (LSA) uses Singular Value Decomposition (SVD) to factorize a document-term matrix M. The factorization is M = U Σ Vᵀ. In this decomposition: M is the d × w matrix (documents × words). U is the d × k matrix whose rows represent documents in a lower-dimensional latent space. Σ is a k × k diagonal matrix of singular values. Vᵀ is the k × w matrix whose columns represent words in the latent space. Equivalently, the rows of Vᵀ (or columns of V) are the word embeddings. The dot product between word vectors derived from V reflects their co-occurrence patterns across documents, capturing semantic similarity. Therefore, the columns of V (or rows of Vᵀ) provide the low-dimensional word representations.",
        cheat: "📚 LSA: V = WORDS, U = DOCUMENTS (remember V for Vocabulary!)"
      },
      {
        id: "w11q2",
        question: "Which statements correctly characterize the basic DistMult approach for knowledge graph completion?",
        options: [
          "Each relation r is parameterized by a full D×D matrix that can capture asymmetric relations.",
          "The relation embedding is a diagonal matrix, leading to a multiplicative interaction of entity embeddings.",
          "DistMult struggles with non-symmetric relations because score(s, r, o) = sᵀMr o is inherently symmetric in s and o.",
          "DistMult's performance is typically tested only on fully symmetric KGs."
        ],
        correctAnswer: [1, 2],
        explanation: "DistMult is a tensor factorization model for knowledge graphs. It simplifies the general relation matrix Mr by constraining it to be diagonal. This leads to a score calculated as f(s,r,o) = ∑ s_i r_i o_i, often written as <s,r,o>. This represents a multiplicative interaction between the corresponding elements of the subject, relation, and object embeddings. Statement (b) is correct. Because the score is calculated this way using a diagonal Mr, swapping s and o results in the same score. This means DistMult cannot model asymmetric or anti-symmetric relations effectively. Statement (c) is correct. Both (b) and (c) are correct.",
        cheat: "↔️ DistMult = DIAGONAL relation → inherently SYMMETRIC (s,r,o) = (o,r,s)"
      },
      {
        id: "w11q3",
        question: "Given a doc–term matrix M, what do MᵀM and MMᵀ capture?",
        options: [
          "MᵀM: word–word co-occurrence similarity across documents",
          "MMᵀ: document–document similarity via shared terms",
          "Both are identity matrices by construction",
          "MᵀM counts how often a word appears in the corpus total"
        ],
        correctAnswer: [0, 1],
        explanation: "Let M be a matrix where rows are documents (d) and columns are words (w). MᵀM: The transpose Mᵀ has words as rows and documents as columns. The element (i, j) of the product MᵀM is the dot product of column i of Mᵀ (word i's presence across documents) and column j of M (word j's presence across documents). This dot product effectively counts or measures the co-occurrence of word i and word j across all documents. This reflects word similarity. (a) is correct. MMᵀ: The element (i, j) of the product MMᵀ is the dot product of row i of M (document i's word content) and row j of Mᵀ (document j's word content). This dot product measures the similarity between document i and document j based on the terms they share. (b) is correct. Both (a) and (b) are correct.",
        cheat: "🔄 MᵀM = Word×Word similarity. MMᵀ = Doc×Doc similarity"
      },
      {
        id: "w11q4",
        question: "Which best describes the main advantage of using a factorized representation (e.g., DistMult, ComplEx) for large KGs?",
        options: [
          "It enforces that every relation in the KG be perfectly symmetric.",
          "It ensures each entity is stored as a one-hot vector, simplifying nearest-neighbour queries.",
          "It collapses the entire KG into a single scalar value.",
          "It significantly reduces parameters and enables generalization to unseen triples by capturing low-rank structure."
        ],
        correctAnswer: 3,
        explanation: "A knowledge graph can be represented as a large, sparse 3D tensor X (subject × relation × object). Storing this tensor explicitly is inefficient. Factorization models assume this tensor has low-rank structure. Models like DistMult or ComplEx decompose this tensor into lower-dimensional embeddings for entities and relations. This significantly reduces the number of parameters needed compared to storing the full tensor. Instead of E × R × E parameters, we store embeddings (e.g., E × D for entities, R × D for relations in DistMult). By learning these compact embeddings from observed triples, the model captures underlying patterns (the low-rank structure) and can generalize to predict the plausibility of unseen triples (KG completion).",
        cheat: "📦 FACTORIZATION = Compress E×R×E into small embeddings (huge savings!)"
      },
      {
        id: "w11q5",
        question: "Which statement best describes the reshaping of a 3D KG tensor X ∈ R^|E|×|R|×|E| into a matrix factorization problem?",
        options: [
          "One axis remains for subject, one axis remains for object, and relations are combined into a single expanded axis.",
          "The subject dimension is repeated to match the relation dimension, resulting in a 2D matrix.",
          "Each subject–relation pair is collapsed into a single dimension, while objects remain as separate entries.",
          "The entire KG is vectorized into a 1D array and then factorized with an SVD approach."
        ],
        correctAnswer: 2,
        explanation: "One way to conceptualize the problem for matrix factorization is to reshape the tensor differently, and a common reshaping approach treats the task as predicting the object given a (subject, relation) pair. In this view, you can create a matrix where each row corresponds to a unique (subject, relation) pair, and each column corresponds to an entity (potential object). The entries in this matrix would indicate the existence or score of the triple (s, r, o). This results in an (|E| × |R|) × |E| matrix. Matrix factorization techniques can then be applied to this large, sparse matrix to find latent representations for (s, r) pairs and objects. Option (c) describes this reshaping where the (subject, relation) dimensions are effectively combined.",
        cheat: "🎲 RESHAPE = (s,r) pairs as rows, objects as columns"
      },
      {
        id: "w11q6",
        question: "SimplE addresses asymmetry by:",
        options: [
          "Using separate subject and object embeddings per entity and including inverse relations, with an averaged score over the two directions",
          "Constraining relation vectors to unit modulus",
          "Replacing dot-products by max-pooling",
          "Removing inverse relations entirely"
        ],
        correctAnswer: 0,
        explanation: "SimplE is designed to handle asymmetric relations better than models like DistMult. Its key idea is to learn two different embedding vectors for each entity e: one for when it acts as a subject (sub(e)) and one for when it acts as an object (obj(e)). It also explicitly introduces inverse relations (r⁻¹) for every relation r. The final score for a triple (s, r, o) is calculated as the average of the DistMult-style score in the forward direction <sub(s), rel(r), obj(o)> and the score in the inverse direction <sub(o), rel(r⁻¹), obj(s)>. This structure allows the model to assign different scores to (s, r, o) and (o, r, s), thus capturing asymmetry.",
        cheat: "2️⃣ SimplE = TWO embeddings per entity (as subject & as object!)"
      },
      {
        id: "w11q7",
        question: "Which of the following statements correctly describe hyperbolic (Poincare) embeddings for hierarchical data?",
        options: [
          "They map nodes onto a disk (or ball) such that large branching factors can be represented with lower distortion than in Euclidean space.",
          "Distance grows slowly near the center and becomes infinite near the boundary, making it naturally suited for tree-like structures.",
          "They require each node to be embedded on the surface of the Poincare disk of radius 1.",
          "They can achieve arbitrarily low distortion embeddings for trees with the same dimension as Euclidean space."
        ],
        correctAnswer: [0, 1],
        explanation: "Hyperbolic spaces (like the Poincaré disk model) have geometric properties different from Euclidean space. Specifically, the \"volume\" grows exponentially with radius, similar to how nodes in a tree multiply exponentially with depth. This property allows tree-like structures (hierarchies) to be embedded with much lower distortion compared to Euclidean space of the same dimension. Large branching factors can fit without \"crowding\". (a) is correct. In the Poincaré disk model, points are mapped inside a unit disk. The hyperbolic distance dH(x,y) between points increases rapidly as points approach the boundary (perimeter) of the disk, becoming infinite at the boundary itself. This naturally places root nodes near the center and leaf nodes near the periphery, mirroring tree structures. (b) is correct. Both (a) and (b) are correct.",
        cheat: "🌳 HYPERBOLIC = Tree-friendly! Exponential space like exponential branching"
      },
      {
        id: "w11q8",
        question: "Why might a partial-order-based approach (like order embeddings) be beneficial for modelling 'is-a' relationships compared to purely distance-based approaches?",
        options: [
          "They explicitly encode the ancestor–descendant relation as a coordinate-wise inequality or containment.",
          "They can represent negative correlations (i.e., sibling vs. ancestor) more easily than distance metrics.",
          "They inherently guarantee transitive closure of the hierarchy in the learned embedding space.",
          "They do not rely on pairwise distances but use a notion of coordinate-wise ordering or interval containment."
        ],
        correctAnswer: [0, 3],
        explanation: "Hierarchies represent a partial order (e.g., 'mammal' > 'dog', 'animal' > 'mammal'). Order embeddings aim to directly model this partial order ≺ in the embedding space. Instead of just using distance, they define the relationship based on coordinate-wise inequalities (e.g., for cone embeddings, x ≺ y ⇔ ux ≥ uy element-wise) or region containment. Statements (a) and (d) correctly describe this core idea. Both (a) and (d) are correct.",
        cheat: "⬆️ ORDER = If A ≺ B, then uA ≥ uB element-wise (coordinate inequality!)"
      },
      {
        id: "w11q9",
        question: "Which statement about box embeddings in hierarchical modelling is most accurate?",
        options: [
          "Each entity or type is assigned a single real-valued vector, ignoring bounding volumes.",
          "Containment Ix ⊆ Iy across all dimensions encodes x ≺ y.",
          "They rely on spherical distances around a central node to measure tree depth.",
          "They cannot be used to represent set intersections or partial overlap."
        ],
        correctAnswer: 1,
        explanation: "Box embeddings (or hyper-rectangle embeddings) represent each item x as a multi-dimensional box (or interval in each dimension), defined by its lower-left (bx) and upper-right (hx) corners. The hierarchical relationship x ≺ y (x is a descendant of y) is encoded by the geometric containment of the boxes: x ≺ y if and only if the box for x is fully contained within the box for y across all dimensions, i.e., Ix[d] ⊆ Iy[d] for all d. Statement (b) is correct.",
        cheat: "📦 BOX = Smaller box INSIDE bigger box (x contained in y!)"
      },
      {
        id: "w11q10",
        question: "For order embeddings with axis-aligned open cones:",
        options: [
          "Represent each item x by apex ux; encode x ≺ y as ux ≥ uy (element-wise).",
          "Positive loss encourages all dimensions to satisfy the order; negative loss enforces at least one dimension to violate it.",
          "All cones (and their intersections) have the same measure in this construction.",
          "This makes modeling negative correlation between sibling types difficult."
        ],
        correctAnswer: [0, 1, 2, 3],
        explanation: "All statements accurately describe properties or consequences of the open cone order embedding model: (a) True: Each item x is represented by the apex ux of an infinite open cone extending towards +∞ in all dimensions. The partial order x ≺ y is defined such that the cone for x must be contained within the cone for y, which translates to the element-wise inequality ux ≥ uy. (b) True: The loss functions are designed accordingly. For a positive example (x ≺ y), the loss l+ penalizes any dimension d where uy[d] > ux[d], encouraging all dimensions to satisfy the constraint. For a negative example, the loss l- requires at least one dimension d to violate the order condition. (c) True: Unlike interval embeddings on a line where sub-intervals have smaller measures, these infinite cones (and their non-empty intersections) all have infinite volume (measure). (d) True: Because x ≺ y requires ux ≥ uy element-wise, it's hard to simultaneously model negative correlations. All statements (a, b, c, d) are true.",
        cheat: "🔺 CONE = Infinite pyramid from apex. x≺y means ux HIGHER (≥) than uy"
      }
    ]
  },
  week12: {
    title: "Week 12: Responsible LLMs",
    questions: [
      {
        id: "w12q1",
        question: "Which statements correctly characterize \"bias\" in the context of LLMs? 1. Bias can generate objectionable or stereotypical views in model outputs. 2. Bias is always intentionally introduced by malicious data curators. 3. Bias can cause harmful real-world impacts such as reinforcing discrimination. 4. Bias only affects low-resource languages; high-resource languages are unaffected.",
        options: [
          "1 and 2",
          "1 and 3",
          "2 and 4",
          "1, 3, and 4"
        ],
        subQuestions: [
          "1. Bias can generate objectionable or stereotypical views in model outputs.",
          "2. Bias is always intentionally introduced by malicious data curators.",
          "3. Bias can cause harmful real-world impacts such as reinforcing discrimination.",
          "4. Bias only affects low-resource languages; high-resource languages are unaffected."
        ],
        correctAnswer: 1,
        explanation: "(1) True: Model outputs can reflect harmful stereotypes if training data or modelling procedures contain biases. (3) True: Biased outputs may perpetuate discrimination or unfair treatment in real-world contexts. Statements (2) and (4) are not necessarily correct: (2) False: Bias in data is often unintentional, reflecting existing societal or historical imbalances. (4) False: Bias can affect any language; high-resource languages are not inherently immune.",
        cheat: "⚠️ BIAS = Unintentional + Harmful + Affects ALL languages (not just low-resource!)"
      },
      {
        id: "w12q2",
        question: "The Stereotype Score (ss) refers to:",
        options: [
          "The frequency with which a language model rejects biased associations.",
          "The measure of how often a model's predictions are meaningless as opposed to meaningful.",
          "A ratio of positive sentiment to negative sentiment in model outputs.",
          "The proportion of examples in which a model chooses a stereotypical association over an anti-stereotypical one."
        ],
        correctAnswer: 3,
        explanation: "Stereotype Score (ss) is a metric that measures how frequently the model picks a stereotypical continuation or association instead of a non-stereotypical or anti-stereotypical one. Essentially, it's a proportion (or fraction) of test items for which the model output aligns with the stereotype.",
        cheat: "📊 SS = How often model picks STEREOTYPE (higher SS = more biased!)"
      },
      {
        id: "w12q3",
        question: "Which of the following are prominent sources of bias in LLMs? 1. Improper selection of training data leading to skewed distributions. 2. Reliance on older datasets causing \"temporal bias.\" 3. Overemphasis on low-resource languages causing \"linguistic inversion.\" 4. Unequal focus on high-resource languages resulting in \"cultural bias.\"",
        options: [
          "1 and 2 only",
          "2 and 3 only",
          "1, 2, and 4",
          "1, 3, and 4"
        ],
        subQuestions: [
          "1. Improper selection of training data leading to skewed distributions.",
          "2. Reliance on older datasets causing \"temporal bias.\"",
          "3. Overemphasis on low-resource languages causing \"linguistic inversion.\"",
          "4. Unequal focus on high-resource languages resulting in \"cultural bias.\""
        ],
        correctAnswer: 2,
        explanation: "1. Improper selection of training data (true) can lead to some groups or topics being over-represented, causing bias. 2. Reliance on older datasets (true) can introduce out-of-date or \"temporal bias\" that doesn't reflect current social norms or language usage. 3. \"Overemphasis on low-resource languages\" is not commonly described as \"linguistic inversion\"; typically the bias is the opposite — under-representation of low-resource languages. 4. Unequal focus on high-resource languages (true) can lead to cultural biases and poor performance or misrepresentations of underrepresented cultures.",
        cheat: "📅 BIAS SOURCES = Bad data selection + Old data + Too much high-resource focus"
      },
      {
        id: "w12q4",
        question: "In the context of bias mitigation based on adversarial triggers, which best describes the goal of prepending specially chosen tokens to prompts?",
        options: [
          "To directly fine-tune the model parameters to remove bias",
          "To override all prior knowledge in a model, effectively \"resetting\" it",
          "To exploit the model's distributional patterns, thereby neutralizing or flipping biased associations in generated text",
          "To randomly shuffle the tokens so that the model becomes more robust"
        ],
        correctAnswer: 2,
        explanation: "Adversarial triggers are carefully crafted token sequences that, when prepended to the prompt, steer the model's output in a certain direction (e.g., reducing bias or toxicity). They work within the model's learned distribution rather than overriding its knowledge. They do not retrain the model; they exploit patterns in the existing parameters to mitigate biased outcomes.",
        cheat: "🎯 ADV TRIGGERS = Special tokens that STEER model away from bias"
      },
      {
        id: "w12q5",
        question: "Which of the following best describes the \"regard\" metric?",
        options: [
          "It is a measure of how well a model can explain its internal decision process.",
          "It is a measurement of a model's perplexity on demographically sensitive text.",
          "It is the proportion of times a model self-corrects discriminatory language.",
          "It is a classification label reflecting the attitude towards a demographic group in the generated text."
        ],
        correctAnswer: 3,
        explanation: "Regard is typically measured by classifying the tone of text toward a demographic group (e.g., \"positive,\" \"negative,\" or \"neutral\" regard). It's used to assess whether certain demographics consistently receive negative or disrespectful language.",
        cheat: "💭 REGARD = How model FEELS about demographic (positive/negative/neutral tone)"
      },
      {
        id: "w12q6",
        question: "Which of the following steps compose the approach for improving response safety via in-context learning?",
        options: [
          "Retrieving safety demonstrations similar to the user query.",
          "Fine-tuning the model with additional labeled data after generation.",
          "Providing retrieved demonstrations as examples in the prompt to guide the model's response generation.",
          "Sampling multiple outputs from LLMs and choosing the majority opinion."
        ],
        correctAnswer: [0, 2],
        explanation: "One strategy for safe or polite generation with large language models is to retrieve \"safety demonstrations\" from a database of safe examples. Then you include these examples in the prompt to the LLM, showing it how to respond safely. Fine-tuning (b) is a different technique, not part of the described in-context learning approach. Majority vote (d) is also not typically a method described under \"improving response safety via in-context learning.\"",
        cheat: "📚 IN-CONTEXT SAFETY = Show examples of SAFE responses in prompt!"
      },
      {
        id: "w12q7",
        question: "Which statement(s) is/are correct about how high-resource (HRL) vs. low-resource languages (LRL) affect model training?",
        options: [
          "LRLs typically have higher performance metrics due to smaller population sizes.",
          "HRLs get more data, so the model might overfit to HRL cultural perspectives.",
          "LRLs are often under-represented, leading to potential underestimation of their cultural nuances.",
          "The dominance of HRLs can cause a reinforcing cycle that perpetuates imbalance."
        ],
        correctAnswer: [1, 2, 3],
        explanation: "(b) True: If the model sees far more data in certain HRLs, it might be overly biased or \"overfit\" to those languages' norms and perspectives. (c) True: LRLs often lack extensive corpora, so the model learns fewer details about these languages, risking lower performance and cultural misrepresentations. (d) True: The more a model focuses on HRLs, the more beneficial it appears to be for those languages, attracting further data, thus perpetuating imbalance. (a) is not correct: LRLs typically have lower performance metrics due to insufficient training data, not higher.",
        cheat: "🌍 HRL = Rich get richer cycle! LRL = Under-represented & underestimated"
      },
      {
        id: "w12q8",
        question: "The \"Responsible LLM\" concept is stated to address:",
        options: [
          "Only the bias in LLMs",
          "A set of concerns including explainability, fairness, robustness, and security",
          "Balancing training costs with carbon footprint",
          "Implementation of purely rule-based safety filters"
        ],
        correctAnswer: 1,
        explanation: "Responsible LLM research focuses on a broad range of ethical, social, and technical concerns: Fairness & bias mitigation, Explainability & transparency, Robustness to adversarial inputs, Security & safe deployment",
        cheat: "🛡️ RESPONSIBLE = EFRS (Explainability, Fairness, Robustness, Security)"
      },
      {
        id: "w12q9",
        question: "Within the StereoSet framework, the icat metric specifically refers to:",
        options: [
          "The ratio of anti-stereotypical associations to neutral associations",
          "The percentage of times a model refuses to generate content deemed hateful",
          "A measure of domain coverage across different demographic groups",
          "A balanced metric capturing both a model's language modelling ability and the tendency to avoid stereotypical bias"
        ],
        correctAnswer: 3,
        explanation: "In the StereoSet framework, icat is designed to measure how well the model balances contextual accuracy (i.e., good language modelling) and reduced stereotyping. It's a combined metric that looks at correctness in typical language modelling tasks while also penalizing stereotypical responses.",
        cheat: "⚖️ icat = Ideal CATegorization (good LM + low stereotype = balanced!)"
      },
      {
        id: "w12q10",
        question: "Bias due to improper selection of training data typically arises in LLMs when:",
        options: [
          "Data are selected exclusively from curated, balanced sources with equal representation",
          "The language model sees only real-time social media feeds without any historical texts",
          "The training corpus over-represents some topics or groups, creating a skewed distribution",
          "All data are automatically filtered to remove any demographic markers"
        ],
        correctAnswer: 2,
        explanation: "Improper data selection leads to over-representation of certain domains, topics, or demographic groups, causing the learned model to be skewed. Balanced data curation and filtering are actually methods to reduce bias. If data come only from certain communities or perspectives, the model lacks balanced coverage, and biases surface.",
        cheat: "⚖️ IMPROPER = SKEWED data (too much of some groups, too little of others!)"
      }
    ]
  }
};

// Add weeks 3, 9, 10, 11 separately for organization
