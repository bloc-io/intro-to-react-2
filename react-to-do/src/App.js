import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';


class App extends Component {
	constructor(props) {
		super(props);
		this.state= {
			todos: [
    			{ id: 1, description: 'Walk the cat', isCompleted: true},
    			{ id: 2, description: 'Throw the dishes away', isCompleted: false},
    			{ id: 3, description: 'Buy new dishes', isCompleted: false}
			],

			newTodoDescription: ''
		};
		
		this.deleteTodo= this.deleteTodo.bind(this);
	
	}

	
	handleChange(e) {
		this.setState({ newTodoDescription: e.target.value })
	}


	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.newTodoDescription) { return }
		const newToDo = { description : this.state.newTodoDescription, isCompleted: false };
		this.setState({todos: [...this.state.todos, newToDo], newTodoDescription: '' });	
	}

	toggleComplete(index) {
    	const todos = this.state.todos.slice();
    	const todo = todos[index];
    	todo.isCompleted = todo.isCompleted ? false : true;
		this.setState({ todos: todos });
  	}

	deleteTodo(index) {
		const todosList = this.state.todos.slice();
		const oneToDelete = todosList[index];
		console.log('is this correct?', oneToDelete);
		console.log('the index of this todo is', index);
		console.log('this todo isCompleted', oneToDelete.isCompleted);
		if (oneToDelete.isCompleted === true){
			const updatedVersion = todosList.filter(todo => {
				return todo !== oneToDelete}
			);
			this.setState({todos: updatedVersion });
		}	

	}
			
			
render() {
	return (
		<div className="App">
			<ul>
				{this.state.todos.map( (todo, index) => 
					<ToDo 
						key={ index } 
						description={ todo.description } 
						isCompleted={ todo.isCompleted } 
						toggleComplete={ () => this.toggleComplete(index)} 
						deleteTodo={()=> this.deleteTodo(index)}
					
					/>
				)}
			</ul>
			
		<form onSubmit={ (e) => this.handleSubmit(e) }>
		<input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
		<input type="submit" />
		</form>
      </div>
    );
  }
}

export default App;
