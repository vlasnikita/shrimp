let currentImg = 0;
const parallax = document.querySelector('.parallax');
const images = parallax.querySelectorAll('img');

export const interval = () => {
    let temp;
    images.forEach((img, i) => {
        if (i === currentImg + 1){
            img.className = 'parallax__visible';
            temp = currentImg + 1;
        }else{
            img.className = '';
        }
    });
    if(!temp){
        images[0].className = 'parallax__visible';
        currentImg = 0;
    } else {
        currentImg = temp;
    }
};
