import ScrollReveal from 'scrollreveal';

document.querySelectorAll('.principe').forEach((principe, i) => {
    ScrollReveal({reset: true}).reveal(principe, {
        delay: i * 250,
        duration: 750,
        distance: '50px',
        origin: 'left'
    });
});

document.querySelectorAll('.title__main').forEach((title) => {
    title.querySelectorAll('span').forEach((letter, i) => {
        ScrollReveal({reset: true}).reveal(letter, {
            delay: (i + 1) * 20,
            duration: 750,
            distance: '10px',
            origin: 'left'
        });
    })
});
