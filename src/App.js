import React, { useState, useEffect } from 'react';

const AppliancesApp = () => {
  // Assuming you have an API endpoint to fetch appliances data
  const apiEndpoint = 'https://random-data-api.com/api/v2/appliances';

  const [appliancesData, setAppliancesData] = useState(null);

  useEffect(() => {
    // Fetch appliances data from the API
    const fetchAppliancesData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        setAppliancesData(data);
      } catch (error) {
        console.error('Error fetching appliances data:', error);
      }
    };

    fetchAppliancesData();
  }, []);

  return (
    <div className="appliances-app">
      <header>
        <h1>Appliances</h1>
      </header>
      <main>
        {appliancesData ? (
          <div className="appliances-info">
            <h2>Brand</h2>
            <p>{appliancesData.brand}</p>
            <h2>Appliance</h2>
            <p>{appliancesData.equipment}</p>
            {/* You can add more details or visualizations here */}
          </div>
        ) : (
          <p>Loading appliances data...</p>
        )}
      </main>
      <footer>
        <p>© 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default AppliancesApp;
