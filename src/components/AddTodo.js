import React, { Component } from 'react'

export class AddTodo extends Component {
    
    state = {
        title: ''
    }
    
    onChange = (e) =>{ 
        this.setState({ [e.target.name]: e.target.value });}

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
        this.props.incrementId();
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style={{display: 'flex'}}>
               <input 

                    type = "text" 
                    name = "title"
                    style = {{flex: '10', padding: ' 5px'}}
                    placeholder = "Add Todo"
                    value = { this.state.title }
                   // canText = { this.turnOffEventListener}
                    onChange = { this.onChange } 
              /> 
                <input 
                    value="Submit"
                    type="submit" 
                    className="btn"
                    style = {{flex: 1}}
                /> 
            </form>
        )
    }
}

export default AddTodo
