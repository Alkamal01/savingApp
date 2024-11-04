import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ addMember }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [tier, setTier] = useState('Tier 1');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const tierAmounts = {
    'Tier 1': 10000,
    'Tier 2': 20000,
    'Tier 3': 30000,
  };

  const tierInterestRates = {
    'Tier 1': 0.05,
    'Tier 2': 0.10,
    'Tier 3': 0.20,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = tierAmounts[tier];

    if (name === '') {
      setError('Name is required.');
      return;
    }

    const weeklyInterest = amount * tierInterestRates[tier];
    const totalAmount = amount + weeklyInterest;

    addMember({ name, tier, weeklyInterest, totalAmount });

    navigate(`/dashboard/${name}`);

    setName('');
    setTier('Tier 1');
    setError('');
    setSuccessMessage(`Registration successful! Welcome, ${name}.`);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={tier} onChange={(e) => setTier(e.target.value)}>
        <option value="Tier 1">Tier 1 - 10,000 Naira</option>
        <option value="Tier 2">Tier 2 - 20,000 Naira</option>
        <option value="Tier 3">Tier 3 - 30,000 Naira</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
