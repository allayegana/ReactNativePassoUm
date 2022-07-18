import React, { useState } from 'react'
import { Button, Text, View ,StyleSheet} from 'react-native'
import estilo from '../estilo'

export default props => {
    return (
        <View style={couleur.Display}>
            <Text style={[estilo.testogrande,couleur.DisplayCouleur]}>
                {props.num}
            </Text>
        </View>
    )
}


const couleur = StyleSheet.create({
    Display:{
        backgroundColor:'#000',
        padding:20,
        width:300
    },
    DisplayCouleur:{
        color:'#fff'
    }
})