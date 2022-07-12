the purpose of this project is to create a parser
a parser consists of a tokeniser(lexer) that generates the tokens that are then used for defining the
grammar of the language and generating the Abstract Syntax Tree(AST) by the real parser.

tokeniser ======>>>>>>> tokens
real parser ======>>>>>>>> Abstract Syntax Tree

some people want to regular expressions for parsing a programming language, but it is not always the right choice
we can use the regular expressions for the tokeniser module but for the actual parsing to generate the AST, we use the
Backus-Naur Form (BNF)
The BNF is used to describe the syntax and grammar of languages.

we shall be expressing our AST as a JSON document

we are using the "recursive decent parsing" approach