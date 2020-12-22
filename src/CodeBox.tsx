import React from 'react';

interface CodeBoxProps {
  authStatus: Boolean;
}
const CodeBox = ({ authStatus }: CodeBoxProps) => (
  <div>
    <pre>
      <code>
        {`const App = () => {`}
        <br />
        {`const [user, setUser] = useState(null);`}
        <br />
        <br />
        {`return user ? (`}
        <br />
        <div
          className={authStatus ? 'highlight' : ''}
        >{`    <AuthWebsite logout={() => setUser(null)} user={user} />`}</div>
        {`  ) : (`}
        <br />
        <div className={authStatus ? '' : 'highlight'}>
          {`    <NoAuthWebsite login={username => setUser(username)} />`}
        </div>
        {`  );`}
        <br />
        {`};`}
      </code>
    </pre>
  </div>
);

export default CodeBox;
