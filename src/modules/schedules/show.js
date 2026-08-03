import dayjs from "dayjs"


const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export async function schedulesShow({dailySchedules}){
    try {
        periodMorning.innerHTML = ''
        periodAfternoon.innerHTML = ''
        periodNight.innerHTML = ''

        dailySchedules.forEach((schedule) => {
            const li = document.createElement("li")
            const span = document.createElement("span")
            const strong = document.createElement("strong")
            const img = document.createElement("img")

            li.setAttribute("data-id", schedule.id)

            const hour = dayjs(schedule.when).format("HH:mm")

            strong.textContent = hour
            span.textContent = schedule.name
            img.src = "./src/assets/cancel.svg"
            img.alt = "Cancelar"
            img.classList.add("cancel-icon")

            li.append(strong, span, img)

            if(hour <= "12:00"){
                periodMorning.append(li)
            } else if(hour <= "18:00"){
                periodAfternoon.append(li)
            } else {
                periodNight.append(li)
            }
        })
        
    } catch (error) {
        console.log(error)
        alert("Não foi possível exibir os agendamentos, entre em contato.")
    }
}