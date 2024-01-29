import { Buffer } from "node:buffer"
import { readFileSync } from "node:fs"

import * as antlr from "antlr4ts";

import { sosLexer } from "./antlr/sosLexer"
import { sosParser } from "./antlr/sosParser"
import Visitor from "./Visitor";

// const path: string = "E:/sosou/GITHUB/SoScript/docs/example.sos"

// const input: string = readFileSync(path).toString();

// const input = ` int get_age = (Object& linked_object) -> {
//   linked_object.age // returned
// };`
const input = ` int get_age = 10;`

const lexer = new sosLexer(antlr.CharStreams.fromString(input));
const tokenStream = new antlr.CommonTokenStream(lexer);
const parser = new sosParser(tokenStream);
const visitor = new Visitor();

const tree = parser.program();
visitor.visit(tree);


// console.log(tree);