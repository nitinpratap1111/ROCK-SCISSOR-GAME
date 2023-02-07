const choices = document.querySelectorAll(".choice")
//console.log(choices)
const restart = document.querySelector("#restart")
const result = document.querySelector("#result")
const score = document.querySelector("#score")
//console.log(restart)


let scoreboard = {
    player:0,
    computer:0
}


choices.forEach(choice => choice.addEventListener("click",playGame))



function playGame (e){
    restart.style.display="inline-block"
    const playerChoice= e.target.id
    const computerChoice= getComputerChoice()
    

    let winner = getWinner(playerChoice,computerChoice)
    showWinner(winner, computerChoice)

}

function getComputerChoice(){
    const randomnumber=Math.random()*100
    if(randomnumber<33){
        return 'rock'}
        else if(randomnumber>=33 && randomnumber<=66){
            return 'scissors'
        }
        else
        return 'paper'
    
}


function getWinner (p,c){
    if (p===c)
    return 'Draw'
    else if (p==='rock'){
        if (c==='paper'){
            return 'computer'
        }
        else 
        return 'player' 

    }
    else if (p==='paper'){
        if (c==='scissors')
        return 'computer'
        else 
        return 'player'
    }
    else if (p==='scissors'){
        if(c==='rock')
        return 'computer'
        else
        return 'player'}
    }

function showWinner(winner,computerChoice){
    if(winner==='player'){
        scoreboard.player++
        result.innerHTML=`
        <h1 class = "text-win">You win</h1>
        <i class=  'fas fa-hand-${computerChoice}fa=10x'
        `
    }
    if(winner==='computer'){
        scoreboard.computer++
        result.innerHTML=`
        <h1 class = "text-lose">You Lose</h1>
        <i class=  'fas fa-hand-${computerChoice}fa=10x'
        `
    }
    else {
        
        result.innerHTML=`
        <h1 class = "text-win">Its a Draw</h1>
        <i class=  'fas fa-hand-${computerChoice}fa=10x'
        `
    }
    score.innerHTML=`
    <p>Player : ${scoreboard.player}</p>
    <p>Computer : ${scoreboard.computer}</p>
    `
}
    


