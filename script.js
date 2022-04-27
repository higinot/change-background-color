const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const btn = document.querySelector('.btn');
const color = document.querySelector('.colors');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const randomNumber = (Math.random() * (colors.length - 0)) + 0

    document.body.style.backgroundColor = colors[randomNumber.toFixed(0)]
    color.textContent = colors[randomNumber.toFixed(0)]
})

function getRandonNumber () {
    const random = Math.random()
    return 
}
