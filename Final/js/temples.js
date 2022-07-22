const temples = document.querySelector('.temples');
const dataPath = 'data/temples.json';
fetch(dataPath)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const temples = jsonObject['temples'];
        temples.forEach(displayTemples);
    });

function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let image = document.createElement('img');
    let history = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let closures = document.createElement('p');
    let services = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h3.textContent = `${temple.name}`;
    history.textContent = `Important Dates: ${temple.history}`;
    phone.textContent = `Phone: ${temple.phone}`;
    email.textContent = `email: ${temple.email}`;
    closures.textContent = `Closures:  ${temple.closures}`;
    services.textContent = `Services:  ${temple.services}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', temple.img);
    image.setAttribute('alt', 'Image of' + temple.name);
    image.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(history);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(closures);
    card.appendChild(services);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.temples').appendChild(card);
}

