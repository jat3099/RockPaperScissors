const userCho = userInput => {
  userInput = userInput.toLowerCase();
  if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
  }else{
    console.log('ERROR');
  }
}

const compCho = () => {
  const rn = Math.floor(Math.random() * 3);
  switch(rn){
    case 0:
    return 'rock';
    break;
    
    case 1:
    return 'paper';
    break;

    case 2:
    return 'scissors';
    break;
  }
}

const determineWinner = ( userCho,compCho) => {

  if( userCho === compCho ){
    return 'It/s a tie';
  }
  if(userCho ==='rock'){
    if(compCho ==='paper'){
      return 'computer Won!';
    }else {
      return 'user Wins!';
    }
  }

  if(userCho ==='paper'){
    if(compCho ==='scissors' ){
      return 'Sorry computer wins!';
    }else {
      return 'congrats! you win!';
    }
  }

  if(userCho ==='scissors'){
    if( compCho ==='rock'){
      return 'Sowwy! Computer wins!';
    }else {
      return 'Congrats you Win!';
    }
  }
}

const playgame = () => {
   let user = userCho('paper');
  let comp= compCho();
  console.log('you dealt: ' + user);
  console.log('the computer dealt: ' + comp);

  console.log(determineWinner(user,comp));
}

playgame();

