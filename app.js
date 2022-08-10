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
let optionAVotes = 0;
let optionBVotes = 0;
let optionA = '';
let optionB = '';
let pastPolls = [];
// set event listeners 
newPollEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(newPollEl);
    const userQuestion = data.get('question');
    const userOptionA = data.get('option-A');
    const userOptionB = data.get('option-B');
    question = userQuestion;
    optionA = userOptionA;
    optionB = userOptionB;
    
    renderPoll();
    displayCurrentPoll();
});

optionAAddButton.addEventListener('click', () => {
    optionAVotes++;
    displayCurrentPoll();
});
 
optionBAddButton.addEventListener('click', () => {
    optionBVotes++;
    displayCurrentPoll();
});

optionASubtractButton.addEventListener('click', () => {
    optionAVotes--;
    displayCurrentPoll();
});

optionBSubtractButton.addEventListener('click', () => {
    optionBVotes--;
    displayCurrentPoll();
});

finishPollButton.addEventListener('click', () => {
    pastPollsContainer.textContent = '';
    displayPastPolls();
    optionAVotes = 0;
    optionBVotes = 0;
    currentPollEl.textContent = '';

}
);

function renderPoll(question, optionA, optionB, optionAVotes, optionBVotes) {
    const currentPollEl = document.createElement('div');
    const questionEl = document.createElement('p');
    const userOptionA = document.createElement('p');
    const userOptionB = document.createElement('p');
    const votesAEl = document.createElement('p');
    const votesBEl = document.createElement('p');
    questionEl.textContent = question;
    userOptionA.textContent = optionA;
    userOptionB.textContent = optionB;
    votesAEl.textContent = optionAVotes;
    votesBEl.textContent = optionBVotes;

    currentPollEl.append(questionEl, userOptionA, userOptionB, votesAEl, votesBEl);
    return currentPollEl;

}

function displayCurrentPoll() {
    newPollEl.reset();
    currentPollEl.textContent = '';
    const currentPollData = renderPoll(question, optionA, optionB, optionAVotes, optionBVotes);
    currentPollEl.append(currentPollData);
}

function displayPastPolls() {
    const pastPoll = {
        question: question, 
        optionA: optionA,
        optionB: optionB,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes

    };
    pastPolls.push(pastPoll);

    for (let poll of pastPolls) {
        const currentPastPoll = renderPoll(poll.question, poll.optionA, poll.optionB, poll.optionAVotes, poll.optionBVotes);
        pastPollsContainer.append(currentPastPoll);
    }

}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
//pull request