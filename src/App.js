import React, { Component } from "react";
import styled from 'styled-components';

const Div = styled.div`
height: 100vh;
width:100%;
background-color:pink;
display:flex;
flex-direction: column;
align-items: center;
  justify-content: center;
  font-size:70px;
`

export default class Crono extends Component{
state= { 
  numero:0
}

adicionar = ()=> {
  const segundos = setInterval(()=>(this.setState({numero: this.state.numero +1}),1000));

  this.stop =()=>{
    clearInterval(segundos)}
}

resetar =()=>{
  this.setState({numero:0})
}
render(){
  return(
    <Div>
    <h1>Cronometro</h1>
    <p>{this.state.numero}</p>
    <div>
    <button onClick={this.adicionar}>iniciar</button>
    <button onClick={this.resetar}>resetar</button>
    <button onClick={this.stop}>parar</button>
    </div>
    </Div>
  )
  }
}