import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";

const Profile = () => {
  const [data, setData] = useState({});
  const [user, setUser] = useState("");

  const onChangeHandler = (e) => {
    setUser(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = `https://api.github.com/users/${user}`;
    const profile = await fetch(url);
    const profileJSON = await profile.json();

    if (profileJSON) {
      setData(profileJSON);
    }
  };

  return (
    <>
      <Form.Control
        onChange={onChangeHandler}
        className="w-25"
        value={user}
        type="text"
        placeholder="Search..."
      />
      <Button type="submit" onClick={submitHandler}>
        Search
      </Button>

      <ul>
        <img src={data.avatar_url} alt="" />
        <li>{data.login}</li>
        <li>{data.location}</li>
        <li>{data.url}</li>
        <li>{data.repos_url}</li>
      </ul>
    </>
  );
};

export default Profile;
