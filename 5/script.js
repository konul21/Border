let img = document.querySelectorAll('img');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');

inp1.addEventListener('input', Border)
document.addEventListener('DOMContentLoaded', LocalEkran)

function Border() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.borderRadius = inp1.value + '%';
    }
    Local(inp1.value)

}


inp2.addEventListener('input', Opacity)

function Opacity() {
    for (let i = 0; i < img.length; i++) {
        img[i].style.opacity = inp2.value;
    }
    Local(inp2.value)
    

}


function Local(getelements) {
    let before;
    if (localStorage.getItem('before') === null) {
        before = [];
    }
    else {
        before = JSON.parse(localStorage.getItem('before'))
    }
    before.push(getelements);

    localStorage.setItem('before', JSON.stringify(before));

}


function LocalEkran() {
  
        before = JSON.parse(localStorage.getItem('before'))
   

    // before.forEach(element => {
    //     Border(element);
    // }}

    }