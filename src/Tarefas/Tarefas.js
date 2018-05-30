import React, { Component } from 'react';
import { render } from 'react-dom';
import './Tarefas.css';
import rootRef from '../Firebase'

class Tarefas extends Component {
    constructor() {
        super();
        this.state = {
            person:{
                nomeP: '',
                descricaoP: '',
                statusP: null
            }
        };
    }

    handleChange = e => {
        //const {name, value} = e.target;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState(() => ({
            [name]: value
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        const {nome, descricao, status} = this.state;
        this.setState(() => ({
            mensagem: `Submitted Foo: ${nome}, Bar: ${descricao}, Baz: ${status}`,
            person:{nomeP:nome,descricaoP:descricao,statusP:status}
        }))
        //let refa = rootRef.collection('usuarios').doc('teste2');
        rootRef.collection('tarefas').doc(nome).set({
            nome:nome,
            descricao:descricao,
            status:status
        });
        //alert(this.state.person.nome+" "+this.state.person.descricao+" "+this.state.person.status)
    }

    render() {

        const {nome, descricao,status,mensagem} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Nome da tarefa:
                    <input onChange={this.handleChange} name="nome" value={nome} />
                    <br />
                    Descrição:
                    <input onChange={this.handleChange} name="descricao" value={descricao} />
                    <br />
                    Realizada:
                    <input  type="checkbox" onChange={this.handleChange} name="status" value={status} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                {mensagem && <div>Teste {mensagem}</div>}
            </div>
        );
    }
}


export default Tarefas;