/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log('Worker: Mensaje recibido del hilo principal:', data);

  const inputNumber = data.numberToProcess;
  let result = 0;

  for (let i = 0; i < inputNumber * 100000000; i++) {
    result += Math.sqrt(i) * Math.sin(i);
  }
  // ---------------------------------

  console.log('Worker: Enviando resultado al hilo principal...');
  postMessage({ result: result, originalInput: inputNumber });
});
