const kabir = document.querySelector('.kabir');
const saniya = document.querySelector('.saniya');

kabir.addEventListener('mouseover', () => {
    kabir.style.transform = 'scale(1.1)';
});

kabir.addEventListener('mouseout', () => {
    kabir.style.transform = 'scale(1)';
});

saniya.addEventListener('mouseover', () => {
    saniya.style.transform = 'scale(1.1)';
});

saniya.addEventListener('mouseout', () => {
    saniya.style.transform = 'scale(1)';
});