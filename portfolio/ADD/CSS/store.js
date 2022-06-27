const next = document.querySelector('.next')
console.dir(next)

const previous = document.querySelector('.previous')
console.dir(previous)

const food1 = document.querySelector('.food')
const food2 = document.querySelector('.food-buy')
console.log(food1)
console.log(food2)

next.addEventListener('click', function(){
  if(food1.classList.contains('on')){
  }
  else{food1.classList.add('on')}
})



