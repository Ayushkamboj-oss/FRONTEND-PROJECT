import React, { useEffect, useState } from "react";

function GitHub() {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("https://api.github.com/users/Ayushkamboj-oss")
    .then(response=>response.json())
    .then(data=>{
      setData(data)
    })
  },[])

 return (
  <div className="p-4 bg-gray-100 rounded-md">
    <h1 className="text-lg font-semibold mb-4">📦 GitHub Profile</h1>
    {data ? (
      <div className="flex items-start gap-6">
        <img
          src={data.avatar_url}
          alt="GitHub avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <div className="text-lg text-gray-800 space-y-8">
          <p><strong>Username:</strong> {data.login}</p>
          <p><strong>Bio:</strong> {data.bio}</p>
          <p><strong>Public Repos:</strong> {data.public_repos}</p>
          <p><strong>Followers:</strong> {data.followers}</p>
          <p><strong>Following:</strong> {data.following}</p>
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-2 inline-block"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    ) : (
      <p>Loading GitHub data... 🔄</p>
    )}
  </div>
);
}

export default GitHub;