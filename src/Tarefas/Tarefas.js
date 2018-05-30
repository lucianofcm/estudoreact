import React, { Component } from "react";
import { render } from "react-dom";
import "./Tarefas.css";
import rootRef from "../Firebase";

class Tarefas extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        nomeP: "",
        descricaoP: "",
        statusP: null
      }
    };
  }

  handleChange = e => {
    //const {name, value} = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    this.setState(() => ({
      [name]: value
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { nome, descricao, status } = this.state;
    this.setState(() => ({
      mensagem: `Tarefa incluída com sucesso ! Nome: ${nome}, Descrição: ${descricao}, Status: ${
        status ? "Realizada" : "Não realizada"
      }`
    }));
    //let refa = rootRef.collection('usuarios').doc('teste2');
    rootRef
      .collection("tarefas")
      .doc(nome)
      .set({
        nome: nome,
        descricao: descricao,
        status: status
      });
  };
  divStyleForm = {
    width: "20rem",
    "text-align": "center"
    /*   -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px; */
  };
  divStyleCard ={
    width: '10%',
    margin: '0 auto'
  }

  render() {
    const { nome, descricao, status, mensagem } = this.state;

    return (
      <div style={this.divStyleCard}>
        <div class="card" style={this.divStyleForm}>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="nome">Nome da tarefa:</label>
              <input
                class="form-control"
                onChange={this.handleChange}
                name="nome"
                value={nome}
              />
            </div>
            <div class="form-group">
              <label for="descricao">Descrição:</label>
            <input class="form-control"
              onChange={this.handleChange}
              name="descricao"
              value={descricao}
            />
            </div>
            <br />
            Realizada:
            <input
              type="checkbox"
              onChange={this.handleChange}
              name="status"
              value={status}
            />
            <br />
            <input type="submit" value="submit" />
          </form>
          {mensagem && <div>Teste {mensagem}</div>}
        </div>
      </div>
    );
  }
}

export default Tarefas;
