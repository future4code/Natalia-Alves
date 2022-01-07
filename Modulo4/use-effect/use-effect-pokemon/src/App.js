import './App.css';
import React, {useState, useEffect} from 'react';
import axios from "axios";
import PokeCard from "./components/PokeCard/PokeCard";
import pokemon from "./img/pokemon.jfif"

function App() {
const [ pokeList, setPokeList ] = useState( [] );
const [ pokeName, setPokeName ] = useState( "" );

const pegaApiPokemon =  async( ) => {

  await axios.get( "https://pokeapi.co/api/v2/pokemon/?limit=151" )
  .then(({ data }) => {
    setPokeList( data.results )
  });

};

useEffect(() => {
  pegaApiPokemon();
}, []);

const mudarNomePokemon = ( event ) => {
setPokeName( event.target.value );
};

  return (
    
    <div className="App">
       <div><header><img src = {pokemon} alt = "logo_do_pokemon"></img></header></div>
        <select onChange={mudarNomePokemon}>
          <option value={""}>Nenhum</option>
          
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
  
        {pokeName && <PokeCard pokemon={pokeName} />}
      </div>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     // lista de pokemons que está sendo guardada no estado
//     pokeList: [],
//     // nome do pokemon guardado no estado, assim que o usuário
//     // escolhe um nome no dropdown
//     pokeName: ""
//   };

//   // método que roda após a montagem do componente
//   componentDidMount = () => {
//     // função axios que está batendo na API e buscando 151 pokemons
//     axios
//       .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
//       .then(response => {
//         // função que está setando no estado os 151 pokemons
//         this.setState({ pokeList: response.data.results });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   changePokeName = event => {
//     this.setState({ pokeName: event.target.value });
//   };

//   render() {
//     return (
//       <div className="App">
//         {/* evento onChange chama função toda vez que o usuário 
//         escolhe um novo pokemon no dropdown */}
//         <select onChange={this.changePokeName}>
//           <option value={""}>Nenhum</option>
//           {/* renderizando a lista de pokemons como opções do select */}
//           {this.state.pokeList.map(pokemon => {
//             return (
//               <option key={pokemon.name} value={pokemon.name}>
//                 {pokemon.name}
//               </option>
//             );
//           })}
//         </select>
//         {/* expressão booleana que renderiza o componente PokeCard,
//         caso o valor de pokeName, no estado, seja true */}
//         {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
//       </div>
//     );
//   }
// }

// export default App;

