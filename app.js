// import functions and grab DOM elements
const currentPollEl = document.getElementById('current-poll-container');
const newPollEl = document.getElementById('new-poll');
const optionAAddButton = document.getElementById('option-a-add-button');
const optionASubtractButton = document.getElementById('option-a-subtract-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionBSubtractButton = document.getElementById('option-b-subtract-button');
const finishPollButton = document.getElementById('finish-poll-button');
const pastPollsContainer = document.getElementById('past-poll-container');



// let state
  let question = '';
  let option1Votes = 0;
  let option2Votes = 0;
  let option1Title = '';
  let option2Title = '';
  let pastPolls = [];
// set event listeners 
newPollEl.addEventListener('submit', (e) =>  {
  e.preventDefault();
  const data = new FormData(newPollEl);
  const userQuestion = data.get('question');
  const userOptionA = data.get('option-A');
  const userOptionB = data.get('option-B');
  
  question = userQuestion;
  optionA = userOptionA;
  optionB = userOptionB;
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
