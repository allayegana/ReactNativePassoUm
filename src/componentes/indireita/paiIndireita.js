import React, {useState} from "react"
import { Text } from "react-native"
import estilo from '../estilo'
import Filhos from "./Filhos"

export default function (props){
    const[num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }
    return (
        <>
            <Text style={estilo.testogrande}>{ num }</Text>
            <Filhos
                min={1}
                max={70}
                funcao={exibirValor}
            />
        </>
    )
}