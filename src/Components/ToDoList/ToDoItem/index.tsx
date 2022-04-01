import { Todo } from "../../../core/model/todo";

interface TodoItemProps {
    todo: Todo;
    clickHandler?: () => void;
}

export default function TodoItem(props: TodoItemProps) {
    return (<div className={`todoItem ${props.todo.done ? 'done' : 'not-done'}`}>
        <div>{props.todo.id}</div>
        <div>{props.todo.description}</div>
        <div><button style={{width: "7rem"}} onClick={props.clickHandler}>{props.todo.done ? "Mark as undone" : "Mark as done"}</button></div>
    </div>);
}