import React, { Component } from 'react';
import { render } from 'react-dom';
import './Tarefas.css';
import rootRef from '../Firebase'

class Tarefas extends Component {
    constructor() {
        super();
        this.state = {
            person:{
                nome: '',
                descricao: '',
                status: null
            }
        };
    }

    handleChange = e => {
        const {name, value} = e.target;

        this.setState(() => ({
            [name]: value
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        const {nome, descricao, status} = this.state;
        this.setState(() => ({
            mensagem: `Submitted Foo: ${nome}, Bar: ${descricao}, Baz: ${status}`,
            person:{nome:nome,descricao:descricao,status:status}
        }))
        let refa = rootRef.collection('usuarios').doc('teste2');
        rootRef.collection('usuarios').doc('tarefa5').set(this.state.person);
        //alert(this.state.person.nome+" "+this.state.person.descricao+" "+this.state.person.status)
    }

    render() {

        const {nome, descricao,status,mensagem} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Foo:
                    <input onChange={this.handleChange} name="nome" value={nome} />
                    <br />
                    Bar:
                    <input onChange={this.handleChange} name="descricao" value={descricao} />
                    <br />
                    Baz:
                    <input onChange={this.handleChange} name="status" value={status} />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                {mensagem && <div>Teste {mensagem}</div>}
            </div>
        );
    }
}


export default Tarefas;