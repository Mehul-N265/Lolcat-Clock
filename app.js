function setClockTime() {
  let clock = document.querySelector("#clock");
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  clock.innerHTML = `${hour}:${minute}:${second}`;
}

setInterval(setClockTime, 1000);
