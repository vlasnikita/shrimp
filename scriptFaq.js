function expandAnswer(e){
    console.log(e.target.parentNode.parentNode)
    const answers = document.querySelectorAll('.answer')
    for(let i=0; i<answers.length; i++){
        if(answers[i].contains(e.target)){
            answers[i].className = 'answer active'
        } else {
            answers[i].className = 'answer'
        }
    }
}

const answerWrappers = document.querySelectorAll('.answer__arrowWrapper')

for(let j=0; j<answerWrappers.length; j++){
    answerWrappers[j].addEventListener('click', expandAnswer)
}