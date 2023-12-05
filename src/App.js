import React, { useState, useEffect } from 'react';

const MoistureApp = () => {
  // Assuming you have an API endpoint to fetch moisture data
  const apiEndpoint = 'https://random-data-api.com/api/v2/credit_cards';

  const [moistureData, setMoistureData] = useState(null);

  useEffect(() => {
    // Fetch moisture data from the API
    const fetchMoistureData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        console.log(data)
        setMoistureData(data.credit_card_number);
      } catch (error) {
        console.error('Error fetching moisture data:', error);
      }
    };

    fetchMoistureData();
  }, []);

  return (
    <div className="moisture-app">
      <header>
        <h1>Moisture Dashboard</h1>
      </header>
      <main>
        {moistureData ? (
          <div className=".moisture-info">
            <h2>Current Moisture Level</h2>
            <p>{moistureData}%</p>
            {/* You can add more details or visualizations here */}
          </div>
        ) : (
          <p>Loading moisture data...</p>
        )}
      </main>
      <footer>
        <p>© 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default MoistureApp;
