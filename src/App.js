// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import IndividualDashboard from './components/PDashboard';
import GeneralDashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem('members');
    return savedMembers ? JSON.parse(savedMembers) : [];
  });

  useEffect(() => {
    localStorage.setItem('members', JSON.stringify(members));
  }, [members]);

  const addMember = (newMember) => {
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };

  const removeMember = (name) => {
    setMembers((prevMembers) => prevMembers.filter((member) => member.name !== name));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration addMember={addMember} />} />
        <Route path="/dashboard/:name" element={<IndividualDashboard members={members} removeMember={removeMember} />} />
        <Route path="/general-dashboard" element={<GeneralDashboard members={members} />} />
      </Routes>
    </Router>
  );
};

export default App;
