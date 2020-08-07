import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todos from './Todos'

export class TodoItem extends Component {
    getStyle = () => {
        return{
            
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom : '1px #ccc dotted',
            textDecoration: this.props.todol.completed ?  'line-through' :
            'none'
        }
    
    }

    // markComplete = () => {
    //     return{

    //     }
    // }
    
    render() {
        const { id, title } = this.props.todol;
        return (
            <div style = {this.getStyle()}>
                <p> 
                    <input type = "checkbox" onChange={this.props.markComplete.bind
                        (this, id)} /> {' '}
                    { title }
                    <button style = {btnStyle} onClick={this.props.delTodo.bind(this, id)}>
                            x
                    </button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todol : PropTypes.object.isRequired
}

const btnStyle = {
    background: "#ff0000",
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
