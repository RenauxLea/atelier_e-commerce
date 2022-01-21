const api = "https://api.airtable.com/v0/appA7gx6acQTdKBIB/Recipes?&api_key=keyRubrNJNZ6T0NbN"

fetch(api)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    printData(data.records);
  })

const printData = (data) => {
  data.map( (data, i) => {
    const message = "Post #" + i + " : " + 
                  data.fields.Id + ", Page: " + 
                  data.fields.BookPage + " --- Recipe: " + 
                  data.fields.Recipe + " (" +
                  data.fields.Type + ") <img src=\"" + 
                  data.fields.Image + "\">"
    writeData(message);
  })
}

const writeData = (data) => {
  const newContent = document.createElement("div");
  newContent.innerText = data;
  document.body.appendChild(newContent);
}