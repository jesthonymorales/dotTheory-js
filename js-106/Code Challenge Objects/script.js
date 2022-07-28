const pets = [
    {
        'name': 'Dog One',
        'type': 'Dog',
        'breed': 'Bulldog',
        'age': 1,
        'photo': 'images/bulldog.jpeg',
    },
    {
        'name': 'Dog Two',
        'type': 'Dog',
        'breed': 'German Shepherd',
        'age': 1,
        'photo': 'images/german_shepherd.jpeg',
    },
    {
        'name': 'Dog Three',
        'type': 'Dog',
        'breed': 'Golden Retriever',
        'age': 1,
        'photo': 'images/golden_retriever.jpeg',
    },
    {
        'name': 'Dog Four',
        'type': 'Dog',
        'breed': 'Poodle',
        'age': 1,
        'photo': 'images/poodle.jpeg',
    },
    {
        'name': 'Dog Five',
        'type': 'Dog',
        'breed': 'Siberian Husky',
        'age': 1,
        'photo': 'images/siberian_husky.jpeg',
    },
]

let html = "";

for (let i = 0; i < pets.length; i++) {
    html += `
        <hr>
        <h2>${pets[i].name}</h2>
        <h3>${pets[i].type} | ${pets[i].breed}</h3>
        <p>${pets[i].age}</p>
        <img src='${pets[i].photo}'>
    `;
}

document.querySelector('main').innerHTML = html;