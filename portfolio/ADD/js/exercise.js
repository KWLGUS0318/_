const foodSection = document.querySelector('.food-section')
console.log(foodSection)

const write = document.querySelector('.write')
console.log(write)

foodSection.addEventListener('click', function(){
if(write.classList.contains('on')){
  write.classList.remove('write')
}
else{write.classList.add('on')}
})