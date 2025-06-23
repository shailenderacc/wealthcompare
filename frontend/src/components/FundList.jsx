import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FundList() {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/funds')
      .then(res => setFunds(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Available Funds</h2>
      <ul>
        {funds.map(fund => (
          <li key={fund._id}>
            <strong>{fund.name}</strong> - {fund.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FundList;