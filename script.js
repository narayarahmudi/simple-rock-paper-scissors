let ask = true;
while ( ask ) {
// PLAYERS
    let players = prompt('Pilih salah satu: < Gunting / Batu / Kertas > ');
    players = players.toLowerCase()
    // COMPUTER
    let bot = Math.random();
    let botSelect = () => {
        if (bot < 0.3) {
            bot = 'Rock';        
        } else if (bot < 0.6) {
            bot = 'Paper';
        } else {
            bot = 'Scissors';
        }
        bot = bot.toLowerCase()
        console.log(bot) 
    }

    if (players) {
        botSelect();
    }

    let validAnswer = ['rock', 'paper', 'scissors']

    // RULES

    if (!validAnswer.includes(players)) {
        alert(`INVALLID INPUT, STUPID!!`)
    } else if (players == bot) {
        alert(`Draw results. you choosed ${players} and computer choosed ${bot}`)
    } else if (
        (players == 'rock' && bot == 'scissors') ||
        (players == 'paper' && bot == 'rock') ||
        (players == 'scissors' && bot == 'paper')
    ) {
        alert(`You win because you choosed ${players.toUpperCase()} and computer choosed ${bot.toUpperCase()} CONGRATS!!!`)
    } else {
        alert(`You lose, SKILL ISSUES, why choosed ${players} when the enemy choosed ${bot}`)
    }

    ask = confirm('PLAY AGAIN?')
}

const body = document.getElementsByTagName('body')[0]

if (!ask) {
    alert('Thanks for playing')
    let removeClass = document.getElementsByClassName('container')[0]
    removeClass.remove()

    let addedTitle = createElement('h1')
    addedTitle.a = 'REFRESH THE PAGE TO PLAY AGAIN'

    body.append(addedTitle)
}