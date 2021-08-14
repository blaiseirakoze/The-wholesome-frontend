let loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    if (ValidationLogin() == !false) {
      let username = document.querySelector("#username").value;
      let password = document.querySelector("#password").value;

      const data = {
        username,
        password,
        type: "login",
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
      if (res.userLoggedIn) {
        window.location.replace("http://127.0.0.1:5500/welcome.html");
      } else {
        alert("Invalid credentials");
      }
    }
  } catch (error) {
    alert(error);
  }
});

function ValidationLogin() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  // Conditions
  if (username != "" && password != "") {
    return true;
  } else {
    alert("All fields are required.....!");
    return false;
  }
}
