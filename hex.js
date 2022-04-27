const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
const color = document.querySelector(".colors");
document.body.style.backgroundColor = color.textContent;


btn.addEventListener("click", (e) => {
  e.preventDefault();

  let hexRandon = '#';
  
  for(let i = 0; i < 6; i++) {
      hexRandon += hex[Math.floor(Math.random() * hex.length)]
  }

  color.textContent = hexRandon;
  document.body.style.backgroundColor = hexRandon;

  console.log(hexRandon)
});

console.log(getRandonHex());
