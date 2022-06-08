import React, { Component } from 'react';

class TodoList extends Component {

    state = {
        todo: []
    };

    saveInput = (e) => {
        this.setState({ input: e.target.value });

    };

    newTodo = () => {
        let { todo, input } = this.state;
        todo.push(input)
        this.setState({ input: '' });
        console.log(todo)

    }

    render() {
        return (
            <>
                <div>
                    <input onChange={this.saveInput} />
                    <button onClick={this.newTodo}>Add Todo</button>
                </div>
                <ul>
                    {this.state.todo.map((item, i) => {
                        return <li key={i}> {item}</li>
                    })}
                </ul>
            </>
        )
    }
}

export default TodoList;