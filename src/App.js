import React from "react";
import { StyleSheet, SafeAreaView } from 'react-native';
import Mega from "./componentes/mega/Mega";
//import FlexBoxV4 from "./componentes/layout/FlexBoxV4";
//import FlexBoxV3 from "./componentes/layout/FlexBoxV3";
//import FlexBoxV2 from "./componentes/layout/FlexBoxV2";
//import Flexbox from "./componentes/layout/Flexbox";
//import Quadrado from "./componentes/layout/Quadrado";
//import DigitseuNome from "./componentes/DigitseuNome";
//import ListaProdutosV2 from "./componentes/produtos/ListaProdutosV2";
//import If from "./componentes/conditionel/If";
//import UsuarioLegado from "./componentes/conditionel/UsuarioLegado";
//import Primeiro from "./componentes/primeiro";
//import ComponentesPadrao from "./componentes/Multi"
//import MinMax from "./componentes/MinMax";
//import Aleatorio from "./componentes/aleatorio";
//import Titulo from "./componentes/Titulo";
//import Botao from "./componentes/Botao";
//import Contador from "./componentes/contador";
//import Pais from "./componentes/direita/pai";
//import Filhos from "./componentes/indireita/Filhos";
//import ContadorV2 from "./componentes/contador/contadorV2";
//import Diferencia from "./componentes/diferencia";
//import ParImpar from "./componentes/parImpar";
//import Familia from "./componentes/relacao/Familia"
//import Membro from "./componentes/relacao/Membro"


export default function App() {
  return (
    <SafeAreaView style={style.App}>
      <Mega qtde={12}/>
      {/*
      <FlexBoxV4 />
      <FlexBoxV3 />
      <FlexBoxV2 />
    <Flexbox />
      <DigitseuNome />
      <ListaProdutosV2 />
       <UsuarioLegado USUARIO={{nome:'ALLAYE' , email:'allaye.gana@gmail.com'}}></UsuarioLegado>
      <UsuarioLegado USUARIO={{email:'allaye.gana@gmail.com'}}></UsuarioLegado>
      <UsuarioLegado USUARIO={{}}></UsuarioLegado>
      <UsuarioLegado USUARIO={null}></UsuarioLegado>
      <UsuarioLegado USUARIO={{nome:'yacou' , email:'yacou@gmail.com'}}></UsuarioLegado>
         <Familia>
        <Membro nome="IBRAHIM" sobrenome="GANA" />
        <Membro nome="ALI" sobrenome="GANA" />
        <Membro nome="MAHAMA" sobrenome="GANA" />
        <Membro nome="YACOU" sobrenome="GANA" />
        <Membro nome="MOUSSA" sobrenome="GANA" />
        <Membro nome="MADOU" sobrenome="GANA" />
        <Membro nome="ALLAYE" sobrenome="GANA" />
      </Familia>
    <ParImpar num={2} />
   <Diferencia/>
   <ContadorV2 />
    <Filhos />
   <Pais />
    <Contador inicial={100} passo={15}/>
    <Contador />
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
    <MinMax min={1} max={70}/>
    */}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20


  }
})


