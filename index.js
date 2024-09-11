let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('nav');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    let hexcolor = '#';
    let btnColor = '#';
 
    for(let i = 0; i < 6; i++) {
        hexcolor += colors[getRandom()];
    }

    for(let i = 0; i < 6; i++) {
        btnColor += colors[getRandom()];
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
    btn.style.backgroundColor = btnColor;  
});

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}
