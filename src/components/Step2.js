import React, { useState } from 'react';

const Step2 = ({ onNext }) => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [address, setAddress] = useState('');

  const handleChange = () => {
    onNext({ dateOfBirth, placeOfBirth, address });
  };

  return (
    <div>
      <h2>Step 2</h2>
      <label>
        Date of Birth:
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </label>
      <label>
        Place of Birth:
        <input
          type="text"
          value={placeOfBirth}
          onChange={(e) => setPlaceOfBirth(e.target.value)}
        />
      </label>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button onChange={handleChange}>Next</button>
    </div>
  );
};

export default Step2;
