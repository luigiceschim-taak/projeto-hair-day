import { apiConfig } from "./api-config.js"

export async function scheduleCancel({id}){
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`,{
            method:"DELETE",
        })
        

    } catch (error) {
        console.log(error)
        alert("nao foi possivel cancelar o agendamento, entre em contato.")
    }
}