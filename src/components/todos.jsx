import React, { Component } from 'react';

import Todo from './todo';
import AddTodo from './addtodo';

class Todos extends Component {
    constructor(props){
        super(props)
        this.state = {
            addTodoValue: "",
            todos: [
                {
                    id : 1,
                    value : 'todo 1',
                    isDone : false
                }
            ]
        }
    }
    componentDidMount(){
        console.log('mount')
        setTimeout(() => {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: 'this is did mount',
                    isDone: false
                }
            );
            this.setState({ addTodoValue: "", todos })
        }, 2000);
        
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        prevState.addTodoValue = "snapshotAfterUpdate"
        this.state.addTodoValue = prevState.addTodoValue;
        console.log(prevState.addTodoValue);
        return null;
    }
      
    componentDidUpdate() {
        console.log('componetdidupdate')
        // console.log(this.state.addTodoValue);
    }
    shouldComponentUpdate(prevProps,prevState){
        if(prevState.todos !== this.state.todos){
            console.log('shouldcomponentupdate')
            return true;
        }
        else{
            console.log('shouldcomponent not update')
            return false;
        }
    }
    componentWillUnmount() {
        alert('The component is going to be unmounted');
      }

    //this is method for getting data and using it as id
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    //method called from Todo component
    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
    }
    // method called from todo component
    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({todos});
    }

    //method called from AddTodo component
    addNewTodo = value => {
        if (value) {
            const todos = [...this.state.todos];
            todos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({ addTodoValue: "", todos })
        } else {
            alert("Please Add Todo Text");
            console.log("Please Add Todo Text");
        }
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo index={index+1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Todos;