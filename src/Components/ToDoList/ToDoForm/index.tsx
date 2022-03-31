import React from "react";




export default function ToDoForm(){
    

    return(
    <div>
        <form action="" method="post">
            <input type="number" value="id" placeholder="Id:"/>
            <input type="text"value="toDo" placeholder="Chose à faire:"/>
            <button type="submit">Submit</button>
        </form>
    </div>)
}