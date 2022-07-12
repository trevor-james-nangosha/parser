const { Parser } = require('./Parser')
const parser = new Parser()

const program = '43'
const ast = parser.parse(program)
console.log(JSON.stringify(ast, null, 4))