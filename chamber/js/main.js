const currentDate = new Date();
var since = 0;
var days = 0;
var hours = 0;
var minutes = 0;
var seconds = 0;

const day = currentDate.getDay();//extract the day from todays date
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(currentDate);//format

document.querySelector('#date').textContent = fulldateUK;//push date to document
//document.querySelector('.formdate value').textContent = fulldateUK;//puch date to form submission hidden tag
document.querySelector('#year').textContent = currentDate.getFullYear();//push year to document

const navbutton = document.querySelector('.navbtn');
const mainnav = document.querySelector('.main-navigation');

navbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const invite = document.querySelector('#invite');
if (day === 1 || day === 2) {
    invite.style.display = "block";
}
else {
    
}
// get the stored value in localStorage
let lastVisit = Number(window.localStorage.getItem("lastVisit-local"));
//subtract last visit time from now
if (lastVisit !== 0){
since = Date.now()-lastVisit;
}
else{
    since = 0;
}
// store the new last visited date
localStorage.setItem("lastVisit-local", Date.now());
//calculate the d h m s since last visit
days = Math.floor(since/24/3600/1000);
hours = Math.floor(since/3600/1000);
minutes = Math.floor(since/60/1000);
seconds = Math.floor(since/1000);
//output the time since last visit
document.querySelector('#lastvisit').textContent = days+"d "+hours+"h "+minutes+"m "+seconds+"s";