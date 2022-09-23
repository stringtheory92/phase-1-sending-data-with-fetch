function submitData(name, email) {
    
    // const configurationObject = {
    //     method: 'POST',
    //     headers: {
    //         "content-type": "application/json",
    //         "accept": "application/json",
    //     },
    //     body: JSON.stringify(formUser),
    // };
    
    //const body = document.querySelector('body');

    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(function(res) {return res.json()})
    .then(function(data) {
        // const div = document.createElement('div')

        // body.append(div)
        // div.append(data.id)
        return document.body.innerHTML = data.id;
    })
    .catch(e => {
        // const div = document.createElement('div')
        // body.append(div)
        // div.append(e.message)
        console.error(e.message)
        document.body.innerHTML = e.message;
    })
}
//submitData('Adam', 'me')

//submitData('Rob', 'rob@rob.rob')
//submitData("Bill", "bob@bob.bob")
// const submitData = (name, email) => {
//     const formUser = {
//         name: name,
//         email: email
//     };

//     fetch("http://localhost:3000/users", configurationObject)
//     .then(res => res.json())
//     .then(data => data)
//     .catch(e => {
//         console.error(e.message)
//         alert('Not working')
//     })
// }
// fetch('http://localhost:3000/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     }
//     body: {
//         name: 'Blair',
//         email: 'jerry@jerry.jerry'
//     }
// })