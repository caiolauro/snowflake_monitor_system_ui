import React, { useState } from 'react';
import axios from 'axios';

const AlertForm = () => {
  const [monitorTitle, setMonitorTitle] = useState('');
  const [snowflakeQuery, setSnowflakeQuery] = useState('');
  const [thresholdDescription, setThresholdDescription] = useState('');
  const [cronExpression, setCronExpression] = useState('');
  const [team, setTeam] = useState('');
  const [msTeamsChannel, setMsTeamsChannel] = useState('');
  const [sendToDatadog, setSendToDatadog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const monitorData = {
      monitorTitle,
      snowflakeQuery,
      thresholdDescription,
      cronExpression,
      team,
      msTeamsChannel,
      sendToDatadog,
    };

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      await axios.post('YOUR_API_ENDPOINT', monitorData);

      // Optionally, you can add a success message or redirect the user
      console.log('Monitor created successfully!');
    } catch (error) {
      console.error('Error creating monitor:', error);
    }
  };

  return (
    <body>
      <link href="https://fonts.cdnfonts.com/css/apercu-mono-pro" rel="stylesheet"></link>
      <form onSubmit={handleSubmit}>
        <label>
          Monitor Title:
          <input type="text" value={monitorTitle} onChange={(e) => setMonitorTitle(e.target.value)} />
        </label>

        <label>
          Snowflake Query:
          <textarea value={snowflakeQuery} onChange={(e) => setSnowflakeQuery(e.target.value)} />
        </label>

        <label>
          Threshold Description:
          <textarea value={thresholdDescription} onChange={(e) => setThresholdDescription(e.target.value)} />
        </label>

        <label>
          Cron Expression:
          <input type="text" value={cronExpression} onChange={(e) => setCronExpression(e.target.value)} />
        </label>

        <label>
          Team:
          <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
        </label>

        <label>
          MS Teams Channel:
          <input type="text" value={msTeamsChannel} onChange={(e) => setMsTeamsChannel(e.target.value)} />
        </label>

        <label>
          Send to Datadog:
          <input type="checkbox" checked={sendToDatadog} onChange={() => setSendToDatadog(!sendToDatadog)} />
        </label>

        <button type="submit">Submit</button>
      </form>
    </body>
  );
};

export default AlertForm;
