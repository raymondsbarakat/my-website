import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import Game from './components/pages/Games/Game'
import Schedule from'./components/pages/Scheduler/Scheduler'

class App extends Component{

  state = {
    idn : 4,
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id:2,
        title: 'Make Dinner',
        completed: false
      },
      {
        id: 3,
        title: 'Work',
        completed: false
      },
    ]
  }
  
  markComplete = (id) => {
    this.setState({ todos : this.state.todos.map(todo => {
      if(todo.id == id){ todo.completed = !todo.completed }
      return todo;
    }) });
  }


  delTodo = (id) =>{
    this.setState({ todos : 
      [...this.state.todos.filter(todo => todo.id != id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.state.idn,
      title,
      completed: false
    }
    this.setState({todos: 
      [...this.state.todos, newTodo]})
  }

  incrementId = () => {
    this.setState({idn: this.state.idn + 1});
  }

  refresh = () =>{
    console.log("APP.JS")
    window.location.reload(false)
  }
  render(){
    console.log(this.props.todos)
  return (
    <Router>
      <div className="App">
        <div className = "container">
          <Header />
          <Route exact path = "/" render = {props=>(
            <React.Fragment>
                <AddTodo addTodo = {this.addTodo} incrementId = {this.incrementId}/>
                <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
            </React.Fragment>
          )} /> 
          <Route path="/about" component = {About} />
          <Route path="/game" component = {Game} />
          <Route path="/scheduler" component = {Schedule} />
        </div>
      </div>
    </Router>
  );
}
}
export default App;
