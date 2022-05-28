var chill = "init";
const wind = parseFloat(document.getElementById('speed').textContent);
const temp = parseFloat(document.getElementById('temp').textContent);


if ((wind > 3) && (temp < 50)) {
    chill = 35.740 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
}
else {
    chill = "NA";
}

document.querySelector('#chill').textContent = chill.toFixed(1);
