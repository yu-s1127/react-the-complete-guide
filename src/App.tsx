import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import User from './types/User';

const App = () => {
  const [userList, setUsetList] = useState<Array<User>>([]);

  const onAddUser = (uName: string, uAge: string) => {
    setUsetList([
      ...userList,
      { username: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={userList} />
    </>
  );
};

export default App;
