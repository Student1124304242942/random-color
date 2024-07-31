let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C",
"D","E", "F"];

const btn = document.getElementById('nav');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexcolor = '#';
    for(i = 0; i < 6; i++){
        hexcolor += colors[getRandom()];
    }

    color.textContent  = hexcolor;
    document.body.style.backgroundColor = hexcolor;
})

function getRandom (){
    return Math.floor(Math.random() * colors.length);
}