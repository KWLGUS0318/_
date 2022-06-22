const root = document.createElement('id')
root.classList="root"
console.log(root)

let i = 0
document.body.appendChild(root)
document.body.style.margin = i;
document.body.style.padding = i;


const square = document.createElement('div')
root.appendChild(square)
square.classList = "about"

let color1 = '#DAEE73'
let hund = 100
root.style.width = hund+ "vw";
root.style.height = hund+ "vh";
root.style.overflow = "hidden";


square.style.width = "2000px"
square.style.height = "800px";
square.style.backgroundColor = color1;
square.style.transform = 'rotate(10deg)'
square.style.position = 'absolute';
square.style.top = '-600px'
square.style.left = '5vmin'
square.style.zIndex =1;


const photoHov = document.getElementsByClassName('photo-hover>p')
console.log(photoHov)
