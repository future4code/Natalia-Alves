import React from "react";
import axios from "axios";



export default class App extends React.Component {
  state = {
    labenusers: {},
    usuario: "",
    email:""
  };

  componentDidMount() {
    this.guardaUsuario ()
  }

  guardaUsuario = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    { 
      headers:{
        Authorization: "natalia-alves-joy"
      }
  
    })
    .then((res) => {
      this.setState({ labenusers: res.data })
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err.response.data)
    })
  }

  mudaNome = (e) => {
    this.setState({usuario: e.target.value });
  };
  
  mudaEmail = (e) => {
    this.setState({email: e.target.value });
  };
  
  criarUsuario = () => {
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  
    const body = {
  
        name: this.state.usuario,
        email: this.state.email
    };
    const headers = {
      headers: {Authorization: "natalia-alves-joy"}
    }
  
    axios
    .post(URL, body, headers)
    .then((res) => {
      console.log('')
      this.guardaUsuario();
    })
    .catch((err) => {
      console.log(err.response.data);
    });
  
  }

  mostraListaUsuarios = () => {

    let URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    let header = {
      headers: {
        Authorization: "natalia-alves-joy"
      }
    }

    axios.get(URL, header)
    .then((response)=>{this.setState({labenusers: response.data}) })
    .catch((error)=>{alert(error.response.data)}) 

    console.log("chamada ok")
  }

  render(){

    return (
      <div>
        <input placeholder={"nome de usuário"}/>
        <input placeholder={"e-mail"}/>
        <button onClick={this.adicionaUsuario}>Adiciona Usuário</button>
        <button onClick={this.mostralistaUsuarios}>Lista de Usuários</button>
  
      </div>
    );
  }
 
}


