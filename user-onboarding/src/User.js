import React from "react";

export default function User(props) {
  const { data } = props;
  if (!data || !data.username) {
    return <h2>Sorry , we're working on it!</h2>;
  }

  console.log(data);

  return (
    <div className="user-container">
      <h2>{data.username}</h2>
      <p>{data.email}</p>
    </div>
  );
}
