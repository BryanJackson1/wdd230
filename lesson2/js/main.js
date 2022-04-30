// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

const modified = document.lastModified;
document.querySelector('#modified').textContent = modified;