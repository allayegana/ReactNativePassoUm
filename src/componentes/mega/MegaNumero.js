import React, { useState } from 'react'
import { Button, Text, StyleSheet, View } from 'react-native'
import estilo from '../estilo'

export default ({num}) => {
    return (
        <View>
            <Text style={style.container}>
                <Text style={[estilo.testogrande, style.Num]}>
                  {num}
                </Text>

            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin:5,
        borderRadius:25,
    },
    Num: {
        color: '#fff'
    }
})