import React, {Component} from "react";
import "./Tarefas.css";
import rootRef from "../Firebase";

class Tarefas extends Component {
    constructor() {
        super();

        /*let tarefasPersistidas = [];
        rootRef.collection("tarefas").get().then(snapshot => {
            snapshot.forEach(doc => {
                tarefasPersistidas.push(doc.data())

            })
        })
        this.state = {
            foiPersistido: false,
            tarefas: tarefasPersistidas
        };
        this.setState(() => ({
           tarefas: tarefasPersistidas
        }));*/
    }
    teste(){
        console.log('Passou por aqui 1')
    }
    state = {
        teste:this.teste(),
        foiPersistido: false,
        tarefas: []
    };


    handleChange = e => {
        let tarefasPersistidas = [];
        rootRef.collection("tarefas").get().then(snapshot => {
            snapshot.forEach(doc => {
                tarefasPersistidas.push(doc.data())

            })
        })
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState(() => ({
            [name]: value,
            tarefas: tarefasPersistidas
        }));
    };

    handleSubmit = e => {
        e.preventDefault();
        const {nome, descricao, status} = this.state;

        let persistido = false;
        rootRef
            .collection("tarefas")
            .doc(nome)
            .set({
                nome: nome,
                descricao: descricao,
                status: (status == null) ? false : status
            }).then(
            persistido = true
        ).catch(
            console.log('Tratar esse erro depois;')
        );
      /*  let tarefasPersistidas = [];
        rootRef.collection("tarefas").get().then(snapshot => {
            snapshot.forEach(doc => {
                tarefasPersistidas.push(doc.data())

            })
        })*/
        this.setState(() => ({
            mensagem: `Tarefa incluída com sucesso ! Nome: ${nome}, Descrição: ${descricao}, Status: ${
                status ? "Realizada" : "Não realizada"
                }`,
            foiPersistido: persistido,
           /* tarefas: tarefasPersistidas*/
        }));

        this.setState(()=>({

            
        }))
        console.log(this.state.tarefas.length);

    };
    divStyleForm = {
        width: "20rem",
        "text-align": "center"
        /*   -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px; */
    };
    divStyleCard = {
        width: '13%',
        margin: '0 auto'
    }


    render() {

        let resultado = (
            <div>
                <ul class="list-group">
                    {this.state.tarefas.map(tar => {
                        return <li class="list-group-item">{tar.nome}</li>;
                    })}
                </ul>
            </div>

            /* this.state.pessoas.map(pessoa => {

                 return <Person nome={pessoa.nome} idade={pessoa.idade}
                                sexo="Masculino"
                                mudar={this.renomearNome}>Eu sou o
                     filho</Person>
             })
     */

        )


        const {nome, descricao, status, mensagem} = this.state;

        return (
            <div style={this.divStyleCard} onFocus={this}>
                {/*{this.state.foiPersistido?mensagemSucesso:''}*/}
                <div className="alert alert-success" role="alert" hidden={!this.state.foiPersistido}>
                    Cadastrado com sucesso !
                </div>
                <div style={this.divStyleForm}>
                    <form onSubmit={this.handleSubmit} class="needs-validation" novalidat>
                        <div class="form-group">
                            <label for="nome">Nome da tarefa:</label>
                            <input
                                class="form-control"
                                onChange={this.handleChange}
                                name="nome"
                                value={nome}
                                required onFocus={this.state.foiPersistido = false}/>
                        </div>
                        <div class="form-group">
                            <label for="descricao">Descrição:</label>
                            <input class="form-control"
                                   onChange={this.handleChange}
                                   name="descricao"
                                   value={descricao}
                                   required
                            />
                        </div>
                        <div class="form-group form-check">
                            <input class="form-check-input"
                                   type="checkbox"
                                   onChange={this.handleChange}
                                   name="status"
                                   value={status}
                            />

                            <label for="status">Realizada</label>
                        </div>
                        <input class="btn btn-primary" type="submit" value="submit"/>
                    </form>
                </div>
                <div style={this.divStyleForm}>
                    {resultado}
                </div>
            </div>
        )
    }
}

export default Tarefas;
