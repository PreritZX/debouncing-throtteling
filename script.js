let count = 0;

function work() {
  console.log("Network Request : ", count);
  count++;
}


// DEBOUNCING

function debounce(work, delay){

    let timerID ;

    return function optWorkFunc(){

        clearTimeout(timerID)
        timerID = setTimeout(function(){
            work()
        },delay)
    }

}


//THROTTELING

function throttle(work, delay) {
    let flag = true // work fn will work
    return function optWorkFn() {

        if (flag === true) {
            work()
            flag = false

            setTimeout(function () {
                flag = true
            }, delay)
        }

    }
}

let optimizedFunction = throttle(work, 3000)


let input = document.querySelector("input");
input.addEventListener("keydown", optimizedFunction);