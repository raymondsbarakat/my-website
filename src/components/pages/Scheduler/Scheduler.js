import React, { Fragment } from 'react'
import { motion } from 'framer-motion'
import { Component } from 'react'
import EmployeeList from './EmployeeList'
const ReactDOM = require('react-dom')
const client = require('./client')


export default class Scheduler extends Component{
    constructor(props) {
		super(props);
		this.state = {employees: []};
    }
    
    componentDidMount() {
		client({method: 'GET', path: '/api/tmTuple'}).done(response => {
			this.setState({employees: response.entity._embedded.tmTuple});
		});
	}
    
    render(){
    return (
        <EmployeeList employees={this.state.employees}/>
    )
    }
}
