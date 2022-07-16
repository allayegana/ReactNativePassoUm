import React from "react";
import { Text, View } from "react-native";
import estilo from "./estilo";

export default function comp() {
    return (
        <View>
            <Text style={estilo.testogrande}> Compo oficial </Text>
            <Text style={estilo.testogrande}> Compo #01 </Text>
            <Text style={estilo.testogrande}> Compo #02 </Text>
        </View>
        )
}

