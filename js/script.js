const api = "https://api.airtable.com/v0/appQPw7ookVvJ3hEb/Books?&api_key=keyjc1nnVReGqYJCF";

fetch(api)
	.then((res) => res.json())
	.then((data) => {
		// console.log(data);
		printData(data.records);
	});

const printData = (data) => {
	data.map((data, i) => {
		const message =
			"Post #" +
			i +
			" : " +
			data.fields.Titre +
			", Catégories: " +
			data.fields.Topic +
			" Auteur(s) :" +
			data.fields.Auteur +
			' <img class="imgtest" src="' +
			data.fields.Cover[0].url +
			'">';
		console.log(data.fields.Cover[0].url);
		$(".imgtest").attr("src", data.fields.Cover[0].url);
		var img = $("<img />", { src: data.fields.Cover[0].url });
		img.appendTo(".img");
		writeData(message);
	});
};

const writeData = (data) => {
	const newContent = document.createElement("article");
	newContent.innerText = data;
	document.body.appendChild(newContent);
};
