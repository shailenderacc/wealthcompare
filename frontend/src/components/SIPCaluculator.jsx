import React, { useState } from 'react';

function SIPCalculator() {
  const [sipAmount, setSipAmount] = useState(10000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);
  const corpus = Math.round(
    sipAmount * ((Math.pow(1 + returnRate / 12 / 100, years * 12) - 1) / (returnRate / 12 / 100))
  );

  return (
    <div>
      <h2>SIP Calculator</h2>
      <input type="number" value={sipAmount} onChange={(e) => setSipAmount(e.target.value)} placeholder="Monthly SIP Amount" />
      <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Investment Years" />
      <input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} placeholder="Annual Return Rate (%)" />
      <p><strong>Final Corpus after {years} years:</strong> ₹{corpus.toLocaleString()}</p>
    </div>
  );
}

export default SIPCalculator;