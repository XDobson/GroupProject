document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const errorMessage = document.getElementById("error-message");
    const confirmation = document.getElementById("confirmation");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const first_name = form.name.value.trim();
      const last_name = form.name.value.trim();
      const email = form.email.value.trim();
      const phone = form.phone.value.trim();
      const address = form.address.value.trim();
  
      if (first_name === "" ||last_name === ""|| email === "" || phone === "" || address === "") {
        errorMessage.textContent = "Please fill in all the fields.";
      } else {
        errorMessage.textContent = "";
        submitForm(first_name, last_name, email, phone, address);
      }
    });
  
    function submitForm(name, email, phone, address) {
      const xhr = new XMLHttpRequest();
      const formData = new FormData();
  
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("address", address);
  
      xhr.open("POST", "insert.php", true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          confirmation.textContent = xhr.responseText;
        }
      };
      xhr.send(formData);
    }
  });