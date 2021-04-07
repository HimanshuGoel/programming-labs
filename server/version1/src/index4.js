// Node.js getting started
class Person {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`hello ${this.name}`)
    }
}

class Student extends Person {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        console.log(`hello ${this.name} from ${this.level}`)
    }
}

const o1 = new Person('Max');
const o2 = new Student('Tina', '1st');
const o3 = new Student('Marry', '2nd');

o3.greet = () => console.log('I am special!')

o1.greet();
o2.greet();
o3.greet();

(async function read() {
    const data = await fetch('http://google.com');

    console.log(data.length)
})();

// using event emitter
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('TEST_EVENT', () => {
    console.log('TEST_EVENT was fired!!!')
})

myEmitter.emit('TEST_EVENT')





// working with the operating system
const os = require('os')

console.log('OS platform', os.platform())
console.log('OS CPU architecture', os.arch())
console.log('Number of CPU logical cores', os.cpus().length)
console.log('Home directory for current user', os.homedir())
console.log('line1' + os.EOL + 'line2' + os.EOL + 'line3')


