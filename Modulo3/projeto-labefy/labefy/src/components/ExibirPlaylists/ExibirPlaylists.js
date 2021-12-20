import React, {Component} from "react";
import styled from "styled-components";
import AdicionarMusica from "../Adicionar Musica/AdicionarMusica";
import axios from "axios";

export default class ExibirPlaylists extends React.Component {
    state = {
        playlists:[]
    }

    componentDidMount(){
        this.pegaPlaylists()
    }

    pegaPlaylists = () =>{
        let URL ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        let autorizacao ={
            headers:{
                Authorization: "natalia-alves-joy"
            }
        }
        axios.get(URL,autorizacao)
        .then((response) => {this.setState({playlists: response.data.result.list})})
        .catch((error)=>console.log(error))
    }

    deletarPlaylist = (id) => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}'
        axios.delete(url, {
          headers: {
            Authorization: "natalia-alves-joy"
          }
        })
          .then((response) => {
            alert("Lista deletada com sucesso!")
            this.pegaPlaylists()
            console.log(response)
          })
          .catch((error) => {
            alert("Ocorreu um erro, tente novamente  Mais tarde")
            console.log(error.response)
          })
      }

    render(){

        let mapPlaylists = this.state.playlists.map ((playlists)=>{
            return <li><b>Nome:</b>{playlists.name} <button onClick={() => this.deletarPlaylist (playlists.id)}>x</button><br/>
            <b>ID:</b>{playlists.id}
            <div>
            <AdicionarMusica/>
            </div>
            </li>    
        })
      return (
        <div>
            <div key = {mapPlaylists.id}>
                <h3>Número de Playlists: {mapPlaylists.length}</h3>
            <ol>{mapPlaylists} </ol>
            </div>
        </div>
       
      ); 
    }
    
  }