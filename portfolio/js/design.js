const root = document.querySelector('#root');
console.log(root)

const sections = document.querySelectorAll('#root>section')
console.log(sections)


console.dir(root);

console.dir(sections[0]);

let heightValue = 0; 

window.addEventListener('click', function () {
heightValue = heightValue + sections[0].offsetHeight;
console.log(heightValue);

window.scrollTo({
  top: heightValue,
  behavior: "smooth" //동작 
})
if (heightValue >= root.offsetHeight) { 
  heightValue = 0;
}
})

window.confirm('천천히 보고 싶으시다면 바탕을 눌러주세요~!')