import { hoursLoad } from "../form/hours-load.js"
import { fetchByDay } from "../../services/schedule-fetchByDay.js"
import { schedulesShow } from "./show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay(){
    const date = selectedDate.value

    const dailySchedules = await fetchByDay({date})

    //exibe os agendamentos

    schedulesShow({dailySchedules})


    // renderiza as horas disponiveis
    hoursLoad({date, dailySchedules})
   




}