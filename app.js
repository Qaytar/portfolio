const question = document.querySelector('.question');
const questionBtns = document.querySelectorAll('div.question > button');
const answerText = document.querySelector('#answerText');
const answerBtn = document.querySelector('#answerBtn');
const answer = document.querySelector('.answer')
const projects = document.querySelectorAll('.project');

//eventlistener for 'good' button. Sets 'good answer' into answerHtml
questionBtns[0].addEventListener('click', () => {
    answerHtml = 'nice!';
})
//eventlistener for 'meh' button. Sets 'meh answer' into answerHtml
questionBtns[1].addEventListener('click', () => {
    answerHtml = "it's ok :), it happens..";
})

//now a single eventlistener for both buttons using the answer variable
//Careful! the number of ms of the setTimeout have to match with the CSS transition of the class .question
for (element of questionBtns) {
    element.addEventListener('click', () => {
        //Fades Out question by setting opacity: 0
        question.classList.remove('show')

        //wait for the fadeOut transition to finish 
        setTimeout(() => {
            //Removes the elements of the question to make room for the answer
            question.remove();

            //Adds text to the answer according to the button clicked ('good' or 'meh')
            answerText.innerHTML = answerHtml;

            //Fades In answer by setting opacity: 1
            answer.classList.add('show')
        }, 300);
    });
}

//eventlistener for answerBtn displaying portfolio
answerBtn.addEventListener('click', () => {
    //Fades Out answer by setting opacity: 0
    answer.classList.remove('show')

    //wait for the fadeOut transition to finish 
    setTimeout(() => {
        //Removes the elements of the answer to make room for portfolio
        answer.remove()

        //Fades In every project of portfolio by setting opacity: 1
        for (project of projects) {
            project.classList.add('show')
        }
    }, 1500);
});


