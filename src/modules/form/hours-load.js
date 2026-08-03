import {openingHours} from "../../utils/opening-hours.js"
import { hoursClick } from "./hour-click.js"
import dayjs from "dayjs"


const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}){

    hours.innerHTML = ''
    
    const unavailable = dailySchedules.map((scheduled) => dayjs(scheduled.when).format("HH:mm"))
    console.log(unavailable)

    const opening = openingHours.map((hour) => {

        
        const [scheduledHour] = hour.split(":");

        const isHourPast = dayjs(date).add(scheduledHour, "hour" ).isBefore(dayjs());

        const available = !unavailable.includes(hour) && !isHourPast

        console.log(`Hora: ${hour} | Disponível: ${available} | Passou: ${isHourPast}`)

        return {
            hour,
            available:available
            }
        })

        
        opening.forEach( ({hour, available}) =>{
            const li = document.createElement("li")
            li.classList.add("hour")
            li.classList.add( available ? "hour-available" : "hour-unavailable")
            li.textContent = hour

            

            if(hour === "9:00"){hourHeaderAdd("Manhã")}
            else if(hour === "13:00"){hourHeaderAdd("Tarde")}
            else if(hour === "18:00"){hourHeaderAdd("Noite")}
            hours.append(li)

            

            
            

            

        })

        hoursClick()

}

function hourHeaderAdd(title){
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title
    hours.append(header)

}