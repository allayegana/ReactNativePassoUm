import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";

export default function (props) {
    console.warn(props)
    return (
        <View>
            <Text style={estilo.testogrande}>
                O valor X {props.max} é Maior que Y {props.min} !!!
            </Text>
        </View>
    )
}