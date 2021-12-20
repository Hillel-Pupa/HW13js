setInterval(updateTime, 1000);
function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let [h1, h2] = hours.toString().padStart(2, "0");
  let [m1, m2] = minutes.toString().padStart(2, "0");
  let [s1, s2] = seconds.toString().padStart(2, "0");

  const hour1 = document.querySelector("#hours-1");
  hour1.className = `digit-${h1}`;
  const hour2 = document.querySelector("#hours-2");
  hour2.className = `digit-${h2}`;

  const minute1 = document.querySelector("#minutes-1");
  minute1.className = `digit-${m1}`;
  const minute2 = document.querySelector("#minutes-2");
  minute2.className = `digit-${m2}`;

  const second1 = document.querySelector("#seconds-1");
  second1.className = `digit-${s1}`;
  const second2 = document.querySelector("#seconds-2");
  second2.className = `digit-${s2}`;
}
