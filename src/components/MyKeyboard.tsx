import * as React from "react";
import Button from "./Button";
import { View,Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";


export default function MyKeyBoard(){
    const [firstNumber,setFirstNumber] = React.useState("");
    const [secondNumber,setSecondNumber] = React.useState("");
    const [operation,setOperation] = React.useState("");
    const [result,setResult] = React.useState<Number | null>(null);
    
    return(
        // if(firstNumber.length < 10)

    )
}