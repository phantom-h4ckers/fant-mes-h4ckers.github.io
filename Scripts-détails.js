// script-details.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupérer l'ID du livre depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id')); // Convertir l'ID en nombre entier

    // 2. Récupérer le conteneur où les détails seront affichés
    const bookDetailsContainer = document.getElementById('book-details-container');

    // 3. Rechercher le livre correspondant dans notre tableau 'livres' (de data.js)
    const livre = livres.find(l => l.id === bookId);

    if (livre) {
        // 4. Si le livre est trouvé, construire le contenu HTML détaillé
        bookDetailsContainer.innerHTML = `
            <div class="detail-content">
                <img src="${livre.image}" alt="Couverture de ${livre.titre}">
                <div>
                    <h2>${livre.titre}</h2>
                    <p><strong>Auteur :</strong> ${livre.auteur}</p>
                    <p><strong>Prix :</strong> ${livre.prix}</p>
                    <p><strong>Description :</strong></p>
                    <p>${livre.description}</p>
                    <a href="paiement.html?id=${livre.id}" class="button primary">Acheter ce livre</a>
                    <a href="livres.html" class="button">Retour à la liste</a>
                </div>
            </div>
        `;
        // Mettre à jour le titre de la page
        document.title = `${livre.titre} - Ma Librairie`;
    } else {
        // 5. Si le livre n'est pas trouvé (ID invalide ou non existant)
        bookDetailsContainer.innerHTML = `
            <div class="detail-content" style="text-align: center;">
                <h2>Livre non trouvé</h2>
                <p>Désolé, le livre que vous recherchez n'a pas été trouvé.</p>
                <a href="livres.html" class="button">Retour à la liste des livres</a>
            </div>
        `;
        document.title = `Livre introuvable - Ma Librairie`;
    }
});