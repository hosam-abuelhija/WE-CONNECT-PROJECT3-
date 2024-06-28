document.addEventListener("DOMContentLoaded", function () {
  var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  console.log(contacts);
  contacts.reverse(); //to reverse the feedback to be new to old
  var tableBody = document.getElementById("contactTableBody");

  contacts.forEach(function (contact) {
    var row = document.createElement("tr");

    var nameCell = document.createElement("td");
    nameCell.textContent = contact.name;
    row.appendChild(nameCell);

    var emailCell = document.createElement("td");
    emailCell.textContent = contact.email;
    row.appendChild(emailCell);

    var messageCell = document.createElement("td");
    messageCell.textContent = contact.message;
    row.appendChild(messageCell);

    tableBody.appendChild(row);
  });
});
