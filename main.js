let counter = document.querySelector("#counter");
let num = 0;

// When click on increment
document.querySelector(".increase").addEventListener("click", function () {
  num++;
  document.querySelector("#counter").textContent = num;
  console.log(num);

  if (num > 0) {
    counter.style.color = "green";
  }
  if (num == 0) {
    counter.style.color = "wheat";
  }
});

// When click on decrement
document.querySelector(".decrease").addEventListener("click", function () {
  num--;
  document.querySelector("#counter").textContent = num;
  console.log(num);

  if (num < 0) {
    counter.style.color = "red";
  }
  if (num == 0) {
    counter.style.color = "wheat";
  }
});

// When click on reset
document.querySelector(".reset").addEventListener("click", function () {
  num = 0;
  document.querySelector("#counter").textContent = num;
  counter.style.color = "wheat";
  console.log(num);
});
