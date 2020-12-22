import React, { useState } from 'react';
import './App.css';
import NoAuthWebsite from './NoAuthWebsite';
import AuthWebsite from './AuthWebsite';

const App = () => {
  const [user, setUser] = useState<null | string>();

  return user ? (
    <AuthWebsite logout={() => setUser(null)} user={user!} />
  ) : (
    <NoAuthWebsite login={(username: any) => setUser(username)} />
  );
};

export default App;
