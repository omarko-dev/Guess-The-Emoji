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
                } else {
                    loadMovieLevel(currentLevel);
                    resetTimer(timerBarMovies, 20);
                }
            } else {
                alert('Congratulations! You completed all levels.');
            }
        }, 2000);
    } else {
        gameOver(levelsArray);
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
        gameOver(flagLevels);
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
        gameOver(movieLevels);
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
    startTimer(timerElement);
}

function startTimer(timerElement) {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            gameOver(timerElement === timerBar ? levels : timerElement === timerBarFlags ? flagLevels : movieLevels);
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
    } else if (levelsArray === flagLevels) {
        choicesContainerFlags.style.display = 'none';
        gameOverElementFlags.style.display = 'flex';
    } else {
        movieAnswerInput.style.display = 'none';
        submitMovieAnswerButton.style.display = 'none';
        gameOverElementMovies.style.display = 'flex';
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
