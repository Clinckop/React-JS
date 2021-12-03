import React, {Component} from 'react'
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFeild:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then( data => this.setState({monsters : data}));
  }

  handleChange = e => {
    this.setState({searchFeild: e.target.value})
  };

  render(){
    const {monsters, searchFeild} = this.state;
    const filteredmonsters = monsters.filter(monstersData => monstersData.name.toLowerCase().includes(searchFeild.toLowerCase()));

    return(
      <div className="App">
        <SearchBox placeholder='Search here...' handleChange={this.handleChange}/>
        <CardList monsters ={filteredmonsters} >
          
        </CardList>
      </div>
    )
  };
    
}

export default App;
