const numTeamsInput = document.getElementById('num-teams');
const createTableButton = document.getElementById('create-table');
const tableContainer = document.getElementById('table-container');

createTableButton.addEventListener('click', createTable);

function createTable() {
  const numTeams = parseInt(numTeamsInput.value);
  const numRows = Math.ceil(numTeams / 2);
  const table = document.createElement('table');

  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < 2; j++) {
      const cell = row.insertCell();
      cell.contentEditable = 'true';
    }
  }

  tableContainer.innerHTML = '';
  tableContainer.appendChild(table);
}