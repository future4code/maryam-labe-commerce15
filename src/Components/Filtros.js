import React from 'react';
import styled from "styled-components"



const NavFiltros = styled.div`
border: 1px solid black;
padding: 4px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Filtros extends React.Component {
    render () {
        return ( 
        <NavFiltros>
        <h3> Filtros </h3>
        <label>Valor mínimo
        <input type="number" value="100"></input>
        </label> 
        <label>Valor máximo
        <input type="number" value="1000"></input>
        </label> 
        <label>Busca por nome:
        <input type="text" value=""></input>
        </label> 
        </NavFiltros>
        )
    }
}

export default Filtros