import React,{Component} from 'react';
import './App.css';
import Todos from './components/todos';


class App extends Component{
  render(){
    return <div>
      <h1>todo App</h1>
      <Todos/>
    </div>
  }
} 

export default App;
