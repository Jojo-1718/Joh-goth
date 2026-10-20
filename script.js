console.log("Salut, mon premier javascript!");
let prenom = "Johgoth";
let age = 21;
console.log(prenom);
console.log(age);
let ville = "Amparafaravola";
console.log(ville);
if (ville === "Amparafaravola") {
    console.log("Bienvenue chez toi");
}
console.log("yo c'est moi " + prenom + ", j'ai " + age + " ans et j'habite à " + ville + ".");
if (age >= 18) {
    console.log("Je suis majeur");
} else {
    console.log("Je suis mineur");
}
let note =17;
if (note >= 10) {
    console.log("Reussi");
} else {
    console.log("Rate");
}

let prix =10;
if (prix <=10) {
    console.log("pas cher");
} else {
    console.log("cher");
}

let boutonMode = document.getElementById("mode");

boutonMode.addEventListener("click", function () {
  document.body.classList.toggle("clair");
});