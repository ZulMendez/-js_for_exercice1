// - # Exo 1 Boucle FOR
//   ## Avec une boucle for affichez le nombre de tours de la boucle entre 0 et 20
//   ## Affichez les chiffres et dites si c'est un nombre paire ou impaire
for (let i = 0; i <= 20; i++) {
    console.log(i);
    switch (i % 2 == 0) {
        case true:
            console.log(`${i} est un nombre pair`);
            break;
        case false:
            console.log(`${i} est un nombre impair`);
            break;
    }
}
// - # Exo 2 Boucles FOR
//   ## - Creer une varaible de type array et inserez toutes les personnes de la classe
//   ## - A l'aide d'une boucle for, dites `bonjour + prenom` à chaque personne du tableau
let tab = ['abdellah', 'achraf', 'adame', 'alex', 'ayoub', 'louise', 'malo', 'max', 'maxence', 'natchez', 'saliou', 'seb', 'zakaria', 'jamila', 'mohamed', 'bene', 'zulma', 'david', 'ayhan']

for (let i = 0; i < tab.length; i++) {
    console.log(`Bonjour ${tab[i]}`);
}

// - # Exo 3 Boucles FOR 
//   ## - Dans un prompt inserés un nombre
//   ## - A l'aide d'une boucle for, affichez les nombres de 0 jusqu'au nombre que vous avez choisi.

let nomb = parseInt(prompt('entrez un nombre'));

if (isNaN(nomb)) {
    for (let i = 0; i <= nomb; i++) {
        console.log(i);
    }
} else {
    console.log(`c'est pas un nombre`);
}