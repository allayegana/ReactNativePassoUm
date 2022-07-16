import React from "react";
import { View, StyleSheet} from 'react-native'
//import Primeiro from "./componentes/primeiro";
//import ComponentesPadrao from "./componentes/Multi"
//import MinMax from "./componentes/MinMax";
//import Aleatorio from "./componentes/aleatorio";
//import Titulo from "./componentes/Titulo";
//import Botao from "./componentes/Botao";
import Contador from "./componentes/contador";


export default function App(){
  return (
  <View style={style.App}>
    <Contador inicial={100} passo={15}/>
    <Contador />

   {/*
    <Botao />
    <Titulo principal="Cadastro de Produto"
           segundario="Tela de casdatro" />
   <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
    <Aleatorio  min={1} max={60}/>
   <ComponentesPadrao/>
    <Primeiro />
    <MinMax min={3} max={30}/>
    <MinMax min={1} max={70}/>*/}
  </View>
  )
}

const style = StyleSheet.create({
    App: {
      flexGrow: 1,
      justifyContent:'center',
      alignItems:'center',
      padding: 20


    }
})


