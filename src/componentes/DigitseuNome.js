import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import estilo from './estilo'

export default props => {
    const [nome, setNome] = useState('teste')
    return (
        <View >
            <Text style={estilo.testogrande}>Nome:{nome}</Text>
            <TextInput
                style={estilo.testogrande}
                placeholder='digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}