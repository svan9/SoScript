import { Buffer } from "node:buffer"
import { readFileSync } from "node:fs"

import * as antlr from "antlr4ts";

import { sosLexer } from "./antlr/sosLexer"
import { sosParser } from "./antlr/sosParser"

const path: string = "E:/sosou/GITHUB/SoScript/docs/example.sos"

const input: string = readFileSync(path).toString();

const lexer = new sosLexer(antlr.CharStreams.fromString(input));
const tokenStream = new antlr.CommonTokenStream(lexer);
const parser = new sosParser(tokenStream);

const tree = parser.program();