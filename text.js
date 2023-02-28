let childTwo = document.querySelector(".child2");
let parent = document.querySelector(".parent");

parent.addEventListener("click", (e) => {
  childTwo.style.width = `${e.offsetX}px`;
});
