import type { Question } from '@/types';

export const questions: Question[] = [
    // --- Section 1: Cognition (Pattern Recognition & Arithmetic) ---
    {
        id: 1,
        section: 'Cognition',
        text: 'What number comes next in this sequence? 3, 6, 12, 24, ___',
        type: 'number',
        correctAnswer: '48'
    },
    {
        id: 2,
        section: 'Cognition',
        text: 'If you have 50 cents and you buy a candy for 15 cents and a sticker for 10 cents, how much money do you have left?',
        type: 'number',
        correctAnswer: '25'
    },
    {
        id: 3,
        section: 'Cognition',
        text: 'Which shape differs from the others?',
        type: 'choice',
        options: ['Square', 'Rectangle', 'Cube', 'Triangle'],
        correctAnswer: 'Cube'
    },
    {
        id: 4,
        section: 'Cognition',
        text: 'If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?',
        type: 'choice',
        options: ['3', '100', '1', '30'],
        correctAnswer: '3'
    },
    {
        id: 5,
        section: 'Cognition',
        text: 'Look at the pattern: Circle, Square, Triangle, Circle, Square, ___. What comes next?',
        type: 'choice',
        options: ['Circle', 'Triangle', 'Square'],
        correctAnswer: 'Triangle'
    },
    {
        id: 6,
        section: 'Cognition',
        text: 'A train leaves the station with 10 passengers. At the first stop, 3 people get off and 5 get on. How many people are on the train now?',
        type: 'number',
        correctAnswer: '12'
    },
    {
        id: 7,
        section: 'Cognition',
        text: 'Which number is an odd number between 20 and 30 that is divisible by 5?',
        type: 'number',
        correctAnswer: '25'
    },
    {
        id: 8,
        section: 'Cognition',
        text: 'Mary is 4 years older than John. John is 9. How old is Mary?',
        type: 'number',
        correctAnswer: '13'
    },
    {
        id: 9,
        section: 'Cognition',
        text: 'Which of these is a mammal?',
        type: 'choice',
        options: ['Shark', 'Crocodile', 'Whale', 'Eagle'],
        correctAnswer: 'Whale'
    },
    {
        id: 10,
        section: 'Cognition',
        text: 'Unscramble the word to find a color: LYLEOW',
        type: 'text',
        correctAnswer: 'Yellow'
    },

    // --- Section 2: Spelling (Definitions & Synonyms - Target Word HIDDEN) ---
    {
        id: 11,
        section: 'Spelling',
        text: 'Spell the word for the season that comes after winter.',
        type: 'text',
        correctAnswer: 'spring'
    },
    {
        id: 12,
        section: 'Spelling',
        text: 'Spell the word that means "needed" or "required". (Starts with N)',
        type: 'text',
        correctAnswer: 'necessary'
    },
    {
        id: 13,
        section: 'Spelling',
        text: 'Spell the word for a place where books are kept.',
        type: 'text',
        correctAnswer: 'library'
    },
    {
        id: 14,
        section: 'Spelling',
        text: 'Spell the word that means "to receive" or "get". (Starts with R, has "ei" in it)',
        type: 'text',
        correctAnswer: 'receive'
    },
    {
        id: 15,
        section: 'Spelling',
        text: 'Spell the word for the day of the week that comes before Thursday.',
        type: 'text',
        correctAnswer: 'Wednesday'
    },
    {
        id: 16,
        section: 'Spelling',
        text: 'Spell the word that means "happy" or "pleased". (Starts with H, ends with Y)',
        type: 'text',
        correctAnswer: 'cheerful' // Flexible, but aim for standard
    },
    {
        id: 17,
        section: 'Spelling',
        text: 'Spell the word for a person who lives next door to you.',
        type: 'text',
        correctAnswer: 'neighbor'
    },
    {
        id: 18,
        section: 'Spelling',
        text: 'Spell the word that means "extremely good" or "great". (Starts with E)',
        type: 'text',
        correctAnswer: 'excellent'
    },
    {
        id: 19,
        section: 'Spelling',
        text: 'Spell the word for a shape with four equal sides.',
        type: 'text',
        correctAnswer: 'square'
    },
    {
        id: 20,
        section: 'Spelling',
        text: 'Spell the word that means "to separate". (Separate)',
        type: 'text',
        correctAnswer: 'separate'
    },

    // --- Section 3: Reading Comprehension (Inference & Detail) ---
    {
        id: 21,
        section: 'Reading Comprehension',
        context: 'The old lighthouse stood on the edge of the jagged cliffs, its light cutting through the thick fog every night. Captain Higgins had tended to the light for forty years. He knew every ship that passed by the tone of its horn. One stormy Tuesday, the light flickered and died. The Captain grabbed his toolbox and rushed up the spiral stairs, his bad knee aching with every step. He knew the "Midnight Star" was due to pass in twenty minutes.',
        text: 'Where is the lighthouse located?',
        type: 'choice',
        options: ['On a sandy beach', 'On jagged cliffs', 'In the middle of the ocean', 'In a harbor'],
        correctAnswer: 'On jagged cliffs'
    },
    {
        id: 22,
        section: 'Reading Comprehension',
        context: 'The old lighthouse stood on the edge of the jagged cliffs, its light cutting through the thick fog every night. Captain Higgins had tended to the light for forty years. He knew every ship that passed by the tone of its horn. One stormy Tuesday, the light flickered and died. The Captain grabbed his toolbox and rushed up the spiral stairs, his bad knee aching with every step. He knew the "Midnight Star" was due to pass in twenty minutes.',
        text: 'Why did Captain Higgins rush up the stairs?',
        type: 'choice',
        options: ['To watch the storm', 'To fix the light', 'To exercise his knee', 'To sleep'],
        correctAnswer: 'To fix the light'
    },
    {
        id: 23,
        section: 'Reading Comprehension',
        context: 'The old lighthouse stood on the edge of the jagged cliffs, its light cutting through the thick fog every night. Captain Higgins had tended to the light for forty years. He knew every ship that passed by the tone of its horn. One stormy Tuesday, the light flickered and died. The Captain grabbed his toolbox and rushed up the spiral stairs, his bad knee aching with every step. He knew the "Midnight Star" was due to pass in twenty minutes.',
        text: 'What implies that Captain Higgins might be elderly?',
        type: 'choice',
        options: ['He lives in a lighthouse', 'He has a bad knee and worked there 40 years', 'He likes ships', 'He has a toolbox'],
        correctAnswer: 'He has a bad knee and worked there 40 years'
    },
    {
        id: 24,
        section: 'Reading Comprehension',
        context: 'The old lighthouse stood on the edge of the jagged cliffs, its light cutting through the thick fog every night. Captain Higgins had tended to the light for forty years. He knew every ship that passed by the tone of its horn. One stormy Tuesday, the light flickered and died. The Captain grabbed his toolbox and rushed up the spiral stairs, his bad knee aching with every step. He knew the "Midnight Star" was due to pass in twenty minutes.',
        text: 'What was the weather like?',
        type: 'choice',
        options: ['Sunny and clear', 'Stormy and foggy', 'Snowy', 'Windy but clear'],
        correctAnswer: 'Stormy and foggy'
    },
    {
        id: 25,
        section: 'Reading Comprehension',
        context: 'The old lighthouse stood on the edge of the jagged cliffs, its light cutting through the thick fog every night. Captain Higgins had tended to the light for forty years. He knew every ship that passed by the tone of its horn. One stormy Tuesday, the light flickered and died. The Captain grabbed his toolbox and rushed up the spiral stairs, his bad knee aching with every step. He knew the "Midnight Star" was due to pass in twenty minutes.',
        text: 'What is the "Midnight Star"?',
        type: 'choice',
        options: ['A planet', 'A ship', 'A bird', 'Allow'],
        correctAnswer: 'A ship'
    },
    {
        id: 26,
        section: 'Reading Comprehension',
        context: 'Scientists recently discovered a new species of frog in the Amazon rainforest. Unlike most frogs that are green or brown, this frog is bright purple with orange spots. It is very small, only about the size of a thumb. The locals call it the "Berry Frog" because it looks like a wild berry found in the area. Interestingly, the Berry Frog does not hop; it crawls slowly along branches looking for ants to eat.',
        text: 'Why do locals call it the "Berry Frog"?',
        type: 'text',
        correctAnswer: 'It looks like a wild berry'
    },
    {
        id: 27,
        section: 'Reading Comprehension',
        context: 'Scientists recently discovered a new species of frog in the Amazon rainforest. Unlike most frogs that are green or brown, this frog is bright purple with orange spots. It is very small, only about the size of a thumb. The locals call it the "Berry Frog" because it looks like a wild berry found in the area. Interestingly, the Berry Frog does not hop; it crawls slowly along branches looking for ants to eat.',
        text: 'How does the Berry Frog verify move?',
        type: 'choice',
        options: ['It hops high', 'It swims', 'It crawls', 'It flies'],
        correctAnswer: 'It crawls'
    },
    {
        id: 28,
        section: 'Reading Comprehension',
        context: 'Scientists recently discovered a new species of frog in the Amazon rainforest. Unlike most frogs that are green or brown, this frog is bright purple with orange spots. It is very small, only about the size of a thumb. The locals call it the "Berry Frog" because it looks like a wild berry found in the area. Interestingly, the Berry Frog does not hop; it crawls slowly along branches looking for ants to eat.',
        text: 'What does the Berry Frog eat?',
        type: 'text',
        correctAnswer: 'Ants'
    },
    {
        id: 29,
        section: 'Reading Comprehension',
        context: 'Scientists recently discovered a new species of frog in the Amazon rainforest. Unlike most frogs that are green or brown, this frog is bright purple with orange spots. It is very small, only about the size of a thumb. The locals call it the "Berry Frog" because it looks like a wild berry found in the area. Interestingly, the Berry Frog does not hop; it crawls slowly along branches looking for ants to eat.',
        text: 'Where was this frog found?',
        type: 'choice',
        options: ['Sahara Desert', 'Amazon Rainforest', 'Rocky Mountains', 'Central Park'],
        correctAnswer: 'Amazon Rainforest'
    },
    {
        id: 30,
        section: 'Reading Comprehension',
        context: 'Scientists recently discovered a new species of frog in the Amazon rainforest. Unlike most frogs that are green or brown, this frog is bright purple with orange spots. It is very small, only about the size of a thumb. The locals call it the "Berry Frog" because it looks like a wild berry found in the area. Interestingly, the Berry Frog does not hop; it crawls slowly along branches looking for ants to eat.',
        text: 'How big is the frog?',
        type: 'choice',
        options: ['Size of a hand', 'Size of a thumb', 'Size of a foot', 'Size of a cat'],
        correctAnswer: 'Size of a thumb'
    },

    // --- Section 4: Logic & Problem Solving (Deduction & Spatial) ---
    {
        id: 31,
        section: 'Logic',
        text: 'Some blips are blops. All blops are zips. Are some blips zips?',
        type: 'choice',
        options: ['Yes', 'No', 'Impossible to tell'],
        correctAnswer: 'Yes'
    },
    {
        id: 32,
        section: 'Logic',
        text: 'Insert the missing number: 7, 10, 8, 11, 9, 12, ___',
        type: 'number',
        correctAnswer: '10'
    },
    {
        id: 33,
        section: 'Logic',
        text: 'If you fold a square piece of paper in half twice, how many layers of paper are there?',
        type: 'choice',
        options: ['2', '4', '8', '6'],
        correctAnswer: '4'
    },
    {
        id: 34,
        section: 'Logic',
        text: 'Five years ago, Sarah was 7. How old will she be in 3 years?',
        type: 'number',
        correctAnswer: '15'
    },
    {
        id: 35,
        section: 'Logic',
        text: 'Which word is the odd one out?',
        type: 'choice',
        options: ['Car', 'Bicycle', 'Airplane', 'Helmet'],
        correctAnswer: 'Helmet'
    },
    {
        id: 36,
        section: 'Logic',
        text: 'If A is bigger than B, and B is bigger than C, is A bigger than C?',
        type: 'choice',
        options: ['Yes', 'No', 'Not necessarily'],
        correctAnswer: 'Yes'
    },
    {
        id: 37,
        section: 'Logic',
        text: 'Doctor is to Patient as Teacher is to: ___',
        type: 'choice',
        options: ['School', 'Student', 'Book', 'Principal'],
        correctAnswer: 'Student'
    },
    {
        id: 38,
        section: 'Logic',
        text: 'You have 2 hourglasses: a 4-minute one and a 7-minute one. How can you measure exactly 3 minutes?',
        type: 'choice',
        options: ['Run both, when 4 runs out, flip it.', 'Run both, when 4 runs out, the remainder in 7 is 3.', 'You can\'t.', 'Break the glass.'],
        correctAnswer: 'Run both, when 4 runs out, the remainder in 7 is 3.'
    },
    {
        id: 39,
        section: 'Logic',
        text: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
        type: 'choice',
        options: ['$0.10', '$0.05', '$0.01', '$1.00'],
        correctAnswer: '$0.05'
    },
    {
        id: 40,
        section: 'Logic',
        text: 'Order from lightest to heaviest: Car, Feather, Elephant, Cat',
        type: 'sort',
        options: ['Car', 'Feather', 'Elephant', 'Cat'],
        correctAnswer: 'Feather, Cat, Car, Elephant'
    }
];
