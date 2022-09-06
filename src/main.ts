

function Verificar() {

  const Hora_info: HTMLElement = document.querySelector(".Hora_info") as HTMLElement
  const Cumprimento: HTMLElement = document.querySelector(".cumprimento") as HTMLElement

  const photo: HTMLElement = document.querySelector(".photo") as HTMLElement

  const tempo: HTMLElement = document.querySelector(".tempo") as HTMLElement

  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const secunds = new Date().getSeconds()

  const img: HTMLImageElement = document.querySelector(".image") as HTMLImageElement
  
// ----------------------------------------------------------------
  
  if ((hour >= 0 && hour < 10) && (minute >= 0 && minute < 10) && (secunds >= 0 && secunds < 10)) {
    Hora_info.innerHTML = `0${hour} : 0${minute} : 0${secunds}`
    // Todos com ZERO
  }

  else if ((hour >= 10 && hour <= 23) && (minute >= 10 && minute <= 59) && (secunds >= 10 && secunds <= 59)){
    Hora_info.innerHTML = `${hour} : ${minute} : ${secunds}`
    // Todos sem ZERO
  }

  else if ((hour >= 0 && hour < 10) && (minute >= 0 && minute < 10) && (secunds >= 10 && secunds <= 59)) {
    Hora_info.innerHTML = `0${hour} : 0${minute} : ${secunds}`
    // Hora e minuto com ZERO
  }

  else if ((hour >= 0 && hour < 10) && (minute >= 10 && minute <= 59) && (secunds >= 10 && secunds <= 59)) {
    Hora_info.innerHTML = `0${hour} : ${minute} : ${secunds}`
    // Hora com ZERO
  }

  else if ((hour >= 10 && hour <= 23) && (minute >= 10 && minute <= 59) && (secunds > 0 && secunds < 10)) {
    Hora_info.innerHTML = `${hour} : ${minute} : 0${secunds}`
    // Segundo com ZERO
  }

  else if ((hour >= 10 && hour <= 23) && (minute > 0 && minute < 10) && (secunds > 0 && secunds < 10)) {
    Hora_info.innerHTML = `${hour} : 0${minute} : 0${secunds}`
    // Minuto e segundo com ZERO
  }

  else if ((hour >= 10 && hour <= 23) && (minute > 0 && minute < 10) && (secunds >= 10 && secunds <= 59)) {
    Hora_info.innerHTML = `${hour} : 0${minute} : ${secunds}`
    // Minuto com ZERO
  }
// -----------------------------------------------------------------

  if (hour >= 0 && hour < 6) {
    Cumprimento.innerHTML = "Boa Madrugada"
    // Boa madrugada

  }
  
  else if (hour >= 6 && hour < 12) {
    Cumprimento.innerHTML = "Bom Dia"
    img.src = "fotos/manha.jpg"
    // Bom dia
    document.body.style.background = "#e2cd9f"
    photo.style.borderColor = "#e2cd9f" 
  }
  
  else if (hour >= 12 && hour < 18) {
    Cumprimento.innerHTML = "Boa Tarde"
    img.src = "fotos/tarde.jpg"
    // Boa tarde
    document.body.style.background = "#b9846f"
    photo.style.borderColor = "#b9846f"
  }
  
  else if (hour >= 18 && hour < 24) {
    Cumprimento.innerHTML = "Boa Noite"
    img.src = "fotos/noite.jpg"
    // Boa noite
    document.body.style.background = "#515154"
    photo.style.borderColor = "#515154"
  }

  
}




setInterval(Verificar)
