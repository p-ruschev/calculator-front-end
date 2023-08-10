import { Button } from "../models/button.model";

export const buttons: Button[] = [
    {
        type: "backspace",
        symbol: "",
        value: "",
        icon: "backspace"
    },
    {
        type: "all-clear",
        symbol: "AC",
        value: ""
    },
    {
        type: "group-start",
        symbol: "(",
        value: "("
    },
    {
        type: "group-end",
        symbol: ")",
        value: ")"
    },
    {
        type: "function",
        symbol: "",
        value: "",
    },
    {
        type: "operand",
        symbol: "7",
        value: "7"
    },
    {
        type: "operand",
        symbol: "8",
        value: "8"
    },
    {
        type: "operand",
        symbol: "9",
        value: "9"
    },
    {
        type: "operator",
        symbol: "\u00f7",
        value: "/"
    },
    {
        type: "sqrt",
        symbol: "\u221a(",
        value: "Math.sqrt(",
        isActive: false
    },
    {
        type: "operand",
        symbol: "4",
        value: "4"
    },
    {
        type: "operand",
        symbol: "5",
        value: "5"
    },
    {
        type: "operand",
        symbol: "6",
        value: "6"
    },
    {
        type: "operator",
        symbol: "&#215;",
        value: "*"
    },
    {
        type: "power",
        symbol: "",
        value: "**",
        isActive: false
    },
    {
        type: "operand",
        symbol: "1",
        value: "1"
    },
    {
        type: "operand",
        symbol: "2",
        value: "2"
    },
    {
        type: "operand",
        symbol: "3",
        value: "3"
    },
    {
        type: "operator",
        symbol: "-",
        value: "-"
    },
    {
        type: "operand",
        symbol: "0",
        value: "0"
    },
    {
        type: "operand",
        symbol: ".",
        value: "."
    },
    {
        type: "pi",
        symbol: "\u03c0",
        value: "Math.PI"
    },
    {
        type: "operator",
        symbol: "+",
        value: "+"
    },
    {
        type: "return",
        symbol: "=",
        value: "="
    },
];