gsap.to('h1', {opacity: 1, duration: 1.2, delay: .5})
gsap.to('.container', {opacity: 1, duration: 1.5, delay: 1})

const button = document.querySelector(".btn");
button.addEventListener("click", rules);
function rules() {
  Swal.fire(
    "Pick a number between 1 and 20.",
    "If your guess is too high or too low, you'll get a hint."
  );
}

const input = document.querySelector("#guess");
const buttonStart = document.querySelector("#submit");
const answer = Math.floor(Math.random() * 20) + 1;

input.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) play();
});

buttonStart.addEventListener("click", play);

function play() {
  const userNumber = document.querySelector("#guess").value;
  if (userNumber < 1 || userNumber > 20) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pick a number between 1 and 20!",
    });
  } else if (isNaN(userNumber)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Pick a number!",
    });
  } else {
    if (userNumber < answer) {
      Swal.fire("Your guess is too low.", "Try the greater number!");
    } else if (userNumber > answer) {
      Swal.fire("Your guess is too high.", "Try the less number!");
    } else {
      Swal.fire({
        title: "VICTORY!!!",
        text: "You Win!",
        imageUrl: "https://cdn.glitch.global/56e31cba-0dbf-4de8-b101-a7d3ecd663d7/win.jpg?v=1648579770227",
        imageWidth: 600,
        imageHeight: 400,
        imageAlt: "Victory",
      });
    }
  }
}
