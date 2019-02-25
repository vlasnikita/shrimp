const answers = document.querySelectorAll('.answer')

function toggleAnswer(e){
    for(let i=0; i<answers.length; i++){
        if(answers[i] === e.target || answers[i].contains(e.target)){
            if(answers[i].className.includes('active')){
                answers[i].className = 'answer'
            } else {
                answers[i].className = 'answer active'
            }
        } else {
            answers[i].className = 'answer'
        }
    }
}

for(let j=0; j<answers.length; j++){
    answers[j].addEventListener('click', toggleAnswer)
}