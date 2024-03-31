function handleFormSubmit(event) {
    event.preventDefault();
    axios.delete("https://crudcrud.com/api/c9af40cbb821453ab02d1fd2a5492066/appointmentData/66098eeb1492af03e8f10fa5").then(res => {
        deleteUsers(res.data)
    }).catch(err => console.log(err));
}
function deleteUsers(user) {
    document.getElementById(user._id).remove();
}

// Do not touch the code below
module.exports = handleFormSubmit;