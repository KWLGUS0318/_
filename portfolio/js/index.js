const enter = document.querySelector('.button')
console.log(enter)

enter.addEventListener('click', function(){
  let page = './index2.html'
  location.href = page;
});