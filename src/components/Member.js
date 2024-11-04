// src/components/Member.js
import React from 'react';

const Member = ({ member, withdrawMember }) => {
  return (
    <div>
      <h3>{member.name} ({member.tier})</h3>
      <p>Weekly Interest: {member.weeklyInterest} Naira</p>
      <p>Total Amount: {member.totalAmount} Naira</p>
      <button onClick={() => withdrawMember(member.name)}>Withdraw</button>
    </div>
  );
};

export default Member;
