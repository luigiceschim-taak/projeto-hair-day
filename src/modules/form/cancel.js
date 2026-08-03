const periods = document.querySelectorAll(".period")
import { apiConfig } from "../../services/api-config.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
import { schedulesDay } from "../schedules/load.js"

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            const li = event.target.closest("li")
            const {id} = li.dataset
            const confirmCancel = confirm("Deseja realmente cancelar este agendamento?")

            if(confirmCancel){
                await scheduleCancel({id})
                schedulesDay()
            }   
        }
    })

})