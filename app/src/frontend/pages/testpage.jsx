import React, { useState } from 'react';
import OAuth from '../../backend/OAuth';

function Test() {
  const [showOAuth, setShowOAuth] = useState(false);

  const handleLoginClick = () => {
    setShowOAuth(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLoginClick}>Sign In with Google</button>
      {showOAuth && <OAuth />}
    </div>
  );
}

export default Test;