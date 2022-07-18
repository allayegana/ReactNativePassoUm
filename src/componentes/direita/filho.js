import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import estilo from '../estilo'

export default props => {
    let x = 13
    let y = 100
        return (
            <>
               <Text a  style={estilo.testogrande}>{props.a}</Text>
               <Text style={estilo.testogrande}>{props.b}</Text>
               </>

                )
}