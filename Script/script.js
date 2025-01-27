// Attendre que la page soit prête (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio de Sara prêt !");
});
//Sélectionner les cartes de projet et les éléments de la modale
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = document.querySelector('.close-btn');
//Créer une liste de détails pour chaque projet.
    const projectDetails = {
        1: {
            title: 'Projet 1',
            description: 'Détails complets sur le projet 1.',
            link: '#'
        },
        2: {
            title: 'Projet 2',
            description: 'Détails complets sur le projet 2.',
            link: '#'
        },
        3: {
            title: 'Projet 3',
            description: 'Détails complets sur le projet 3.',
            link: '#'
        }
    };
// Menu hamburger dynamique (Activation et désactivation de l'affichage)
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("toggle");
});
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.innerHTML = body.classList.contains('dark-mode') 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});


// Animation des traits du hamburger
hamburger.addEventListener("click", () => {
    hamburger.querySelectorAll("span").forEach((span, index) => {
        if (index === 0) {
            span.style.transform = hamburger.classList.contains("toggle")
                ? "rotate(45deg) translateY(8px)"
                : "rotate(0)";
        } else if (index === 1) {
            span.style.opacity = hamburger.classList.contains("toggle") ? "0" : "1";
        } else if (index === 2) {
            span.style.transform = hamburger.classList.contains("toggle")
                ? "rotate(-45deg) translateY(-8px)"
                : "rotate(0)";
        }
    });
});


// Animation au défilement
document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about-content");
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        aboutSection.classList.add("visible");
    }
});
});

// Fonction qui se déclenche au clic sur "Envoyer"
document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Empêcher l'envoi du formulaire par défaut
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const nom = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Création de l'objet client
    const client = {
        nom: nom,
        email: email,
        message: message,
        presentation: function () {
            alert(
                "Bonjour "+this.nom +"\nNous avons bien reçu votre message : " +this.message+"\n\net nous allons bientot vous contacter sur votre adresse mail: "+ this.email);
        }
    };

    // Appel de la méthode "presentation"
    client.presentation();

    // Réinitialiser le formulaire après l'envoi
    document.getElementById("contactForm").reset();
});


// Animation du formulaire 
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut
    
    const confirmation = document.getElementById('confirmation');
    confirmation.hidden = false; // Affiche le message de confirmation
  
    setTimeout(() => {
      confirmation.hidden = true; // Cache le message après 3 secondes
      this.reset(); // Réinitialise le formulaire
    }, 3000); // Durée en millisecondes
  });
  


