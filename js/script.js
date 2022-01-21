const api = "https://api.airtable.com/v0/appQPw7ookVvJ3hEb/Books?&api_key=keyjc1nnVReGqYJCF";
const apiAuthor = "https://api.airtable.com/v0/appQPw7ookVvJ3hEb/Authors?&api_key=keyjc1nnVReGqYJCF";

fetch(api)
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        printData(data.records);
    });

const printData = (data) => {
    data.map((data, i) => {
        const url = data.fields.Cover[0].url;
        const titre = data.fields.Titre;
        const id = data.fields.id;
        const message =
            "Titre: " +
            titre + "\n" +
            "Catégories: " +
            data.fields.Topic + "\n"

        writeData(message, url, titre, id);
        console.log(id)
    });
};

const writeData = (data, url, titre, id) => {
    const newContent = document.createElement("article");
    newContent.innerText = data;
    document.body.appendChild(newContent);

    var elem = document.createElement('img');
    elem.setAttribute('src', url);
    document.body.appendChild(newContent).appendChild(elem);

    $(document).click(function() {
        $('#modal').css('display', 'flex');
        $('.titleModalText').text(titre);
        $('.conentImg').html(elem);
    });

};