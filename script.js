const firebaseConfig = {
    apiKey: "AIzaSyAiIrOvbuXw_eFo3H9l7s4QULqrPSqOPFU",
    authDomain: "guess-the-song-dd37a.firebaseapp.com",
    databaseURL: "https://guess-the-song-dd37a-default-rtdb.firebaseio.com",
    projectId: "guess-the-song-dd37a",
    storageBucket: "guess-the-song-dd37a.appspot.com",
    messagingSenderId: "672368690487",
    appId: "1:672368690487:web:367ad06d5acebb73d2c6b2",
    measurementId: "G-4KRYL8QZ15"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let playerName = localStorage.getItem('playerName') || '';

function saveScore(username, score) {
    const leaderboardRef = database.ref('leaderboard');
    leaderboardRef.orderByChild('username').equalTo(username).once('value', snapshot => {
        if (snapshot.exists()) {
            const userData = snapshot.val();
            const userKey = Object.keys(userData)[0];
            const userScore = userData[userKey].score;
            if (score > userScore) {
                leaderboardRef.child(userKey).update({ score: score });
            }
        } else {
            const newScoreRef = leaderboardRef.push();
            newScoreRef.set({
                username: username,
                score: score
            });
        }
    });
}

// Retrieve leaderboard data
function getLeaderboard(callback) {
    const leaderboardRef = database.ref('leaderboard').orderByChild('score').limitToLast(10);
    leaderboardRef.once('value', snapshot => {
        const leaderboard = [];
        snapshot.forEach(childSnapshot => {
            leaderboard.push(childSnapshot.val());
        });
        callback(leaderboard.reverse());
    });
}

document.getElementById('leaderboard-button').addEventListener('click', () => {
    if (!playerName) {
        document.getElementById('name-input-container').style.display = 'flex';
    }
    getLeaderboard(displayLeaderboard);
});

document.getElementById('submit-name').addEventListener('click', () => {
    const username = document.getElementById('username-input').value;
    if (username) {
        playerName = username;
        localStorage.setItem('playerName', playerName);
        document.getElementById('name-input-container').style.display = 'none';
        getLeaderboard(displayLeaderboard);
    }
});

function displayLeaderboard(leaderboard) {
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = '';
    leaderboard.forEach((entry, index) => {
        const listItem = document.createElement('li');
        let medal = '';
        if (index === 0) {
            medal = '🥇';
        } else if (index === 1) {
            medal = '🥈';
        } else if (index === 2) {
            medal = '🥉';
        }
        listItem.textContent = `${index + 1}. ${medal} ${entry.username}: ${entry.score}`;
        leaderboardList.appendChild(listItem);
    });
    document.getElementById('leaderboard-modal').style.display = 'block';
}

document.getElementById('leaderboard-close-button').addEventListener('click', () => {
    document.getElementById('leaderboard-modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('leaderboard-modal')) {
        document.getElementById('leaderboard-modal').style.display = 'none';
    }
});

function startTimer(timerElement, initialTime) {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            gameOver(timerElement === timerBar ? levels : timerElement === timerBarFlags ? flagLevels : timerElement === timerBarMovies ? movieLevels : christmasLevels, currentLevel);
        } else {
            timeLeft--;
            timerElement.style.width = (timeLeft / initialTime) * 100 + '%';
        }
    }, 1000);
}

document.getElementById('submit-name').addEventListener('click', () => {
    const username = document.getElementById('username-input').value;
    if (username) {
        playerName = username;
        localStorage.setItem('playerName', playerName);
        saveScore(playerName, streak);
        document.getElementById('name-input-container').style.display = 'none';
        document.getElementById('game-over-message').style.display = 'none';
        document.getElementById('restart-game').style.display = 'block';
    }
});

const levels = [
    { emojis: ['🧠', '💡'], answer: 'Brainstorm', choices: ['Idea', 'Brainstorm', 'Thinking', 'Creativity'] },
    { emojis: ['🌍', '✈️'], answer: 'World Travel', choices: ['Journey', 'Vacation', 'World Travel', 'Adventure'] },
    { emojis: ['🎥', '🍿'], answer: 'Movie Night', choices: ['Cinema', 'Film', 'Movie Night', 'Entertainment'] },
    { emojis: ['📈', '💹'], answer: 'Stock Market', choices: ['Investment', 'Stock Market', 'Economy', 'Finance'] },
    { emojis: ['🏠', '🔑'], answer: 'New Home', choices: ['Real Estate', 'New Home', 'House Key', 'Property'] },
    { emojis: ['📅', '⏰'], answer: 'Schedule', choices: ['Calendar', 'Appointment', 'Schedule', 'Reminder'] },
    { emojis: ['🍽️', '🍷'], answer: 'Fine Dining', choices: ['Restaurant', 'Dinner', 'Fine Dining', 'Gourmet'] },
    { emojis: ['🎓', '🏫'], answer: 'Graduation', choices: ['School', 'Graduation', 'Education', 'Degree'] },
    { emojis: ['💪', '🏋️'], answer: 'Workout', choices: ['Exercise', 'Workout', 'Gym', 'Fitness'] },
    { emojis: ['🛏️', '💤'], answer: 'Sleep', choices: ['Rest', 'Nap', 'Sleep', 'Dream'] },
    { emojis: ['📚', '📝'], answer: 'Study', choices: ['Homework', 'Study', 'Learning', 'Education'] },
    { emojis: ['🎨', '🖌️'], answer: 'Art', choices: ['Painting', 'Drawing', 'Art', 'Creativity'] },
    { emojis: ['🎤', '🎶'], answer: 'Singing', choices: ['Music', 'Karaoke', 'Singing', 'Performance'] },
    { emojis: ['⚽', '🏆'], answer: 'Soccer Champion', choices: ['Football', 'Trophy', 'Soccer Champion', 'Victory'] },
    { emojis: ['🛒', '🏪'], answer: 'Shopping', choices: ['Grocery', 'Market', 'Shopping', 'Store'] },
    { emojis: ['💻', '🖱️'], answer: 'Computer Work', choices: ['Office', 'Technology', 'Computer Work', 'Typing'] },
    { emojis: ['📞', '💬'], answer: 'Phone Call', choices: ['Conversation', 'Chat', 'Phone Call', 'Communication'] },
    { emojis: ['🚴', '🌳'], answer: 'Cycling', choices: ['Biking', 'Exercise', 'Cycling', 'Nature'] },
    { emojis: ['📸', '🌅'], answer: 'Photography', choices: ['Sunset', 'Picture', 'Photography', 'Camera'] },
    { emojis: ['🎁', '🎉'], answer: 'Gift', choices: ['Present', 'Surprise', 'Gift', 'Celebration'] },
    { emojis: ['🚿', '🛁'], answer: 'Bath Time', choices: ['Shower', 'Clean', 'Bath Time', 'Relax'] },
    { emojis: ['☕', '📖'], answer: 'Coffee Break', choices: ['Relax', 'Coffee Break', 'Reading', 'Chill'] },
    { emojis: ['🚀', '🌌'], answer: 'Space Exploration', choices: ['Rocket', 'Space Exploration', 'Galaxy', 'Astronomy'] },
    { emojis: ['👩‍🍳', '🍪'], answer: 'Baking', choices: ['Cooking', 'Dessert', 'Baking', 'Pastry'] },
    { emojis: ['🎭', '🎟️'], answer: 'Theater Night', choices: ['Play', 'Show', 'Theater Night', 'Performance'] },
    { emojis: ['🏖️', '🏝️'], answer: 'Beach Vacation', choices: ['Relaxation', 'Beach Vacation', 'Holiday', 'Tropical'] },
    { emojis: ['📦', '🚚'], answer: 'Delivery', choices: ['Shipping', 'Delivery', 'Courier', 'Logistics'] },
    { emojis: ['🐶', '🐾'], answer: 'Dog Walk', choices: ['Pet', 'Dog Walk', 'Exercise', 'Outdoors'] },
    { emojis: ['⛵', '🌊'], answer: 'Sailing', choices: ['Adventure', 'Sailing', 'Boat', 'Ocean'] },
    { emojis: ['🌳', '🏕️'], answer: 'Camping', choices: ['Hiking', 'Camping', 'Outdoors', 'Adventure'] },
    { emojis: ['🍔', '🍟'], answer: 'Fast Food', choices: ['Snack', 'Fast Food', 'Burger', 'Fries'] },
    { emojis: ['📷', '🎞️'], answer: 'Filmmaking', choices: ['Videography', 'Filmmaking', 'Photography', 'Cinematography'] },
    { emojis: ['🎮', '🕹️'], answer: 'Gaming', choices: ['Console', 'Gaming', 'Esports', 'Arcade'] },
    { emojis: ['✈️', '🗺️'], answer: 'Travel Plans', choices: ['Adventure', 'Travel Plans', 'Trip', 'Journey'] },
    { emojis: ['💼', '📊'], answer: 'Office Work', choices: ['Business', 'Office Work', 'Job', 'Presentation'] },
    { emojis: ['🐱', '😻'], answer: 'Cat Lover', choices: ['Pet', 'Cat Lover', 'Feline', 'Adoration'] },
    { emojis: ['🌈', '☁️'], answer: 'Rainbow', choices: ['Weather', 'Rainbow', 'Colorful', 'Nature'] },
    { emojis: ['👨‍🔬', '🔬'], answer: 'Science Lab', choices: ['Experiment', 'Science Lab', 'Research', 'Chemistry'] },
    { emojis: ['🛡️', '⚔️'], answer: 'Knight', choices: ['Hero', 'Knight', 'Battle', 'Armor'] },
    { emojis: ['🦋', '🌼'], answer: 'Nature Walk', choices: ['Hiking', 'Nature Walk', 'Butterfly', 'Relaxation'] },
    { emojis: ['📜', '🖋️'], answer: 'Writing', choices: ['Essay', 'Writing', 'Letter', 'Creativity'] },
    { emojis: ['🍹', '🌴'], answer: 'Tropical Drink', choices: ['Cocktail', 'Tropical Drink', 'Vacation', 'Relaxation'] },
    { emojis: ['🔮', '✨'], answer: 'Magic', choices: ['Sorcery', 'Magic', 'Mystery', 'Illusion'] },
    { emojis: ['🏋️', '🥇'], answer: 'Weightlifting', choices: ['Strength', 'Weightlifting', 'Gym', 'Fitness'] },
    { emojis: ['📕', '🎓'], answer: 'Studying', choices: ['Learning', 'Studying', 'School', 'Academics'] },
    { emojis: ['🌟', '💫'], answer: 'Shooting Star', choices: ['Wish', 'Shooting Star', 'Sky', 'Night'] },
    { emojis: ['🍩', '☕'], answer: 'Donut Break', choices: ['Snack', 'Donut Break', 'Coffee', 'Sweet'] },
    { emojis: ['🚲', '🏞️'], answer: 'Cycling Trip', choices: ['Exercise', 'Cycling Trip', 'Adventure', 'Exploration'] },
    { emojis: ['💡', '⚡'], answer: 'Bright Idea', choices: ['Inspiration', 'Bright Idea', 'Creativity', 'Energy'] },
    { emojis: ['📽️', '🎬'], answer: 'Filmmaker', choices: ['Cinema', 'Filmmaker', 'Director', 'Script'] },
    { emojis: ['🏔️', '❄️'], answer: 'Snowy Mountains', choices: ['Winter', 'Snowy Mountains', 'Adventure', 'Cold'] }
];

const movieLevels = [
    { emojis: ['🦁', '👑'], answer: 'The Lion King', choices: ['The Lion King', 'Lion Heart', 'King of the Jungle', 'Animal Kingdom'] },
    { emojis: ['🚢', '❄️'], answer: 'Titanic', choices: ['Titanic', 'Frozen Ship', 'Iceberg', 'Sinking Ship'] },
    { emojis: ['🧙‍♂️', '🧝‍♂️'], answer: 'The Lord of the Rings', choices: ['The Lord of the Rings', 'Wizard and Elf', 'Magic Ring', 'Fantasy World'] },
    { emojis: ['🦸‍♂️', '🦸‍♀️'], answer: 'The Avengers', choices: ['The Avengers', 'Superheroes', 'Marvel Team', 'Hero Squad'] },
    { emojis: ['🦇', '🦸‍♂️'], answer: 'Batman', choices: ['Batman', 'Dark Knight', 'Gotham Hero', 'Bat Hero'] },
    { emojis: ['👽', '🚀'], answer: 'E.T.', choices: ['E.T.', 'Alien Visitor', 'Space Friend', 'Extraterrestrial'] },
    { emojis: ['🧛‍♂️', '🦇'], answer: 'Dracula', choices: ['Dracula', 'Vampire', 'Bloodsucker', 'Night Creature'] },
    { emojis: ['👸', '🐸'], answer: 'The Princess and the Frog', choices: ['The Princess and the Frog', 'Fairy Tale', 'Frog Prince', 'Royal Kiss'] },
    { emojis: ['🧞‍♂️', '🕌'], answer: 'Aladdin', choices: ['Aladdin', 'Magic Lamp', 'Genie', 'Arabian Nights'] },
    { emojis: ['🦁', '🐯'], answer: 'Madagascar', choices: ['Madagascar', 'Zoo Escape', 'Animal Adventure', 'Wild Journey'] },
    { emojis: ['🧙‍♂️', '⚡'], answer: 'Harry Potter', choices: ['Harry Potter', 'Wizard Boy', 'Magic School', 'Sorcerer'] },
    { emojis: ['👻', '🏚️'], answer: 'Ghostbusters', choices: ['Ghostbusters', 'Haunted House', 'Spooky Mansion', 'Ghost Hunters'] },
    { emojis: ['🦸‍♂️', '🕷️'], answer: 'Spider-Man', choices: ['Spider-Man', 'Web Slinger', 'Spider Hero', 'Wall Crawler'] },
    { emojis: ['🧟‍♂️', '🔫'], answer: 'Zombieland', choices: ['Zombieland', 'Zombie Apocalypse', 'Undead World', 'Survival'] },
    { emojis: ['👨‍🚀', '🌕'], answer: 'Apollo 13', choices: ['Apollo 13', 'Moon Mission', 'Space Journey', 'Lunar Landing'] },
    { emojis: ['🦖', '🌋'], answer: 'Jurassic Park', choices: ['Jurassic Park', 'Dinosaur World', 'Prehistoric Adventure', 'Dino Land'] },
    { emojis: ['👨‍🎤', '🚀'], answer: 'Rocketman', choices: ['Rocketman', 'Space Singer', 'Music Journey', 'Elton John'] },
    { emojis: ['🧙‍♂️', '🧙‍♀️'], answer: 'Fantastic Beasts', choices: ['Fantastic Beasts', 'Magic Creatures', 'Wizard World', 'Magical Adventure'] },
    { emojis: ['👨‍🚀', '🌌'], answer: 'Interstellar', choices: ['Interstellar', 'Space Travel', 'Cosmic Journey', 'Galaxy Quest'] },
];

const christmasLevels = [
    { emojis: ['🎅', '🎁'], answer: 'Santa Claus', choices: ['Santa Claus', 'Gifts', 'Christmas', 'Holiday'] },
    { emojis: ['🎄', '✨'], answer: 'Christmas Tree', choices: ['Tree', 'Christmas Tree', 'Decorations', 'Holiday'] },
    { emojis: ['☃️', '❄️'], answer: 'Snowman', choices: ['Snowman', 'Winter', 'Frosty', 'Snow'] },
    { emojis: ['🦌', '🎅'], answer: 'Rudolph', choices: ['Reindeer', 'Rudolph', 'Santa', 'Snow'] },
    { emojis: ['🎶', '🔔'], answer: 'Jingle Bells', choices: ['Jingle Bells', 'Music', 'Carols', 'Holiday'] },
    { emojis: ['🎁', '🛍️'], answer: 'Gift Shopping', choices: ['Presents', 'Gift Shopping', 'Holiday', 'Shopping'] },
    { emojis: ['🍪', '🥛'], answer: 'Cookies and Milk', choices: ['Snacks', 'Cookies and Milk', 'Santa', 'Treats'] },
    { emojis: ['🛷', '❄️'], answer: 'Sledding', choices: ['Snow', 'Sledding', 'Winter', 'Sports'] },
    { emojis: ['🎄', '💡'], answer: 'Tree Lighting', choices: ['Decorating', 'Tree Lighting', 'Holiday', 'Lights'] },
    { emojis: ['❄️', '🎿'], answer: 'Winter Sports', choices: ['Skiing', 'Winter Sports', 'Snowboarding', 'Cold'] },
    { emojis: ['🎅', '📮'], answer: 'Letter to Santa', choices: ['Mail', 'Letter to Santa', 'Gifts', 'Wish'] },
    { emojis: ['🦃', '🍽️'], answer: 'Christmas Dinner', choices: ['Feast', 'Christmas Dinner', 'Holiday', 'Family'] },
    { emojis: ['🛏️', '🎅'], answer: 'Santa’s Visit', choices: ['Sleep', 'Santa’s Visit', 'Dream', 'Christmas Eve'] },
    { emojis: ['🎄', '🎁'], answer: 'Christmas Morning', choices: ['Presents', 'Christmas Morning', 'Holiday', 'Joy'] },
    { emojis: ['🎤', '🎶'], answer: 'Christmas Carols', choices: ['Singing', 'Christmas Carols', 'Music', 'Holiday'] },
    { emojis: ['❄️', '🌨️'], answer: 'White Christmas', choices: ['Snow', 'White Christmas', 'Holiday', 'Winter'] },
    { emojis: ['🎄', '🌟'], answer: 'Tree Topper', choices: ['Star', 'Tree Topper', 'Ornaments', 'Lights'] },
    { emojis: ['🦌', '🛷'], answer: 'Reindeer Sleigh', choices: ['Reindeer', 'Sleigh', 'Santa', 'Flying'] },
    { emojis: ['🎁', '❤️'], answer: 'Gift of Love', choices: ['Love', 'Gift of Love', 'Presents', 'Holiday'] },
    { emojis: ['⛄', '🧣'], answer: 'Frosty the Snowman', choices: ['Snowman', 'Frosty the Snowman', 'Winter', 'Song'] },
    { emojis: ['🌟', '🎄'], answer: 'Holiday Spirit', choices: ['Joy', 'Holiday Spirit', 'Christmas', 'Celebration'] },
    { emojis: ['🎅', '⏰'], answer: 'Christmas Countdown', choices: ['Clock', 'Christmas Countdown', 'Anticipation', 'Time'] },
    { emojis: ['🎁', '🎉'], answer: 'Holiday Celebration', choices: ['Party', 'Holiday Celebration', 'Festivity', 'Joy'] },
    { emojis: ['🕯️', '🎄'], answer: 'Candlelit Christmas', choices: ['Candles', 'Candlelit Christmas', 'Holiday', 'Warmth'] },
    { emojis: ['🛷', '🌲'], answer: 'Winter Wonderland', choices: ['Snow', 'Winter Wonderland', 'Forest', 'Holiday'] },
    { emojis: ['🎄', '🎨'], answer: 'Tree Decorating', choices: ['Art', 'Tree Decorating', 'Ornaments', 'Lights'] },
    { emojis: ['🧦', '🎅'], answer: 'Stockings', choices: ['Socks', 'Stockings', 'Gifts', 'Holiday'] },
    { emojis: ['🍷', '🔥'], answer: 'Mulled Wine', choices: ['Drink', 'Mulled Wine', 'Holiday', 'Warmth'] },
    { emojis: ['🎄', '🦙'], answer: 'Christmas Sweater', choices: ['Sweater', 'Christmas Sweater', 'Clothing', 'Holiday'] },
    { emojis: ['❄️', '🎥'], answer: 'Holiday Movie', choices: ['Film', 'Holiday Movie', 'Christmas', 'Entertainment'] },
    { emojis: ['🎶', '🕯️'], answer: 'Silent Night', choices: ['Music', 'Silent Night', 'Christmas', 'Carols'] },
    { emojis: ['🧑‍🎄', '🎁'], answer: 'Santa’s Helper', choices: ['Elf', 'Santa’s Helper', 'Gifts', 'Workshop'] },
    { emojis: ['🎄', '🎆'], answer: 'Christmas Eve', choices: ['Night', 'Christmas Eve', 'Holiday', 'Lights'] },
    { emojis: ['🎅', '🧝'], answer: 'Santa’s Workshop', choices: ['Toys', 'Santa’s Workshop', 'Gifts', 'Elves'] },
    { emojis: ['📜', '✒️'], answer: 'Nice List', choices: ['List', 'Nice List', 'Santa', 'Children'] },
    { emojis: ['🎄', '🎂'], answer: 'Christmas Cake', choices: ['Dessert', 'Christmas Cake', 'Holiday', 'Treat'] },
    { emojis: ['❄️', '🏔️'], answer: 'Snowy Peaks', choices: ['Mountains', 'Snowy Peaks', 'Winter', 'Cold'] },
    { emojis: ['🎁', '🎮'], answer: 'Christmas Games', choices: ['Fun', 'Christmas Games', 'Entertainment', 'Holiday'] },
    { emojis: ['🎤', '🎄'], answer: 'Christmas Karaoke', choices: ['Singing', 'Christmas Karaoke', 'Music', 'Carols'] },
    { emojis: ['🦌', '⭐'], answer: 'Guiding Star', choices: ['Star', 'Guiding Star', 'Reindeer', 'Holiday'] },
    { emojis: ['🎁', '🎀'], answer: 'Wrapped Present', choices: ['Gift', 'Wrapped Present', 'Holiday', 'Surprise'] },
    { emojis: ['🍫', '☕'], answer: 'Hot Cocoa', choices: ['Drink', 'Hot Cocoa', 'Holiday', 'Warmth'] },
    { emojis: ['🎄', '🕊️'], answer: 'Peace on Earth', choices: ['Peace', 'Peace on Earth', 'Holiday', 'Harmony'] },
    { emojis: ['❄️', '🎡'], answer: 'Winter Carnival', choices: ['Fun', 'Winter Carnival', 'Holiday', 'Festival'] },
    { emojis: ['🎅', '🛍️'], answer: 'Santa’s Bag', choices: ['Gifts', 'Santa’s Bag', 'Presents', 'Holiday'] },
    { emojis: ['🛏️', '🎄'], answer: 'Christmas Dreams', choices: ['Sleep', 'Christmas Dreams', 'Holiday', 'Eve'] },
    { emojis: ['🎄', '🎠'], answer: 'Holiday Fair', choices: ['Fair', 'Holiday Fair', 'Christmas', 'Festival'] },
    { emojis: ['🎅', '🕛'], answer: 'Midnight Magic', choices: ['Magic', 'Midnight Magic', 'Holiday', 'Santa'] }
];

let flagLevels = [];
let currentLevel = 0;
let timeLeft = 10;
let countdown;
const timerBar = document.getElementById('timer-bar');
const timerBarFlags = document.getElementById('timer-bar-flags');
const timerBarMovies = document.getElementById('timer-bar-movies');
const levelElement = document.getElementById('level');
const levelElementFlags = document.getElementById('level-flags');
const levelElementMovies = document.getElementById('level-movies');
const emoji1 = document.getElementById('emoji1');
const emoji2 = document.getElementById('emoji2');
const emoji1Movies = document.getElementById('emoji1-movies');
const emoji2Movies = document.getElementById('emoji2-movies');
const flagImage = document.getElementById('flag-image');
const choicesContainer = document.getElementById('choices');
const choicesContainerFlags = document.getElementById('choices-flags');
const movieAnswerInput = document.getElementById('movie-answer-input');
const submitMovieAnswerButton = document.getElementById('submit-movie-answer');
const gameOverElement = document.getElementById('game-over');
const gameOverElementFlags = document.getElementById('game-over-flags');
const gameOverElementMovies = document.getElementById('game-over-movies');
const gameOverMessage = document.getElementById('game-over-message');
const gameOverFlagsMessage = document.getElementById('game-over-flags-message');
const gameOverMoviesMessage = document.getElementById('game-over-movies-message');
const restartButton = document.getElementById('restart-button');
const restartButtonFlags = document.getElementById('restart-button-flags');
const restartButtonMovies = document.getElementById('restart-button-movies');
const mainMenu = document.getElementById('main-menu');
const gameContainer = document.getElementById('game-container');
const flagsContainer = document.getElementById('flags-container');
const moviesContainer = document.getElementById('movies-container');
const startButton = document.getElementById('start-button');
const flagsButton = document.getElementById('flags-button');
const moviesButton = document.getElementById('movies-button');
const christmasButton = document.getElementById('christmas-button');
const backButtonGame = document.getElementById('back-button-game');
const backButtonFlags = document.getElementById('back-button-flags');
const backButtonMovies = document.getElementById('back-button-movies');
let usedLevels = [];

startButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gameContainer.style.display = 'flex';
    loadLevel(currentLevel);
    resetTimer(timerBar, 10);
});

flagsButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    flagsContainer.style.display = 'flex';
    loadFlagLevels().then(() => {
        loadFlagLevel(currentLevel);
        resetTimer(timerBarFlags, 10);
    });
});

moviesButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    moviesContainer.style.display = 'flex';
    loadMovieLevel(currentLevel);
    resetTimer(timerBarMovies, 20);
});

christmasButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gameContainer.style.display = 'flex';
    loadChristmasLevel(currentLevel);
    resetTimer(timerBar, 10);
});

backButtonGame.addEventListener('click', () => {
    gameContainer.style.display = 'none';
    mainMenu.style.display = 'flex';
});

backButtonFlags.addEventListener('click', () => {
    flagsContainer.style.display = 'none';
    mainMenu.style.display = 'flex';
});

backButtonMovies.addEventListener('click', () => {
    moviesContainer.style.display = 'none';
    mainMenu.style.display = 'flex';
});

restartButton.addEventListener('click', restartGame);
restartButtonFlags.addEventListener('click', restartFlagGame);
restartButtonMovies.addEventListener('click', restartMovieGame);
submitMovieAnswerButton.addEventListener('click', checkMovieAnswer);

function loadLevel(level) {
    let randomLevel;
    do {
        randomLevel = getRandomLevel(levels);
    } while (usedLevels.includes(randomLevel));
    usedLevels.push(randomLevel);

    const { emojis, choices } = levels[randomLevel];
    emoji1.textContent = emojis[0];
    emoji2.textContent = emojis[1];
    levelElement.innerHTML = `Streak 🔥 : ${level + 1}`;
    choicesContainer.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, randomLevel, levels));
        choicesContainer.appendChild(button);
    });
}

async function loadFlagLevels() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const countries = await response.json();
    flagLevels = countries.map(country => ({
        flag: country.flags.png,
        answer: country.name.common,
        choices: shuffle([country.name.common, ...getRandomCountries(countries, 3).map(c => c.name.common)])
    }));
}

function loadFlagLevel(level) {
    let randomLevel;
    do {
        randomLevel = getRandomLevel(flagLevels);
    } while (usedLevels.includes(randomLevel));
    usedLevels.push(randomLevel);

    const { flag, choices } = flagLevels[randomLevel];
    flagImage.src = flag;
    levelElementFlags.innerHTML = `Streak 🔥 : ${level + 1}`;
    choicesContainerFlags.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice-flag';
        button.textContent = choice;
        button.addEventListener('click', () => checkFlagAnswer(choice, randomLevel));
        choicesContainerFlags.appendChild(button);
    });
}

function loadMovieLevel(level) {
    let randomLevel;
    do {
        randomLevel = getRandomLevel(movieLevels);
    } while (usedLevels.includes(randomLevel));
    usedLevels.push(randomLevel);

    const { emojis } = movieLevels[randomLevel];
    emoji1Movies.textContent = emojis[0];
    emoji2Movies.textContent = emojis[1];
    levelElementMovies.innerHTML = `Streak 🔥 : ${level + 1}`;
    movieAnswerInput.value = '';
}

function loadChristmasLevel(level) {
    let randomLevel;
    do {
        randomLevel = getRandomLevel(christmasLevels);
    } while (usedLevels.includes(randomLevel));
    usedLevels.push(randomLevel);

    const { emojis, choices } = christmasLevels[randomLevel];
    emoji1.textContent = emojis[0];
    emoji2.textContent = emojis[1];
    levelElement.innerHTML = `Streak 🔥 : ${level + 1}`;
    choicesContainer.innerHTML = '';
    choices.forEach(choice => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice, randomLevel, christmasLevels));
        choicesContainer.appendChild(button);
    });
}

let snowInterval;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❄️';

  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;

  document.body.appendChild(snowflake);

  setTimeout(() => {
    snowflake.remove();
  }, parseFloat(snowflake.style.animationDuration) * 1000);
}

function createSnowball() {
  const snowball = document.createElement('div');
  snowball.classList.add('snowball');

  // randomize the snowball position and animation duration
  snowball.style.left = `${Math.random() * 100}vw`;
  snowball.style.animationDuration = `${Math.random() * 5 + 5}s`;

  document.body.appendChild(snowball);

  // Remove snowball after fall
  setTimeout(() => {
    snowball.remove();
  }, parseFloat(snowball.style.animationDuration) * 1000);
}

function startSnow() {
  snowInterval = setInterval(() => {
    createSnowflake();
    createSnowball();
  }, 500);
}

function stopSnow() {
  clearInterval(snowInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  startSnow();

  const toggleButton = document.createElement('button');
  toggleButton.id = 'toggle-snow-button';
  toggleButton.textContent = '❄️';
  document.body.appendChild(toggleButton);

  toggleButton.addEventListener('click', () => {
    if (snowInterval) {
      stopSnow();
      toggleButton.textContent = '❌';
    } else {
      startSnow();
      toggleButton.textContent = '❄️';
    }
  });
});

function checkAnswer(choice, level, levelsArray) {
    if (choice === levelsArray[level].answer) {
        startEmojiRain(levelsArray[level].emojis);
        setTimeout(() => {
            stopEmojiRain();
            currentLevel++;
            if (currentLevel < levelsArray.length) {
                if (levelsArray === levels) {
                    loadLevel(currentLevel);
                    resetTimer(timerBar, 10);
                } else if (levelsArray === flagLevels) {
                    loadFlagLevel(currentLevel);
                    resetTimer(timerBarFlags, 10);
                } else if (levelsArray === movieLevels) {
                    loadMovieLevel(currentLevel);
                    resetTimer(timerBarMovies, 20);
                } else if (levelsArray === christmasLevels) {
                    loadChristmasLevel(currentLevel);
                    resetTimer(timerBar, 10);
                }
            } else {
                alert('Congratulations! You completed all levels.');
            }
        }, 2000);
    } else {
        gameOver(levelsArray, level);
    }
}

function checkFlagAnswer(choice, level) {
    if (choice === flagLevels[level].answer) {
        currentLevel++;
        if (currentLevel < flagLevels.length) {
            loadFlagLevel(currentLevel);
            resetTimer(timerBarFlags, 10);
        } else {
            alert('Congratulations! You completed all levels.');
        }
    } else {
        gameOver(flagLevels, level);
    }
}

function checkMovieAnswer() {
    const currentMovieLevel = movieLevels[currentLevel];
    if (movieAnswerInput.value.toLowerCase() === currentMovieLevel.answer.toLowerCase()) {
        startEmojiRain(currentMovieLevel.emojis);
        setTimeout(() => {
            stopEmojiRain();
            currentLevel++;
            if (currentLevel < movieLevels.length) {
                loadMovieLevel(currentLevel);
                resetTimer(timerBarMovies, 20);
            } else {
                alert('Congratulations! You completed all levels.');
            }
        }, 2000);
    } else {
        gameOver(movieLevels, currentLevel);
    }
}

function getRandomLevel(levelsArray) {
    return Math.floor(Math.random() * levelsArray.length);
}

function resetTimer(timerElement, initialTime) {
    clearInterval(countdown);
    timeLeft = initialTime;
    timerElement.style.transition = 'none';
    timerElement.style.width = '100%';
    timerElement.offsetWidth;
    timerElement.style.transition = `width ${initialTime}s linear`;
    timerElement.style.width = '0%';
    startTimer(timerElement, initialTime);
}

function startTimer(timerElement) {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            gameOver(timerElement === timerBar ? levels : timerElement === timerBarFlags ? flagLevels : movieLevels, currentLevel);
        } else {
            timeLeft--;
            timerElement.style.width = (timeLeft / initialTime) * 100 + '%';
        }
    }, 1000);
}

function gameOver(levelsArray, level) {
    let correctAnswer = levelsArray[level].answer;
    if (levelsArray === levels) {
        choicesContainer.style.display = 'none';
        gameOverMessage.innerHTML = `Game Over! The correct answer was: ${correctAnswer}`;
        gameOverElement.style.display = 'flex';
    } else if (levelsArray === flagLevels) {
        choicesContainerFlags.style.display = 'none';
        gameOverFlagsMessage.innerHTML = `Game Over! The correct answer was: ${correctAnswer}`;
        gameOverElementFlags.style.display = 'flex';
    } else if (levelsArray === movieLevels) {
        movieAnswerInput.style.display = 'none';
        submitMovieAnswerButton.style.display = 'none';
        gameOverMoviesMessage.innerHTML = `Game Over! The correct answer was: ${correctAnswer}`;
        gameOverElementMovies.style.display = 'flex';
    } else if (levelsArray === christmasLevels) {
        choicesContainer.style.display = 'none';
        gameOverMessage.innerHTML = `Game Over! The correct answer was: ${correctAnswer}`;
        gameOverElement.style.display = 'flex';
    }
}

function restartGame() {
    currentLevel = 0;
    usedLevels = [];
    loadLevel(currentLevel);
    resetTimer(timerBar, 10);
    choicesContainer.style.display = 'flex';
    gameOverElement.style.display = 'none';
}

function restartFlagGame() {
    currentLevel = 0;
    usedLevels = [];
    loadFlagLevel(currentLevel);
    resetTimer(timerBarFlags, 10);
    choicesContainerFlags.style.display = 'flex';
    gameOverElementFlags.style.display = 'none';
}

function restartMovieGame() {
    currentLevel = 0;
    usedLevels = [];
    loadMovieLevel(currentLevel);
    resetTimer(timerBarMovies, 20);
    movieAnswerInput.style.display = 'block';
    submitMovieAnswerButton.style.display = 'block';
    gameOverElementMovies.style.display = 'none';
}

function startEmojiRain(emojis) {
    const rainContainer = document.createElement('div');
    rainContainer.id = 'rain-container';
    document.body.appendChild(rainContainer);

    for (let i = 0; i < 20; i++) {
        const emojiElement = document.createElement('div');
        emojiElement.className = 'rain-emoji';
        emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.animationDuration = `${Math.random() * 2 + 3}s`;
        emojiElement.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(emojiElement);
    }
}

function stopEmojiRain() {
    const rainContainer = document.getElementById('rain-container');
    if (rainContainer) {
        document.body.removeChild(rainContainer);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function getRandomCountries(countries, count) {
    const shuffled = shuffle(countries.slice());
    return shuffled.slice(0, count);
}
