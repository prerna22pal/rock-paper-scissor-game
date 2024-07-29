let userScore=0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice=()=>{
  const options =["rocks","paper","scissor"];
  const randIdx=Math.floor(Math.random()*3);
  return options[randIdx];
};

const DrawGame=()=>{
  msg.innerText = "GAME WAS DRAW!";
  msg.style.backgroundColor="yellow";
};

const showWinner=(userWin)=>{
  if(userWin){
    userScore++;
    userScorepara.innerText= userScore;
    msg.innerText = "CONGRATS...YOU WIN!";
    msg.style.backgroundColor="#65B741";
    
  }else{
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText = "OH NO...YOU LOSE!";
    msg.style.backgroundColor="red";
  }
};

const playGame = (userChoice)=>{
  console.log("user choice = ",userChoice);
  //generate computers choice
  const compChoice= genCompChoice();
  console.log("comp choice = ",compChoice);


  if(userChoice===compChoice){
    //draw game
    DrawGame();
  }else{
    let userWin =true;
    if(userChoice === "rock"){
      // then comp.choice probably was paper or scissor
      userWin = compChoice==="paper" ? false : true;
    }else if(userChoice === "paper"){
      // rock,scissor
      userWin = compChoice === "scissor" ? false : true;
    }else (userChoice=== "scissor")
      //paper n rock 
      userWin=compChoice === "paper"?true : false;
    
    showWinner(userWin);
  }

};

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice =choice.getAttribute("id");
    console.log("choice was clicked",userChoice);
    playGame(userChoice);
  });
});