import React, { Component } from "react";
import { render } from "react-dom";
import rootRef from "../Firebase";
import ReactTable from "react-table";
import "react-table/react-table.css";

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      data: this.tarefas()
    };
    this.renderEditable = this.renderEditable.bind(this);
  }

  tarefas = () => {
    let tarefasPersistidas = [];
    rootRef
      .collection("tarefas")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          tarefasPersistidas.push(doc.data());
        });
      });
    return tarefasPersistidas;
  }

  renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: "#eee" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }
  render() {
       const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Nome",
              accessor: "nome",
              Cell: this.renderEditable
            },
            {
              Header: "Descrição",
              accessor: "descricao",
              Cell: this.renderEditable
            },
            {
              Header: "Full Name",
              id: "full",
              accessor: d => (
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + " " + d.lastName
                  }}
                />
              )
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        
      </div>
    );
  }
}

export default DataTable;
