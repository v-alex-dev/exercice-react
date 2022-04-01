import { useEffect, useState } from "react";
import { Todo } from "../../core/model/todo";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
    useEffect(() => {
    }, []);

    const [todos, setTodos] = useState<Todo[]>([
        {
            description: "Description 1",
            id: 1,
            done: false,
        },
        {
            description: "Description 2",
            id: 2,
            done: false,
        },
        {
            description: "Description 3",
            id: 3,
            done: true,
        },
        {
            description: "Description 4",
            id: 4,
            done: false,
        },
        {
            description: "Description 5",
            id: 5,
            done: false,
        },
    ]);

    function tryToAddTodo(todo: Todo, successCallBackFunction?: () => void) {
        const todoIds = todos.map((t) => t.id);
        if(todoIds.includes(todo.id)) {
            alert(`Duplicated id: ${todo.id}`)
            return;
        }
        setTodos([...todos, todo]);

        if(successCallBackFunction) {
            successCallBackFunction();
        }
    }

    const todoClickHandler = (todo: Todo) => {
        const tempTodo = {...todo};
        tempTodo.done = !tempTodo.done;
        const tempTodos = todos.filter(t => t.id !== todo.id);
        tempTodos.push(tempTodo);
        setTodos(tempTodos);
    }

    return (<div>
        <h1>Ma magnifique TodoList</h1>
        <TodoForm onCreateTodo={(todo, successCallBackFunction) => tryToAddTodo(todo, successCallBackFunction)}/>
        {
            todos?.sort((a,b) => a.id-b.id)?.map((todo) => <TodoItem key={todo.id} todo={todo} clickHandler= {() => todoClickHandler(todo)}/>)
        }
    </div>);
}