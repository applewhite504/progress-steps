//Set variables for 4 elements
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

//set variable for currently active circle
let currentActive = 1

//add event listener that increments active
    next.addEventListener('click', () => {
        currentActive++

        //set boundaries using length - can not go past 4
        if(currentActive > circles.length) {
            currentActive = circles.length
        }

        //call function that is below
        update()

    })

    //same as above boundaries for prev decrementing not incrementing
    prev.addEventListener('click', () => {
        currentActive--

        //set boundaries using length - can not go past 4
        if(currentActive < 1) {
            currentActive = 1
        }

        //call function that is below
        update()

    })

//create function to loop thru index
    function update() {
        circles.forEach((circle, idx) => {
            if(idx < currentActive) {
                circle.classList.add('active')
            } else {
                circle.classList.remove('active')
            }
        })

        //get all the circles
        const actives = document.querySelectorAll('.active')

        //make the line between the circles active(blue)
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
    }


    //if user is at first step, prev should be disabled
    //if user is at last step, next should be disabled
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}


