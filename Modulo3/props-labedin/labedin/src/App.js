import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno'
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './img/NataliaPerfil.jpeg';
import Maleta from './img/Maleta.png'
import Email from './img/IconeEmail.jpg'
import Endereco from './img/IconeEndereco.jpg'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil} 
          nome="Natalia V S de F G Alves" 
          descricao="Oi, eu sou a Natalia. Eu adoro coçar a barriga dos meus gatinhos até eles me morderem pra depois brigar porque eles estão mordendo a mamãe."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        imagem={Email}
        nome ="nataliavalins@gmail.com"
        />
      </div>
      <div>
        <CardPequeno
        imagem={Endereco}
        nome = "Rua dos Alfeneiros, nº 4, em Little Whinging"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Maleta} 
          nome="Total Safety" 
          descricao="Calibro equipamentos de medição da área de segurança do trabalho!" 
        />
        
        <CardGrande 
          imagem={Maleta} 
          nome="Headword Language School" 
          descricao="Teacher de crianças, adolescentes e adultos. Ensinava Inglês e contava ótimas piadas." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
