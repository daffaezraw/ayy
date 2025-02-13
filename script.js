document.getElementById('heartButton').addEventListener('click', function() {
    const heartsContainer = document.querySelector('.hearts');
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('span');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
