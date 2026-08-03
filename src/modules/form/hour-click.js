export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available')

    hours.forEach((available) =>{
        available.addEventListener("click", (selected) =>{
            const clicked = event.target.closest(".hour-available")
            
            hours.forEach((hour) => {
                hour.classList.remove('hour-selected')
            })
            clicked.classList.add("hour-selected")

        })
    })
}