import React, { useState } from "react";
import { Button, Text } from "react-native";
import estilo from "./estilo";

export default function( {inicial=0, passo=5} ){

   // let numero = props.inicial
   const [numero,setNumero] = useState(inicial)

    const inic = () => setNumero(numero + passo )
    
    const desc = () => setNumero(numero -passo )

    return(
          <>
          <Text style={estilo.testogrande}>{numero}</Text>
          <Button title="+" onPress={inic}/>
          <Button title="-" onPress={desc}/>

          </>
    )

}