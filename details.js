function onFormSubmit(){
    let formData = readFormData();
    insertNewRecord(formData);
}
function readFormData(){
    let formData = {};
    formData ["bookid"]= document.getElementById("bookid").value;
    formData["booktype"] = document.getElementById("booktype").value;
    formData["booktitle"] = document.getElementById("booktitle").value;
    formData["pagecount" ] = document.getElementById("pagecount").value;
    formData["copyright"] = document.getElementById("copyright").value;
 return formData
 }
 function insertNewRecord(data){
       let table = document.getElementById("table").getElementsByTagName('tbody')[0];
       let newRow = table.insertRow(table.length);
       let cell1= newRow.insertCell(0);
       cell1 = newRow.insertCell(0);
       cell1.innerHTML = data.bookid;
       cell1= newRow.insertCell(1);
       cell1.innerHTML = data.booktype;
       cell1 = newRow.insertCell(2);
       cell1.innerHTML = data.booktitle;
       cell1 = newRow.insertCell(3);
       cell1.innerHTML = data.pagecount;
       cell1 = newRow.insertCell(4);
       cell1.innerHTML = data.copyright;
         
    }
const table = document.querySelector('#table');


const form = document.querySelector('#booknames');
form.addEventListener("submit", (event) => {
 event.preventDefault();
});

for (let i = 0; i < table.rows.length; i++) {

const input = document.createElement('input');


input.value = table.rows[i].cells[0].textContent;
input.value = table.rows[i].cells[1].textContent;
input.value = table.rows[i].cells[2].textContent;
input.value = table.rows[i].cells[3].textContent;
input.value = table.rows[i].cells[4].textContent;


form.appendChild(input);
}