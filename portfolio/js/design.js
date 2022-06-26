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



const slideContainer = document.getElementById('slide');
const slideItems = Array.from(document.querySelectorAll("#slide li"));
const left = document.getElementsById('left');
const right = document.getElementsById('right');
let current = 0;
function displayControl(arr) {
  arr.forEach((value) => {
    let getDatasetValue = Number(value.dataset.slideItem);
    if (getDatasetValue === current) {
    value.style.display = "block";
    } else {
    value.style.display = "none";
    }
  });
}
displayControl(slideItems);
function buttonEvent(eventTrigger, targetElement) {
  eventTrigger.addEventListener('click', function () {
    if (eventTrigger === left) {
      current--;
      if (current < 0) {
        current = targetElement.length - 1;
      }
      displayControl(targetElement);
    }
    if (eventTrigger === right) {
      current++;
      if (current >= targetElement.length) {
        current = 0;
      }
      displayControl(targetElement);
    }
  });
};

buttonEvent(left, slideItems);
buttonEvent(right, slideItems);

