const rps = (p1, p2) => {
  if ('rock', 'scissors'){
    return "Rock wins!"
  } else if ('rock', 'paper'){
    return "Paper wins!"
  } else if ('paper', 'scissors'){
    return "Scissors wins!"
  } else {
    return "Draw!"
  }
};

rps('rock', 'scissors');