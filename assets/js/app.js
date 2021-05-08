const countDown = () => {
const countDate = new Date('May 17, 2021 00:00:00').getTime();
const now = new Date().getTime();
const gap = countDate - now;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(gap / (1000 * 60 * 60 * 24));
var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((gap % (1000 * 60)) / 1000);
document.querySelector('.days .number').innerText = days;
document.querySelector('.hours .number').innerText = hours;
document.querySelector('.mins .number').innerText = minutes;
document.querySelector('.secs .number').innerText = seconds;
}
countDown();
setInterval(countDown,500);