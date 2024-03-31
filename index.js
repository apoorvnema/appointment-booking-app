const ul = document.querySelector("ul");
function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const userDetails = {
        username: username,
        email: email,
        phone: phone,
    }
    axios.post("https://crudcrud.com/api/c9af40cbb821453ab02d1fd2a5492066/appointmentData", userDetails)
        .then(res => {
            const id = res.data._id;
            const li = document.createElement("li");
            li.id = id;
            li.innerHTML = `${username}-${email}-${phone} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
            ul.appendChild(li);
            const edit = document.querySelector(".edit-btn");
            edit.addEventListener("click", () => {
                axios.get(`https://crudcrud.com/api/c9af40cbb821453ab02d1fd2a5492066/appointmentData/${edit.parentElement.id}`)
                    .then(res => {
                        document.getElementById('username').value = res.data.username;
                        document.getElementById('email').value = res.data.email;
                        document.getElementById('phone').value = res.data.phone;
                    }).catch(err => console.log(err));
                axios.delete(`https://crudcrud.com/api/c9af40cbb821453ab02d1fd2a5492066/appointmentData/${edit.parentElement.id}`)
                    .then(res => {
                        edit.parentElement.remove();
                    }).catch(err => console.log(err));
            })
        }).catch(err => console.log(err));
}

// Do not touch the code below
module.exports = handleFormSubmit;