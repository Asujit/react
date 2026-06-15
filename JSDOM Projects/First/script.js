// 4 pillars of DOM

// 1. Selection of an Element
// 2. Changing HTML
// 3. Changing CSS
// 4. Event Listener

const a = document.querySelector("h1"); // for select HTML tag
// const a = document.querySelector("#box"); // for select ID
// const a = document.querySelector(".container"); // for select class

console.log(a);

a.innerHTML = "This is Changed DOM title";

a.style.color = "blue";

a.style.fontStyle = "italic";

a.addEventListener("dblclick", function () {
  console.log("Hello");
  a.innerHTML = "This come after event listerner triggered";
  a.style.color = "red";
});

let b = document.querySelector(".container");
let c = document.querySelector("button");

c.addEventListener("click", function () {
  b.style.backgroundColor = "red";
});

c.addEventListener("dblclick", function () {
  b.style.backgroundColor = "#1bd32b";
});

let d = document.getElementById("off"); // select element by Id
// let d = document.getElementByClassName("off");  // select element by Class name
d.addEventListener("click", function () {
  b.style.backgroundColor = "blueviolet";
});

let h = document.querySelectorAll("h2");

h.forEach((e) => {
  console.log(e);
  e.style.color = "yellow";
});

let i = document.getElementsByClassName("head");

for (let e of i) {
  e.addEventListener("click", function () {
    e.textContent = "This is Updated Text Content";
  });
}

let box = document.querySelector(".box");

box.addEventListener("dblclick", function () {
    box.innerHTML = "<h1>Box Header</h1>"
});
