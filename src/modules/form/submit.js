import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// configura data atual e minima
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
    // previne comportamento padrao de recarregamento da pagina
    event.preventDefault()
try {

    const name = clientName.value.trim()

    if(!name)alert("Selecione um horario.")

    const hourSelected = document.querySelector(".hour-selected")
    
    if(!hourSelected)alert("Selecione um horario.")

    const [hour] = hourSelected.innerText.split(":")

    const when = dayjs(selectedDate.value).add(hour,"hour")
     
    const id = new Date().getTime()


    console.log({id, name, when})



    
    


    
} catch (error) {
    alert("nao foi possivel realizar o agendamento, entre em contato.")
    
}    


}