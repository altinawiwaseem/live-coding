import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {users.map((item) => (
        <div>
        <h3>id: {item.id} </h3>
          <h3> username: </h3>
          {item.username}
          <h3>Company: </h3>
          {item.company.name}
          <hr />
        </div>
      ))}
    </div>
  );
}
