import { useState, memo, useCallback, useRef, useMemo } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

type User = {
  id: string,
  name: string
}

function App(){

  console.log("Render: App");

  const [users, setUsers]=useState([
    {
      id: 'a',
      name: "Kartikey"
    },
    {
      id: 'b',
      name: "Kirtika"
    },
    {
      id: 'c',
      name: "Uday Veer"
    }
  ]);

  const [text, setText]=useState('');
  const [search, setSearch]=useState('');
  const inputRef=useRef<HTMLInputElement>(null);

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
  }

  const handleSubmit=()=>{
    if(!inputRef.current) return;
    setSearch(inputRef.current.value);
  }

  

  function addUsers(){
    setUsers([...users, {id: uuidv4(), name: text}]);
    setText('');
    setSearch('');
    if(!inputRef.current) return;
    inputRef.current.value='';
  }

  const filteredUsers = useMemo(()=>
    users.filter(user=>user.name.toLowerCase()
    .startsWith(search.toLowerCase())),
    [search, users]);

  const removeUser=useCallback((item: User)=>{
    setUsers(prevUsers=>prevUsers.filter((user)=>user.id!==item.id));
  }, []);


  return(
    <div className="list-container">
      <h1>User List</h1>
      <label>Search: </label>
      <input ref={inputRef} />
      <button type="submit" onClick={handleSubmit} >Search</button><br/>
      <List users={filteredUsers} removeUser={removeUser} />
      <input className="user-input" type="text" onChange={handleChange} value={text} />
      <button className="add-btn" onClick={addUsers}>Add</button>
    </div>
  );

}

type ListProps = {
  users: User[],
  removeUser: (user: User)=>void
}

const List=memo(({users, removeUser}: ListProps)=>{

  console.log("Render: List")

  return(
    <ul className="user-list">
    {
      users.map(user=>(
        <ListItem key= {user.id} item={user} removeUser={removeUser} />
      ))
    }
    </ul>
  );
});

type ListItemProps = {
  item: User,
  removeUser: (user: User)=>void
}

const ListItem=memo(({item, removeUser}: ListItemProps)=>{

  console.log("Render: ListItem - "+ item.name);
  return(
    <li className="user-item">{item.name}
    <button className="remove-btn" type="button" onClick={()=>removeUser(item)}>Remove</button>
    </li>
  );
});

export default App;