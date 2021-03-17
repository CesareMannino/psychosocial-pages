document.addEventListener("DOMContentLoaded", function () {
  let fullname = document.getElementById("name-detail");
  let contact = document.getElementById("contact-detail");
  let submitBtn = document.getElementById("submission");

  let personsName = "";

  submitBtn.addEventListener("click", function () {
    console.log(fullname.value);
    console.log(contact.value);

    personsName = fullname.value;
  });

  if (personsName !== "") {
    document.getElementById("persons-name").innerHTML = personsName;
  }
});
