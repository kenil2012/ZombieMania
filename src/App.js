import React,{Component} from 'react';
import {CardList} from "./Components/card-list/card-list.component";
import {Search} from "./Components/search/search.component";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      zombies:[],
      searchField:""
    }
  }

  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({zombies:users}))
  }

  changEvent = (e) => this.setState({searchField: e.target.value})

  render(){
    const {zombies,searchField} = this.state;
    const filteredzombies = zombies.filter(zombie => 
      zombie.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return(
      <div className="App">
          <h1 id="title">ZombieMania</h1>
          <Search changEvent={this.changEvent} placeholder="Search Zombies"/>
          <CardList zombies={filteredzombies}/>
      </div>
    )
  }
}

export default App;
