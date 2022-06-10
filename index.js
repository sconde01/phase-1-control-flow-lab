function scuberGreetingForFeet(someNumber){
  let result
  if(someNumber < 400) {
    result = 'This one is on me!'
  }
  else if(someNumber > 2000 && someNumber <= 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else if(someNumber >= 2500){
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(someCity){
  return someCity === 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tipAmount){
  switch(tipAmount){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.'
  }
}