import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Filho from './filho'

export default props => {
    let x = 15
    let y = 200
    return (
        <>
            <Filho a={x} b={y} />
            <Filho a= {x + 100} b= {y + 200} />
        </>
    )
}