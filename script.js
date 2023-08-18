const bar = document.getElementById('bar');
const nav=document.getElementById('navbar');
const closeBtn = document.querySelector('.close')  
const actBtns = document.querySelectorAll('.tab');
console.log(actBtns)
if (bar){
    bar.addEventListener('click', () => {
      nav.classList.add('active');
    });
}
closeBtn.addEventListener('click', () => {
    nav.classList.remove('active')
})

