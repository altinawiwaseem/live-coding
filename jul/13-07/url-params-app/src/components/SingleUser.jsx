import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

export default function SingleUser() {
  const [user, setUser] = useState(null);
  

const { id } = useParams();
console.log(id)


  const fetchUser = (userId) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  console.log(user)
  useEffect(() => {
    fetchUser(id);
  }, [id]);

  return (
    <div>
      {user && (
        <div>
        <h1>id: {user.id} </h1>
          <h1>username:</h1> <h3> {user.username} </h3>
          <h1>Name:</h1> <h3> {user.name} </h3>
          <h1>Company:</h1> <h3> {user.company.name} </h3>
          <h1>email:</h1> <h3> {user.email} </h3>
          <h1>Phone:</h1> <h3> {user.phone} </h3>
        </div>
      )}
    </div>
  );
}
