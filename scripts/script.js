// JavaScript Document
// Zorgt ervoor dat de class veranderd wordt van de like button en die triggerd meteen ook een animatie
var buttonLikeGroot = document.querySelectorAll('.like-button-groot')

for (i = 0; i < buttonLikeGroot.length; i++) {
        buttonLikeGroot[i].addEventListener("click", grootLiken)
      }

function grootLiken(e) {
        e.target.classList.toggle('grootGeliked')
}

var buttonLikeKlein = document.querySelectorAll('.like-button-klein')

for (i = 0; i < buttonLikeKlein.length; i++) {
        buttonLikeKlein[i].addEventListener("click", kleinLiken)
      }

function kleinLiken(e) {
        e.target.classList.toggle('kleinGeliked')
}