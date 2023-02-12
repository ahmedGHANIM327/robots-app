import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';


class App extends Component {
  // Order run : 1
  constructor()
  {
    super();
    this.state = {
      monsters:[],
      serachString:''
    }
  }

  // Life Cycle Method ( useEffect in Class )
  // Order run : 3
  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( resp => resp.json())
    .then( (users) => this.setState({monsters:users}))
  }

  onSearchChange = (event) => {
    const searchS = event.target.value.toLowerCase();
    
    this.setState(() => {
      return { serachString : searchS}
    })
  }

  // Filter Monsters
  filterMonsters(v)
  {
    console.log(v);
  }

  // This is what you are rendering
  /*
    The render function is called every time the component's 
    state or props change, allowing React to efficiently update 
    the component's visual representation on the screen.
  */
  // Order run : 2
  render() {
    const filtredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.serachString)
    })

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={this.onSearchChange} placeholder='search a monster'/>
        <CardList monsters={filtredMonsters}/>
      </div>
    );
  }
}

export default App;
