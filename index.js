const ul = document.querySelector("ul");
function handleFormSubmit(event) {
    event.preventDefault();
    axios.get("https://crudcrud.com/api/c9af40cbb821453ab02d1fd2a5492066/appointmentData").then(res => {
        for (let i = 0; i < res.data.length; i++) {
            printUsers(res.data[i])
        }
    }).catch(err => console.log(err));
}
function printUsers(user) {
    const li = document.createElement("li");
    li.textContent = user.username + "-" + user.email + "-" + user.phone;
    ul.appendChild(li);
}

// Do not touch the code below
module.exports = handleFormSubmit;
