import React from 'react';

const Dashboard = ({ members }) => {
  const totalSaved = members.reduce((acc, member) => acc + member.totalAmount, 0);

  return (
    <div className="dashboard">
      <h2>General Savings Dashboard</h2>
      <p>Total Savings from All Members: {totalSaved} Naira</p>
      <h3>Members Breakdown</h3>
      <ul>
        {members.map((member) => (
          <li key={member.name}>
            {member.name}: {member.totalAmount} Naira (Interest: {member.weeklyInterest} Naira)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;