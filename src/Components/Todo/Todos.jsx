import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../Features/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
   <div className="max-w-md mx-auto mt-6 space-y-4">
  {todos.map((todo) => (
    <div
      key={todo.id}
      className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0 border border-gray-100 hover:shadow-lg transition-shadow"
    >
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          {todo.Name}
        </h1>
        <p className="text-sm text-gray-500">
          Password: {"*".repeat(todo.Password.length)}
        </p>
      </div>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200"
      >
        Delete
      </button>
    </div>

  ))}
  <p>{todos.Name}</p>
</div>
  );
}

export default Todos;