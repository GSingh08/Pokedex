import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokeList from './PokeList';
import PokeProfile from './PokeProfile';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokeList: null,
      urlList:null,
      pokeListLoaded:false,
      urlListLoaded:false
    }
  }
//This calls to pokemon api and gets the 151 pokemon.
componentDidMount(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res => res.json())
  .then(data => {
    this.state({
      pokeList: data.results,
      pokeDataLoaded:true
    })
  })
}

getUrl (url) {
  fetch(`${url}`)
  .then(res => res.json())
   .then(data => {
     this.setState({
       urlList: data,
       urlListLoaded: true
     })
   })
}


  render() {
    return (
    <div>
        {this.state.pokeListLoaded ? (
          <PokeList pokeList={this.state.pokeList} getUrl={url => this.getUrl(url)} />
        ) : (
          <p>Loading!</p>
        )}

        {this.state.urlListLoaded ? (
          <PokeProfile urlList = {this.state.urlList} />
        ) : (
          <p>Choose a Pokemon On your Left!</p>
        )}

    </div>
  )
  }
}

export default App;
