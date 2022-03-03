const loadbuddies = () => {

    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}
loadbuddies();
const displayBuddies = (data) => {
    const mainDiv = document.getElementById('buddies');


    const buddies = data.results;
    for (const buddy of buddies) {
        const div = document.createElement('div');
        div.classList.add('container');
        div.innerHTML = `
        <h3>Name : ${buddy.name.first} ${buddy.name.last}</h3>
        <img src="${buddy.picture.large}" />
        <button > Details</button>
        `

        mainDiv.appendChild(div);
        // console.log(buddy)

    }

}