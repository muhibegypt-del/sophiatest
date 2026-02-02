export type Category = 'Reading' | 'Logic' | 'Math';

export interface Question {
    id: number;
    category: Category;
    text: string;
    options: string[];
    correctAnswer: number; // Index 0-3
    passage?: string; // For reading comprehension
    explanation?: string; // Optional explanation for the report later
}

export const questions: Question[] = [
    // --- READING COMPREHENSION ---
    // Passage 1: The Wood Wide Web
    {
        id: 1,
        category: 'Reading',
        passage: "Beneath the forest floor lies a complex network that scientists have dubbed the 'Wood Wide Web.' This isn't made of fiber-optic cables, but of tiny threads called mycelium, which are the root-like structures of fungi. These fungal networks connect the roots of trees and plants, allowing them to communicate and share resources. For instance, if a young sapling is shaded and struggling to get enough sunlight, an older, established tree can send nutrients like carbon and sugar through the fungal network to keep the younger one alive. Trees can also send distress signals through this system. If a tree is under attack by beetles, it can release chemical warnings into the network, prompting neighboring trees to raise their own chemical defenses before the insects even arrive. This partnership is symbiotic: the fungi provide the trees with minerals they extract from the soil, and in return, the trees provide the fungi with sugars produced through photosynthesis.",
        text: "According to the passage, what is the primary function of the 'Wood Wide Web'?",
        options: [
            "To allowing fungi to take over the forest floor",
            "To facilitate resource sharing and communication between plants",
            "To replace the need for sunlight in photosynthesis",
            "To prevent all insect attacks in the forest"
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        category: 'Reading',
        passage: "Beneath the forest floor lies a complex network that scientists have dubbed the 'Wood Wide Web.' This isn't made of fiber-optic cables, but of tiny threads called mycelium, which are the root-like structures of fungi. These fungal networks connect the roots of trees and plants, allowing them to communicate and share resources. For instance, if a young sapling is shaded and struggling to get enough sunlight, an older, established tree can send nutrients like carbon and sugar through the fungal network to keep the younger one alive. Trees can also send distress signals through this system. If a tree is under attack by beetles, it can release chemical warnings into the network, prompting neighboring trees to raise their own chemical defenses before the insects even arrive. This partnership is symbiotic: the fungi provide the trees with minerals they extract from the soil, and in return, the trees provide the fungi with sugars produced through photosynthesis.",
        text: "What benefit do the fungi receive in this relationship?",
        options: [
            "Minerals from the soil",
            "Protection from beetles",
            "Sugars from the trees",
            "Sunlight for photosynthesis"
        ],
        correctAnswer: 2
    },
    {
        id: 3,
        category: 'Reading',
        passage: "Beneath the forest floor lies a complex network that scientists have dubbed the 'Wood Wide Web.' This isn't made of fiber-optic cables, but of tiny threads called mycelium, which are the root-like structures of fungi. These fungal networks connect the roots of trees and plants, allowing them to communicate and share resources. For instance, if a young sapling is shaded and struggling to get enough sunlight, an older, established tree can send nutrients like carbon and sugar through the fungal network to keep the younger one alive. Trees can also send distress signals through this system. If a tree is under attack by beetles, it can release chemical warnings into the network, prompting neighboring trees to raise their own chemical defenses before the insects even arrive. This partnership is symbiotic: the fungi provide the trees with minerals they extract from the soil, and in return, the trees provide the fungi with sugars produced through photosynthesis.",
        text: "The word 'symbiotic' in the passage most nearly means:",
        options: [
            "Mutually beneficial",
            "Hidden underground",
            "One-sided",
            "Dangerous to the host"
        ],
        correctAnswer: 0
    },
    {
        id: 4,
        category: 'Reading',
        passage: "Beneath the forest floor lies a complex network that scientists have dubbed the 'Wood Wide Web.' This isn't made of fiber-optic cables, but of tiny threads called mycelium, which are the root-like structures of fungi. These fungal networks connect the roots of trees and plants, allowing them to communicate and share resources. For instance, if a young sapling is shaded and struggling to get enough sunlight, an older, established tree can send nutrients like carbon and sugar through the fungal network to keep the younger one alive. Trees can also send distress signals through this system. If a tree is under attack by beetles, it can release chemical warnings into the network, prompting neighboring trees to raise their own chemical defenses before the insects even arrive. This partnership is symbiotic: the fungi provide the trees with minerals they extract from the soil, and in return, the trees provide the fungi with sugars produced through photosynthesis.",
        text: "Which action might a tree take if it is attacked by insects, according to the text?",
        options: [
            "It absorbs more minerals from the soil.",
            "It cuts off its connection to the network.",
            "It sends chemical warnings to neighbors.",
            "It physically moves its roots away."
        ],
        correctAnswer: 2
    },
    {
        id: 5,
        category: 'Reading',
        passage: "Beneath the forest floor lies a complex network that scientists have dubbed the 'Wood Wide Web.' This isn't made of fiber-optic cables, but of tiny threads called mycelium, which are the root-like structures of fungi. These fungal networks connect the roots of trees and plants, allowing them to communicate and share resources. For instance, if a young sapling is shaded and struggling to get enough sunlight, an older, established tree can send nutrients like carbon and sugar through the fungal network to keep the younger one alive. Trees can also send distress signals through this system. If a tree is under attack by beetles, it can release chemical warnings into the network, prompting neighboring trees to raise their own chemical defenses before the insects even arrive. This partnership is symbiotic: the fungi provide the trees with minerals they extract from the soil, and in return, the trees provide the fungi with sugars produced through photosynthesis.",
        text: "Why might an older tree send nutrients to a sapling?",
        options: [
            "The sapling has too much sugar.",
            "The sapling is in the shade and cannot make enough food.",
            "The older tree has run out of storage space.",
            "The mycelium requires the sapling to grow faster."
        ],
        correctAnswer: 1
    },

    // Passage 2: The Printing Press
    {
        id: 6,
        category: 'Reading',
        passage: "Before the invention of the printing press in the mid-15th century, books were rare and expensive objects. They were painstakingly copied by hand, usually by monks in monasteries, meaning that a single book could take months or even years to produce. This made knowledge the exclusive property of the wealthy and the church. When Johannes Gutenberg introduced the movable type printing press to Europe, it revolutionized society. Suddenly, books could be mass-produced at a fraction of the cost. This explosion of printed material led to a dramatic increase in literacy rates. Ideas, both scientific and political, spread across borders faster than ever before. It is arguably one of the most important inventions in human history, laying the groundwork for the modern knowledge-based economy.",
        text: "What was the main reason books were expensive before the printing press?",
        options: [
            "Paper was extremely rare.",
            "They had to be copied by hand, taking a long time.",
            "Authors demanded high fees.",
            "They were made of gold."
        ],
        correctAnswer: 1
    },
    {
        id: 7,
        category: 'Reading',
        passage: "Before the invention of the printing press in the mid-15th century, books were rare and expensive objects. They were painstakingly copied by hand, usually by monks in monasteries, meaning that a single book could take months or even years to produce. This made knowledge the exclusive property of the wealthy and the church. When Johannes Gutenberg introduced the movable type printing press to Europe, it revolutionized society. Suddenly, books could be mass-produced at a fraction of the cost. This explosion of printed material led to a dramatic increase in literacy rates. Ideas, both scientific and political, spread across borders faster than ever before. It is arguably one of the most important inventions in human history, laying the groundwork for the modern knowledge-based economy.",
        text: "How did the printing press affect literacy?",
        options: [
            "It decreased literacy because people read less.",
            "It had no effect on literacy.",
            "It increased literacy by making books more accessible.",
            "It made literacy a requirement only for monks."
        ],
        correctAnswer: 2
    },
    {
        id: 8,
        category: 'Reading',
        passage: "Before the invention of the printing press in the mid-15th century, books were rare and expensive objects. They were painstakingly copied by hand, usually by monks in monasteries, meaning that a single book could take months or even years to produce. This made knowledge the exclusive property of the wealthy and the church. When Johannes Gutenberg introduced the movable type printing press to Europe, it revolutionized society. Suddenly, books could be mass-produced at a fraction of the cost. This explosion of printed material led to a dramatic increase in literacy rates. Ideas, both scientific and political, spread across borders faster than ever before. It is arguably one of the most important inventions in human history, laying the groundwork for the modern knowledge-based economy.",
        text: "What does the author imply about knowledge before the printing press?",
        options: [
            "It was shared freely among all people.",
            "It was mostly controlled by the rich and religious institutions.",
            "It was considered unimportant.",
            "It was more accurate than printed knowledge."
        ],
        correctAnswer: 1
    },
    {
        id: 9,
        category: 'Reading',
        passage: "Before the invention of the printing press in the mid-15th century, books were rare and expensive objects. They were painstakingly copied by hand, usually by monks in monasteries, meaning that a single book could take months or even years to produce. This made knowledge the exclusive property of the wealthy and the church. When Johannes Gutenberg introduced the movable type printing press to Europe, it revolutionized society. Suddenly, books could be mass-produced at a fraction of the cost. This explosion of printed material led to a dramatic increase in literacy rates. Ideas, both scientific and political, spread across borders faster than ever before. It is arguably one of the most important inventions in human history, laying the groundwork for the modern knowledge-based economy.",
        text: "Which of the following is NOT mentioned as a result of the printing press?",
        options: [
            "Mass production of books",
            "Spread of scientific ideas",
            "Immediate invention of the internet",
            "Lower cost of books"
        ],
        correctAnswer: 2
    },
    {
        id: 10,
        category: 'Reading',
        passage: "Before the invention of the printing press in the mid-15th century, books were rare and expensive objects. They were painstakingly copied by hand, usually by monks in monasteries, meaning that a single book could take months or even years to produce. This made knowledge the exclusive property of the wealthy and the church. When Johannes Gutenberg introduced the movable type printing press to Europe, it revolutionized society. Suddenly, books could be mass-produced at a fraction of the cost. This explosion of printed material led to a dramatic increase in literacy rates. Ideas, both scientific and political, spread across borders faster than ever before. It is arguably one of the most important inventions in human history, laying the groundwork for the modern knowledge-based economy.",
        text: "What is the 'modern knowledge-based economy' suggested to be rooted in?",
        options: [
            "The ability to copy books by hand",
            "The spread of information facilitated by the printing press",
            "The wealth of the church",
            "The scarcity of paper"
        ],
        correctAnswer: 1
    },

    // Passage 3: The Marathon
    {
        id: 11,
        category: 'Reading',
        passage: "Sarah had trained for the marathon for six months. She knew every curve of the river path where she ran her morning miles, and she knew exactly how much pasta to eat the night before a long run. But standing at the starting line, surrounded by thousands of other runners, a wave of doubt crashed over her. The air was cold, biting at her exposed skin. She adjusted her bib number for the third time. 'Trust the training,' her coach had said. As the starting gun fired, the mass of people surged forward like a single organism. Sarah took her first step, then her second. The doubt didn't vanish, but it was quieted by the rhythm of her feet hitting the pavement. Left, right, left, right. She wasn't running a marathon yet; she was just running, exactly as she had done hundreds of times before.",
        text: "What was Sarah's main emotion at the starting line?",
        options: [
            "Complete confidence",
            "Boredom",
            "Doubt and nervousness",
            "Anger"
        ],
        correctAnswer: 2
    },
    {
        id: 12,
        category: 'Reading',
        passage: "Sarah had trained for the marathon for six months. She knew every curve of the river path where she ran her morning miles, and she knew exactly how much pasta to eat the night before a long run. But standing at the starting line, surrounded by thousands of other runners, a wave of doubt crashed over her. The air was cold, biting at her exposed skin. She adjusted her bib number for the third time. 'Trust the training,' her coach had said. As the starting gun fired, the mass of people surged forward like a single organism. Sarah took her first step, then her second. The doubt didn't vanish, but it was quieted by the rhythm of her feet hitting the pavement. Left, right, left, right. She wasn't running a marathon yet; she was just running, exactly as she had done hundreds of times before.",
        text: "What calmed Sarah's doubt?",
        options: [
            "Eating pasta",
            "The cold air",
            "The rhythm of running",
            "Talking to another runner"
        ],
        correctAnswer: 2
    },
    {
        id: 13,
        category: 'Reading',
        passage: "Sarah had trained for the marathon for six months. She knew every curve of the river path where she ran her morning miles, and she knew exactly how much pasta to eat the night before a long run. But standing at the starting line, surrounded by thousands of other runners, a wave of doubt crashed over her. The air was cold, biting at her exposed skin. She adjusted her bib number for the third time. 'Trust the training,' her coach had said. As the starting gun fired, the mass of people surged forward like a single organism. Sarah took her first step, then her second. The doubt didn't vanish, but it was quieted by the rhythm of her feet hitting the pavement. Left, right, left, right. She wasn't running a marathon yet; she was just running, exactly as she had done hundreds of times before.",
        text: "The phrase 'surged forward like a single organism' implies:",
        options: [
            "The runners were all related.",
            "The crowd moved together in unison.",
            "The runners were colliding with each other.",
            "The race started very slowly."
        ],
        correctAnswer: 1
    },
    {
        id: 14,
        category: 'Reading',
        passage: "Sarah had trained for the marathon for six months. She knew every curve of the river path where she ran her morning miles, and she knew exactly how much pasta to eat the night before a long run. But standing at the starting line, surrounded by thousands of other runners, a wave of doubt crashed over her. The air was cold, biting at her exposed skin. She adjusted her bib number for the third time. 'Trust the training,' her coach had said. As the starting gun fired, the mass of people surged forward like a single organism. Sarah took her first step, then her second. The doubt didn't vanish, but it was quieted by the rhythm of her feet hitting the pavement. Left, right, left, right. She wasn't running a marathon yet; she was just running, exactly as she had done hundreds of times before.",
        text: "Why did Sarah adjust her bib number multiple times?",
        options: [
            "It was falling off.",
            "She was nervous/fidgeting.",
            "It was the wrong number.",
            "She was trying to show it to the camera."
        ],
        correctAnswer: 1
    },
    {
        id: 15,
        category: 'Reading',
        passage: "Sarah had trained for the marathon for six months. She knew every curve of the river path where she ran her morning miles, and she knew exactly how much pasta to eat the night before a long run. But standing at the starting line, surrounded by thousands of other runners, a wave of doubt crashed over her. The air was cold, biting at her exposed skin. She adjusted her bib number for the third time. 'Trust the training,' her coach had said. As the starting gun fired, the mass of people surged forward like a single organism. Sarah took her first step, then her second. The doubt didn't vanish, but it was quieted by the rhythm of her feet hitting the pavement. Left, right, left, right. She wasn't running a marathon yet; she was just running, exactly as she had done hundreds of times before.",
        text: "What is the theme of this passage?",
        options: [
            "The importance of winning.",
            "Overcoming anxiety through action and preparation.",
            "The dangers of running in the cold.",
            "How to eat pasta correctly."
        ],
        correctAnswer: 1
    },

    // Passage 4: Electric Cars
    {
        id: 16,
        category: 'Reading',
        passage: "While electric cars (EVs) are often hailed as the savior of the environment, the reality is more nuanced. It is true that EVs produce zero tailpipe emissions, which significantly improves air quality in cities. However, the production of their massive lithium-ion batteries is energy-intensive and requires mining for rare metals like cobalt and nickel, often in environmentally damaging ways. Furthermore, an electric car is only as 'clean' as the electricity grid that charges it. If the power plant burning coal provides the electricity to charge the car, the carbon footprint is merely shifted, not eliminated. Therefore, while EVs are a crucial step forward, they are part of a larger puzzle that must include green energy production and sustainable mining practices.",
        text: "What is the author's main argument?",
        options: [
            "Electric cars are perfect and have no downsides.",
            "We should stop using electric cars immediately.",
            "Electric cars are beneficial but have environmental costs that must be addressed.",
            "Gasoline cars are better for the environment than electric cars."
        ],
        correctAnswer: 2
    },
    {
        id: 17,
        category: 'Reading',
        passage: "While electric cars (EVs) are often hailed as the savior of the environment, the reality is more nuanced. It is true that EVs produce zero tailpipe emissions, which significantly improves air quality in cities. However, the production of their massive lithium-ion batteries is energy-intensive and requires mining for rare metals like cobalt and nickel, often in environmentally damaging ways. Furthermore, an electric car is only as 'clean' as the electricity grid that charges it. If the power plant burning coal provides the electricity to charge the car, the carbon footprint is merely shifted, not eliminated. Therefore, while EVs are a crucial step forward, they are part of a larger puzzle that must include green energy production and sustainable mining practices.",
        text: "Why does the author mention coal power plants?",
        options: [
            "To show that coal is a clean energy source.",
            "To explain how EVs can still be linked to pollution.",
            "To argue that EVs should carry their own generators.",
            "To suggest EVs are slower than gas cars."
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        category: 'Reading',
        passage: "While electric cars (EVs) are often hailed as the savior of the environment, the reality is more nuanced. It is true that EVs produce zero tailpipe emissions, which significantly improves air quality in cities. However, the production of their massive lithium-ion batteries is energy-intensive and requires mining for rare metals like cobalt and nickel, often in environmentally damaging ways. Furthermore, an electric car is only as 'clean' as the electricity grid that charges it. If the power plant burning coal provides the electricity to charge the car, the carbon footprint is merely shifted, not eliminated. Therefore, while EVs are a crucial step forward, they are part of a larger puzzle that must include green energy production and sustainable mining practices.",
        text: "What is one negative aspect of EV production mentioned?",
        options: [
            "They are too expensive.",
            "The mining for battery metals can be damaging.",
            "They consume too much water.",
            "They are hard to design."
        ],
        correctAnswer: 1
    },
    {
        id: 19,
        category: 'Reading',
        passage: "While electric cars (EVs) are often hailed as the savior of the environment, the reality is more nuanced. It is true that EVs produce zero tailpipe emissions, which significantly improves air quality in cities. However, the production of their massive lithium-ion batteries is energy-intensive and requires mining for rare metals like cobalt and nickel, often in environmentally damaging ways. Furthermore, an electric car is only as 'clean' as the electricity grid that charges it. If the power plant burning coal provides the electricity to charge the car, the carbon footprint is merely shifted, not eliminated. Therefore, while EVs are a crucial step forward, they are part of a larger puzzle that must include green energy production and sustainable mining practices.",
        text: "The word 'nuanced' in the first sentence suggests that the issue is:",
        options: [
            "Simple and straightforward.",
            "Complicated with multiple sides.",
            "False and misleading.",
            "Unimportant."
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        category: 'Reading',
        passage: "While electric cars (EVs) are often hailed as the savior of the environment, the reality is more nuanced. It is true that EVs produce zero tailpipe emissions, which significantly improves air quality in cities. However, the production of their massive lithium-ion batteries is energy-intensive and requires mining for rare metals like cobalt and nickel, often in environmentally damaging ways. Furthermore, an electric car is only as 'clean' as the electricity grid that charges it. If the power plant burning coal provides the electricity to charge the car, the carbon footprint is merely shifted, not eliminated. Therefore, while EVs are a crucial step forward, they are part of a larger puzzle that must include green energy production and sustainable mining practices.",
        text: "According to the passage, what else is needed alongside EVs to help the environment?",
        options: [
            "More coal power plants.",
            "Green energy production and sustainable mining.",
            "Larger gas tanks.",
            "Fewer roads."
        ],
        correctAnswer: 1
    },

    // --- LOGIC ---
    // 21
    {
        id: 21,
        category: 'Logic',
        text: "Identify the next number in the sequence: 2, 6, 12, 20, 30, ...",
        options: ["40", "42", "38", "44"],
        correctAnswer: 1
    },
    // 22
    {
        id: 22,
        category: 'Logic',
        text: "If 'All Bloops are Zazzles' and 'Some Zazzles are Gorks', which of the following MUST be true?",
        options: [
            "All Bloops are Gorks.",
            "Some Bloops are Gorks.",
            "All Gorks are Bloops.",
            "None of the above must be true."
        ],
        correctAnswer: 3
    },
    // 23
    {
        id: 23,
        category: 'Logic',
        text: "A doctor gives you 3 pills and tells you to take one every half hour. How long will the pills last?",
        options: ["1 hour", "1.5 hours", "2 hours", "3 hours"],
        correctAnswer: 0
    },
    // 24
    {
        id: 24,
        category: 'Logic',
        text: "Which word does not belong in the following group?",
        options: ["Knife", "Fork", "Spoon", "Soup"],
        correctAnswer: 3
    },
    // 25
    {
        id: 25,
        category: 'Logic',
        text: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
        options: ["100 minutes", "5 minutes", "20 minutes", "50 minutes"],
        correctAnswer: 1
    },
    // 26
    {
        id: 26,
        category: 'Logic',
        text: "Mary's father has 5 daughters: Nana, Nene, Nini, Nono. What is the name of the fifth daughter?",
        options: ["Nunu", "Nina", "Mary", "Nano"],
        correctAnswer: 2
    },
    // 27
    {
        id: 27,
        category: 'Logic',
        text: "Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
        options: ["7", "10", "12", "13"],
        correctAnswer: 1
    },
    // 28
    {
        id: 28,
        category: 'Logic',
        text: "Introducing a man, a woman said, 'His wife is the only daughter of my father.' How is that man related to the woman?",
        options: ["Brother", "Father-in-law", "Husband", "Uncle"],
        correctAnswer: 2
    },
    // 29
    {
        id: 29,
        category: 'Logic',
        text: "If some Smaugs are Dragons, and all Dragons have wings. Which statement is definitely true?",
        options: [
            "All Smaugs have wings.",
            "Some Smaugs have wings.",
            "All things with wings are Dragons.",
            "No Smaugs have wings."
        ],
        correctAnswer: 1
    },
    // 30
    {
        id: 30,
        category: 'Logic',
        text: "What comes next in the pattern? O T T F F S S ...",
        options: ["E", "N", "T", "O"],
        correctAnswer: 0 // One Two Three Four Five Six Seven Eight
    },

    // --- MATH ---
    {
        id: 31,
        category: 'Math',
        text: "Solve for x: 3x + 5 = 20",
        options: ["3", "5", "7", "15"],
        correctAnswer: 1
    },
    {
        id: 32,
        category: 'Math',
        text: "A shirt costs $40. It is on sale for 25% off. What is the sale price?",
        options: ["$10", "$25", "$30", "$35"],
        correctAnswer: 2
    },
    {
        id: 33,
        category: 'Math',
        text: "What is the area of a rectangle with length 8cm and width 5cm?",
        options: ["13 cm²", "26 cm²", "40 cm²", "400 cm²"],
        correctAnswer: 2
    },
    {
        id: 34,
        category: 'Math',
        text: "If you flip a fair coin two times, what is the probability of getting Heads both times?",
        options: ["50%", "25%", "75%", "10%"],
        correctAnswer: 1
    },
    {
        id: 35,
        category: 'Math',
        text: "Which fraction is the largest?",
        options: ["1/2", "2/3", "3/5", "4/7"],
        correctAnswer: 1 // 0.5, 0.66, 0.60, 0.57
    },
    {
        id: 36,
        category: 'Math',
        text: "A train travels 60 miles in 1.5 hours. What is its average speed?",
        options: ["30 mph", "40 mph", "45 mph", "90 mph"],
        correctAnswer: 1
    },
    {
        id: 37,
        category: 'Math',
        text: "The ratio of boys to girls in a class is 2:3. If there are 12 boys, how many girls are there?",
        options: ["15", "18", "20", "24"],
        correctAnswer: 1
    },
    {
        id: 38,
        category: 'Math',
        text: "What is 15% of 200?",
        options: ["15", "20", "30", "35"],
        correctAnswer: 2
    },
    {
        id: 39,
        category: 'Math',
        text: "Evaluate: 4 + 2 × (10 - 5)",
        options: ["30", "14", "24", "12"],
        correctAnswer: 1
    },
    {
        id: 40,
        category: 'Math',
        text: "A rectangular garden has a perimeter of 40 meters. If the width is 8 meters, what is the length?",
        options: ["32 m", "24 m", "12 m", "10 m"],
        correctAnswer: 2
    }
];
