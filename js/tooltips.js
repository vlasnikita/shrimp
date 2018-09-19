import tippy from 'tippy.js'

for (let i = 1; i <= 6; i++){
    tippy('#ss' + i, {
        allowTitleHTML: true,
        delay: [80, 30],
        arrow: true,
        arrowType: 'round',
        size: 'large',
        duration: [500, 150],
        inertia: true,
        animation: 'scale',
        placement: 'right'
    })
}

for (let i = 7; i <= 9; i++){
    tippy('#ss' + i, {
        allowTitleHTML: true,
        delay: [80, 30],
        arrow: true,
        arrowType: 'round',
        size: 'large',
        duration: [500, 150],
        inertia: true,
        animation: 'scale',
        placement: 'left'
    })
}
