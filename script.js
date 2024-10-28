const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active"); // Ajouter la classe active au menu hamburger
});



document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value;
    const email = document.getElementById('emaill').value; // Utilisation de 'emaill' pour le champ email
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Affichage de l'alerte
    alert(`Merci ${name}, votre réservation a été soumise avec succès pour le ${date}. Nous vous contacterons bientôt à ${email}.`);

    // Affichage du message de confirmation dans la page
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block'; // Rendre le message visible
    confirmationMessage.innerHTML = `<div class="alert alert-success">Merci ${name}, votre réservation a été soumise avec succès pour le ${date}. Nous vous contacterons bientôt à ${email}.</div>`;

    // Ferme la modale après soumission
    $('#reservationModal').modal('hide');

    // Réinitialise le formulaire
    this.reset();
});


// email
// Sélectionner la section d'informations et le bouton de basculement
const infoSection = document.querySelector("#info-section");
const toggleButton = document.querySelector("#toggle-info");

// Écouter le clic sur le bouton pour afficher ou masquer la section
toggleButton.addEventListener("click", () => {
    if (infoSection.style.display === "none" || infoSection.style.display === "") {
        infoSection.style.display = "block";
    } else {
        infoSection.style.display = "none";
    }
});

   
   
    const navbar = document.querySelector('.navbar');

    // Écoute l'événement de défilement de la page
    window.addEventListener('scroll', () => {
        // Si la page est défilée de 50 pixels ou plus
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled'); // Ajoute la classe "scrolled"
        } else {
            navbar.classList.remove('scrolled'); // Supprime la classe "scrolled"
        }
    });

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Ajustez cette valeur si nécessaire
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});







