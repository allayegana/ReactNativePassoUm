import React from 'react'
import { Platform, Text, View } from 'react-native'
import estilo from './estilo'

export default _ => {

    return (<View>
        {Platform.OS === 'android'
            ? <Text style={estilo.testogrande}> Android</Text>
            : <Text style={estilo.testogrande}> EITA !!!</Text>

        }
    </View>)
}