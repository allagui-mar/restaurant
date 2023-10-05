 let compteur=0;
 let like=document.querySelectorAll('#like');
like.forEach(function(like,index){
    like.addEventListener('click',function () {
        this.classList.toggle('rouge');
       compteur=compteur+1
    });
});

let moinsButtons = document.querySelectorAll('#moins');
let plusButtons = document.querySelectorAll('#plus');
moinsButtons.forEach(function(moinsButton, index) {
    moinsButton.addEventListener('click', function() {
        let quantite = document.querySelectorAll('#quantite')[index];
        let valeur = Number(quantite.innerText);
        if (valeur > 0) {
            valeur--;
            quantite.innerText = String(valeur);
        }
    });
});
plusButtons.forEach(function(plusButton, index) {
    plusButton.addEventListener('click', function() {
        let quantite = document.querySelectorAll('#quantite')[index];
        let valeur = Number(quantite.innerText);
        valeur++;
        quantite.innerText = String(valeur);
    });
});

let supprimerButtons = document.querySelectorAll('#supprimer');
supprimerButtons.forEach(function(supprimerButton) {
    supprimerButton.addEventListener('click', function() {
        this.parentElement.remove();
    });
});

let ajouterButtons = document.querySelectorAll('#ajouter');
ajouterButtons.forEach(function(ajouterButton, index) {
    ajouterButton.addEventListener('click', function() {
        let nom = document.querySelectorAll('h4')[index].innerText;
        let prix = Number(document.querySelectorAll('#prix')[index].innerText);
        let quantite = Number(document.querySelectorAll('#quantite')[index].innerText);
        let total = prix * quantite;
        let panier = document.querySelector('#listeArticles');
        let nouvelArticle = document.createElement('div');
        nouvelArticle.innerHTML = `
            <h4>${nom}</h4>
            <p>Prix: <span>${prix}</span></p>
            <p>Quantite: <span>${quantite}</span></p>
            <p>Total: <span>${total}</span></p>
            <p> nombre de like: <span>${compteur}</span><p>
        `;
        panier.appendChild(nouvelArticle);
        let sommeTotalePanier = document.querySelector('#sommeTotalePanier');
        sommeTotalePanier.innerText = Number(sommeTotalePanier.innerText) + total;
        document.querySelector('#panier').style.display = 'block';
    });
});

let fermerButton = document.querySelector('#fermer');
fermerButton.addEventListener('click', function() {
    document.querySelector('#panier').style.display = 'none';
});
