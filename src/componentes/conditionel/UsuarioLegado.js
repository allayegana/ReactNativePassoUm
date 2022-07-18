import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import estilo from '../estilo'
import If from './If'

export default props => {
    const USUARIO = props.USUARIO || {}
    return (
        <>
            <If teste={USUARIO && USUARIO.nome && USUARIO.email}>
                <Text style={estilo.testogrande}>USUARIO Logado é : </Text>
                <Text style={estilo.testogrande}> {USUARIO.nome} - {USUARIO.email}</Text>
            </If>
        </>
    )
}