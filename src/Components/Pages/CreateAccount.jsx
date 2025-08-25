import React from "react";
import AddTodo from "../Todo/AddTodo";
import Todos from "../Todo/Todos";

function CreateAccount() {
    return (
        <div>
           <AddTodo />
           <Todos />
        </div>
    );
}
export default CreateAccount;