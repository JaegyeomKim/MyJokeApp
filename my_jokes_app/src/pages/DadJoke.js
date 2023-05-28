import React, { useState } from 'react';
import Card from '../component/Card';
import "../App.css"
import AddJoke from '../component/AddJoke';
function DadJoke() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const appStyles = {
    backgroundColor: '#222', // Set your desired background color here
    // Other styles...
  };

  return (
    <div style={appStyles}>
        <AddJoke handleRefresh={handleRefresh} />
        <p class="joke-title">Unlock the answer by clicking the card and bestowing it with a generous "like"!</p>
        <Card/>
    </div>
  );
} 

export default DadJoke;
