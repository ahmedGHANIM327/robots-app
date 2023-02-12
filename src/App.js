import './App.css';
import { Component } from 'react';
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
  // Order run : 2
  render() {
    const filtredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.serachString)
    })

    return (
      <div className="App">
        <input 
          className='search-box'
          type='text'
          placeholder='search monsters'
          onChange={this.onSearchChange}
        />
        {filtredMonsters.map((monster) => {
          return (<div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>);
        })}
      </div>
    );
  }
}

export default App;
