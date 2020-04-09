const modeText = document.querySelector(".mode-text");
const checkbox = document.querySelector(".checkbox");
const ball = document.querySelector(".ball");
const body = document.querySelector("body");
const header = document.querySelector(".main-header");
const followersChild = document.querySelectorAll(".grid-followers-child");
const overviewChild = document.querySelectorAll(".grid-overview-child");
const heading = document.querySelectorAll(".overview-today, .heading-primary");

checkbox.addEventListener("click", () => {
  // Changing the mode Text
  if (modeText.innerText === "Dark Mode") {
    modeText.innerText = "Light Mode";
    modeText.style.color = "#000";
  } else {
    modeText.innerText = "Dark Mode";
    modeText.style.color = "#fff";
  }

  //  Toggling the button
  ball.classList.toggle("ball-checked");

  ball.classList.contains("ball-checked")
    ? (ball.style.backgroundColor = "yellow")
    : (ball.style.backgroundColor = "rgb(11, 28, 87)");

  // Changing style of body
  body.classList.toggle("body-white-bg");

  //   Changing style of header
  header.classList.toggle("header-white-bg");

  //   Changing style of followers card
  followersChild.forEach((el) => {
    el.classList.toggle("followerscard-white-bg");
  });

  //   Changing style of overview card
  overviewChild.forEach((el) => {
    el.classList.toggle("overviewcard-white-bg");
  });

  //   Overview Heading color
  heading.forEach((el) => {
    el.classList.toggle("heading-color-black");
  });
});
