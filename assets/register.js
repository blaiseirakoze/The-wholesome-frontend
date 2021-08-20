let btn = document.querySelector("#btn");

// register event
btn.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    if (ValidationRegister() == !false) {
      let username = document.querySelector("#username").value;
      let password = document.querySelector("#password").value;
      let firstName = document.querySelector("#firstName").value;
      let lastName = document.querySelector("#lastName").value;
      let age = document.querySelector("#age").value;
      let sex = document.querySelector("#sex").value;
      let phoneNumber = document.querySelector("#phoneNumber").value;
      let role = document.querySelector("#role").value;

      const data = {
        username,
        password,
        firstName,
        lastName,
        age,
        sex,
        phoneNumber,
        role,
        type: "register",
      };

      const response = await fetch("http://localhost:8080/The-wholesome-backend/user", {
        method: "POST",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "text/plain",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.message == "user created successful") {
        window.location.replace("http://127.0.0.1:5500/login.html");
      } else {
        alert(res.message);
      }
    }
  } catch (error) {
    return error;
  }
});

// register validations
function ValidationRegister() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let age = document.querySelector("#age").value;
  let sex = document.querySelector("#sex").value;
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let role = document.querySelector("#role").value;
 
  if (
    username != "" &&
    password != "" &&
    firstName != "" &&
    lastName != "" &&
    age != "" &&
    sex != "" &&
    phoneNumber != "" &&
    role != ""
  ) {
      if (phoneNumber.length == 10) {
        return true;
      } else {
        alert("The phoneNumber No. must be at least 10 digit long!");
        return false;
      }
  } else {
    alert("All fields are required.....!");
    return false;
  }
}
