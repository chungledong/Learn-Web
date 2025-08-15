import React, { useEffect } from "react";

const UserTitle = () => {
    // User information
  const [name, setName] = React.useState("");
  //const [title, setTitle] = React.useState("Software Engineer");
    // useState for title
    useEffect(() => {
      document.title = `${name} - User Profile`;
      console.log(`Title updated to: ${name}`);
    }, [name]);

    const handleNameChange = (event) => {
      setName(event.target.value);
    };

  return (
    <div>
      <h1>User title Update</h1>
      <p>Input my name: </p>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Title will change to: {name}</p>
    </div>
  );
};

export default UserTitle;
