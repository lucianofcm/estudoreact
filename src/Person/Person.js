import React from 'react';
import './Person.css';

const person = (pessoa) => {
    return (
        <div className="Person">
            <p onClick={pessoa.clicar}>Eu sou uma pessoa! Menu nome é {pessoa.nome}, minha idade é {pessoa.idade}</p>
            <p>{pessoa.children}</p>
            <input type="text" onChange={pessoa.mudar} value={pessoa.nome}/>
        </div>
    )
};

export default person;