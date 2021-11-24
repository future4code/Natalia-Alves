import React from "react";
import styled from "styled-components";

function Etapa1() {
    return (
      <div className="pagina-um-formulario">
          <div>
              <h1>
                  ETAPA 1 - DADOS GERAIS
              </h1>
              <h3>
                  1. Qual seu nome?
              </h3>
              <input type="text"/>
              <h3>
                  2. Qual sua idade?
              </h3>
              <input type="number"/>
              <h3>
                  3. Qual seu email?
              </h3>
              <input type="email"/>
              <h3>
                  4. Qual sua escolaridade?
              </h3>
              <select>
                <option value="eminc">Ensino médio incompleto</option>
                <option value="emc">Ensino médio completo</option>
                <option selected value="esinc">Ensino superior incompleto</option>
                <option value="esc">Ensino superior completo</option>
             </select>
          </div>
          
      </div>
    );
  }
  
  export default Etapa1;