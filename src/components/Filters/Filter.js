import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
  border: 5px solid white;
  padding: 8px;
  h3{
      border:3px solid black;
  }
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 10px;
  background-color:powderblue;
`

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Preferências</h3>
        <InputContainer>
          Preço mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Preço máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Procure pelo nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}
