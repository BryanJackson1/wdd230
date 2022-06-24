const directory = document.querySelector('.directory');
const dataPath = 'data/data.json';
fetch(dataPath)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const members = jsonObject['members'];
        members.forEach(displayMembers);
    });

function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let slogan = document.createElement('p')
    let url = document.createElement('p')

    // Change the textContent property of the h2 element to contain the prophet's full name
    h3.textContent = `${member.name}`;
    slogan.textContent = `${member.slogan}`;
    url.textContent = `${member.address}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', member.img);
    image.setAttribute('alt', 'Business Logo for ' + member.name);
    image.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(slogan);
    card.appendChild(url);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.directory').appendChild(card);
}

