const LikeButtons = document.querySelectorAll(".card_btn");

LikeButtons.forEach((LikeButton) => {
    LikeButton.addEventListener("click", () =>{
        LikeButton.classList.toggle("card_btn--like");
    });
});