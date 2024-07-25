function addRow() {
  const nameInput = document.getElementById("new-name");
  const ageInput = document.getElementById("new-age");
  const errorMessage = document.getElementById("error-message");

  if (nameInput.value === "" || ageInput.value === "") {
    errorMessage.textContent = "Please fill in all fields"; // Set error message
    errorMessage.style.display = "block"; // Show error message
    return;
  }

  // If input is valid, clear the error message if any
  errorMessage.style.display = "none";

  const table = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.rows.length);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);

  cell1.innerHTML = nameInput.value;
  cell2.innerHTML = ageInput.value;
  cell3.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;

  nameInput.value = "";
  ageInput.value = "";
}

function editRow(btn) {
  let row = btn.parentNode.parentNode;
  let cells = row.getElementsByTagName("td");
  cells[0].innerHTML = `<input type="text" value="${cells[0].textContent}">`;
  cells[1].innerHTML = `<input type="number" value="${cells[1].textContent}">`;
  cells[2].firstChild.textContent = "Save";
  cells[2].firstChild.onclick = function () {
    saveRow(this);
  };
  cells[2].lastChild.style.display = "none";
}

function saveRow(btn) {
  let row = btn.parentNode.parentNode;
  let cells = row.getElementsByTagName("td");
  let nameInput = cells[0].getElementsByTagName("input")[0];
  let ageInput = cells[1].getElementsByTagName("input")[0];

  cells[0].textContent = nameInput.value;
  cells[1].textContent = ageInput.value;
  cells[2].firstChild.textContent = "Edit";
  cells[2].firstChild.onclick = function () {
    editRow(this);
  };
  cells[2].lastChild.style.display = "inline";
}

function deleteRow(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
