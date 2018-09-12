const briefs = document.querySelectorAll('.service__brief');
window.addEventListener('click', function(e){
    briefs.forEach(brief => {
        if(brief === e.target || brief.contains(e.target)){
            brief.className = 'service__brief service__brief--active';
        } else {
            brief.className = 'service__brief';
        }
    })
}, false);
