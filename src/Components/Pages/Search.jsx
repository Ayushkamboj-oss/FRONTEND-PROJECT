import React, { useState } from "react";
import { Users } from "../../UserData/Users";
import UserList from "../UserList/UserList";

function Linkedin() {
  const [input, setInput] = useState("");

  const filteredUsers = input
    ? Users.filter((user) =>
        user.name.toLowerCase().includes(input.toLowerCase())
      )
    : Users;

  const suggestions = input
    ? Users.filter((user) =>
        user.name.toLowerCase().startsWith(input.toLowerCase())
      ).slice(0, 50)
    : [];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-xl mx-auto">
        <form className="flex items-start space-x-2 relative" onSubmit={(e) => e.preventDefault()}>
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search users..."
              className="border p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full shadow-lg">
                {suggestions.map((user) => (
                  <li
                    key={user.id}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                    onClick={() => setInput(user.name)}
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </form>

        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}

export default Linkedin;