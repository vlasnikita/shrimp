const answers = document.querySelectorAll('.answer')

function toggleAnswer(e){
    console.log(e.target)
    for(let i=0; i<answers.length; i++){
        if(answers[i] === e.target || answers[i].contains(e.target)){
            if(answers[i].className.includes('active')){
                console.log('includes')
                answers[i].className = 'answer'
            } else {
                console.log('not includes')
                answers[i].className = 'answer active'
            }
        } else {
            console.log('not clicked')
            answers[i].className = 'answer'
        }
    }
}

for(let j=0; j<answers.length; j++){
    answers[j].addEventListener('click', toggleAnswer)
}