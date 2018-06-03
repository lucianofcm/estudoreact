import React, {Component} from "react";
import {render} from "react-dom";
import "./Tarefas.css";
import rootRef from "../Firebase";

class Tarefas extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                nomeP: "",
                descricaoP: "",
                statusP: false
            },
            foiPersistido:false
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
        const {nome, descricao, status} = this.state;

        let persistido = false;
        let dataPersisted = rootRef
            .collection("tarefas")
            .doc(nome)
            .set({
                nome: nome,
                descricao: descricao,
                status: (status == null) ? false : status
            }).then(
                persistido = true
            );

        this.setState(() => ({
            mensagem: `Tarefa incluída com sucesso ! Nome: ${nome}, Descrição: ${descricao}, Status: ${
                status ? "Realizada" : "Não realizada"
                }`,
            foiPersistido:persistido
        }));

    };
    divStyleForm = {
        width: "20rem",
        "text-align": "center"
        /*   -webkit-margin-after: 1em;
        -webkit-margin-start: 0px;
        -webkit-margin-end: 0px; */
    };
    divStyleCard = {
        width: '25%',
        margin: '0 auto'
    }


    render() {

            let mensagemSucesso = (


                <div className="alert alert-success" role="alert">
                    Cadastrado com sucesso !
                </div>

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
                        {mensagem && <div>{mensagem}</div>}
                    </div>
                </div>

        );
    }
}

export default Tarefas;
