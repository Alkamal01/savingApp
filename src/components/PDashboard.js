import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PDashboard = ({ members, removeMember }) => {
  const { name } = useParams();
  const navigate = useNavigate();
  const member = members.find((member) => member.name === name);

  if (!member) {
    return <p>Member not found.</p>;
  }

  const handleWithdraw = () => {
    removeMember(name);
    navigate('/');
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {member.name}</h2>
      <p>Tier: {member.tier}</p>
      <p>Weekly Interest: {member.weeklyInterest} Naira</p>
      <p>Total Amount (including interest): {member.totalAmount} Naira</p>
      <button onClick={handleWithdraw}>Withdraw and Leave Group</button>
    </div>
  );
};

export default PDashboard;
