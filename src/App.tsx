import { useState, memo, useCallback } from "react";
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

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value);
  }

  function addUsers(){
    setUsers([...users, {id: uuidv4(), name: text}]);
    setText('');
  }

  const removeUser=useCallback((item: User)=>{
    setUsers(prevUsers=>prevUsers.filter((user)=>user.id!==item.id));
  }, []);

  return(
    <div className="list-container">
      <h1>User List</h1>
    <List users={users} removeUser={removeUser} />
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
ṇ
type ListItemProps = {
  item: User,
  removeUser: (user: User)=>void
}

const ListItem=memo(({item, removeUser}: ListItemProps)=>{

  console.log("Render: ListItem");
  return(
    <li className="user-item">{item.name}
    <button className="remove-btn" type="button" onClick={()=>removeUser(item)}>Remove</button>
    </li>
  );
});

export default App;