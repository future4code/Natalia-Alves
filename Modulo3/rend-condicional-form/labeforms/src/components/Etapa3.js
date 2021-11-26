import React from "react";
import styled from "styled-components";

function Etapa3() {
    return (
      <div className="pagina-tres-formulario">
          <h1>
              ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
          </h1>
          <h3>
              7. Por que você não terminou um curso de graduação?
          </h3>
          <input type="text"/>
          <h3>
              8. Qual sua escolaridade?
          </h3>
          <select>
              <option value="nenhum">Nenhum</option>
              <option value="tecnico">Curso técnico</option>
              <option selected value="ingles">Curso de inglês</option>
          </select>
      </div>
    );
  }
  
  export default Etapa3;