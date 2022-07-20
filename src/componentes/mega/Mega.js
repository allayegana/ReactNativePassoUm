import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import estilo from '../estilo'
import MegaNumero from "./MegaNumero";

export default class Mega extends Component {

    state = {
        quantidadeNumero: this.props.qtde,
        numeros: []
    }

    // constructor(props){
    //     super(props)
    //     this.alterarQuantidadeNumero = this.alterarQuantidadeNumero.bind(this)
    //}

    alterarQuantidadeNumero = (qtde) => {
        this.setState({ quantidadeNumero: +qtde })
    }

    geraNumroNaocontido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.geraNumroNaocontido(nums) : novo
    }

    geraNumero = () => {
        const numeros = Array(this.state.quantidadeNumero)
            .fill()
            .reduce(n => [...n, this.geraNumroNaocontido(n)], [])
            .sort((a, b) => b - a)
        this.setState({ numeros })
    }

    // pode ser de abaixo  ou de cima tem que escolhei sua preferencia 



    //   geraNumero = () => {
    //     const { quantidadeNumero } = this.state
    //   const numeros = []
    /// for (let i = 0; i < quantidadeNumero; i++) {
    //            const n = this.geraNumroNaocontido(numeros)
    //            numeros.push(n)
    //        }
    //        numeros.sort((a, b) => b - a)
    //        this.setState({ numeros })
    //    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(n => {
            return <MegaNumero key={n} num={n} />
        })
    }


    render() {
        return (
            <>
                <Text style={estilo.testogrande}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={[estilo.testoPequeno,{ 
                        borderWidth: 1,
                        backgroundColor:'#A9A9A9',
                        color:'#000',
                        marginBottom:20
                     }]}
                    placeholder="quandade de numeros"
                    value={`${this.state.quantidadeNumero}`}
                    onChangeText={this.alterarQuantidadeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.geraNumero}
                />
                <View style={{
                    flexDirection:'row',
                    flexWrap:'wrap',
                    justifyContent:'center',
                    marginTop:20
                }}>
                    {this.exibirNumeros()}
                    </View>
            </>
        )
    }
}