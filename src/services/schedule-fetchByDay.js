import { apiConfig } from "./api-config.js"
import dayjs from "dayjs"

export async function fetchByDay({date}){
    try{
        const url = `${apiConfig.baseUrl}/schedules`
        const response = await fetch(url)
        const data = await response.json()

        const dailySchedules = data.filter((schedules) => dayjs(date).isSame(schedules.when, 'day'))
        
        
        return dailySchedules
    } catch (error) {
        console.log(error)
        alert("nao foi possivel buscar os agendamentos, entre em contato.")
    }
}