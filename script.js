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

let currentLevel = 0;
let timeLeft = 10;
const timerBar = document.getElementById('timer-bar');
const levelElement = document.getElementById('level');
const emoji1 = document.getElementById('emoji1');
const emoji2 = document.getElementById('emoji2');
const choicesContainer = document.getElementById('choices');
const gameOverElement = document.getElementById('game-over');
const restartButton = document.getElementById('restart-button');
const mainMenu = document.getElementById('main-menu');
const gameContainer = document.getElementById('game-container');
const instructions = document.getElementById('instructions');
const startButton = document.getElementById('start-button');
const instructionsButton = document.getElementById('instructions-button');
const backButton = document.getElementById('back-button');
let usedLevels = [];
let countdown;

startButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gameContainer.style.display = 'flex';
    loadLevel(currentLevel);
    startTimer();
});

instructionsButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    instructions.style.display = 'flex';
});

backButton.addEventListener('click', () => {
    instructions.style.display = 'none';
    mainMenu.style.display = 'flex';
});

function loadLevel(level) {
    let randomLevel;
    do {
        randomLevel = getRandomLevel();
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
        button.addEventListener('click', () => checkAnswer(choice, randomLevel));
        choicesContainer.appendChild(button);
    });
}

function checkAnswer(choice, level) {
    if (choice === levels[level].answer) {
        startEmojiRain(levels[level].emojis);
        setTimeout(() => {
            stopEmojiRain();
            currentLevel++;
            if (currentLevel < levels.length) {
                loadLevel(currentLevel);
                resetTimer();
            } else {
                alert('Congratulations! You completed all levels.');
            }
        }, 2000);
    } else {
        gameOver();
    }
}

function getRandomLevel() {
    return Math.floor(Math.random() * levels.length);
}

function resetTimer() {
    clearInterval(countdown);
    timeLeft = 10;
    timerBar.style.width = '100%';
    startTimer();
}

function startTimer() {
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            gameOver();
        } else {
            timeLeft--;
            timerBar.style.width = (timeLeft * 10) + '%';
        }
    }, 1000);
}

function gameOver() {
    choicesContainer.style.display = 'none';
    gameOverElement.style.display = 'flex';
}

function restartGame() {
    currentLevel = 0;
    usedLevels = [];
    loadLevel(currentLevel);
    resetTimer();
    choicesContainer.style.display = 'flex';
    gameOverElement.style.display = 'none';
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

restartButton.addEventListener('click', restartGame);