import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

type User = {
  id: string,
  name: string
}

function App(){

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

  function addUsers(newUser: User){
    setUsers([...users, newUser]);
  }

  function removeUser(id: string){
    setUsers(users.filter((user)=>user.id!==id));
  }

  return(
    <>
    <List users={users} removeUser={removeUser} />
    <AddUserButton addUsers={addUsers} />
    </>
  );

}

type ListProps = {
  users: User[],
  removeUser: (id: string)=>void
}

function List({users, removeUser}: ListProps){

  return(
    <ul className="user-list">
    {
      users.map(user=>(
        <ListItem key= {user.id} item={user} removeUser={removeUser} />
      ))
    }
    </ul>
  );

}

type ListItemProps = {
  item: User,
  removeUser: (id:string)=>void
}

function ListItem({item, removeUser}: ListItemProps){
  return(
    <li className="user-item">{item.name}
    &nbsp;
    <RemoveItemButton id={item.id} removeUser={removeUser} />
    </li>
  );
}

type AddUserButtonProps = {
  addUsers: ((newUser: User)=>void)
}

function AddUserButton({addUsers}: AddUserButtonProps){

  const [text, setText]=useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setText(e.target.value);
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    addUsers({id: uuidv4(), name: text});
    setText('');
  }

  return(
    <form onSubmit={handleSubmit}>
      <input className="user-input" onChange={handleChange} value={text} />
      <button className="add-btn" type="submit">Add User</button>
    </form>
  );
}

type RemoveUserProps = {
  removeUser: (id: string)=>void,
  id: string
}


function RemoveItemButton({removeUser, id}: RemoveUserProps){
  return(
    <button className="remove-btn" onClick={()=>removeUser(id)}>Remove User</button>
  )
}

export default App;