const { Parser } = require('./Parser')
const parser = new Parser()

const program = `
//comment
77
/**
 * 
 *documentation comment
*/
`
const ast = parser.parse(program)
console.log(JSON.stringify(ast, null, 4))