import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  console.log("text", text, "search", search);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  const hadleSearch = () => {
    setSearch(text);
    // setSearch(inputRef.current.value);
  };

  //   const filteredUsers = users.filter((user) => {
  //     return user.name.toLowerCase().includes(search.toLowerCase());
  //   });
  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [users, search]
  );
  //   console.log(filteredUsers);

  const addUser = useCallback(() => {
    setUsers([
      ...users,
      { id: users.length + 1, name: `User-${users.length - 9}` },
    ]);
  }, [users]);

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      {/* <input type="search" ref={inputRef} /> */}
      <button onClick={hadleSearch}>Search User</button>
      <Users users={filteredUsers} addUser={addUser} />
    </div>
  );
};

export default UseMemoCallBack;
