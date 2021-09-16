const preloader = document.querySelector('.preloader');
const loadingText = document.querySelector('.loading-txt');

let load = 0;
let int = setInterval(disappear, 30);

function disappear() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    preloader.style.opacity = scale(load, 0, 100, 1, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}


//today was a good day
//nothing done today
//nothing done today
//nothing done today
//nothing done today
//nothing done today
//nothing today
//nothing today
//nothing today
//nothing today
//nothing today