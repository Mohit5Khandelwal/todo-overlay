import './App.css';
import AddUser  from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from 'react';



function App() {

  const [ usersList, setUsersList ] = useState( [] );

  const addUserHandler = ( uName, uAge ) => {

    // When we update the list we use function 
      setUsersList( ( prevUserList ) => { 
        return  [ ...prevUserList, { name: uName, age: uAge, id: Math.random().toString() } ]; 
      } );
  };
  
  return (

    <div>

      <AddUser onAddUser = { addUserHandler } />
      <UserList users = { usersList } />

    </div>
  );
}

export default App;
