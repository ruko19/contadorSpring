import { endDate } from "./variables.js";
import { now } from "./variables.js";


const contador = () => {


    const diferencia = endDate - now;

    const segundos = 1000
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;


    let tiempoDias = Math.floor(diferencia / dias);
    let tiempoHoras = Math.floor((diferencia % dias) / horas);
    let tiempoMinutos = Math.floor((diferencia % horas) / minutos);
    let tiempoSegundos = Math.floor((diferencia % minutos) / segundos);


    tiempoHoras = tiempoHoras < 10 ? "0" + tiempoHoras : tiempoHoras;
    tiempoMinutos = tiempoMinutos < 10 ? "0" + tiempoMinutos : tiempoMinutos;
    tiempoSegundos = tiempoSegundos < 10 ? "0" + tiempoSegundos : tiempoSegundos;

    document.getElementById('dias').innerHTML = tiempoDias
    document.getElementById('horas').innerHTML = tiempoHoras
    document.getElementById('minutos').innerHTML = tiempoMinutos
    document.getElementById('segundos').innerHTML = tiempoSegundos


}




export default contador