import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import rootRef from './Firebase'
import Tarefas from './Tarefas/Tarefas'

class App extends Component {
    /*  state = {
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

      }*/

    state = {
        data: {
            nome: 'luciano',
            realizada: true,
            numberExample: 3.14159265,
            dateExample: new Date('December 10, 1815'),
            arrayExample: [5, true, 'hello'],
            tarefas: {
                nome: 'Pagar boleto',
                b: true
            }
        }
    };

    salvar(nome, idade){



        this.setState(

        )
        console.log(this.state.pessoas[0].nome);
    }


    render() {

/*        let pessoas = null;
        if (this.state.showPessoas) {
            let refa = rootRef.collection('usuarios').doc('teste2');
            rootRef.collection('usuarios').doc('3').set(this.data);
            let setAda = refa.set({
                nome: 'LUCIANO',
                last: 'MUniz',
                born: 1975
            });


            pessoas = (
                <div>
                    {

                        this.state.pessoas.map(pessoa => {

                            return <Person nome={pessoa.nome} idade={pessoa.idade}
                                           sexo="Masculino"
                                           mudar={this.renomearNome}>Eu sou o
                                filho</Person>
                        })


                    }
                </div>



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
        }*/

       let tarefas=(
        <Tarefas></Tarefas>
       )

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">

                </p>
               {/* <button onClick={this.trocarNome.bind(this, 'teste', 55)}>Trocar Nome</button>
                <button onClick={() => this.trocarNome('Segunda forma', 55)}>Trocar Nome Segunda forma</button>
                <button
                    onClick={this.exibirPessoas}>{this.state.showPessoas ? 'Esconder Pessoa' : 'Exibir Pessoa'}</button>
                {pessoas}*/}
                {tarefas}
            </div>
        );
    }
}

export default App;
