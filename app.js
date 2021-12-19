function numberToText(number) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  return arr[number];
}
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
  hour1.className = numberToText(h1);
  const hour2 = document.querySelector("#hours-2");
  hour2.className = numberToText(h2);

  const minute1 = document.querySelector("#minutes-1");
  minute1.className = numberToText(m1);
  const minute2 = document.querySelector("#minutes-2");
  minute2.className = numberToText(m2);

  const second1 = document.querySelector("#seconds-1");
  second1.className = numberToText(s1);
  const second2 = document.querySelector("#seconds-2");
  second2.className = numberToText(s2);
}
