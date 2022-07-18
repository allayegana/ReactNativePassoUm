import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import estilo from '../estilo'
import produtos from './produtos'

export default props => {
    function obterListaProdutos() {
        return produtos.map(p => {
            return (
                <Text key={p.id} style={estilo.testoPequeno}>
                    {p.id}) {p.nome} tem preco R$ : {p.preco}
                </Text>
            )
        })
    }

    return (
        <>
            <Text style={estilo.testogrande}>
                Lista de Produtos 
                </Text>
            {obterListaProdutos()}
        </>
    )
}