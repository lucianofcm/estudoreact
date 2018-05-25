import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        pessoas: [
            {nome: 'Luciano', idade: '42'},
            {nome: 'Adriana', idade: '38'},
            {nome: 'Luma', idade: '02'}
        ],
        showPessoas: false

    }

    trocarNome = (nome, idade) => {
        this.setState({
            pessoas: [
                {nome: nome, idade},
                {nome: 'Adriana Muniz', idade: '38'},
                {nome: 'Luma Muniz', idade: '02'},
            ]
        })
        console.log(this.state.pessoas[0].nome);
    }

    renomearNome = (event) => {

        this.setState({
            pessoas: [
                {nome: 'Teste', idade: 66},
                {nome: `TESTE2`, idade: '38'},
                {nome: event.target.value, idade: '02'},
            ]
        })
    }
    exibirPessoas = () => {
        let flag = this.state.showPessoas;
        this.setState({
            showPessoas: !flag

        })

    }



    render() {

        let pessoas = null;
        if(this.state.showPessoas) {
            pessoas = (
                <div>
                    <Person nome={this.state.pessoas[0].nome} idade={this.state.pessoas[0].idade}
                            sexo="Masculino">Eu
                        sou o
                        filho</Person>
                    <Person nome={this.state.pessoas[1].nome} idade={this.state.pessoas[1].idade}
                            sexo="Masculino"
                            clicar={this.trocarNome}>Eu sou o
                        filho</Person>
                    <Person nome={this.state.pessoas[2].nome} idade={this.state.pessoas[2].idade}
                            sexo="Masculino"
                            mudar={this.renomearNome}>Eu sou o
                        filho</Person>

                </div>

            );
        }

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.trocarNome.bind(this, 'teste', 55)}>Trocar Nome</button>
                <button onClick={() => this.trocarNome('Segunda forma', 55)}>Trocar Nome Segunda forma</button>
                <button
                    onClick={this.exibirPessoas}>{this.state.showPessoas ? 'Esconder Pessoa' : 'Exibir Pessoa'}</button>
                {pessoas}
            </div>
        );
    }
}

export default App;
