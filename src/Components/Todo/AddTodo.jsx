import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Features/todoSlice";
import { useNavigate } from "react-router-dom";

function AddTodo() {
  const [input, setInput] = useState({ Name: "", Password: "" });
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { Name, Password } = input;
    if (!Name.trim() || !Password.trim()) return;
    dispatch(addTodo(input));
    setSuccessful(true);
    setInput({ Name: "", Password: "" });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
        {!successful ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={input.Name}
                onChange={(e) => setInput({ ...input, Name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={input.Password}
                onChange={(e) => setInput({ ...input, Password: e.target.value })}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Submit
            </button>
          </form>
        ) : (<>
          <div className=" text-green-400 text-2xl font-bold">
            ✅ You are successfully logged in!
          </div>
          <div className="text-center mt-4">
            Click to
            <button
              onClick={() => Navigate("/home/login")}
              className="text-center text-blue-400 hover:text-blue-600 font-semibold p-1.5"
            >
              Login
            </button>
            Page
          </div>
        </>
        )}
      </div>
    </div>
  );
}

export default AddTodo;