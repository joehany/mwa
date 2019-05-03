const os = require('os');
const { Observable } = require('rxjs');

const checkSystem = Observable.create(observer => {
  const slowProcessor = os.cpus().length < 2;
  const lowMemory = (os.totalmem / +1e9) < 4;

  observer.next('Checking your system...');

  if(slowProcessor)
    observer.next('Processor is not supported');
  if(lowMemory) {
    observer.next('This app needs at least 4 GB of RAM');      
  }
  if(!slowProcessor && !lowMemory) {
    observer.next('System is checked successfully.');            
  }
  observer.complete();
});

checkSystem.subscribe(console.log);

