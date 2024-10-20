import React, { useState } from 'react';
import './App.css';
import Blood from './images/Blood.png'; // Ensure the path is correct

function App() {
  const [selectedMenu, setSelectedMenu] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const bloodGroups = [
    { type: 'A+', icon: '🩸' },
    { type: 'A-', icon: '🩸' },
    { type: 'B+', icon: '🩸' },
    { type: 'B-', icon: '🩸' },
    { type: 'O+', icon: '🩸' },
    { type: 'O-', icon: '🩸' },
    { type: 'AB+', icon: '🩸' },
    { type: 'AB-', icon: '🩸' }
  ];

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedBloodGroup(null);
  };

  const handleBloodGroupClick = (group) => {
    setSelectedBloodGroup(group);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Blood Bank</h1>
      </header>

      <div className="main-container">
        {/* Side Menu */}
        <aside className="sidebar">
          <h2>Menu</h2>
          <ul>
            <li onClick={() => handleMenuClick('donor')}>Donor</li>
            <li onClick={() => handleMenuClick('receiver')}>Receiver</li>
          </ul>
        </aside>

        {/* Body */}
        <div className="body-content">
          {selectedMenu === 'donor' || selectedMenu === 'receiver' ? (
            <>
              <h2>{selectedMenu === 'donor' ? 'Donor Blood Groups' : 'Receiver Blood Groups'}</h2>
              <div className="blood-group-cards">
                {bloodGroups.map((group) => (
                  <div className="card" key={group.type} onClick={() => handleBloodGroupClick(group.type)}>
                    <div className="icon">{group.icon}</div>
                    <div className="type">{group.type}</div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2>"Donate blood, save lives—your little contribution can make a big difference."</h2>
              <img className="Blood" src={Blood} alt="Blood Donation" width={100} height={100} />
            </>
          )}
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Success</h3>
            <p>You selected the blood group: {selectedBloodGroup}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
