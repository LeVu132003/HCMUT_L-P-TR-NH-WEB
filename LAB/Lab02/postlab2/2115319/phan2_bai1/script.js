function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function assignRandomColor() {
  var elements = document.getElementsByClassName("random-color");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = getRandomColor();
  }
}

function createTable() {
    var table = document.getElementById("myTable");
    if (table) {
        alert("Table already exists!");
        return;
    }
    else {
    table = document.createElement("table");
    table.setAttribute("id", "myTable");

    for (var i = 0; i < 2; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < 2; j++) {
        var cell = document.createElement('td');
        var cellText = document.createTextNode('Cell');
        cell.appendChild(cellText);
        row.appendChild(cell);
        }
        table.appendChild(row);
    }
    
    document.querySelector('.table-wrapper').appendChild(table);
    }
}

function addRow() {
  var table = document.getElementsByTagName('table')[0];
  if (!table) {
    alert('Please create a new table first')
  }
  var newRow = document.createElement('tr');
  
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    var cell = document.createElement('td');
    var cellText = document.createTextNode('Cell');
    cell.appendChild(cellText);
    newRow.appendChild(cell);
    newRow.setAttribute("class", "random-color");
    assignRandomColor(newRow);
  }
  
  table.appendChild(newRow);
}

function addColumn() {
  var table = document.getElementsByTagName('table')[0];
  
  if (!table) {
    alert('Please create a new table first')
  }
  for (var i = 0; i < table.rows.length; i++) {
    var cell = document.createElement('td');
    var cellText = document.createTextNode('Cell');
    cell.appendChild(cellText);
    cell.setAttribute("class","random-color");
    assignRandomColor(cell);
    table.rows[i].appendChild(cell);
  }
}

function deleteRow() {
  var rowIndex = parseInt(document.getElementById('rowIndex').value);
  var table = document.getElementsByTagName('table')[0];
  if (!table) {
    alert('Please create a new table first')
  }
  
  if (rowIndex < table.rows.length) {
    table.deleteRow(rowIndex);
  } else {
    alert('Invalid row index');
  }
}

function deleteColumn() {
  var columnIndex = parseInt(document.getElementById('columnIndex').value);
  var table = document.getElementsByTagName('table')[0];
  if (!table) {
    alert('Please create a new table first')
  }
  
  for (var i = 0; i < table.rows.length; i++) {
    if (columnIndex < table.rows[i].cells.length) {
      table.rows[i].deleteCell(columnIndex);
    } else {
      alert('Invalid column index');
      return;
    }
  }
}

function deleteTable() {
  var table = document.getElementsByTagName('table')[0];
  if (!table) {
    alert('Please create a new table first')
  }
  table.parentNode.removeChild(table);
}