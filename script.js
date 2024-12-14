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

let currentLevel = 0;
let timeLeft = 10;
let countdown;
const timerBar = document.getElementById('timer-bar');
const timerBarMovies = document.getElementById('timer-bar-movies');
const levelElement = document.getElementById('level');
const levelElementMovies = document.getElementById('level-movies');
const emoji1 = document.getElementById('emoji1');
const emoji2 = document.getElementById('emoji2');
const emoji1Movies = document.getElementById('emoji1-movies');
const emoji2Movies = document.getElementById('emoji2-movies');
const choicesContainer = document.getElementById('choices');
const movieAnswerInput = document.getElementById('movie-answer-input');
const submitMovieAnswerButton = document.getElementById('submit-movie-answer');
const choicesContainerMovies = document.getElementById('choices-movies');
const gameOverElement = document.getElementById('game-over');
const gameOverElementMovies = document.getElementById('game-over-movies');
const restartButton = document.getElementById('restart-button');
const restartButtonMovies = document.getElementById('restart-button-movies');
const mainMenu = document.getElementById('main-menu');
const gameContainer = document.getElementById('game-container');
const instructions = document.getElementById('instructions');
const moviesContainer = document.getElementById('movies-container');
const startButton = document.getElementById('start-button');
const instructionsButton = document.getElementById('instructions-button');
const moviesButton = document.getElementById('movies-button');
const backButton = document.getElementById('back-button');
const backButtonGame = document.getElementById('back-button-game');
const backButtonMovies = document.getElementById('back-button-movies');
let usedLevels = [];

startButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gameContainer.style.display = 'flex';
    loadLevel(currentLevel);
    resetTimer(timerBar, 10); // Set initial time for main game
});

instructionsButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    instructions.style.display = 'flex';
});

moviesButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    moviesContainer.style.display = 'flex';
    loadMovieLevel(currentLevel);
    resetTimer(timerBarMovies, 20); // Set initial time for movie game
});

backButton.addEventListener('click', () => {
    instructions.style.display = 'none';
    mainMenu.style.display = 'flex';
});

backButtonGame.addEventListener('click', () => {
    gameContainer.style.display = 'none';
    mainMenu.style.display = 'flex';
});

backButtonMovies.addEventListener('click', () => {
    moviesContainer.style.display = 'none';
    mainMenu.style.display = 'flex';
});

restartButton.addEventListener('click', restartGame);
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

function checkAnswer(choice, level, levelsArray) {
    if (choice === levelsArray[level].answer) {
        startEmojiRain(levelsArray[level].emojis);
        setTimeout(() => {
            stopEmojiRain();
            currentLevel++;
            if (currentLevel < levelsArray.length) {
                if (levelsArray === levels) {
                    loadLevel(currentLevel);
                    resetTimer(timerBar, 10); // Reset time for main game
                } else {
                    loadMovieLevel(currentLevel);
                    resetTimer(timerBarMovies, 20); // Reset time for movie game
                }
            } else {
                alert('Congratulations! You completed all levels.');
            }
        }, 2000); // Delay to show the emoji rain
    } else {
        gameOver(levelsArray);
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
                resetTimer(timerBarMovies, 20); // Reset time for movie game
            } else {
                alert('Congratulations! You completed all levels.');
            }
        }, 2000); // Delay to show the emoji rain
    } else {
        gameOver(movieLevels);
    }
}

function getRandomLevel(levelsArray) {
    return Math.floor(Math.random() * levelsArray.length);
}

function resetTimer(timerElement, initialTime) {
    clearInterval(countdown);
    timeLeft = initialTime;
    timerElement.style.transition = 'none'; // Disable transition
    timerElement.style.width = '100%'; // Set width to 100%
    timerElement.offsetWidth; // Trigger reflow
    timerElement.style.transition = `width ${initialTime}s linear`; // Re-enable transition with correct duration
    timerElement.style.width = '0%'; // Start the timer
    startTimer(timerElement);
}

function startTimer(timerElement) {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            gameOver(timerElement === timerBar ? levels : movieLevels);
        } else {
            timeLeft--;
            timerElement.style.width = (timeLeft / initialTime) * 100 + '%';
        }
    }, 1000);
}

function gameOver(levelsArray) {
    if (levelsArray === levels) {
        choicesContainer.style.display = 'none';
        gameOverElement.style.display = 'flex';
    } else {
        movieAnswerInput.style.display = 'none';
        submitMovieAnswerButton.style.display = 'none';
        gameOverElementMovies.style.display = 'flex';
    }
}

function restartGame() {
    currentLevel = 0; // Restart from the first level
    usedLevels = []; // Reset used levels
    loadLevel(currentLevel);
    resetTimer(timerBar, 10); // Reset time for main game
    choicesContainer.style.display = 'flex';
    gameOverElement.style.display = 'none';
}

function restartMovieGame() {
    currentLevel = 0; // Restart from the first level
    usedLevels = []; // Reset used levels
    loadMovieLevel(currentLevel);
    resetTimer(timerBarMovies, 20); // Reset time for movie game
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
