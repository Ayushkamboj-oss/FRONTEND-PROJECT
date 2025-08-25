import React from "react";

export const UserList = ({ users }) => {
  return (
    <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
      {users.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 text-lg">
          No users found.
        </p>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="p-8 border border-gray-300 rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {user.name}
            </h2>
            <p className="text-base text-gray-700">
              <span className="font-semibold text-blue-600">Role:</span> {user.role}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;