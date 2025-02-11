const progress = document.querySelector('.progress-bar');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const step = document.querySelectorAll('.step');

let currentActive = 1;

next.addEventListener('click',() => {
    console.log("Next button clicked!"); // Kiểm tra sự kiện có chạy không
    currentActive++;
    if(currentActive > step.length){
        currentActive = step.length;
    }

    updated();
})

prev.addEventListener('click',() => {
    console.log("Prev button clicked!");
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }

    updated();
})

function updated(){
    step.forEach((step, index) => {
        if(index < currentActive){
            step.classList.add('active');
        }else{
            step.classList.remove('active');
        }
    })
}