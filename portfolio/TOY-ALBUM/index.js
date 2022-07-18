const root = document.getElementById('root')
console.log(root)

window.addEventListener('wheel', ()=>{
root.offsetLeft++
})