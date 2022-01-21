const api = "https://api.airtable.com/v0/appQPw7ookVvJ3hEb/Books?&api_key=keyjc1nnVReGqYJCF";


fetch(api)
    .then((res) => res.json())
    .then((data) => {
        //    console.log(data);
        printData(data.records);
    });


const printData = (data) => {
    data.map((data, i) => {
        const url = data.fields.Cover[0].url;
        const message =
            "Titre: " +
            data.fields.Titre + "\n" +
            "Catégories: " +
            data.fields.Topic + "\n" +
            "Auteur(s) :" +
            data.fields.Auteur + "\n";

        writeData(message, url);
        console.log(url)
    });
};

const writeData = (data, url) => {
    const newContent = document.createElement("article");
    newContent.innerText = data;
    document.body.appendChild(newContent);

    var elem = document.createElement('img');
    elem.setAttribute('src', url);
    document.body.appendChild(newContent).appendChild(elem);


};