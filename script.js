const colors = ['green', 'red', 'rgba(133,122,200)', '#F1F5F9'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.colors');
document.body.style.backgroundColor = color.textContent;

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const randomNumber = Math.floor(Math.random() * colors.length)

    document.body.style.backgroundColor = colors[randomNumber.toFixed(0)]
    color.textContent = colors[randomNumber.toFixed(0)]
})

function getRandonNumber () {
    const random = Math.random()
    return 
}
