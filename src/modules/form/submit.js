import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// configura data atual e minima
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = (event) => {
    // previne comportamento padrao de recarregamento da pagina
    event.preventDefault()

    console.log("ENVIADO")   


}