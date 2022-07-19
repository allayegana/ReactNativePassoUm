import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={style.FlexBoxV4}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexBoxV4: {
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',

    },
    V0: {
        height: 300,
        backgroundColor: '#36c9a7'
    },

    V1: {
        flexGrow: 9,
        backgroundColor: '#ff801a'
    },

    V2: {
        flexGrow: 1,
        backgroundColor: '#dd22c1'
    }
})
