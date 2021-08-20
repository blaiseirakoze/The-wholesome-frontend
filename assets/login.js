let loginBtn = document.querySelector("#login-btn");

// login event
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
      if (res.message === "success") {
        localStorage.setItem('names', res.names);
        localStorage.setItem("role", res.role);
        window.location.replace("http://127.0.0.1:5500/welcome.html");
      } else {
        alert("Invalid credentials");
      }
    }
  } catch (error) {
    alert(error);
  }
});

// login validations
function ValidationLogin() {
  let username = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;

  if (username != "" && password != "") {
    return true;
  } else {
    alert("All fields are required.....!");
    return false;
  }
}
