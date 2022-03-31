import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoItem from "./ToDoItem";

export interface List {
    id: number;
    toDo : string;
    isDone: boolean;
}

export default function ToDoList(){
    const [lists, setList] = 
    useState<List[]>([{
        id: 1,
        toDo: "Monter ma réput",
        isDone: false,
    },
    {
        id: 2,
        toDo: "Faire à manger",
        isDone: true,   
    },
    {
        id: 3,
        toDo: "Craft les bon items",
        isDone: false,
    },
    {
        id: 4,
        toDo: "Terminer l'exercice",
        isDone: true,
    }]);
    return (<>
    <div className="List">
        <div className="Form">
            <ToDoForm/>    
        </div>
        {lists?.map((l) => <ToDoItem key={l.id} list= {l}/>)}
    </div>
    </>)
}