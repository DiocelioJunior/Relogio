// define uma função para exibir a hora atual
function showTime() {
    // obtém os elementos HTML para as horas, minutos e segundos
    const getHours = document.getElementById('hours');
    const getMinutes = document.getElementById('minutes');
    const getSeconds = document.getElementById('seconds');
  
    // cria um novo objeto Date com a hora atual do sistema
    let date = new Date();
  
    // obtém as horas, minutos e segundos atuais do objeto Date
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    // verifica se a hora é menor do que 10 e, se for, adiciona um "0" à frente
    if (hours < 10) {
      hours = "0" + hours;
    }
  
    // verifica se o minuto é menor do que 10 e, se for, adiciona um "0" à frente
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    // verifica se o segundo é menor do que 10 e, se for, adiciona um "0" à frente
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    // atualiza os elementos HTML com as horas, minutos e segundos formatados
    getHours.innerText = hours;
    getMinutes.innerText = minutes;
    getSeconds.innerText = seconds;
  }
  
  // chama a função showTime() a cada 1000 milissegundos (1 segundo)
  setInterval(showTime, 1000);

