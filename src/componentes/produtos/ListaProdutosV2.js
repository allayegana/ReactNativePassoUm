import React, { useState } from 'react'
import { Button, FlatList, Text } from 'react-native'
import estilo from '../estilo'
import produtos from './produtos'

export default props => {

    const gerarListaProdutos = ({ item: p }) => {
        return <Text style={estilo.testoPequeno}>
            {p.id}) {p.nome} tem preco R$ : {p.preco}
        </Text>
    }

    return (
        <>
            <Text style={estilo.testogrande}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={i => `${i.id}`}
                renderItem={gerarListaProdutos}


            />
        </>
    )
}