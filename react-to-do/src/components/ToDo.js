import React, { Component } from 'react';

class ToDo extends Component {

	

render() {
return (
<li>
<input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }/>
<span>{ this.props.description }</span>

<button key ={this.props.todoKey} onClick={this.props.deleteTodo}>Delete</button> 

<button onClick={(e)=>this.props.deleteTodo(e)}>Delete</button> 

</li>
);
}

}

export default ToDo;
