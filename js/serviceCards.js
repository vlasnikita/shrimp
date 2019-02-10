const cards = document.querySelectorAll('.card');
const buttons = document.querySelectorAll('.card__show');

window.addEventListener('click', function(e){
    cards.forEach(card => {
        if(e.target.className === 'card__show' && card.contains(e.target)){
            card.className = 'card card_active';
        } else {
            card.className = 'card';
        }
    })
}, false);
