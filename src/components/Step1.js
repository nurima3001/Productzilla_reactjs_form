import React, { useState } from 'react';

const Step1 = ({ onChange }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [bootcamp, setBootcamp] = useState('');

  const handleChange = () => {
    onChange({ name, email, phoneNumber, bootcamp });
  };

  return (
    <div>
      <h2>Step 1</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        PhoneNumber:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <div>
        Bootcamp:
        <label>
          <input
            type="radio"
            value="UI/UX"
            checked={bootcamp === 'UI/UX'}
            onChange={() => setBootcamp('UI/UX')}
          />
          UI/UX
        </label>
        <label>
          <input
            type="radio"
            value="Backend Engineer"
            checked={bootcamp === 'Backend Engineer'}
            onChange={() => setBootcamp('Backend Engineer')}
          />
          Backend Engineer
        </label>
        <label>
          <input
            type="radio"
            value="Frontend Engineer"
            checked={bootcamp === 'Frontend Engineer'}
            onChange={() => setBootcamp('Frontend Engineer')}
          />
          Frontend Engineer
        </label>
        <label>
          <input
            type="radio"
            value="Digital Marketing"
            checked={bootcamp === 'Digital Marketing'}
            onChange={() => setBootcamp('Digital Marketing')}
          />
          Digital Marketing
        </label>
      </div>
      <button onChange={handleChange}>Next</button>
    </div>
  );
};

export default Step1;