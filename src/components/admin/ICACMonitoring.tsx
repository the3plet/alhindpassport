import React from 'react';
// import './ICACMonitoring.css';

interface ICACMonitoringProps {}

const ICACMonitoring: React.FC<ICACMonitoringProps> = () => {
  // Placeholder data - replace with actual monitoring data
  const icacData = [
    { location: 'Abu Dhabi', status: 'Operational' },
    { location: 'Dubai', status: 'Operational' },
    { location: 'Sharjah', status: 'Closed' },
  ];

  return (
    <div className="icac-monitoring">
      <h2>ICAC Monitoring</h2>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {icacData.map((item, index) => (
            <tr key={index}>
              <td>{item.location}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ICACMonitoring;