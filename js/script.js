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
			", Page: " +
			data.fields.Status +
			" --- Recipe: " +
			data.fields.Recipe +
			" (" +
			data.fields.Type +
			') <img src="' +
			data.fields.Image +
			'">';
		writeData(message);
	});
};

const writeData = (data) => {
	const newContent = document.createElement("div");
	newContent.innerText = data;
	document.body.appendChild(newContent);
};
