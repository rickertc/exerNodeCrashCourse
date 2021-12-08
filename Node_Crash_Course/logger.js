const  EventEmitter = require('events');
const uuid = require('uuid');
const { __esModule } = require('uuid/dist/v1');

class Logger extends EventEmitter {
    log(msg) {
        //call event
        this.emit('message', { id: uuid.v4(), msg});
    }
}

module.export = Logger;
