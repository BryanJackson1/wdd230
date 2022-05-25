const currentDate = new Date();
const day = currentDate.getDay();
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);
document.querySelector('#date').textContent = fulldateUK;

document.querySelector('#year').textContent = currentDate.getFullYear();

const navbutton = document.querySelector('.navbtn');
const mainnav = document.querySelector('.main-navigation');

navbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const invite = document.querySelector('#invite');
if (day === 1 || day === 2) {
    invite.style.display = "block";
}