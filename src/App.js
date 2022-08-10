//Crie um Component de Class
//Crie um Ciclo de vida e uma função de clique para atualizar o titulo da sua pagina baseado no seu state
//Crie uma condicional para fazer a alteração voltar para o estado inicial

import React, {Component} from "react";

export default class app extends Component{
  state = {
    titulo: "david"
  }

  componentDidMount(){
    document.title = this.state.titulo
  }
  componentDidUpdate(){
    document.title = this.state.titulo
  }

  handleClick = () => {
    this.setState({
      titulo: this.state.titulo === "david" ? "joão" : "david"
    })
  }

  render(){
    return(
      <div>
        <h1>{this.state.titulo}</h1>
        <button onClick={() => this.handleClick()}>Muda Nome</button>
      </div>
    )
  }
}