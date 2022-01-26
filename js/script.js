const api = "https://api.airtable.com/v0/appQPw7ookVvJ3hEb/Books?&api_key=keyjc1nnVReGqYJCF";
// const apiAuthor = "https://api.airtable.com/v0/appQPw7ookVvJ3hEb/Authors?&api_key=keyjc1nnVReGqYJCF";

//On définit un tableau qui contiendra tous les élements retournés par l'api
var records = [];

fetch(api)
    .then((res) => res.json())
    .then((data) => {
        //On boucle sur les datas
        data.records.map((data, i) => {
            //On créé un "objet" record avec chaque propriété
            const record = {
                "titre": data.fields.Titre,
                "url": data.fields.Cover[0].url,
                "message": "Titre: " + data.fields.Titre + "\n" + "Catégories: " + data.fields.Topic + "\n",
                "id": data.fields.Cover[0].id
            };

            //On ajoute chaque record dans le tableau (avec son id pour l'utilisation de la modale plus tard)
            records[record.id] = record;

            //On passe l'objet complet en argument de la fonction
            writeData(record);
        })
    });

//On récupère l'objet record
const writeData = (record) => {
    //On créé un article dans lequel on inscrit le message du record
    const newContent = document.createElement("article");
    newContent.innerText = record.message;

    //On ajoute la classe idCover à l'art
    newContent.className = "idCover"; 
    //On garde en "mémoire" l'id dans un data-id pour savoir sur quelle carte on a cliquéicle
    newContent.dataset.id = record.id; 

    //On créé un élément img
    var elem = document.createElement('img');
    //Dans lequel on ajoute l'attribut src qui correspond à l'url de l'image
    elem.setAttribute('src', record.url);
    //puis on l'ajoute dans l'article "newContent"
    document.body.appendChild(newContent).appendChild(elem);
};

//Au clic sur l'élément qui a la classe idCover
$(document).on('click', '.idCover', function(e) {
        //On va rechercher l'objet correspondant dans le tableau records, en se servant du data-id de l'élement sur lequel on a cliqué
        var record = records[$(this).data('id')];
        //On créé un élément img qui contient l'url de l'image 
        var elem = document.createElement('img');
        elem.setAttribute('src', record.url);

        //On ajoute le titre et l'image dans la modale
        $('#modal .titleModalText').text(record.titre);
        $('#modal .conentImg').html(elem);

        //On ouvre la modale
        openModal(document.getElementById('modal'));
    });


//Au clic sur la croix, on ferme la modale
$(document).on('click', '#modal .close', function(e) {
    closeModal(document.getElementById('modal'));
});