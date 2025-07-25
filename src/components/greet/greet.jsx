import React, { useEffect, useState } from "react";

function Greet({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 5000);
  },[]);

  function sayCheese(user) {
    if(!user) {
      return <span>Cheese!</span>;
    }
    return <span>Goood!</span>;
  }
  if (!data) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      {username ? <h1>Hello {username}</h1> : <h1>Hello Guest</h1>}

{sayCheese(username)}
      {username && <span>Welcome to the site!</span>}
    </div>
  );
}

export default Greet;
