let bouton = document.getElementById('bouton');
let bloc = document.getElementById('bloc');

let list = function (sonNom, sonGenre) {
    this.nom = sonNom;
    this.genre = sonGenre;

    this.getNomGenre = function () {
        let play = document.createElement('div');
        play.className = "play";
        play.innerText = "Nom: " + this.nom + ", Genre: " + this.genre;
        bloc.append(play);
    }
}


bouton.addEventListener('click', function () {
    let nom = document.getElementById('nom').value;
    let genre = document.getElementById('genre').value;
    let nouveau = new list(nom, genre);
    nouveau.getNomGenre();

    let story = document.createElement('div');
    bloc.append(story);

    let form = document.createElement('form');
    let div1 = document.createElement('div');
    div1.className = "tableau";

    let label1 = document.createElement('label');
    label1.for = "titre";
    label1.innerText = "Entrer le nom de la musique:";
    div1.append(label1);

    let input1 = document.createElement('input');
    input1.type = "text";
    input1.name = "titre";
    input1.id = "titre";
    div1.append(input1);
    form.append(div1);

    let div2 = document.createElement('div');
    div2.className = "tableau";

    let label2 = document.createElement('label');
    label2.for = "artiste";
    label2.innerText = "Entrer le nom l'artiste:";
    div2.append(label2);

    let input2 = document.createElement('input');
    input2.type = "text";
    input2.name = "artiste";
    input2.id = "artiste";
    div2.append(input2);
    form.append(div2);

    let div3 = document.createElement('div');
    div3.className = "tableau";

    let label3 = document.createElement('label');
    label3.for = "lien";
    label3.innerText = "Entrer le lien youtube:";
    div3.append(label3);

    let input3 = document.createElement('input');
    input3.type = "text";
    input3.name = "lien";
    input3.id = "lien";
    div3.append(input3);
    form.append(div3);

    let bouton2 = document.createElement('div');
    bouton2.innerText = "Ajouté un titre musical";
    bouton2.id = "bouton2";
    bouton2.className = "boutStyle";
    form.append(bouton2);
    bloc.append(form);

    bouton2.addEventListener('click', function () {
        let site = document.createElement('a');
        site.href = input3.value;
        site.alt = "Titre de musique";
        site.innerText = "lien du titre";
        let para = document.createElement('div');
        para.innerHTML = "Titre: " + input1.value + ", artiste: " + input2.value + ", lien youtube: ";
        para.className = "story";
        para.append(site);
        story.append(para);
    })
})

