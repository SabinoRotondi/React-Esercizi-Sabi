import React, { Component } from 'react';

class TodoList extends Component {

    state = {
        todo: ['listtest', 'mangiare']
    };

    saveInput = (e) => {
        this.setState({ input: e.target.value });

    };

    newTodo = (e) => {
        e.preventDefault();
        let { todo, input } = this.state;
        e.target.elements.input.value = '';
        todo.push(input)
        console.log(todo)
    }

    onReset = (e) => {
        e.preventDefault();
        this.setState({
            todo: []
        })

    }

    onRemove = (e) => {
        let newTodo = [...this.state.todo];
        newTodo.splice(e, 1)
        this.setState({ todo: newTodo })
    }

    render() {
        return (
            <>
                <form onSubmit={this.newTodo}>
                    <input name='input' onChange={this.saveInput} />
                    <button type='submit'>Add Todo </button>
                    <button onClick={this.onReset}>Reset</button>
                </form>
                <div>
                    {this.props.render(this.state.todo)}
                </div>
            </>

        )
    }
}

export default TodoList;