function saveContact() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var contact = {
    name: name,
    email: email,
    message: message,
  };

  // Get existing contacts from localStorage
  var contacts = JSON.parse(localStorage.getItem("contacts")) || [];

  // Add new contact to contacts array
  contacts.push(contact);

  // Save updated contacts array back to localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts));

 alert("Contact saved successfully ", contact);

  // Clear the form
  document.getElementById("contactForm").reset();
}
