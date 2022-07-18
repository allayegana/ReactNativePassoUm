import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import estilo from './estilo'

export default ({ num = 0 }) => {

    return (<View>
        <Text style={estilo.testogrande}>o resultado é : </Text>
        {num % 2 === 0 
            ?<Text style={estilo.testogrande}>par</Text> 
            :<Text style={estilo.testogrande}>Impar</Text>
        }
    </View>
    )


}