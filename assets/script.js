let btn = document.querySelector('#btn');

btn.addEventListener("click", function(e){
    e.preventDefault();
    if(ValidationEvent()==! false){
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        let firstName = document.querySelector("#firstName").value;
        let lastName = document.querySelector("#lastName").value;
        let age = document.querySelector("#age").value;
        let sex = document.querySelector("#sex").value;
        let phoneNumber = document.querySelector("#phoneNumber").value;
        let role = document.querySelector("#role").value;

        const data = { 
            username, password, firstName, lastName, age, sex, phoneNumber, role
        }

        fetch("http://localhost:8080/the-wholesome/register",{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        }).then(function(response){
            if (response.ok) {
                // response.json().then(json => {
                  console.log(response);
                // });
              }
            return response
        }).then(function(json){
            console.log(json)
        }) 
    }
    
})

function ValidationEvent() {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let age = document.querySelector("#age").value;
    let sex = document.querySelector("#sex").value;
    let phoneNumber = document.querySelector("#phoneNumber").value;
    let role = document.querySelector("#role").value;
    // Conditions
    if (username != '' &&  password != '' && firstName != '' && lastName != '' && age != '' && sex != '' && phoneNumber != '' && role != '') {
        if (role == 'admin' && password.length >= 10 || role == 'guest' && password.length >= 5) {
            if (phoneNumber.length == 10) {
                return true;
            } else {
                alert("The phoneNumber No. must be at least 10 digit long!");
                return false;
            }
        } else {
            alert("The password length should be 5 and for the admin the length should be 10");
            return false;
        }
        
    } else {
        alert("All fields are required.....!");
        return false;
    }
}