const displayComputerChoice = document.querySelector('#computer-choice')
const displayUserChoice = document.querySelector('#user-choice')
const displayResult = document.querySelector('#result')
const displayChoice = document.querySelector('#choices')

const choices = ['🪨', '📄', '✂️']

const handleClick = (handle) => {
    const user = handle.target.innerHTML
    const computer = choices[Math.floor(Math.random() * choices.length)]
    getResult(user, computer)
}

choices.forEach(choice => {
    const button = document.createElement('button')
    for(i = 0; i < choices.length; i++){
        button.setAttribute('id', choice)
    }
    button.innerHTML = choice
    button.addEventListener('click', handleClick)
    displayChoice.appendChild(button)
})

const getResult = (userChoice, computerChoice) => {
    switch (userChoice + computerChoice) {
        case '✂️📄':
        case '🪨✂️':
        case '📄🪨':
            displayUserChoice.innerHTML = 'You chose: ' + userChoice
            displayComputerChoice.innerHTML = 'The computer chose: ' + computerChoice
            displayResult.innerHTML = 'You Win!!'
            break
        case '📄✂️':
        case '✂️🪨':
        case '🪨📄':
            displayUserChoice.innerHTML = 'You chose: ' + userChoice
            displayComputerChoice.innerHTML = 'The computer chose: ' + computerChoice
            displayResult.innerHTML = 'You Lose!!'
            break
        case '📄📄':
        case '✂️✂️':
        case '🪨🪨':
            displayUserChoice.innerHTML = 'You chose: ' + userChoice
            displayComputerChoice.innerHTML = 'The computer chose: ' + computerChoice
            displayResult.innerHTML = 'Its a Draw!!'
            break
    }
}