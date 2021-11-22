import react from "react";
import './App.css';
import Perfil2 from './img/Perfil2.png'
import MenuLateral from './components/MenuLateral/MenuLateral'
import Mensagem from './components/Mensagem/Mensagem'


function App () {
  return(
  <div className="janelaApp">
      <div className="sidebar">
      <MenuLateral
        imagem={Perfil2} 
      />
      </div>
      <div>
      <Mensagem/>
      </div>   
  </div>
   
  );
}

export default App;