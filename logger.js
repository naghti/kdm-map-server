const pino = require("pino")
const fs = require('fs');
const path = require("path")


const pathToLogg = path.resolve(__dirname, "logs.txt")
const logStream = fs.createWriteStream(pathToLogg, { flags: 'a' });
const foo = pino(logStream);

const logger = (message, type) => {
    if (type == "error") {
        foo.error(["error:",message])
    } else {
        foo.info(message)
    }
}

module.exports = logger