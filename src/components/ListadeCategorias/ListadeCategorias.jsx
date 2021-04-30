import React, { Component } from 'react';
import "./estilo.css";

class ListadeCategorias extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="lista-categorias">
        <ul className="list-categorias_lista">
            <li className="lista-categorias_item">Categorias</li>
            <li className="lista-categorias_item">Categorias</li>
            <li className="lista-categorias_item">Categorias</li>
            <li className="lista-categorias_item">Categorias</li>
            <li className="lista-categorias_item">Categorias</li>
        </ul>
        <input type="text" className="lista-categorias_input" placeholder="Adicional Categoria"/>
        </section>
       );
    }
}
 
export default ListadeCategorias ;