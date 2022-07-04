const root = document.querySelector('#root')
console.log(root)

document.body.style.margin = 0
document.body.style.padding = 0
document.body.style.boxSizing = 'border-box'

let color1 = '#DAEE73'
let hund = 100
root.style.width = hund+ "vw";
root.style.height = hund + "vh";
root.style.overflow = "hidden";
root.style.border = '1px solid black'
//root.style.overflow = 'hidden'

const square = document.createElement('div')
root.appendChild(square)
square.classList = "about"

square.style.width = "3000px"
square.style.height = "800px";
square.style.backgroundColor = color1;
square.style.transform = 'rotate(10deg)'
square.style.position = 'relative';
square.style.zIndex= 2
square.style.top = '-55vw'
square.style.zIndex =1;

const  portimg = document.querySelector('.img')
portimg.style.position = "relative"
portimg.style.width = "20vw"
portimg.style.top = '10vw'
portimg.style.left = '10vw'
portimg.style.borderRadius = "60px"


const about = document.createElement('h1')
root.appendChild (about)
about.innerText = "ABOUT"
about.style.color ='#fff'
about.style.position ='absolute'
about.style.top = "40px"
about.style.right = "100px"
about.style.zIndex = 2
about.style.fontSize = "4rem"


const box = document.createElement('div')
root.appendChild(box)
box.style.width = "500px"
box.style.height = "600px"
box.style.border = "1px solid black"
box.style.backgroundColor = "#fff"

box.style.position = "absolute"
box.style.top = "300px"
box.style.left = "500px"

portimg.addEventListener('click', ()=>{
 box.style.display = "block"

})
box.style.display = 'none'
const section = document.createElement('div')
box.appendChild(section);


const X = document.createElement('button')
section.appendChild(X)
X.addEventListener('click',()=>{
  box.style.display = "none"

})
X.style.border = "none"
X.style.backgroundColor = "#fff"
X.style.position = "relative"
X.style.left = "150px"
X.style.fontSize = "50px"


const text = document.createElement('p')
X.appendChild(text)
text.innerText = "X"

const intro = document.createElement('h1')
box.appendChild(intro)
intro.innerText = "INTRODUCE"
intro.style.position = "absolute"
intro.style.left = "150px"
intro.style.top = "40px"


for(let p =0; p<6; p++){
const explain = document.createElement('p')
box.appendChild(explain)}
box.children[2].innerText= "끈기와 노력을 멈추지 않는 웹디자이너 김지현 입니다."
box.children[3].innerText= "다른 방향으로 사용자를 생각하고 편의를 고려하며"
box.children[4].innerText= "웹페이지를 디자인 하는 것 흥미로웠습니다."
box.children[5].innerText= "성실함과 기록하는 능동적이 슴관을 잘 활용하여"
box.children[6].innerText= "어제보다 오늘, 오늘보다 내일"
box.children[7].innerText= "더 발전하는 모습으로 임하겠습니다."

box.style.textAlign ="center"
box.style.zIndex ="4"

const btnbox = document.createElement('div')
box.appendChild(btnbox)


for(let p =0; p<2; p++){
const btn2 = document.createElement('button')
btnbox.appendChild(btn2)
btnbox.children[0].innerText = "portfolio"
}
btnbox.children[1].innerText = "Design"

btnbox.style.border = "1px solid black"
btnbox.style.height = "60px"
btnbox.style.width = "inherit"
btnbox.style.position = "absolute"
btnbox.style.bottom = "80px"
btnbox.style.display = "flex"
btnbox.style.alignContent = "center"
btnbox.style.justifyContent = "space-around"


