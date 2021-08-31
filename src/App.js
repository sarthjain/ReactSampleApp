import './App.css';
import Users from './Users';
import Header from './Header';
import { useState } from 'react';
import UserFeed from './UserFeed';

function App() {
  const [data, updateUserName] = useState({user: null});

  function backToMainPage() {
    updateUserName({user: null});
  }

  return (
    <div className="App">
      <Header userSelected = { data && data.user ? data.user.name : null } />
      { data.user ? <UserFeed userId = {data.user.id} backToMainPage = {backToMainPage} /> : <Users setSelectedUser = { updateUserName } /> }
    </div>
  );
}

export default App;