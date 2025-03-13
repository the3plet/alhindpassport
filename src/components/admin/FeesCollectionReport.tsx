import React from 'react';
// import './FeesCollectionReport.css';

interface FeesCollectionReportProps {}

const FeesCollectionReport: React.FC<FeesCollectionReportProps> = () => {
  // Placeholder data - replace with actual data
  const reportData = [
    { date: '2024-03-10', amount: 1500 },
    { date: '2024-03-09', amount: 1200 },
    { date: '2024-03-08', amount: 1800 },
  ];

  return (
    <div className="fees-collection-report">
      <h2>Fees Collection Report</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeesCollectionReport;