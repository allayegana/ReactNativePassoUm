import React, { useState } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.Botao}>
            <Button title='+' onPress={props.inc} />
            <Button title='-' onPress={props.dec} />
        </View>
    )
}


const style = StyleSheet.create({
    Botao:{
        flexDirection:'row',
        padding: 10
       
    },
    marp:{
        margin:10,
    }
})