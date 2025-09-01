import { getDayOfYear } from './dateUtils';

const loveNotes = [
  "Every morning I wake up grateful for another day to love you. Your smile is the sunshine that brightens my world, and your laugh is the melody that makes my heart dance.",
  
  "You are my favorite thought when I wake up and my sweetest dream when I fall asleep. Being with you feels like coming home to a place I never knew I was looking for.",
  
  "In a world full of temporary things, you are my forever. Every day with you is a new page in our beautiful love story, and I can't wait to see what we write next.",
  
  "Your love has transformed my ordinary days into extraordinary adventures. You make even the simplest moments feel magical, just by being yourself.",
  
  "I fall in love with you more deeply every single day. The way you care for others, your beautiful heart, and your incredible spirit continue to amaze me.",
  
  "You are my safe haven in this chaotic world. Your arms are my favorite place to be, and your heart is my forever home.",
  
  "Thank you for being patient with my quirks, for laughing at my terrible jokes, and for loving me exactly as I am. You make me want to be better every day.",
  
  "Every love song suddenly makes sense when I think of you. You've given meaning to words I never understood and feelings I never knew existed.",
  
  "Your presence in my life is like a beautiful garden blooming in my heart. You nurture my soul and help me grow in ways I never imagined possible.",
  
  "I love how we can be completely silly together and completely serious about our dreams. You're my best friend and my greatest love all in one.",
  
  "The way you believe in me gives me strength I never knew I had. Your faith in us makes me believe we can conquer anything together.",
  
  "You've taught me that love isn't just a feeling—it's a choice we make every day. And I choose you, today and always, with my whole heart.",
  
  "Your kindness touches everyone around you, but I'm the lucky one who gets to witness your beautiful soul every single day.",
  
  "I love how you make ordinary Tuesday afternoons feel like the most important moments of my life, simply by sharing them with me.",
  
  "You are my answered prayer, my unexpected blessing, and my greatest gift. Thank you for choosing to love me back.",
  
  "Every time you hold my hand, I'm reminded that some of the best things in life can't be seen or touched—they can only be felt with the heart.",
  
  "You make me believe in fairy tales again. Our love story is more beautiful than anything I could have ever imagined.",
  
  "I love watching you pursue your dreams with such passion. Your determination inspires me, and your success fills my heart with pride.",
  
  "You have this incredible way of making everything better just by being there. Your presence is my comfort, my joy, and my peace.",
  
  "Thank you for seeing the best in me, even when I can't see it myself. Your love helps me become the person I've always wanted to be.",
  
  "I love how we've created our own little world together, complete with inside jokes, secret smiles, and a language only we understand.",
  
  "Your love is like a warm embrace on the coldest day. No matter what storms life brings, I know we'll weather them together.",
  
  "You make me feel like the main character in the most beautiful love story ever written. Every chapter with you is my favorite.",
  
  "I love how you remember the little things—my coffee order, my favorite songs, the way I like my pillow fluffed. You see me, truly see me.",
  
  "You are my greatest adventure and my safest place. With you, I'm brave enough to dream bigger and strong enough to face anything.",
  
  "Every day I discover something new to love about you. It's like unwrapping a gift that keeps giving beautiful surprises.",
  
  "You've shown me that love isn't about finding someone perfect—it's about finding someone perfect for you. And you are perfect for me.",
  
  "I love how we can sit in comfortable silence or talk for hours about everything and nothing. Every moment with you feels right.",
  
  "Your love has painted my world in colors I never knew existed. You've turned my black and white life into a masterpiece.",
  
  "Thank you for being my partner in all of life's adventures—from grocery shopping to chasing dreams, you make everything more fun.",
  
  "You are my favorite notification, my most treasured memory, and my most hoped-for future. You are my everything.",
  
  "I love how you make me laugh until my stomach hurts and comfort me when my heart aches. You're my joy and my strength.",
  
  "With you, I've learned that home isn't a place—it's a feeling. And wherever you are, that's where I belong.",
  
  "You make me believe in forever. Not just in the length of our love, but in the depth and beauty of what we share.",
  
  "Every sunset is more beautiful when I'm watching it with you. You make ordinary moments feel like precious memories.",
  
  "I love how you challenge me to grow while accepting me exactly as I am. You see my potential and love my reality.",
  
  "Your love is my favorite song, my most beautiful poem, and my greatest masterpiece. You are art in human form.",
  
  "Thank you for being my biggest cheerleader, my gentle critic, and my constant support. You believe in us, and that makes all the difference.",
  
  "You've taught me that the best love isn't perfect—it's real, honest, and willing to grow. Our love gets stronger with every challenge.",
  
  "I love how you make even mundane tasks feel special when we do them together. Cooking, cleaning, errands—everything is better with you.",
  
  "You are my favorite person to spend lazy Sunday mornings with, my best travel companion, and my ideal dinner date every single night.",
  
  "Your love has given me wings to fly and roots to keep me grounded. You encourage my dreams while keeping me centered.",
  
  "I love how we've grown together without losing ourselves. You help me become the best version of me while staying true to who I am.",
  
  "Every photo of us tells a story of joy, every text from you brightens my day, and every hug from you feels like coming home.",
  
  "You make me understand why it never worked out with anyone else. Everything led me to you, and now I know why—you're my person.",
  
  "I love how you remember our anniversary, our first kiss, our first 'I love you,' and all the little moments that built our love story.",
  
  "Your love is like a gentle rain that nourishes my soul. You help beautiful things grow in the garden of my heart.",
  
  "Thank you for dancing with me in the kitchen, singing with me in the car, and dreaming with me about our future.",
  
  "You are my favorite hello and my hardest goodbye. Even when we're apart for a few hours, I miss your smile.",
  
  "I love how you love me—completely, authentically, and without reservation. Your love makes me feel brave enough to love you the same way.",
  
  "You've turned my house into a home, my days into adventures, and my dreams into plans we're making together.",
  
  "I love how you still give me butterflies after all this time. Your text messages still make me smile like a teenager in love.",
  
  "You are my peace in chaos, my light in darkness, and my hope when things get tough. You are my anchor and my wings.",
  
  "Thank you for loving all of me—my strengths and weaknesses, my good days and bad days, my dreams and my fears.",
  
  "I love how we can be completely ourselves with each other. No pretenses, no masks—just real, honest, beautiful love.",
  
  "You make me want to be worthy of the love you give me. You inspire me to grow, to give, and to love more deeply.",
  
  "Every day I choose you, and every day I'm grateful you choose me back. Our love is built on a million small choices to stay and fight and grow together.",
  
  "You are my favorite person to get lost with, whether we're exploring new places or just getting lost in conversation for hours.",
  
  "I love how you see magic in ordinary moments and help me see the world through your beautiful, optimistic eyes.",
  
  "Your love has taught me that happiness isn't a destination—it's the journey we're taking together, hand in hand.",
  
  "Thank you for being my shelter from life's storms and my companion in celebrating life's sunshine. You make everything better.",
  
  "I love how you make me feel completely seen and completely loved. In your eyes, I see my best self reflected back.",
  
  "You are my greatest blessing disguised as a person. Every day with you is a gift I never want to take for granted.",
  
  "I love how our love story keeps getting better with each chapter. The best is yet to come, and I can't wait to write it with you.",
  
  "You make me believe in the kind of love that poets write about and that dreamers dream of. Our love is that rare, that special, that beautiful.",
  
  "Thank you for being my yesterday's treasure, today's joy, and tomorrow's promise. You are my always and forever.",
  
  "I love you not just for who you are, but for who I am when I'm with you. You bring out the best in me effortlessly.",
  
  "You are my favorite part of every day, my sweetest thought in every quiet moment, and my most precious prayer every night.",
  
  "With you, I've learned that love isn't about finding someone you can live with—it's about finding someone you can't live without.",
  
  "You make my heart smile in ways I didn't know were possible. Your love is pure magic, and I'm under your beautiful spell.",
  
  "I love how we've built a love that's strong enough to weather any storm and gentle enough to nurture the most delicate dreams.",
  
  "You are my favorite reason to wake up each morning and my sweetest thought as I drift off to sleep each night.",
  
  "Thank you for showing me that true love isn't just in fairy tales—it's real, it's ours, and it's the most beautiful thing I've ever experienced."
];

// Additional love notes to reach 365+
const additionalNotes = [
  "Your love is like a beautiful symphony that plays in my heart every moment of every day.",
  "I love how you make me feel like I'm the only person in the world when you look at me.",
  "You are my favorite chapter in the book of life, and I never want this story to end.",
  "Every time I see you, I fall in love all over again. You are my daily miracle.",
  "You make me understand why Shakespeare wrote sonnets and why artists paint portraits—some beauty demands to be captured.",
  "I love how you turn ordinary moments into memories I'll treasure forever.",
  "You are my North Star, guiding me home to your heart no matter how lost I might feel.",
  "Thank you for loving me on my worst days and celebrating me on my best ones.",
  "You make me want to be the kind of person who deserves the incredible love you give so freely.",
  "I love how we laugh together, dream together, and build our future together one day at a time.",
  "You are my greatest adventure and my most peaceful place to rest.",
  "Every love letter ever written pales in comparison to the love story we're living together.",
  "You make me believe that soulmates are real, and I'm lucky enough to have found mine.",
  "I love how you see the beauty in everything, especially in me when I can't see it myself.",
  "You are my favorite place to visit and my favorite person to come home to."
];

const allLoveNotes = [...loveNotes, ...additionalNotes];

export const getLoveNote = (date: Date): string => {
  const dayOfYear = getDayOfYear(date);
  return allLoveNotes[dayOfYear % allLoveNotes.length];
};