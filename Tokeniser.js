// this is the tokeniser
// lazily pulls a token from the stream

class Tokeniser {
    // initialises the string
    init(string) {
        this._string = string
        this._cursor = 0
    }

    //whether the tokeniser has reached the end of the file
    isEOF() {
        return this._cursor === this._string.length
    }

    hasMoreTokens() {
        return this._cursor < this._string.length
    }

    //obtains the next token
    getNextToken() {
        if (!this.hasMoreTokens()) {
            return null
        }

        const string = this._string.slice(this._cursor)
        if (!Number.isNaN(Number(string[0]))) {
            let number = ''
            while (!Number.isNaN(Number(string[this._cursor]))) {
                number += string[this._cursor++]
            }

            return {
                type: 'NUMBER',
                value: number,
            }
        }

        //String tokens
        if (string[0] === `"`) {
            let s = ""
            do {
                s += string[this._cursor++]
            } while (string[this._cursor] !== `"` && !this.isEOF())
            s += this._cursor++ //skip
                return {
                    type: 'STRING',
                    value: s
                }
        }

        return null
    }
}

module.exports = {
    Tokeniser,
}