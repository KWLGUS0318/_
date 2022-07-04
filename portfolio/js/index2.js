const flower = document.querySelector('#flower > ul')
console.log(flower)
flower.classList = "group1"
const group = document.getElementsByClassName('group')
const flowwer = document.querySelectorAll('.group>li')
console.log(flowwer)


const entire = document.querySelector('#flower')
console.log(entire)

for(let i= 0; i <2; i++){
  const flo = document.createElement('ul')
  entire.appendChild(flo)
}

entire.children[1].classList ="group2"
entire.children[2].classList ="group3"


const group2 = document.querySelector('.group2')
const group3 = document.querySelector('.group3')
for(let j = 0; j<16; j++){
  const floli =document.createElement('li')
  group2.appendChild(floli)
  
}


for(let j = 0; j<16; j++){
  const floli =document.createElement('li')
  group3.appendChild(floli)
  
}

console.log(group2)
group2.children[0].style.transform = "matrix(0.05, -1, 1, 0.07, 0, 0)"
group2.children[1].style.transform = "matrix(0.45, -0.94, 0.83, 0.49, 0, 0)"
group2.children[2].style.transform = "matrix(0.79, -1.02, 0.4, 0.74, 0, 0)"
group2.children[3].style.transform = "matrix(0.96, -0.59, 0.22, 0.88, 0, 0)"
group2.children[4].style.transform = "matrix(1, 0.06, -0.03, 1, 0, 0)"
group2.children[5].style.transform = "matrix(0.94, 0.68, -0.25, 0.85, 0, 0)"
group2.children[6].style.transform = "matrix(0.62, 1.14, -0.51, 0.67, 0, 0)"
group2.children[7].style.transform = "matrix(0.17, 1.05, -0.88, 0.35, 0, 0)"
group2.children[8].style.transform = "matrix(-0.01, 1, -1, -0.02, 0, 0)"
group2.children[9].style.transform = "matrix(-0.28, 1.09, -0.77, -0.48, 0, 0)"
group2.children[10].style.transform = "matrix(-0.67, 1.12, -0.48, -0.69, 0, 0)"
group2.children[11].style.transform = "matrix(-0.89, 0.84, -0.32, -0.8, 0, 0)"
group2.children[12].style.transform = "matrix(-0.99, 0.33, -0.13, -0.95, 0, 0)"
group2.children[14].style.transform = "matrix(-0.19, -1.19, 0.96, -0.23, 0, 0)"
group2.children[15].style.transform = "matrix(0.1, -1.19, 0.96, 0.2, 0, 0)"


group3.children[0].style.transform = "matrix(0.05, -1, 1, 0.07, 0, 0)"
group3.children[1].style.transform = "matrix(0.45, -0.94, 0.83, 0.49, 0, 0)"
group3.children[2].style.transform = "matrix(0.79, -1.02, 0.4, 0.74, 0, 0)"
group3.children[3].style.transform = "matrix(0.96, -0.59, 0.22, 0.88, 0, 0)"
group3.children[4].style.transform = "matrix(1, 0.06, -0.03, 1, 0, 0)"
group3.children[5].style.transform = "matrix(0.94, 0.68, -0.25, 0.85, 0, 0)"
group3.children[6].style.transform = "matrix(0.62, 1.14, -0.51, 0.67, 0, 0)"
group3.children[7].style.transform = "matrix(0.17, 1.05, -0.88, 0.35, 0, 0)"
group3.children[8].style.transform = "matrix(-0.01, 1, -1, -0.02, 0, 0)"
group3.children[9].style.transform = "matrix(-0.28, 1.09, -0.77, -0.48, 0, 0)"
group3.children[10].style.transform = "matrix(-0.67, 1.12, -0.48, -0.69, 0, 0)"
group3.children[11].style.transform = "matrix(-0.89, 0.84, -0.32, -0.8, 0, 0)"
group3.children[12].style.transform = "matrix(-0.99, 0.33, -0.13, -0.95, 0, 0)"
group3.children[14].style.transform = "matrix(-0.19, -1.19, 0.96, -0.23, 0, 0)"
group3.children[15].style.transform = "matrix(0.1, -1.19, 0.96, 0.2, 0, 0)"