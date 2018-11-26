var tempoInicio = 0, tempoFinalBubble = 0, tempoFinalNativo = 0, tempoDecorridoBubble  = 0, tempoDecorridoNativo = 0;



var w = new Worker('worker.js');
var w2 = new Worker('worker2.js');
function gerar() {
    tempoInicio = new Date().getTime();
    var tamanho = document.getElementById("inputNumber").value;
    var array = [];
    for (var i = 0; i < tamanho; i++) {

        array[i] = randomNumber();
    }

   w.postMessage(array);
   w2.postMessage(array);
};


function randomNumber() {
    return parseInt((Math.random() * 100), 10)
}


w.addEventListener('message', function(e) {
    tempoFinalBubble = new Date().getTime();
    tempoDecorridoBubble = parseFloat(tempoFinalBubble - tempoInicio);
    console.log(tempoInicio);
    console.log(tempoFinalBubble);
    document.getElementById("tempo").innerHTML = tempoDecorridoBubble + " ms";
    console.log('Worker said: ', e.data);
}, false);



w2.addEventListener('message', function(e) {
    tempoFinalNativo = new Date().getTime();
    tempoDecorridoNativo = parseFloat(tempoFinalNativo - tempoInicio);
    console.log(tempoInicio);
    console.log(tempoFinalNativo);
    document.getElementById("tempo2").innerHTML = tempoDecorridoNativo + " ms";
    console.log('Worker said: ', e.data);
}, false);


w2.addEventListener('error', function(e){
     debugger
     });
w.addEventListener('error', function(e){
    debugger
  });