import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [successful, setSuccessful] = useState(false);
  const [unsuccessful, setUnsuccessful] = useState(false);
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = todos.find(
      (todo) =>
        todo.Name === user.username && todo.Password === user.password);

    check ? setSuccessful(true) : setUnsuccessful(true)
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 to-indigo-400 p-6">
      {!successful ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            🔐 Login
          </h2>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              onChange={(e) =>
                setUser({ ...user, username: e.target.value })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
          {unsuccessful && (<h1 className="text-center text-red-400 font-semibold">
            ❌ Invalid username or password
          </h1>
          )}

          <button
            type="button"
            onClick={() => navigate("/home/createaccount")}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Create Account
          </button>
        </form>
      ) : (
        <div className="text-center text-white text-2xl font-bold">
          ✅ You are successfully logged in!
        </div>
      )}
    </div>
  );
}

export default Login;
