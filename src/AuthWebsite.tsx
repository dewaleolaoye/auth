import React from 'react';
import CodeBox from './CodeBox';

interface AuthStateProps {
  user: string | null;
  logout: () => void;
}

const AuthWebsite = ({ logout, user }: AuthStateProps) => {
  return (
    <div className='flex_column'>
      <h2>Hello, {user}</h2>
      <div className='logout_button' onClick={() => logout()}>
        logout
      </div>
      <CodeBox authStatus={true} />
    </div>
  );
};

export default AuthWebsite;
