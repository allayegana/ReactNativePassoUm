import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import estilo from '../estilo'
import ContadorDisplay from './contadorDisplay'
import ContadorBotao from '../contadorBotao'

export default props => {
    const [num, setNum] = useState(0)
    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)


    return (
        <>
            <Text style={estilo.testogrande}>ContadorV2</Text>
            <ContadorDisplay num={num} />
            <ContadorBotao inc={inc} dec={dec} />

        </>

    )
}