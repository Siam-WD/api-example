const loadUser = () =>{
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user =>{
    const name = user.results[0].name.title + ' ' +user.results[0].name.first + ' ' + user.results[0].name.last;
    document.getElementById('name').innerHTML = name;

    const gender = user.results[0].gender;
    document.getElementById('gender').innerHTML = gender;

    const picture = user.results[0].picture.large;
    console.log(picture);
    document.getElementById('picture').innerHTML = `
    <img src="${picture}">
    `;
    

    console.log(user.results[0])

} 

loadUser();