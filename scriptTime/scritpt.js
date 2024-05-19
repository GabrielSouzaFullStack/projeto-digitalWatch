const horasElement = document.getElementById('horas');
const minutosElement = document.getElementById('minutos');
const segundosElement = document.getElementById('segundos');

function clockTime(){
    var date  = new Date();

    const horas = date.getHours();
    const minutos = date.getMinutes();
    const segundos = date.getSeconds();

    horasElement.textContent = fixTime(horas);
    minutosElement.textContent = fixTime(minutos);
    segundosElement.textContent = fixTime(segundos);
}

function fixTime(time){
    return time < 10 ? '0' +  time : time;
}

setInterval(clockTime, 1000)
console.log(date)