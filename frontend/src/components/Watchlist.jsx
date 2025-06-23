import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Watchlist() {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/watchlist', {
      headers: { 'x-auth-token': token }
    })
      .then(res => setFunds(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Your Watchlist</h2>
      <ul>
        {funds.map(fund => (
          <li key={fund._id}>{fund.name} - {fund.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;