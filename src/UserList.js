import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from a third-party API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="landing-page">
      <h1>Welcome to my Page</h1>
      <h2>API Data:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
