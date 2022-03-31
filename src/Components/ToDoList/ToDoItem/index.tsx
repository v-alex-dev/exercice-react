import React from "react";
import { List } from "..";

interface ToDoProps {
    list : List;
}
export default function ToDoItem(props: ToDoProps){
    return (
    <div className="Item">
        <p>Id: {props.list.id}</p>
        <p>Chose à faire: {props.list.toDo}</p>
        <p>{
            props.list.isDone ?
            <p>Terminer</p>
                :
            <p>A faire</p>
            }</p>
    </div>)
}