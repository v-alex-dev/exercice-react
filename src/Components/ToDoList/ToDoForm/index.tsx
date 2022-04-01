import { useState } from "react";
import { Todo } from "../../../core/model/todo";

interface TodoListProps {
    onCreateTodo: (todo: Todo, successCallBackFunction?: () => void) => void;
}

export default function TodoForm(props: TodoListProps) {

    const [id, setId] = useState<number>();
    const [description, setDescription] = useState<string>();

    function submit() {
        if(!description || id == null) {
            alert("Données manquantes");
            return;
        }
        props.onCreateTodo({
            id: id,
            description: description,
            done: false
        })
    }

    return (<form onSubmit={(event) => {
        event.preventDefault();
        submit();
    }}>
        <label>Id :<input type="number" value={id} onChange={(event) => setId(parseInt(event.target.value))}/></label>
        <label>Description :<input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/></label>
        <input type="submit" value="Submit"/>
    </form>);
}