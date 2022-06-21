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
square.style.position = 'relative';
square.style.top = '-65vmin'
square.style.left = '30vmin'
square.style.zIndex =1;

const about = document.createElement('h1')
square.appendChild(about)
about.innerHTML = "ABOUT";
about.style.color = "#000";

about.style.position = "absolute";
about.style.zIndex = 2;
about.style.top = '150vw'
