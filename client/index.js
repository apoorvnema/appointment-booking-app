const ul = document.querySelector("ul");
function handleFormSubmit(event) {
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const userDetails = {
        username: username,
        email: email,
        phone: phone,
    }
    axios.post("http://127.0.0.1:3000/users/add-user", userDetails)
        .then(res => {
            const id = res.data.id;
            const li = document.createElement("li");
            li.id = id;
            li.innerHTML = `${username}-${email}-${phone} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
            ul.appendChild(li);
        })
        .catch(err => console.log(err));
}

document.addEventListener("DOMContentLoaded", () => {
    axios.get("http://127.0.0.1:3000/users/get-users")
        .then(res => {
            res.data.forEach(user => {
                const id = user.id;
                const li = document.createElement("li");
                li.id = id;
                li.innerHTML = `${user.username}-${user.email}-${user.phone} <button class="delete-btn">Delete</button> <button class="edit-btn">Edit</button>`;
                ul.appendChild(li);
                const editBtn = li.querySelector(".edit-btn");
                editBtn.addEventListener("click", () => {
                    axios.delete(`http://127.0.0.1:3000/users/delete-user/${editBtn.parentElement.id}`)
                        .then(res => {
                            document.getElementById('username').value = user.username;
                            document.getElementById('email').value = user.email;
                            document.getElementById('phone').value = user.phone;
                            editBtn.parentElement.remove();
                        }).catch(err => console.log(err));
                });
                const deleteBtn = li.querySelector(".delete-btn");
                deleteBtn.addEventListener("click", () => {
                    axios.delete(`http://127.0.0.1:3000/users/delete-user/${deleteBtn.parentElement.id}`)
                        .then(res => {
                            deleteBtn.parentElement.remove();
                        }).catch(err => console.log(err));
                });
            });
        }).catch(err => console.log(err));
});

