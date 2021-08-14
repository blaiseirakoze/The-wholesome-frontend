let btn = document.querySelector("#btn");

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

      const response = await fetch("http://localhost:8080/the-wholesome/user", {
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
      } else if (res.message == "user already exist") {
        alert("user already exist");
      }
    }
  } catch (error) {
    return error;
  }
});

function ValidationRegister() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let age = document.querySelector("#age").value;
  let sex = document.querySelector("#sex").value;
  let phoneNumber = document.querySelector("#phoneNumber").value;
  let role = document.querySelector("#role").value;
  // Conditions
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
    if (
      (role == "admin" && password.length >= 10) ||
      (role == "guest" && password.length >= 5)
    ) {
      if (phoneNumber.length == 10) {
        return true;
      } else {
        alert("The phoneNumber No. must be at least 10 digit long!");
        return false;
      }
    } else {
      alert(
        "The password length should be 5 and for the admin the length should be 10"
      );
      return false;
    }
  } else {
    alert("All fields are required.....!");
    return false;
  }
}
