function insert_Row() {
    //Write your code here
	let table = document.getElementById();
	let btn = document.querySelector('input');

	btn.addEventListener('click', addRow)

   function addRow() {
    let row = table.insertRow(0);
	   row.insertCell(0).innerHTML = "New Cell 1";
	   row.insertCell(1).innerHTML = "New Cell 2";
   }
}
