const root = document.querySelector('#root');
console.log(root)

const sections = document.querySelectorAll('#root>section')
console.log(sections)


console.dir(root);
console.log("현재 이 문서의 전체 높이값은" + root.offsetHeight);
// 전체 높이에 root의 offsetHight 갑을 더하자

console.dir(sections[0]);

console.log("section 태그 하나의 높이값은" + sections[0].offsetHeight);
// section 0번째에 offsetHeight 값에 section 높이값 

console.log(window.scrollY);

let heightValue = 0; //주요 알고리즘 1

window.addEventListener('click', function () {
  heightValue = heightValue + sections[0].offsetHeight;
  //heightValue = "섹션의 높이값만큼을 height 벨류에 대입해줘"
  console.log(heightValue);

  window.scrollTo({
    top: heightValue,
    behavior: "smooth" //동작 
  })
  if (heightValue >= root.offsetHeight) { //주요 알고리즘 2
    heightValue = 0;
  }
})