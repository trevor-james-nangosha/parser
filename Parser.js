const { Tokeniser } = require('./Tokeniser')

class Parser {
    //initialises the parser
    constructor() {
        this._string = ''
        this._tokeniser = new Tokeniser()
    }

    //this is the main API of the class it parses a string into an AST
    parse(string) {
        this._string = string
        this._tokeniser.init(string)
        
        // the lookahead is used for predictive parsing
        this._lookahead = this._tokeniser.getNextToken()

        return this.Program()
    }

    //this is the main entry point
    Program() {
        return {
            type: 'Program',
            body: this.Literal()
        }
    }

    // Literal(these are the types of literals that we are able to parse.)
    // NumericLiteral
    // StringLiteral
    Literal() {
        switch (this._lookahead.type) {
            case 'NUMBER':
                return this.NumericLiteral()
            case 'STRING':
                return this.StringLiteral()
        }
        throw new SyntaxError(`Literal: Unexpected literal production`)
    }

    NumericLiteral() {
        const token = this._eat('NUMBER')
        return {
            Type: 'NumericLiteral',
            value: Number(token.value)
        }
    }

    StringLiteral() {
        const token = this._eat('STRING')
        return {
            Type: 'StringLiteral',
            value: token.value.slice(1, -1)
        }
    }

    //expects a token of a given type
    _eat(tokenType) {
        const token = this._lookahead
        if (token === null) {
            throw new SyntaxError(`Unexpected end of input, expected; "${tokenType}"`)
        }

        if (token.type !== tokenType) {
            throw new SyntaxError(`Unexpected token: "${token.value}", expected: "${tokenType}"`)
        }

        //advance to the next token
        this._lookahead = this._tokeniser.getNextToken()

        return token;
    }

}

module.exports = {
    Parser,
}