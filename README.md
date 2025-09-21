# 🎮 Simple Rock Paper Scissors

**A lightweight Rock Paper Scissors game built with pure JavaScript.**  
Play directly in your browser using simple prompts & alerts. The computer chooses at random, and you compete to win, draw, or lose. Replay instantly, or exit anytime — minimal, fun, and ready to try! 🚀

---

## 🧠 Table of Contents

- [🎯 Features](#-features)  
- [📁 Structure](#-structure)  
- [🛠️ How to Run](#️-how-to-run)  
- [🔍 Core Logic](#-core-logic)  
- [🚀 Future Enhancements](#-future-enhancements)  
- [📄 License](#-license)

---

## 🎯 Features

| ✔️ | Detail |
|----|--------|
| **No frameworks** | Pure vanilla JavaScript, HTML, CSS (optional). |
| **Instant play** | Just open the HTML, no setup or server required. |
| **Random AI** | Computer picks Rock / Paper / Scissors at random. |
| **Simple user flow** | Prompt → result → replay or exit. |
| **Clean exit** | On exit, the game container is removed; prompt to refresh page. |

---

## 📁 Structure

simple-rock-paper-scissors/
├── index.html      # HTML file to run in browser
├── script.js       # Main JavaScript game logic
└── README.md       # Documentation

## 🛠️ How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/narayarahmudi/simple-rock-paper-scissors.git
   cd simple-rock-paper-scissors
## 📜 Core Code Snippet
```js
// game loop
let ask = true;
while (ask) {
    let player = prompt('Choose: Rock / Paper / Scissors').toLowerCase();
    let bot = Math.random();
    if (bot < 0.3) bot = 'rock';
    else if (bot < 0.6) bot = 'paper';
    else bot = 'scissors';

    const valid = ['rock', 'paper', 'scissors'];
    if (!valid.includes(player)) {
        alert('Invalid input!');
    } else if (player === bot) {
        alert(`Draw (${player} vs ${bot})`);
    } else if (
        (player === 'rock' && bot === 'scissors') ||
        (player === 'paper' && bot === 'rock') ||
        (player === 'scissors' && bot === 'paper')
    ) {
        alert(`You WIN! 🎉 (${player} vs ${bot})`);
    } else {
        alert(`You LOSE 💀 (${player} vs ${bot})`);
    }
    ask = confirm('Play again?');
}

```
## 📄 License
Made by [narayarahmudi](https://github.com/narayarahmudi)


