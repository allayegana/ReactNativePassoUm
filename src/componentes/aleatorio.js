import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";

export default function({min,max}){
    const delta = max - min + 1
    const Aleatorio = parseInt(Math.random() * delta) + min

    return(
        <View>
            <Text style={estilo.testogrande}>O valor Aleatorio é : {Aleatorio}</Text>
        </View>
    )
}