import React from "react";
import { Button } from "react-native";

export default function(props){

    function executar(){
        console.warn("Exec !!! Allaye ")
    }
    return (
        <>
        <Button  title="Executar"
        onPress={executar}/>

          <Button  title="Executar"
        onPress={function(){
            console.warn("exec !!!! 02")
        }}/>
        
          <Button  title="Executar"
        onPress={() => console.warn("exec !!! 03")}/>
        </>
    )
}