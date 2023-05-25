import React, { useState } from 'react';

const Step3 = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ password, confirmPassword });
  };

  return (
    <div>
      <h2>Step 3</h2>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <button onChange={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
