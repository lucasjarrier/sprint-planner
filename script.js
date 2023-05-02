function addMemberTable() {
    var memberTables = document.getElementById("memberTables");
    var numMembers = memberTables.getElementsByClassName("member").length + 1;
    var memberDiv = document.createElement("div");
    memberDiv.className = "member";
    var table = document.createElement("table");
  
    table.innerHTML = "<thead><tr><th colspan='2'>Membro " + numMembers + "</th></tr><tr><th>Tarefa</th><th>Estimativa (horas)</th></tr></thead><tbody></tbody>";
  
    memberDiv.appendChild(table);
  
    var addButton = document.createElement("button");
    addButton.className = "add-task";
    addButton.innerHTML = "Nova tarefa";
    addButton.addEventListener("click", function() {
      addTask(addButton);
    });
  
    memberDiv.appendChild(addButton);
    memberTables.appendChild(memberDiv);
  }
  
  function addTask(btn) {
    var memberDiv = btn.parentNode;
    var table = memberDiv.getElementsByTagName("table")[0];
    var tbody = table.getElementsByTagName("tbody")[0];
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td><input type='text'></td><td><input type='number' oninput='updateSum()'></td>";
    tbody.appendChild(newRow);
  }
  
  function updateSum() {
    var tables = document.getElementsByTagName("table");
    var result = document.getElementById("result");
    result.innerHTML = "";
    var total = 0;
    for (var i = 0; i < tables.length; i++) {
      var sum = 0;
      var tbodyRows = tables[i].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
      for (var j = 0; j < tbodyRows.length; j++) {
        var inputs = tbodyRows[j].getElementsByTagName("input");
        var hours = parseInt(inputs[1].value);
        if (!isNaN(hours)) {
          sum += hours;
          total += hours;
        }
      }
      var memberName = tables[i].getElementsByTagName("th")[0].innerHTML;
      result.innerHTML += "<p>" + memberName + ": " + sum + " horas</p>";
    }
    result.innerHTML += "<p><strong>Total:</strong> " + total + " horas</p>";
  }
  
  function sumTasks() {
    updateSum();
  }
  