const EventEmitter = require('events');

class Gym extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('boom');
    }, 1000);
  }
}

const gym = new Gym();
gym.on('boom', () => {
  console.log('Athelete is working out');
});
