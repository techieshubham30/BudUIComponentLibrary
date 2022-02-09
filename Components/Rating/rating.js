const ratingStars = document.querySelectorAll('.rating-icon');

ratingStars.forEach((star, index) => {
    star.addEventListener("click", () => {

        ratingStars.forEach(elem => elem.classList.remove('active-rating'))
        
        for (let i = 0; i <= index; i++) {
            ratingStars[i].classList.add('active-rating');
        }

    })
})